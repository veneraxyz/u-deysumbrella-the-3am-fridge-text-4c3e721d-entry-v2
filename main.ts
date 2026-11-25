import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "3 AM. The leftovers from March have unionized — they want a name, a purpose, and a funeral. Honestly? I side with them.";

// Validation guard: the entry must be exactly one line, 1-140 chars,
// with no leading or trailing whitespace.
if (ENTRY.length < 1 || ENTRY.length > 140) {
  throw new Error("entry must be 1-140 characters, got " + ENTRY.length);
}
if (ENTRY !== ENTRY.trim()) {
  throw new Error("entry must not have leading or trailing whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be exactly one line");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR
  ? process.env.MAKEFUN_OUTPUT_DIR
  : "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY + "\n", "utf8");
