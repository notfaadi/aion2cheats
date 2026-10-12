import { t } from '../i18n';
import { checkoutForSlug, checkoutPath } from '../config/checkout';
import type { IconName } from '../components/icons/types';

export interface ProductSlide {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
}

export interface ProductOverview {
  title: string;
  paragraphs: string[];
}

export interface AcquisitionStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProductAcquisition {
  title: string;
  steps: AcquisitionStep[];
}

export interface SystemRequirement {
  icon: IconName;
  text: string;
}

export interface ProductPage {
  slug: string;
  kind: 'tier' | 'utility';
  badge: string;
  category?: string;
  tier?: string;
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  variant?: 'essential' | 'popular' | 'limited';
  buyUrl: string;
  images: ProductSlide[];
  overview: ProductOverview;
  acquisition: ProductAcquisition;
  goodToKnow: string;
  limitations: string;
  fullFeatures: string[];
  systemRequirements: SystemRequirement[];
  about?: { type: 'h2' | 'p'; text: string }[];
  body: { type: 'h2' | 'p'; text: string }[];
  relatedBlogSlugs: string[];
}

/** Guides paired with each product detail page */
export const productRelatedBlogSlugs: Record<string, string[]> = {
  lite: ['aion-2-esp-setup-guide', 'aion-2-lite-vs-pro', 'aion-2-flight-speed-tools', 'aion-2-patch-day-checklist'],
  pro: [
    'aion-2-combat-assist-pvp',
    'aion-2-radar-hack-guide',
    'aion-2-lite-vs-pro',
    'aion-2-stream-proof-setup',
  ],
  elite: [
    'aion-2-elite-tier-guide',
    'aion-2-cheats-features-guide',
    'aion-2-esp-setup-guide',
    'aion-2-patch-day-checklist',
    'how-to-buy-aion-2-cheats-2026',
  ],
  'hwid-spoofer': [
    'aion-2-hwid-spoofer-guide',
    'aion-2-patch-day-checklist',
    'aion-2-external-loader-guide',
  ],
  ugc: ['aion-2-patch-day-checklist', 'aion-2-hwid-spoofer-guide', 'how-to-buy-aion-2-cheats-2026'],
  'unlock-all': [
    'aion-2-cosmetic-unlock-guide',
    'aion-2-cheats-features-guide',
    'aion-2-stream-proof-setup',
  ],
};

const productBase = '/products/aion-2-cheats/';

const defaultAcquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Review current status',
    desc: 'Check the live banner on aion2cheat.org and Discord #status before purchase—especially after a Aion 2 or anti-cheat update.',
  },
  {
    num: '02',
    title: 'Choose your access tier',
    desc: 'Select Elite aion 2 cheats or the utility that matches your goal. Review the feature list before checkout via our secure checkout.',
  },
  {
    num: '03',
    title: 'Contact the team',
    desc: 'Open Discord and confirm availability, game client, and payment details with your order email ready.',
  },
  {
    num: '04',
    title: 'Follow guided setup',
    desc: 'Use only the operator portal, patch loader, and setup guide. Test in a training area, load presets, then queue battlegrounds or instanced PvP.',
  },
];

function acquisitionFor(productName: string): ProductAcquisition {
  return {
    title: `How to get ${productName}`,
    steps: defaultAcquisitionSteps,
  };
}

const sharedGoodToKnow =
  'Aion 2 and anti-cheat receive frequent updates. Confirm module availability on the live status panel at aion2cheat.org before you purchase or launch. Overlay behavior may differ in lobbies, replays and spectator mode after patches.';

const sharedLimitations =
  'Third-party software in Aion 2 can violate NCsoft Terms of Service and lead to account bans or account action. You use this software at your own risk. Compatibility and availability can change after game, anti-cheat, or Windows updates without notice.';

const aionSystemRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: 'Supported 64-bit edition of Windows 10 or Windows 11.' },
  { icon: 'reqGameClient', text: 'Current the game client with latest patches applied.' },
  { icon: 'reqSettings', text: 'Administrator access for loader installation and patch updates.' },
  { icon: 'reqWifi', text: 'Stable internet connection for portal access and patch delivery.' },
  { icon: 'reqCpu', text: 'A system that meets Aion 2 published hardware requirements.' },
];

