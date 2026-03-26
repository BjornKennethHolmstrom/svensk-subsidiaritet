<!-- Environment.svelte -->
<script lang="ts">
  import type { Architecture } from '$lib/utils/dynamics';
  import { stateToColor } from '$lib/utils/colors';
  
  export let states: number[];
  export let architecture: Architecture;
  
  // Y-axis pushed down to 330 to give the governance layers room to breathe
  const municipalities = [
    { id: 0, name: 'Coastal North', x: 100, y: 330 },
    { id: 1, name: 'Forest District', x: 250, y: 330 },
    { id: 2, name: 'Urban Core', x: 400, y: 330 },
    { id: 3, name: 'Agri Plain', x: 550, y: 330 },
    { id: 4, name: 'Mountain South', x: 700, y: 330 }
  ];
</script>

{#each municipalities as muni, i}
  <g transform={`translate(${muni.x}, ${muni.y})`}>
    <circle 
      r="35" 
      fill={stateToColor(states[i])}
      stroke={architecture === 'centralized' ? '#ff4444' : '#44ff44'}
      stroke-width="2"
      class="municipality"
    />
    <text x="0" y="55" text-anchor="middle" fill="#aaa" font-size="11" font-weight="600">
      {muni.name}
    </text>
    <text x="0" y="5" text-anchor="middle" fill="#000" font-size="14" font-weight="bold" opacity="0.8">
      {Math.round(states[i])}
    </text>
  </g>
{/each}

<style>
  .municipality {
    transition: fill 0.1s ease;
    filter: drop-shadow(0 0 5px rgba(0,0,0,0.5));
  }
  
  @keyframes pulse {
    0% { r: 40; opacity: 0.8; }
    100% { r: 50; opacity: 0; }
  }
  
  .pulse {
    animation: pulse 1s infinite;
  }
</style>
