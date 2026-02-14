<script lang="ts">
  import { locale } from '$lib/stores/i18n';
  import { fade } from 'svelte/transition';
  import { gsiFramework } from '$lib/data/library';

  let lang = $derived($locale as 'sv' | 'en');

  const dimensions = [
    {
      icon: '📏',
      color: 'border-sky-200 bg-sky-50',
      titleSv: 'Beslutsnärhet',
      titleEn: 'Decision Proximity',
      questionSv: 'Hur nära de berörda fattas besluten?',
      questionEn: 'How close are decisions to those affected?',
      indicatorsSv: ['Administrativt avstånd', 'Fiskal suveränitet', 'Regulativ autonomi', 'Krisbefogenheter'],
      indicatorsEn: ['Administrative distance', 'Fiscal sovereignty', 'Regulatory autonomy', 'Emergency response latitude']
    },
    {
      icon: '🧠',
      color: 'border-emerald-200 bg-emerald-50',
      titleSv: 'Kunskapsinkludering',
      titleEn: 'Knowledge Inclusion',
      questionSv: 'Vems intelligens informerar besluten?',
      questionEn: 'Whose intelligence informs decisions?',
      indicatorsSv: ['Expert vs. erfarenhetsbalans', 'Deltagandekvalitet', 'Lokal kunskapsintegration', 'Återkopplingseffektivitet'],
      indicatorsEn: ['Expert vs. experiential balance', 'Participatory mechanism quality', 'Local knowledge integration', 'Feedback loop efficiency']
    },
    {
      icon: '🛡️',
      color: 'border-amber-200 bg-amber-50',
      titleSv: 'Resiliensarkitektur',
      titleEn: 'Resilience Architecture',
      questionSv: 'Hur hanterar systemen störningar och mångfald?',
      questionEn: 'How do systems handle disruption and diversity?',
      indicatorsSv: ['Redundans i kritiska system', 'Adaptiv kapacitet', 'Mångfaldsresiliens', 'Långsiktig hållbarhet'],
      indicatorsEn: ['Critical system redundancy', 'Adaptive capacity', 'Diversity resilience', 'Long-term sustainability']
    },
    {
      icon: '🤝',
      color: 'border-purple-200 bg-purple-50',
      titleSv: 'Sammanhållning och integration',
      titleEn: 'Cohesion and Integration',
      questionSv: 'Hur bevarar distribuerade system enhet utan fragmentering?',
      questionEn: 'How do distributed systems maintain unity without fragmentation?',
      indicatorsSv: ['Samordning mellan nivåer', 'Delad värdegrund', 'Konfliktlösning', 'Nationell solidaritet'],
      indicatorsEn: ['Inter-level coordination', 'Shared value alignment', 'Conflict resolution', 'National solidarity']
    }
  ];
</script>

