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
    <p class="font-serif text-xl text-stone-600 leading-relaxed">
      {#if lang === 'sv'}
        Forskning och teori bakom svensk subsidiaritet. Från vårt eget arbete till internationell forskning och svensk akademisk grund.
      {:else}
        Research and theory behind Swedish subsidiarity. From our own work to international research and Swedish academic foundations.
      {/if}
    </p>
  </header>

  <!-- Current position paper -->
  <section class="mb-16">
    <article class="flex flex-col gap-4 rounded-xl border border-stone-300 bg-white p-6 md:flex-row md:gap-8">
      <div class="flex-shrink-0 md:w-32">
        <div class="mb-3 font-mono text-xs text-stone-400">2026</div>
        <span class="inline-block rounded bg-stone-100 px-2 py-1 text-xs font-semibold text-stone-700">
          {lang === 'sv' ? 'Positionstext' : 'Position paper'}
        </span>
      </div>
      <div>
        <h3 class="mb-1 text-2xl font-bold text-stone-900 hover:underline">
          <a href="/bibliotek/ratt-niva">{lang === 'sv' ? 'Rätt nivå' : 'The Right Level'}</a>
        </h3>
        <p class="mb-3 font-serif text-lg text-stone-600">
          {lang === 'sv'
            ? 'En reviderad hypotes om subsidiaritet och styrning i Sverige'
            : 'A revised hypothesis on subsidiarity and governance in Sweden'}
        </p>
        <p class="mb-5 font-serif leading-relaxed text-stone-600">
          {lang === 'sv'
            ? 'Projektets positionstext efter en granskning av tio svenska samhällssystem: subsidiaritet som att söka rätt nivå, fyra återkommande mönster och fem hypoteser som kan prövas.'
            : 'The project’s position paper after a review of ten Swedish public systems: subsidiarity as finding the right level, four recurring patterns and five testable hypotheses.'}
        </p>
        <a href="/bibliotek/ratt-niva" class="text-sm font-bold text-stone-900 underline decoration-stone-300 underline-offset-4 hover:decoration-stone-900">
          {lang === 'sv' ? 'Läs online' : 'Read online'}
        </a>
      </div>
    </article>
  </section>

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
          {lang === 'sv' ? 'Ramverk · v4.0' : 'Framework · v4.0'}
        </div>
        <h3 class="font-sans text-xl font-bold text-manifesto-black group-hover:underline">
          Global Subsidiarity Index (GSI)
        </h3>
        <p class="text-sm text-stone-500 mt-1">
          {lang === 'sv'
            ? 'Ett ramverk för att mäta beslutsavstånd och resiliensarkitektur. Ramverk, dokumentation och nedladdningsbara PDF:er.'
            : 'A framework for measuring decision distance and resilience architecture. Framework, documentation, and downloadable PDFs.'}
        </p>
      </div>
      <span class="text-stone-300 group-hover:text-black transition-colors text-lg">→</span>
    </a>
  </section>

  <LibrarySection 
    title={lang === 'sv' ? "Svensk forskning" : "Swedish Research"}
    subtitle={lang === 'sv' ? "Subsidiaritet och komplexitet" : "Subsidiarity & Complexity"}
    count={swedishResearch.length}
    isOpen={true}
  >
    <div class="col-span-full mb-4 rounded-lg border border-stone-200 bg-stone-50 p-6">
      <h3 class="mb-2 font-sans text-sm font-bold text-stone-900">
        {lang === 'sv' ? '📚 Om akademiska referenser' : '📚 About academic references'}
      </h3>
      <p class="text-sm leading-relaxed text-stone-700">
        {lang === 'sv'
          ? 'Nedan listar vi svensk akademisk forskning som behandlar subsidiaritet, nödvändig variation och decentraliserad styrning. Vi citerar forskarnas publicerade arbete i enlighet med akademisk praxis. Att vi hänvisar till en studie innebär inte att forskarna delar våra slutsatser.'
          : 'Below we list Swedish academic research on subsidiarity, requisite variety and decentralized governance. We cite the researchers\' published work in accordance with academic practice. Citing a study does not mean its authors share our conclusions.'}
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

  <!-- Archive -->
  <section class="mt-16 border-t border-stone-200 pt-10">
    <h2 class="mb-6 font-sans text-xl font-bold text-stone-900">{lang === 'sv' ? 'Arkiv' : 'Archive'}</h2>
    <article class="flex flex-col gap-4 rounded-xl border border-stone-200 bg-stone-50 p-6 md:flex-row md:gap-8">
      <div class="flex-shrink-0 md:w-32">
        <div class="mb-3 font-mono text-xs text-stone-400">2026</div>
        <span class="inline-block rounded bg-stone-200 px-2 py-1 text-xs font-semibold text-stone-700">
          {lang === 'sv' ? 'Arkiverad' : 'Archived'}
        </span>
      </div>
      <div>
        <h3 class="mb-3 text-xl font-bold text-stone-700 hover:underline">
          <a href="/bibliotek/svenska-subsidiaritetshypotesen">
            {lang === 'sv' ? 'Den svenska subsidiaritetshypotesen' : 'The Swedish Subsidiarity Hypothesis'}
          </a>
        </h3>
        <p class="font-serif leading-relaxed text-stone-600">
          {lang === 'sv'
            ? 'Projektets första positionstext, ersatt av Rätt nivå. Den finns kvar oförändrad för att visa hur projektets tänkande har utvecklats, men flera av dess uppgifter och dess huvudtes höll inte vid granskningen.'
            : 'The project’s first position paper, replaced by The Right Level. It is kept unchanged to show how the project’s thinking has developed, but several of its claims and its main thesis did not hold up under review.'}
        </p>
      </div>
    </article>
  </section>

</div>
