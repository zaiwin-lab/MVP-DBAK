#!/usr/bin/env node
/**
 * Optimises curated originals from assets-original/ into public/images/.
 * Emits WebP + JPEG fallback at responsive widths and writes
 * src/content/image-manifest.json with intrinsic dimensions so pages can
 * reserve space (no layout shift).
 *
 * Usage: npm run images
 */
import sharp from 'sharp';
import { readdirSync, mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const SRC = 'assets-original';
const OUT = 'public/images';
const WIDTHS = [320, 640, 960, 1280];

// Derived crops: sourceFile -> { name, region }
const CROPS = [
  {
    src: 'majlis-2020-invite.png',
    name: 'rumah-batu-2020',
    region: { left: 44, top: 46, width: 182, height: 182 },
  },
];

mkdirSync(OUT, { recursive: true });

const manifest = {};

async function emit(name, pipelineFactory, dims) {
  // sharp().metadata() reports the *input* file, so derived crops pass their
  // real output dimensions explicitly.
  const meta = dims ?? (await pipelineFactory().metadata());
  const widths = WIDTHS.filter((w) => w <= meta.width);
  if (widths.length === 0) widths.push(meta.width);
  const entry = { width: meta.width, height: meta.height, widths: [] };
  for (const w of widths) {
    await pipelineFactory()
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: 78 })
      .toFile(path.join(OUT, `${name}-${w}.webp`));
    await pipelineFactory()
      .resize({ width: w, withoutEnlargement: true })
      .jpeg({ quality: 80, mozjpeg: true })
      .toFile(path.join(OUT, `${name}-${w}.jpg`));
    entry.widths.push(w);
  }
  manifest[name] = entry;
  console.log(`${name}: ${entry.widths.join(', ')}w`);
}

for (const file of readdirSync(SRC).sort()) {
  if (!/\.(jpe?g|png)$/i.test(file)) continue;
  const name = file.replace(/\.(jpe?g|png)$/i, '');
  const full = path.join(SRC, file);
  await emit(name, () => sharp(full).flatten({ background: '#ffffff' }));
}

for (const crop of CROPS) {
  const full = path.join(SRC, crop.src);
  await emit(
    crop.name,
    () => sharp(full).extract(crop.region).flatten({ background: '#ffffff' }),
    { width: crop.region.width, height: crop.region.height }
  );
}

mkdirSync('src/content', { recursive: true });
writeFileSync(
  'src/content/image-manifest.json',
  JSON.stringify(manifest, null, 2) + '\n'
);
console.log('Wrote src/content/image-manifest.json');
