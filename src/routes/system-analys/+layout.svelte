<script lang="ts">
  import { page } from '$app/stores';
  import SystemAnalysisNotice from '$lib/components/SystemAnalysisNotice.svelte';

  // The index page renders its own notice inside its wider layout
  $: isIndex = $page.url.pathname.replace(/\/$/, '') === '/system-analys';
</script>

{#if !isIndex}
  <div class="mx-auto max-w-3xl px-4 pt-8">
    <SystemAnalysisNotice />
  </div>
{/if}

<slot />
