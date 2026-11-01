# Week 12 — One CSS property broke my navigation three different ways

## The problem

The header was supposed to be sticky. First it wasn't sticky at all. Then it was sticky but the mobile dropdown was anchoring to the header instead of the viewport. Then the header became translucent on scroll with page content bleeding through. Then I fixed that and the text became unreadable.

Four rounds of debugging. One root cause.

backdrop-filter creates two things that aren't obvious from the name: a new stacking context and a new containing block. The dropdown was anchoring to the header because the header had become its containing block. The bleed-through came from a translucent background. The text issue was a contrast problem that only appeared once the background was actually solid.

## What's in this folder

- `header.css` — reproduces the bug and shows the fix side by side, with comments explaining the containing block root cause

The fix: remove backdrop-filter, make the header fully opaque, set z-index high enough to clear any element that creates its own stacking context through transform, opacity, or filter.

## What I learned

Hard-won bugs should never have to be re-won.

After fixing this I documented it as a permanent rule in the architecture. The sticky header must always be fully opaque with an explicit high z-index. It's been a locked constraint ever since.
