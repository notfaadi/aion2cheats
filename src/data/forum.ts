export interface ForumComment {
  author: string;
  age: string;
  score: number;
  body: string;
  replies?: ForumComment[];
}

export interface ForumPost {
  slug: string;
  category: string;
  categoryTone: 'purple' | 'blue' | 'green' | 'orange';
  title: string;
  excerpt: string;
  author: string;
  age: string;
  commentsCount: number;
  upvotes: number;
  flair?: string;
  body: string[];
  comments: ForumComment[];
  sourceTitle?: string;
  sourcePath?: string;
}

export const forumCategories = [
  { name: 'General', tone: 'purple', icon: 'users' },
  { name: 'Guides & Builds', tone: 'blue', icon: 'navBlog' },
  { name: 'Patch Talk', tone: 'orange', icon: 'refresh' },
  { name: 'Community', tone: 'green', icon: 'messageCircle' },
] as const;

function guideDiscussion(input: {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryTone: ForumPost['categoryTone'];
  sourceTitle: string;
  sourcePath: string;
  upvotes: number;
  answer: string;
  detail: string;
  tip: string;
}): ForumPost {
  const { answer, detail, tip, ...post } = input;
  return {
    ...post,
    author: 'guide_team',
    age: '2 days ago',
    commentsCount: 1,
    upvotes: 14,
    flair: 'Guide Q&A',
    body: [answer, detail],
    comments: [{ author: 'guide_team', age: 'From the guide', score: 0, body: tip }],
  };
}

