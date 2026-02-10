<script lang="ts">
  export let title: string;
  export let subtitle: string = "";
  export let count: number = 0;
  export let isOpen: boolean = false; // Default state

  let open = isOpen;
</script>

<section class="mb-8 border-b border-stone-200 pb-8 last:border-0">
  <button 
    on:click={() => open = !open}
    class="flex w-full items-baseline justify-between group text-left focus:outline-none"
  >
    <div class="flex items-baseline gap-4">
      <h2 class="font-sans text-2xl font-bold text-manifesto-black group-hover:text-stone-600 transition-colors">
        {title}
      </h2>
      {#if subtitle}
        <span class="hidden md:inline font-mono text-xs uppercase tracking-widest text-stone-400">
          {subtitle}
        </span>
      {/if}
      <span class="rounded-full bg-stone-100 px-2 py-1 text-xs font-bold text-stone-500">
        {count}
      </span>
    </div>

    <span class="text-stone-400 transition-transform duration-300 {open ? 'rotate-180' : ''}">
      ▼
    </span>
  </button>

  {#if open}
    <div class="mt-8 grid gap-8 md:grid-cols-2 animate-in fade-in slide-in-from-top-2 duration-300">
      <slot />
    </div>
  {/if}
</section>
