<script lang="ts">
  import { page } from '$app/stores';
  import { locale } from '$lib/stores/i18n';

  // Props with defaults per language
  export let title = '';
  export let description = '';
  export let image = '/images/og-default.png'; // optional: social image

  $: currentLocale = $locale;
  $: url = typeof window !== 'undefined' ? window.location.href : '';

  // Default fallbacks
  const defaults = {
    sv: {
      title: 'Svensk Subsidiaritet – Systemanalys',
      description: 'En analys av centraliseringens kostnader och den subsidiära vägen framåt.',
      image: '/images/og-default-sv.png'
    },
    en: {
      title: 'Swedish Subsidiarity – System Analysis',
      description: 'An analysis of the costs of centralization and the subsidiarity-based path forward.',
      image: '/images/og-default-en.png'
    }
  };

  $: seoTitle = title || defaults[currentLocale].title;
  $: seoDescription = description || defaults[currentLocale].description;
  $: seoImage = image || defaults[currentLocale].image;
  $: canonicalUrl = url;

  // Share URLs (same as before)
  $: shareTitle = seoTitle;
  $: shareDescription = seoDescription;
  $: twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(shareTitle)}`;
  $: facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  $: linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
  $: blueskyUrl = `https://bsky.app/intent/compose?text=${encodeURIComponent(shareTitle + '\n' + url)}`;
  $: redditUrl = `https://reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(shareTitle)}`;

  // Copy link logic (same as before)
  let copied = false;
  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(url);
      copied = true;
      setTimeout(() => copied = false, 2000);
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  };

  // Labels (same as before)
  const labels = {
    share: { sv: 'Dela detta', en: 'Share this' },
    twitter: { sv: 'Dela på X/Twitter', en: 'Share on X/Twitter' },
    facebook: { sv: 'Dela på Facebook', en: 'Share on Facebook' },
    linkedin: { sv: 'Dela på LinkedIn', en: 'Share on LinkedIn' },
    bluesky: { sv: 'Dela på Bluesky', en: 'Share on Bluesky' },
    reddit: { sv: 'Dela på Reddit', en: 'Share on Reddit' },
    copy: { sv: 'Kopiera länk', en: 'Copy link' },
    copied: { sv: 'Kopierad!', en: 'Copied!' }
  };
</script>

<svelte:head>
  <!-- Primary Meta -->
  <title>{seoTitle}</title>
  <meta name="title" content={seoTitle} />
  <meta name="description" content={seoDescription} />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content={canonicalUrl} />
  <meta property="og:title" content={seoTitle} />
  <meta property="og:description" content={seoDescription} />
  <meta property="og:image" content={seoImage} />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content={canonicalUrl} />
  <meta property="twitter:title" content={seoTitle} />
  <meta property="twitter:description" content={seoDescription} />
  <meta property="twitter:image" content={seoImage} />

  <!-- Canonical -->
  <link rel="canonical" href={canonicalUrl} />
</svelte:head>

<!-- Share Buttons UI -->
<div class="mt-12 border-t border-stone-200 pt-8">
  <p class="mb-4 text-center font-sans text-sm font-medium uppercase tracking-wider text-stone-500">
    {labels.share[currentLocale]}
  </p>
  <div class="flex flex-wrap items-center justify-center gap-2">
    <!-- Copy Link Button -->
    <button
      on:click={copyUrl}
      class="relative inline-flex items-center gap-2 rounded-md border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-50 hover:text-stone-900"
      title={labels.copy[currentLocale]}
      aria-label={labels.copy[currentLocale]}
    >
      <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
      </svg>
      <span class="hidden sm:inline">{labels.copy[currentLocale]}</span>
      {#if copied}
        <span class="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-stone-700 px-2 py-1 text-xs text-white">
          {labels.copied[currentLocale]}
        </span>
      {/if}
    </button>

    <!-- Twitter/X -->
    <a
      href={twitterUrl}
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center gap-2 rounded-md border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-50 hover:text-stone-900"
      title={labels.twitter[currentLocale]}
      aria-label={labels.twitter[currentLocale]}
    >
      <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
      <span class="hidden sm:inline">X/Twitter</span>
    </a>

    <!-- Facebook -->
    <a
      href={facebookUrl}
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center gap-2 rounded-md border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-50 hover:text-stone-900"
      title={labels.facebook[currentLocale]}
      aria-label={labels.facebook[currentLocale]}
    >
      <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
      <span class="hidden sm:inline">Facebook</span>
    </a>

    <!-- LinkedIn -->
    <a
      href={linkedinUrl}
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center gap-2 rounded-md border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-50 hover:text-stone-900"
      title={labels.linkedin[currentLocale]}
      aria-label={labels.linkedin[currentLocale]}
    >
      <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
      <span class="hidden sm:inline">LinkedIn</span>
    </a>

    <!-- Bluesky -->
    <a
      href={blueskyUrl}
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center gap-2 rounded-md border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-50 hover:text-stone-900"
      title={labels.bluesky[currentLocale]}
      aria-label={labels.bluesky[currentLocale]}
    >
      <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z"/>
      </svg>
      <span class="hidden sm:inline">Bluesky</span>
    </a>

    <!-- Reddit -->
    <a
      href={redditUrl}
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center gap-2 rounded-md border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-50 hover:text-stone-900"
      title={labels.reddit[currentLocale]}
      aria-label={labels.reddit[currentLocale]}
    >
      <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
      </svg>
      <span class="hidden sm:inline">Reddit</span>
    </a>
  </div>
</div>
