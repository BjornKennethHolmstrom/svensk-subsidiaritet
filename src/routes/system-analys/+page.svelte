<script lang="ts">
  import { t } from '$lib/stores/i18n';
  
  const systems = [
    { id: 'mat', icon: '🌾' },
    { id: 'vard', icon: '🏥' },
    { id: 'utbildning', icon: '📚' },
    { id: 'aldreomsorg', icon: '👴' },
    { id: 'bostad', icon: '🏠' },
    { id: 'energi', icon: '⚡' },
    { id: 'transport', icon: '🚆' },
    { id: 'valfard', icon: '🛡️' },
    { id: 'trygghet', icon: '👮' },
    { id: 'kultur', icon: '🎭' }
  ];
</script>

<div class="mx-auto max-w-5xl px-6 py-12">
  <h1 class="mb-4 font-sans text-4xl font-bold text-manifesto-black">
    {$t.systemAnalysis.title}
  </h1>
  <p class="mb-12 font-serif text-xl text-stone-600 max-w-2xl">
    {$t.systemAnalysis.subtitle}
  </p>

  <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
    {#each systems as system}
      <a 
        href="/system-analys/{system.id}"
        class="group relative overflow-hidden rounded-lg border border-stone-200 bg-white p-6 transition-all hover:border-stone-400 hover:shadow-lg"
      >
        <div class="mb-4 text-4xl">{system.icon}</div>
        <h3 class="mb-2 font-sans text-xl font-bold text-stone-900 group-hover:text-black">
          {$t.systemAnalysis.systems[system.id]}
        </h3>
        <span class="text-sm font-bold text-stone-400 uppercase tracking-widest group-hover:text-stone-600">
          {$t.systemAnalysis.readAnalysis} →
        </span>
      </a>
    {/each}
  </div>
</div>
