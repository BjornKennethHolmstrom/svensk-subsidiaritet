<script>
  import { locale } from '$lib/stores/i18n';
  import ContentSV from './content.sv.md';
  import ContentEN from './content.en.md';
  import { fade } from 'svelte/transition';
  import Breadcrumb from '$lib/components/Breadcrumb.svelte';
</script>

<Breadcrumb section="transition" current="broinstitutioner" />

<div class="prose-container" in:fade={{ duration: 200 }}>
  {#if $locale === 'sv'}
    <ContentSV />
  {:else}
    <ContentEN />
  {/if}
</div>
