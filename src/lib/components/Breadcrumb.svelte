<script lang="ts">
  import { t, locale } from '$lib/stores/i18n';

  // Which top-level section this page belongs to — must match a key in translations.ts
  // that has the shape { navLabel, pages: { [key]: string } }.
  export let section: 'architecture' | 'transition' = 'architecture';
  // Key into $t[section].pages, e.g. "spektrum" or "overgangsgraf". Omit for the section index page.
  export let current: string | null = null;

  const sectionHrefs: Record<string, string> = {
    architecture: '/arkitektur/',
    transition: '/overgang/'
  };
</script>

<nav aria-label="Breadcrumb" class="mx-auto max-w-3xl px-6 pt-10">
  <ol class="flex flex-wrap items-center gap-2 font-sans text-sm text-stone-500">
    <li>
      <a href="/" class="hover:text-black hover:underline">
        {$locale === 'sv' ? 'Hem' : 'Home'}
      </a>
    </li>
    <li aria-hidden="true">/</li>
    <li>
      {#if current}
        <a href={sectionHrefs[section]} class="hover:text-black hover:underline">
          {$t[section].navLabel}
        </a>
      {:else}
        <span class="text-stone-800 font-medium" aria-current="page">
          {$t[section].navLabel}
        </span>
      {/if}
    </li>
    {#if current}
      <li aria-hidden="true">/</li>
      <li class="text-stone-800 font-medium" aria-current="page">
        {$t[section].pages[current]}
      </li>
    {/if}
  </ol>
</nav>
