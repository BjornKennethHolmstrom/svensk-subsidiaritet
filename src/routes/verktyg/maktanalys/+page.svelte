<script lang="ts">
  import { t, locale } from '$lib/stores/i18n';
  import { powerQuestions, analyzePower, getDiagnosis, getRecommendation, type PowerLevel } from '$lib/data/power-analysis';
  import PowerMap from '$lib/components/PowerMap.svelte';
  import { fade, slide } from 'svelte/transition';

  let step = $state(0); // 0 = Intro, 1-6 = Questions, 7 = Result
  let systemName = $state("");
  
  let answers = $state<Record<number, { level: PowerLevel; distance: number }>>({});

  // Computed analysis using $derived
  let analysis = $derived(analyzePower(answers));
  let diagnosis = $derived(getDiagnosis(analysis, $locale));
  let recommendation = $derived(getRecommendation(analysis, $locale));

  const next = () => step++;
  
  const restart = () => { 
    step = 0; 
    answers = {}; 
    systemName = ""; 
  };
  
  function selectAnswer(questionId: number, level: PowerLevel, distance: number) {
    answers = { ...answers, [questionId]: { level, distance } };
    next();
  }
  
  function getCategoryIcon(category: string): string {
    switch(category) {
      case 'budget': return '💰';
      case 'decisions': return '⚖️';
      case 'accountability': return '📊';
      case 'veto': return '🚫';
      default: return '❓';
    }
  }
  
  function getCategoryName(category: string): string {
    if ($locale === 'sv') {
      switch(category) {
        case 'budget': return 'BUDGET';
        case 'decisions': return 'BESLUT';
        case 'accountability': return 'ANSVAR';
        case 'veto': return 'VETORÄTT';
        default: return '';
      }
    } else {
      switch(category) {
        case 'budget': return 'BUDGET';
        case 'decisions': return 'DECISIONS';
        case 'accountability': return 'ACCOUNTABILITY';
        case 'veto': return 'VETO POWER';
        default: return '';
      }
    }
  }
</script>

