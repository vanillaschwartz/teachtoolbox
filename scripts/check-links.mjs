// Usage: npm run check-links  (403/429 often = bot blocking; verify manually)
import { readFileSync } from "fs";
const src = readFileSync(new URL("../src/lib/data.ts", import.meta.url), "utf8");
const urls = [...src.matchAll(/url: "(https?:[^"]+)"/g)].map((m) => m[1]);
for (const u of urls) {
  try { const r = await fetch(u, { redirect: "follow", headers: { "user-agent": "Mozilla/5.0" }, signal: AbortSignal.timeout(20000) });
    console.log(r.status, u, r.url !== u ? `-> ${r.url}` : ""); } catch (e) { console.log("FAIL", u, e.message); }
}
