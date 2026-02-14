<script lang="ts">
  import { locale } from '$lib/stores/i18n';
  import ContentSV from './content.sv.md';
  import ContentEN from './content.en.md';
  import { fade } from 'svelte/transition';

  let lang = $derived($locale as 'sv' | 'en');
</script>

<div class="mx-auto max-w-4xl px-6 py-12" in:fade={{ duration: 200 }}>
  
  <!-- Breadcrumb -->
  <div class="mb-8 font-sans text-sm text-stone-400">
    <a href="/ramverk" class="hover:text-black transition-colors">
      {lang === 'sv' ? 'Ramverk' : 'Frameworks'}
    </a>
    <span class="mx-2">/</span>
    <span class="text-stone-600">AUBI</span>
  </div>

  <div class="prose-container" in:fade={{ duration: 200 }}>
    {#if $locale === 'sv'}
      <ContentSV />
    {:else}
      <ContentEN />
    {/if}
  </div>

</div>