<div class="mx-auto max-w-3xl px-6 py-12 min-h-[80vh] flex flex-col justify-center" in:fade>

  {#if step === 0}
    <div class="text-center space-y-8">
      <div class="text-6xl">🔭</div>
      <h1 class="font-sans text-4xl font-bold text-manifesto-black">
        {$locale === 'sv' ? 'Maktanalys' : 'Power Analysis'}
      </h1>
      <p class="font-serif text-xl text-stone-600 max-w-xl mx-auto">
        {$locale === 'sv' 
          ? 'Kartlägg var makten faktiskt sitter. Vem bestämmer, vem kontrollerar budgeten, och hur långt borta fattas besluten?'
          : 'Map where power actually resides. Who decides, who controls the budget, and how far away are decisions made?'}
      </p>
      
      <div class="bg-stone-50 p-6 rounded-lg border border-stone-200 inline-block text-left w-full max-w-md">
        <label class="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">
          {$locale === 'sv' ? 'Vilket system vill du analysera?' : 'Which system do you want to analyze?'}
        </label>
        <input 
          bind:value={systemName} 
          placeholder={$locale === 'sv' 
            ? 'T.ex. Min arbetsplats, Lokal skola, Biblioteket...' 
            : 'E.g. My workplace, Local school, Library...'}
          class="w-full bg-white border border-stone-300 rounded p-3 font-serif focus:ring-2 focus:ring-black outline-none"
        />
      </div>

      <button 
        onclick={next}
        disabled={!systemName}
        class="bg-manifesto-black text-white px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {$locale === 'sv' ? 'Starta Analys' : 'Start Analysis'} →
      </button>
      
      <p class="text-sm text-stone-500 mt-4">
        {$locale === 'sv' ? '6 frågor · ~3 minuter' : '6 questions · ~3 minutes'}
      </p>
    </div>

  {:else if step <= powerQuestions.length}
    {@const q = powerQuestions[step - 1]}
    <div class="max-w-xl mx-auto w-full" in:slide={{ duration: 300 }}>
      
      <!-- Progress bar -->
      <div class="w-full bg-stone-200 h-1 rounded-full mb-8">
        <div 
          class="bg-manifesto-black h-1 rounded-full transition-all duration-500" 
          style="width: {(step / powerQuestions.length) * 100}%"
        ></div>
      </div>

      <!-- Category badge -->
      <div class="flex items-center gap-2 mb-4">
        <span class="text-2xl">{getCategoryIcon(q.category)}</span>
        <span class="text-xs font-bold uppercase tracking-widest text-stone-400">
          {getCategoryName(q.category)} — {step} / {powerQuestions.length}
        </span>
      </div>
      
      <!-- Question -->
      <h2 class="font-sans text-2xl font-bold text-manifesto-black mb-8">
        {q.text[$locale]}
      </h2>

      <!-- Options -->
      <div class="space-y-3">
        {#each q.options as opt}
          <button 
            onclick={() => selectAnswer(q.id, opt.level, opt.distance)}
            class="w-full text-left p-4 rounded-lg border border-stone-200 hover:border-black hover:bg-stone-50 transition-all font-serif text-stone-700 flex justify-between items-center group"
          >
            <span>{opt.label[$locale]}</span>
            <div class="flex items-center gap-2 text-xs text-stone-400">
              {#if opt.distance > 0}
                <span>~{opt.distance} km</span>
              {/if}
              <span class="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </div>
          </button>
        {/each}
      </div>
    </div>

  {:else}
    <!-- Results -->
    <div class="text-center" in:fade>
      <span class="text-xs font-bold uppercase tracking-widest text-stone-400 mb-2 block">
        {$locale === 'sv' ? 'Maktanalys för' : 'Power Analysis for'} {systemName}
      </span>
      
      <h2 class="font-sans text-4xl font-bold text-manifesto-black mb-2">
        {diagnosis}
      </h2>
      <p class="font-mono text-stone-500 mb-8">
        {$locale === 'sv' ? 'Centraliseringsgrad' : 'Centralization Level'}: {analysis.centralizationScore}%
      </p>

      <!-- Power Map Visualization -->
      <div class="mb-12">
        <PowerMap {analysis} />
      </div>

      <!-- Key Metrics -->
      <div class="grid grid-cols-2 gap-4 text-left max-w-xl mx-auto mb-8">
        <div class="p-4 bg-stone-50 rounded border border-stone-200">
          <div class="text-xs text-stone-500 uppercase font-bold mb-1">
            {$locale === 'sv' ? 'Genomsnittligt avstånd' : 'Average Distance'}
          </div>
          <div class="text-2xl font-bold">{analysis.averageDistance} km</div>
          <div class="text-xs text-stone-600 mt-1">
            {$locale === 'sv' ? 'från dig till makten' : 'from you to power'}
          </div>
        </div>
        
        <div class="p-4 bg-stone-50 rounded border border-stone-200">
          <div class="text-xs text-stone-500 uppercase font-bold mb-1">
            {$locale === 'sv' ? 'Ansvarsgap' : 'Accountability Gap'}
          </div>
          <div class="text-2xl font-bold">{analysis.accountabilityGap} km</div>
          <div class="text-xs text-stone-600 mt-1">
            {$locale === 'sv' ? 'mellan beslut och konsekvens' : 'between decision and consequence'}
          </div>
        </div>
      </div>

      <!-- Recommendation -->
      <div class="bg-blue-50 border border-blue-200 rounded-lg p-6 text-left max-w-xl mx-auto mb-8">
        <h3 class="font-bold text-lg mb-2 flex items-center gap-2">
          💡 {$locale === 'sv' ? 'Rekommendation' : 'Recommendation'}
        </h3>
        <p class="text-stone-700 leading-relaxed">
          {recommendation}
        </p>
      </div>

      <!-- Actions -->
      <div class="flex gap-4 justify-center mb-12">
        <button 
          onclick={() => window.print()} 
          class="px-6 py-3 border border-stone-300 rounded font-bold hover:bg-stone-50"
        >
          {$locale === 'sv' ? 'Spara Rapport' : 'Save Report'}
        </button>
        <button 
          onclick={restart} 
          class="px-6 py-3 text-stone-500 hover:text-black"
        >
          {$locale === 'sv' ? 'Ny Analys' : 'New Analysis'}
        </button>
      </div>

      <!-- Next Steps CTA -->
      <div class="mt-12 p-8 bg-manifesto-black text-white rounded-xl max-w-xl mx-auto text-left">
        <h3 class="font-bold text-xl mb-2">
          {$locale === 'sv' ? 'Nästa steg' : 'Next Steps'}
        </h3>
        <p class="text-stone-300 mb-6 leading-relaxed">
          {$locale === 'sv' 
           ? 'Du har kartlagt maktstrukturen. Nu är det dags att använda Närhetskompassen för en helhetsbedömning och sedan starta en studiecirkel för förändring.'
           : 'You have mapped the power structure. Now it\'s time to use the Proximity Compass for a holistic assessment and then start a study circle for change.'}
        </p>
        <div class="flex gap-3">
          <a 
            href="/verktyg/kompass" 
            class="inline-block bg-white text-black px-4 py-2 rounded font-bold hover:bg-stone-200"
          >
            {$locale === 'sv' ? 'Närhetskompassen →' : 'Proximity Compass →'}
          </a>
          <a 
            href="/studiecirkel" 
            class="inline-block border border-white text-white px-4 py-2 rounded font-bold hover:bg-white/10"
          >
            {$locale === 'sv' ? 'Studiecirkel' : 'Study Circle'}
          </a>
        </div>
      </div>

    </div>
  {/if}

</div>
