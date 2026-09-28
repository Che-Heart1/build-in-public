// build.js — the immutable source pattern
// src/ is what you write. dist/ is what the build makes. They never mix.

import { cp, rm } from "node:fs/promises";

// Step 1: wipe dist/ completely — it's disposable, always regenerated fresh
await rm("dist", { recursive: true, force: true });

// Step 2: copy the pristine source into dist/
// src/ is never written to — the <!--MENU--> placeholder stays intact forever
await cp("src", "dist", { recursive: true });

// Step 3: now transform dist/ only
// Run the Week 06 injection against dist/index.html
// src/index.html is untouched and ready for the next build

// ❌ The old (broken) way:
// const template = await readFile("index.html", "utf8");         // reading source
// await writeFile("index.html", output);                         // overwriting source
// Second run: <!--MENU--> is gone, replaced by last run's output. Pipeline breaks.

// ✅ The fix:
// readFile("src/index.html")   — read from source, never modify it
// writeFile("dist/index.html") — write to output only
