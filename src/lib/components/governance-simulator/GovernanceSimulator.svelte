<!-- GovernanceSimulator.svelte -->
<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { get } from 'svelte/store';
  import Environment from './Environment.svelte';
  import GovernanceLayer from './GovernanceLayer.svelte';
  import ConnectionLines from './ConnectionLines.svelte';
  import Controls from './Controls.svelte';
  import MetricsPanel from './MetricsPanel.svelte';
  import SignalPlot from './SignalPlot.svelte';
  
  // Import from store
  import simulationStore, { 
    simulationState, 
    metrics, 
    coordinationFailureTax,
    frequencyGap,
    requisiteVariety,
    signalToNoiseRatio
  } from '$lib/stores/simulationStore';
  
  export let architecture: 'centralized' | 'localOnly' | 'fractal' = 'centralized';
  export let complexity: number = 0.5;
  export let disturbanceMix: number = 0.5;
  
  let animationFrame: number;
  let lastTimestamp = 0;
  
  // Subscribe to store values for reactive updates
  let currentStates: number[] = [];
  let history: number[][] = [];
  let mismatchPenalty = 0;
  let systemResilience = 100;
  let pendingSignals = 0;
  let latencyMs = 2000;
  
  const unsubscribe = simulationState.subscribe(state => {
    currentStates = state.currentStates;
    history = state.history;
    mismatchPenalty = state.mismatchPenalty;
    systemResilience = state.systemResilience;
    pendingSignals = state.pendingSignals;
    latencyMs = state.latencyMs;
  });
  
  // Update parameters when they change
  $: {
    simulationState.update(state => ({
      ...state,
      architecture,
      complexity,
      disturbanceMix
    }));
  }
  
  onMount(() => {
    simulationStore.initialize();
    startSimulation();
    
    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      unsubscribe();
    };
  });
  
  function startSimulation() {
    let lastUpdate = performance.now();
    
    function update(timestamp: number) {
      const delta = Math.min(100, timestamp - lastUpdate);
      lastUpdate = timestamp;
      
      // Step the simulation
      simulationStore.step(delta);
      
      animationFrame = requestAnimationFrame(update);
    }
    
    animationFrame = requestAnimationFrame(update);
  }
</script>

<div class="simulator-container">
  <div class="simulation-area">
    <svg class="simulation-svg" viewBox="0 0 900 400">
      <GovernanceLayer 
        {architecture}
        states={currentStates}
        latency={latencyMs / 1000}
      />

      <Environment 
        states={currentStates}
        {architecture}
      />

      <ConnectionLines 
        {architecture}
        states={currentStates}
        {pendingSignals}
      />

    </svg>

    <SignalPlot {history} />

  </div>
  
  <div class="controls-panel">
    <Controls 
      bind:architecture 
      bind:complexity 
      bind:disturbanceMix
    />
    
    <MetricsPanel 
      averageState={$metrics.averageState}
      stateVariance={$metrics.stateVariance}
      mismatchPenalty={mismatchPenalty}
      systemResilience={systemResilience}
      pendingSignals={pendingSignals}
      latency={latencyMs / 1000}
      coordinationTax={$coordinationFailureTax.taxRate}
      frequencyCoverage={$frequencyGap.coverageScore}
      requisiteVariety={$requisiteVariety.stabilityPotential}
      snr={$signalToNoiseRatio.snr}
    />
  </div>
</div>

<style>
  .simulator-container {
    display: flex;
    gap: 2rem;
    padding: 2rem;
    background: #0a0a0a;
    color: #e0e0e0;
    font-family: 'Inter', monospace;
  }
  
  .simulation-area {
    flex: 2;
    flex-direction: column;
    position: relative;
    min-height: 500px;
    background: #0f0f0f;
    border-radius: 12px;
    border: 1px solid #2a2a2a;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  
  .simulation-svg {
    width: 100%;
    height: 100%;
    min-height: 500px;
  }
  
  .controls-panel {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  @media (max-width: 768px) {
    .simulator-container {
      flex-direction: column;
    }
  }
</style>
