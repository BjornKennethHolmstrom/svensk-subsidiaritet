<script>
  import { locale } from '$lib/stores/i18n';
  import ContentSV from './content.sv.md';
  import ContentEN from './content.en.md';
  import DownloadBar from '$lib/components/DownloadBar.svelte';
  import { fade } from 'svelte/transition';
</script>

<div class="prose-container" in:fade={{ duration: 200 }}>
  <DownloadBar category="transport" />
  
  {#if $locale === 'sv'}
    <ContentSV />
  {:else}
    <ContentEN />
  {/if}
</div>
