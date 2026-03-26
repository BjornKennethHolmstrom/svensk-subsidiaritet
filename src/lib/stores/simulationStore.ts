// $lib/stores/simulationStore.ts
import { writable, derived, get } from 'svelte/store';
import { DynamicsEngine, type SimulationParams, type Architecture } from '$lib/utils/dynamics';
import { LatencySimulator, calculateMaxGain } from '$lib/utils/latency';

// Types
export interface SimulationState {
  architecture: Architecture;
  complexity: number;
  disturbanceMix: number;
  currentStates: number[];
  history: number[][];
  mismatchPenalty: number;
  systemResilience: number;
  pendingSignals: number;
  latencyMs: number;
  isRunning: boolean;
  simulationTime: number;
  lastTimestamp: number;
}

export interface SimulationMetrics {
  averageState: number;
  stateVariance: number;
  stabilityScore: number;
  coherenceScore: number;
  frequencyCoverage: {
    fast: boolean;
    medium: boolean;
    slow: boolean;
  };
}

// Initial state
const initialState: SimulationState = {
  architecture: 'centralized',
  complexity: 0.5,
  disturbanceMix: 0.5,
  currentStates: [100, 100, 100, 100, 100],
  history: [],
  mismatchPenalty: 0,
  systemResilience: 100,
  pendingSignals: 0,
  latencyMs: 2000,
  isRunning: true,
  simulationTime: 0,
  lastTimestamp: 0
};

// Core stores
export const simulationState = writable<SimulationState>(initialState);
export const dynamicsEngine = writable<DynamicsEngine | null>(null);
export const latencySimulator = writable<LatencySimulator | null>(null);
export const animationFrameId = writable<number | null>(null);

// Derived metrics (Adjusted for 0-200 scale and StdDev)
export const metrics = derived(simulationState, ($state): SimulationMetrics => {
  const avg = $state.currentStates.reduce((a, b) => a + b, 0) / $state.currentStates.length;
  // Use true Variance
  const variance = $state.currentStates.reduce((sum, s) => sum + Math.pow(s - avg, 2), 0) / $state.currentStates.length;
  const stdDev = Math.sqrt(variance); // Standard Deviation is linear, much better for scoring
  
  const stabilityScore = Math.max(0, 100 - Math.abs(avg - 100));
  
  // FIX 1: Coherence score uses StdDev instead of raw variance so it doesn't instantly hit zero
  const coherenceScore = Math.max(0, 100 - stdDev);
  
  return {
    averageState: avg,
    stateVariance: variance,
    stabilityScore,
    coherenceScore,
    frequencyCoverage: {
      fast: $state.architecture === 'fractal',
      medium: $state.architecture !== 'centralized',
      slow: true
    }
  };
});

// Paper I: Averaging problem penalty
export const averagingPenalty = derived(simulationState, ($state) => {
    const target = 100;
    const deviations = $state.currentStates.map(s => Math.abs(s - target));
    return deviations.reduce((a, b) => a + b, 0) / deviations.length;
});

// Paper II: Frequency gap indicator
export const frequencyGap = derived(metrics, ($metrics) => {
    const uncoveredBands = [];
    if (!$metrics.frequencyCoverage.fast) uncoveredBands.push('fast');
    if (!$metrics.frequencyCoverage.medium) uncoveredBands.push('medium');
    if (!$metrics.frequencyCoverage.slow) uncoveredBands.push('slow');
    
    return {
      hasGap: uncoveredBands.length > 0,
      uncoveredBands,
      coverageScore: (3 - uncoveredBands.length) / 3 * 100
    };
});

// Paper III: SNR calculation
export const signalToNoiseRatio = derived(simulationState, ($state) => {
    // FIX 2: Calculate underlying spatial variance accurately
    const avg = $state.currentStates.reduce((a, b) => a + b, 0) / $state.currentStates.length;
    const signalVariance = $state.currentStates.reduce((sum, s) => sum + Math.pow(s - avg, 2), 0) / $state.currentStates.length;
    
    let noiseVariance = 1;
    if ($state.architecture === 'centralized') noiseVariance = 200; // Heavy data destruction
    else if ($state.architecture === 'localOnly') noiseVariance = 10;
    else if ($state.architecture === 'fractal') noiseVariance = 20; 
    
    const snr = (signalVariance + 1) / noiseVariance; 
    
    return {
      snr,
      isObservable: snr > 1,
      confidence: Math.min(100, snr * 50)
    };
});

