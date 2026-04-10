<script lang="ts">
  import { locale, t } from '$lib/stores/i18n';
  import { fade } from 'svelte/transition';

  // RESTORED: The Icons (Visual Anchors)
  const systems = [
    { id: 'food', slug: 'livsmedelssystem', icon: '🌾', color: 'bg-amber-50 text-amber-600 border-amber-200' },
    { id: 'healthcare', slug: 'halsovard', icon: '🏥', color: 'bg-rose-50 text-rose-600 border-rose-200' },
    { id: 'education', slug: 'utbildning', icon: '📚', color: 'bg-blue-50 text-blue-600 border-blue-200' },
    { id: 'elderCare', slug: 'aldreomsorg', icon: '👴', color: 'bg-orange-50 text-orange-600 border-orange-200' },
    { id: 'housing', slug: 'boende', icon: '🏠', color: 'bg-stone-50 text-stone-600 border-stone-200' },
    { id: 'energy', slug: 'energi', icon: '⚡', color: 'bg-yellow-50 text-yellow-600 border-yellow-200' },
    { id: 'transport', slug: 'transport', icon: '🚆', color: 'bg-sky-50 text-sky-600 border-sky-200' },
    { id: 'welfare', slug: 'valfard', icon: '🛡️', color: 'bg-emerald-50 text-emerald-600 border-emerald-200' },
    { id: 'safety', slug: 'trygghet', icon: '👮', color: 'bg-slate-50 text-slate-600 border-slate-200' },
    { id: 'culture', slug: 'kultur', icon: '🎭', color: 'bg-purple-50 text-purple-600 border-purple-200' }
  ];

  const upcomingSystems = [
    { id: 'water', slug: 'vatten', icon: '💧' },
    { id: 'waste', slug: 'avfall', icon: '♻️' },
    { id: 'finance', slug: 'finans', icon: '💰' },
    { id: 'legal', slug: 'rattssystem', icon: '⚖️' },
    { id: 'childcare', slug: 'barnomsorg', icon: '👶' },
    { id: 'land', slug: 'mark', icon: '🌲' },
    { id: 'immigration', slug: 'immigration', icon: '🌍' },
    { id: 'research', slug: 'forskning', icon: '🔬' }
  ];

  const displayNames = {
    livsmedelssystem: { sv: 'Livsmedel', en: 'Food' },
    halsovard: { sv: 'Hälsa', en: 'Health' },
    utbildning: { sv: 'Skola', en: 'School' },
    aldreomsorg: { sv: 'Äldre', en: 'Elder' },
    boende: { sv: 'Boende', en: 'Housing' },
    energi: { sv: 'Energi', en: 'Energy' },
    transport: { sv: 'Transport', en: 'Transport' },
    valfard: { sv: 'Välfärd', en: 'Welfare' },
    trygghet: { sv: 'Trygghet', en: 'Safety' },
    kultur: { sv: 'Kultur', en: 'Culture' }
  };

  const pdfFileNames = {
    livsmedelssystem: { sv: 'Livsmedelssystem', en: 'Food-System' },
    halsovard: { sv: 'Hälsovård', en: 'Healthcare' },
    utbildning: { sv: 'Utbildning', en: 'Education' },
    aldreomsorg: { sv: 'Äldreomsorg', en: 'Elder-Care' },
    boende: { sv: 'Boende', en: 'Housing' },
    energi: { sv: 'Energi', en: 'Energy' },
    transport: { sv: 'Transport', en: 'Transport' },
    valfard: { sv: 'Välfärd', en: 'Welfare' },
    trygghet: { sv: 'Trygghet', en: 'Safety' },
    kultur: { sv: 'Kultur', en: 'Culture' }
  };
</script>

