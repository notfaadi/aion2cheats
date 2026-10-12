/**
 * One-time rebrand: DotaCheats template → Aion 2 (aion2cheat.org)
 */
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');

const REPLACEMENTS = [
	['dotacheats.com', 'aion2cheat.org'],
	['DotaCheats', 'Aion2Cheat'],
	['dota-2-cheats', 'aion-2-cheats'],
	['Dota 2', 'Aion 2'],
	['dota 2', 'aion 2'],
	['Dota cheats', 'Aion 2 cheats'],
	['dota cheats', 'aion 2 cheats'],
	['Valve Terms of Use', 'NCsoft Terms of Service'],
	['Valve anti-cheat', 'NCsoft anti-cheat'],
	['Valve', 'NCsoft'],
	['VAC bans', 'account bans'],
	['VAC update', 'anti-cheat update'],
	['VAC', 'anti-cheat'],
	['via Steam', 'via the official client'],
	['Steam platform', 'game client'],
	['Steam ranked', 'ranked PvP'],
	['on Steam', 'on PC'],
	['Steam with', 'client with'],
	['Steam', 'Aion 2 client'],
	['Turbo', 'Instanced PvP'],
	['All Pick', 'Open World'],
	['Captains Mode', 'Legion Raids'],
	['Ranked', 'PvP'],
];

const SKIP_DIRS = new Set(['node_modules', '.git', 'dist', '.astro']);
const EXT = new Set([
	'.astro',
	'.ts',
	'.tsx',
	'.js',
	'.mjs',
	'.json',
	'.md',
	'.txt',
	'.svg',
	'.html',
	'.css',
	'.yaml',
	'.yml',
]);

function walk(dir, files = []) {
	for (const name of fs.readdirSync(dir)) {
		if (SKIP_DIRS.has(name)) continue;
		const full = path.join(dir, name);
		const st = fs.statSync(full);
		if (st.isDirectory()) walk(full, files);
		else if (EXT.has(path.extname(name).toLowerCase())) files.push(full);
	}
	return files;
}

function applyReplacements(text) {
	let out = text;
	for (const [from, to] of REPLACEMENTS) {
		out = out.split(from).join(to);
	}
	return out;
}

const productsDir = path.join(root, 'src', 'pages', 'products', 'dota-2-cheats');
const aionDir = path.join(root, 'src', 'pages', 'products', 'aion-2-cheats');
if (fs.existsSync(productsDir) && !fs.existsSync(aionDir)) {
	fs.renameSync(productsDir, aionDir);
	console.log('Renamed products/dota-2-cheats → aion-2-cheats');
}

let changed = 0;
for (const file of walk(root)) {
	if (file.includes(`${path.sep}scripts${path.sep}rebrand-to-aion.mjs`)) continue;
	const before = fs.readFileSync(file, 'utf8');
	const after = applyReplacements(before);
	if (after !== before) {
		fs.writeFileSync(file, after, 'utf8');
		changed++;
	}
}
console.log(`Updated ${changed} files.`);
