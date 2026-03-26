export type Architecture = 'centralized' | 'localOnly' | 'fractal';

export interface Municipality {
    id: number;
    state: number;           // 0 to 200 (Used by the UI to draw colors)
    demandValue: number;     // -1.0 to 1.0 (Used by the math engine)
    baseFrequency: number;
    phaseOffset: number;
    shockTarget: number;
    currentShock: number;
}

// 1. Restore the Class so simulationStore.ts can call `new DynamicsEngine()`
export class DynamicsEngine {
    public municipalities: Municipality[];
    private history: number[][] = []; 
    
    // NEW: Add the memory queues directly to the class
    private centralQueue: { time: number, val: number }[] = [];
    private regionalQueues = { r1: [] as {time: number, val: number}[], r2: [] as {time: number, val: number}[] };

    constructor(numMunicipalities: number = 5, params: any = {}) {
        this.municipalities = Array.from({ length: numMunicipalities }).map((_, i) => ({
            id: i,
            state: 100, 
            demandValue: 0,
            baseFrequency: 0.0005 + (Math.random() * 0.001),
            phaseOffset: Math.random() * Math.PI * 2,
            shockTarget: 0,
            currentShock: 0
        }));
        this.history.push(this.getCurrentStates());
    }

    // NEW: The step function that bridges the math to your Svelte store
    step(complexity: number, disturbanceMix: number, architecture: Architecture, timeNow: number, latencyMs: number) {
        // 1. Update the environment (adds shocks and drift)
        updateEnvironment(this.municipalities, complexity, disturbanceMix, timeNow);
        
        // 2. Apply governance (calculates latency, averaging, and penalty)
        const { nodeOutputs, penalty } = updateGovernance(
            architecture, 
            this.municipalities, 
            this.centralQueue, 
            this.regionalQueues, 
            timeNow, 
            latencyMs
        );
        
        // 3. Save to history
        this.recordCurrentState();
        
        return { newStates: this.getCurrentStates(), penalty };
    }

    getCurrentStates(): number[] {
        return this.municipalities.map(m => m.state);
    }

    getHistory(): number[][] {
        return this.history;
    }

    recordCurrentState() {
        this.history.push(this.getCurrentStates());
        if (this.history.length > 500) this.history.shift();
    }

    applyDisturbance(type: 'fast' | 'medium' | 'slow', magnitude: number) {
        const normalizedMagnitude = magnitude / 100;
        this.municipalities.forEach(m => {
            if (Math.random() > 0.5) m.shockTarget += normalizedMagnitude;
        });
    }
}

// 2. The Environment Engine
export function updateEnvironment(
    municipalities: Municipality[], 
    complexityRaw: number,
    disturbanceRaw: number,
    timeNow: number
) {
    // Normalize sliders
    const complexity = complexityRaw > 1 ? complexityRaw / 100 : Math.max(0, complexityRaw);
    const disturbanceMix = disturbanceRaw > 1 ? disturbanceRaw / 100 : Math.max(0, disturbanceRaw);

    municipalities.forEach(m => {
        const slowDrift = Math.sin((timeNow * m.baseFrequency) + m.phaseOffset);
        
        if (Math.random() < 0.02 + (complexity * 0.05)) {
            m.shockTarget = (Math.random() * 2 - 1); 
        }
        
        m.currentShock += (m.shockTarget - m.currentShock) * 0.2;
        const rawTarget = (slowDrift * (1 - disturbanceMix)) + (m.currentShock * disturbanceMix);
        const amplitude = 0.2 + (complexity * 0.8);
        const finalTarget = rawTarget * amplitude;

        m.demandValue += (finalTarget - m.demandValue) * 0.1;
        m.demandValue = Math.max(-1, Math.min(1, m.demandValue));

        // CRITICAL: Map the math (-1 to 1) to the UI Color Scale (0 to 200)
        m.state = 100 + (m.demandValue * 100);
    });
}

// 3. The Governance Engine
export function updateGovernance(
    mode: Architecture,
    municipalities: Municipality[],
    centralQueue: { time: number, val: number }[],
    regionalQueues: { r1: {time: number, val: number}[], r2: {time: number, val: number}[] },
    timeNow: number,
    latencyMs: number
) {
    let penalty = 0;
    let nodeOutputs: number[] = [];

    if (mode === 'centralized') {
        const avg = municipalities.reduce((sum, m) => sum + m.demandValue, 0) / municipalities.length;
        centralQueue.push({ time: timeNow, val: avg });
        
        const delayedState = centralQueue.find(q => timeNow - q.time >= latencyMs) || centralQueue[0];
        const output = delayedState ? delayedState.val : avg;
        
        municipalities.forEach(m => penalty += Math.abs(m.demandValue - output));
        
        // Map output back to UI scale (0-200) for the rendering lines
        nodeOutputs = Array(municipalities.length).fill(100 + (output * 100));

    } else if (mode === 'localOnly') {
        municipalities.forEach(m => {
            nodeOutputs.push(100 + (m.demandValue * 100));
        });

    } else if (mode === 'fractal') {
        const r1Avg = (municipalities[0].demandValue + municipalities[1].demandValue + municipalities[2].demandValue) / 3;
        const r2Avg = (municipalities[3].demandValue + municipalities[4].demandValue) / 2;
        
        const fractalLatency = latencyMs * 0.25; 
        
        regionalQueues.r1.push({ time: timeNow, val: r1Avg });
        regionalQueues.r2.push({ time: timeNow, val: r2Avg });
        
        const d1 = regionalQueues.r1.find(q => timeNow - q.time >= fractalLatency) || regionalQueues.r1[0];
        const d2 = regionalQueues.r2.find(q => timeNow - q.time >= fractalLatency) || regionalQueues.r2[0];
        
        const out1 = d1 ? d1.val : r1Avg;
        const out2 = d2 ? d2.val : r2Avg;
        
        nodeOutputs = [
            100 + (out1 * 100), 100 + (out1 * 100), 100 + (out1 * 100), 
            100 + (out2 * 100), 100 + (out2 * 100)
        ];
        
        municipalities.forEach((m, i) => {
            const out = i < 3 ? out1 : out2;
            penalty += Math.abs(m.demandValue - out);
        });
    }

    // Cleanup queues
    while (centralQueue.length > 0 && timeNow - centralQueue[0].time > latencyMs + 1000) centralQueue.shift();
    if (regionalQueues?.r1) {
        while (regionalQueues.r1.length > 0 && timeNow - regionalQueues.r1[0].time > latencyMs) regionalQueues.r1.shift();
        while (regionalQueues.r2.length > 0 && timeNow - regionalQueues.r2[0].time > latencyMs) regionalQueues.r2.shift();
    }

    return { nodeOutputs, penalty };
}
