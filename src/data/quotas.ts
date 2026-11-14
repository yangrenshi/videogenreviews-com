/**
 * 全站工具免费额度、起始定价与核心常量的统一导出层 (Single Source of Truth)
 * 底层数据由 ./tools.ts 统一维护，确保所有页面、表格、卡片、FAQ 与 Schema 同步更新。
 */

import { TOOLS_DATA, EVERYGEN_ENGINES, EVERYGEN_MCP_CLIENTS } from './tools';

export { TOOLS_DATA, EVERYGEN_ENGINES, EVERYGEN_MCP_CLIENTS };

const _now = new Date();
export const BUILD_DATE_ISO = _now.toISOString().split('T')[0];
export const BUILD_DATE_DISPLAY = _now.toLocaleDateString('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
});

export const TOOL_QUOTAS = TOOLS_DATA;

export const SHARED_FAQ_ANSWERS = {
  recurringFreeCredits:
    'Kling AI 4.0 (66 daily recurring credits, ~2 clips/day) and PixVerse V6 (30 daily credits plus 60 signup bonus at 540p) replenish free credits daily without requiring a credit card upfront, while MiniMax Hailuo H3 offers one-time free trial credits upon signup.',
  everygen10CreditsLimit:
    'Yes, with strict functional limits. New accounts receive 10 promotional signup credits, but based on Everygen\'s credit consumption model, 10 credits is below the ~11 credits an entry-level fast 5s render (Seedance 2 Fast) consumes, so an active subscription or credit pack is required to generate outputs.',
} as const;
