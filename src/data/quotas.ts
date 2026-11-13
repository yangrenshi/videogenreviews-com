/**
 * 全站工具免费额度与起始定价单一事实来源 (Single Source of Truth)
 * 供 best-ai-video-generator、ai-video-generator-free、everygen-ai-alternatives、is-everygen-ai-free 共同引用，
 * 杜绝跨页面手动维护导致的口径不一致问题。
 */

const _now = new Date();
export const BUILD_DATE_ISO = _now.toISOString().split('T')[0];
export const BUILD_DATE_DISPLAY = _now.toLocaleDateString('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
});

export const TOOL_QUOTAS = {
  everygen: {
    freeTierSummary: 'Promotional trial (~10 credits; below render threshold)',
    freeTierCard: '10 promotional signup credits (requires paid plan for full renders)',
    startingPrice: 'From $9 / mo (annual; ~$24/mo monthly)',
  },
  kling: {
    freeTierSummary: '66 daily recurring credits (~2 clips/day)',
    freeTierCard: '66 daily replenishable credits (~2 clips daily; 30-35 credits each)',
    startingPrice: '$10 / mo',
    pricingCard: 'Free plan available; Standard tier from $10.00 / mo (watermark-free & priority queue)',
    freePagePrice: 'Free (No card required)',
  },
  seedance: {
    freeTierSummary: 'Promotional trial (~10 credits; below render threshold)',
    freeTierCard: 'Promotional trial (~10 credits on signup; below render threshold)',
    startingPrice: 'Subscription via Everygen ($9/mo+)',
  },
  minimax: {
    freeTierSummary: 'One-time free trial credits (No card required)',
    freeTierCard: 'One-time free trial credits on signup (Hailuo models; zero card upfront)',
    startingPrice: '$14.99 / mo ($8.40/mo annual)',
    pricingCard: 'Free plan available; Standard tier from $14.99 / mo ($8.40/mo annual)',
    freePagePrice: 'Free (No card required)',
  },
  pixverse: {
    freeTierSummary: '30 daily credits (+60 signup bonus; 540p)',
    freeTierCard: '30 daily recurring credits (+60 one-time signup bonus; 540p; watermarked)',
    startingPrice: '$10 / mo ($1 3-day trial)',
    freePagePrice: 'Free (No card required)',
  },
  runway: {
    freeTierSummary: '125 one-time credits (~10s)',
    freeTierCard: '125 one-time trial credits (~10s; non-recurring)',
    startingPrice: '$15 / mo ($12/mo annual)',
  },
  openart: {
    freeTierSummary: 'No free plan (Starts at $14/mo)',
    freeTierCard: 'No free plan (Paid plans from $14/mo)',
    startingPrice: '$14 / mo ($13/mo annual)',
  },
  luma: {
    freeTierSummary: 'No free tier (paid from $30/mo)',
    freeTierCard: 'No free tier (paid from $30/mo)',
    startingPrice: 'From $30 / mo ($24/mo annual)',
  },
  kaiber: {
    freeTierSummary: 'Free trial allowance',
    freeTierCard: 'Initial free trial credits upon onboarding',
    startingPrice: '$10 / mo',
  },
  pika: {
    freeTierSummary: 'Starter trial credits (No watermark; credit packs)',
    freeTierCard: 'Starter trial credits (credit pack model; no daily refill)',
    startingPrice: '$10 / mo ($8/mo annual; credit packs)',
    freePagePrice: 'Free (Trial allowance) · paid from $10/mo ($8/mo annual)',
  },
  viggle: {
    freeTierSummary: '5 daily credits (Watermarked)',
    freeTierCard: '5 daily free credits (Watermarked)',
    startingPrice: '$7.99 / mo ($6.39/mo annual)',
  },
} as const;

export const EVERYGEN_ENGINES = {
  list: 'Seedance 2.5, Kling 4.0, MiniMax H3 Max, Grok Imagine, and Gemini Omni 1.1 Flash',
  routingShort: 'Multi-engine routing (5 engines incl. Kling 4.0, Seedance 2.5, Gemini Omni 1.1 Flash) + unified MCP/credits',
} as const;

export const SHARED_FAQ_ANSWERS = {
  recurringFreeCredits:
    'Kling AI 4.0 (66 daily recurring credits, ~2 clips/day) and PixVerse V6 (30 daily credits plus 60 signup bonus at 540p) replenish free credits daily without requiring a credit card upfront, while MiniMax Hailuo H3 offers one-time free trial credits upon signup.',
  everygen10CreditsLimit:
    'Yes, with strict functional limits. New accounts receive 10 promotional signup credits, but based on Everygen\'s credit consumption model, 10 credits is below the ~11 credits an entry-level fast 5s render (Seedance 2 Fast) consumes, so an active subscription or credit pack is required to generate outputs.',
} as const;