type GalleryKey = keyof typeof galleryRaw;

const gameplay = '/images/gameplay';

const galleryRaw = {
  gpKeyArt: {
    src: `${gameplay}/aion2-key-art.png`,
    alt: 'Aion 2 official key art — daevas, flight and the AION 2 logo',
    caption: 'Aion 2',
    captionDesc: 'Flight combat, open-world PvP and daeva classes in NCsoft’s Aion 2 on PC.',
  },
  gpMapHack: {
    src: `${gameplay}/aion2-esp-scene.png`,
    alt: 'Aion 2 open world with player ESP overlay for PvP awareness',
    caption: 'Player ESP',
    captionDesc: 'Daeva nameplates, faction colors, and distance readouts during open-world PvP.',
  },
  gpScripts: {
    src: `${gameplay}/aion2-class-combat.png`,
    alt: 'Aion 2 class combat with skill rotation assist',
    caption: 'Combat assist',
    captionDesc: 'Rotation chains and cooldown tracking for PvP battlegrounds and rifts.',
  },
  gpZoomHack: {
    src: `${gameplay}/aion2-aerial-flight.png`,
    alt: 'Aion 2 aerial flight above the open world',
    caption: 'Flight & camera',
    captionDesc: 'Extended draw distance and flight-path awareness for vertical Aion 2 maps.',
  },
  gpSkinChanger: {
    src: `${gameplay}/aion2-world-boss.png`,
    alt: 'Aion 2 daeva facing a world boss encounter',
    caption: 'Cosmetic preview',
    captionDesc: 'Local wardrobe and wing previews without touching live NCsoft inventory.',
  },
  gpAutoKill: {
    src: `${gameplay}/aion2-pvp-battle.png`,
    alt: 'Aion 2 PvP battleground skirmish',
    caption: 'PvP finishers',
    captionDesc: 'Execute thresholds and focus-fire assists for battleground objectives.',
  },
  gpFarmBot: {
    src: `${gameplay}/aion2-dungeon-boss.png`,
    alt: 'Aion 2 dungeon boss fight for kinah farming',
    caption: 'Farming automation',
    captionDesc: 'Mob routes, gather loops, and dungeon repeat timers for kinah grinding.',
  },
  gpHeroEsp: {
    src: `${gameplay}/aion2-radar-scene.png`,
    alt: 'Aion 2 landscape suited to radar and minimap overlays',
    caption: 'Radar overlay',
    captionDesc: 'Minimap dots for hostile daevas, mobs, and resource nodes in large zones.',
  },
};

function slide(...keys: GalleryKey[]): ProductSlide[] {
  return keys.map((k) => {
    const item = galleryRaw[k];
    return {
      src: item.src,
      alt: item.alt,
      caption: item.caption,
      captionDesc: item.captionDesc,
    };
  });
}

