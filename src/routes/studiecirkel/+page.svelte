<script lang="ts">
  import { locale } from '$lib/stores/i18n';
  import { fade } from 'svelte/transition';

  const facilitatorGuides = [
    { id: 'traff-1', number: 1 },
    { id: 'traff-2', number: 2 },
    { id: 'traff-3', number: 3 },
    { id: 'traff-4', number: 4 }
  ];

  const printableMaterials = [
    { id: 'systemkanslometer', icon: '📊', traff: 1 },
    { id: 'kompass', icon: '🧭', traff: 2 },
    { id: 'exempel', icon: '💡', traff: 3 },
    { id: 'skattkarta', icon: '🗺️', traff: 4 },
    { id: 'handlingsplan', icon: '📋', traff: 4 },
    { id: 'kontrakt', icon: '✍️', traff: 4 }
  ];

  const supportMaterials = [
    { id: 'innan', icon: '📖' },
    { id: 'leda', icon: '🎯' },
    { id: 'efter', icon: '🌱' }
  ];
</script>

<div class="max-w-6xl mx-auto px-6 py-12" in:fade={{ duration: 200 }}>
  
  <!-- Header -->
  <header class="mb-16 border-b border-gray-200 dark:border-gray-700 pb-8">
    <h1 class="text-4xl font-bold mb-4">
      {$locale === 'sv' ? 'Studiecirkel om subsidiaritet' : 'Study Circle on Subsidiarity'}
    </h1>
    <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
      {$locale === 'sv' 
        ? 'Komplett material för att starta och leda en studiecirkel om systemförståelse och närstyre. Allt material kan skrivas ut direkt från webbläsaren.'
        : 'Complete materials for starting and leading a study circle on systems understanding and subsidiarity. All materials can be printed directly from the browser.'}
    </p>
  </header>

  <!-- Quick Start -->
  <section class="mb-16 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 border border-blue-200 dark:border-blue-800">
    <h2 class="text-2xl font-semibold mb-4">
      {$locale === 'sv' ? 'Snabbstart' : 'Quick Start'}
    </h2>
    <div class="space-y-3 text-gray-700 dark:text-gray-300">
      <p class="flex gap-3">
        <span class="font-bold">1.</span>
        <span>{$locale === 'sv' ? 'Läs ledarguiden "Innan du börjar"' : 'Read the facilitator guide "Before You Begin"'}</span>
      </p>
      <p class="flex gap-3">
        <span class="font-bold">2.</span>
        <span>{$locale === 'sv' ? 'Skriv ut material för Träff 1' : 'Print materials for Session 1'}</span>
      </p>
      <p class="flex gap-3">
        <span class="font-bold">3.</span>
        <span>{$locale === 'sv' ? 'Bjud in 6-12 personer, ordna fika, börja!' : 'Invite 6-12 people, organize coffee, begin!'}</span>
      </p>
    </div>
  </section>

  <!-- Facilitator Guides -->
  <section class="mb-16">
    <h2 class="text-3xl font-bold mb-8">
      {$locale === 'sv' ? 'Ledarguider för varje träff' : 'Facilitator Guides for Each Session'}
    </h2>
    <div class="grid gap-6 md:grid-cols-2">
      {#each facilitatorGuides as guide}
        <a
          href="/studiecirkel/traff-{guide.number}"
          class="block p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all hover:shadow-lg group"
        >
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-xl font-bold text-blue-600 dark:text-blue-400">
              {guide.number}
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {$locale === 'sv' ? `Träff ${guide.number}` : `Session ${guide.number}`}
              </h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm mb-3">
                {#if guide.number === 1}
                  {$locale === 'sv' ? 'Det svenska paradoxen - Diagnosen' : 'The Swedish Paradox - The Diagnosis'}
                {:else if guide.number === 2}
                  {$locale === 'sv' ? 'Närhetskompassen - Verktyget' : 'The Proximity Compass - The Tool'}
                {:else if guide.number === 3}
                  {$locale === 'sv' ? 'Subsidiaritet - Lösningen' : 'Subsidiarity - The Solution'}
                {:else if guide.number === 4}
                  {$locale === 'sv' ? 'Från ord till handling' : 'From Words to Action'}
                {/if}
              </p>
              <span class="text-sm text-blue-600 dark:text-blue-400">
                {$locale === 'sv' ? 'Läs guide & skriv ut material →' : 'Read guide & print materials →'}
              </span>
            </div>
          </div>
        </a>
      {/each}
    </div>
  </section>

  <!-- Printable Materials -->
  <section class="mb-16">
    <h2 class="text-3xl font-bold mb-8">
      {$locale === 'sv' ? 'Material att skriva ut' : 'Printable Materials'}
    </h2>
    <div class="grid gap-4 md:grid-cols-3">
      {#each printableMaterials as material}
        <a
          href="/studiecirkel/material/{material.id}"
          class="block p-5 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all hover:shadow group"
        >
          <div class="flex items-center gap-3 mb-2">
            <span class="text-2xl">{material.icon}</span>
            <span class="text-xs font-semibold text-gray-500 dark:text-gray-400">
              {$locale === 'sv' ? `Träff ${material.traff}` : `Session ${material.traff}`}
            </span>
          </div>
          <h3 class="font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {#if material.id === 'systemkanslometer'}
              {$locale === 'sv' ? 'Systemkänslometer' : 'System Feeling Meter'}
            {:else if material.id === 'kompass'}
              {$locale === 'sv' ? 'Närhetskompassen' : 'Proximity Compass'}
            {:else if material.id === 'exempel'}
              {$locale === 'sv' ? 'Exempel på subsidiaritet' : 'Subsidiarity Examples'}
            {:else if material.id === 'skattkarta'}
              {$locale === 'sv' ? 'Skattkarta' : 'Treasure Map'}
            {:else if material.id === 'handlingsplan'}
              {$locale === 'sv' ? 'Handlingsplan' : 'Action Plan'}
            {:else if material.id === 'kontrakt'}
              {$locale === 'sv' ? '30-dagarskontrakt' : '30-Day Contract'}
            {/if}
          </h3>
        </a>
      {/each}
    </div>
  </section>

  <!-- Support Materials -->
  <section class="mb-16">
    <h2 class="text-3xl font-bold mb-8">
      {$locale === 'sv' ? 'Stödmaterial för cirkelledare' : 'Support Materials for Facilitators'}
    </h2>
    <div class="grid gap-4 md:grid-cols-3">
      {#each supportMaterials as material}
        <a
          href="/studiecirkel/guide/{material.id}"
          class="block p-5 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all hover:shadow group"
        >
          <div class="text-3xl mb-3">{material.icon}</div>
          <h3 class="font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {#if material.id === 'innan'}
              {$locale === 'sv' ? 'Innan du börjar' : 'Before You Begin'}
            {:else if material.id === 'leda'}
              {$locale === 'sv' ? 'Att leda samtal' : 'Leading Conversations'}
            {:else if material.id === 'efter'}
              {$locale === 'sv' ? 'Efter cirkeln' : 'After the Circle'}
            {/if}
          </h3>
        </a>
      {/each}
    </div>
  </section>

  <!-- Print All Option -->
  <section class="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
    <div class="flex flex-col md:flex-row gap-6 items-center justify-between">
      <div>
        <h3 class="text-xl font-semibold mb-2">
          {$locale === 'sv' ? 'Skriv ut allt på en gång' : 'Print Everything at Once'}
        </h3>
        <p class="text-gray-600 dark:text-gray-400">
          {$locale === 'sv' 
            ? 'Ladda ner komplett PDF med alla guider och material (ca 65 sidor)'
            : 'Download complete PDF with all guides and materials (approx. 65 pages)'}
        </p>
      </div>
      <a
        href="/downloads/Studiecirkel-Komplett-{$locale === 'sv' ? 'SV' : 'EN'}.pdf"
        download
        class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold whitespace-nowrap"
      >
        {$locale === 'sv' ? 'Ladda ner PDF ↓' : 'Download PDF ↓'}
      </a>
    </div>
  </section>

</div>
