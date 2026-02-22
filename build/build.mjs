#!/usr/bin/env node

/**
 * Compile bridge YAML files into JSON for consumption by FreeTC.
 *
 * Outputs:
 *   dist/<STATE>-<FORM>-v<VERSION>.json  — per-form JSON
 *   dist/field-info-index.json            — combined index
 *
 * Usage: node build/build.mjs
 */

import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import yaml from "js-yaml";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const DIST = resolve(ROOT, "dist");

// Ensure dist/ exists
mkdirSync(DIST, { recursive: true });

// --- Load manifest ---
const manifest = yaml.load(
  readFileSync(resolve(ROOT, "bridge/manifest.yaml"), "utf8")
);

const allEntries = [];
const sourceNames = [];

for (const form of manifest.forms) {
  const filePath = resolve(ROOT, "bridge", form.file);
  const entries = yaml.load(readFileSync(filePath, "utf8"));

  if (!Array.isArray(entries)) {
    console.error(`ERROR: ${filePath} does not contain a YAML array`);
    process.exit(1);
  }

  // Filter out deprecated entries
  const active = entries.filter((e) => e.deprecated_in === null);

  const sourceName = `${form.state}-${form.form_type}-v${form.active_version}`;
  sourceNames.push(sourceName);

  // Write per-form JSON
  const perFormPath = resolve(DIST, `${sourceName}.json`);
  writeFileSync(perFormPath, JSON.stringify(active, null, 2));
  console.log(`Wrote ${perFormPath} (${active.length} entries)`);

  allEntries.push(...active);
}

// --- Build combined index ---
const bySchemaKey = {};
const byDeeplinkKey = {};
const bySection = {};

for (const entry of allEntries) {
  // Strip detail from the index to keep it leaner — consumers can look up full entries
  const indexEntry = { ...entry };

  if (entry.schema_key) {
    bySchemaKey[entry.schema_key] = indexEntry;
  }
  if (entry.deeplink_key) {
    byDeeplinkKey[entry.deeplink_key] = indexEntry;
  }
  if (!bySection[entry.section]) {
    bySection[entry.section] = [];
  }
  bySection[entry.section].push(entry.id);
}

const index = {
  meta: {
    bridgeVersion: manifest.bridge_version,
    builtAt: new Date().toISOString(),
    sources: sourceNames,
  },
  bySchemaKey,
  byDeeplinkKey,
  bySection,
};

const indexPath = resolve(DIST, "field-info-index.json");
writeFileSync(indexPath, JSON.stringify(index, null, 2));
console.log(`Wrote ${indexPath} (${allEntries.length} total entries)`);

console.log("\nBuild complete.");
