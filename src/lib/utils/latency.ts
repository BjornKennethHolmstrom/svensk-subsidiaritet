// latency.ts
export interface LatencyQueueEntry {
  timestamp: number;
  controlSignal: number;
  targetNode: number;
}

export class LatencySimulator {
  private queue: LatencyQueueEntry[] = [];
  private latencyMs: number;      // τ in milliseconds
  private lastProcessTime: number = 0;

  constructor(latencyMs: number = 2000) { // 2 seconds = low latency
    this.latencyMs = latencyMs;
  }

  setLatency(ms: number) {
    this.latencyMs = ms;
  }

  sendControl(nodeId: number, signal: number, timestamp: number) {
    this.queue.push({
      timestamp: timestamp + this.latencyMs,
      controlSignal: signal,
      targetNode: nodeId
    });
  }

  processQueue(currentTime: number): Map<number, number> {
    const outputs = new Map<number, number>();
    const toProcess = this.queue.filter(entry => entry.timestamp <= currentTime);
    
    for (const entry of toProcess) {
      const current = outputs.get(entry.targetNode) || 0;
      outputs.set(entry.targetNode, current + entry.controlSignal);
    }
    
    this.queue = this.queue.filter(entry => entry.timestamp > currentTime);
    return outputs;
  }

  getQueueLength(): number {
    return this.queue.length;
  }

  getPendingSignals(): number {
    return this.queue.reduce((sum, entry) => sum + entry.controlSignal, 0);
  }
}

// Paper I gain ceiling calculator
export function calculateMaxGain(latency: number, systemDynamics: number): number {
  // K_max ≈ 1 / (τ · |A|) from Paper I
  return 1 / (latency * Math.abs(systemDynamics));
}

export function calculateControllableFrequency(latency: number): number {
  // f_max ≈ 1 / (2·τ) from Paper II
  return 1 / (2 * latency);
}
