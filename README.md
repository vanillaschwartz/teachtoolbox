# TeachToolbox

Free directory of tech & AI tools for elementary (K–5) teachers. Next.js 14 (App Router) + TypeScript + Tailwind, statically generated.

## Run
```
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
npm run check-links
```
Optional env: `NEXT_PUBLIC_SITE_URL` (canonical URL for sitemap/OG; defaults to https://teachtoolbox.vercel.app).

## Structure
- `src/lib/data.ts` – ALL content: categories, tools, site name. Add a tool = add one object.
- `src/app/` – pages (home, `category/[slug]`, `tools/[slug]`, `ai-for-teachers`, `submit`, `sponsor`, `about`), `sitemap.ts`, `robots.ts`.
- `src/app/api/subscribe` – PLACEHOLDER newsletter endpoint (validates, logs, writes to a temp file; NOT durable, sends nothing).

## Deploy
`vercel --prod` (project `teachtoolbox`). Pushing to GitHub does not auto-deploy unless the repo is connected in Vercel.

## Content-update checklist
- [ ] Verify the tool's URL loads (`npm run check-links`; 403/429 can be bot-blocking, confirm in a browser)
- [ ] Confirm what it does, grade range, and pricing on the vendor site. Use "Free tier available" unless pricing is verified
- [ ] Privacy note: link-neutral wording, "check with your district", no legal claims; only repeat vendor compliance claims as "states…"
- [ ] Pick a category; set `ai: true` for AI tools
- [ ] Unique slug; `npm run build`
- [ ] Label any sponsored/affiliate link clearly (not set up yet)
- [ ] Commit, push, deploy; check /sitemap.xml

## TODO (needs owner)
Stripe payment link for sponsors, Resend (or similar) + durable store for newsletter, custom domain, real contact email (currently `hello@teachtoolbox.example` placeholder), TPT links.
