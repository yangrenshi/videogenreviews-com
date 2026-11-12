import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://videogenreviews.com',
  trailingSlash: 'always',
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
    sitemap({
      filter: (page) => !page.includes('/404'),
      lastmod: new Date(),
    }),
  ],
  build: {
    format: 'directory',
  },
});
