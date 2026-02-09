<script lang="ts">
  import { locale, t } from '$lib/stores/i18n';
  import { fade } from 'svelte/transition';
  import SEO from '$lib/components/SEO.svelte'; // Assuming you have an SEO component, otherwise remove

  // --- 1. IMPORT MARKDOWN SECTIONS ---
  // You need to create these files in src/routes/bibliotek/svenska-subsidiaritetshypotesen/sections/
  
  import AbstractSv from './sections/abstract-sv.md';
  import AbstractEn from './sections/abstract-en.md';
  
  import IntroSv from './sections/introduction-sv.md';
  import IntroEn from './sections/introduction-en.md';
  
  import Ch1Sv from './sections/chapter-1-sv.md';
  import Ch1En from './sections/chapter-1-en.md';
  
  import Ch2Sv from './sections/chapter-2-sv.md';
  import Ch2En from './sections/chapter-2-en.md';
  
  import Ch3Sv from './sections/chapter-3-sv.md';
  import Ch3En from './sections/chapter-3-en.md';
  
  import Ch4Sv from './sections/chapter-4-sv.md';
  import Ch4En from './sections/chapter-4-en.md';
  
  import Ch5Sv from './sections/chapter-5-sv.md';
  import Ch5En from './sections/chapter-5-en.md';

  // --- 2. CONFIGURATION ---
  
  const contentMap = [
    { 
      id: 'abstract', 
      titleSv: 'Sammanfattning', titleEn: 'Abstract',
      compSv: AbstractSv, compEn: AbstractEn 
    },
    { 
      id: 'intro', 
      titleSv: 'Introduktion: Paradoxen', titleEn: 'Introduction: The Paradox',
      compSv: IntroSv, compEn: IntroEn 
    },
    { 
      id: 'chapter-1', 
      titleSv: '1. Tio Systemanalyser', titleEn: '1. The Ten Systems Analysis',
      compSv: Ch1Sv, compEn: Ch1En 
    },
    { 
      id: 'chapter-2', 
      titleSv: '2. Centraliseringens Kybernetik', titleEn: '2. Cybernetics of Centralization',
      compSv: Ch2Sv, compEn: Ch2En 
    },
    { 
      id: 'chapter-3', 
      titleSv: '3. Ramverket', titleEn: '3. The Framework',
      compSv: Ch3Sv, compEn: Ch3En 
    },
    { 
      id: 'chapter-4', 
      titleSv: '4. Övergången', titleEn: '4. The Transition',
      compSv: Ch4Sv, compEn: Ch4En 
    },
    { 
      id: 'chapter-5', 
      titleSv: '5. Det Globala Löftet', titleEn: '5. The Global Promise',
      compSv: Ch5Sv, compEn: Ch5En 
    }
  ];

  let activeSection = 'abstract';

  // Scroll handler
  function scrollTo(id: string) {
    activeSection = id;
    const el = document.getElementById(id);
    if (el) {
        // Offset for sticky header if you have one
        const y = el.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({top: y, behavior: 'smooth'});
    }
  }
  
  // Update active section on scroll
  function onScroll() {
    const sections = contentMap.map(s => document.getElementById(s.id));
    for (const section of sections) {
        if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.top <= 300) {
                activeSection = section.id;
                break;
            }
        }
    }
  }

  $: pdfLink = $locale === 'sv' 
    ? '/downloads/Svensk-Subsidiaritetshypotes-2026.pdf' 
    : '/downloads/Swedish-Subsidiarity-Hypothesis-2026.pdf';
</script>

<svelte:window on:scroll={onScroll} />

