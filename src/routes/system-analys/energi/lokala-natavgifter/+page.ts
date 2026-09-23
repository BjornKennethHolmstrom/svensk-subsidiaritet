import { redirect } from '@sveltejs/kit';

// Folded into the energi main page (pass 2, September 2026)
export const load = () => {
  redirect(308, '/system-analys/energi/');
};
