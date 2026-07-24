# Heritage Website — Starter Guide

A complete, copy-this playbook for building a bilingual heritage / family-legacy
website like [dbaksarawak.org](https://dbaksarawak.org) — from zero to live,
written for someone who is **not** a full-time developer.

Hand this to a friend together with the source code. The code gives them the
skeleton; this guide tells them how to make it theirs and put it online.

---

## 1. What you're getting

A fast, private, cheap-to-run heritage site with:

- **Bilingual** — one language at `/`, the other under `/en/` (swap for any two languages).
- **Static** — no database, no server, no login. It's just files. Nothing to hack, nothing to maintain, near-impossible to break.
- **No tracking** — no Google Analytics, no third-party requests, self-hosted fonts. Respects visitors' privacy by default.
- **Photo galleries & event albums** — responsive, auto-optimised images.
- **Timeline, family-tree diagram, restoration tracker** — reusable building blocks.
- **Deploys anywhere** — Netlify, Cloudflare Pages, GitHub Pages, or any cheap static host. Realistic cost: **free to ~USD 5/month.**

**The stack** (so your friend's techy cousin knows what they're looking at):
Next.js 15 (App Router, `output: export`) · TypeScript · Tailwind CSS v4 · plain
static HTML output. That's it.

---

## 2. What they'll need (accounts)

| Thing | Cost | Why |
|-------|------|-----|
| A computer with **Node.js 20+** installed | free | to build the site |
| A **GitHub** account | free | to store the code + auto-deploy |
| A **Netlify** account (or Cloudflare Pages) | free tier is plenty | to host the live site |
| A **domain name** (e.g. `theirfamily.org`) | ~USD 10–15/year | the web address |
| Photos, posters, text, a logo | — | their actual content |

No paid software. No coding bootcamp. If they can edit a Word document and copy
files into folders, they can run this with help.

---

## 3. Two ways to hand it over

**Option A — "Template repo" (recommended).**
Push this project to GitHub, then in the repo's **Settings → General → check
"Template repository."** Your friend clicks **"Use this template"** and gets a
clean copy under their own account with none of your commit history. Cleanest,
safest, one click.

**Option B — Zip / fork.**
Send them the folder as a zip, or have them fork the repo. Works, but they
inherit history and it's easier to get confused about "whose" site it is.

Either way, **strip your private content first** (see §7 privacy playbook).

---

## 4. First run (10 minutes)

```bash
npm install        # install dependencies (one time)
npm run dev        # live preview at http://localhost:3000
```

Edit a file, save, and the browser refreshes instantly. When done:

```bash
npm run check      # lint + typecheck + build — must pass before deploying
npm start          # preview the final built site locally
```

`npm run build` produces the whole website as plain files in the `out/` folder.
That folder is the entire site — you could email it.

---

## 5. Where everything lives

```
src/
  lib/i18n.ts            ← every page's URL + menu label, in both languages
  content/
    timeline.ts          ← the history timeline entries
    updates.ts           ← news / announcements
    image-manifest.json  ← auto-generated; don't hand-edit
  components/
    Header.tsx  Footer.tsx   ← top bar + footer (logo, credit line live here)
    pages/*.tsx              ← the actual content of each page
  app/
    (ms)/ ...            ← Malay pages (or your language A)
    (en)/en/ ...         ← English pages (or your language B)
    globals.css          ← colours & fonts (the "@theme" block at top)
public/
  images/                ← all photos, posters, logo files
scripts/
  optimize-images.mjs    ← turns big photos into fast web images
```

**The one rule that saves headaches:** all text lives in typed TypeScript as
`{ ms: '...', en: '...' }` pairs — not scattered through the HTML. To change a
headline you edit *one* object and both language versions stay in sync.

---

## 6. Making it theirs — the customization checklist

Work top to bottom. After each step run `npm run dev` and look.

1. **Site name & tagline** — `src/components/Header.tsx` and `Footer.tsx`
   (search for the current family name and the tagline string).
2. **The two languages** — if they want, say, Malay + Mandarin instead of
   Malay + English: `src/lib/i18n.ts` is the single source of truth for URLs and
   menu labels. Rename the `(en)` route group folder and its slugs to match.
3. **Colours & fonts** — `src/app/globals.css`, the `@theme` block at the top.
   Change the green/gold tokens to their heritage colours. Drop font files into
   `public/fonts/` and reference them there (keep fonts self-hosted — no Google
   Fonts calls).
4. **Logo** — put their circular seal in `public/images/` and point Header.tsx
   + Footer.tsx at it. (Tip: a transparent PNG cropped to a circle looks far
   more professional than a square logo on a coloured bar.)
5. **The story / history pages** — `src/components/pages/*.tsx`. Replace the
   text. Keep the structure; swap the words.
6. **Timeline** — `src/content/timeline.ts`. One entry per row: year + what
   happened, in both languages.
7. **Photos & posters** — drop originals into `public/images/`, then run
   `npm run images` to generate the fast web versions. Reference them on the
   gallery / album pages.
8. **Contact details & address** — `Footer.tsx` and the contact page.
9. **Domain, email, social links** — search the project for the old domain and
   replace.

When it looks right: `npm run check`, then deploy (§8).

---

## 7. ⚠️ The Privacy Playbook — read this twice

This is the part generic tutorials never teach, and it's the part that actually
matters for a family site. Heritage content is full of private material.

**Never do these:**

- **Don't link your Google Drive as the "gallery."** A shared Drive folder
  exposes everything in it — filenames, other files, edit history — and you lose
  control the moment the link spreads. Put photos *on the site*, in
  `public/images/`, and delete the public Drive share.
- **Don't dump a raw WhatsApp export onto the site.** A WhatsApp group export
  (`.zip`) contains the **entire chat transcript** — phone numbers, private
  conversations, everything — mixed in with the photos. Extract **only** the
  image files you actually want, review each one by eye, and throw the chat
  `.txt` away.
- **Don't publish anything with:** IC / passport numbers, bank details, QR
  payment codes, home addresses of living people, phone numbers, minors'
  faces without a guardian's OK, or a full family tree with living members'
  details. When unsure, leave it out.

**Do these:**

- Curate posters and event photos deliberately — a small, clean set beats a
  massive unfiltered dump.
- After you've copied what you need, flip any shared Drive folders back to
  **Restricted** and delete files you uploaded just to move them around.
- **Rotate/delete any API tokens or keys** you created during setup (hosting,
  Cloudflare, etc.) once you're done. Treat them like passwords.
- Keep the site **tracker-free** — it's a feature you can be proud of, and it
  means visitors' data never leaves their browser.

---

## 8. Going live (Netlify, ~15 minutes)

1. Push the code to a GitHub repo.
2. In Netlify: **Add new site → Import from GitHub →** pick the repo.
3. Netlify reads `netlify.toml` automatically: build command `npm run build`,
   publish folder `out`. Just click **Deploy.**
4. Add their custom domain in **Netlify → Domain settings**, and point the
   domain's DNS at Netlify (Netlify shows the exact records). HTTPS is automatic.

After that, **every time you push a change to GitHub, the site rebuilds and
redeploys itself.** No manual uploads.

> **Image cache gotcha:** `netlify.toml` caches everything in `/images/` for a
> year (`immutable`) for speed. If you *replace* a logo or photo but keep the
> same filename, visitors keep seeing the old one. Fix: give the new file a new
> name (e.g. `logo-v2.png`) so the cache treats it as new.

---

## 9. Day-to-day updates (for the family, after launch)

The gentlest path for a non-technical caretaker:

- **Add a news item:** edit `src/content/updates.ts`, add one entry, push.
- **Add photos:** drop them in `public/images/`, run `npm run images`, add them
  to the album page, push.
- Every push = auto-redeploy. If something breaks, `npm run check` tells you
  before it ever goes live.

If even that's too much, whoever set it up can do quarterly updates in an hour.

---

## 10. Quick reference

| I want to… | Go to |
|------------|-------|
| Change a menu item or page URL | `src/lib/i18n.ts` |
| Change colours / fonts | `src/app/globals.css` (`@theme` block) |
| Change the logo | `public/images/` + `Header.tsx` / `Footer.tsx` |
| Edit page text | `src/components/pages/*.tsx` |
| Edit the history timeline | `src/content/timeline.ts` |
| Add news | `src/content/updates.ts` |
| Add / optimise photos | `public/images/` then `npm run images` |
| Preview locally | `npm run dev` |
| Check before deploying | `npm run check` |
| Deploy | push to GitHub → Netlify auto-builds |

---

*Built for the Rumah Batu / Waris DBAK heritage project. Reuse it freely for
your own family's legacy — the whole point of a heritage site is to be passed on.*
