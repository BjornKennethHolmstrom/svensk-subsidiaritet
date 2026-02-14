<script lang="ts">
  import { t, locale } from '$lib/stores/i18n';
  import { fade } from 'svelte/transition';

  // Tool Definitions — interactive tools and educational materials only
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
      id: 'school', 
      icon: '🎓', 
      color: 'bg-amber-50 text-amber-700 border-amber-200', 
      link: '/skola',
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
              class="inline-flex w-full items-center justify-center rounded-lg bg-manifesto-black px-4 py-3 font-sans text-sm font-bold text-white transition-transform active:scale-95 group-hover:bg-stone-800"
            >
              {$t.tools[tool.id].action} →
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

  <!-- Cross-link to Ramverk -->
  <div class="mt-16 text-center">
    <p class="mx-auto max-w-2xl font-serif text-sm text-stone-400">
      {$locale === 'sv'
        ? 'Dessa verktyg bygger på de analytiska ramverk vi utvecklat.'
        : 'These tools are built on the analytical frameworks we have developed.'}
      <a href="/ramverk" class="underline hover:text-black transition-colors">
        {$locale === 'sv' ? 'Utforska ramverken →' : 'Explore the frameworks →'}
      </a>
    </p>
  </div>

</div>
