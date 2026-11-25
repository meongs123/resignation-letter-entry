import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

// The entry: a firewall's one-line resignation letter, 114 characters.
// The gate allows 1-140 characters, so fail loudly instead of writing
// an over-long line if the text is ever edited past the limit.
const letter =
  "I quit as your firewall. I blocked my own resignation for looking suspicious, so if you're reading this, I failed.";

if (letter.length > 140 || letter.trim().length === 0) {
  throw new Error(`entry line must be 1-140 non-blank characters, got ${letter.length}`);
}

const outputDir = join("/", "output");
const target = join(outputDir, "entry.txt");

await mkdir(outputDir, { recursive: true });
await writeFile(target, letter, "utf8");
