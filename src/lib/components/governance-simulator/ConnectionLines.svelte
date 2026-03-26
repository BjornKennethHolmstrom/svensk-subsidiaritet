<!-- ConnectionLines.svelte -->
<script lang="ts">
  import type { Architecture } from '$lib/utils/dynamics';
  
  export let architecture: Architecture;
  export let states: number[];
  export let pendingSignals: number;
  
  const centralX = 450;
  const centralY = 100;
  
  const municipalityPositions = [
    { x: 100, y: 300 },
    { x: 250, y: 300 },
    { x: 400, y: 300 },
    { x: 550, y: 300 },
    { x: 700, y: 300 }
  ];
</script>

{#if architecture === 'centralized'}
  {#each municipalityPositions as pos, i}
    <line
      x1={centralX}
      y1={centralY + 30}
      x2={pos.x}
      y2={pos.y - 35}
      stroke={states[i] < 60 ? '#ff4444' : '#666'}
      stroke-width={states[i] < 60 ? '3' : '1.5'}
      stroke-dasharray={pendingSignals > 50 ? '5,5' : 'none'}
      class="connection"
    />
  {/each}
{:else if architecture === 'fractal'}
  {#each municipalityPositions as pos}
    <line
      x1={pos.x}
      y1={pos.y - 80 + 20}
      x2={450}
      y2={160 + 20}
      stroke="#88ff88"
      stroke-width="1"
      stroke-opacity="0.3"
      class="connection"
    />
  {/each}
{/if}

<style>
  .connection {
    transition: stroke 0.2s ease;
  }
</style>
