import fs from 'node:fs';
import path from 'node:path';

const files = ['src/data/products.ts', 'src/data/faq.ts', 'src/i18n/en.ts'];

const REPLACEMENTS = [
	[/\bhero ESP\b/gi, 'player ESP'],
	[/\bHero ESP\b/g, 'Player ESP'],
	[/bward locator\b/gi, 'hostile daeva tracker'],
	[/\bward and sentry locator\b/gi, 'hostile daeva and mob markers'],
	[/\bwards, runes\b/gi, 'hostile daevas and resource nodes'],
	[/\bward ESP\b/gi, 'radar ESP'],
	[/\brune timers\b/gi, 'gather node timers'],
	[/\brune spawn timers\b/gi, 'resource spawn timers'],
	[/\brunes and\b/gi, 'resource nodes and'],
	[/\bhigh-MMR\b/gi, 'high-rank PvP'],
	[/\branked MMR\b/gi, 'ranked PvP battlegrounds'],
	[/\branked matchmaking\b/gi, 'ranked PvP queues'],
	[/\bscript automation\b/gi, 'combat assist automation'],
	[/\bscript modules\b/gi, 'combat assist modules'],
	[/\bscripts guide\b/gi, 'combat assist guide'],
	[/\bcombo scripts\b/gi, 'rotation assist'],
	[/\bAuto Combo\b/g, 'Combat Assist'],
	[/\bAuto Farm Bot\b/g, 'Kinah Farm Bot'],
	[/\bAuto Kill Steal\b/g, 'Execute Assist'],
	[/\bSkin Changer\b/g, 'Cosmetic Preview'],
	[/\bmap hack\b/gi, 'ESP / radar'],
	[/\bMap hack\b/g, 'ESP / radar'],
	[/\bzoom hack\b/gi, 'camera zoom'],
	[/\bZoom hack\b/g, 'Camera zoom'],
	[/\bInvoker, Lion, PA\b/g, 'Gladiator, Sorcerer, Assassin'],
	[/\barcanas, immortals\b/gi, 'wings, armor skins'],
	[/\bInstanced PvP\b/g, 'instanced PvP'],
	[/\blane vision\b/gi, 'open-world vision'],
	[/\bmidlaners\b/gi, 'ranged classes'],
	[/\bganks\b/gi, 'ambushes'],
	[/\bMMR timing\b/gi, 'high-rank PvP timing'],
];

for (const rel of files) {
	const file = path.join(process.cwd(), rel);
	let text = fs.readFileSync(file, 'utf8');
	for (const [from, to] of REPLACEMENTS) {
		text = text.replace(from, to);
	}
	fs.writeFileSync(file, text);
}
console.log('Patched product/faq/en copy for Aion 2.');
