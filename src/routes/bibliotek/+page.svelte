<script lang="ts">
  import { t, locale } from '$lib/stores/i18n';
  import { whitepapers, books, papers } from '$lib/data/library';
  import { fade } from 'svelte/transition';

  $: lang = $locale as 'sv' | 'en';
</script>

<div class="mx-auto max-w-3xl px-6 py-12" in:fade>
  
  <header class="mb-16 border-b border-stone-200 pb-8">
    <h1 class="mb-6 font-sans text-4xl font-bold text-manifesto-black">
      {$t.nav.library}
    </h1>
    <p class="font-serif text-xl text-stone-600 leading-relaxed">
      {#if lang === 'sv'}
        Här samlar vi grundforskningen bakom GGF. Detta är inte åsikter, utan systemanalyser validerade genom simulering och historisk data.
      {:else}
        Here we collect the foundational research behind the GGF. These are not opinions, but systems analyses validated through simulation and historical data.
      {/if}
    </p>
  </header>

<section class="mb-24">
    <h2 class="mb-10 font-sans text-2xl font-bold text-manifesto-black">
      {#if lang === 'sv'}
        GGF-forskning
      {:else}
        GGF Research
      {/if}
    </h2>
    <div class="space-y-20">
      
      <article class="group relative flex flex-col md:flex-row gap-4 md:gap-8 bg-stone-50/80 p-6 -mx-6 rounded-xl border border-stone-200 shadow-sm">
        
        <div class="md:w-32 flex-shrink-0 pt-1">
          <div class="font-mono text-xs text-stone-500 mb-3">2026</div>
          <div class="flex flex-wrap gap-2">
            <span class="bg-manifesto-black text-white px-2 py-1 rounded-[2px] text-[10px] uppercase tracking-wider font-bold">
              {lang === 'sv' ? 'NYHET' : 'NEW'}
            </span>
            <span class="bg-stone-200 text-stone-600 px-2 py-1 rounded-[2px] text-[10px] uppercase tracking-wider font-bold">
              POLICY
            </span>
          </div>
        </div>

        <div>
          <h3 class="text-2xl font-bold text-manifesto-black mb-3 group-hover:underline decoration-stone-300 underline-offset-4 transition-all">
            <a href="/bibliotek/svenska-subsidiaritetshypotesen">
              {lang === 'sv' ? 'Den Svenska Subsidiaritetshypotesen' : 'The Swedish Subsidiarity Hypothesis'}
            </a>
          </h3>
          
          <p class="font-serif text-stone-700 leading-relaxed mb-6 text-lg">
            {lang === 'sv' 
              ? 'Vitboken som diagnostiserar centraliseringens kostnader och presenterar ramverket för ett distribuerat Sverige.' 
              : 'The whitepaper diagnosing the costs of centralization and presenting the framework for a distributed Sweden.'}
          </p>
          
          <div class="flex flex-wrap gap-6 items-center">
            <a href="/bibliotek/svenska-subsidiaritetshypotesen" class="text-sm font-bold uppercase tracking-widest text-manifesto-black border-b-2 border-black pb-0.5 hover:opacity-70 transition-opacity">
              {lang === 'sv' ? 'Läs Online' : 'Read Online'} →
            </a>

            <a 
              href={lang === 'sv' ? '/downloads/Svensk-Subsidiaritetshypotes-2026.pdf' : '/downloads/Swedish-Subsidiarity-Hypothesis-2026.pdf'}
              download
              class="text-sm font-bold uppercase tracking-widest text-stone-400 hover:text-black transition-colors flex items-center gap-2"
            >
              <span>↓</span> {lang === 'sv' ? 'Ladda ner PDF' : 'Download PDF'}
            </a>
          </div>
        </div>
      </article>

      {#each whitepapers as paper}
        <article class="group relative flex flex-col md:flex-row gap-4 md:gap-8">
          
          <div class="md:w-32 flex-shrink-0 pt-1">
            <div class="font-mono text-xs text-stone-400 mb-3">{paper.date}</div>
            <div class="flex flex-wrap gap-2">
              {#each paper.tags as tag}
                <span class="bg-stone-100 text-stone-500 px-2 py-1 rounded-[2px] text-[10px] uppercase tracking-wider font-bold">
                  {tag}
                </span>
              {/each}
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-manifesto-black mb-3 group-hover:underline decoration-stone-300 underline-offset-4 transition-all">
              <a href={paper.url} target="_blank" rel="noopener noreferrer">
                {paper.title[lang]} 
                <span class="text-stone-300 ml-1 text-sm font-normal">↗</span>
              </a>
            </h3>
            <p class="font-serif text-stone-600 leading-relaxed mb-5 text-lg">
              {paper.description[lang]}
            </p>
            
            <a 
              href={paper.url} 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-sm font-bold uppercase tracking-widest text-stone-400 hover:text-black transition-colors"
            >
              {#if lang === 'sv'}Läs PDF{:else}Read PDF{/if}
            </a>
          </div>

        </article>
      {/each}
    </div>
  </section>

  <!-- Books -->
  <section class="mb-24">
    <h2 class="mb-10 font-sans text-2xl font-bold text-manifesto-black">
      {#if lang === 'sv'}
        Böcker
      {:else}
        Books
      {/if}
    </h2>
    <div class="space-y-16">
      {#each books as book}
        <article class="group relative flex flex-col md:flex-row gap-4 md:gap-8">
          
          <div class="md:w-32 flex-shrink-0 pt-1">
            <div class="font-mono text-xs text-stone-400 mb-3">{book.date}</div>
            <div class="flex flex-wrap gap-2">
              {#each book.tags as tag}
                <span class="bg-stone-100 text-stone-500 px-2 py-1 rounded-[2px] text-[10px] uppercase tracking-wider font-bold">
                  {tag}
                </span>
              {/each}
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-manifesto-black mb-2 group-hover:underline decoration-stone-300 underline-offset-4 transition-all">
              <a href={book.url} target="_blank" rel="noopener noreferrer">
                {book.title[lang]} 
                <span class="text-stone-300 ml-1 text-sm font-normal">↗</span>
              </a>
            </h3>
            {#if book.author}
              <p class="font-serif text-sm text-stone-500 mb-3 italic">
                {book.author[lang]}
              </p>
            {/if}
            <p class="font-serif text-stone-600 leading-relaxed text-base">
              {book.description[lang]}
            </p>
          </div>

        </article>
      {/each}
    </div>
  </section>

  <!-- Academic Papers -->
  <section>
    <h2 class="mb-10 font-sans text-2xl font-bold text-manifesto-black">
      {#if lang === 'sv'}
        Akademiska artiklar
      {:else}
        Academic Papers
      {/if}
    </h2>
    <div class="space-y-16">
      {#each papers as paper}
        <article class="group relative flex flex-col md:flex-row gap-4 md:gap-8">
          
          <div class="md:w-32 flex-shrink-0 pt-1">
            <div class="font-mono text-xs text-stone-400 mb-3">{paper.date}</div>
            <div class="flex flex-wrap gap-2">
              {#each paper.tags as tag}
                <span class="bg-stone-100 text-stone-500 px-2 py-1 rounded-[2px] text-[10px] uppercase tracking-wider font-bold">
                  {tag}
                </span>
              {/each}
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-manifesto-black mb-2 group-hover:underline decoration-stone-300 underline-offset-4 transition-all">
              <a href={paper.url} target="_blank" rel="noopener noreferrer">
                {paper.title[lang]} 
                <span class="text-stone-300 ml-1 text-sm font-normal">↗</span>
              </a>
            </h3>
            {#if paper.author}
              <p class="font-serif text-sm text-stone-500 mb-3 italic">
                {paper.author[lang]}
              </p>
            {/if}
            <p class="font-serif text-stone-600 leading-relaxed text-base">
              {paper.description[lang]}
            </p>
          </div>

        </article>
      {/each}
    </div>
  </section>

</div>