// Paper IV: Requisite variety match
export const requisiteVariety = derived(simulationState, ($state) => {
    let observedDimensions = 1;
    if ($state.architecture === 'localOnly') observedDimensions = 2;
    if ($state.architecture === 'fractal') observedDimensions = 4;
    
    // FIX 3: Cap required dimensions at 4 so Fractal can actually succeed at max complexity
    const requiredDimensions = 1 + Math.round($state.complexity * 3);
    const hasVariety = observedDimensions >= requiredDimensions;
    const varietyGap = Math.max(0, requiredDimensions - observedDimensions);
    
    return {
      observedDimensions,
      requiredDimensions,
      hasVariety,
      varietyGap,
      stabilityPotential: hasVariety ? 100 : Math.max(0, 100 - varietyGap * 25)
    };
});

// Paper V: Coordination failure tax
export const coordinationFailureTax = derived(
  [metrics, frequencyGap, signalToNoiseRatio, requisiteVariety],
  ([$metrics, $frequencyGap, $snr, $variety]) => {
    
    // 1. Spatial blindness penalty
    const f1 = 1 - ($metrics.coherenceScore / 100);
    // 2. Frequency gap penalty
    const f2 = 1 - ($frequencyGap.coverageScore / 100);
    // 3. SNR penalty (if SNR > 1, no penalty)
    const f3 = $snr.snr >= 1 ? 0 : 1 - $snr.snr;
    // 4. Variety penalty
    const f4 = 1 - ($variety.stabilityPotential / 100);
    
    // Multiply the surviving capacities (Paper V formula)
    const effectiveCapacity = (1 - f1) * (1 - f2) * (1 - f3) * (1 - f4);
    
    // Convert to a tax rate
    const taxRate = (1 - effectiveCapacity) * 100;
    
    return {
      taxRate,
      effectiveCapacity,
      breakdown: { f1, f2, f3, f4 }
    };
  }
);

// Actions
export function initializeSimulation() {
  const params: SimulationParams = {
    growthRate: 0.98,
    actuatorEffect: 1.0,
    couplingStrength: 0.02,
    noiseLevel: 0.1
  };
  
  const engine = new DynamicsEngine(5, params);
  const latency = new LatencySimulator(2000);
  
  dynamicsEngine.set(engine);
  latencySimulator.set(latency);
  
  simulationState.update(state => ({
    ...state,
    currentStates: engine.getCurrentStates(),
    history: engine.getHistory(),
    latencyMs: 2000,
    simulationTime: 0
  }));
}

export function stepSimulation(deltaTime: number) {
  const engine = get(dynamicsEngine);
  const state = get(simulationState);
  
  if (!engine) return;
  
  const newTime = state.simulationTime + deltaTime;
  
  // 1. Let our advanced math engine do all the work
  const { newStates, penalty } = engine.step(
      state.complexity,
      state.disturbanceMix,
      state.architecture,
      newTime,
      state.latencyMs
  );
  
  // 2. Inject random manual manual shocks (from your existing function)
  injectDisturbances(engine, state, deltaTime);
  
  // 3. Update the Svelte store to trigger the UI animations
  simulationState.update(s => ({
    ...s,
    currentStates: engine.getCurrentStates(),
    history: engine.getHistory(),
    mismatchPenalty: s.mismatchPenalty + (penalty * deltaTime / 1000), // Accumulate the tax
    systemResilience: Math.max(0, 100 - (penalty * 10)), // Visual resilience proxy
    simulationTime: newTime
  }));
}

function injectDisturbances(engine: DynamicsEngine, state: SimulationState, deltaTime: number): number[] | null {
  // Simplified disturbance injection for store version
  // Full implementation would track time-based patterns
  if (state.architecture === 'centralized' && state.complexity > 0.7) {
    if (Math.random() < 0.01) {
      engine.applyDisturbance('fast', -35 * state.complexity);
      return engine.getCurrentStates();
    }
  }
  
  if (state.disturbanceMix > 0.6) {
    if (Math.random() < 0.005) {
      engine.applyDisturbance('slow', -8);
      return engine.getCurrentStates();
    }
  }
  
  if (state.architecture !== 'centralized' && state.disturbanceMix < 0.4) {
    if (Math.random() < 0.01) {
      engine.applyDisturbance('medium', -12);
      return engine.getCurrentStates();
    }
  }
  
  return null;
}

// Reset simulation
export function resetSimulation() {
  const frame = get(animationFrameId);
  if (frame) cancelAnimationFrame(frame);
  
  dynamicsEngine.set(null);
  latencySimulator.set(null);
  animationFrameId.set(null);
  
  simulationState.set({
    ...initialState,
    currentStates: [100, 100, 100, 100, 100],
    history: []
  });
  
  initializeSimulation();
}

// Export stores as a unified API
export default {
  state: simulationState,
  metrics,
  averagingPenalty,
  frequencyGap,
  signalToNoiseRatio,
  requisiteVariety,
  coordinationFailureTax,
  initialize: initializeSimulation,
  step: stepSimulation,
  reset: resetSimulation
};
