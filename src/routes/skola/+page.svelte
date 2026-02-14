<script lang="ts">
  import { locale } from '$lib/stores/i18n';
  import { fade } from 'svelte/transition';
  import SEO from '$lib/components/SEO.svelte';

  const tools = [
    {
      id: '60-min',
      href: '/skola/60-minuter',
      icon: '⚡️',
      title: {
        sv: 'Prova på (60 min)',
        en: 'Try it out (60 min)'
      },
      desc: {
        sv: 'En fristående lektion om systemförståelse. Perfekt insteg som inte kräver förkunskaper.',
        en: 'A standalone lesson on systems understanding. Perfect entry point requiring no prior knowledge.'
      },
      badge: {
        sv: 'Lätt',
        en: 'Easy'
      }
    },
    {
      id: '6-veckor',
      href: '/skola/6-veckor',
      icon: '🎓',
      title: {
        sv: 'Fördjupning (6 veckor)',
        en: 'Deep Dive (6 weeks)'
      },
      desc: {
        sv: 'Komplett modul för Samhällskunskap 1b. Täcker centralt innehåll med systemteoretisk spets.',
        en: 'Complete module for Civics. Covers core curriculum with a systems theory edge.'
      },
      badge: {
        sv: 'Omfattande',
        en: 'Comprehensive'
      }
    }
  ];
</script>

<SEO 
  title={$locale === 'sv' ? 'För Skolan | Svensk Subsidiaritet' : 'For Schools | Swedish Subsidiarity'}
  description={$locale === 'sv' ? 'Systemtänkande för klassrummet. Gratis läromedel för gymnasiet.' : 'Systems thinking for the classroom. Free educational materials.'}
/>

<div class="max-w-5xl mx-auto px-6 py-16" in:fade>
  
  <header class="mb-16 text-center max-w-3xl mx-auto">
    <div class="inline-block mb-4 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-bold tracking-wider uppercase">
      {$locale === 'sv' ? 'Lärarrummet' : 'Teacher\'s Lounge'}
    </div>
    <h1 class="text-4xl md:text-5xl font-black mb-6 text-stone-900 dark:text-white">
      {$locale === 'sv' ? 'Närhetskompassen i Klassrummet' : 'The Proximity Compass in the Classroom'}
    </h1>
    <p class="text-xl text-stone-600 dark:text-stone-400 leading-relaxed">
      {$locale === 'sv' 
        ? 'Hjälp nästa generation att se mönstren bakom rubrikerna. Gratis, läroplansanpassat material för att bygga systemförståelse och resiliens.'
        : 'Help the next generation see the patterns behind the headlines. Free, curriculum-aligned materials to build systems understanding and resilience.'}
    </p>
  </header>

  <div class="grid md:grid-cols-2 gap-8 mb-16">
    {#each tools as tool}
      <a href={tool.href} class="group relative overflow-hidden rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-8 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-xl">
        <div class="absolute top-4 right-4">
          <span class="px-2 py-1 text-xs font-bold rounded bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
            {tool.badge[$locale]}
          </span>
        </div>
        
        <div class="text-4xl mb-6">{tool.icon}</div>
        
        <h2 class="text-2xl font-bold mb-3 text-stone-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {tool.title[$locale]}
        </h2>
        
        <p class="text-stone-600 dark:text-stone-400 mb-8 leading-relaxed">
          {tool.desc[$locale]}
        </p>

        <div class="flex items-center text-blue-600 dark:text-blue-400 font-bold group-hover:translate-x-2 transition-transform">
          {$locale === 'sv' ? 'Gå till materialet' : 'Go to material'} 
          <svg class="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </div>
      </a>
    {/each}
  </div>
  <!--
  <div class="bg-stone-50 dark:bg-stone-800/50 rounded-xl p-8 text-center border border-stone-200 dark:border-stone-800">
    <h3 class="text-lg font-bold mb-2">
      {$locale === 'sv' ? 'Vill du ha allt i en fil?' : 'Want everything in one file?'}
    </h3>
    <p class="text-stone-600 dark:text-stone-400 mb-6">
      {$locale === 'sv' ? 'Ladda ner hela lärarpaketet som PDF.' : 'Download the complete teacher package as PDF.'}
    </p>
    <button class="px-6 py-2 bg-stone-900 dark:bg-white text-white dark:text-stone-900 rounded-lg font-bold hover:opacity-90 transition-opacity">
      {$locale === 'sv' ? 'Ladda ner Lärarpaket (PDF)' : 'Download Teacher Package (PDF)'}
    </button>
  </div>
  -->

</div>
