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
      filter: (page) => !page.includes('/404') && !page.includes('/go/'),
      serialize(item) {
        const url = item.url;
        if (
          url.endsWith('/about/') ||
          url.endsWith('/contact/') ||
          url.endsWith('/privacy-policy/') ||
          url.endsWith('/affiliate-disclosure/')
        ) {
          item.lastmod = '2026-11-12';
        } else if (
          url.endsWith('/methodology/') ||
          url.endsWith('/author/david-chen/') ||
          url.endsWith('/viewmax-ai/')
        ) {
          item.lastmod = '2026-11-13';
        } else if (
          url.endsWith('/everygen-ai-pricing/') ||
          url.endsWith('/everygen-ai-alternatives/') ||
          url.endsWith('/best-ai-video-generator/') ||
          url.endsWith('/ai-video-generator-free/')
        ) {
          item.lastmod = '2026-11-15';
        } else {
          item.lastmod = '2026-11-14';
        }
        return item;
      },
    }),
  ],
  build: {
    format: 'directory',
  },
});