<div class="mx-auto max-w-7xl px-4 py-12 md:py-20 lg:flex lg:gap-12" in:fade>
  
  <aside class="hidden lg:block w-64 flex-shrink-0">
    <div class="sticky top-24 space-y-8">
      
      <div class="rounded-lg border border-stone-200 bg-stone-50 p-4">
        <div class="mb-4 text-xs font-bold uppercase tracking-widest text-stone-400">
            {$locale === 'sv' ? 'Vitbok 2026' : 'Whitepaper 2026'}
        </div>
        <a 
          href={pdfLink}
          download
          class="flex w-full items-center justify-center gap-2 rounded-md bg-manifesto-black px-4 py-2 text-sm font-bold text-white transition-transform active:scale-95 hover:bg-stone-800"
        >
          <span class="text-lg">↓</span> 
          {$locale === 'sv' ? 'Ladda ner PDF' : 'Download PDF'}
        </a>
      </div>

      <nav class="space-y-1 border-l border-stone-200 pl-4">
        {#each contentMap as section}
          <button
            on:click={() => scrollTo(section.id)}
            class="block w-full text-left py-2 text-sm transition-all border-l-2 -ml-[17px] pl-4
            {activeSection === section.id 
              ? 'border-manifesto-black font-bold text-manifesto-black' 
              : 'border-transparent text-stone-500 hover:text-stone-800 hover:border-stone-300'}"
          >
            {$locale === 'sv' ? section.titleSv : section.titleEn}
          </button>
        {/each}
      </nav>

      <a href="/bibliotek" class="block text-sm text-stone-400 hover:text-stone-800">
        ← {$locale === 'sv' ? 'Tillbaka till biblioteket' : 'Back to Library'}
      </a>
    </div>
  </aside>

  <main class="flex-1 min-w-0">
    
    <div class="lg:hidden mb-8">
      <div class="mb-2 text-xs font-bold uppercase tracking-widest text-stone-400">
        {$locale === 'sv' ? 'Vitbok' : 'Whitepaper'}
      </div>
      <h1 class="text-3xl font-bold font-sans text-manifesto-black leading-tight">
        {$locale === 'sv' ? 'Den Svenska Subsidiaritetshypotesen' : 'The Swedish Subsidiarity Hypothesis'}
      </h1>
      <a 
          href={pdfLink}
          download
          class="mt-6 inline-flex items-center gap-2 text-sm font-bold text-stone-600 border-b border-stone-300 pb-0.5 hover:text-black hover:border-black transition-colors"
        >
          ↓ {$locale === 'sv' ? 'Ladda ner PDF' : 'Download PDF'}
      </a>
    </div>

    <header class="hidden lg:block mb-16 border-b border-stone-200 pb-8">
      <h1 class="text-4xl md:text-5xl font-bold font-sans text-manifesto-black mb-4 leading-tight">
        {$locale === 'sv' ? 'Den Svenska Subsidiaritetshypotesen' : 'The Swedish Subsidiarity Hypothesis'}
      </h1>
      <p class="text-xl font-serif text-stone-600 italic">
        {$locale === 'sv' 
          ? 'Från centraliserad excellens till distribuerad resiliens.' 
          : 'From centralized excellence to distributed resilience.'}
      </p>
    </header>

    <div class="space-y-24">
      {#each contentMap as section}
        <section id={section.id} class="scroll-mt-32">
          
          <div class="mb-8 flex items-center gap-4 opacity-30">
            <span class="h-px flex-1 bg-stone-900"></span>
            <span class="text-xs font-bold uppercase tracking-widest">
                {$locale === 'sv' ? section.titleSv : section.titleEn}
            </span>
          </div>

          <article class="prose prose-stone prose-lg max-w-none 
            prose-headings:font-sans prose-headings:font-bold prose-headings:text-manifesto-black
            prose-p:font-serif prose-p:text-stone-700 prose-p:leading-relaxed
            prose-a:text-blue-700 prose-a:no-underline hover:prose-a:underline
            prose-blockquote:border-l-manifesto-black prose-blockquote:bg-stone-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:not-italic
            prose-li:marker:text-stone-400">
            
            {#if $locale === 'sv'}
              <svelte:component this={section.compSv} />
            {:else}
              <svelte:component this={section.compEn} />
            {/if}
          
          </article>
        </section>
      {/each}
    </div>

    <div class="mt-24 rounded-xl bg-stone-100 p-8 text-center">
      <h3 class="font-sans font-bold text-manifesto-black mb-2">
        {$locale === 'sv' ? 'Håller du med?' : 'Do you agree?'}
      </h3>
      <p class="font-serif text-stone-600 mb-6">
        {$locale === 'sv' 
          ? 'Gå med i diskussionen eller starta en studiecirkel.' 
          : 'Join the discussion or start a study circle.'}
      </p>
      <div class="flex justify-center gap-4">
        <a href="/kontakt" class="rounded-md bg-manifesto-black px-6 py-3 text-sm font-bold text-white hover:bg-stone-800">
            {$t.footer.contact}
        </a>
        <a href="/verktyg" class="rounded-md border border-stone-300 bg-white px-6 py-3 text-sm font-bold text-stone-700 hover:bg-stone-50">
            {$locale === 'sv' ? 'Se Verktyg' : 'View Tools'}
        </a>
      </div>
    </div>

  </main>
</div>
