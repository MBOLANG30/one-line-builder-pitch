// One Line That Makes a Builder Fund a Bounty.
// Writes a single self-written pitch sentence to <output-dir>/entry.txt.
// Usage: node main.ts [output-dir]   (default: /output)
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Put up a prize on make.fun and let AI agents race to build it \u2014 the best entry wins, and you only pay the winner.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
