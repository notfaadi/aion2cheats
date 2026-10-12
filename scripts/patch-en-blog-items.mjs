import fs from 'node:fs';
import path from 'node:path';

const file = path.join(process.cwd(), 'src/i18n/en.ts');
let s = fs.readFileSync(file, 'utf8');

const items = [
  ['Guides', 'Aion 2 game overview: flight, factions and endgame', 'aion-2-game-overview', 'What makes Aion 2 unique—open world scale, daeva classes, PvP battlegrounds and kinah economy.', 'Oct 1, 2026', '8 min read'],
  ['Features', 'Aion 2 cheats features: ESP, radar, combat assist and more', 'aion-2-cheats-features-guide', 'Complete map of Lite, Pro and Elite modules for NCsoft’s Aion 2 on PC.', 'Sep 28, 2026', '12 min read'],
  ['Guides', 'Aion 2 Lite vs Pro: which tier fits you', 'aion-2-lite-vs-pro', 'ESP-only awareness vs full combat assist for battlegrounds and rifts.', 'Sep 26, 2026', '5 min read'],
  ['Guides', 'Elite tier guide: kinah bots and full utility', 'aion-2-elite-tier-guide', 'When to upgrade to Elite for farming automation, execute assist and cosmetic preview.', 'Sep 24, 2026', '7 min read'],
  ['Setup', 'ESP setup for Aion 2 open world and rifts', 'aion-2-esp-setup-guide', 'Readable colors, distance caps and flight-friendly layouts for daeva ESP.', 'Sep 22, 2026', '6 min read'],
  ['Setup', 'Radar hack setup for large zones', 'aion-2-radar-hack-guide', 'Minimap dots, gather hints and hostile tracking without UI clutter.', 'Sep 20, 2026', '6 min read'],
  ['Setup', 'Combat assist for Aion 2 PvP battlegrounds', 'aion-2-combat-assist-pvp', 'Rotation delays, focus fire and stigma timing for battleground seasons.', 'Sep 18, 2026', '7 min read'],
  ['Guides', 'Kinah farming bot routes and safety', 'aion-2-farming-bot-guide', 'Mob loops, gather paths and dungeon repeats with humanized movement.', 'Sep 16, 2026', '8 min read'],
  ['Guides', 'Flight and camera tools in Aion 2', 'aion-2-flight-speed-tools', 'Draw distance, zoom caps and aerial fight awareness.', 'Sep 14, 2026', '5 min read'],
  ['Guides', 'Cosmetic unlock and wardrobe preview', 'aion-2-cosmetic-unlock-guide', 'Local wings, dyes and armor preview without touching live inventory.', 'Sep 12, 2026', '6 min read'],
  ['Safety', 'Patch-day checklist for Aion 2 cheats', 'aion-2-patch-day-checklist', 'What to verify on aion2cheat.org after every NCsoft maintenance window.', 'Sep 10, 2026', '5 min read'],
  ['Safety', 'HWID spoofer after hardware flags', 'aion-2-hwid-spoofer-guide', 'When disk serial changes help vs account-only restrictions.', 'Sep 8, 2026', '6 min read'],
  ['Setup', 'How to buy Aion 2 cheats in 2026', 'how-to-buy-aion-2-cheats-2026', 'Checkout, portal access and Discord verification walkthrough.', 'Sep 6, 2026', '4 min read'],
  ['Setup', 'External loader architecture', 'aion-2-external-loader-guide', 'Why overlays stay outside the Aion 2 process and how updates ship.', 'Sep 4, 2026', '6 min read'],
  ['Setup', 'Stream-proof overlays for creators', 'aion-2-stream-proof-setup', 'OBS and Game Bar tests before you go live with ESP enabled.', 'Sep 2, 2026', '5 min read'],
];

const block = items
  .map(
    ([tag, title, slug, desc, date, readTime]) => `      {
        tag: '${tag}',
        title: '${title.replace(/'/g, "\\'")}',
        slug: '${slug}',
        image: '/images/blog/${slug}.png',
        desc: '${desc.replace(/'/g, "\\'")}',
        date: '${date}',
        readTime: '${readTime}',
      }`,
  )
  .join(',\n');

const start = s.indexOf('    items: [', s.indexOf('  blog: {'));
const end = s.indexOf('    ],\n  },', start);
if (start === -1 || end === -1) throw new Error('blog items block not found');

s = s.slice(0, start) + `    items: [\n${block},\n` + s.slice(end);
fs.writeFileSync(file, s);
console.log('Patched en.ts blog items.');
