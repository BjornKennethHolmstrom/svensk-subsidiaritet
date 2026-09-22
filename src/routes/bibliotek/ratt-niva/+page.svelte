<script lang="ts">
  import { locale, t } from '$lib/stores/i18n';
  import { fade } from 'svelte/transition';

  // Load all section files. English files are optional: missing ones fall back to Swedish.
  const modules = import.meta.glob('./sections/*.md', { eager: true }) as Record<string, { default: any }>;

  function sectionComponent(id: string, lang: string) {
    return (modules[`./sections/${id}-${lang}.md`] ?? modules[`./sections/${id}-sv.md`])?.default;
  }

  const contentMap = [
    { id: 'sammanfattning', titleSv: 'Sammanfattning', titleEn: 'Summary' },
    { id: 'varfor', titleSv: 'Varför en ny text', titleEn: 'Why a new text' },
    { id: 'princip', titleSv: '1. Principen', titleEn: '1. The principle' },
    { id: 'granskning', titleSv: '2. Vad granskningen visade', titleEn: '2. What the review showed' },
    { id: 'hypoteser', titleSv: '3. Fem hypoteser', titleEn: '3. Five hypotheses' },
    { id: 'forslag', titleSv: '4. Förslagen', titleEn: '4. The proposals' },
    { id: 'begransningar', titleSv: '5. Begränsningar och öppna frågor', titleEn: '5. Limitations and open questions' },
    { id: 'kallor', titleSv: 'Källor', titleEn: 'Sources' }
  ];

  let activeSection = 'sammanfattning';

  function scrollTo(id: string) {
    activeSection = id;
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  function onScroll() {
    for (const s of contentMap) {
      const el = document.getElementById(s.id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= 300) {
          activeSection = s.id;
          break;
        }
      }
    }
  }

  const titleSv = 'Rätt nivå';
  const titleEn = 'The Right Level';
  const subtitleSv = 'En reviderad hypotes om subsidiaritet och styrning i Sverige';
  const subtitleEn = 'A revised hypothesis on subsidiarity and governance in Sweden';
</script>

<svelte:head>
  <title>{$locale === 'sv' ? `${titleSv} | Svensk Subsidiaritet` : `${titleEn} | Swedish Subsidiarity`}</title>
  <meta
    name="description"
    content={$locale === 'sv'
      ? 'Projektets positionstext: subsidiaritet som att söka rätt nivå, fyra mönster från en granskning av tio svenska samhällssystem och fem prövbara hypoteser.'
      : 'The project’s position paper: subsidiarity as finding the right level, four patterns from a review of ten Swedish public systems, and five testable hypotheses.'}
  />
</svelte:head>

<svelte:window on:scroll={onScroll} />

<div class="mx-auto max-w-7xl px-4 py-12 md:py-20 lg:flex lg:gap-12" in:fade>

  <aside class="hidden w-64 flex-shrink-0 lg:block">
    <div class="sticky top-24 space-y-8">
      <div class="rounded-lg border border-stone-200 bg-stone-50 p-4 text-sm text-stone-600">
        <div class="mb-1 font-sans font-bold text-stone-900">
          {$locale === 'sv' ? 'Positionstext' : 'Position paper'}
        </div>
        {$locale === 'sv' ? 'September 2026. Ersätter' : 'September 2026. Replaces'}
        <a href="/bibliotek/svenska-subsidiaritetshypotesen" class="underline decoration-stone-300 underline-offset-2 hover:decoration-stone-800">
          {$locale === 'sv' ? 'Den svenska subsidiaritetshypotesen' : 'The Swedish Subsidiarity Hypothesis'}
        </a>.
      </div>

      <nav class="space-y-1 border-l border-stone-200 pl-4">
        {#each contentMap as section}
          <button
            on:click={() => scrollTo(section.id)}
            class="-ml-[17px] block w-full border-l-2 py-2 pl-4 text-left text-sm transition-all
            {activeSection === section.id
              ? 'border-manifesto-black font-bold text-manifesto-black'
              : 'border-transparent text-stone-500 hover:border-stone-300 hover:text-stone-800'}"
          >
            {$locale === 'sv' ? section.titleSv : section.titleEn}
          </button>
        {/each}
      </nav>

      <a href="/bibliotek" class="block text-sm text-stone-500 hover:text-stone-800">
        ← {$locale === 'sv' ? 'Tillbaka till biblioteket' : 'Back to Library'}
      </a>
    </div>
  </aside>

  <main class="min-w-0 flex-1">
    <header class="mb-16 border-b border-stone-200 pb-8">
      <p class="mb-3 font-sans text-sm font-semibold text-stone-500">
        {$locale === 'sv' ? 'Positionstext · september 2026' : 'Position paper · September 2026'}
      </p>
      <h1 class="mb-4 font-sans text-4xl font-bold leading-tight text-manifesto-black md:text-5xl">
        {$locale === 'sv' ? titleSv : titleEn}
      </h1>
      <p class="font-serif text-xl text-stone-600">
        {$locale === 'sv' ? subtitleSv : subtitleEn}
      </p>
    </header>

    <div class="space-y-24">
      {#each contentMap as section}
        <section id={section.id} class="scroll-mt-32">
          <div class="mb-8 flex items-center gap-4">
            <span class="h-px flex-1 bg-stone-300"></span>
            <span class="font-sans text-sm font-semibold text-stone-500">
              {$locale === 'sv' ? section.titleSv : section.titleEn}
            </span>
          </div>

          <article
            class="prose prose-stone prose-lg max-w-none
            prose-headings:font-sans prose-headings:font-bold prose-headings:text-manifesto-black
            prose-p:font-serif prose-p:leading-relaxed prose-p:text-stone-700
            prose-a:text-stone-900 prose-a:underline prose-a:decoration-stone-300 prose-a:underline-offset-2 hover:prose-a:decoration-stone-800
            prose-li:marker:text-stone-400"
          >
            <svelte:component this={sectionComponent(section.id, $locale)} />
          </article>
        </section>
      {/each}
    </div>

    <div class="mt-24 rounded-xl bg-stone-100 p-8 text-center">
      <h3 class="mb-2 font-sans font-bold text-manifesto-black">
        {$locale === 'sv' ? 'Har vi fel?' : 'Are we wrong?'}
      </h3>
      <p class="mb-6 font-serif text-stone-600">
        {$locale === 'sv'
          ? 'Vi tar gärna emot invändningar, rättelser och underlag som talar emot hypoteserna.'
          : 'We welcome objections, corrections and evidence that counts against the hypotheses.'}
      </p>
      <div class="flex justify-center gap-4">
        <a href="/kontakt" class="rounded-md bg-manifesto-black px-6 py-3 text-sm font-bold text-white hover:bg-stone-800">
          {$t.footer.contact}
        </a>
        <a href="/evidens/syntes/motevidens" class="rounded-md border border-stone-300 bg-white px-6 py-3 text-sm font-bold text-stone-700 hover:bg-stone-50">
          {$locale === 'sv' ? 'Se motevidensen' : 'See the counter-evidence'}
        </a>
      </div>
    </div>
  </main>
</div>
