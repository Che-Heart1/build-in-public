// sanity.config.js (skeleton — per client, only the projectId changes)
// This is what "one engine, many clients" looks like at the config level.
// The schema, the dataset name, the studio structure — all identical.
// The only thing that changes is the projectId.

import { defineConfig } from "sanity";
import { schemaTypes } from "./schemaTypes"; // your generic schema — stays the same

export default defineConfig({
  projectId: "REPLACE_WITH_CLIENT_PROJECT_ID", // ← only this changes per client
  dataset: "production",
  schema: {
    types: schemaTypes,
  },
});

// New client onboarding:
// 1. Create a new Sanity project (gets a new projectId)
// 2. Replace the projectId above
// 3. Deploy the studio: npx sanity deploy
// 4. Point the build script at the same projectId
// Done. Same schema, same pipeline, new client.
