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
        <!-- Manifesto -->
        <a href="/vision" class="hover:text-black transition-colors">{$t.nav.manifesto}</a>

        <!-- Architecture -->
        <a href="/arkitektur" class="hover:text-black transition-colors">{$t.nav.architecture}</a>

        <!-- Resources Dropdown -->
        <div class="relative group">
          <button class="flex items-center gap-1 text-stone-600 hover:text-black transition-colors">
            {$t.nav.resources}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div class="absolute left-0 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-2">
          <a href="/ramverk" class="block px-4 py-2 text-sm text-stone-700 hover:bg-stone-100 hover:text-black">{$t.nav.frameworks}</a>
            <a href="/system-analys" class="block px-4 py-2 text-sm text-stone-700 hover:bg-stone-100 hover:text-black">{$t.nav.analysis}</a>
            <a href="/verktyg" class="block px-4 py-2 text-sm text-stone-700 hover:bg-stone-100 hover:text-black">{$t.nav.tools}</a>
            <a href="/bibliotek" class="block px-4 py-2 text-sm text-stone-700 hover:bg-stone-100 hover:text-black">{$t.nav.library}</a>
          </div>
        </div>
        
        <!-- Contact -->
        <a href="/kontakt" class="hover:text-black transition-colors">{$t.footer.contact}</a>
        <!-- About -->
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
      <!-- Manifesto -->
      <a 
        href="/vision" 
        class="px-4 py-3 rounded-lg font-sans text-sm font-medium text-stone-700 hover:bg-stone-100 hover:text-black transition-colors"
        onclick={closeMobileMenu}
      >
        {$t.nav.manifesto}
      </a>

      <!-- Architecture -->
      <a 
        href="/arkitektur" 
        class="px-4 py-3 rounded-lg font-sans text-sm font-medium text-stone-700 hover:bg-stone-100 hover:text-black transition-colors"
        onclick={closeMobileMenu}
      >
        {$t.nav.architecture}
      </a>
      
      <!-- Resources label (non-clickable) -->
      <div class="px-4 py-2 mt-2 font-sans text-xs font-semibold text-stone-400 uppercase tracking-wider">
        {$t.nav.resources}
      </div>
      <!-- Resource items -->
      <a 
        href="/ramverk" 
        class="px-4 py-3 rounded-lg font-sans text-sm font-medium text-stone-700 hover:bg-stone-100 hover:text-black transition-colors ml-2"
        onclick={closeMobileMenu}
      >
        {$t.nav.frameworks}
      </a>
      <a 
        href="/system-analys" 
        class="px-4 py-3 rounded-lg font-sans text-sm font-medium text-stone-700 hover:bg-stone-100 hover:text-black transition-colors ml-2"
        onclick={closeMobileMenu}
      >
        {$t.nav.analysis}
      </a>
      <a 
        href="/verktyg" 
        class="px-4 py-3 rounded-lg font-sans text-sm font-medium text-stone-700 hover:bg-stone-100 hover:text-black transition-colors ml-2"
        onclick={closeMobileMenu}
      >
        {$t.nav.tools}
      </a>
      <a 
        href="/bibliotek" 
        class="px-4 py-3 rounded-lg font-sans text-sm font-medium text-stone-700 hover:bg-stone-100 hover:text-black transition-colors ml-2"
        onclick={closeMobileMenu}
      >
        {$t.nav.library}
      </a>

      <!-- Contact -->
      <a 
        href="/kontakt" 
        class="px-4 py-3 rounded-lg font-sans text-sm font-medium text-stone-700 hover:bg-stone-100 hover:text-black transition-colors"
        onclick={closeMobileMenu}
      >
        {$t.footer.contact}
      </a>
      <!-- About -->
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
