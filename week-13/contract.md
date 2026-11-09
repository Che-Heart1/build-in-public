# Integration Contract (generic skeleton — the real one stays private)

The UI can change freely. These seams cannot.
Break one of these and the pipeline breaks silently.

## What an integration contract defines

The load-bearing points where the UI meets the data layer —
the exact things that must stay intact across any redesign,
any frontend swap, any new client.

## Illustrative examples (not the real list)

- **Injection placeholder:** a comment token in the HTML that the build script
  replaces with generated content. Rename it and the build injects nothing.

- **Form attributes:** the handler depends on specific attribute values
  (action, method, field names). Change them and submissions break.

- **Generated markup structure:** classes and data attributes emitted by the
  build script that CSS and JS depend on. Hand-author them and you break the filter.

- **Head injection targets:** tags the build script stamps with the canonical URL.
  Remove them and the domain is never set correctly.

*(The real, complete seam list is intentionally omitted.
 The principle is the shareable part — not the working asset.)*

## The rule

Before any UI change: get the contract in writing.
After any UI change: verify every seam is intact.
Never break the plumbing to change the wallpaper.
