import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://ewayautorepairs.com',
  trailingSlash: 'never',
  integrations: [sitemap()],
  // Every page stays prerendered. Only src/pages/api/quote.ts opts out, so the
  // site is still a static site with one serverless function attached to it.
  output: 'static',
  adapter: vercel(),
  build: {
    inlineStylesheets: 'auto',
  },
});