<div class="mx-auto max-w-4xl px-6 py-12" in:fade={{ duration: 200 }}>
  
  <!-- Breadcrumb -->
  <div class="mb-8 font-sans text-sm text-stone-400">
    <a href="/ramverk" class="hover:text-black transition-colors">
      {lang === 'sv' ? 'Ramverk' : 'Frameworks'}
    </a>
    <span class="mx-2">/</span>
    <span class="text-stone-600">GSI</span>
  </div>

  <header class="mb-16 border-b border-stone-200 pb-8">
    <div class="mb-3 font-sans text-xs font-bold uppercase tracking-widest text-sky-600">
      Beta v3.0 · Feb 2026
    </div>
    <h1 class="mb-4 font-sans text-4xl font-bold text-manifesto-black">
      Global Subsidiarity Index
    </h1>
    <p class="max-w-3xl font-serif text-xl leading-relaxed text-stone-600">
      {lang === 'sv'
        ? 'Ett universellt diagnostik- och benchmarkingverktyg som kvantifierar matchningen — eller missmatchningen — mellan styrningsstrukturer och samhällelig komplexitet.'
        : 'A universal diagnostic and benchmarking tool that quantifies the match — or mismatch — between governance structures and societal complexity.'}
    </p>
  </header>

  <!-- Core Proposition -->
  <section class="mb-16">
    <blockquote class="border-l-4 border-manifesto-black pl-6 py-2">
      <p class="font-serif text-lg italic text-stone-700">
        {lang === 'sv'
          ? '"Styrningskvalitet på 2000-talet handlar inte om vänster mot höger, utan om centraliserat mot distribuerat — och GSI gör detta mätbart, jämförbart och handlingsbart."'
          : '"Governance quality in the 21st century is not about left vs. right, but about centralized vs. distributed — and the GSI makes this measurable, comparable, and actionable."'}
      </p>
    </blockquote>
  </section>

  <!-- Theoretical Foundation -->
  <section class="mb-16">
    <h2 class="mb-6 font-sans text-2xl font-bold text-manifesto-black">
      {lang === 'sv' ? 'Teoretisk grund' : 'Theoretical Foundation'}
    </h2>
    <div class="rounded-xl bg-stone-50 border border-stone-100 p-8">
      <p class="font-sans text-sm font-bold uppercase tracking-widest text-stone-400 mb-3">
        {lang === 'sv' ? 'Ashbys lag, operationaliserad' : "Ashby's Law, Operationalized"}
      </p>
      <p class="font-serif text-stone-600 leading-relaxed mb-4 italic">
        "Only variety can destroy variety. To control a system, the regulator must have at least as many internal states as the system it attempts to regulate."
      </p>
      <p class="font-serif text-stone-600 leading-relaxed">
        {lang === 'sv'
          ? 'GSI mäter förhållandet mellan samhällets variation (komplexitet, mångfald, dynamik) och styrningens variation (flexibilitet, anpassningsförmåga, differentiering). När styrningen inte matchar samhällets komplexitet uppstår tre universella patologier: beslutsavstånd, kunskapsexkludering och resiliensbrister.'
          : "The GSI measures the ratio between societal variety (complexity, diversity, dynamism) and governance variety (flexibility, adaptability, differentiation). When governance fails to match societal complexity, three universal pathologies emerge: decision distance, knowledge exclusion, and resilience deficits."}
      </p>
    </div>
  </section>

  <!-- Four Dimensions -->
  <section class="mb-16">
    <h2 class="mb-8 font-sans text-2xl font-bold text-manifesto-black">
      {lang === 'sv' ? 'Fyra dimensioner, sexton indikatorer' : 'Four Dimensions, Sixteen Indicators'}
    </h2>
    
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
      {#each dimensions as dim}
        <div class="rounded-xl border {dim.color} p-6">
          <div class="flex items-center gap-3 mb-3">
            <span class="text-2xl">{dim.icon}</span>
            <h3 class="font-sans text-lg font-bold text-manifesto-black">
              {lang === 'sv' ? dim.titleSv : dim.titleEn}
            </h3>
          </div>
          <p class="font-serif text-sm italic text-stone-500 mb-4">
            {lang === 'sv' ? dim.questionSv : dim.questionEn}
          </p>
          <ul class="space-y-1.5">
            {#each (lang === 'sv' ? dim.indicatorsSv : dim.indicatorsEn) as indicator, i}
              <li class="flex items-baseline gap-2 text-sm text-stone-600">
                <span class="font-mono text-xs text-stone-400">{i + 1}.</span>
                {indicator}
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </section>

  <!-- Complexity Adjustment -->
  <section class="mb-16">
    <h2 class="mb-6 font-sans text-2xl font-bold text-manifesto-black">
      {lang === 'sv' ? 'Komplexitetsjusteringen (CAF)' : 'Complexity Adjustment Factor (CAF)'}
    </h2>
    <div class="rounded-xl bg-stone-50 border border-stone-100 p-8">
      <p class="font-serif text-stone-600 leading-relaxed mb-4">
        {lang === 'sv'
          ? 'Små, homogena nationer har naturligt lägre "optimalt" beslutsavstånd än stora, diversifierade federationer. CAF löser detta genom flerdimensionell komplexitetspoängsättning:'
          : 'Small, homogeneous nations naturally have lower "optimal" decision distance than large, diverse federations. The CAF solves this through multi-dimensional complexity scoring:'}
      </p>
      <div class="font-mono text-sm bg-white rounded-lg p-4 border border-stone-200 mb-4 text-center">
        CAF = (G × E × D × T) ÷ C
      </div>
      <div class="grid grid-cols-2 md:grid-cols-5 gap-3 text-sm">
        <div class="text-center">
          <div class="font-mono font-bold text-stone-700">G</div>
          <div class="text-stone-500">{lang === 'sv' ? 'Geografi' : 'Geography'}</div>
        </div>
        <div class="text-center">
          <div class="font-mono font-bold text-stone-700">E</div>
          <div class="text-stone-500">{lang === 'sv' ? 'Etnolingvistik' : 'Ethnolinguistic'}</div>
        </div>
        <div class="text-center">
          <div class="font-mono font-bold text-stone-700">D</div>
          <div class="text-stone-500">{lang === 'sv' ? 'Ojämlikhet' : 'Disparity'}</div>
        </div>
        <div class="text-center">
          <div class="font-mono font-bold text-stone-700">T</div>
          <div class="text-stone-500">{lang === 'sv' ? 'Hotmiljö' : 'Threat'}</div>
        </div>
        <div class="text-center">
          <div class="font-mono font-bold text-stone-700">C</div>
          <div class="text-stone-500">{lang === 'sv' ? 'Central kapacitet' : 'Central capacity'}</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Pilot Nations -->
  <section class="mb-16">
    <h2 class="mb-6 font-sans text-2xl font-bold text-manifesto-black">
      {lang === 'sv' ? 'Pilotländer' : 'Pilot Nations'}
    </h2>
    <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
      {#each [
        { flag: '🇸🇬', name: 'Singapore', roleSv: 'Låg CAF, hög effektivitet', roleEn: 'Low CAF, high efficiency' },
        { flag: '🇨🇭', name: lang === 'sv' ? 'Schweiz' : 'Switzerland', roleSv: 'Medel-CAF, federal', roleEn: 'Medium CAF, federated' },
        { flag: '🇮🇳', name: 'Indien', roleSv: 'Hög CAF, utvecklingsland', roleEn: 'High CAF, developing' },
        { flag: '🇷🇼', name: 'Rwanda', roleSv: 'Postkonflikt', roleEn: 'Post-conflict' },
        { flag: '🇸🇪', name: 'Sverige', roleSv: 'Hög tillit, överkentraliserat', roleEn: 'High trust, overcentralized' }
      ] as nation}
        <div class="rounded-lg border border-stone-200 bg-white p-4 text-center">
          <div class="text-2xl mb-2">{nation.flag}</div>
          <div class="font-sans text-sm font-bold text-manifesto-black">{nation.name}</div>
          <div class="text-xs text-stone-400 mt-1">{lang === 'sv' ? nation.roleSv : nation.roleEn}</div>
        </div>
      {/each}
    </div>
  </section>

  <!-- Downloads -->
  <section class="mb-16">
    <h2 class="mb-6 font-sans text-2xl font-bold text-manifesto-black">
      {lang === 'sv' ? 'Dokumentation' : 'Documentation'}
    </h2>
    <p class="font-serif text-stone-600 mb-8">
      {lang === 'sv'
        ? 'Ramverket och alla bilagor finns tillgängliga som PDF.'
        : 'The framework and all appendices are available as PDF.'}
    </p>
    
    <div class="space-y-3">
      {#each gsiFramework as item, i}
        <a 
          href={item.url} 
          download
          class="flex items-center justify-between rounded-lg border border-stone-200 bg-white px-6 py-4 transition-colors hover:bg-stone-50 hover:border-stone-300 group"
        >
          <div class="flex items-center gap-4">
            <span class="rounded bg-manifesto-black px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">PDF</span>
            <div>
              <div class="font-sans text-sm font-bold text-manifesto-black group-hover:underline">
                {item.title[lang]}
              </div>
              <div class="text-xs text-stone-400 mt-0.5">{item.description[lang]}</div>
            </div>
          </div>
          <span class="text-stone-400 group-hover:text-black transition-colors">↓</span>
        </a>
      {/each}
    </div>
  </section>

  <!-- Phased Rollout -->
  <section class="mb-16">
    <h2 class="mb-6 font-sans text-2xl font-bold text-manifesto-black">
      {lang === 'sv' ? 'Fasplan' : 'Phased Rollout'}
    </h2>
    <div class="space-y-4">
      {#each [
        { phase: '0', year: '2026', titleSv: 'Grundläggning', titleEn: 'Foundation', descSv: 'Finslipa mätvärden, utveckla verifieringsprotokoll, säkra 5 pilotländer.', descEn: 'Finalize proxy metrics, develop verification protocols, secure 5 pilot commitments.' },
        { phase: '1', year: '2027', titleSv: 'Alfa', titleEn: 'Alpha', descSv: 'Pilotbedömningar med manuell verifiering. Första "State of Global Subsidiarity"-rapporten.', descEn: 'Pilot assessments with manual verification. First "State of Global Subsidiarity" report.' },
        { phase: '2', year: '2028–29', titleSv: 'Beta', titleEn: 'Beta', descSv: 'Expandera till 30 nationer. Automatiserad datainsamling. Integration med FN:s SDG-rapportering.', descEn: 'Expand to 30 nations. Automated data collection. Begin integration with UN SDG reporting.' },
        { phase: '3', year: '2030+', titleSv: 'Global', titleEn: 'Global', descSv: 'Full täckning (150+ nationer). Realtidsdashboard med kvartalsuppdateringar.', descEn: 'Full coverage (150+ nations). Real-time dashboard with quarterly updates.' }
      ] as step}
        <div class="flex gap-4 items-start">
          <div class="flex-shrink-0 w-20 text-right">
            <div class="font-mono text-xs text-stone-400">{step.year}</div>
            <div class="font-sans text-sm font-bold text-manifesto-black">
              {lang === 'sv' ? `Fas ${step.phase}` : `Phase ${step.phase}`}
            </div>
          </div>
          <div class="flex-1 border-l-2 border-stone-200 pl-4 pb-2">
            <div class="font-sans text-sm font-bold text-stone-700">
              {lang === 'sv' ? step.titleSv : step.titleEn}
            </div>
            <p class="text-sm text-stone-500 mt-1">
              {lang === 'sv' ? step.descSv : step.descEn}
            </p>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <!-- Back link -->
  <div class="text-center pt-8 border-t border-stone-200">
    <a href="/ramverk" class="font-sans text-sm text-stone-400 hover:text-black transition-colors">
      ← {lang === 'sv' ? 'Tillbaka till ramverk' : 'Back to frameworks'}
    </a>
  </div>

</div>
