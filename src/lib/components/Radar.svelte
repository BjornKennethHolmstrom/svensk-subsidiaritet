<script lang="ts">
  export let scores: { power: number; knowledge: number; resilience: number };
  
  // Math to convert scores (0-100) to coordinates
  // Angles: Power (Top), Knowledge (Bottom Right), Resilience (Bottom Left)
  const radius = 100;
  const center = 110; // slightly offset
  
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
  // Pre-calculated coordinates for the "Ideal" background triangle
</script>

<svg viewBox="0 0 220 220" class="w-full max-w-md mx-auto drop-shadow-xl">
  <circle cx={center} cy={center} r={radius} fill="none" stroke="#e5e7eb" stroke-width="1" />
  <circle cx={center} cy={center} r={radius * 0.5} fill="none" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="4" />

  <polygon 
    points="{center},{center - i} {center + i * 0.866},{center + i * 0.5} {center - i * 0.866},{center + i * 0.5}"
    fill="none" 
    stroke="#10b981" 
    stroke-width="1" 
    stroke-dasharray="4"
    opacity="0.5"
  />

  <polygon 
    points="{pX},{pY} {kX},{kY} {rX},{rY}"
    class="fill-manifesto-black/80 stroke-manifesto-black transition-all duration-1000 ease-out"
    stroke-width="2"
  />
  
  <text x={center} y="5" text-anchor="middle" class="text-[10px] font-bold uppercase fill-stone-500">Power</text>
  <text x="210" y="180" text-anchor="middle" class="text-[10px] font-bold uppercase fill-stone-500">Knowledge</text>
  <text x="10" y="180" text-anchor="middle" class="text-[10px] font-bold uppercase fill-stone-500">Resilience</text>
</svg>
