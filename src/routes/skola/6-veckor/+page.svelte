<script lang="ts">
  import { locale } from '$lib/stores/i18n';
  import { fade } from 'svelte/transition';
  import ContentSV from './content.sv.md'; 
</script>

<div class="max-w-4xl mx-auto px-6 py-12" in:fade>
  <a href="/skola" class="inline-flex items-center text-sm text-stone-500 hover:text-blue-600 mb-8 transition-colors">
    <svg class="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
    {$locale === 'sv' ? 'Tillbaka till översikten' : 'Back to overview'}
  </a>

  <div class="flex justify-between items-center mb-12 pb-6 border-b border-stone-200 dark:border-stone-800">
    <div>
      <h1 class="text-3xl font-bold mb-1">Systemtänkande & Subsidiaritet</h1>
      <p class="text-stone-500 text-sm">6 veckor • Samhällskunskap 1b</p>
    </div>
    <a href="/downloads/skola-6-veckor.pdf" download class="hidden sm:inline-flex items-center px-4 py-2 bg-stone-100 dark:bg-stone-800 rounded-lg text-sm font-semibold hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors">
      <svg class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
      Ladda ner Modul (PDF)
    </a>
  </div>

  <article class="prose prose-stone dark:prose-invert prose-lg max-w-none prose-headings:text-blue-900 dark:prose-headings:text-blue-100 prose-a:text-blue-600">
    {#if $locale === 'sv'}
      <ContentSV />
    {:else}
       <div class="p-4 bg-amber-50 dark:bg-amber-900/20 text-amber-800 dark:text-amber-200 rounded-lg">
        Translation coming soon. Showing Swedish version.
      </div>
      <ContentSV />
    {/if}
  </article>
</div>