<div class="mx-auto max-w-5xl px-6 py-12" in:fade={{ duration: 200 }}>
  
  <header class="mb-16 border-b border-stone-200 pb-8">
    <h1 class="mb-4 font-sans text-4xl font-bold text-manifesto-black">
      {$locale === 'sv' ? 'Systemanalys' : 'System Analysis'}
    </h1>
    <p class="max-w-3xl font-serif text-xl leading-relaxed text-stone-600">
      {$locale === 'sv' 
        ? 'Sverige har optimerat sig in i sårbarhet. Här diagnostiserar vi centraliseringens kostnader i tio kritiska system och kartlägger den subsidiära vägen ut.'
        : 'Sweden has optimized itself into fragility. Here we diagnose the costs of centralization across ten critical systems and map the subsidiarity-based path out.'}
    </p>
  </header>

  <section class="mb-12 overflow-hidden rounded-2xl border border-teal-200 bg-teal-50">
    <div class="flex flex-col items-center gap-6 p-8 md:flex-row md:justify-between">
      <div class="max-w-xl">
        <div class="mb-2 inline-flex items-center gap-2 text-sm font-bold tracking-widest text-teal-700 uppercase">
          <span class="text-xl">🎛️</span> 
          {$locale === 'sv' ? 'Interaktiv Modell' : 'Interactive Model'}
        </div>
        <h2 class="mb-3 font-sans text-2xl font-bold text-teal-900">
          {$locale === 'sv' ? 'Varför System Kollapsar' : 'Why Systems Collapse'}
        </h2>
        <p class="font-serif text-teal-800 opacity-90">
          {$locale === 'sv' 
            ? 'Innan du läser våra sektoranalyser, testa vår simulator. Se den matematiska bevisföringen för varför centraliserade system inte kan hantera lokal komplexitet.' 
            : 'Before reading our sector analyses, try our simulator. See the mathematical proof of why centralized systems fail to handle local complexity.'}
        </p>
      </div>
      <a 
        href="/simulator" 
        class="shrink-0 rounded-xl bg-teal-700 px-6 py-4 font-sans text-sm font-bold text-white transition-transform hover:scale-105 hover:bg-teal-800"
      >
        {$locale === 'sv' ? 'Testa Simulatorn →' : 'Try the Simulator →'}
      </a>
    </div>
  </section>

  <section class="mb-20">
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {#each systems as system}
        <a
          href="/system-analys/{system.slug}"
          class="group relative overflow-hidden rounded-xl border border-stone-200 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-stone-300"
        >
          <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg text-3xl {system.color} shadow-sm group-hover:scale-110 transition-transform">
            {system.icon}
          </div>
          
          <h3 class="mb-2 font-sans text-xl font-bold text-manifesto-black group-hover:text-black">
            {$t.systemAnalysis[system.id]}
          </h3>
          
          <div class="mt-4 flex items-center text-xs font-bold uppercase tracking-widest text-stone-400 group-hover:text-stone-900 transition-colors">
            {$locale === 'sv' ? 'Läs Analys' : 'Read Analysis'}
            <span class="ml-2 transition-transform group-hover:translate-x-1">→</span>
          </div>
        </a>
      {/each}
    </div>
  </section>

  <section class="mb-12 rounded-xl border border-stone-200 bg-white p-6">
    <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div class="flex items-center gap-3">
        <span class="text-2xl">📄</span>
        <div>
          <h2 class="font-sans text-lg font-bold text-stone-900">
            {$locale === 'sv' ? 'Ladda ner analyserna' : 'Download the analyses'}
          </h2>
          <p class="text-sm text-stone-500">
            {$locale === 'sv' 
              ? 'Samlade PDF:er för varje system – perfekt för utskrift eller vidaredelning.' 
              : 'Combined PDFs for each system – perfect for printing or sharing.'}
          </p>
        </div>
      </div>
      <div class="flex flex-wrap gap-2">
        {#each systems as system}
          <a
            href="/downloads/analyser/{pdfFileNames[system.slug][$locale]}-{$locale === 'sv' ? 'svensk-subsidiaritet' : 'swedish-subsidiarity'}.pdf"
            download
            class="inline-flex items-center gap-1 rounded-md border border-stone-300 bg-white px-3 py-1.5 text-xs font-medium text-stone-700 transition-colors hover:bg-stone-50 hover:text-stone-900"
          >
            <span>{system.icon}</span>
            <span>{displayNames[system.slug][$locale]}</span>
            <span class="text-stone-400">PDF</span>
          </a>
        {/each}
      </div>
    </div>
  </section>

  <section class="rounded-2xl bg-stone-50 p-8 border border-stone-100">
    <h2 class="mb-6 font-sans text-xl font-bold text-stone-400 uppercase tracking-widest">
      {$locale === 'sv' ? 'Under Utveckling' : 'In Development'}
    </h2>
    
    <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
      {#each upcomingSystems as system}
        <div class="flex items-center gap-3 rounded-lg border border-dashed border-stone-200 p-3 opacity-60">
          <span class="text-xl grayscale opacity-50">{system.icon}</span>
          <span class="font-sans text-sm font-medium text-stone-500">
            {$t.systemAnalysis[system.id]}
          </span>
        </div>
      {/each}
    </div>
  </section>

  <div class="mt-16 text-center">
    <p class="mx-auto max-w-2xl font-serif text-sm italic text-stone-400">
      {$locale === 'sv'
        ? 'Varje analys bygger på cybernetiska principer: centralisering skapar effektivitet vid låg komplexitet, men sårbarhet vid hög komplexitet.'
        : 'Each analysis applies cybernetic principles: centralization creates efficiency at low complexity, but fragility at high complexity.'}
    </p>
  </div>
</div>
