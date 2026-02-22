#!/usr/bin/env node

/**
 * Validate bridge YAML files against the JSON Schema
 * and run additional semantic checks.
 *
 * Usage: node build/validate.mjs
 */

import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import yaml from "js-yaml";
import Ajv from "ajv";
import addFormats from "ajv-formats";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

// --- Load schema ---
const schema = JSON.parse(
  readFileSync(resolve(ROOT, "bridge/schema/bridge-entry.schema.json"), "utf8")
);

// --- Load manifest ---
const manifest = yaml.load(
  readFileSync(resolve(ROOT, "bridge/manifest.yaml"), "utf8")
);

// --- Set up Ajv ---
const ajv = new Ajv({ allErrors: true, strict: false });
addFormats(ajv);
const validate = ajv.compile(schema);

let totalErrors = 0;

function error(msg) {
  console.error(`  ERROR: ${msg}`);
  totalErrors++;
}

function warn(msg) {
  console.warn(`  WARN: ${msg}`);
}

// --- Process each form in manifest ---
for (const form of manifest.forms) {
  const filePath = resolve(ROOT, "bridge", form.file);
  console.log(`\nValidating ${form.id} v${form.active_version} (${form.file})`);

  let entries;
  try {
    entries = yaml.load(readFileSync(filePath, "utf8"));
  } catch (e) {
    error(`Cannot read/parse ${filePath}: ${e.message}`);
    continue;
  }

  // --- JSON Schema validation ---
  const valid = validate(entries);
  if (!valid) {
    for (const err of validate.errors) {
      error(`Schema: ${err.instancePath} ${err.message}`);
    }
  }

  if (!Array.isArray(entries)) {
    error("File must contain a YAML array of entries");
    continue;
  }

  console.log(`  ${entries.length} entries loaded`);

  // --- Semantic checks ---
  const ids = new Set();
  const allIds = new Set(entries.map((e) => e.id));

  for (const entry of entries) {
    // 1. Unique IDs
    if (ids.has(entry.id)) {
      error(`Duplicate ID: ${entry.id}`);
    }
    ids.add(entry.id);

    // 2. Source consistency
    if (entry.source === null) {
      const allowedNullSource = [
        "voicepilot_addition",
        "derived",
        "workflow_only",
        "routing",
        "document_bound_brbc",
        "document_bound_section_r",
      ];
      if (!allowedNullSource.includes(entry.classification)) {
        error(
          `${entry.id}: source is null but classification is "${entry.classification}" (expected one of: ${allowedNullSource.join(", ")})`
        );
      }
    }

    // 3. Derived references
    if (entry.derived_from !== null && !allIds.has(entry.derived_from)) {
      error(
        `${entry.id}: derived_from references "${entry.derived_from}" which does not exist`
      );
    }

    // 4. Info text quality
    if (entry.info) {
      if (entry.info.summary && entry.info.summary.length > 500) {
        error(
          `${entry.id}: summary is ${entry.info.summary.length} chars (max 500)`
        );
      }
      if (entry.info.detail && entry.info.detail.length < 20) {
        error(
          `${entry.id}: detail is ${entry.info.detail.length} chars (min 20)`
        );
      }
    }

    // 5. No orphan deprecations
    if (entry.deprecated_in !== null && entry.added_in) {
      const dep = entry.deprecated_in.split(".").map(Number);
      const add = entry.added_in.split(".").map(Number);
      for (let i = 0; i < 3; i++) {
        if (dep[i] > add[i]) break;
        if (dep[i] < add[i]) {
          error(
            `${entry.id}: deprecated_in (${entry.deprecated_in}) is earlier than added_in (${entry.added_in})`
          );
          break;
        }
      }
    }
  }
}

// --- Summary ---
console.log(`\n${"=".repeat(40)}`);
if (totalErrors === 0) {
  console.log("Validation passed. No errors found.");
} else {
  console.error(`Validation failed with ${totalErrors} error(s).`);
  process.exit(1);
}
