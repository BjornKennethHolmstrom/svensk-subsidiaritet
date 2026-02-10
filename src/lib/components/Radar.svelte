<script lang="ts">
  import { locale } from '$lib/stores/i18n';
  
  export let scores: { power: number; knowledge: number; resilience: number };
  
  // Math to convert scores (0-100) to coordinates
  // Angles: Power (Top), Knowledge (Bottom Right), Resilience (Bottom Left)
  const radius = 80;
  const center = 120; // Center point with padding for labels
  
  // Axis 1: Power (-90 deg / Top)
  $: pY = center + (radius * (scores.power / 100)) * Math.sin(-Math.PI / 2);
  $: pX = center + (radius * (scores.power / 100)) * Math.cos(-Math.PI / 2);

  // Axis 2: Knowledge (30 deg / Bottom Right)
  $: kY = center + (radius * (scores.knowledge / 100)) * Math.sin(Math.PI / 6);
  $: kX = center + (radius * (scores.knowledge / 100)) * Math.cos(Math.PI / 6);

  // Axis 3: Resilience (150 deg / Bottom Left)
  $: rY = center + (radius * (scores.resilience / 100)) * Math.sin(5 * Math.PI / 6);
  $: rX = center + (radius * (scores.resilience / 100)) * Math.cos(5 * Math.PI / 6);

  // Ideal Triangle (Fixed at 80% score)
  const i = 0.8 * radius;
  
  // Bilingual labels
  $: labels = {
    power: $locale === 'sv' ? 'MAKT' : 'POWER',
    knowledge: $locale === 'sv' ? 'KUNSKAP' : 'KNOWLEDGE',
    resilience: $locale === 'sv' ? 'RESILIENS' : 'RESILIENCE'
  };
</script>

<svg viewBox="0 0 240 240" class="w-full max-w-md mx-auto drop-shadow-xl">
  <!-- Outer circle -->
  <circle cx={center} cy={center} r={radius} fill="none" stroke="#e5e7eb" stroke-width="1.5" />
  
  <!-- Inner circle (50% guide) -->
  <circle cx={center} cy={center} r={radius * 0.5} fill="none" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="4" />

  <!-- Ideal triangle (80% - green dashed) -->
  <polygon 
    points="{center},{center - i} {center + i * 0.866},{center + i * 0.5} {center - i * 0.866},{center + i * 0.5}"
    fill="none" 
    stroke="#10b981" 
    stroke-width="1.5" 
    stroke-dasharray="4"
    opacity="0.5"
  />

  <!-- Actual score triangle (user's result) -->
  <polygon 
    points="{pX},{pY} {kX},{kY} {rX},{rY}"
    class="fill-manifesto-black/80 stroke-manifesto-black transition-all duration-1000 ease-out"
    stroke-width="2.5"
  />
  
  <!-- Labels with proper positioning and spacing -->
  <!-- Power (Top) -->
  <text 
    x={center} 
    y="20" 
    text-anchor="middle" 
    class="text-[11px] font-bold uppercase fill-stone-600 tracking-wider"
  >
    {labels.power}
  </text>
  
  <!-- Knowledge (Bottom Right) -->
  <text 
    x="210" 
    y="210" 
    text-anchor="end" 
    class="text-[11px] font-bold uppercase fill-stone-600 tracking-wider"
  >
    {labels.knowledge}
  </text>
  
  <!-- Resilience (Bottom Left) -->
  <text 
    x="30" 
    y="210" 
    text-anchor="start" 
    class="text-[11px] font-bold uppercase fill-stone-600 tracking-wider"
  >
    {labels.resilience}
  </text>
  
  <!-- Axis lines (subtle guides from center to edge) -->
  <line x1={center} y1={center} x2={center} y2={center - radius} stroke="#e5e7eb" stroke-width="1" opacity="0.3" />
  <line x1={center} y1={center} x2={center + radius * 0.866} y2={center + radius * 0.5} stroke="#e5e7eb" stroke-width="1" opacity="0.3" />
  <line x1={center} y1={center} x2={center - radius * 0.866} y2={center + radius * 0.5} stroke="#e5e7eb" stroke-width="1" opacity="0.3" />
</svg>
