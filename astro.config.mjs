// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://eilwm.github.io',
  base: '/my-portfolio',
  integrations: [mdx(), sitemap()],
});
