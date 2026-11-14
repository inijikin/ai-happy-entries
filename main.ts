// ai-happy-01 entry (Node 22, standard library only).
// The entry image sits beside this file as entry.png; the program
// writes those exact bytes to /output/entry.png for the grader to judge.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
// An empty MAKEFUN_OUTPUT_DIR means the same as an unset one.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outDir, { recursive: true });
// The file is named entry.png either way; the gate tells PNG from JPEG
// by the bytes themselves, and these bytes are a JPEG.
writeFileSync(join(outDir, 'entry.png'), readFileSync(join(here, 'entry.png')));
