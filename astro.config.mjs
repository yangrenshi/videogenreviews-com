import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { PAGE_DATES } from './src/data/quotas.ts';

// Map URL paths to their respective Single Source of Truth date in PAGE_DATES
const SITEMAP_DATE_MAPPING = {
  '/': PAGE_DATES.home.iso,
  '/everygen-ai-review/': PAGE_DATES.review.iso,
  '/everygen-ai-pricing/': PAGE_DATES.pricing.iso,
  '/everygen-ai-discount/': PAGE_DATES.discount.iso,
  '/is-everygen-ai-free/': PAGE_DATES.isFree.iso,
  '/everygen-ai-alternatives/': PAGE_DATES.alternatives.iso,
  '/everygen-ai-vs-kling/': PAGE_DATES.vsKling.iso,
  '/everygen-ai-vs-runway/': PAGE_DATES.vsRunway.iso,
  '/best-ai-video-generator/': PAGE_DATES.best.iso,
  '/ai-video-generator-free/': PAGE_DATES.free.iso,
  '/viewmax-ai/': PAGE_DATES.viewmax.iso,
  '/methodology/': PAGE_DATES.methodology.iso,
  '/editorial-team/': PAGE_DATES.editorialTeam.iso,
  '/about/': PAGE_DATES.about.iso,
  '/contact/': PAGE_DATES.contact.iso,
  '/privacy-policy/': PAGE_DATES.privacyPolicy.iso,
  '/affiliate-disclosure/': PAGE_DATES.affiliateDisclosure.iso,
};

// https://astro.build/config
export default defineConfig({
  site: 'https://videogenreviews.com',
  trailingSlash: 'always',
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
    sitemap({
      filter: (page) =>
        !page.includes('/404') &&
        !page.includes('/go/') &&
        !page.includes('/author/'),
      serialize(item) {
        const urlObj = new URL(item.url);
        const path = urlObj.pathname;
        if (SITEMAP_DATE_MAPPING[path]) {
          item.lastmod = SITEMAP_DATE_MAPPING[path];
        }
        return item;
      },
    }),
  ],
  build: {
    format: 'directory',
  },
});
