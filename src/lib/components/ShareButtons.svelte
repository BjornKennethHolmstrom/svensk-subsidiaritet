<script lang="ts">
  import { locale } from '$lib/stores/i18n';
  import { fade } from 'svelte/transition';

  export let title = '';
  export let description = '';

  // Defaults
  const defaultTitle = 'Svensk Subsidiaritet';
  const defaultDescription = 'Research and policy for distributed governance.';

  $: shareTitle = title || defaultTitle;
  $: url = typeof window !== 'undefined' ? window.location.href : '';

  // Social Share URLs
  $: twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(shareTitle)}`;
  $: facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  $: linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
  $: emailUrl = `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(url)}`;

  // Copy Link Logic
  let copied = false;
  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(url);
      copied = true;
      setTimeout(() => (copied = false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const labels = {
    share: { en: 'Share this', sv: 'Dela detta' },
    copied: { en: 'Copied!', sv: 'Kopierad!' },
    twitter: { en: 'Share on X', sv: 'Dela på X' },
    facebook: { en: 'Share on Facebook', sv: 'Dela på Facebook' },
    linkedin: { en: 'Share on LinkedIn', sv: 'Dela på LinkedIn' },
    email: { en: 'Share via Email', sv: 'Dela via E-post' },
    copy: { en: 'Copy Link', sv: 'Kopiera Länk' }
  };
</script>

<div class="mt-12 border-t border-stone-200 pt-8" in:fade>
  <p class="mb-4 text-center font-sans text-xs font-bold uppercase tracking-widest text-stone-400">
    {$locale === 'sv' ? labels.share.sv : labels.share.en}
  </p>

  <div class="flex justify-center gap-3">
    <a
      href={twitterUrl}
      target="_blank"
      rel="noopener noreferrer"
      class="flex h-10 w-10 items-center justify-center rounded-full bg-stone-100 text-stone-600 transition-colors hover:bg-manifesto-black hover:text-white"
      title={$locale === 'sv' ? labels.twitter.sv : labels.twitter.en}
    >
      <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    </a>

    <a
      href={facebookUrl}
      target="_blank"
      rel="noopener noreferrer"
      class="flex h-10 w-10 items-center justify-center rounded-full bg-stone-100 text-stone-600 transition-colors hover:bg-manifesto-black hover:text-white"
      title={$locale === 'sv' ? labels.facebook.sv : labels.facebook.en}
    >
      <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
    </a>

    <a
      href={linkedinUrl}
      target="_blank"
      rel="noopener noreferrer"
      class="flex h-10 w-10 items-center justify-center rounded-full bg-stone-100 text-stone-600 transition-colors hover:bg-manifesto-black hover:text-white"
      title={$locale === 'sv' ? labels.linkedin.sv : labels.linkedin.en}
    >
      <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    </a>

    <a
      href={emailUrl}
      class="flex h-10 w-10 items-center justify-center rounded-full bg-stone-100 text-stone-600 transition-colors hover:bg-manifesto-black hover:text-white"
      title={$locale === 'sv' ? labels.email.sv : labels.email.en}
    >
      <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
    </a>

    <button
      on:click={copyUrl}
      class="group relative flex h-10 w-10 items-center justify-center rounded-full bg-stone-100 text-stone-600 transition-colors hover:bg-manifesto-black hover:text-white"
      title={$locale === 'sv' ? labels.copy.sv : labels.copy.en}
    >
      <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg>
      
      {#if copied}
        <span class="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-manifesto-black px-2 py-1 text-xs font-bold text-white shadow-lg">
          {$locale === 'sv' ? labels.copied.sv : labels.copied.en}
        </span>
      {/if}
    </button>
  </div>
</div>
