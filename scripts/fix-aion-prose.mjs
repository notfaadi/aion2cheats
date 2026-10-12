import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const SKIP = new Set(['node_modules', '.git', 'dist', '.astro']);
const EXT = new Set(['.astro', '.ts', '.tsx', '.js', '.mjs', '.json', '.md']);

const REPLACEMENTS = [
	['Aion 2 client Aion 2', 'Aion 2'],
	['Aion 2 client PC', 'PC Aion 2'],
	['through Aion 2 client', 'through the NCsoft launcher'],
	['Aion 2 client on', 'Aion 2 on'],
	['Aion 2 client account', 'game account'],
	['Aion 2 client build', 'game client build'],
	['Aion 2 client version', 'client version'],
	['Aion 2 client folder', 'game install folder'],
	['Aion 2 client inventory', 'in-game inventory'],
	['Aion 2 client store', 'in-game store'],
	['Aion 2 client purchases', 'in-game purchases'],
	['Aion 2 client restrictions', 'account restrictions'],
	['Aion 2 client file verification', 'game file verification'],
	['verify Aion 2 files through Aion 2 client', 'verify game files through the launcher'],
	['exiting Aion 2 client', 'exiting the launcher'],
	['Aion 2 client launch', 'game launch'],
	['In Aion 2 client, right-click Aion 2', 'In the NCsoft launcher, select Aion 2'],
	['Aion 2 client', 'the game client'],
	['fresh the game client accounts', 'fresh game accounts'],
	['the game client account', 'game account'],
	['dota cheat', 'aion 2 cheat'],
	['dota cheats', 'aion 2 cheats'],
];

function walk(dir, files = []) {
	for (const name of fs.readdirSync(dir)) {
		if (SKIP.has(name)) continue;
		const full = path.join(dir, name);
		if (fs.statSync(full).isDirectory()) walk(full, files);
		else if (EXT.has(path.extname(name).toLowerCase())) files.push(full);
	}
	return files;
}

let n = 0;
for (const file of walk(path.join(root, 'src'))) {
	let text = fs.readFileSync(file, 'utf8');
	const before = text;
	for (const [from, to] of REPLACEMENTS) {
		text = text.split(from).join(to);
	}
	if (text !== before) {
		fs.writeFileSync(file, text);
		n++;
	}
}
console.log(`Prose cleanup: ${n} files.`);
