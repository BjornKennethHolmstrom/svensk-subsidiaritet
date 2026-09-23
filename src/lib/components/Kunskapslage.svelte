<script lang="ts">
  // Status of what the box describes:
  // 'nuvarande'   = the current arrangement
  // 'pilot'       = a proposal that can be tested within, or close to, current law and evidence
  // 'utforskande' = an exploratory design outside current law or outside the evidence support
  export let status: 'nuvarande' | 'pilot' | 'utforskande' = 'pilot';
  export let lang: 'sv' | 'en' = 'sv';

  const labels = {
    sv: { heading: 'Kunskapsläge', nuvarande: 'Nuvarande ordning', pilot: 'Pilotförslag', utforskande: 'Utforskande' },
    en: { heading: 'State of knowledge', nuvarande: 'Current arrangement', pilot: 'Pilot proposal', utforskande: 'Exploratory' }
  };

  const badge = {
    nuvarande: 'bg-stone-200 text-stone-800',
    pilot: 'bg-stone-200 text-stone-800',
    utforskande: 'bg-amber-100 text-amber-900'
  };
</script>

<aside
  class="my-10 rounded-lg border border-stone-300 bg-stone-50 px-6 py-2 text-stone-800"
  aria-label={labels[lang].heading}
>
  <div class="not-prose flex flex-wrap items-center gap-3 pt-4">
    <span class="font-sans text-sm font-bold text-stone-900">{labels[lang].heading}</span>
    <span class="rounded px-2 py-0.5 font-sans text-xs font-semibold {badge[status]}">
      {labels[lang][status]}
    </span>
  </div>
  <slot />
</aside>
