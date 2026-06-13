// Smoke test for the local admin server. Boots the server, exercises the API,
// and verifies a write round-trips without corrupting data.
//
//   node admin/smoke.mjs
//
// It writes each data file back with its own current contents, so the files
// are left byte-for-byte unchanged (aside from normalized 2-space formatting,
// which is also how the admin saves them).

import { spawn } from "node:child_process";
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ADMIN_DIR = dirname(fileURLToPath(import.meta.url));
const SETTINGS_PATH = join(ADMIN_DIR, "..", "data", "settings.json");
const BASE = "http://127.0.0.1:4787";
let failures = 0;

function check(name, cond) {
  console.log(`${cond ? "  \x1b[32m✓\x1b[0m" : "  \x1b[31m✗\x1b[0m"} ${name}`);
  if (!cond) failures++;
}

async function waitForServer(tries = 40) {
  for (let i = 0; i < tries; i++) {
    try {
      const r = await fetch(`${BASE}/api/data`);
      if (r.ok) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 100));
  }
  throw new Error("server did not start");
}

// Capture the exact bytes of settings.json so the write test can restore them
// and leave the working tree clean.
const settingsBackup = await readFile(SETTINGS_PATH, "utf8");

const server = spawn("node", [join(ADMIN_DIR, "server.mjs")], { stdio: "ignore" });

try {
  await waitForServer();

  const all = await (await fetch(`${BASE}/api/data`)).json();
  const ids = ["settings", "about", "experience", "projects", "writing"];
  check("GET /api/data returns all 5 sections", ids.every((id) => id in all));
  check("settings has a menu array", Array.isArray(all.settings.menu));
  check("experience has items", Array.isArray(all.experience.items) && all.experience.items.length > 0);

  // Round-trip: write settings back unchanged, re-read, compare.
  const put = await fetch(`${BASE}/api/data/settings`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(all.settings),
  });
  check("PUT /api/data/settings succeeds", put.ok);
  const reread = await (await fetch(`${BASE}/api/data`)).json();
  check("settings round-trips identically", JSON.stringify(reread.settings) === JSON.stringify(all.settings));

  // Unknown section is rejected.
  const bad = await fetch(`${BASE}/api/data/nope`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: "{}",
  });
  check("unknown section is rejected (404)", bad.status === 404);

  // Non-object body is rejected.
  const badBody = await fetch(`${BASE}/api/data/settings`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: "[]",
  });
  check("array body is rejected (400)", badBody.status === 400);

  check("index.html is served", (await fetch(`${BASE}/`)).ok);
  check("schema.mjs is served", (await fetch(`${BASE}/schema.mjs`)).ok);
} catch (err) {
  console.error("  \x1b[31m✗\x1b[0m", err.message);
  failures++;
} finally {
  server.kill();
  // Restore settings.json to its original bytes (the write test reformats it).
  await writeFile(SETTINGS_PATH, settingsBackup, "utf8");
}

console.log(failures ? `\n  ${failures} check(s) failed\n` : "\n  all checks passed\n");
process.exit(failures ? 1 : 0);
