#!/usr/bin/env node
/**
 * QA pass: screenshots of key pages at mobile and desktop widths, plus a
 * console-error check. Requires the static build to be served (npm start) and
 * a Chromium binary (CHROMIUM_PATH or the Playwright default).
 *
 * Usage: node scripts/qa-screenshots.mjs [baseUrl] [outDir]
 */
import { chromium } from 'playwright-core';
import { mkdirSync } from 'node:fs';

const BASE = process.argv[2] ?? 'http://localhost:8311';
const OUT = process.argv[3] ?? 'qa-screenshots';
const CHROMIUM =
  process.env.CHROMIUM_PATH ?? '/opt/pw-browsers/chromium/chrome-linux/chrome';

const pages = [
  ['home', '/'],
  ['kisah-kami', '/kisah-kami/'],
  ['rumah-batu', '/rumah-batu/'],
  ['pemulihan', '/pemulihan/'],
  ['waris-8', '/waris-8/'],
  ['aktiviti', '/aktiviti/'],
  ['galeri', '/galeri/'],
  ['berita', '/berita/'],
  ['sumber', '/sumber/'],
  ['turut-serta', '/turut-serta/'],
  ['hubungi', '/hubungi/'],
  ['en-home', '/en/'],
  ['404', '/tiada-halaman-ini/'],
];

const viewports = [
  ['mobile', { width: 375, height: 812 }],
  ['desktop', { width: 1440, height: 900 }],
];

mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch({ executablePath: CHROMIUM });
const errors = [];

for (const [vpName, viewport] of viewports) {
  const ctx = await browser.newContext({ viewport, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  page.on('console', (msg) => {
    // The 404 test page legitimately returns HTTP 404 for its own document.
    if (msg.type() === 'error' && !msg.text().includes('status of 404'))
      errors.push(`[${vpName}] ${page.url()}: ${msg.text()}`);
  });
  page.on('pageerror', (err) => errors.push(`[${vpName}] ${page.url()}: ${err.message}`));
  for (const [name, path] of pages) {
    await page.goto(`${BASE}${path}`, { waitUntil: 'networkidle' });
    // Force-load and decode every image so the full-page capture paints them.
    await page.evaluate(async () => {
      const imgs = Array.from(document.images);
      for (const img of imgs) img.loading = 'eager';
      await Promise.all(
        imgs.map((img) =>
          Promise.race([
            img.decode().catch(() => {}),
            new Promise((r) => setTimeout(r, 3000)),
          ])
        )
      );
    });
    await page.screenshot({
      path: `${OUT}/${name}-${vpName}.png`,
      fullPage: true,
    });
    console.log(`${name} @ ${vpName} ok`);
  }
  await ctx.close();
}

await browser.close();
if (errors.length) {
  console.error('\nConsole errors found:');
  for (const e of errors) console.error(' -', e);
  process.exit(1);
}
console.log('\nNo console errors.');
