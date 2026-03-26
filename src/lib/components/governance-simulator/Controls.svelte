<!-- Controls.svelte -->
<script lang="ts">
  import Tooltip from './Tooltip.svelte';
  
  export let architecture: 'centralized' | 'localOnly' | 'fractal';
  export let complexity: number;
  export let disturbanceMix: number;
  
  function resetSimulation() {
    window.location.reload(); // Simple reset
  }
</script>

<div class="controls">
  <div class="control-group">
    <label>Governance Architecture</label>
    <div class="toggle-group">
      <button 
        class={architecture === 'centralized' ? 'active' : ''}
        on:click={() => architecture = 'centralized'}
      >
        <span>🏛️</span> Centralized
      </button>
      <button 
        class={architecture === 'localOnly' ? 'active' : ''}
        on:click={() => architecture = 'localOnly'}
      >
        <span>🏘️</span> Local Only
      </button>
      <button 
        class={architecture === 'fractal' ? 'active' : ''}
        on:click={() => architecture = 'fractal'}
      >
        <span>🌀</span> Fractal / Polycentric
      </button>
    </div>
    <Tooltip text="Paper I & II: Centralized destroys spatial information. Fractal covers all frequency bands." />
  </div>
  
  <div class="control-group">
    <label>Environmental Complexity</label>
    <input 
      type="range" 
      bind:value={complexity}
      min="0" 
      max="1" 
      step="0.01"
    />
    <div class="complexity-labels">
      <span>Low variety</span>
      <span>High variety</span>
    </div>
    <Tooltip text="Ashby's Law: Higher variety environments require more governance variety to stabilize." />
  </div>
  
  <div class="control-group">
    <label>Disturbance Mix</label>
    <input 
      type="range" 
      bind:value={disturbanceMix}
      min="0" 
      max="1" 
      step="0.01"
    />
    <div class="mix-labels">
      <span>Fast shocks</span>
      <span>Slow drift</span>
    </div>
    <Tooltip text="Paper II: Fast shocks require low latency; slow drift requires long observation windows." />
  </div>
  
  <button class="reset-button" on:click={resetSimulation}>
    ⟳ Reset Simulation
  </button>
</div>

<style>
  .controls {
    background: #141414;
    border-radius: 12px;
    padding: 1.5rem;
    border: 1px solid #2a2a2a;
  }
  
  .control-group {
    margin-bottom: 1.5rem;
  }
  
  label {
    display: block;
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
    color: #e0e0e0;
  }
  
  .toggle-group {
    display: flex;
    gap: 0.5rem;
  }
  
  .toggle-group button {
    flex: 1;
    padding: 0.5rem;
    background: #1a1a1a;
    border: 1px solid #3a3a3a;
    color: #e0e0e0;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 0.875rem;
  }
  
  .toggle-group button.active {
    background: #2a4a2a;
    border-color: #44ff44;
    color: #ffffff;
  }
  
  input[type="range"] {
    width: 100%;
    margin: 0.5rem 0;
  }
  
  .complexity-labels, .mix-labels {
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem;
    color: #888;
  }
  
  .reset-button {
    width: 100%;
    padding: 0.75rem;
    background: #2a2a2a;
    border: 1px solid #ff4444;
    color: #ff8888;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.875rem;
    transition: all 0.2s;
  }
  
  .reset-button:hover {
    background: #3a2a2a;
    border-color: #ff8888;
  }
</style>
