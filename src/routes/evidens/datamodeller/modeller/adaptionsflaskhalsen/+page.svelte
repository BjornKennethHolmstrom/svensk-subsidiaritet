<script>
  import { locale, t } from '$lib/stores/i18n';
  import ContentSV from './content.sv.md';
  import ContentEN from './content.en.md';
  import { fade } from 'svelte/transition';
  import Breadcrumb from '$lib/components/Breadcrumb.svelte';

  $: trail = [
    { label: $t.evidence.navLabel, href: '/evidens/' },
    { label: $t.evidence.labels.dataModels, href: '/evidens/datamodeller/' },
    { label: $t.evidence.labels.modeller, href: '/evidens/datamodeller/modeller/' },
    { label: $t.evidence.labels.adapationsflaskhalsen }
  ];
</script>

<Breadcrumb {trail} />

<div class="prose-container" in:fade={{ duration: 200 }}>
  {#if $locale === 'sv'}
    <ContentSV />
  {:else}
    <ContentEN />
  {/if}
</div>
