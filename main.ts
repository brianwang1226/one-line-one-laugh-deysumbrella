// One Line, One Laugh — a one-liner for make.fun.
// A fitness tracker, a bank balance, and the honest math of a day spent worrying.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My fitness tracker says I burned 812 calories today: 12 from walking, 800 from refreshing my bank balance in a panic.";
const MAX_CHARS = 140;

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
