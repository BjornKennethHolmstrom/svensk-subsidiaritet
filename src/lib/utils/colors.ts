// colors.ts
export function stateToColor(state: number, minState: number = 0, maxState: number = 200): string {
  // Normalize to 0-1 range
  const t = (state - minState) / (maxState - minState);
  
  // RdYlGn colormap: red (0) -> yellow (0.5) -> green (1)
  if (t < 0.5) {
    // Red to yellow
    const r = 255;
    const g = Math.floor(255 * (t * 2));
    const b = 0;
    return `rgb(${r}, ${g}, ${b})`;
  } else {
    // Yellow to green
    const r = Math.floor(255 * (1 - (t - 0.5) * 2));
    const g = 255;
    const b = 0;
    return `rgb(${r}, ${g}, ${b})`;
  }
}

export function fidelityToOpacity(fidelity: number): number {
  // Lower fidelity = more transparent (noisy signal)
  return Math.max(0.3, Math.min(1, fidelity));
}

export function latencyToLineStyle(latency: number): string {
  // Higher latency = dashed/dotted lines
  if (latency > 5) return 'dashed';
  if (latency > 2) return 'dotted';
  return 'solid';
}
