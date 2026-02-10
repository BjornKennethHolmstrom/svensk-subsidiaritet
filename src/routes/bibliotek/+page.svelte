<script lang="ts">
  import { t, locale } from '$lib/stores/i18n';
  import { whitepapers, books, papers, swedishResearch } from '$lib/data/library';
  import { fade } from 'svelte/transition';

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

  <!-- Swedish Subsidiarity Hypothesis - Featured -->
  <section class="mb-24">
    <article class="group relative flex flex-col md:flex-row gap-4 md:gap-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-2xl border-2 border-blue-200 dark:border-blue-800 shadow-lg">
      
      <div class="md:w-32 flex-shrink-0 pt-1">
        <div class="font-mono text-xs text-blue-600 dark:text-blue-400 font-bold mb-3">2026</div>
        <div class="flex flex-wrap gap-2">
          <span class="bg-blue-600 text-white px-3 py-1.5 rounded text-[11px] uppercase tracking-wider font-bold">
            {lang === 'sv' ? 'NYHET' : 'NEW'}
          </span>
          <span class="bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 px-2 py-1 rounded-[2px] text-[10px] uppercase tracking-wider font-bold">
            SVERIGE
          </span>
        </div>
      </div>

      <div>
        <div class="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
          {lang === 'sv' ? '🇸🇪 Svensk Subsidiaritet' : '🇸🇪 Swedish Subsidiarity'}
        </div>
        <h3 class="text-3xl font-bold text-manifesto-black dark:text-white mb-4 group-hover:underline decoration-blue-300 underline-offset-4 transition-all">
          <a href="/bibliotek/svenska-subsidiaritetshypotesen">
            {lang === 'sv' ? 'Den Svenska Subsidiaritetshypotesen' : 'The Swedish Subsidiarity Hypothesis'}
          </a>
        </h3>
        
        <p class="font-serif text-stone-700 dark:text-stone-300 leading-relaxed mb-6 text-lg">
          {lang === 'sv' 
            ? 'Vitboken som diagnostiserar centraliseringens kostnader och presenterar ramverket för ett distribuerat Sverige. Vårt huvuddokument för svensk systemförändring.' 
            : 'The whitepaper diagnosing the costs of centralization and presenting the framework for a distributed Sweden. Our main document for Swedish systems change.'}
        </p>
        
        <div class="flex flex-wrap gap-6 items-center">
          <a href="/bibliotek/svenska-subsidiaritetshypotesen" class="text-sm font-bold uppercase tracking-widest text-manifesto-black dark:text-white border-b-2 border-black dark:border-white pb-0.5 hover:opacity-70 transition-opacity">
            {lang === 'sv' ? 'Läs Online' : 'Read Online'} →
          </a>

          <a 
            href={lang === 'sv' ? '/downloads/Svensk-Subsidiaritetshypotes-2026.pdf' : '/downloads/Swedish-Subsidiarity-Hypothesis-2026.pdf'}
            download
            class="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 hover:text-black dark:hover:text-white transition-colors flex items-center gap-2"
          >
            <span>↓</span> {lang === 'sv' ? 'Ladda ner PDF' : 'Download PDF'}
          </a>
        </div>
      </div>
    </article>
  </section>

  <!-- GGF Research -->
  <section class="mb-24">
    <h2 class="mb-4 font-sans text-2xl font-bold text-manifesto-black dark:text-white">
      {#if lang === 'sv'}
        GGF-forskning (Global Governance Frameworks)
      {:else}
        GGF Research (Global Governance Frameworks)
      {/if}
    </h2>
    <p class="font-serif text-stone-600 dark:text-stone-400 mb-10 text-sm">
      {#if lang === 'sv'}
        Grundforskning om globala styrningssystem och decentraliserad beslutsfattande från Global Governance Frameworks-projektet.
      {:else}
        Foundational research on global governance systems and decentralized decision-making from the Global Governance Frameworks project.
      {/if}
    </p>
    <div class="space-y-20">

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

  <!-- Swedish Research Section -->
  <section class="mb-24">
    <div class="mb-10">
      <h2 class="font-sans text-2xl font-bold text-manifesto-black mb-4">
        {#if lang === 'sv'}
          Svensk forskning om subsidiaritet och requisite variety
        {:else}
          Swedish Research on Subsidiarity and Requisite Variety
        {/if}
      </h2>
      
      <!-- Academic Citation Disclaimer -->
      <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
        <h3 class="font-bold text-sm uppercase tracking-wider text-blue-900 dark:text-blue-300 mb-2">
          {#if lang === 'sv'}
            📚 Om akademiska referenser
          {:else}
            📚 About Academic References
          {/if}
        </h3>
        <p class="text-sm text-blue-900 dark:text-blue-200 leading-relaxed">
          {#if lang === 'sv'}
            Nedan listar vi svensk akademisk forskning som behandlar subsidiaritet, requisite variety och decentraliserad styrning. <strong>Detta innebär inte att forskarna stödjer eller är kopplade till denna webbplats.</strong> Vi citerar deras publicerade arbete i enlighet med akademisk praxis för att bygga på en solid teoretisk grund och visa att dessa idéer har djup vetenskaplig förankring i svensk kontext.
          {:else}
            Below we list Swedish academic research on subsidiarity, requisite variety, and decentralized governance. <strong>This does not imply that the researchers support or are affiliated with this website.</strong> We cite their published work in accordance with academic practice to build on a solid theoretical foundation and show that these ideas have deep scientific grounding in the Swedish context.
          {/if}
        </p>
      </div>
    </div>

    <!-- Subsidiarity Research -->
    <div class="mb-16">
      <h3 class="font-sans text-lg font-bold text-stone-700 mb-6 uppercase tracking-wider">
        {#if lang === 'sv'}
          Subsidiaritet i svensk kontext
        {:else}
          Subsidiarity in Swedish Context
        {/if}
      </h3>
      <div class="space-y-12">
        {#each swedishResearch.filter(r => r.tags.includes('Subsidiarity')) as research}
          <article class="group relative flex flex-col md:flex-row gap-4 md:gap-8 pl-6 border-l-4 border-blue-200">
            
            <div class="md:w-32 flex-shrink-0 pt-1">
              <div class="font-mono text-xs text-stone-400 mb-3">{research.date}</div>
              {#if research.type}
                <div class="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-[2px] text-[10px] uppercase tracking-wider font-bold mb-2">
                  {research.type}
                </div>
              {/if}
              <div class="flex flex-wrap gap-2">
                {#each research.tags.slice(0, 2) as tag}
                  <span class="bg-stone-100 text-stone-500 px-2 py-1 rounded-[2px] text-[10px] uppercase tracking-wider font-bold">
                    {tag}
                  </span>
                {/each}
              </div>
            </div>

            <div>
              <h4 class="text-lg font-bold text-manifesto-black mb-2 group-hover:underline decoration-stone-300 underline-offset-4 transition-all">
                <a href={research.url} target="_blank" rel="noopener noreferrer">
                  {research.title[lang]} 
                  <span class="text-stone-300 ml-1 text-sm font-normal">↗</span>
                </a>
              </h4>
              {#if research.author}
                <p class="font-serif text-sm text-stone-500 mb-1">
                  {research.author[lang]}
                </p>
              {/if}
              {#if research.institution}
                <p class="font-serif text-xs text-stone-400 mb-3 italic">
                  {research.institution[lang]}
                </p>
              {/if}
              <p class="font-serif text-stone-600 leading-relaxed text-base">
                {research.description[lang]}
              </p>
            </div>

          </article>
        {/each}
      </div>
    </div>

    <!-- Requisite Variety Research -->
    <div>
      <h3 class="font-sans text-lg font-bold text-stone-700 mb-6 uppercase tracking-wider">
        {#if lang === 'sv'}
          Requisite variety i svensk styrning
        {:else}
          Requisite Variety in Swedish Governance
        {/if}
      </h3>
      <div class="space-y-12">
        {#each swedishResearch.filter(r => r.tags.includes('Requisite Variety')) as research}
          <article class="group relative flex flex-col md:flex-row gap-4 md:gap-8 pl-6 border-l-4 border-green-200">
            
            <div class="md:w-32 flex-shrink-0 pt-1">
              <div class="font-mono text-xs text-stone-400 mb-3">{research.date}</div>
              {#if research.type}
                <div class="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded-[2px] text-[10px] uppercase tracking-wider font-bold mb-2">
                  {research.type}
                </div>
              {/if}
              <div class="flex flex-wrap gap-2">
                {#each research.tags.slice(0, 2) as tag}
                  <span class="bg-stone-100 text-stone-500 px-2 py-1 rounded-[2px] text-[10px] uppercase tracking-wider font-bold">
                    {tag}
                  </span>
                {/each}
              </div>
            </div>

            <div>
              <h4 class="text-lg font-bold text-manifesto-black mb-2 group-hover:underline decoration-stone-300 underline-offset-4 transition-all">
                <a href={research.url} target="_blank" rel="noopener noreferrer">
                  {research.title[lang]} 
                  <span class="text-stone-300 ml-1 text-sm font-normal">↗</span>
                </a>
              </h4>
              {#if research.author}
                <p class="font-serif text-sm text-stone-500 mb-1">
                  {research.author[lang]}
                </p>
              {/if}
              {#if research.institution}
                <p class="font-serif text-xs text-stone-400 mb-3 italic">
                  {research.institution[lang]}
                </p>
              {/if}
              <p class="font-serif text-stone-600 leading-relaxed text-base">
                {research.description[lang]}
              </p>
            </div>

          </article>
        {/each}
      </div>
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
