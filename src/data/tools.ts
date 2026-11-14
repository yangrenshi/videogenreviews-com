/**
 * 全站工具评分、免费额度、起始定价、时长与 Everygen 核心规格的单一事实来源 (Single Source of Truth)
 * 供全站所有页面、ComparisonTable 与 ToolCard 共同引用，杜绝跨页面手工维护导致的口径不一致问题。
 */

export interface ToolMetric {
  label: string;
  score: number;
}

export interface ToolDurationSpec {
  perGeneration?: string;
  platformComposed?: string;
  native?: string;
  display: string;
}

export interface ToolSpec {
  id: string;
  name: string;
  totalScore: string;
  metrics?: ToolMetric[];
  freeTierSummary: string;
  freeTierCard: string;
  freePagePrice?: string;
  startingPrice: string;
  pricingCard?: string;
  pricingSourceUrl?: string;
  pricingScreenshotUrl?: string;
  duration: ToolDurationSpec;
  maxDuration: string;
}

export const EVERYGEN_ENGINES = {
  list: 'Seedance 2.5, Kling 4.0, MiniMax H3 Max, Grok Imagine, and Gemini Omni 1.1 Flash',
  routingShort: 'Multi-engine routing (5 engines incl. Kling 4.0, Seedance 2.5, Gemini Omni 1.1 Flash) + unified MCP/credits',
} as const;

export const EVERYGEN_MCP_CLIENTS = {
  list: 'Claude Desktop, ChatGPT, Cursor, and Windsurf',
  orList: 'Claude Desktop, Cursor, Windsurf, or ChatGPT',
  shortTag: 'Claude Desktop, ChatGPT, Cursor, Windsurf',
} as const;

