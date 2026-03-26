<!-- GovernanceLayer.svelte -->
<script lang="ts">
  import type { Architecture } from '$lib/utils/dynamics';
  import { stateToColor } from '$lib/utils/colors';
  
  export let architecture: Architecture;
  export let states: number[];
  export let latency: number; // passed as seconds (e.g., 2.0)
  
  // Perfectly centered coordinates
  const centralX = 400; 
  const centralY = 70;
  
  const muniX = [100, 250, 400, 550, 700];
  const localY = 240;
  const regY = 130;
  
  // Region centers mathematically aligned above their specific municipalities
  const reg1X = 250; // Centers over nodes 0, 1, 2
  const reg2X = 625; // Centers over nodes 3, 4
</script>

{#if architecture === 'centralized'}
  <g transform={`translate(${centralX}, ${centralY})`}>
    <rect x="-60" y="-30" width="120" height="60" fill="#2a2a2a" stroke="#ff4444" stroke-width="2" rx="8" />
    <text x="0" y="-5" text-anchor="middle" fill="#ff4444" font-size="12" font-weight="bold">CENTRAL</text>
    <text x="0" y="15" text-anchor="middle" fill="#e0e0e0" font-size="10">τ = {latency.toFixed(1)}s</text>
  </g>

{:else if architecture === 'localOnly'}
  {#each muniX as x, i}
    <g transform={`translate(${x}, ${localY})`}>
      <rect x="-35" y="-20" width="70" height="40" fill="#1a1a1a" stroke={stateToColor(states[i])} stroke-width="2" rx="6" />
      <text x="0" y="4" text-anchor="middle" fill="#88ff88" font-size="10" font-weight="bold">LOCAL</text>
    </g>
  {/each}

{:else if architecture === 'fractal'}
  <g transform={`translate(${reg1X}, ${regY})`}>
    <rect x="-70" y="-20" width="140" height="40" fill="#1a2a1a" stroke="#88ff88" stroke-width="2" rx="6" />
    <text x="0" y="4" text-anchor="middle" fill="#88ff88" font-size="10" font-weight="bold">REGION 1 (τ = {(latency*0.25).toFixed(2)}s)</text>
  </g>
  
  <g transform={`translate(${reg2X}, ${regY})`}>
    <rect x="-60" y="-20" width="120" height="40" fill="#1a2a1a" stroke="#88ff88" stroke-width="2" rx="6" />
    <text x="0" y="4" text-anchor="middle" fill="#88ff88" font-size="10" font-weight="bold">REGION 2 (τ = {(latency*0.25).toFixed(2)}s)</text>
  </g>

  {#each muniX as x, i}
    <g transform={`translate(${x}, ${localY})`}>
      <rect x="-35" y="-15" width="70" height="30" fill="#2a2a2a" stroke={stateToColor(states[i])} stroke-width="2" rx="4" />
      <text x="0" y="3" text-anchor="middle" fill="#e0e0e0" font-size="9">LOCAL {i+1}</text>
    </g>
  {/each}
{/if}