function slugFromHref(href: string): string {
  const segment = href.replace(productBase, '').replace(/^\//, '').replace(/\/$/, '');
  return segment || 'aion-2-cheats';
}

const tierAbout: Record<string, ProductPage['about']> = {
  lite: [
    {
      type: 'p',
      text: 'Aion 2 Lite is built for players who want map awareness first. In battlegrounds and open-world PvP, knowing hostile daeva positions, elite mob spawns, and gather node timers wins more fights than raw mechanics—Lite gives you that edge without combat assist automation.',
    },
    { type: 'h2', text: 'PvP-safe by design' },
    {
      type: 'p',
      text: 'Lite skips Combat Assist and bot modules entirely. Your gameplay looks natural while ESP / radar, camera zoom and gather node timers keep you informed. Stream-proof mode hides overlays from OBS capture for content creators.',
    },
  ],
  pro: [
    {
      type: 'p',
      text: 'Aion 2 Pro is the sweet spot for battleground grinders. Combat Assist, Kite assist and Quick stigma cast help you win group fights without obvious bot patterns—when you tune Delay Setting using our portal presets.',
    },
    { type: 'h2', text: 'Scripts + awareness combined' },
    {
      type: 'p',
      text: 'Pro inherits every Lite module and adds Combat Assist, Target Selector, Activator and ability radius drawing. You see the fight before it starts and win it with scripts that stay human at default settings.',
    },
  ],
  elite: [
    {
      type: 'p',
      text: 'Aion 2 Elite is the private build for players who want everything—Kinah Farm Bot, Execute Assist, Auto emergency stigma, Cosmetic Preview, full ESP / radar and direct developer support. Limited slots keep the build maintainable and patch cycles fast.',
    },
    { type: 'h2', text: 'Use Elite responsibly' },
    {
      type: 'p',
      text: 'Elite power demands disciplined profiles. Test in training areas or low-risk PvE, start with portal conservative presets, and scale up over days—not minutes. Staff in Discord help Elite users tune before their first battleground queue.',
    },
  ],
};

const tierBodies: Record<string, ProductPage['body']> = {
  lite: [
    { type: 'h2', text: 'Included modules' },
    {
      type: 'p',
      text: 'player ESP with distance and name tags, hostile daeva and mob markers, resource spawn timers, camera zoom, and stream-safe overlay hiding. Config presets for battlegrounds and instanced PvP ship in the portal—load before your first queue.',
    },
    { type: 'h2', text: 'Upgrade path' },
    {
      type: 'p',
      text: 'Lite license holders can upgrade to Pro or Elite through the portal without losing config backups. Compare tiers on the main product page before checkout via our secure checkout.',
    },
  ],
  pro: [
    { type: 'h2', text: 'Scripts and automation' },
    {
      type: 'p',
      text: 'Combat Assist, Kite assist, Quick stigma cast with Prediction, Target Selector and Activator for cleanse, shock, and silence stigmas. Delay Setting tunes cast timing so scripts stay natural in battlegrounds. Start with portal presets, not max sliders.',
    },
    { type: 'h2', text: 'Recommended pairing' },
    {
      type: 'p',
      text: 'Pro is the most popular tier at aion2cheat.org—enough firepower for high-tier battlegrounds without Elite slot limits. Pair with our combat assist guide in the blog before your first PvP session.',
    },
  ],
  elite: [
    { type: 'h2', text: 'Full bot and finish suite' },
    {
      type: 'p',
      text: 'Kinah Farm Bot, Route path AI, Execute Assist, Auto emergency stigma, Cosmetic Preview and full ESP / radar with stealth alerts. Test in PvE before battlegrounds—Elite power requires disciplined profiles, not rage settings.',
    },
    { type: 'h2', text: 'Availability' },
    {
      type: 'p',
      text: 'Elite shows as limited slots on the status banner. Open a Discord ticket if checkout is gated—staff confirm slot availability before purchase.',
    },
  ],
};

const utilityBodies: Record<string, ProductPage['body']> = {
  'hwid-spoofer': [
    { type: 'h2', text: 'When you need it' },
    {
      type: 'p',
      text: 'Use when fresh game accounts fail instantly on one PC but work elsewhere—classic HWID enforcement. Do not use for account-only anti-cheat cases; see [UGC](/products/aion-2-cheats/ugc/) instead.',
    },
    { type: 'h2', text: 'Full workflow' },
    {
      type: 'p',
      text: 'Restore point, driver cleanup, spoof application, cold reboot, identifier verification, then conservative cheat profile before PvP. Full checklist ships in the portal and in our HWID blog guide.',
    },
  ],
  'ugc': [
    { type: 'h2', text: 'What UGC covers' },
    {
      type: 'p',
      text: 'UGC (Unban & Governance Control) is an appeal workspace for account restrictions, account bans, trade holds and security flags. Build custom workflows, automate dispute steps and track case status from one dashboard—not a guaranteed unban service.',
    },
    { type: 'h2', text: 'Realistic expectations' },
    {
      type: 'p',
      text: 'Some account bans cannot be reversed. UGC organizes evidence and follow-ups for NCsoft review. Pair with [HWID Spoofer](/products/aion-2-cheats/hwid-spoofer/) when hardware is flagged, or a new account when reputation is burned.',
    },
  ],
  'unlock-all': [
    { type: 'h2', text: 'Local preview only' },
    {
      type: 'p',
      text: 'Cosmetics display on your client for testing and content creation. Other players in your lobby see your actual inventory, not preview skins.',
    },
    { type: 'h2', text: 'Included with Elite' },
    {
      type: 'p',
      text: 'Cosmetic Preview ships inside the Elite tier. Buy standalone here if you want cosmetic preview without full combat modules.',
    },
  ],
};

const productContent: Record<
  string,
  Pick<ProductPage, 'overview' | 'images' | 'fullFeatures' | 'goodToKnow' | 'limitations' | 'systemRequirements'>
> = {
  lite: {
    images: slide('gpHeroEsp', 'gpMapHack', 'gpZoomHack'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: aionSystemRequirements,
    fullFeatures: [
      'Player ESP & daeva boxes',
      'Elite mob & rift locator',
      'Open-world elite camp awareness',
      'Ability cooldown tracking',
      'Minimap hack overlay',
      'Streamproof overlay mode',
      'Distance readouts',
      'Team color filter',
      'resource spawn timers',
      'camera zoom',
      'instanced PvP preset config',
      'PvP preset config',
      'Cloud config backup',
      'Patch auto-updater',
    ],
    overview: {
      title: 'Built around a clear Aion 2 awareness workflow',
      paragraphs: [
        'Aion 2 Lite focuses on player ESP, elite mob locator, gather node timers and camera zoom—everything you need to track ambushes and map control without combat assist automation. Modules are grouped in the portal so you can tune distance, colors, and stream-proof mode before your first queue.',
        'Lite is the entry path for battleground and instanced PvP players who want map awareness with minimal report risk. No Combat Assist, no bots—just readable overlays maintained every patch at aion2cheat.org.',
      ],
    },
  },
  pro: {
    images: slide('gpScripts', 'gpMapHack', 'gpHeroEsp'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: aionSystemRequirements,
    fullFeatures: [
      'All Lite ESP & ESP / radar modules',
      'Auto rotation assist',
      'Kite assist',
      'Quick stigma cast & Prediction',
      'Target Selector',
      'Activator (cleanse / shock / silence)',
      'Auto Heal',
      'Ability radius drawing',
      'Delay Setting tuning',
      'Class-specific script profiles',
      'Stealth & invisibility alerts',
      'PvP-safe default presets',
      'Training-area test profile',
      'Cloud config backup',
      'Patch auto-updater',
      'Discord operator support',
    ],
    overview: {
      title: 'Built around a clear Aion 2 scripts workflow',
      paragraphs: [
        'Aion 2 Pro adds Combat Assist, Kite assist, Quick stigma cast and Activator on top of every Lite module. Class profiles, delay tuning and activation keys live in one scripts tab—tuned for battlegrounds when you start with portal presets, not max sliders.',
        'Pro is the most popular tier: enough firepower for battlegrounds and instanced PvP without Elite slot limits. Target Selector and Activator keep you efficient mid-fight while scripts stay human at default settings.',
      ],
    },
  },
  elite: {
    images: slide('gpAutoKill', 'gpFarmBot', 'gpSkinChanger'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: aionSystemRequirements,
    fullFeatures: [
      'All Lite + Pro modules',
      'Kinah Farm Bot',
      'Route path AI',
      'Stack timer',
      'Auto vendor helper',
      'Execute Assist',
      'Auto emergency stigma',
      'Full ESP / radar suite',
      'Stealth alert system',
      'Vision detector',
      'Cosmetic Preview (Unlock All)',
      'Priority patch queue',
      'Direct dev Discord support',
      'Elite conservative presets',
      'Cloud config backup',
      'Patch auto-updater',
      'Private slot access',
    ],
    overview: {
      title: 'Built around a full Aion 2 operator workflow',
      paragraphs: [
        'Aion 2 Elite is the private build with Kinah Farm Bot, Execute Assist, Auto Dagon, Cosmetic Preview, full ESP / radar and priority patch delivery. Every Lite and Pro module is included—no caps, no upsells inside the loader.',
        'Elite slots are limited so patch cycles stay fast and builds stay maintainable. Direct dev support in Discord helps you tune conservative profiles before battlegrounds. Check the status banner on aion2cheat.org before purchase.',
      ],
    },
  },
  'hwid-spoofer': {
    images: slide('gpMapHack', 'gpHeroEsp', 'gpZoomHack'),
    goodToKnow:
      'Run the compatibility scan in the portal before spoofing. Create a Windows restore point first. Verify identifiers changed after a cold reboot before launching Aion 2.',
    limitations:
      'Spoofing does not help account-only anti-cheat cases. Never stack two spoof tools. Shared or work PCs may not be suitable. You accept all risk from driver-level changes.',
    systemRequirements: [
      { icon: 'reqWindows', text: 'Windows 10 or 11 64-bit with administrator access.' },
      { icon: 'reqRestorePoint', text: 'Ability to create a system restore point before running.' },
      { icon: 'reqShieldGuide', text: 'Follow the portal setup guide before launching Aion 2 after spoofing.' },
      { icon: 'reqWifi', text: 'Stable connection for portal verification tools.' },
    ],
    fullFeatures: [
      'Disk serial profile tools',
      'MAC address rotation',
      'Restore point checklist',
      'Compatibility scan',
      'Driver conflict detection',
      'Post-spoof verification',
      'Identifier diff report',
      'Cold reboot guide',
      'Portal step-by-step workflow',
      'Discord recovery support',
    ],
    overview: {
      title: 'Built around a clear hardware recovery workflow',
      paragraphs: [
        'The HWID Spoofer helps Aion 2 players recover when anti-cheat flags PC hardware but the game account is still clean. Disk and MAC profile tools ship with a restore-point checklist, compatibility scan, and post-spoof verification steps.',
        'Use this path when fresh accounts fail instantly on one machine but work elsewhere—not for account-only anti-cheat cases. After spoof, load a conservative cheat profile from aion2cheat.org before queuing PvP.',
      ],
    },
  },
  ugc: {
    images: slide('gpMapHack', 'gpHeroEsp', 'gpZoomHack'),
    goodToKnow:
      'Gather order email, platform account details and restriction screenshots before opening a ticket. UGC structures appeals—it does not bypass platform review.',
    limitations:
      'UGC does not guarantee account restoration. Results vary by case type. Permanent account bans may require a new account path instead of appeal.',
    systemRequirements: [
      { icon: 'reqMailOrder', text: 'Order email used at checkout on aion2cheat.org or at checkout on aion2cheat.org.' },
      { icon: 'reqShieldAccount', text: 'Account details and ban or restriction notification if available.' },
      { icon: 'reqWifiPortal', text: 'Internet access for Discord support and case dashboard.' },
    ],
    fullFeatures: [
      'Custom appeal workflows',
      'Restriction dispute automation',
      'Case documentation templates',
      'Status tracking dashboard',
      'Identity verification guide',
      'Evidence upload structure',
      'Timeline tracker',
      'Follow-up response templates',
      'Multi-platform support',
    ],
    overview: {
      title: 'Built around account recovery and appeal workflows',
      paragraphs: [
        'UGC (Unban & Governance Control) helps you recover restricted gaming, social and marketplace accounts with structured appeal workflows and automation—not instant unban guarantees.',
        'Build custom dispute paths, track case status and rebuild your presence with smart restriction-management tools. Support walks you through each step via Discord when you need hands-on help.',
      ],
    },
  },
  'unlock-all': {
    images: slide('gpSkinChanger', 'gpHeroEsp', 'gpMapHack'),
    goodToKnow:
      'Unlock All previews cosmetics locally on your client. Other players in your lobby see your real inventory—not preview skins. Included with Elite tier.',
    limitations:
      'Local preview only—does not modify in-game inventory or store state. Other players cannot see previewed cosmetics or sets.',
    systemRequirements: aionSystemRequirements,
    fullFeatures: [
      'Daeva appearance swap',
      'Legendary wings & armor preview',
      'Weapon & effect customizer',
      'Character select theme',
      'Cursor & HUD theme',
      'UI theme & cursor replacer',
      'Favorites list',
      'Loadout export',
    ],
    overview: {
      title: 'Built around a local cosmetic preview workflow',
      paragraphs: [
        'Unlock All lets you browse daeva wings, armor skins and exclusive sets locally in Aion 2—searchable catalog, favorites, and loadout export without modifying live in-game purchases.',
        'Cosmetics display on your client for testing and content creation. Other players see your actual inventory, not preview skins. Included free with Elite; available standalone for cosmetic preview without combat modules.',
      ],
    },
  },
};

function buildTierPages(): ProductPage[] {
  return t.cheats.items.map((cheat) => {
    const slug = slugFromHref(cheat.href);
    const content = productContent[slug];
    const displayName = cheat.name === 'Lite' ? 'Aion 2 Lite' : cheat.name === 'Pro' ? 'Aion 2 Pro' : 'Aion 2 Elite';
    return {
      slug,
      kind: 'tier',
      badge: cheat.badge,
      tier: cheat.tier,
      name: cheat.name,
      title: cheat.title,
      subtitle: cheat.desc,
      desc: cheat.desc,
      features: cheat.features,
      more: cheat.more,
      variant: cheat.variant,
      buyUrl: checkoutForSlug(slug),
      images: content.images,
      overview: content.overview,
      acquisition: acquisitionFor(displayName),
      goodToKnow: content.goodToKnow,
      limitations: content.limitations,
      fullFeatures: content.fullFeatures,
      systemRequirements: content.systemRequirements,
      about: tierAbout[slug],
      body: tierBodies[slug] ?? [],
      relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
    };
  });
}

function buildUtilityPages(): ProductPage[] {
  return t.products.items
    .filter((p) => p.href !== productBase)
    .map((product) => {
      const slug = slugFromHref(product.href);
      const content = productContent[slug];
      return {
        slug,
        kind: 'utility',
        badge: product.badge,
        category: product.category,
        name: product.title,
        title: product.title,
        subtitle: product.subtitle,
        desc: product.desc,
        features: product.features,
        more: product.more,
        buyUrl: checkoutForSlug(slug),
        images: content.images,
        overview: content.overview,
        acquisition: acquisitionFor(product.title),
        goodToKnow: content.goodToKnow,
        limitations: content.limitations,
        fullFeatures: content.fullFeatures,
        systemRequirements: content.systemRequirements,
        body: utilityBodies[slug] ?? [],
        relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
      };
    });
}

export const productPages: ProductPage[] = [...buildTierPages(), ...buildUtilityPages()];

export const cheatPages = productPages.filter((p) => p.kind === 'tier');

export function getProductPage(slug: string) {
  return productPages.find((p) => p.slug === slug);
}

export function getCheatPage(slug: string) {
  return cheatPages.find((p) => p.slug === slug);
}

export function getAllProductSlugs() {
  return productPages.map((p) => p.slug);
}

export function getAllCheatSlugs() {
  return cheatPages.map((p) => p.slug);
}

const cheatsHubSlides = slide('gpScripts', 'gpAutoKill', 'gpFarmBot');

export const heroSlides = slide(
  'gpKeyArt',
  'gpMapHack',
  'gpScripts',
  'gpZoomHack',
  'gpSkinChanger',
  'gpAutoKill',
  'gpFarmBot',
  'gpHeroEsp',
);

export const productHub = {
  path: productBase,
  title: t.products.title,
  subtitle: t.products.subtitle,
  description: 'Elite aion 2 cheats, HWID spoofer, UGC recovery, and cosmetic utilities for Aion 2 on PC.',
  buyUrl: checkoutPath('aion2'),
};
