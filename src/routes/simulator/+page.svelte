<!-- routes/simulator/+page.svelte -->
<script lang="ts">
  import GovernanceSimulator from '$lib/components/governance-simulator/GovernanceSimulator.svelte';
  import { onMount } from 'svelte';
  
  let architecture = 'centralized';
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
    <h1>Governance Stability Simulator</h1>
    <p class="subtitle">
      A control-theoretic model of institutional adaptation
    </p>
    <div class="paper-refs">
      Based on papers: 
      <a href="https://www.bjornkennethholmstrom.org/whitepapers/governance-stability-simulator">I: Governance as a Feedback System</a> • 
      <a href="https://www.bjornkennethholmstrom.org/whitepapers/fractality-as-stability">II: Fractality as Stability</a> • 
      <a href="https://www.bjornkennethholmstrom.org/whitepapers/observability-democracy-connection">III: The Observability-Democracy Connection</a> • 
      <a href="https://www.bjornkennethholmstrom.org/whitepapers/requisite-variety-and-the-commons">IV: Requisite Variety and the Commons</a> • 
      <a href="https://www.bjornkennethholmstrom.org/whitepapers/coordination-failure-tax">V: The Coordination Failure Tax</a>
    </div>
  </header>
  
  <GovernanceSimulator 
    bind:architecture
    bind:complexity
    bind:disturbanceMix
  />
  
  <footer>
    <div class="explanation">
      <h3>What you're seeing</h3>
      <p>
        <strong>Centralized</strong> (Paper I): One controller observes the national average and applies uniform policy.
        High latency and aggregation destroy spatial information. Collateral disruption spreads.
      </p>
      <p>
        <strong>Local Only</strong> (Paper II): Each node responds to its own state. Fast shocks are handled,
        but slow drift produces persistent oscillation.
      </p>
      <p>
        <strong>Fractal / Polycentric</strong> (Papers II & V): Nested local, regional, and global controllers
        cover all disturbance frequencies. The coordination failure tax is minimized.
      </p>
    </div>
    <div class="ashby-quote">
      <em>"Only variety can absorb variety."</em> — Ross Ashby, Law of Requisite Variety (1956)
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
