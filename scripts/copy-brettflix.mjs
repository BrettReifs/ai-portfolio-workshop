/**
 * copy-brettflix.mjs
 *
 * Copies examples/netflix-example → dist/brettflix after the Slidev build.
 * Run via: node scripts/copy-brettflix.mjs
 * (called automatically by npm run build:vercel)
 */

import { cpSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const src  = join(root, 'examples', 'netflix-example');
const dest = join(root, 'dist', 'brettflix');

if (!existsSync(join(root, 'dist'))) {
  console.error('dist/ not found — run slidev build first.');
  process.exit(1);
}

cpSync(src, dest, {
  recursive: true,
  // Skip docs — only ship presentable files
  filter: srcPath => !srcPath.endsWith('.md'),
});

console.log('brettflix → dist/brettflix  ✓');
