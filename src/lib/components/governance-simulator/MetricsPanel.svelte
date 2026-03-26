<script lang="ts">
  import { fade } from 'svelte/transition';
  import Tooltip from './Tooltip.svelte';
  
  export let averageState: number;
  export let stateVariance: number;
  export let mismatchPenalty: number;
  export let systemResilience: number;
  export let pendingSignals: number;
  export let latency: number;
  export let coordinationTax: number;
  export let frequencyCoverage: number;
  export let requisiteVariety: number;
  export let snr: number;
</script>

<div class="metrics">
  <div class="metrics-grid">
    <div class="metric">
      <div class="metric-label">System Stability</div>
      <div class="metric-value" class:critical={averageState < 60}>
        {Math.round(averageState)}/100
      </div>
      <div class="metric-bar">
        <div class="bar-fill" style="width: {averageState}%; background: {averageState > 70 ? '#44ff44' : averageState > 40 ? '#ffaa44' : '#ff4444'}"></div>
      </div>
    </div>
    
    <div class="metric">
      <div class="metric-label">Requisite Variety</div>
      <div class="metric-value" class:critical={requisiteVariety < 50}>
        {Math.round(requisiteVariety)}%
      </div>
      <div class="metric-bar">
        <div class="bar-fill" style="width: {requisiteVariety}%; background: #88ff88"></div>
      </div>
    </div>

    <div class="metric">
      <div class="metric-label">Freq. Coverage</div>
      <div class="metric-value" class:critical={frequencyCoverage < 50}>
        {Math.round(frequencyCoverage)}%
      </div>
      <div class="metric-bar">
        <div class="bar-fill" style="width: {frequencyCoverage}%; background: {frequencyCoverage > 60 ? '#44ff44' : '#ffaa44'}"></div>
      </div>
    </div>

    <div class="metric">
      <div class="metric-label">Coordination Tax</div>
      <div class="metric-value" class:critical={coordinationTax > 50}>
        {Math.round(coordinationTax)}%
      </div>
      <div class="metric-bar">
        <div class="bar-fill" style="width: {coordinationTax}%; background: {coordinationTax > 50 ? '#ff4444' : '#ffaa44'}"></div>
      </div>
    </div>
  </div>

  <div class="warnings-container">
    {#if coordinationTax > 50}
      <div class="warning" transition:fade>
        🚨 Catastrophic Tax ({Math.round(coordinationTax)}%)
      </div>
    {:else if coordinationTax > 20}
      <div class="warning-medium" transition:fade>
        ⚠️ Moderate Tax ({Math.round(coordinationTax)}%)
      </div>
    {/if}
    
    {#if snr < 1}
      <div class="warning" transition:fade>
        📡 UNOBSERVABLE: SNR = {snr.toFixed(2)} &lt; 1 (Paper III)
      </div>
    {/if}
  </div>
</div>

<style>
  .metrics {
    background: #141414;
    border-radius: 12px;
    padding: 1rem; /* Reduced from 1.5rem */
    border: 1px solid #2a2a2a;
  }

  /* NEW: 2-Column Grid Layout */
  .metrics-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.85rem 1rem;
    margin-bottom: 1rem;
  }
  
  .metric-label {
    font-size: 0.65rem; /* Shrunk slightly */
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #888;
    margin-bottom: 0.2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .metric-value {
    font-size: 1.15rem; /* Shrunk from 1.5rem */
    font-weight: bold;
    font-family: 'Courier New', monospace;
    margin-bottom: 0.25rem;
  }
  
  .metric-value.critical {
    color: #ff4444;
  }
  
  .metric-bar {
    height: 4px;
    background: #2a2a2a;
    border-radius: 2px;
    overflow: hidden;
  }
  
  .bar-fill {
    height: 100%;
    transition: width 0.3s ease, background-color 0.3s ease;
  }

  /* Condensed Warnings */
  .warnings-container {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
  
  .warning, .warning-medium {
    padding: 0.5rem 0.6rem;
    border-left: 3px solid #ff4444;
    background: #2a1a1a;
    color: #ff8888;
    font-size: 0.7rem; /* Condensed text */
    border-radius: 0 4px 4px 0;
  }
  
  .warning-medium {
    border-left-color: #ffaa44;
    background: #2a2a1a;
    color: #ffaa88;
  }
</style>
