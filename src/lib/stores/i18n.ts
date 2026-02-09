import { writable, derived } from 'svelte/store';
import { translations } from '$lib/translations';

export const locale = writable('sv'); // Default to Swedish

// This is the magic derived store that lets you do $t.header.title
export const t = derived(locale, ($locale) => {
  return translations[$locale as keyof typeof translations];
});

// Helper to toggle language
export const toggleLang = () => {
  locale.update(l => l === 'sv' ? 'en' : 'sv');
};
