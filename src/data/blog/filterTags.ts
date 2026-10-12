import type { IconName } from '../../components/icons/types';

/** Only these five topic filters appear on the blog index (+ All articles). */
export const BLOG_FILTER_TAG_IDS = [
  'Features',
  'Guides',
  'Setup',
  'Troubleshooting',
  'Updates',
] as const;

export type BlogFilterTagId = (typeof BLOG_FILTER_TAG_IDS)[number];

export interface BlogFilterTagDef {
  id: BlogFilterTagId;
  /** Short label on the pill button */
  label: string;
  /** Extra keywords for SEO (title + screen readers) */
  title: string;
  icon: IconName;
}

export const BLOG_FILTER_TAGS: BlogFilterTagDef[] = [
  {
    id: 'Features',
    label: 'Features',
    title:
      'Aion 2 cheat features: bot, auto farm, AFK bot, ESP, radar, speed hack, auto loot, auto gather, wallhack, kinah farm',
    icon: 'layers',
  },
  {
    id: 'Guides',
    label: 'Guides',
    title:
      'Aion 2 cheats and hacks guides: buy cheats, tier comparison, PvP, farming routes, undetected bot, cheat download 2026',
    icon: 'navBlog',
  },
  {
    id: 'Setup',
    label: 'Setup',
    title:
      'Aion 2 cheat setup: loader install, external cheat, stream-proof overlay, ESP config, Steam and PURPLE PC',
    icon: 'settings',
  },
  {
    id: 'Troubleshooting',
    label: 'Troubleshooting',
    title:
      'Aion 2 cheat fixes: not working, HWID ban, anti-cheat safe, bannable bot, verify error, cheat support',
    icon: 'alert',
  },
  {
    id: 'Updates',
    label: 'Updates',
    title:
      'Aion 2 cheat updates: patch notes 2026, NCsoft patch day, maintenance, new hack build, auto-updater',
    icon: 'refresh',
  },
];

const LEGACY_TAG_TO_FILTER: Record<string, BlogFilterTagId> = {
  Features: 'Features',
  Guides: 'Guides',
  Setup: 'Setup',
  Troubleshooting: 'Troubleshooting',
  Updates: 'Updates',
  Comparison: 'Guides',
  PvP: 'Features',
  Farming: 'Features',
  Tools: 'Setup',
  Cosmetics: 'Features',
  Maintenance: 'Updates',
  Security: 'Troubleshooting',
  Buying: 'Guides',
  Streaming: 'Setup',
  Overview: 'Guides',
};

export function normalizeBlogFilterTag(rawTag: string): BlogFilterTagId {
  return LEGACY_TAG_TO_FILTER[rawTag] ?? 'Guides';
}
