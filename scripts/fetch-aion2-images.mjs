/**
 * Downloads official AION 2 Steam store screenshots for site imagery.
 * Source: Steam app 3393110 (NCsoft) — store marketing assets.
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const APP_ID = '3393110';
const root = process.cwd();

const GAMEPLAY_MAP = [
	['aion2-open-world', 0],
	['aion2-aerial-flight', 1],
	['aion2-pvp-battle', 2],
	['aion2-dungeon-boss', 3],
	['aion2-class-combat', 4],
	['aion2-world-boss', 5],
	['aion2-esp-scene', 6],
	['aion2-radar-scene', 7],
];

const BLOG_MAP = [
	['aion-2-cheats-features-guide', 0],
	['aion-2-lite-vs-pro', 2],
	['aion-2-elite-tier-guide', 3],
	['aion-2-esp-setup-guide', 6],
	['aion-2-radar-hack-guide', 7],
	['aion-2-combat-assist-pvp', 4],
	['aion-2-farming-bot-guide', 5],
	['aion-2-flight-speed-tools', 1],
	['aion-2-cosmetic-unlock-guide', 8],
	['aion-2-patch-day-checklist', 9],
	['aion-2-hwid-spoofer-guide', 10],
	['how-to-buy-aion-2-cheats-2026', 11],
	['aion-2-external-loader-guide', 6],
	['aion-2-stream-proof-setup', 4],
	['aion-2-game-overview', 0],
	['aion-2-pvp-guide', 2],
];

async function fetchScreenshots() {
	const res = await fetch(`https://store.steampowered.com/api/appdetails?appids=${APP_ID}`);
	const json = await res.json();
	const shots = json[APP_ID]?.data?.screenshots ?? [];
	if (!shots.length) throw new Error('No Steam screenshots returned');
	return shots.map((s) => s.path_full);
}

async function savePng(url, outPath) {
	const res = await fetch(url);
	if (!res.ok) throw new Error(`Failed ${url}: ${res.status}`);
	const buf = Buffer.from(await res.arrayBuffer());
	await sharp(buf)
		.resize({ width: 1600, withoutEnlargement: true })
		.png({ compressionLevel: 9 })
		.toFile(outPath);
	console.log('Wrote', path.relative(root, outPath));
}

const gameplayDir = path.join(root, 'public/images/gameplay');
const blogDir = path.join(root, 'public/images/blog');
fs.mkdirSync(gameplayDir, { recursive: true });
fs.mkdirSync(blogDir, { recursive: true });

const urls = await fetchScreenshots();

for (const [name, idx] of GAMEPLAY_MAP) {
	await savePng(urls[idx] ?? urls[0], path.join(gameplayDir, `${name}.png`));
}

// Extra Steam shots as gameplay sources for unique blog crops (skip indices used above).
const usedIndices = new Set(GAMEPLAY_MAP.map(([, idx]) => idx));
for (let i = 0; i < urls.length; i++) {
	if (usedIndices.has(i)) continue;
	const name = `aion2-steam-${i}.png`;
	const out = path.join(gameplayDir, name);
	if (!fs.existsSync(out)) {
		await savePng(urls[i], out);
	}
}

for (const [name, idx] of BLOG_MAP) {
	await savePng(urls[idx] ?? urls[0], path.join(blogDir, `${name}.png`));
}

console.log('Aion 2 images ready. Run: npm run optimize:images');
