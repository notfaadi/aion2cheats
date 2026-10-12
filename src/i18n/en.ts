import type { Translations } from './types';
import { PRIMARY_CHECKOUT_PATH } from '../config/checkout';
import { PRODUCT_BASE } from '../config/site';

const productBase = PRODUCT_BASE;

export const en: Translations = {
  site: {
    name: 'Aion2 Cheat',
    domain: 'aion2cheat.org',
    title: 'Aion 2 Cheats & Hacks | Undetected Bot, Auto Farm & ESP',
    description:
      'The best Aion 2 cheats and hacks. Undetected bot, auto farm, speed hack, ESP and auto loot for Steam & PURPLE. Instant delivery, free updates, 24/7 support.',
    keywords:
      'aion 2 cheats, aion 2 hacks, aion 2 bot, aion 2 auto farm, aion 2 afk bot, aion 2 cheat download, aion 2 undetected cheat, aion 2 esp, aion 2 speed hack, aion 2 hacks 2026',
    discord: PRIMARY_CHECKOUT_PATH,
  },
  nav: [
    { href: `${productBase}`, label: 'Products' },
    { href: '/blog/', label: 'Blog' },
    { href: '/forum/', label: 'Forum' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/support/', label: 'Support' },
  ],
  hero: {
    status: 'Aion 2 — patch build online',
    eyebrow: '#1 Undetected Provider',
    titleLine1: 'Aion 2 Cheats & Hacks',
    titleLine2: 'Undetected Bot, Auto Farm & ESP',
    subtitle:
      'Undetected Aion 2 bot, auto farm, speed hack, ESP, radar and auto loot for Steam and PURPLE—free updates, instant delivery and 24/7 support at aion2cheat.org.',
    ctaPrimary: 'View products',
    ctaBuyNow: 'Buy now',
    modesLabel: 'Aion 2 modes',
    modes: ['PvP', 'PvE', 'Open World', 'Legion Raids'],
    metrics: [
      { label: 'Stream-safe', strong: 'Yes' },
      { label: 'Patch speed', strong: '<24h' },
      { label: 'Users', strong: '300+' },
      { label: 'Live support', strong: '24/7' },
    ],
  },
  features: {
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
        tags: ['camera zoom', 'camera', 'vision'],
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
  whyUs: {
    eyebrow: 'Why us',
    title: 'Why Aion2 Cheat',
    subtitle: 'Aion 2–only tools, NCsoft patch-day updates, and live Discord setup—nothing copied from other games.',
    usLabel: 'Aion2 Cheat',
    otherLabel: 'Typical provider',
    rows: [
      {
        title: 'Patch-day loader updates',
        desc: 'anti-cheat-aware builds pushed within hours of Aion 2 updates—check Discord #status before you queue ranked.',
      },
      {
        title: 'Humanized combat assist',
        desc: 'Delay sliders, focus-fire and conservative defaults for battlegrounds—not max automation that spikes reports.',
      },
      {
        title: 'Live Discord operators',
        desc: 'Real engineers for loader setup, class configs and HWID resets—24/7 shift coverage, not copy-paste FAQ tickets.',
      },
      {
        title: 'External loader + stream proof',
        desc: 'Overlay suite with OBS-safe modes—no risky DLL injection into the Aion 2 process like legacy providers still sell.',
      },
      {
        title: 'Cloud preset sync',
        desc: 'PvP, PvE and per-class profiles backup to the portal—same sliders on any PC without rebuilding from scratch.',
      },
      {
        title: 'HWID reset & license moves',
        desc: 'HWID clears and machine transfers handled through Discord ops—most providers lock one rig or charge for every swap.',
      },
    ],
    metrics: [
      {
        value: '<24h',
        title: 'Patch turnaround',
        desc: 'Average time to ship a loader build after major Aion 2 or anti-cheat changes.',
      },
      {
        value: '24/7',
        title: 'Operator support',
        desc: 'Discord engineers on shift for setup, configs and account issues.',
      },
      {
        value: '300+',
        title: 'Active operators',
        desc: 'PC Aion 2 players running scripts, ESP / radar and utilities on aion2cheat.org.',
      },
    ],
  },
  setup: {
    eyebrow: 'Setup guide',
    titleLead: 'From checkout to ranked queue in just',
    titleHighlight: 'three simple steps',
    intro:
      'Getting started is easy. Follow the operator portal flow to download the loader, load presets, and queue Aion 2 on PC PC—with live Discord help if anything blocks you.',
    ctaPrimary: 'View products',
    ctaSecondary: 'Setup FAQ',
    ctaPrimaryHref: productBase,
    ctaSecondaryHref: '/faq/',
    steps: [
      {
        step: 'Step 1',
        title: 'Unlock portal & download loader',
        desc: 'Complete checkout, open your operator dashboard, and pull the latest patch loader build for Windows.',
      },
      {
        step: 'Step 2',
        title: 'Launch & configure modules',
        desc: 'Run the external loader, import ranked or instanced PvP presets, and tune scripts plus ESP / radar sliders.',
      },
      {
        step: 'Step 3',
        title: 'Verify status & queue Aion 2',
        desc: 'Check the live status banner, launch Aion 2, and play with cloud-backed profiles saved in the portal.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Platform support',
    title: 'Runs on your rig.',
    subtitle: 'Check the live status banner before launching Aion 2 after updates.',
    items: ['Windows 10 & 11', 'the game client', 'the game client', 'Auto updater', 'Config cloud sync', 'Discord support', 'HWID reset', 'External loader'],
  },
  cheats: {
    eyebrow: 'Elite cheat',
    title: 'Aion 2 Elite cheats',
    subtitle: 'Full ranked suite—ESP / radar, scripts, bots, Cosmetic Preview, and priority patch delivery.',
    viewAll: 'View Elite details',
    explore: 'Explore',
    items: [
      {
        badge: 'Limited slots',
        tier: 'Private',
        name: 'Elite',
        title: 'Aion 2 Elite',
        desc: 'Private aion 2 cheats build with Kinah Farm Bot, Execute Assist, Auto Dagon, Cosmetic Preview and direct dev support.',
        features: ['Kinah Farm Bot', 'Execute Assist', 'Auto Dagon', 'Full ESP / radar suite', 'Cosmetic Preview', 'Priority patch queue'],
        more: 42,
        href: `${productBase}elite/`,
        variant: 'limited',
      },
    ],
  },
  products: {
    eyebrow: 'Products',
    title: 'Aion 2 products',
    subtitle: 'Elite aion 2 cheats plus HWID, UGC recovery, Cosmetic Preview, and utility tools.',
    viewAll: 'View all products',
    get: 'Get',
    explore: 'Explore',
    items: [
      {
        badge: 'Available',
        category: 'System utility',
        title: 'HWID Spoofer',
        subtitle: 'Clean slate for your PC',
        desc: 'Hardware ID spoofing for disk serials, MAC addresses and GPU IDs—follow the portal setup guide before launching Aion 2.',
        features: ['Spoofer & cleanup tools', 'Serial profile rotation', 'Compatibility scan', 'Post-spoof verification'],
        more: 9,
        href: `${productBase}hwid-spoofer/`,
      },
      {
        badge: 'Available',
        category: 'Account recovery',
        title: 'UGC',
        subtitle: 'Unban & governance control',
        desc: 'All-in-one appeal workspace for account restrictions, account bans and security holds—custom workflows and dispute automation.',
        features: ['Custom appeal workflows', 'Dispute automation', 'Case documentation', 'Status tracking dashboard'],
        more: 6,
        href: `${productBase}ugc/`,
      },
      {
        badge: 'Available',
        category: 'Cosmetic',
        title: 'Cosmetic Preview',
        subtitle: 'Unlock every cosmetic locally',
        desc: 'Lightweight Cosmetic Preview for hero outfits, weapon skins and rare variants—local preview without in-game store purchases.',
        features: ['Hero skin swap', 'Weapon & effect customizer', 'Arcana preview', 'Loadout favorites export'],
        more: 7,
        href: `${productBase}unlock-all/`,
      },
    ],
  },
  blog: {
    eyebrow: 'Blog',
    title: 'Guides and updates',
    subtitle: 'ESP setup, PvP battlegrounds, kinah farming, flight tools and NCsoft patch-day checks for Aion 2.',
    latestTitle: 'Latest articles',
    latestSubtitle: 'Filter by topic or sort to find setup guides, feature deep-dives, and patch-day notes.',
    filterAll: 'All articles',
    sortLabel: 'Sort by',
    sortNewest: 'Newest first',
    sortOldest: 'Oldest first',
    sortShortRead: 'Shortest read',
    sortLongRead: 'Longest read',
    emptyFilter: 'No articles match this filter.',
    viewAll: 'View all articles',
    read: 'Read',
    items: [
      {
        tag: 'Guides',
        title: 'Aion 2 game overview: flight, factions and endgame',
        slug: 'aion-2-game-overview',
        image: '/images/blog/aion-2-game-overview.png',
        desc: 'What makes Aion 2 unique—open world scale, daeva classes, PvP battlegrounds and kinah economy.',
        date: 'Oct 1, 2026',
        readTime: '8 min read',
      },
      {
        tag: 'Features',
        title: 'Aion 2 cheats features: ESP, radar, combat assist and more',
        slug: 'aion-2-cheats-features-guide',
        image: '/images/blog/aion-2-cheats-features-guide.png',
        desc: 'Complete map of Lite, Pro and Elite modules for NCsoft’s Aion 2 on PC.',
        date: 'Sep 28, 2026',
        readTime: '12 min read',
      },
      {
        tag: 'Guides',
        title: 'Aion 2 Lite vs Pro: which tier fits you',
        slug: 'aion-2-lite-vs-pro',
        image: '/images/blog/aion-2-lite-vs-pro.png',
        desc: 'ESP-only awareness vs full combat assist for battlegrounds and rifts.',
        date: 'Sep 26, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Guides',
        title: 'Elite tier guide: kinah bots and full utility',
        slug: 'aion-2-elite-tier-guide',
        image: '/images/blog/aion-2-elite-tier-guide.png',
        desc: 'When to upgrade to Elite for farming automation, execute assist and cosmetic preview.',
        date: 'Sep 24, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'Setup',
        title: 'ESP setup for Aion 2 open world and rifts',
        slug: 'aion-2-esp-setup-guide',
        image: '/images/blog/aion-2-esp-setup-guide.png',
        desc: 'Readable colors, distance caps and flight-friendly layouts for daeva ESP.',
        date: 'Sep 22, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Setup',
        title: 'Radar hack setup for large zones',
        slug: 'aion-2-radar-hack-guide',
        image: '/images/blog/aion-2-radar-hack-guide.png',
        desc: 'Minimap dots, gather hints and hostile tracking without UI clutter.',
        date: 'Sep 20, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Setup',
        title: 'Combat assist for Aion 2 PvP battlegrounds',
        slug: 'aion-2-combat-assist-pvp',
        image: '/images/blog/aion-2-combat-assist-pvp.png',
        desc: 'Rotation delays, focus fire and stigma timing for battleground seasons.',
        date: 'Sep 18, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'Guides',
        title: 'Kinah farming bot routes and safety',
        slug: 'aion-2-farming-bot-guide',
        image: '/images/blog/aion-2-farming-bot-guide.png',
        desc: 'Mob loops, gather paths and dungeon repeats with humanized movement.',
        date: 'Sep 16, 2026',
        readTime: '8 min read',
      },
      {
        tag: 'Guides',
        title: 'Flight and camera tools in Aion 2',
        slug: 'aion-2-flight-speed-tools',
        image: '/images/blog/aion-2-flight-speed-tools.png',
        desc: 'Draw distance, zoom caps and aerial fight awareness.',
        date: 'Sep 14, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Guides',
        title: 'Cosmetic unlock and wardrobe preview',
        slug: 'aion-2-cosmetic-unlock-guide',
        image: '/images/blog/aion-2-cosmetic-unlock-guide.png',
        desc: 'Local wings, dyes and armor preview without touching live inventory.',
        date: 'Sep 12, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Safety',
        title: 'Patch-day checklist for Aion 2 cheats',
        slug: 'aion-2-patch-day-checklist',
        image: '/images/blog/aion-2-patch-day-checklist.png',
        desc: 'What to verify on aion2cheat.org after every NCsoft maintenance window.',
        date: 'Sep 10, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Safety',
        title: 'HWID spoofer after hardware flags',
        slug: 'aion-2-hwid-spoofer-guide',
        image: '/images/blog/aion-2-hwid-spoofer-guide.png',
        desc: 'When disk serial changes help vs account-only restrictions.',
        date: 'Sep 8, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Setup',
        title: 'How to buy Aion 2 cheats in 2026',
        slug: 'how-to-buy-aion-2-cheats-2026',
        image: '/images/blog/how-to-buy-aion-2-cheats-2026.png',
        desc: 'Checkout, portal access and Discord verification walkthrough.',
        date: 'Sep 6, 2026',
        readTime: '4 min read',
      },
      {
        tag: 'Setup',
        title: 'External loader architecture',
        slug: 'aion-2-external-loader-guide',
        image: '/images/blog/aion-2-external-loader-guide.png',
        desc: 'Why overlays stay outside the Aion 2 process and how updates ship.',
        date: 'Sep 4, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Setup',
        title: 'Stream-proof overlays for creators',
        slug: 'aion-2-stream-proof-setup',
        image: '/images/blog/aion-2-stream-proof-setup.png',
        desc: 'OBS and Game Bar tests before you go live with ESP enabled.',
        date: 'Sep 2, 2026',
        readTime: '5 min read',
      },
    ],
  },
  toolkit: {
    eyebrow: 'Software',
    title: 'Organized, easy to configure',
    subtitle: 'Modules grouped for quick tuning during rifts, battlegrounds and open-world farming.',
    items: [
      { num: '01', label: 'Combat', title: 'Rotations that match your class', desc: 'Combat assist, stigma timing and focus-fire in one tab.' },
      { num: '02', label: 'Vision', title: 'ESP that stays readable', desc: 'Filter by faction, distance and class without covering flight UI.' },
      { num: '03', label: 'Radar', title: 'Zone awareness at scale', desc: 'Hostile daevas, mobs and gather nodes on a compact radar.' },
      { num: '04', label: 'Classes', title: 'Per-class cloud profiles', desc: 'Save Gladiator, Sorcerer, Cleric and ranger presets with hotkeys.' },
      { num: '05', label: 'Farm', title: 'Kinah & material routes', desc: 'Mob loops, gather paths and dungeon repeat timers.' },
      { num: '06', label: 'Profiles', title: 'Configs for every activity', desc: 'Separate PvP, PvE, raid and open-world presets with cloud backup.' },
    ],
  },
  workflow: {
    eyebrow: 'How it works',
    badge: '4 easy steps',
    titleBefore: 'From status check to',
    titleHighlight: 'saved profile.',
    subtitle: 'A straight path from purchase to a Aion 2 profile you can reuse every session.',
    ctaLabel: 'View products',
    ctaHref: productBase,
    ctaSecondary: 'Setup FAQ',
    ctaSecondaryHref: '/faq/',
    items: [
      {
        num: '01',
        phase: 'Before purchase',
        title: 'Check anti-cheat status',
        desc: 'Read the live banner on aion2cheat.org before you buy or launch.',
      },
      {
        num: '02',
        phase: 'Checkout',
        title: 'Choose your tier',
        desc: 'Pick Lite, Pro or Elite—the access level that matches your ranked goals.',
      },
      {
        num: '03',
        phase: 'Loader',
        title: 'Launch & configure',
        desc: 'Download from the portal, enable modules, and tune delays in a practice lobby.',
      },
      {
        num: '04',
        phase: 'In-game',
        title: 'Save your profile',
        desc: 'When settings feel right, save ranked and instanced PvP presets to the cloud.',
      },
    ],
  },
  fieldNotes: {
    eyebrow: 'Field notes',
    title: 'Built for how Aion 2 plays.',
    items: [
      { num: '01', title: 'Patch-day ready', desc: 'Patch notes hit Discord and the portal before the official blog—check before you queue ranked.' },
      { num: '02', title: 'Conservative defaults', desc: 'Start with safe script delays and ESP / radar ranges, then tune up—not the other way around.' },
      { num: '03', title: 'Real operator support', desc: 'Stuck on loader or hero configs? Discord staff walk you through live—not copy-paste FAQs.' },
    ],
  },
  support: {
    eyebrow: 'Support',
    title: 'Aion2Cheat support',
    subtitle: 'Let us know how we can help.',
    channels: [
      {
        icon: 'users',
        title: 'Chat before checkout',
        desc: 'Speak to our team about tiers and access.',
        linkLabel: 'Start checkout',
        href: PRIMARY_CHECKOUT_PATH,
      },
      {
        icon: 'headphones',
        title: 'Chat to support',
        desc: "We're here for loader, HWID and account issues.",
        linkLabel: 'support@aion2cheat.org',
        href: 'mailto:support@aion2cheat.org',
      },
      {
        icon: 'navFaq',
        title: 'Read the FAQ',
        desc: 'Compatibility, bans and setup—before you buy.',
        linkLabel: 'View all FAQ',
        href: '/faq/',
      },
      {
        icon: 'clock',
        title: 'Live operators',
        desc: 'Discord engineers on shift 24/7.',
        linkLabel: 'Open contact page',
        href: '/support/',
      },
    ],
    ticketTitle: 'Include in your ticket',
    ticketItems: [
      { title: 'Order email', desc: 'The address used at checkout on aion2cheat.org or via our secure checkout.' },
      { title: 'Platform', desc: 'Aion 2 on Windows 10 or 11—and your client version.' },
      { title: 'Error detail', desc: 'Screenshot or exact message from the loader or the game client.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Straight answers before checkout.',
    subtitle: 'Compatibility, bans and access—no vague promises.',
    items: [
      {
        num: '01',
        q: 'Where do I check if Aion 2 cheats are online?',
        a: 'The live status banner is on aion2cheat.org and in the Discord #status channel. Always check after a Aion 2 or anti-cheat update.',
      },
      {
        num: '02',
        q: 'What happens after I buy?',
        a: 'Your portal unlocks the loader, setup guide and config library via our secure checkout. Follow the guide before launching Aion 2.',
      },
      {
        num: '03',
        q: 'Can I get banned using third-party aion 2 cheats?',
        a: 'Yes—any modification carries risk. anti-cheat and report systems evolve. Read current status and accept the risk before use.',
      },
      {
        num: '04',
        q: 'Which platforms are supported?',
        a: 'Aion 2 via the official client on Windows 10/11 64-bit only. macOS and Linux are not supported.',
      },
      {
        num: '05',
        q: 'Can I move my license to a new PC?',
        a: 'Yes—use the HWID reset in your portal or open a Discord ticket. Limits depend on your tier.',
      },
      {
        num: '06',
        q: 'Where are products and utilities listed?',
        a: 'Cheat tiers, HWID Spoofer, UGC and Cosmetic Preview live at aion2cheat.org/products/aion-2-cheats with feature lists and checkout via our partner.',
      },
    ],
  },
  footer: {
    tagline: 'Aion 2 cheats — ESP, radar, combat assist and kinah tools for PC. aion2cheat.org',
    explore: 'Explore',
    exploreLinks: [
      { href: '/', label: 'Feature overview', ariaLabel: 'Features', scrollTarget: 'features' },
      { href: '/products/aion-2-cheats/elite/', label: 'Elite aion 2 cheats', ariaLabel: 'Elite cheats' },
      { href: '/products/aion-2-cheats/', label: 'All products & utilities', ariaLabel: 'Products' },
      { href: '/blog/', label: 'Read patch guides', ariaLabel: 'Blog' },
      { href: '/faq/', label: 'Pre-purchase FAQ', ariaLabel: 'FAQ' },
    ],
    support: 'Support',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    about: 'About',
  },
  legalPages: {
    about: {
      title: 'About Aion2Cheat',
      description:
        'Aion2Cheat provides Aion 2 cheat tiers, utility tools and PC support resources at aion2cheat.org.',
      sections: [
        {
          heading: 'Who we are',
          paragraphs: [
            'Aion2Cheat is a PC-focused resource for Aion 2 players exploring ESP, radar, combat assist, kinah farming bots and cosmetic preview workflows. We publish tier comparisons, setup guides, and live status notes so you can evaluate aion 2 cheats before checkout.',
            'All product names are used for identification only.',
          ],
        },
        {
          heading: 'What we publish',
          paragraphs: [
            'Our site covers Lite, Pro, and Elite cheat tiers, HWID utilities, cosmetic preview and account recovery workflows. Blog articles explain PvP-safe configs, patch-day checks, and NCsoft anti-cheat update behavior.',
            'Content is updated when patches land or when loader modules shift. Check the homepage status banner and Discord #status before every session.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Questions about compatibility, loader errors, or checkout are handled through Discord and email support. Include your order email, game account, and Windows version when opening a ticket.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      description:
        'How Aion2Cheat handles analytics, cookies, and contact data when you use aion2cheat.org.',
      sections: [
        {
          heading: 'Information we collect',
          paragraphs: [
            'We may collect standard web analytics such as page views, device type, browser, and approximate region through Google Analytics when enabled. Checkout and license delivery happen on external checkout pages—we do not store payment card data on aion2cheat.org.',
          ],
        },
        {
          heading: 'How we use data',
          paragraphs: [
            'Analytics help us understand which guides and product pages are useful so we can improve content and fix broken links. Support tickets may retain the email address and message content you provide until the issue is resolved.',
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: [
            'We use minimal cookies required for analytics. You can block cookies in your browser settings; core site content remains accessible without them.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For privacy questions, use the options on the Support page. Purchase and refund rules are in our Terms & Conditions.',
          ],
        },
      ],
    },
    terms: {
      title: 'Terms & Conditions',
      description:
        'Purchase, license, refund, and use terms for Aion2Cheat products and aion2cheat.org.',
      sections: [
        {
          heading: 'Agreement',
          paragraphs: [
            'Last updated: September 2026. By using aion2cheat.org or completing checkout for any product listed here, you agree to these Terms & Conditions and our Privacy Policy.',
          ],
        },
        {
          heading: 'What you purchase',
          paragraphs: [
            'We sell access to Aion 2 cheat tiers (Lite, Pro, Elite) and utility tools (HWID Spoofer, UGC, Cosmetic Preview / Unlock All) delivered through an operator portal and loader for Aion 2 on Windows.',
            'Feature lists on each product page describe what is included at the time of purchase. Modules can change when Aion 2 or anti-cheat systems update.',
          ],
        },
        {
          heading: 'Checkout and delivery',
          paragraphs: [
            'Payment and license delivery run on external checkout pages. aion2cheat.org does not process or store payment card numbers.',
            'After purchase, use the operator portal linked from your order flow to download the current loader and setup guide before launching Aion 2.',
          ],
        },
        {
          heading: 'License use',
          paragraphs: [
            'Licenses are for your personal use only. Do not share loader files, portal logins, or license keys. HWID and device limits depend on your tier and are enforced in the portal.',
          ],
        },
        {
          heading: 'Refunds and purchases',
          paragraphs: [
            'All sales are final once checkout completes. We do not refund change-of-mind purchases, account bans, anti-cheat penalties, or issues caused by ignoring setup guides or running modules while the status banner shows offline.',
            'If the product does not work as described on a supported setup—Aion 2 on Windows 10/11, current loader from the portal, and the live status banner showing online when you started—contact us through the Support page. Include your order email, Windows version, Aion 2 build, and screenshots or exact error text from the loader.',
            'We may, at our discretion, offer a fix, replacement access, or partial/full refund when we confirm a fault on our side. We are not obligated to approve every request.',
          ],
        },
        {
          heading: 'Availability and risk',
          paragraphs: [
            'Third-party tools for Aion 2 can conflict with game updates and anti-cheat systems. You use this software at your own risk, including possible account action.',
            'Check the homepage status banner before every session. Do not queue ranked while modules are offline or misaligned after a patch.',
          ],
        },
        {
          heading: 'Changes',
          paragraphs: [
            'We may update these terms. The “Last updated” date at the top will change when we do. Continued use of the site after changes means you accept the revised terms.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For terms, billing, or loader questions, use the buttons on the Support page. See also our Privacy Policy for how we handle site data.',
          ],
        },
      ],
    },
    support: {
      title: 'Aion2Cheat Support',
      description:
        'Get support for loader, HWID, and checkout questions at aion2cheat.org.',
    },
  },
  ui: {
    skipLink: 'Skip to main content',
    browseCheats: 'Try Now',
    browseCheatsMobile: 'Start checkout',
    homeAria: 'Aion2 Cheat home',
    checkoutAria: 'Start checkout',
    discordAria: 'Join Aion2Cheat on Discord',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeLight: 'Switch to light mode',
    themeDark: 'Switch to dark mode',
  },
};
