<script lang="ts">
  import { locale } from '$lib/stores/i18n';
  import ContentSV from './traff-1.sv.md';
  import ContentEN from './traff-1.en.md';
  import { fade } from 'svelte/transition';
</script>

<div in:fade={{ duration: 200 }}>
  {#if $locale === 'sv'}
    <ContentSV />
  {:else}
    <ContentEN />
  {/if}
</div>
