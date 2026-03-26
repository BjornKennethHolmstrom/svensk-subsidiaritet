<!-- Tooltip.svelte -->
<script lang="ts">
  export let text: string;
  let show = false;
</script>

<span 
  class="tooltip-trigger"
  on:mouseenter={() => show = true}
  on:mouseleave={() => show = false}
>
  <span class="info-icon">ⓘ</span>
  {#if show}
    <span class="tooltip-text">{text}</span>
  {/if}
</span>

<style>
  .tooltip-trigger {
    position: relative;
    display: inline-block;
    margin-left: 0.5rem;
    cursor: help;
  }
  
  .info-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    font-size: 12px;
    background: #2a2a2a;
    border-radius: 50%;
    color: #888;
  }
  
  .tooltip-text {
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 8px;
    padding: 8px 12px;
    background: #1a1a1a;
    border: 1px solid #44ff44;
    border-radius: 6px;
    font-size: 12px;
    white-space: nowrap;
    z-index: 1000;
    color: #e0e0e0;
    font-weight: normal;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  }
  
  .tooltip-text::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 5px;
    border-style: solid;
    border-color: #1a1a1a transparent transparent transparent;
  }
</style>
