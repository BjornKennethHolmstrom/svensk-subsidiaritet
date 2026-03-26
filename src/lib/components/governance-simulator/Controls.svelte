<!-- Controls.svelte -->
<script lang="ts">
  import { t } from '$lib/stores/i18n';
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
    <label>{$t.simulatorData.controls.architecture}</label>
    <div class="toggle-group">
      <button 
        class={architecture === 'centralized' ? 'active' : ''}
        on:click={() => architecture = 'centralized'}
      >
        <span>🏛️</span> {$t.simulatorData.controls.centralized}
      </button>
      <button 
        class={architecture === 'localOnly' ? 'active' : ''}
        on:click={() => architecture = 'localOnly'}
      >
        <span>🏘️</span> {$t.simulatorData.controls.localOnly}
      </button>
      <button 
        class={architecture === 'fractal' ? 'active' : ''}
        on:click={() => architecture = 'fractal'}
      >
        <span>🌀</span> {$t.simulatorData.controls.fractal}
      </button>
    </div>
    <Tooltip text={$t.simulatorData.controls.tooltip1} />
  </div>
  
  <div class="control-group">
    <label>{$t.simulatorData.controls.complexity}</label>
    <input 
      type="range" 
      bind:value={complexity}
      min="0" 
      max="1" 
      step="0.01"
    />
    <div class="complexity-labels">
      <span>{$t.simulatorData.controls.lowVariety}</span>
      <span>{$t.simulatorData.controls.highVariety}</span>
    </div>
    <Tooltip text={$t.simulatorData.controls.tooltip2} />
  </div>
  
  <div class="control-group">
    <label>{$t.simulatorData.controls.disturbanceMix}</label>
    <input 
      type="range" 
      bind:value={disturbanceMix}
      min="0" 
      max="1" 
      step="0.01"
    />
    <div class="mix-labels">
      <span>{$t.simulatorData.controls.fastShocks}</span>
      <span>{$t.simulatorData.controls.slowDrift}</span>
    </div>
    <Tooltip text={$t.simulatorData.controls.tooltip3} />
  </div>
  
  <button class="reset-button" on:click={resetSimulation}>
    ⟳ {$t.simulatorData.controls.reset}
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
