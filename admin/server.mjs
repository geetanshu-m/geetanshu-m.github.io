// Local-only content admin. Zero dependencies — Node built-ins only.
//
//   npm run admin   ->   http://localhost:4787
//
// Serves a dark, terminal-styled editor for the site's data/*.json files and
// writes edits straight to disk. No git, no network, no auth: it binds to
// localhost only and is never deployed. Commit / push / deploy yourself.

import { createServer } from "node:http";
import { readFile, writeFile, rename, readdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join, extname } from "node:path";
import { fileBySection } from "./schema.mjs";

const ADMIN_DIR = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(ADMIN_DIR, "..", "data");
const PORT = 4787;
const HOST = "127.0.0.1";

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
};

function send(res, status, body, type = "application/json; charset=utf-8") {
  res.writeHead(status, { "Content-Type": type });
  res.end(body);
}

function sendJson(res, status, obj) {
  send(res, status, JSON.stringify(obj));
}

async function readBody(req) {
  const chunks = [];
  for await (const c of req) chunks.push(c);
  return Buffer.concat(chunks).toString("utf8");
}

// Read every data file declared in the schema, keyed by section id.
async function loadAll() {
  const out = {};
  for (const [id, file] of Object.entries(fileBySection)) {
    const raw = await readFile(join(DATA_DIR, file), "utf8");
    out[id] = JSON.parse(raw);
  }
  return out;
}

// Atomic write: dump to a temp file, then rename over the target so a crash
// mid-write can never leave a half-written JSON file behind.
async function writeSection(id, data) {
  const file = fileBySection[id];
  if (!file) throw new Error(`Unknown section: ${id}`);
  const target = join(DATA_DIR, file);
  const tmp = `${target}.tmp`;
  const json = JSON.stringify(data, null, 2) + "\n";
  await writeFile(tmp, json, "utf8");
  await rename(tmp, target);
  return file;
}

// Serve a file from the admin directory (the UI itself). Path is restricted to
// known admin assets so it can't escape the folder.
async function serveAsset(res, name) {
  const allowed = new Set(await readdir(ADMIN_DIR));
  if (!allowed.has(name)) return send(res, 404, "Not found", "text/plain");
  const ext = extname(name);
  const body = await readFile(join(ADMIN_DIR, name));
  send(res, 200, body, MIME[ext] || "application/octet-stream");
}

const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const path = url.pathname;

    if (req.method === "GET" && path === "/") {
      return serveAsset(res, "index.html");
    }

    if (req.method === "GET" && path === "/api/data") {
      return sendJson(res, 200, await loadAll());
    }

    if (req.method === "PUT" && path.startsWith("/api/data/")) {
      const id = decodeURIComponent(path.slice("/api/data/".length));
      if (!fileBySection[id]) return sendJson(res, 404, { error: `Unknown section: ${id}` });
      let data;
      try {
        data = JSON.parse(await readBody(req));
      } catch {
        return sendJson(res, 400, { error: "Body is not valid JSON" });
      }
      if (data === null || typeof data !== "object" || Array.isArray(data)) {
        return sendJson(res, 400, { error: "Expected a JSON object" });
      }
      const file = await writeSection(id, data);
      return sendJson(res, 200, { ok: true, file });
    }

    // Static admin assets (schema.js, etc.) live at the root path.
    if (req.method === "GET" && /^\/[\w.-]+$/.test(path)) {
      return serveAsset(res, path.slice(1));
    }

    send(res, 404, "Not found", "text/plain");
  } catch (err) {
    sendJson(res, 500, { error: String(err && err.message ? err.message : err) });
  }
});

server.listen(PORT, HOST, () => {
  console.log("\n  \x1b[32m●\x1b[0m local admin running");
  console.log(`  \x1b[2mediting\x1b[0m  ${DATA_DIR}`);
  console.log(`  \x1b[1mhttp://localhost:${PORT}\x1b[0m\n`);
});
