<script lang="ts">
  import { t, locale } from '$lib/stores/i18n';
  import { questions, getDiagnosis, type Axis } from '$lib/data/compass';
  import Radar from '$lib/components/Radar.svelte';
  import { fade, slide } from 'svelte/transition';

  let step = 0; // 0 = Intro, 1-6 = Questions, 7 = Result
  let systemName = "";
  
  let answers: Record<number, number> = {};

  // Computed Scores
  $: scores = {
    power: calcScore('power'),
    knowledge: calcScore('knowledge'),
    resilience: calcScore('resilience')
  };

  function calcScore(axis: Axis) {
    const axisQuestions = questions.filter(q => q.axis === axis);
    if (axisQuestions.length === 0) return 0;
    const total = axisQuestions.reduce((sum, q) => sum + (answers[q.id] || 0), 0);
    return Math.round(total / axisQuestions.length);
  }

  $: totalScore = Math.round((scores.power + scores.knowledge + scores.resilience) / 3);

  const next = () => step++;
  const restart = () => { step = 0; answers = {}; systemName = ""; };
</script>

<div class="mx-auto max-w-3xl px-6 py-12 min-h-[80vh] flex flex-col justify-center" in:fade>

  {#if step === 0}
    <div class="text-center space-y-8">
      <div class="text-6xl">🧭</div>
      <h1 class="font-sans text-4xl font-bold text-manifesto-black">
        {$locale === 'sv' ? 'Närhetskompassen' : 'The Proximity Compass'}
      </h1>
      <p class="font-serif text-xl text-stone-600 max-w-xl mx-auto">
        {$locale === 'sv' 
          ? 'Diagnostisera hälsan i ditt system. Är det centraliserat och sårbart, eller distribuerat och resilient?'
          : 'Diagnose the health of your system. Is it centralized and fragile, or distributed and resilient?'}
      </p>
      
      <div class="bg-stone-50 p-6 rounded-lg border border-stone-200 inline-block text-left w-full max-w-md">
        <label class="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">
          {$locale === 'sv' ? 'Vad vill du analysera?' : 'What do you want to analyze?'}
        </label>
        <input 
          bind:value={systemName} 
          placeholder={$locale === 'sv' ? 'T.ex. Min skola, Äldreomsorgen i Malmö...' : 'E.g. My local school, Food system...'}
          class="w-full bg-white border border-stone-300 rounded p-3 font-serif focus:ring-2 focus:ring-black outline-none"
        />
      </div>

      <button 
        on:click={next}
        disabled={!systemName}
        class="bg-manifesto-black text-white px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {$locale === 'sv' ? 'Starta Analys' : 'Start Analysis'} →
      </button>
    </div>

  {:else if step <= questions.length}
    {@const q = questions[step - 1]}
    <div class="max-w-xl mx-auto w-full" in:slide={{ duration: 300 }}>
      
      <div class="w-full bg-stone-200 h-1 rounded-full mb-8">
        <div class="bg-manifesto-black h-1 rounded-full transition-all duration-500" style="width: {(step / questions.length) * 100}%"></div>
      </div>

      <span class="text-xs font-bold uppercase tracking-widest text-stone-400 mb-2 block">
        {q.axis} — {step} / {questions.length}
      </span>
      
      <h2 class="font-sans text-2xl font-bold text-manifesto-black mb-8">
        {q.text[$locale]}
      </h2>

      <div class="space-y-3">
        {#each q.options as opt}
          <button 
            on:click={() => { answers[q.id] = opt.score; next(); }}
            class="w-full text-left p-4 rounded-lg border border-stone-200 hover:border-black hover:bg-stone-50 transition-all font-serif text-stone-700 flex justify-between group"
          >
            <span>{opt.label[$locale]}</span>
            <span class="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </button>
        {/each}
      </div>
    </div>

  {:else}
    <div class="text-center" in:fade>
      <span class="text-xs font-bold uppercase tracking-widest text-stone-400 mb-2 block">
        {$locale === 'sv' ? 'Diagnos för' : 'Diagnosis for'} {systemName}
      </span>
      
      <h2 class="font-sans text-4xl font-bold text-manifesto-black mb-2">
        {getDiagnosis(totalScore, $locale)}
      </h2>
      <p class="font-mono text-stone-500 mb-8">Subsidiarity Score: {totalScore}/100</p>

      <div class="mb-12">
        <Radar {scores} />
      </div>

      <div class="grid grid-cols-3 gap-4 text-left max-w-xl mx-auto mb-12">
        <div class="p-4 bg-stone-50 rounded border border-stone-200">
          <div class="text-xs text-stone-500 uppercase font-bold">Power</div>
          <div class="text-2xl font-bold">{scores.power}%</div>
        </div>
        <div class="p-4 bg-stone-50 rounded border border-stone-200">
          <div class="text-xs text-stone-500 uppercase font-bold">Knowledge</div>
          <div class="text-2xl font-bold">{scores.knowledge}%</div>
        </div>
        <div class="p-4 bg-stone-50 rounded border border-stone-200">
          <div class="text-xs text-stone-500 uppercase font-bold">Resilience</div>
          <div class="text-2xl font-bold">{scores.resilience}%</div>
        </div>
      </div>

      <div class="flex gap-4 justify-center">
        <button on:click={() => window.print()} class="px-6 py-3 border border-stone-300 rounded font-bold hover:bg-stone-50">
          {$locale === 'sv' ? 'Spara Rapport' : 'Save Report'}
        </button>
        <button on:click={restart} class="px-6 py-3 text-stone-500 hover:text-black">
          {$locale === 'sv' ? 'Starta Om' : 'Start Over'}
        </button>
      </div>

      <div class="mt-12 p-8 bg-manifesto-black text-white rounded-xl max-w-xl mx-auto text-left">
        <h3 class="font-bold text-xl mb-2">
          {$locale === 'sv' ? 'Vad gör vi nu?' : 'What do we do now?'}
        </h3>
        <p class="text-stone-300 mb-6 leading-relaxed">
          {$locale === 'sv' 
           ? 'Ditt system lider av centraliserad sårbarhet. Nästa steg är att sammankalla en studiecirkel och använda "Maktanalys"-verktyget.'
           : 'Your system suffers from centralized fragility. The next step is to convene a study circle and use the "Power Analysis" tool.'}
        </p>
        <a href="/bibliotek" class="inline-block bg-white text-black px-4 py-2 rounded font-bold hover:bg-stone-200">
          {$locale === 'sv' ? 'Hämta Studiecirkel-Kit' : 'Get Study Circle Kit'}
        </a>
      </div>

    </div>
  {/if}

</div>
