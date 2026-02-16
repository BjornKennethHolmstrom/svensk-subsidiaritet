<script lang="ts">
  import { t, locale, toggleLang } from '$lib/stores/i18n';
  
  let mobileMenuOpen = $state(false);
  
  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }
  
  function closeMobileMenu() {
    mobileMenuOpen = false;
  }
</script>

<!-- Changed: Removed transparency from header -->
<header class="sticky top-0 z-50 w-full border-b border-stone-200 bg-white">
  <div class="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
    
    <!-- Logo -->
    <div class="flex flex-col leading-tight">
      <a href="/" class="font-sans text-2xl text-manifesto-black no-underline hover:opacity-80 transition-opacity">
        Svensk<span class="font-extrabold">Subsidiaritet</span>
      </a>
      <span class="font-sans text-xs font-medium tracking-widest text-stone-500 uppercase">
        {$t.header.subtitle}
      </span>
    </div>

    <!-- Desktop Navigation -->
    <nav class="hidden md:flex items-center gap-8">
      <div class="flex gap-6 font-sans text-sm font-medium text-stone-600">
        <a href="/vision" class="hover:text-black transition-colors">{$t.nav.manifesto}</a>
        <a href="/system-analys" class="hover:text-black transition-colors">{$t.nav.analysis}</a>
        <a href="/ramverk" class="hover:text-black transition-colors">{$t.nav.frameworks}</a>
        <a href="/verktyg" class="hover:text-black transition-colors">{$t.nav.tools}</a>
        <a href="/bibliotek" class="hover:text-black transition-colors">{$t.nav.library}</a>
        <a href="/kontakt" class="hover:text-black transition-colors">{$t.footer.contact}</a>
        <a href="/om" class="hover:text-black transition-colors">{$t.nav.about}</a>
      </div>
      
      <button 
        onclick={toggleLang}
        class="rounded border border-stone-200 bg-stone-50 px-3 py-1 text-lg hover:bg-stone-100 transition-colors"
        aria-label="Switch Language"
      >
        {#if $locale === 'sv'}🇸🇪{:else}🇬🇧{/if}
      </button>
    </nav>

    <!-- Mobile Controls -->
    <div class="flex md:hidden items-center gap-3">
      <!-- Language Toggle (Mobile) -->
      <button 
        onclick={toggleLang}
        class="rounded border border-stone-200 bg-stone-50 px-3 py-1 text-lg hover:bg-stone-100 transition-colors"
        aria-label="Switch Language"
      >
        {#if $locale === 'sv'}🇸🇪{:else}🇬🇧{/if}
      </button>
      
      <!-- Hamburger Button -->
      <button
        onclick={toggleMobileMenu}
        class="flex flex-col justify-center items-center w-10 h-10 rounded hover:bg-stone-100 transition-colors"
        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={mobileMenuOpen}
      >
        <span class="hamburger-line {mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}"></span>
        <span class="hamburger-line {mobileMenuOpen ? 'opacity-0' : ''}"></span>
        <span class="hamburger-line {mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}"></span>
      </button>
    </div>
  </div>

  <!-- Mobile Menu Overlay -->
  {#if mobileMenuOpen}
    <div 
      class="fixed inset-0 z-40 md:hidden"
      onclick={closeMobileMenu}
      role="button"
      tabindex="-1"
      aria-label="Close menu"
    ></div>
  {/if}

  <!-- Mobile Menu Panel -->
  <div 
    class="fixed top-0 right-0 bottom-0 w-64 bg-white border-l border-stone-200 shadow-2xl transform transition-transform duration-300 ease-in-out z-50 md:hidden pt-[73px] {mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}"
  >
    <nav class="flex flex-col p-6 gap-1">
      <a 
        href="/vision" 
        class="px-4 py-3 rounded-lg font-sans text-sm font-medium text-stone-700 hover:bg-stone-100 hover:text-black transition-colors"
        onclick={closeMobileMenu}
      >
        {$t.nav.manifesto}
      </a>
      <a 
        href="/system-analys" 
        class="px-4 py-3 rounded-lg font-sans text-sm font-medium text-stone-700 hover:bg-stone-100 hover:text-black transition-colors"
        onclick={closeMobileMenu}
      >
        {$t.nav.analysis}
      </a>
      <a 
        href="/ramverk" 
        class="px-4 py-3 rounded-lg font-sans text-sm font-medium text-stone-700 hover:bg-stone-100 hover:text-black transition-colors"
        onclick={closeMobileMenu}
      >
        {$t.nav.frameworks}
      </a>
      <a 
        href="/verktyg" 
        class="px-4 py-3 rounded-lg font-sans text-sm font-medium text-stone-700 hover:bg-stone-100 hover:text-black transition-colors"
        onclick={closeMobileMenu}
      >
        {$t.nav.tools}
      </a>
      <a 
        href="/bibliotek" 
        class="px-4 py-3 rounded-lg font-sans text-sm font-medium text-stone-700 hover:bg-stone-100 hover:text-black transition-colors"
        onclick={closeMobileMenu}
      >
        {$t.nav.library}
      </a>
      <a 
        href="/kontakt" 
        class="px-4 py-3 rounded-lg font-sans text-sm font-medium text-stone-700 hover:bg-stone-100 hover:text-black transition-colors"
        onclick={closeMobileMenu}
      >
        {$t.footer.contact}
      </a>
      <a 
        href="/om" 
        class="px-4 py-3 rounded-lg font-sans text-sm font-medium text-stone-700 hover:bg-stone-100 hover:text-black transition-colors"
        onclick={closeMobileMenu}
      >
        {$t.nav.about}
      </a>
    </nav>
  </div>
</header>

<style>
  .hamburger-line {
    width: 24px;
    height: 2px;
    background-color: #292524;
    transition: all 0.3s ease-in-out;
    margin: 3px 0;
  }
</style>
