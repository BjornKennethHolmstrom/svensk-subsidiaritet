<!-- routes/simulator/+page.svelte -->
<script lang="ts">
  import GovernanceSimulator from '$lib/components/governance-simulator/GovernanceSimulator.svelte';
  import { onMount } from 'svelte';
  import { t } from '$lib/stores/i18n'; // <-- Added translation store import
  
  let architecture: 'centralized' | 'localOnly' | 'fractal' = 'centralized';
  let complexity = 0.5;
  let disturbanceMix = 0.5;
  
  onMount(() => {
    // Track user interactions for analytics
    const track = (event: string, data: any) => {
      console.log(`[Analytics] ${event}:`, data);
    };
    
    window.addEventListener('architecture-change', (e: any) => {
      track('architecture_change', { architecture: e.detail });
    });
  });
</script>

<div class="simulator-page">
  <header>
    <h1>{$t.simulatorPage.title}</h1>
    <p class="subtitle">
      {$t.simulatorPage.subtitle}
    </p>
    <div class="paper-refs">
      {$t.simulatorPage.basedOn} 
      <a href="https://www.bjornkennethholmstrom.org/whitepapers/governance-stability-simulator">{$t.simulatorPage.papers.p1}</a> • 
      <a href="https://www.bjornkennethholmstrom.org/whitepapers/fractality-as-stability">{$t.simulatorPage.papers.p2}</a> • 
      <a href="https://www.bjornkennethholmstrom.org/whitepapers/observability-democracy-connection">{$t.simulatorPage.papers.p3}</a> • 
      <a href="https://www.bjornkennethholmstrom.org/whitepapers/requisite-variety-and-the-commons">{$t.simulatorPage.papers.p4}</a> • 
      <a href="https://www.bjornkennethholmstrom.org/whitepapers/coordination-failure-tax">{$t.simulatorPage.papers.p5}</a>
    </div>
  </header>
  
  <GovernanceSimulator 
    bind:architecture
    bind:complexity
    bind:disturbanceMix
  />
  
  <footer>
    <div class="explanation">
      <h3>{$t.simulatorPage.explanation.title}</h3>
      <p>{@html $t.simulatorPage.explanation.centralized}</p>
      <p>{@html $t.simulatorPage.explanation.local}</p>
      <p>{@html $t.simulatorPage.explanation.fractal}</p>
    </div>
    <div class="ashby-quote">
      <em>{$t.simulatorPage.quote}</em>
    </div>
  </footer>
</div>

<style>
  .simulator-page {
    min-height: 100vh;
    background: linear-gradient(135deg, #0a0a0a 0%, #0f0f0f 100%);
    padding: 2rem;
  }
  
  header {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, #fff 0%, #88ff88 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    margin-bottom: 0.5rem;
  }
  
  .subtitle {
    color: #888;
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  
  .paper-refs {
    font-size: 0.75rem;
    color: #666;
  }
  
  .paper-refs a {
    color: #88ff88;
    text-decoration: none;
  }
  
  .paper-refs a:hover {
    text-decoration: underline;
  }
  
  footer {
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid #2a2a2a;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
  }
  
  .explanation h3 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: #88ff88;
  }
  
  .explanation p {
    font-size: 0.875rem;
    color: #aaa;
    margin-bottom: 0.75rem;
    line-height: 1.5;
  }
  
  .ashby-quote {
    text-align: right;
    font-size: 0.875rem;
    color: #666;
    font-style: italic;
    padding-top: 1rem;
  }
  
  @media (max-width: 768px) {
    .simulator-page {
      padding: 1rem;
    }
    
    h1 {
      font-size: 1.75rem;
    }
    
    footer {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
    
    .ashby-quote {
      text-align: left;
    }
  }
</style>
