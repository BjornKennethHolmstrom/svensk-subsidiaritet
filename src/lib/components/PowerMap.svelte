<script lang="ts">
  import { locale } from '$lib/stores/i18n';
  import type { PowerAnalysis } from '$lib/data/power-analysis';
  
  export let analysis: PowerAnalysis;
  
  const levels = [
    { 
      id: 'supranational', 
      labelSv: 'EU/Internationell', 
      labelEn: 'EU/International',
      color: '#dc2626',
      distance: 1500
    },
    { 
      id: 'national', 
      labelSv: 'Nationell', 
      labelEn: 'National',
      color: '#ea580c',
      distance: 400
    },
    { 
      id: 'regional', 
      labelSv: 'Regional', 
      labelEn: 'Regional',
      color: '#f59e0b',
      distance: 100
    },
    { 
      id: 'municipal', 
      labelSv: 'Kommunal', 
      labelEn: 'Municipal',
      color: '#84cc16',
      distance: 20
    },
    { 
      id: 'local', 
      labelSv: 'Lokal', 
      labelEn: 'Local',
      color: '#22c55e',
      distance: 0
    }
  ];
  
  function isActive(levelId: string): boolean {
    return levelId === analysis.dominantLevel;
  }
</script>

<div class="w-full max-w-2xl mx-auto">
  <svg viewBox="0 0 400 500" class="w-full h-auto">
    <!-- Title -->
    <text x="200" y="30" text-anchor="middle" class="fill-stone-800 font-bold text-sm">
      {$locale === 'sv' ? 'Maktkarta' : 'Power Map'}
    </text>
    
    <!-- Levels (pyramid) -->
    {#each levels as level, i}
      {@const y = 80 + i * 80}
      {@const width = 100 + i * 50}
      {@const x = 200 - width / 2}
      {@const active = isActive(level.id)}
      
      <!-- Level box -->
      <rect
        {x}
        {y}
        {width}
        height="60"
        fill={active ? level.color : '#f5f5f4'}
        stroke={active ? level.color : '#d6d3d1'}
        stroke-width={active ? '3' : '1'}
        rx="8"
        opacity={active ? '1' : '0.6'}
      />
      
      <!-- Level label -->
      <text
        x="200"
        y={y + 25}
        text-anchor="middle"
        class="font-bold text-xs"
        fill={active ? 'white' : '#57534e'}
      >
        {$locale === 'sv' ? level.labelSv : level.labelEn}
      </text>
      
      <!-- Distance label -->
      <text
        x="200"
        y={y + 42}
        text-anchor="middle"
        class="text-xs"
        fill={active ? 'white' : '#78716c'}
      >
        {level.distance === 0 
          ? ($locale === 'sv' ? 'Här' : 'Here')
          : `~${level.distance} km`}
      </text>
      
      <!-- Arrow pointing down (if active) -->
      {#if active && i < levels.length - 1}
        <line
          x1="200"
          y1={y + 60}
          x2="200"
          y2={y + 80}
          stroke={level.color}
          stroke-width="3"
          marker-end="url(#arrowhead)"
        />
      {/if}
    {/each}
    
    <!-- Arrow marker definition -->
    <defs>
      <marker
        id="arrowhead"
        markerWidth="10"
        markerHeight="10"
        refX="5"
        refY="5"
        orient="auto"
      >
        <polygon points="0 0, 10 5, 0 10" fill="#22c55e" />
      </marker>
    </defs>
    
    <!-- Bottom info -->
    <text x="200" y="480" text-anchor="middle" class="text-xs fill-stone-500">
      {$locale === 'sv' 
        ? `Maktens tyngdpunkt: ${analysis.averageDistance} km från dig`
        : `Power center of gravity: ${analysis.averageDistance} km from you`}
    </text>
  </svg>
  
  <!-- Legend -->
  <div class="mt-6 flex items-center justify-center gap-6 text-xs text-stone-600">
    <div class="flex items-center gap-2">
      <div class="w-4 h-4 rounded border-2 border-green-500 bg-green-500"></div>
      <span>{$locale === 'sv' ? 'Dominant makt' : 'Dominant power'}</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="w-4 h-4 rounded border border-stone-300 bg-stone-100"></div>
      <span>{$locale === 'sv' ? 'Övriga nivåer' : 'Other levels'}</span>
    </div>
  </div>
</div>
