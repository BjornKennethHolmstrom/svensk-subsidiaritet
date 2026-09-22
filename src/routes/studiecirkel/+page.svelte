<script lang="ts">
  import { locale } from '$lib/stores/i18n';
  import { fade } from 'svelte/transition';

  // Set to true when the complete PDF has been regenerated from the revised material
  const fullPdfAvailable = false;

  const facilitatorGuides = [
    { number: 1, sv: 'Hur möter vi systemen?', en: 'How do we experience the systems?' },
    { number: 2, sv: 'Närhetskompassen – ett verktyg för att undersöka', en: 'The Proximity Compass – a tool for inquiry' },
    { number: 3, sv: 'Subsidiaritet – en princip att pröva', en: 'Subsidiarity – a principle to test' },
    { number: 4, sv: 'Från ord till handling', en: 'From words to action' }
  ];

  const printableMaterials = [
    { id: 'systemkanslometer', icon: '📊', traff: 1, sv: 'Systemkänslometer', en: 'System Feeling Meter' },
    { id: 'kompass', icon: '🧭', traff: 2, sv: 'Närhetskompassen', en: 'Proximity Compass' },
    { id: 'exempel', icon: '💡', traff: 3, sv: 'Exempelkort', en: 'Example cards' },
    { id: 'skattkarta', icon: '🗺️', traff: 4, sv: 'Skattkarta', en: 'Treasure Map' },
    { id: 'handlingsplan', icon: '📋', traff: 4, sv: 'Handlingsplan', en: 'Action Plan' },
    { id: 'kontrakt', icon: '✍️', traff: 4, sv: '30-dagarslöfte', en: '30-Day Pledge' }
  ];

  const supportMaterials = [
    { id: 'innan', icon: '📖', sv: 'Innan du börjar', en: 'Before You Begin' },
    { id: 'leda', icon: '🎯', sv: 'Att leda samtal', en: 'Leading Conversations' },
    { id: 'efter', icon: '🌱', sv: 'Efter cirkeln', en: 'After the Circle' }
  ];

  const card =
    'block rounded-lg border border-stone-200 bg-white transition-colors hover:border-stone-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-800 group';
</script>

