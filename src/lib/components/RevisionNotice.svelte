<script lang="ts">
  export let heading: string;
</script>

<aside
  role="note"
  class="not-prose mb-10 rounded-r-md border-l-4 border-amber-400 bg-amber-50/70 px-5 py-4 font-sans text-stone-700"
>
  <p class="mb-1 text-sm font-bold text-stone-900">{heading}</p>
  <div class="space-y-2 text-sm leading-relaxed [&_a]:font-semibold [&_a]:text-stone-900 [&_a]:underline [&_a]:decoration-amber-400 [&_a]:underline-offset-2 hover:[&_a]:decoration-stone-900">
    <slot />
  </div>
</aside>
