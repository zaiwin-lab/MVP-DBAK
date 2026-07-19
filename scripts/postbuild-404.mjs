#!/usr/bin/env node
/** Copies the rendered custom 404 route over the default out/404.html. */
import { copyFileSync, existsSync } from 'node:fs';

const src = 'out/404-page/index.html';
if (existsSync(src)) {
  copyFileSync(src, 'out/404.html');
  console.log('out/404.html ← custom 404 page');
} else {
  console.warn('Custom 404 route not found; default 404.html kept.');
}
