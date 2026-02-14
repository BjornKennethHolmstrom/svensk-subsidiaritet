<script lang="ts">
  import { locale } from '$lib/stores/i18n';
  import { fade } from 'svelte/transition';
  import ContentSV from './content.sv.md'; // Assumes you save the markdown here
  import ContentEN from './content.en.md'; // Placeholder if you translate later
</script>

<div class="max-w-4xl mx-auto px-6 py-12" in:fade>
  <a href="/skola" class="inline-flex items-center text-sm text-stone-500 hover:text-blue-600 mb-8 transition-colors">
    <svg class="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
    {$locale === 'sv' ? 'Tillbaka till översikten' : 'Back to overview'}
  </a>

  <div class="flex justify-between items-center mb-12 pb-6 border-b border-stone-200 dark:border-stone-800">
    <div>
      <h1 class="text-3xl font-bold mb-1">Systemtänkande på 60 minuter</h1>
      <p class="text-stone-500 text-sm">Light-version • Åk 1-3</p>
    </div>
    <a href="/downloads/skola-60-minute{$locale === 'sv' ? 'r' : 's'}.pdf" 
       download class="hidden sm:inline-flex items-center px-4 py-2 bg-stone-100 dark:bg-stone-800 rounded-lg text-sm font-semibold hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors"
    >
      <svg class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
      PDF
    </a>
  </div>

  <article class="prose prose-stone dark:prose-invert prose-lg max-w-none">
    {#if $locale === 'sv'}
      <ContentSV />
    {:else}
      <ContentEN />
    {/if}
  </article>

  <div class="mt-16 p-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800 text-center">
    <h3 class="text-xl font-bold mb-2">Gick lektionen bra?</h3>
    <p class="text-stone-600 dark:text-stone-300 mb-6">
      Ta nästa steg och kör hela modulen med din klass.
    </p>
    <a href="/skola/6-veckor" class="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors">
      Gå till 6-veckorsmodulen →
    </a>
  </div>
</div>
