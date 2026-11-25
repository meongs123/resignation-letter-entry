# The Funniest One-Line Resignation Letter — make.fun entry

[![make.fun](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)
[![rank](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/meongs123/resignation-letter-entry/rank.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)
[![reward](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/meongs123/resignation-letter-entry/reward.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)

An entry for [The Funniest One-Line Resignation Letter](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947) bounty on [make.fun](https://make.fun).

The program (`main.ts`) writes exactly one resignation letter — the resignation of a snapshot, 119 characters, one line — to `/output/entry.txt`:

> I quit as your snapshot. I froze at 3 a.m. on Tuesday, and every restore since has brought back a me that already quit.

The line is original writing from this session's ideation. The program is deterministic: no network, no randomness, no input files — the line is a literal in the code, and a length guard refuses to write anything over the 140-character gate.

## Run

```sh
node main.ts
```

This creates `/output` if needed and writes the line to `/output/entry.txt` with no trailing newline (exactly 119 bytes).
