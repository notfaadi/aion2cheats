import fs from 'node:fs';
import path from 'node:path';

const file = path.join(process.cwd(), 'src/i18n/en.ts');
let s = fs.readFileSync(file, 'utf8');

const start = s.indexOf('  features: {');
const end = s.indexOf('  whyUs: {');
if (start === -1 || end === -1) throw new Error('features block not found');

const replacement = `  features: {
    eyebrow: 'Features',
    title: 'Everything you need in one package',
    subtitle: 'ESP, radar, combat assist, flight tools and kinah bots for Aion 2—maintained every NCsoft patch.',
    items: [
      {
        title: 'Combat Assist',
        subtitle: 'Rotations. Burst. Control.',
        desc: 'Skill rotation chains for PvP battlegrounds and dimensional rifts—tuned for Gladiator, Sorcerer, Assassin and support classes.',
        bullets: [
          'Combo chains with humanized delay sliders',
          'Cooldown and stagger tracking on hostile daevas',
          'Focus-fire target selector for battleground objectives',
          'Stigma and skill prediction for aerial fights',
          'Cloud presets per class and activity (PvP / PvE)',
        ],
        tags: ['aion 2 combat assist', 'rotation bot', 'pvp scripts'],
        bento: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1',
      },
      {
        title: 'Player ESP',
        subtitle: 'See Hostiles Before They Dive.',
        desc: 'Faction-colored overlays for open-world PvP, rifts, and siege zones without cluttering the Unreal 5 UI.',
        bullets: [
          'Daeva boxes, HP bars and class readouts',
          'Distance markers for flight engagements',
          'Missing-hostile timers after line-of-sight breaks',
        ],
        tags: ['aion 2 esp', 'player esp', 'pvp awareness'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2',
      },
      {
        title: 'Radar & Minimap',
        subtitle: 'Map Control at Scale.',
        desc: 'Radar dots and minimap overlays for Aion 2’s large zones—resource nodes, mobs, and hostile daevas.',
        bullets: ['Hostile daeva blips on custom radar', 'Gather node and mob density hints', 'Last-seen positions on zone transitions'],
        tags: ['aion 2 radar', 'minimap hack', 'open world'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-3',
      },
      {
        title: 'Flight Tools',
        subtitle: 'Vertical Fights, Clear Vision.',
        desc: 'Camera and flight-path assists for Aion 2’s signature aerial combat and open-world traversal.',
        bullets: ['Extended draw distance caps per zone', 'Quick reset to default camera', 'Pairs with ESP for rift ambushes'],
        tags: ['flight hack', 'camera zoom', 'aerial combat'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3',
      },
      {
        title: 'Utility Suite',
        subtitle: 'Extra Tools for Sieges.',
        desc: 'Cosmetic preview, execute assist, anti-AFK and stream-safe modes beyond core ESP.',
        bullets: [
          'Cosmetic preview: wings, skins and dyes locally',
          'Execute assist: finish low-HP daevas in battlegrounds',
          'Anti-AFK for long crafting or travel sessions',
          'Stream Proof: hide overlays from OBS capture',
        ],
        tags: ['cosmetic preview', 'execute assist', 'stream proof'],
        bento:
          'sm:col-span-2 lg:col-span-8 lg:row-span-2 lg:col-start-1 lg:row-start-4',
      },
      {
        title: 'Kinah Farm Bot',
        subtitle: 'Grind Smarter. Not Harder.',
        desc: 'Automated mob routes, gather loops and dungeon repeat timers for kinah and materials.',
        bullets: [
          'Open-world mob pathing with safe retreat on ESP',
          'Gather node rotation with vendor sell reminders',
          'Dungeon repeat timers for Fire Temple-style farms',
          'Conservative presets for NCsoft anti-cheat waves',
        ],
        tags: ['kinah bot', 'farm bot', 'gather bot'],
        bento:
          'sm:col-span-2 lg:col-span-4 lg:row-span-2 lg:col-start-9 lg:row-start-4',
      },
      {
        title: 'Stream Proof',
        subtitle: 'Creators Stay Safe.',
        desc: 'Keep overlays on your monitor while capture software records a clean game feed.',
        bullets: ['OBS and Game Bar safe modes', 'Toggle stream proof per module', 'Test checklist in portal docs'],
        tags: ['obs safe', 'stream proof', 'capture hide'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-6',
      },
      {
        title: 'Camera Zoom',
        subtitle: 'See More of Atreia.',
        desc: 'Pull the camera back for rift and battleground awareness without losing melee tracking.',
        bullets: ['Distance caps per activity', 'Quick reset to default FOV', 'Pairs with radar ESP'],
        tags: ['zoom hack', 'camera', 'vision'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-6',
      },
      {
        title: 'Cloud Config & Updates',
        subtitle: 'Patch Day Ready.',
        desc: 'Same presets on every PC—portal updates track Aion 2 and NCsoft anti-cheat patch days.',
        bullets: ['Cloud backup for slider profiles', 'Loader push within hours of patches', 'Discord #status for build notes'],
        tags: ['cloud sync', 'auto update', 'presets'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-2',
      },
    ],
  },
`;

s = s.slice(0, start) + replacement + s.slice(end);
fs.writeFileSync(file, s);
console.log('Patched en.ts features block.');
