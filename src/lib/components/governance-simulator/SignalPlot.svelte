<script lang="ts">
  export let history: number[][] = [];
  
  // Distinct colors for the 5 municipalities
  const colors = ['#ff4444', '#ffaa44', '#ffff44', '#44ff44', '#44aaff'];
  
  // Plot dimensions
  const width = 800;
  const height = 150;
  
  // How many frames to show on the screen at once
  const maxPoints = 150; 
  
  // Reactively grab the latest window of history
  $: plotData = history.slice(-maxPoints);
  
  // Scaling functions
  $: getX = (index: number) => (index / Math.max(1, maxPoints - 1)) * width;
  
  // Y-axis: 0 to 200 (where 100 is perfectly stable)
  // We flip the Y-axis because SVG coordinates start from the top-left
  $: getY = (val: number) => height - (val / 200) * height;
  
  // Generate SVG path strings for all 5 lines
  $: paths = Array.from({ length: 5 }).map((_, muniIndex) => {
    if (plotData.length === 0) return '';
    return plotData.map((snapshot, timeIndex) => {
      // If we don't have enough data yet, push lines to the right
      const offsetIndex = maxPoints - plotData.length + timeIndex;
      const x = getX(offsetIndex);
      const y = getY(snapshot[muniIndex] || 100);
      return `${timeIndex === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ');
  });
</script>

<div class="plot-container">
  <div class="plot-header">
    Real-Time Variance 
    <span class="subtitle">(Target Equilibrium = 100)</span>
  </div>
  
  <svg {width} {height} viewBox="0 0 {width} {height}" preserveAspectRatio="none">
    <line x1="0" y1={height/2} x2={width} y2={height/2} stroke="#666" stroke-width="1" stroke-dasharray="4,4" />
    
    <line x1="0" y1={height/4} x2={width} y2={height/4} stroke="#222" stroke-width="1" />
    <line x1="0" y1={height*3/4} x2={width} y2={height*3/4} stroke="#222" stroke-width="1" />
    
    {#each paths as path, i}
      <path 
        d={path} 
        fill="none" 
        stroke={colors[i]} 
        stroke-width="2" 
        stroke-linejoin="round"
        opacity="0.85"
      />
    {/each}
  </svg>
</div>

<style>
  .plot-container {
    background: #141414;
    border-radius: 12px;
    border: 1px solid #2a2a2a;
    padding: 1rem;
    margin: 1rem 2rem 2rem 2rem; /* Matches the padding of the simulation area */
    box-shadow: inset 0 2px 10px rgba(0,0,0,0.5);
  }
  
  .plot-header {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #888;
    margin-bottom: 0.75rem;
    font-weight: 600;
  }

  .subtitle {
    text-transform: none;
    letter-spacing: 0;
    color: #555;
    font-weight: normal;
  }
  
  svg {
    width: 100%;
    height: 150px;
    display: block;
  }
</style>
