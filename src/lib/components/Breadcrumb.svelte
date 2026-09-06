<script lang="ts">
  import { t, locale } from '$lib/stores/i18n';

  // --- Simple mode (used by Architecture / Transition) ---
  // Which top-level section — must match a key in translations.ts with shape
  // { navLabel, pages: { [key]: string } }.
  export let section: 'architecture' | 'transition' = 'architecture';
  // Key into $t[section].pages. Omit for the section index page.
  export let current: string | null = null;

  // --- Trail mode (used by Evidence, and anything needing >2 levels) ---
  // Array of crumbs after Home. The last crumb should omit `href`.
  export let trail: Array<{ label: string; href?: string }> | null = null;

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

    {#if trail}
      {#each trail as crumb, i}
        <li aria-hidden="true">/</li>
        <li>
          {#if crumb.href}
            <a href={crumb.href} class="hover:text-black hover:underline">{crumb.label}</a>
          {:else}
            <span class="text-stone-800 font-medium" aria-current="page">{crumb.label}</span>
          {/if}
        </li>
      {/each}
    {:else}
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
    {/if}
  </ol>
</nav>
