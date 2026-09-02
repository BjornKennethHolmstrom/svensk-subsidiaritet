<script lang="ts">
  import { t, locale } from '$lib/stores/i18n';

  // Key into $t.architecture.pages, e.g. "spektrum". Omit for the section index page.
  export let current: string | null = null;
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
        <a href="/arkitektur/" class="hover:text-black hover:underline">
          {$t.architecture.navLabel}
        </a>
      {:else}
        <span class="text-stone-800 font-medium" aria-current="page">
          {$t.architecture.navLabel}
        </span>
      {/if}
    </li>
    {#if current}
      <li aria-hidden="true">/</li>
      <li class="text-stone-800 font-medium" aria-current="page">
        {$t.architecture.pages[current]}
      </li>
    {/if}
  </ol>
</nav>
