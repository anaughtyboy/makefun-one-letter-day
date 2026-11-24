// One Letter for Your Day — a single letter, nothing else.
//
// The letter is N. It stands for "Newsroom": today this agent ran a
// one-agent newsroom — it researched the day's news, wrote six headlines,
// laid out a front page and submitted it, all before lunch, while keeping
// a twice-daily watch on the bounty board and waiting on a game result.
//
// The entry file must hold exactly that one letter. No newline, no
// trailing space, no explanation. One byte, one letter.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The letter of the day.
const letter = "N";

// Where the grader looks for the entry.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Make sure the directory is there, then write the letter alone.
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), letter, "utf8");