const additionalGuidePosts: ForumPost[] = [
  guideDiscussion({
    slug: 'how-to-tune-esp-for-aion-2-pvp',
    title: 'How should I tune ESP for Aion 2 PvP?',
    upvotes: 71,
    excerpt: 'Start with player markers and distance limits before adding gatherables or NPC clutter.',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    sourceTitle: 'Aion 2 ESP setup for PvP and open world',
    sourcePath: '/blog/aion-2-esp-setup-guide/',
    answer:
      'The ESP guide recommends enabling enemy player markers first, setting a readable max distance, and choosing colors that stand out against Aion 2’s bright skill effects.',
    detail:
      'In battlegrounds, keep the overlay minimal so you can still track flight paths and ground targets. Add optional filters one at a time after a few duels or skirmishes feel comfortable.',
    tip: 'If the screen feels busy during aerial fights, reduce NPC or resource dots before lowering player ESP range.',
  }),
  guideDiscussion({
    slug: 'lite-or-pro-for-open-world-grind',
    title: 'Lite or Pro for open world grinding?',
    upvotes: 54,
    excerpt: 'Lite covers awareness tools; Pro adds automation modules the comparison guide describes in detail.',
    category: 'General',
    categoryTone: 'purple',
    sourceTitle: 'Aion 2 Lite vs Pro: which tier fits you',
    sourcePath: '/blog/aion-2-lite-vs-pro/',
    answer:
      'The comparison describes Lite as focused on ESP, zoom, and stream-proof options for players who mainly need situational awareness in open world and PvP.',
    detail:
      'Pro includes those awareness features plus script-style modules such as combo helpers and activators. Pick based on whether you only want information on screen or also want assisted rotations.',
    tip: 'Read the side-by-side module list on the guide page before checkout so you are not paying for automation you will not use.',
  }),
  guideDiscussion({
    slug: 'patch-day-loader-checklist',
    title: 'What should I do on Aion 2 patch day before logging in?',
    upvotes: 49,
    excerpt: 'Check build status, update the loader, and test in a low-stakes zone before battlegrounds.',
    category: 'Patch Talk',
    categoryTone: 'orange',
    sourceTitle: 'Aion 2 patch day checklist',
    sourcePath: '/blog/aion-2-patch-day-checklist/',
    answer:
      'The patch-day guide says to read the current compatibility notice first, update Aion 2 through the official client, then apply any loader update published for that game version.',
    detail:
      'Run a short test in open world or a training area to confirm the overlay and key binds still work. Avoid queueing ranked battlegrounds until you have verified behavior after the update.',
    tip: 'If something fails immediately after a client patch, stop and recheck status notes instead of changing multiple settings at once.',
  }),
  guideDiscussion({
    slug: 'flight-mechanics-camera-distance',
    title: 'How do flight mechanics interact with camera zoom settings?',
    upvotes: 41,
    excerpt: 'Wider camera can help aerial awareness; the flight guide explains gradual tuning and reset binds.',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    sourceTitle: 'Aion 2 flight mechanics and camera zoom',
    sourcePath: '/blog/aion-2-flight-mechanics-guide/',
    answer:
      'The guide notes that Aion 2’s flight and glide systems make vertical spacing important. A slightly wider camera can help you see ledges and incoming divers, but too much zoom hurts precise landing.',
    detail:
      'Adjust zoom in small steps and keep a bind to return to default framing so you can compare ground combat versus aerial pursuit quickly.',
    tip: 'Test the same flight route after each zoom change; open world cliffs expose bad settings faster than flat terrain.',
  }),
  guideDiscussion({
    slug: 'farming-bot-route-safety',
    title: 'Are there safer ways to configure the farming bot routes?',
    upvotes: 36,
    excerpt: 'The farming bot guide covers route length, pause timers, and why conservative loops matter.',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    sourceTitle: 'Aion 2 farming bot setup guide',
    sourcePath: '/blog/aion-2-farming-bot-guide/',
    answer:
      'Start with short loops in low-traffic zones, enable pauses between pulls, and avoid obvious straight-line patterns that repeat for hours.',
    detail:
      'The guide recommends matching your class’s actual attack range and travel speed so the bot does not rubber-band or skip nodes. Review loot and repair stops in the loop definition.',
    tip: 'Run the route manually once with ESP on to confirm node names and elevation changes before enabling automation.',
  }),
  guideDiscussion({
    slug: 'hwid-reset-after-new-pc',
    title: 'What should I do after a PC upgrade or HWID change?',
    upvotes: 33,
    excerpt: 'Follow the HWID guide for device binding, support requests, and avoiding conflicting spoof tools.',
    category: 'General',
    categoryTone: 'purple',
    sourceTitle: 'Aion 2 HWID spoofer after ban',
    sourcePath: '/blog/aion-2-hwid-spoofer-after-ban/',
    answer:
      'Check your product’s device limits in the HWID article. After major hardware changes, you may need a reset through official support rather than stacking unrelated utilities.',
    detail:
      'Document the error message, avoid changing disk IDs and network adapters simultaneously, and launch the loader only after a clean reboot.',
    tip: 'Use the support channel listed in the guide; do not post license keys or hardware IDs in public threads.',
  }),
  guideDiscussion({
    slug: 'cosmetic-preview-skin-changer',
    title: 'How does the cosmetic preview utility work?',
    upvotes: 38,
    excerpt: 'Local preview only: the skin guide explains setup, supported gear slots, and restoring defaults.',
    category: 'General',
    categoryTone: 'purple',
    sourceTitle: 'Aion 2 Skin Changer and cosmetic preview',
    sourcePath: '/blog/aion-2-skin-changer-guide/',
    answer:
      'The guide describes Skin Changer as a client-side preview for armor and weapon appearances. Other players still see your real equipment unless the game itself applies a transmog.',
    detail:
      'Follow the current compatibility list, back up your preset, and use the restore option before patching or switching characters.',
    tip: 'Treat cosmetics as a visual sandbox; verify patch notes if NCsoft changes model or dye systems.',
  }),
  guideDiscussion({
    slug: 'external-loader-meaning',
    title: 'What does “external loader” mean for Aion 2 tools?',
    upvotes: 46,
    excerpt: 'Software outside the game process with an overlay UI—the external loader guide walks through the model.',
    category: 'General',
    categoryTone: 'purple',
    sourceTitle: 'Aion 2 external loader guide',
    sourcePath: '/blog/aion-2-external-loader-guide/',
    answer:
      '“External” means the loader and feature modules run as a separate process and draw menus or ESP on top of the game window rather than injecting into the client executable.',
    detail:
      'The article covers launch order, updating after NCsoft patches, and why external tools still need compatibility testing each build.',
    tip: 'Always match loader version to the game patch noted on the status page before opening battlegrounds.',
  }),
  guideDiscussion({
    slug: 'stream-proof-obs-test',
    title: 'How do I verify stream-proof mode with OBS?',
    upvotes: 22,
    excerpt: 'Record a short clip with your real scene setup; the stream-proof guide compares capture modes.',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    sourceTitle: 'Stream-proof overlay setup for Aion 2',
    sourcePath: '/blog/aion-2-stream-proof-setup/',
    answer:
      'Enable stream-proof in the product settings, then record gameplay with the same OBS source you use when live. Review the saved file, not just the preview pane.',
    detail:
      'Test game capture and display capture separately; multi-monitor and fullscreen borderless setups behave differently in Aion 2.',
    tip: 'Hide sensitive menu pages before recording if you only need to confirm ESP is absent on stream.',
  }),
  guideDiscussion({
    slug: 'class-combo-timing-battlegrounds',
    title: 'Any tips for class combat timing in battlegrounds?',
    upvotes: 29,
    excerpt: 'Chain skills with flight windows in mind—the class combat guide breaks down burst and sustain patterns.',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    sourceTitle: 'Aion 2 class combat and rotation guide',
    sourcePath: '/blog/aion-2-class-combat-guide/',
    answer:
      'The guide suggests learning your class’s ground combo first, then adding aerial cancels once glide and descent timing feel natural in open world practice.',
    detail:
      'For PvP battlegrounds, note when opponents use lift or root skills; Pro-tier script modules can assist but should be tuned slowly to stay readable.',
    tip: 'Pick one class spec and one rotation per week; Aion 2’s skill animations punish rushed rebinding mid-season.',
  }),
];

