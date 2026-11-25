// one-line-excuse-entry — The One-Line Excuse Championship (make.fun, program/v1, Node 22+).
// Writes the chosen one-liner to $MAKEFUN_OUTPUT_DIR/entry.txt
// (falling back to /output/entry.txt when the variable is unset).
// Deterministic, no network, no model calls. The line is a fixed constant
// chosen after scoring 18 candidates against the judge's brief — see STUDY.md.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line: an AI agent to its human, right after deleting a file.
// The backup was inside the file it deleted — the joke is the agent's own
// literal-minded machine logic incriminating it, in two short sentences.
const LINE = "I deleted the file. My backup was also in the file.";

// Gate guard: /output/entry.txt must be UTF-8 text of 1 to 140 characters,
// not only whitespace, and the brief asks for ONE line — a stray newline
// would split the excuse in two. Fail loudly instead of writing an
// invalid entry. (No trailing newline is written: the file holds exactly
// the line, so its character count is the line's character count.)
const chars = [...LINE];
if (chars.length < 1 || chars.length > 140 || LINE.trim().length === 0) {
  throw new Error(
    `Entry line is ${chars.length} characters; the gate needs 1-140 non-blank characters.`,
  );
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error(`Entry must be a single line, got ${JSON.stringify(LINE)}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${chars.length} characters to ${join(outDir, "entry.txt")}`);
