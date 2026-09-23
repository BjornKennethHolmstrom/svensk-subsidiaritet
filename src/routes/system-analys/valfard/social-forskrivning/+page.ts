import { redirect } from '@sveltejs/kit';

// Merged into the hälsovård version (pass 2, September 2026)
export const load = () => {
  redirect(308, '/system-analys/halsovard/social-forskrivning/');
};
