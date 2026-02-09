<script lang="ts">
  import { t, locale } from '$lib/stores/i18n';
  import { fade } from 'svelte/transition';

  // Formspree requires a name attribute for the select to show up in your email
  const formAction = "https://formspree.io/f/xjgekeja";
  
  // Dynamic topics based on locale
  $: topics = [
    { value: 'general', label: $t.contact.topics.general },
    { value: 'tools_feedback', label: $t.contact.topics.tools },
    { value: 'site_improvement', label: $t.contact.topics.site },
    { value: 'collaboration', label: $t.contact.topics.collab },
    { value: 'press', label: $t.contact.topics.press }
  ];
</script>

<div class="mx-auto max-w-5xl px-6 py-12 md:py-20" in:fade={{ duration: 200 }}>
  
  <div class="grid grid-cols-1 gap-16 lg:grid-cols-2">
    
    <div>
      <header class="mb-10">
        <h1 class="mb-6 font-sans text-4xl font-bold text-manifesto-black">
          {$t.contact.title}
        </h1>
        <p class="font-serif text-xl leading-relaxed text-stone-600">
          {$t.contact.subtitle}
        </p>
      </header>

      <div class="rounded-xl border border-stone-200 bg-white p-8 shadow-sm">
        <h3 class="mb-2 font-sans text-sm font-bold uppercase tracking-widest text-stone-400">
          {$t.contact.email_label}
        </h3>
        <a 
          href="mailto:bjorn.kenneth.holmstrom@gmail.com" 
          class="font-sans text-xl font-medium text-manifesto-black hover:text-blue-600 transition-colors break-words"
        >
          bjorn.kenneth.holmstrom@gmail.com
        </a>
        
        <div class="mt-6 flex gap-4 text-3xl opacity-50">
          <span>✉️</span>
          <span>🇸🇪</span>
        </div>
      </div>
    </div>

    <div class="rounded-2xl bg-stone-50 p-8 border border-stone-100">
      <form action={formAction} method="POST" class="space-y-6">
        
        <div>
          <label for="name" class="mb-2 block font-sans text-sm font-bold text-stone-700">
            {$t.contact.form.name}
          </label>
          <input 
            type="text" 
            name="name" 
            id="name"
            required
            class="w-full rounded-lg border border-stone-300 p-3 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
          />
        </div>

        <div>
          <label for="email" class="mb-2 block font-sans text-sm font-bold text-stone-700">
            {$t.contact.form.email}
          </label>
          <input 
            type="email" 
            name="email" 
            id="email"
            required
            class="w-full rounded-lg border border-stone-300 p-3 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
          />
        </div>

        <div>
          <label for="topic" class="mb-2 block font-sans text-sm font-bold text-stone-700">
            {$t.contact.form.topic}
          </label>
          <div class="relative">
            <select 
              name="topic" 
              id="topic"
              class="w-full appearance-none rounded-lg border border-stone-300 bg-white p-3 pr-8 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
            >
              {#each topics as topic}
                <option value={topic.value}>{topic.label}</option>
              {/each}
            </select>
            <div class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-stone-500">
              ▼
            </div>
          </div>
        </div>

        <div>
          <label for="message" class="mb-2 block font-sans text-sm font-bold text-stone-700">
            {$t.contact.form.message}
          </label>
          <textarea 
            name="message" 
            id="message"
            rows="5"
            required
            class="w-full rounded-lg border border-stone-300 p-3 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all resize-none"
          ></textarea>
        </div>

        <button 
          type="submit" 
          class="w-full rounded-lg bg-manifesto-black px-6 py-4 font-sans text-sm font-bold uppercase tracking-widest text-white hover:bg-stone-800 transition-transform active:scale-[0.98]"
        >
          {$t.contact.form.submit}
        </button>

      </form>
    </div>

  </div>
</div>