<div class="mx-auto max-w-6xl px-6 py-12" in:fade={{ duration: 200 }}>

  <header class="mb-16 border-b border-stone-200 pb-8">
    <h1 class="mb-4 text-4xl font-bold text-manifesto-black">
      {$locale === 'sv' ? 'Studiecirkel om subsidiaritet' : 'Study Circle on Subsidiarity'}
    </h1>
    <p class="max-w-3xl text-xl text-stone-600">
      {$locale === 'sv'
        ? 'Material för att starta och leda en studiecirkel i fyra träffar om hur samhällets system fungerar i vardagen, och om var besluten bör fattas. Cirkeln utgår från principen om subsidiaritet, och deltagarna får pröva den – inklusive argumenten emot.'
        : 'Materials for starting and leading a four-session study circle on how public systems work in everyday life, and where decisions should be made. The circle starts from the principle of subsidiarity, and participants get to test it – including the arguments against.'}
    </p>
  </header>

  <section class="mb-16 rounded-lg border border-stone-200 bg-stone-50 p-8">
    <h2 class="mb-4 text-2xl font-semibold text-stone-900">
      {$locale === 'sv' ? 'Snabbstart' : 'Quick start'}
    </h2>
    <ol class="space-y-3 text-stone-700">
      <li class="flex gap-3"><span class="font-bold">1.</span><span>{$locale === 'sv' ? 'Läs ledarguiden "Innan du börjar".' : 'Read the facilitator guide "Before You Begin".'}</span></li>
      <li class="flex gap-3"><span class="font-bold">2.</span><span>{$locale === 'sv' ? 'Skriv ut materialet för träff 1.' : 'Print the materials for session 1.'}</span></li>
      <li class="flex gap-3"><span class="font-bold">3.</span><span>{$locale === 'sv' ? 'Bjud in 6–12 personer, ordna fika och börja.' : 'Invite 6–12 people, arrange coffee and begin.'}</span></li>
    </ol>
  </section>

  <section class="mb-16">
    <h2 class="mb-8 text-3xl font-bold text-manifesto-black">
      {$locale === 'sv' ? 'Ledarguider för varje träff' : 'Facilitator guides for each session'}
    </h2>
    <div class="grid gap-6 md:grid-cols-2">
      {#each facilitatorGuides as guide}
        <a href="/studiecirkel/traff-{guide.number}" class="{card} p-6">
          <div class="flex items-start gap-4">
            <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-stone-100 text-xl font-bold text-stone-800">
              {guide.number}
            </div>
            <div class="flex-1">
              <h3 class="mb-2 text-xl font-semibold text-stone-900 decoration-stone-300 underline-offset-4 group-hover:underline">
                {$locale === 'sv' ? `Träff ${guide.number}` : `Session ${guide.number}`}
              </h3>
              <p class="mb-3 text-sm text-stone-600">{$locale === 'sv' ? guide.sv : guide.en}</p>
              <span class="text-sm font-semibold text-stone-800">
                {$locale === 'sv' ? 'Läs guiden och skriv ut material →' : 'Read the guide and print materials →'}
              </span>
            </div>
          </div>
        </a>
      {/each}
    </div>
  </section>

  <section class="mb-16">
    <h2 class="mb-8 text-3xl font-bold text-manifesto-black">
      {$locale === 'sv' ? 'Material att skriva ut' : 'Printable materials'}
    </h2>
    <div class="grid gap-4 md:grid-cols-3">
      {#each printableMaterials as material}
        <a href="/studiecirkel/material/{material.id}" class="{card} p-5">
          <div class="mb-2 flex items-center gap-3">
            <span class="text-2xl" aria-hidden="true">{material.icon}</span>
            <span class="text-xs font-semibold text-stone-500">
              {$locale === 'sv' ? `Träff ${material.traff}` : `Session ${material.traff}`}
            </span>
          </div>
          <h3 class="font-semibold text-stone-900 decoration-stone-300 underline-offset-4 group-hover:underline">
            {$locale === 'sv' ? material.sv : material.en}
          </h3>
        </a>
      {/each}
    </div>
  </section>

  <section class="mb-16">
    <h2 class="mb-8 text-3xl font-bold text-manifesto-black">
      {$locale === 'sv' ? 'Stödmaterial för cirkelledare' : 'Support materials for facilitators'}
    </h2>
    <div class="grid gap-4 md:grid-cols-3">
      {#each supportMaterials as material}
        <a href="/studiecirkel/guide/{material.id}" class="{card} bg-stone-50 p-5">
          <div class="mb-3 text-3xl" aria-hidden="true">{material.icon}</div>
          <h3 class="font-semibold text-stone-900 decoration-stone-300 underline-offset-4 group-hover:underline">
            {$locale === 'sv' ? material.sv : material.en}
          </h3>
        </a>
      {/each}
    </div>
  </section>

  {#if fullPdfAvailable}
    <section class="rounded-lg border border-stone-200 bg-stone-50 p-8">
      <div class="flex flex-col items-center justify-between gap-6 md:flex-row">
        <div>
          <h3 class="mb-2 text-xl font-semibold text-stone-900">
            {$locale === 'sv' ? 'Skriv ut allt på en gång' : 'Print everything at once'}
          </h3>
          <p class="text-stone-600">
            {$locale === 'sv'
              ? 'Ladda ner en PDF med alla guider och allt material.'
              : 'Download a PDF with all guides and materials.'}
          </p>
        </div>
        <a
          href="/downloads/Studiecirkel-Komplett-{$locale === 'sv' ? 'SV' : 'EN'}.pdf"
          download
          class="whitespace-nowrap rounded-lg bg-manifesto-black px-6 py-3 font-semibold text-white transition-colors hover:bg-stone-800"
        >
          {$locale === 'sv' ? 'Ladda ner PDF ↓' : 'Download PDF ↓'}
        </a>
      </div>
    </section>
  {/if}

</div>
