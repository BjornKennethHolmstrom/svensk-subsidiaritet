import { redirect } from '@sveltejs/kit';

// Merged into läranderingar (pass 2, September 2026)
export const load = () => {
  redirect(308, '/system-analys/utbildning/laranderingar/');
};
