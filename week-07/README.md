# Week 07 — The build script that almost ate my own source code

## The problem

The first version of the build script read index.html, injected the menu, and wrote the result back to the same file.

It worked once. The second run had a problem: the placeholder the script was looking for had already been replaced by the previous run's output. The script had eaten its own template.

Nothing was lost because I caught it early. But the pattern was completely wrong.

## What's in this folder

- `build.js` — shows the src/dist separation: the build wipes dist/, copies src/ into it, then transforms dist/ only

src/ is what you write. dist/ is what the build makes. They never touch each other.

## What I learned

Generated output should always be disposable. The moment a pipeline starts modifying its own source, you've lost the ability to rebuild reliably from scratch.

This is one of those things that feels obvious once you've broken it. The fix is permanent — src/ has never been touched by the build since.
