/**
 * One visually distinct 16:9 blog hero PNG per post slug.
 * Sources: all Aion 2 Steam screenshots + gameplay PNGs + extra crops from Steam cache.
 * Run: node scripts/generate-blog-images.mjs && npm run optimize:images
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import sharp from 'sharp';

const APP_ID = '3393110';
const root = process.cwd();
const blogDir = path.join(root, 'public/images/blog');
const gameplayDir = path.join(root, 'public/images/gameplay');

function slugsFromFile(relativePath) {
  const text = fs.readFileSync(path.join(root, relativePath), 'utf8');
  return [...text.matchAll(/slug: '([^']+)'/g)].map((m) => m[1]);
}

const SLUGS = [...new Set([...slugsFromFile('src/data/blog/posts.ts'), ...slugsFromFile('src/data/blog/seo-posts.ts')])].sort(
  (a, b) => a.localeCompare(b),
);

const CROP_VARIANTS = [
  { left: 0, top: 0, width: 0.78, height: 0.78 },
  { left: 0.22, top: 0, width: 0.78, height: 0.78 },
  { left: 0.12, top: 0.06, width: 0.76, height: 0.78 },
  { left: 0, top: 0.14, width: 0.88, height: 0.72 },
  { left: 0.18, top: 0, width: 0.82, height: 0.78 },
  { left: 0.06, top: 0.1, width: 0.86, height: 0.76 },
  { left: 0.24, top: 0.04, width: 0.74, height: 0.82 },
  { left: 0.04, top: 0.04, width: 0.92, height: 0.68 },
  { left: 0.1, top: 0.2, width: 0.8, height: 0.7 },
  { left: 0.3, top: 0.12, width: 0.7, height: 0.76 },
  { left: 0, top: 0.08, width: 0.65, height: 0.85 },
  { left: 0.35, top: 0, width: 0.65, height: 0.85 },
];

function hashSlug(slug) {
  const buf = crypto.createHash('sha256').update(slug).digest();
  return buf.readUInt32BE(0);
}

async function fetchSteamScreenshotUrls() {
  const res = await fetch(`https://store.steampowered.com/api/appdetails?appids=${APP_ID}&l=english`);
  const json = await res.json();
  const data = json[APP_ID]?.data;
  const shots = data?.screenshots ?? [];
  const urls = shots.map((s) => s.path_full);
  if (data?.header_image) urls.push(data.header_image);
  if (data?.background) urls.push(data.background);
  return [...new Set(urls)];
}

async function downloadSteamSources(urls, cacheDir) {
  fs.mkdirSync(cacheDir, { recursive: true });
  const out = [];
  for (let i = 0; i < urls.length; i++) {
    const outPath = path.join(cacheDir, `steam-${i}.png`);
    if (!fs.existsSync(outPath)) {
      const res = await fetch(urls[i]);
      if (!res.ok) {
        console.warn(`Skip Steam image ${i}: ${res.status}`);
        continue;
      }
      const buf = Buffer.from(await res.arrayBuffer());
      await sharp(buf)
        .resize({ width: 1920, withoutEnlargement: true })
        .png({ compressionLevel: 9 })
        .toFile(outPath);
    }
    if (fs.existsSync(outPath)) out.push(outPath);
  }
  return out;
}

function gameplaySourcePool() {
  if (!fs.existsSync(gameplayDir)) return [];
  return fs
    .readdirSync(gameplayDir)
    .filter((file) => file.endsWith('.png') && file.startsWith('aion2-'))
    .map((file) => path.join(gameplayDir, file))
    .sort((a, b) => a.localeCompare(b));
}

/** Extra virtual sources: same file, pre-defined secondary crops baked at render time via variant index. */
function assignUniqueJobs(slugs, poolLength) {
  const variantCount = CROP_VARIANTS.length;
  const flipOptions = 2;
  const slotCount = poolLength * variantCount * flipOptions;
  const used = new Set();
  const jobs = [];

  for (const slug of slugs) {
    let seed = hashSlug(slug);
    let attempt = 0;
    while (attempt < slotCount + 100) {
      const slot = (seed + attempt) % slotCount;
      const flip = Math.floor(slot / (poolLength * variantCount)) % flipOptions;
      const rem = slot % (poolLength * variantCount);
      const variantIndex = rem % variantCount;
      const sourceIndex = Math.floor(rem / variantCount) % poolLength;
      const key = `${sourceIndex}:${variantIndex}:${flip}`;
      if (!used.has(key)) {
        used.add(key);
        jobs.push({ slug, sourceIndex, variantIndex, flip: flip === 1 });
        break;
      }
      attempt++;
    }
    if (jobs.length < slugs.indexOf(slug) + 1) {
      throw new Error(`Could not assign unique image job for ${slug}`);
    }
  }
  return jobs;
}

async function renderBlogHero(sourcePath, outPath, variantIndex, flip) {
  const meta = await sharp(sourcePath).metadata();
  const w = meta.width ?? 1600;
  const h = meta.height ?? 900;
  const crop = CROP_VARIANTS[variantIndex % CROP_VARIANTS.length];
  const left = Math.floor(w * crop.left);
  const top = Math.floor(h * crop.top);
  const width = Math.min(Math.floor(w * crop.width), w - left);
  const height = Math.min(Math.floor(h * crop.height), h - top);

  let pipeline = sharp(sourcePath).extract({ left, top, width, height }).resize(1600, 900, {
    fit: 'cover',
    position: 'attention',
  });

  if (flip) pipeline = pipeline.flop();

  pipeline = pipeline.modulate({
    brightness: 0.9 + (variantIndex % 7) * 0.025,
    saturation: 0.92 + (variantIndex % 4) * 0.04,
  });

  await pipeline.png({ compressionLevel: 9 }).toFile(outPath);
}

async function main() {
  if (!SLUGS.length) throw new Error('No blog slugs found');

  fs.mkdirSync(blogDir, { recursive: true });

  const steamUrls = await fetchSteamScreenshotUrls();
  console.log(`Steam assets: ${steamUrls.length} URL(s)`);
  const cacheDir = path.join(root, '.cache/aion2-steam-shots');
  const steamFiles = steamUrls.length ? await downloadSteamSources(steamUrls, cacheDir) : [];
  const gameplayFiles = gameplaySourcePool();
  const pool = [...steamFiles, ...gameplayFiles];

  if (!pool.length) throw new Error('No source images — run: node scripts/fetch-aion2-images.mjs');

  const jobs = assignUniqueJobs(SLUGS, pool.length);
  console.log(`Generating ${jobs.length} unique blog heroes from ${pool.length} base sources…`);

  for (const job of jobs) {
    const source = pool[job.sourceIndex];
    const outPath = path.join(blogDir, `${job.slug}.png`);
    await renderBlogHero(source, outPath, job.variantIndex, job.flip);
    console.log(
      `  ${job.slug}.png ← ${path.basename(source)} crop#${job.variantIndex}${job.flip ? ' flip' : ''}`,
    );
  }

  const hashes = new Map();
  for (const job of jobs) {
    const outPath = path.join(blogDir, `${job.slug}.png`);
    const buf = fs.readFileSync(outPath);
    const hash = crypto.createHash('md5').update(buf).digest('hex');
    if (hashes.has(hash)) {
      console.warn(`WARNING: ${job.slug} matches ${hashes.get(hash)} (identical file)`);
    } else {
      hashes.set(hash, job.slug);
    }
  }

  console.log(`Unique MD5 hashes: ${hashes.size}/${jobs.length}`);
  console.log('Done. Run: npm run optimize:images');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
