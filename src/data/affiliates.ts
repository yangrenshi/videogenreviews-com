export interface AffiliateEntry {
  slug: string;
  name: string;
  targetUrl: string;
}

export const AFFILIATE_DIRECTORY: Record<string, AffiliateEntry> = {
  pixverse: {
    slug: 'pixverse',
    name: 'PixVerse V3.5',
    targetUrl: 'https://pixverse.ai/?utm_source=videogenreviews&utm_medium=affiliate&ref=vgr',
  },
  openart: {
    slug: 'openart',
    name: 'OpenArt Video',
    targetUrl: 'https://openart.ai/?utm_source=videogenreviews&utm_medium=affiliate&ref=vgr',
  },
  viggle: {
    slug: 'viggle',
    name: 'Viggle AI',
    targetUrl: 'https://viggle.ai/?utm_source=videogenreviews&utm_medium=affiliate&ref=vgr',
  },
  kling: {
    slug: 'kling',
    name: 'Kling AI 4.0',
    targetUrl: 'https://klingai.com/',
  },
  runway: {
    slug: 'runway',
    name: 'Runway Gen-4.5',
    targetUrl: 'https://runwayml.com/',
  },
  hailuo: {
    slug: 'hailuo',
    name: 'MiniMax Hailuo H3',
    targetUrl: 'https://hailuoai.video/',
  },
  luma: {
    slug: 'luma',
    name: 'Luma Dream Machine Ray 3.2',
    targetUrl: 'https://lumalabs.ai/dream-machine',
  },
  pika: {
    slug: 'pika',
    name: 'Pika 2.2',
    targetUrl: 'https://pika.art/',
  },
  kaiber: {
    slug: 'kaiber',
    name: 'Kaiber AI',
    targetUrl: 'https://kaiber.ai/',
  },
  seedance: {
    slug: 'seedance',
    name: 'Seedance 2.5',
    targetUrl: 'https://everygen.ai/',
  },
  everygen: {
    slug: 'everygen',
    name: 'Everygen AI',
    targetUrl: 'https://everygen.ai/',
  },
};
