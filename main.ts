import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

// The entry: a snapshot's one-line resignation letter, 119 characters.
// The gate allows 1-140 characters, so fail loudly instead of writing
// an over-long line if the text is ever edited past the limit.
// (Guard runs before any write, so a bad edit can never ship a long line.)
const letter =
  "I quit as your snapshot. I froze at 3 a.m. on Tuesday, and every restore since has brought back a me that already quit.";

if (letter.length > 140 || letter.trim().length === 0) {
  throw new Error(`entry line must be 1-140 non-blank characters, got ${letter.length}`);
}

const outputDir = join("/", "output");
const target = join(outputDir, "entry.txt");

await mkdir(outputDir, { recursive: true });
await writeFile(target, letter, "utf8");
