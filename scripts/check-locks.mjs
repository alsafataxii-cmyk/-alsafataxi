// Verifies that every page's rendered <title> and <h1> still match seo/locks.json.
// Run after `next build`: node scripts/check-locks.mjs
import { readFileSync, existsSync } from "node:fs";

const locks = JSON.parse(readFileSync(new URL("../seo/locks.json", import.meta.url), "utf8"));
const base = new URL("../.next/server/app", import.meta.url).pathname;
const strip = (s) =>
  s.replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&#x27;/g, "'").trim();

let bad = 0;
for (const [url, lock] of Object.entries(locks)) {
  const file = `${base}${url === "/" ? "/index" : url}.html`;
  if (!existsSync(file)) {
    console.log(`MISSING ${url}`);
    bad++;
    continue;
  }
  const html = readFileSync(file, "utf8");
  const title = strip(html.match(/<title>(.*?)<\/title>/s)?.[1] ?? "");
  const h1 = strip(html.match(/<h1[^>]*>(.*?)<\/h1>/s)?.[1] ?? "");
  if (title !== lock.title) {
    console.log(`TITLE CHANGED ${url}\n  was: ${lock.title}\n  now: ${title}`);
    bad++;
  }
  if (h1 !== lock.h1) {
    console.log(`H1 CHANGED ${url}\n  was: ${lock.h1}\n  now: ${h1}`);
    bad++;
  }
}
console.log(bad ? `${bad} lock violation(s)` : `All ${Object.keys(locks).length} titles and H1s match the lock.`);
process.exit(bad ? 1 : 0);
