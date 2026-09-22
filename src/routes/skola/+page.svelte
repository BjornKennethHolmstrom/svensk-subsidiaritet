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
        sv: 'En fristående lektion om att se system i vardagen. Kräver inga förkunskaper och passar alla program.',
        en: 'A standalone lesson on seeing systems in everyday life. No prior knowledge needed, suits all programmes.'
      },
      badge: {
        sv: 'En lektion',
        en: 'One lesson'
      }
    },
    {
      id: '6-veckor',
      href: '/skola/6-veckor',
      icon: '🎓',
      title: {
        sv: 'Fördjupning (6 veckor)',
        en: 'Deep dive (6 weeks)'
      },
      desc: {
        sv: 'Modul för samhällskunskap nivå 1b. Eleverna prövar argument för och emot centralisering mot svenska exempel och egna källor.',
        en: 'Module for civics, level 1b. Students test arguments for and against centralization against Swedish cases and their own sources.'
      },
      badge: {
        sv: 'Tolv lektioner',
        en: 'Twelve lessons'
      }
    }
  ];
</script>

<SEO
  title={$locale === 'sv' ? 'För skolan | Svensk Subsidiaritet' : 'For schools | Swedish Subsidiarity'}
  description={$locale === 'sv'
    ? 'Gratis lektionsmaterial för gymnasiet om styrning och systemtänkande.'
    : 'Free lesson materials for upper secondary school on governance and systems thinking.'}
/>

<div class="mx-auto max-w-5xl px-6 py-16" in:fade>

  <header class="mx-auto mb-16 max-w-3xl text-center">
    <p class="mb-4 font-sans text-sm font-semibold text-stone-500">
      {$locale === 'sv' ? 'För lärare' : 'For teachers'}
    </p>
    <h1 class="mb-6 font-sans text-4xl font-black text-manifesto-black md:text-5xl">
      {$locale === 'sv' ? 'Vem bestämmer vad?' : 'Who decides what?'}
    </h1>
    <p class="font-serif text-xl leading-relaxed text-stone-600">
      {$locale === 'sv'
        ? 'Gratis lektionsmaterial där eleverna undersöker vem som fattar besluten i samhället, och på vilken nivå olika beslut fungerar bäst. Materialet är gjort för att eleverna ska kunna komma fram till egna slutsatser.'
        : 'Free lesson materials in which students investigate who makes decisions in society, and at which level different decisions work best. The materials are designed so students can reach their own conclusions.'}
    </p>
  </header>

  <div class="mb-16 grid gap-8 md:grid-cols-2">
    {#each tools as tool}
      <a
        href={tool.href}
        class="group relative rounded-2xl border border-stone-200 bg-white p-8 transition-colors hover:border-stone-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-800"
      >
        <span class="absolute right-4 top-4 rounded bg-stone-100 px-2 py-1 text-xs font-semibold text-stone-600">
          {tool.badge[$locale]}
        </span>

        <div class="mb-6 text-4xl" aria-hidden="true">{tool.icon}</div>

        <h2 class="mb-3 font-sans text-2xl font-bold text-manifesto-black decoration-stone-300 underline-offset-4 group-hover:underline">
          {tool.title[$locale]}
        </h2>

        <p class="mb-8 leading-relaxed text-stone-600">
          {tool.desc[$locale]}
        </p>

        <span class="inline-flex items-center font-sans font-bold text-manifesto-black">
          {$locale === 'sv' ? 'Gå till materialet' : 'Go to the material'}
          <svg class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </a>
    {/each}
  </div>

  <section class="mx-auto max-w-3xl rounded-xl border border-stone-200 bg-stone-50 p-6 font-sans text-sm leading-relaxed text-stone-700">
    <h2 class="mb-2 text-base font-bold text-stone-900">
      {$locale === 'sv' ? 'Om materialet' : 'About the materials'}
    </h2>
    <p>
      {#if $locale === 'sv'}
        Svensk Subsidiaritet är ett oberoende projekt med en utgångspunkt i subsidiaritetsprincipen. Lektionerna är byggda för att uppfylla läroplanens krav på saklighet och allsidighet: eleverna möter argument både för och emot centralisering och värderar underlaget själva. Ser du brister, eller vill du dela hur det gick i din klass? <a href="/kontakt" class="font-semibold text-stone-900 underline underline-offset-2">Hör av dig</a>.
      {:else}
        Swedish Subsidiarity is an independent project that starts from the principle of subsidiarity. The lessons are built to meet the curriculum's requirements for objective and balanced teaching: students meet arguments both for and against centralization and weigh the evidence themselves. Spotted a problem, or want to share how it went in your class? <a href="/kontakt" class="font-semibold text-stone-900 underline underline-offset-2">Get in touch</a>.
      {/if}
    </p>
  </section>

</div>
