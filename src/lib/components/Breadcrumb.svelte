<script lang="ts">
  import { locale } from '$lib/stores/i18n';

  export let trail: { label: string; href?: string }[] = [];
</script>

<nav aria-label="Breadcrumb" class="mx-auto max-w-3xl px-6 pt-10">
  <ol class="flex flex-wrap items-center gap-2 font-sans text-sm text-stone-500">
    <li>
      <a href="/" class="hover:text-black hover:underline">
        {$locale === 'sv' ? 'Hem' : 'Home'}
      </a>
    </li>

    {#each trail as item, i}
      <li aria-hidden="true">/</li>
      <li>
        {#if item.href}
          <a href={item.href} class="hover:text-black hover:underline">
            {item.label}
          </a>
        {:else}
          <span class="text-stone-800 font-medium" aria-current="page">
            {item.label}
          </span>
        {/if}
      </li>
    {/each}
  </ol>
</nav>