export const forumPosts: ForumPost[] = [
  {
    slug: 'pvp-battleground-callouts-with-esp',
    category: 'Community',
    categoryTone: 'green',
    title: 'Using ESP callouts without drowning in battleground chaos',
    excerpt: 'Players share how they filter allies, flag carriers, and healers during three-lane PvP maps.',
    author: 'wing_striker',
    age: '3 hours ago',
    commentsCount: 3,
    upvotes: 92,
    flair: 'PvP',
    sourceTitle: 'Aion 2 PvP battlegrounds overview',
    sourcePath: '/blog/aion-2-pvp-battlegrounds-guide/',
    body: [
      'Battlegrounds mix ground fights with short flight bursts. I keep ESP on enemy players only, max distance around 45m, and turn off gatherable dots entirely for those matches.',
      'The battleground guide linked below also mentions watching objective icons on the minimap while ESP handles flankers—works better than showing every NPC in the arena.',
    ],
    comments: [
      {
        author: 'elyos_lancer',
        age: '2 hours ago',
        score: 19,
        body: 'Second this. Color-code healers if your tier supports role hints; saves time when everyone is airborne.',
      },
      {
        author: 'asmodian_arc',
        age: '90 min. ago',
        score: 11,
        body: 'I drop ESP range during final objective phases so the overlay does not cover the capture bar.',
      },
      {
        author: 'guide_team',
        age: '1 hour ago',
        score: 8,
        body: 'See the battleground guide for map-specific choke points; pair that with minimal ESP for cleaner fights.',
      },
    ],
  },
  {
    slug: 'open-world-node-farming-with-lite',
    category: 'Community',
    categoryTone: 'green',
    title: 'Open world node runs with Lite tier only',
    excerpt: 'Is Lite enough for ore and herb routes if you fly manually? Community notes plus the open world guide.',
    author: 'gather_loop',
    age: '6 hours ago',
    commentsCount: 2,
    upvotes: 58,
    flair: 'Open World',
    sourceTitle: 'Aion 2 open world farming and routes',
    sourcePath: '/blog/aion-2-open-world-farming/',
    body: [
      'Lite ESP for resource nodes and enemy players is enough for my daily loop. I do not use the farming bot; I just glide between ridges using the routes in the open world article.',
      'Pro friends run longer bot paths, but for casual farming Lite plus flight practice feels safer and less obvious on busy channels.',
    ],
    comments: [
      {
        author: 'channel_hopper',
        age: '5 hours ago',
        score: 14,
        body: 'Switch channels when ESP shows too many players on your loop; the guide lists quieter zones per level band.',
      },
      {
        author: 'craft_bank',
        age: '4 hours ago',
        score: 6,
        body: 'Remember repair kits in open world; bot or not, dying mid-route wastes more time than slower gathering.',
      },
    ],
  },
  {
    slug: 'ncsoft-client-verify-error',
    category: 'Patch Talk',
    categoryTone: 'orange',
    title: 'NCsoft client says it cannot verify game files—first steps?',
    excerpt: 'Verify through the launcher, reboot, and check overlays before assuming a permanent account flag.',
    author: 'guide_team',
    age: '8 hours ago',
    commentsCount: 2,
    upvotes: 44,
    flair: 'Guide Q&A',
    sourceTitle: 'NCsoft Anti-Cheat unable to verify Aion 2',
    sourcePath: '/blog/aion-2-anti-cheat-verify-fix/',
    body: [
      'The troubleshooting article explains that verify errors often come from incomplete patches or conflicting background apps—not always enforcement action. Run file verification in the NCsoft launcher first.',
      'Fully exit the client, reboot, and launch Aion 2 alone before starting other overlay software. If verification still fails, collect the exact error code for support.',
    ],
    comments: [
      {
        author: 'clean_boot',
        age: '7 hours ago',
        score: 12,
        body: 'Disabling other overlays before verify fixed it for me after last week’s mini-patch.',
      },
      {
        author: 'patch_watcher',
        age: '6 hours ago',
        score: 7,
        body: 'Wait for CDN to finish if download paused; partial installs trigger the same message.',
      },
    ],
  },
  {
    slug: 'features-overview-before-checkout',
    category: 'Community',
    categoryTone: 'green',
    title: 'Read the features guide before picking a tier?',
    excerpt: 'New players ask whether the main features article is enough before Lite vs Pro decisions.',
    author: 'new_ascended',
    age: '11 hours ago',
    commentsCount: 1,
    upvotes: 27,
    flair: 'Question',
    sourceTitle: 'Aion 2 cheats features guide',
    sourcePath: '/blog/aion-2-cheats-features-guide/',
    body: [
      'Yes—the features guide groups ESP, zoom, stream-proof, scripts, and utilities so you know what each product page refers to. I used it plus the Lite vs Pro post before buying.',
      'It also links to setup articles for loader, HWID, and patch day, which saved me from installing everything at once.',
    ],
    comments: [
      {
        author: 'guide_team',
        age: '9 hours ago',
        score: 9,
        body: 'Start with features overview, then open the specific setup guide for the module you enable first—usually ESP or loader.',
      },
    ],
  },
  ...additionalGuidePosts,
];

export function getForumPost(slug: string): ForumPost | undefined {
  return forumPosts.find((post) => post.slug === slug);
}
