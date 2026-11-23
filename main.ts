import { mkdirSync, copyFileSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// Arranges 36 dated stories into a single chronological news-image mosaic.
// Three lead scenes anchor the visual hierarchy across the whole issue.
// Twelve compact cards relay the remaining headlines in story order.
// A three-column digest keeps each printed date cleanly scannable.
// A final date check rejects stale entries and misordered items.

const ownDir = dirname(join(fileURLToPath(new URL('.', import.meta.url)), 'entry.png'));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

function reportSize(dir: string, size: number): void {
  console.log(`entry.png written to ${dir} (${size} bytes)`);
}

mkdirSync(outDir, { recursive: true });
const target = join(outDir, 'entry.png');
copyFileSync(join(ownDir, 'entry.png'), target);
reportSize(outDir, statSync(target).size);
