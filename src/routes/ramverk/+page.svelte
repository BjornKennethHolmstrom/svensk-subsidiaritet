<script lang="ts">
  import { t, locale } from '$lib/stores/i18n';
  import { fade } from 'svelte/transition';

  const frameworks = $derived([
    {
      id: 'gsi',
      icon: '📐',
      color: 'bg-sky-50 text-sky-700 border-sky-200',
      link: '/ramverk/gsi',
      status: 'active'
    },
    {
      id: 'aubi',
      icon: '⚡',
      color: 'bg-amber-50 text-amber-700 border-amber-200',
      link: '/ramverk/aubi',
      status: 'active'
    }
  ]);
</script>

<div class="mx-auto max-w-5xl px-6 py-12" in:fade={{ duration: 200 }}>
  
  <header class="mb-16 border-b border-stone-200 pb-8">
    <h1 class="mb-4 font-sans text-4xl font-bold text-manifesto-black">
      {$t.frameworks.title}
    </h1>
    <p class="max-w-3xl font-serif text-xl leading-relaxed text-stone-600">
      {$t.frameworks.subtitle}
    </p>
  </header>

  <!-- Framework Cards -->
  <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
    {#each frameworks as fw}
      <div 
        class="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-stone-200 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-stone-300"
      >
        <div>
          <div class="mb-6 flex h-14 w-14 items-center justify-center rounded-xl text-3xl {fw.color} shadow-sm">
            {fw.icon}
          </div>

          <h3 class="mb-3 font-sans text-xl font-bold text-manifesto-black">
            {$t.frameworks[fw.id].title}
          </h3>

          <p class="font-serif text-stone-600 leading-relaxed mb-8">
            {$t.frameworks[fw.id].description}
          </p>
        </div>

        <div class="mt-auto">
          <a 
            href={fw.link}
            class="inline-flex w-full items-center justify-center rounded-lg bg-manifesto-black px-4 py-3 font-sans text-sm font-bold text-white transition-transform active:scale-95 group-hover:bg-stone-800"
          >
            {$t.frameworks[fw.id].action} →
          </a>
        </div>
      </div>
    {/each}
  </div>

  <!-- Relationship Section -->
  <section class="mt-24 rounded-2xl bg-stone-50 p-8 md:p-12 border border-stone-100">
    <div class="md:flex gap-12 items-start">
      <div class="md:w-1/3 mb-8 md:mb-0">
        <h2 class="font-sans text-2xl font-bold text-manifesto-black mb-6">
          {$t.frameworks.relationship.title}
        </h2>
        <div class="space-y-3">
          <div class="flex items-center gap-3">
            <span class="text-xl">📐</span>
            <span class="font-sans text-sm font-bold text-stone-700">
              {$t.frameworks.relationship.hardware}
            </span>
          </div>
          <div class="flex items-center gap-3">
            <span class="text-xl">⚡</span>
            <span class="font-sans text-sm font-bold text-stone-700">
              {$t.frameworks.relationship.electricity}
            </span>
          </div>
        </div>
      </div>
      
      <div class="md:w-2/3">
        <p class="font-serif text-stone-600 leading-relaxed text-lg">
          {$t.frameworks.relationship.explanation}
        </p>
      </div>
    </div>
  </section>

</div>
