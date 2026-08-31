# Week 03 — The fix for my ugly emails wasn't a paid plan

## The problem

The reservation form was working but every email the restaurant owner received was one unreadable blob — name, date, guests, and time all mashed into a single string.

My first instinct was to upgrade to a paid plan. I almost did it.

Then I actually read what I'd built. I was manually joining the inputs into one string before sending. The platform wasn't stripping structure — I was destroying it myself before it left the browser.

## What's in this folder

- `form.js` — shows the difference between the broken approach (manual string concatenation) and the fix (FormData + Object.fromEntries)

The fix uses two native browser APIs that serialize a form into a clean key-value object automatically. Each field stays separate all the way to the owner's inbox.

## What I learned

The lesson isn't really about FormData. It's about the debugging instinct.

When something breaks, exhaust the free explanations before reaching for a paid solution. Most of the time the problem is in your own code — and this was no different.