export const TOOLS_DATA = {
  everygen: {
    id: 'everygen',
    name: 'Everygen AI',
    totalScore: '8.4',
    freeTierSummary: 'Promotional trial (~10 credits; below render threshold)',
    freeTierCard: '10 promotional signup credits (requires paid plan for full renders)',
    startingPrice: 'From $9 / mo (annual; ~$24/mo monthly)',
    duration: {
      native: '30s (via Seedance 2.5)',
      platformComposed: 'up to 30s',
      display: 'Up to 30 seconds (native on Seedance 2.5; composed on Kling 4.0)',
    },
    maxDuration: 'Up to 30 seconds (native on Seedance 2.5; composed on Kling 4.0)',
  },
  kling: {
    id: 'kling',
    name: 'Kling AI 4.0',
    totalScore: '8.9',
    metrics: [
      { label: 'Prompt Adherence', score: 9.2 },
      { label: 'Temporal Consistency', score: 8.7 },
      { label: 'Visual Fidelity', score: 8.9 },
      { label: 'Motion Quality', score: 9.0 },
      { label: 'Value / Pricing', score: 8.3 },
    ],
    freeTierSummary: '66 daily recurring credits (~2 clips/day)',
    freeTierCard: '66 daily replenishable credits (~2 clips daily; 30-35 credits each)',
    startingPrice: '$10 / mo',
    pricingCard: 'Free plan available; Standard tier from $10.00 / mo (watermark-free & priority queue)',
    freePagePrice: 'Free (No card required)',
    pricingSourceUrl: 'https://kling.ai/app/membership/membership-plan?r=26',
    pricingScreenshotUrl: '/images/pricing/kling-pricing.png',
    duration: {
      perGeneration: '5–10s',
      platformComposed: 'up to 30s',
      display: '5–10s per generation (platform composes up to 30s)',
    },
    maxDuration: '5–10s per generation (platform composes up to 30s)',
  },
  seedance: {
    id: 'seedance',
    name: 'Seedance 2.5',
    totalScore: '8.5',
    metrics: [
      { label: 'Prompt Adherence', score: 8.5 },
      { label: 'Temporal Consistency', score: 8.8 },
      { label: 'Visual Fidelity', score: 8.7 },
      { label: 'Motion Quality', score: 8.4 },
      { label: 'Value / Pricing', score: 8.1 },
    ],
    freeTierSummary: 'No standalone free tier (Everygen account includes ~10 promotional credits)',
    freeTierCard: 'No standalone free tier (Everygen account includes ~10 promotional credits)',
    startingPrice: 'Subscription via Everygen ($9/mo+)',
    duration: {
      native: '30s',
      display: '30 seconds continuous (native 1080p)',
    },
    maxDuration: '30 seconds continuous (native 1080p)',
  },
  minimax: {
    id: 'minimax',
    name: 'MiniMax H3 Max',
    totalScore: '8.3',
    metrics: [
      { label: 'Prompt Adherence', score: 8.0 },
      { label: 'Temporal Consistency', score: 8.4 },
      { label: 'Visual Fidelity', score: 8.7 },
      { label: 'Motion Quality', score: 8.1 },
      { label: 'Value / Pricing', score: 8.5 },
    ],
    freeTierSummary: 'One-time free trial credits (No card required)',
    freeTierCard: 'One-time free trial credits on signup (Hailuo models; zero card upfront)',
    startingPrice: '$14.99 / mo (est. $8.40/mo annual)',
    pricingCard: 'No free plan (one-time signup trial only); Standard tier from $14.99 / mo (est. $8.40/mo annual)',
    freePagePrice: 'Free (No card required)',
    pricingSourceUrl: 'https://hailuoai.video/zh-Intl/subscribe',
    pricingScreenshotUrl: '/images/pricing/hailuo-pricing.png',
    duration: {
      perGeneration: '6 to 10 seconds',
      display: '6 to 10 seconds',
    },
    maxDuration: '6 to 10 seconds',
  },
  pixverse: {
    id: 'pixverse',
    name: 'PixVerse V6',
    totalScore: '8.2',
    metrics: [
      { label: 'Prompt Adherence', score: 8.6 },
      { label: 'Temporal Consistency', score: 8.1 },
      { label: 'Visual Fidelity', score: 8.5 },
      { label: 'Motion Quality', score: 8.2 },
      { label: 'Value / Pricing', score: 7.3 },
    ],
    freeTierSummary: '30 daily credits (+60 signup bonus; 540p)',
    freeTierCard: '30 daily recurring credits (+60 one-time signup bonus; 540p; watermarked)',
    startingPrice: '$10 / mo',
    pricingCard: 'Free plan available (Starter $10/mo)',
    freePagePrice: 'Free (No card required)',
    pricingSourceUrl: 'https://www.pixara.ai/pricing',
    pricingScreenshotUrl: '/images/pricing/pixverse-pricing.png',
    duration: {
      native: '15s',
      display: '15 seconds continuous (1080p)',
    },
    maxDuration: '15 seconds continuous (1080p)',
  },
  runway: {
    id: 'runway',
    name: 'Runway Gen-4.5',
    totalScore: '8.0',
    metrics: [
      { label: 'Prompt Adherence', score: 9.1 },
      { label: 'Temporal Consistency', score: 8.0 },
      { label: 'Visual Fidelity', score: 8.6 },
      { label: 'Motion Quality', score: 8.4 },
      { label: 'Value / Pricing', score: 5.2 },
    ],
    freeTierSummary: '125 one-time credits (~10s)',
    freeTierCard: '125 one-time trial credits (~10s; non-recurring)',
    startingPrice: '$15 / mo ($12/mo annual)',
    duration: {
      perGeneration: '5–10s',
      display: '10 seconds',
    },
    maxDuration: '10 seconds',
  },
  openart: {
    id: 'openart',
    name: 'OpenArt Video',
    totalScore: '7.9',
    metrics: [
      { label: 'Prompt Adherence', score: 8.6 },
      { label: 'Temporal Consistency', score: 7.8 },
      { label: 'Visual Fidelity', score: 8.2 },
      { label: 'Motion Quality', score: 7.7 },
      { label: 'Value / Pricing', score: 6.8 },
    ],
    freeTierSummary: 'No free plan (Starts at $14/mo)',
    freeTierCard: 'No free plan (Paid plans from $14/mo)',
    startingPrice: '$14 / mo ($13/mo annual)',
    duration: {
      display: 'Multi-model routing (varies by backend)',
    },
    maxDuration: 'Multi-model routing (varies by backend)',
  },
  luma: {
    id: 'luma',
    name: 'Luma Ray 3.2',
    totalScore: '7.4',
    metrics: [
      { label: 'Prompt Adherence', score: 7.9 },
      { label: 'Temporal Consistency', score: 7.2 },
      { label: 'Visual Fidelity', score: 8.1 },
      { label: 'Motion Quality', score: 7.1 },
      { label: 'Value / Pricing', score: 6.1 },
    ],
    freeTierSummary: 'No free tier (paid from $30/mo)',
    freeTierCard: 'No free tier (paid from $30/mo)',
    startingPrice: 'From $30 / mo (est. $24/mo annual)',
    duration: {
      perGeneration: '5–10s',
      display: '5 to 10 seconds',
    },
    maxDuration: '5 to 10 seconds',
  },
  kaiber: {
    id: 'kaiber',
    name: 'Kaiber AI',
    totalScore: '7.3',
    metrics: [
      { label: 'Prompt Adherence', score: 7.8 },
      { label: 'Temporal Consistency', score: 7.1 },
      { label: 'Visual Fidelity', score: 7.6 },
      { label: 'Motion Quality', score: 7.0 },
      { label: 'Value / Pricing', score: 6.7 },
    ],
    freeTierSummary: 'Free trial allowance',
    freeTierCard: 'Initial free trial credits upon onboarding',
    startingPrice: '$10 / mo',
    pricingCard: '$10.00 / mo (Starter plan; 500 credits/mo)',
    pricingSourceUrl: 'https://kaiber.ai/pricing',
    pricingScreenshotUrl: '/images/pricing/kaiber-pricing.png',
    duration: {
      display: 'Audio-synced variable length',
    },
    maxDuration: 'Audio-synced variable length',
  },
  pika: {
    id: 'pika',
    name: 'Pika 2.2',
    totalScore: '6.7',
    metrics: [
      { label: 'Prompt Adherence', score: 7.2 },
      { label: 'Temporal Consistency', score: 6.3 },
      { label: 'Visual Fidelity', score: 6.8 },
      { label: 'Motion Quality', score: 7.1 },
      { label: 'Value / Pricing', score: 6.2 },
    ],
    freeTierSummary: 'Starter trial credits (No watermark; credit packs)',
    freeTierCard: 'Starter trial credits (credit pack model; no daily refill)',
    startingPrice: '$10 / mo ($8/mo annual; credit packs)',
    freePagePrice: 'Free (Trial allowance) · paid from $10/mo ($8/mo annual)',
    duration: {
      perGeneration: '5s',
      display: '5 seconds',
    },
    maxDuration: '5 seconds',
  },
  viggle: {
    id: 'viggle',
    name: 'Viggle AI',
    totalScore: '6.4',
    metrics: [
      { label: 'Prompt Adherence', score: 7.0 },
      { label: 'Temporal Consistency', score: 6.4 },
      { label: 'Visual Fidelity', score: 6.0 },
      { label: 'Motion Quality', score: 7.2 },
      { label: 'Value / Pricing', score: 5.2 },
    ],
    freeTierSummary: '5 daily credits (Watermarked)',
    freeTierCard: '5 daily free credits (Watermarked)',
    startingPrice: '$7.99 / mo (est. $6.39/mo annual)',
    duration: {
      display: 'Character motion clip',
    },
    maxDuration: 'Character motion clip',
  },
} as const;
