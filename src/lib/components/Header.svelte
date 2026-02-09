<script lang="ts">
  import { t, locale, toggleLang } from '$lib/stores/i18n';
</script>

<header class="sticky top-0 z-50 w-full border-b border-stone-200 bg-white/95 backdrop-blur-sm">
  <div class="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
    
    <div class="flex flex-col leading-tight">
      <a href="/" class="font-sans text-2xl text-manifesto-black no-underline hover:opacity-80 transition-opacity">
        Svensk<span class="font-extrabold">Subsidiaritet</span>
      </a>
      <span class="font-sans text-xs font-medium tracking-widest text-stone-500 uppercase">
        {$t.header.subtitle}
      </span>
    </div>

    <nav class="flex items-center gap-8">
      <div class="hidden md:flex gap-6 font-sans text-sm font-medium text-stone-600">
        <a href="/" class="hover:text-black transition-colors">{$t.nav.manifesto}</a>
        <a href="/system-analys" class="hover:text-black transition-colors">{$t.nav.analysis}</a>
        <a href="/bibliotek" class="hover:text-black transition-colors">{$t.nav.library}</a>
        <a href="/om-oss" class="hover:text-black transition-colors">{$t.nav.about}</a>
      </div>
      
      <button 
        on:click={toggleLang}
        class="rounded border border-stone-200 bg-stone-50 px-3 py-1 text-lg hover:bg-stone-100 transition-colors"
        aria-label="Switch Language"
      >
        {#if $locale === 'sv'}🇸🇪{:else}🇬🇧{/if}
      </button>
    </nav>
  </div>
</header>
