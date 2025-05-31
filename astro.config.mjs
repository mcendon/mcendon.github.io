// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import angular from '@analogjs/astro-angular';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://mcendon.github.io',
  integrations: [mdx(), sitemap(), angular({
    vite: {
      transformFilter: (_code, id) => {
          return id.includes('src/components/angular'); // <- only transform Angular TypeScript files
      },
    }
  })],
  vite: {
    plugins: [tailwindcss()],
  },
});