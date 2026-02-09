import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const config = {
  extensions: ['.svelte', '.md'],

  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.md'],
      layout: {
        // Default layout for system analyses
        _: join(__dirname, './src/lib/layouts/ArticleLayout.svelte'),
        
        // Studiecirkel layout (matches files in studiecirkel directory)
        studiecirkel: join(__dirname, './src/lib/layouts/StudiecirkelLayout.svelte')
      }
    })
  ],

  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html',
      precompress: false,
      strict: true
    })
  }
};

export default config;
