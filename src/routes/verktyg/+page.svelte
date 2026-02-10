<script lang="ts">
  import { t, locale } from '$lib/stores/i18n';
  import { fade } from 'svelte/transition';

  // Tool Definitions with status flags
  let tools = $derived([
    { 
      id: 'compass', 
      icon: '🧭', 
      color: 'bg-indigo-50 text-indigo-600 border-indigo-200',
      link: '/verktyg/kompass',
      status: 'active'
    },
    { 
      id: 'power', 
      icon: '🔭', 
      color: 'bg-purple-50 text-purple-600 border-purple-200',
      link: '/verktyg/maktanalys',
      status: 'active'
    },
    { 
      id: 'workshop', 
      icon: '👥', 
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      link: '/studiecirkel',
      status: 'active',
    },
    { 
      id: 'library', 
      icon: '📚', 
      color: 'bg-amber-50 text-amber-600 border-amber-200',
      link: '#', 
      status: 'coming_soon'
    }
  ]);
</script>

<div class="mx-auto max-w-5xl px-6 py-12" in:fade={{ duration: 200 }}>
  
  <header class="mb-16 border-b border-stone-200 pb-8">
    <h1 class="mb-4 font-sans text-4xl font-bold text-manifesto-black">
      {$t.tools.title}
    </h1>
    <p class="max-w-3xl font-serif text-xl leading-relaxed text-stone-600">
      {$t.tools.subtitle}
    </p>
  </header>

  <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
    
    {#each tools as tool}
      <div 
        class="group relative flex flex-col justify-between overflow-hidden rounded-xl border bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-xl
        {tool.status === 'coming_soon' ? 'border-dashed border-stone-300 opacity-70' : 'border-stone-200 hover:border-stone-300'}"
      >
        
        <div>
          <div class="mb-6 flex h-14 w-14 items-center justify-center rounded-xl text-3xl {tool.color} shadow-sm">
            {tool.icon}
          </div>

          <h3 class="mb-3 font-sans text-xl font-bold text-manifesto-black">
            {$t.tools[tool.id].title}
          </h3>

          <p class="font-serif text-stone-600 leading-relaxed mb-8">
            {$t.tools[tool.id].description}
          </p>
        </div>

        <div class="mt-auto">
          {#if tool.status === 'active'}
            <a 
              href={tool.link}
              
              download={tool.isDownload ? '' : null} 
              target={tool.isDownload ? '_blank' : null}
              
              class="inline-flex w-full items-center justify-center rounded-lg bg-manifesto-black px-4 py-3 font-sans text-sm font-bold text-white transition-transform active:scale-95 group-hover:bg-stone-800"
            >
              {$t.tools[tool.id].action} {tool.isDownload ? '↓' : '→'}
            </a>
          {:else}
            <button disabled class="w-full cursor-not-allowed rounded-lg bg-stone-100 px-4 py-3 font-sans text-sm font-bold text-stone-400">
              {$t.tools[tool.id].action}
            </button>
          {/if}
        </div>

      </div>
    {/each}

  </div>

  <section class="mt-24 rounded-2xl bg-stone-50 p-8 md:p-12 border border-stone-100">
    <div class="md:flex gap-12 items-start">
      <div class="md:w-1/3 mb-8 md:mb-0">
        <h2 class="font-sans text-2xl font-bold text-manifesto-black mb-4">
          {$locale === 'sv' ? 'Metodiken' : 'The Methodology'}
        </h2>
        <p class="font-serif text-stone-600 text-sm italic">
          {$locale === 'sv' 
            ? 'Vi angriper inte symptom. Vi diagnostiserar systemfel.' 
            : 'We do not attack symptoms. We diagnose system failures.'}
        </p>
      </div>
      
      <div class="md:w-2/3 space-y-6">
        <div class="flex gap-4">
          <span class="text-2xl">🔭</span>
          <div>
            <h4 class="font-bold text-sm uppercase tracking-wider mb-1">{$locale === 'sv' ? 'Maktanalys' : 'Power Analysis'}</h4>
            <p class="text-stone-600 text-sm">{$locale === 'sv' ? 'Var fattas besluten? (Avstånd i km)' : 'Where are decisions made? (Distance in km)'}</p>
          </div>
        </div>
        <div class="flex gap-4">
          <span class="text-2xl">🧠</span>
          <div>
            <h4 class="font-bold text-sm uppercase tracking-wider mb-1">{$locale === 'sv' ? 'Kunskapsanalys' : 'Knowledge Analysis'}</h4>
            <p class="text-stone-600 text-sm">{$locale === 'sv' ? 'Vems kunskap räknas? (Expert vs. Erfarenhet)' : 'Whose knowledge counts? (Expert vs. Experience)'}</p>
          </div>
        </div>
        <div class="flex gap-4">
          <span class="text-2xl">🛡️</span>
          <div>
            <h4 class="font-bold text-sm uppercase tracking-wider mb-1">{$locale === 'sv' ? 'Resiliensanalys' : 'Resilience Analysis'}</h4>
            <p class="text-stone-600 text-sm">{$locale === 'sv' ? 'Vad händer vid kris? (Sårbarhet vs. Redundans)' : 'What happens in crisis? (Fragility vs. Redundancy)'}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

</div>
