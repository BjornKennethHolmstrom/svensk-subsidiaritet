<script>
  import { locale } from '$lib/stores/i18n';
  import ContentSV from './content.sv.md';
  import ContentEN from './content.en.md';
  import { fade } from 'svelte/transition';
  import SeoAndShare from '$lib/components/SeoAndShare.svelte';

  // PDF URLs
  const pdfUrls = {
    sv: '/downloads/Manifest-svensk-subsidiaritet.pdf',
    en: '/downloads/Manifesto-swedish-subsidiarity.pdf'
  };

  // Metadata för SEO och delning – ett objekt per språk
  const shareMeta = {
    sv: {
      title: 'Ett lärande Sverige – Svensk Subsidiaritet',
      description: 'Principerna bakom Svensk Subsidiaritet: beslut på rätt nivå, spårbart ansvar och reformer som prövas innan de skalas upp.',
      image: '/images/vision-og.png'
    },
    en: {
      title: 'A Learning Sweden – Swedish Subsidiarity',
      description: 'The principles behind Swedish subsidiarity: decisions made at the right level, traceable accountability, and reforms tested before being scaled up.',
      image: '/images/vision-og-en.png'
    }
  };
</script>

<div class="prose-container" in:fade={{ duration: 200 }}>
  <!-- Download Bar -->
  <div class="mb-8 flex items-center justify-end border-b border-stone-200 pb-4">
    <a
      href={pdfUrls[$locale]}
      download
      class="inline-flex items-center gap-2 rounded-md border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-50 hover:text-stone-900"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
      </svg>
      {$locale === 'sv' ? 'Ladda ner som PDF' : 'Download as PDF'}
    </a>
  </div>

  {#if $locale === 'sv'}
    <ContentSV />
  {:else}
    <ContentEN />
  {/if}

  <!-- SEO + Delningsknappar (dynamiska) -->
  <SeoAndShare 
    title={shareMeta[$locale].title} 
    description={shareMeta[$locale].description} 
    image={shareMeta[$locale].image}
  />
</div>
