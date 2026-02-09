<script lang="ts">
  import { locale } from '$lib/stores/i18n';
  import ContentSV from './efter.sv.md';
  import ContentEN from './efter.en.md';
  import { fade } from 'svelte/transition';
</script>

<div in:fade={{ duration: 200 }}>
  {#if $locale === 'sv'}
    <ContentSV />
  {:else}
    <ContentEN />
  {/if}
</div>
