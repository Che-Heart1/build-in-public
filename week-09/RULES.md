# PROJECT RULES (generic skeleton — the real file stays private)

## 0. Operating rules
- How the agent should behave each session.
- What it must never do or suggest.
- What requires explicit approval before proceeding.

## 1. Architecture (locked)
- Stack: <defined and locked — agent does not suggest alternatives>
- Data flow: <how data moves from source to browser>
- Build process: <when and how the build runs>

## 2. Integration contract (do not break)
- The load-bearing seams between UI and data layer live here.
- Breaking these silently breaks the pipeline.
- Every edit must preserve these seams.

## 3. Compliance
- Privacy policy templated per jurisdiction.
- Processors named per client (form handler, hosting, analytics if enabled).
- Jurisdiction-specific requirements noted here.

## 4. Build & deploy
- Build command: <defined here>
- Output directory: <defined here>
- Env vars: <what lives where>

## 5. Per-client customization surface
- Only these things change per client: <listed here>
- Everything else is locked.
