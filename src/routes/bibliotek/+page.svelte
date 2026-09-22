<script lang="ts">
  import { fade } from 'svelte/transition';
  import { t, locale } from '$lib/stores/i18n';
  import { whitepapers, books, papers, swedishResearch } from '$lib/data/library';
  import LibrarySection from '$lib/components/LibrarySection.svelte';

  let lang = $derived($locale as 'sv' | 'en');
</script>

<div class="mx-auto max-w-3xl px-6 py-12" in:fade>
  
  <header class="mb-16 border-b border-stone-200 pb-8">
    <h1 class="mb-6 font-sans text-4xl font-bold text-manifesto-black">
      {$t.nav.library}
    </h1>
    <p class="font-serif text-xl text-stone-600 dark:text-stone-400 leading-relaxed">
      {#if lang === 'sv'}
        Forskning och teori bakom svensk subsidiaritet. Från vårt eget arbete till internationell forskning och svensk akademisk grund.
      {:else}
        Research and theory behind Swedish subsidiarity. From our own work to international research and Swedish academic foundations.
      {/if}
    </p>
  </header>

  <!-- GSI cross-link (replaces the old LibrarySection) -->
  <section class="mb-16">
    <a 
      href="/ramverk/gsi"
      class="group flex items-center gap-6 rounded-xl border border-stone-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:border-stone-300"
    >
      <div class="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-sky-50 text-3xl border border-sky-200 shadow-sm">
        📐
      </div>
      <div class="flex-1">
        <div class="font-sans text-xs font-bold uppercase tracking-widest text-sky-600 mb-1">
          {lang === 'sv' ? 'Ramverk · Beta v3.0' : 'Framework · Beta v3.0'}
        </div>
        <h3 class="font-sans text-xl font-bold text-manifesto-black group-hover:underline">
          Global Subsidiarity Index (GSI)
        </h3>
        <p class="text-sm text-stone-500 mt-1">
          {lang === 'sv'
            ? 'Det universella ramverket för att mäta beslutsavstånd och resiliensarkitektur. Ramverk, dokumentation och nedladdningsbara PDF:er.'
            : 'The universal framework for measuring decision distance and resilience architecture. Framework, documentation, and downloadable PDFs.'}
        </p>
      </div>
      <span class="text-stone-300 group-hover:text-black transition-colors text-lg">→</span>
    </a>
  </section>

  <!-- Hypothesis paper: kept but demoted while under revision -->
  <section class="mb-16">
    <article class="flex flex-col gap-4 rounded-xl border border-stone-200 bg-stone-50 p-6 md:flex-row md:gap-8 dark:border-stone-700 dark:bg-stone-900/40">
      <div class="flex-shrink-0 md:w-32">
        <div class="mb-3 font-mono text-xs text-stone-400">2026</div>
        <span class="inline-block rounded bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">
          {lang === 'sv' ? 'Under revidering' : 'Under revision'}
        </span>
      </div>

      <div>
        <div class="mb-1 text-sm text-stone-500 dark:text-stone-400">
          {lang === 'sv' ? 'Tidig positionstext' : 'Early position paper'}
        </div>
        <h3 class="mb-3 text-2xl font-bold text-stone-800 hover:underline dark:text-stone-100">
          <a href="/bibliotek/svenska-subsidiaritetshypotesen">
            {lang === 'sv' ? 'Den svenska subsidiaritetshypotesen' : 'The Swedish Subsidiarity Hypothesis'}
          </a>
        </h3>
        <p class="mb-5 font-serif leading-relaxed text-stone-600 dark:text-stone-300">
          {lang === 'sv'
            ? 'Projektets första text om centraliseringens kostnader och ett mer distribuerat Sverige. Den skrevs innan våra nuvarande evidensstandarder och är mer tvärsäker än vi står för i dag. Den revideras.'
            : 'The project\'s first text on the costs of centralization and a more distributed Sweden. It was written before our current evidence standards and is more certain than we are today. It is being revised.'}
        </p>
        <div class="flex flex-wrap items-center gap-6 text-sm">
          <a href="/bibliotek/svenska-subsidiaritetshypotesen" class="font-bold text-stone-800 underline decoration-stone-300 underline-offset-4 hover:decoration-stone-800 dark:text-stone-100">
            {lang === 'sv' ? 'Läs online' : 'Read online'}
          </a>
          <a
            href={lang === 'sv' ? '/downloads/Svensk-Subsidiaritetshypotes-2026.pdf' : '/downloads/Swedish-Subsidiarity-Hypothesis-2026.pdf'}
            download
            class="text-stone-500 hover:text-stone-900 dark:hover:text-stone-100"
          >
            {lang === 'sv' ? 'Ladda ner PDF (originalversion)' : 'Download PDF (original version)'}
          </a>
        </div>
      </div>
    </article>
  </section>

  <LibrarySection 
    title={lang === 'sv' ? "Svensk forskning" : "Swedish Research"}
    subtitle={lang === 'sv' ? "Subsidiaritet och komplexitet" : "Subsidiarity & Complexity"}
    count={swedishResearch.length}
    isOpen={true}
  >
    <div class="col-span-full bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-4">
      <h3 class="font-bold text-sm uppercase tracking-wider text-blue-900 dark:text-blue-300 mb-2">
        {lang === 'sv' ? '📚 Om akademiska referenser' : '📚 About Academic References'}
      </h3>
      <p class="text-sm text-blue-900 dark:text-blue-200 leading-relaxed">
        {lang === 'sv'
          ? 'Nedan listar vi svensk akademisk forskning som behandlar subsidiaritet, requisite variety och decentraliserad styrning. Vi citerar deras publicerade arbete i enlighet med akademisk praxis.'
          : 'Below we list Swedish academic research on subsidiarity, requisite variety, and decentralized governance. We cite their published work in accordance with academic practice.'}
      </p>
    </div>

    {#each swedishResearch as research}
      <article class="group relative flex flex-col gap-2 pl-4 border-l-4 {research.tags.includes('Requisite Variety') ? 'border-green-200' : 'border-blue-200'}">
        <div class="flex justify-between items-baseline">
           <div class="font-mono text-xs text-stone-400">{research.date}</div>
           <div class="flex gap-2">
             {#each research.tags.slice(0, 1) as tag}
                <span class="bg-stone-100 text-stone-500 px-1.5 py-0.5 rounded text-[9px] uppercase font-bold">{tag}</span>
             {/each}
           </div>
        </div>

        <h4 class="text-lg font-bold text-manifesto-black group-hover:underline">
          <a href={research.url} target="_blank" rel="noopener noreferrer">
            {research.title[lang]} <span class="text-stone-300 text-sm">↗</span>
          </a>
        </h4>

        {#if research.author}
          <p class="font-serif text-sm text-stone-500 italic">{research.author[lang]}</p>
        {/if}
        
        <p class="text-sm text-stone-600 mt-1">{research.description[lang]}</p>
      </article>
    {/each}
  </LibrarySection>

  <LibrarySection 
    title="GGF Research"
    subtitle="Global Governance Frameworks"
    count={whitepapers.length}
    isOpen={false}
  >
    {#each whitepapers as paper}
      <article class="group relative flex flex-col gap-2">
        <div class="font-mono text-xs text-stone-400">{paper.date}</div>
        <h3 class="text-lg font-bold text-manifesto-black group-hover:underline">
          <a href={paper.url} target="_blank" rel="noopener noreferrer">
            {paper.title[lang]} <span class="text-stone-300 text-sm">↗</span>
          </a>
        </h3>
        <p class="text-sm text-stone-600">{paper.description[lang]}</p>
      </article>
    {/each}
  </LibrarySection>

  <LibrarySection 
    title={lang === 'sv' ? "Bokhyllan" : "Bookshelf"}
    subtitle="Ashby, Ostrom, Scott, et al."
    count={books.length}
    isOpen={false}
  >
    {#each books as book}
      <article class="group relative flex flex-col gap-2">
        <div class="font-mono text-xs text-stone-400">{book.date}</div>
        <h3 class="text-lg font-bold text-manifesto-black group-hover:underline">
          <a href={book.url} target="_blank" rel="noopener noreferrer">
            {book.title[lang]} <span class="text-stone-300 text-sm">↗</span>
          </a>
        </h3>
        {#if book.author}
          <p class="font-serif text-sm text-stone-500 italic">{book.author[lang]}</p>
        {/if}
        <p class="text-sm text-stone-600">{book.description[lang]}</p>
      </article>
    {/each}
  </LibrarySection>

  <LibrarySection 
    title={lang === 'sv' ? "Akademiska artiklar" : "Academic Papers"}
    count={papers.length}
    isOpen={false}
  >
    {#each papers as paper}
      <article class="group relative flex flex-col gap-2">
        <div class="font-mono text-xs text-stone-400">{paper.date}</div>
        <h3 class="text-lg font-bold text-manifesto-black group-hover:underline">
          <a href={paper.url} target="_blank" rel="noopener noreferrer">
            {paper.title[lang]} <span class="text-stone-300 text-sm">↗</span>
          </a>
        </h3>
        {#if paper.author}
          <p class="font-serif text-sm text-stone-500 italic">{paper.author[lang]}</p>
        {/if}
      </article>
    {/each}
  </LibrarySection>

</div>
