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
      Beta v4.0 · Mar 2026
    </div>
    <h1 class="mb-4 font-sans text-4xl font-bold text-manifesto-black">
      Global Subsidiarity Index
    </h1>
    <p class="max-w-3xl font-serif text-xl leading-relaxed text-stone-600">
      {lang === 'sv'
        ? 'Ett mätramverk för styrningsarkitektur: om beslutsmakt är placerad på den skala där relevant information finns, och om styrningssystemets kapacitet matchar komplexiteten i det den styr.'
        : 'A measurement framework for governance architecture: whether decision authority is positioned at the scale where relevant information exists, and whether the governance system\'s capacity matches the complexity of what it governs.'}
    </p>
  </header>

  <!-- Motivating case -->
  <section class="mb-16">
    <div class="rounded-xl bg-stone-50 border border-stone-100 p-8">
      <p class="font-sans text-xs font-bold uppercase tracking-widest text-stone-400 mb-4">
        {lang === 'sv' ? 'Vad befintliga index missar' : 'What existing indices miss'}
      </p>
      <p class="font-serif text-stone-600 leading-relaxed">
        {lang === 'sv'
          ? 'Torskkollapsen utanför Newfoundland 1992 inträffade inte på grund av korruption, svaga institutioner eller bristande demokrati. Kanada fick höga betyg på alla tillgängliga styrningsindikatorer. Kollapsen var arkitektonisk: årliga kvoter på ett månatligt varierande bestånd. Styrsystemets observationsfrekvens var för låg i förhållande till störningsfrekvensen. Inget befintligt styrningsindex mäter den typen av strukturell missmatchning. GSI är ett försök att göra det.'
          : 'The collapse of the Newfoundland cod fishery in 1992 was not caused by corruption, weak institutions, or democratic failure. Canada scored well on every available governance indicator. The failure was architectural: annual quota-setting on a monthly-fluctuating stock. The governance system\'s observation frequency was too low relative to the disturbance frequency. No existing governance index measures that kind of structural mismatch. The GSI is an attempt to do so.'}
      </p>
    </div>
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
      <p class="font-serif text-stone-600 leading-relaxed mb-4">
        {lang === 'sv'
          ? 'GSI mäter förhållandet mellan samhällets variation (komplexitet, mångfald, dynamik) och styrningens variation (flexibilitet, anpassningsförmåga, differentiering). När styrningen inte matchar samhällets komplexitet uppstår fyra strukturella fellägen:'
          : 'The GSI measures the ratio between societal variety (complexity, diversity, dynamism) and governance variety (flexibility, adaptability, differentiation). When governance fails to match societal complexity, four structural failure modes emerge:'}
      </p>
      <ul class="space-y-2">
        {#each [
          {
            sv: 'Rumslig blindhet — aggregering förstör lokal signal',
            en: 'Spatial blindness — aggregation destroys local signal'
          },
          {
            sv: 'Frekvensgap — en tidsskala kan inte täcka flerhastighetsrisker',
            en: 'Frequency gaps — a single timescale cannot cover multi-speed threats'
          },
          {
            sv: 'Preferensosynlighet — djupa representationskedjor tappar medborgarens signal',
            en: 'Preference invisibility — deep representation chains lose citizen signal'
          },
          {
            sv: 'Observationsbrist — låg dimensionalitet kan inte styra komplexa gemensamma resurser',
            en: 'Observational inadequacy — low dimensionality cannot govern complex commons'
          }
        ] as mode}
          <li class="flex items-baseline gap-2 text-sm text-stone-600">
            <span class="text-stone-300 flex-shrink-0">—</span>
            {lang === 'sv' ? mode.sv : mode.en}
          </li>
        {/each}
      </ul>
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
      {lang === 'sv' ? 'Komplexitetsjustering (CAF)' : 'Complexity Adjustment Factor (CAF)'}
    </h2>
    <div class="rounded-xl bg-stone-50 border border-stone-100 p-8">
      <p class="font-serif text-stone-600 leading-relaxed mb-4">
        {lang === 'sv'
          ? 'Utan kontextuell justering skulle ett index som mäter beslutsavstånd koda en implicit preferens för decentralisering oavsett sammanhang. Singapore kräver inte samma arkitektur som Indien. CAF löser detta genom att generera kontextspecifika riktmärken — det mäter passform, inte riktning.'
          : 'Without contextual adjustment, any index measuring decision distance would encode an implicit preference for decentralization regardless of context. Singapore does not require the same architecture as India. The CAF addresses this by generating context-specific benchmarks — it measures fit, not direction.'}
      </p>
      <div class="font-mono text-sm bg-white rounded-lg p-4 border border-stone-200 mb-4 text-center">
        CAF = (G × E × D × T) ÷ C
      </div>
      <div class="grid grid-cols-2 md:grid-cols-5 gap-3 text-sm">
        {#each [
          { key: 'G', sv: 'Geografi', en: 'Geography' },
          { key: 'E', sv: 'Etnolingvistik', en: 'Ethnolinguistic' },
          { key: 'D', sv: 'Ojämlikhet', en: 'Disparity' },
          { key: 'T', sv: 'Hotmiljö', en: 'Threat' },
          { key: 'C', sv: 'Central kapacitet', en: 'Central capacity' }
        ] as component}
          <div class="text-center">
            <div class="font-mono font-bold text-stone-700">{component.key}</div>
            <div class="text-stone-500">{lang === 'sv' ? component.sv : component.en}</div>
          </div>
        {/each}
      </div>
      <p class="font-serif text-xs text-stone-400 mt-4 italic">
        {lang === 'sv'
          ? 'Den multiplikativa strukturen är en teoretisk hypotes, inte en slutgiltig specifikation. Piloterna ska testa om formen håller under alternativa specifikationer.'
          : 'The multiplicative structure is a theoretical hypothesis, not a final specification. Pilots will test whether the form holds under alternative specifications.'}
      </p>
    </div>
  </section>

  <!-- Pilot Nations -->
  <section class="mb-16">
    <h2 class="mb-6 font-sans text-2xl font-bold text-manifesto-black">
      {lang === 'sv' ? 'Föreslagna pilotfall' : 'Proposed Pilot Cases'}
    </h2>
    <p class="font-serif text-stone-500 mb-6 text-sm">
      {lang === 'sv'
        ? 'Valen täcker det strukturella variationsutrymmet — inte för att bekräfta ramverket, utan för att testa om det beter sig korrekt under radikalt olika komplexitetsprofiler.'
        : 'Selection covers the structural variation space — not to confirm the framework, but to test whether it behaves correctly across radically different complexity profiles.'}
    </p>
    <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
      {#each [
        { flag: '🇸🇬', name: 'Singapore', roleSv: 'Låg CAF — legitimt centraliserad?', roleEn: 'Low CAF — legitimately centralized?' },
        { flag: '🇨🇭', name: lang === 'sv' ? 'Schweiz' : 'Switzerland', roleSv: 'Fungerande subsidiaritet', roleEn: 'Working subsidiarity' },
        { flag: '🇮🇳', name: lang === 'sv' ? 'Indien' : 'India', roleSv: 'Hög CAF i stor skala', roleEn: 'High CAF at scale' },
        { flag: '🇷🇼', name: 'Rwanda', roleSv: 'Transition under förändring', roleEn: 'Architecture in motion' },
        { flag: '🇸🇪', name: lang === 'sv' ? 'Sverige' : 'Sweden', roleSv: 'Arkitektonisk drift?', roleEn: 'Architectural drift?' }
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

  <!-- Development status -->
  <section class="mb-16">
    <h2 class="mb-6 font-sans text-2xl font-bold text-manifesto-black">
      {lang === 'sv' ? 'Utvecklingsstatus' : 'Development Status'}
    </h2>
    <div class="space-y-4">
      {#each [
        {
          phase: '0', year: '2026',
          titleSv: 'Grundläggning', titleEn: 'Foundation',
          descSv: 'Finslipa mätvärden med akademiska partners. Utveckla verifieringsprotokoll. Söka pilotpartners.',
          descEn: 'Finalize proxy metrics with academic partners. Develop verification protocols. Seek pilot partnerships.',
          active: true
        },
        {
          phase: '1', year: '2027',
          titleSv: 'Alfa', titleEn: 'Alpha',
          descSv: 'Pilotbedömningar med manuell verifiering och medborgarpaneler. Publicera rådata och metodnoter öppet.',
          descEn: 'Pilot assessments with manual verification and citizen validation panels. Publish raw data and methodology notes openly.',
          active: false
        },
        {
          phase: '2', year: '2028–29',
          titleSv: 'Beta', titleEn: 'Beta',
          descSv: 'Expandera baserat på vad pilotfasen faktiskt visar. Utforska integration med befintlig styrningsrapportering om det är meningsfullt.',
          descEn: 'Expand based on what the pilot phase actually demonstrates. Explore integration with existing governance reporting if warranted.',
          active: false
        },
        {
          phase: '3', year: '2030+',
          titleSv: 'Öppen protokollstandard', titleEn: 'Open protocol standard',
          descSv: 'Om ramverket håller: en öppen mätstandard som möjliggör distribuerad diagnostik snarare än centraliserad certifiering.',
          descEn: 'If the framework holds: an open measurement standard enabling distributed diagnostics rather than centralized certification.',
          active: false
        }
      ] as step}
        <div class="flex gap-4 items-start">
          <div class="flex-shrink-0 w-20 text-right">
            <div class="font-mono text-xs text-stone-400">{step.year}</div>
            <div class="font-sans text-sm font-bold {step.active ? 'text-sky-600' : 'text-manifesto-black'}">
              {lang === 'sv' ? `Fas ${step.phase}` : `Phase ${step.phase}`}
            </div>
          </div>
          <div class="flex-1 border-l-2 {step.active ? 'border-sky-300' : 'border-stone-200'} pl-4 pb-2">
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
