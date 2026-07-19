# Rumah Batu — Waris DBAK heritage website

Public heritage website for **Rumah Batu** (Kuching, Sarawak, built 1863 by
family account) and the eight family lines of **Datu Bandar Abang Haji Muhammad
Kassim (W8-DBAK)**.

> Lapan jalur keluarga. Satu warisan bersama.
> Eight family lines. One shared heritage.

Bilingual (Bahasa Melayu primary at `/`, English under `/en/`), static-first
Next.js + TypeScript + Tailwind, fully exportable to any inexpensive static
host. No tracking, no third-party requests, self-hosted fonts, WCAG 2.2 AA.

## Local setup

```bash
npm install
npm run dev        # develop at http://localhost:3000
npm run check      # lint + typecheck + static build (out/)
npm start          # serve the static build (out/) locally
```

`npm run build` outputs the complete static site to `out/` (includes
`404.html`, `sitemap.xml`, `robots.txt`). Deploy `out/` to any static host
(Netlify, Cloudflare Pages, GitHub Pages, Exabytes static hosting).

## Editing content

All copy lives in typed TypeScript, not scattered through markup:

| What | Where |
|---|---|
| Timeline entries (history + 2020-renewal) | `src/content/timeline.ts` |
| The eight lines | `src/content/waris8.ts` |
| Restoration phases + statuses | `src/content/phases.ts` |
| Gallery items (caption/date/credit/consent) | `src/content/gallery.ts` |
| News/updates posts | `src/content/updates.ts` |
| Per-page copy (both languages) | `copy` object at the top of each file in `src/components/pages/` |
| Nav labels & routes | `src/lib/i18n.ts` |

Every entry is a `{ ms, en }` pair; update both languages together. Timeline
and history entries carry a `source` class (`document`, `court`, `family`,
`committee`, `pending`) which renders the visible "Sources & Notes" label —
keep it accurate.

**Adding a news post:** prepend an object to `src/content/updates.ts`. Keep
`verified: true` only for posts checked against documents or public records.

**Restoration statuses** (`src/content/phases.ts`) may only move forward on
verified evidence. Never invent percentages; the design has no percentage
indicator on purpose.

## Image workflow

1. Put the approved original in `assets-original/` (kept out of the public
   bundle) with a meaningful kebab-case name.
2. Run `npm run images` — generates responsive WebP + JPEG into
   `public/images/` and refreshes `src/content/image-manifest.json`
   (dimensions used to prevent layout shift).
3. Reference it with `<Pic name="your-name" alt="…" />` or add a gallery item
   in `src/content/gallery.ts` with caption, date, credit and consent status.

Privacy: never add images containing identity documents, phone numbers,
private chat screenshots, or unapproved photos of living people (see
`CONTENT-REVIEW.md`).

## Structure

- `src/app/(ms)/…` — Bahasa Melayu routes (root), `<html lang="ms">`
- `src/app/(en)/en/…` — English routes, `<html lang="en">`
- `src/components/pages/` — shared page implementations (one per route)
- `src/components/` — design-system components (Pic, Timeline, PhaseTracker,
  Waris8Diagram, GalleryGrid, …)
- `scripts/optimize-images.mjs` — media pipeline
- `scripts/qa-screenshots.mjs` — QA screenshots + console-error check
- `PRODUCT.md` / `DESIGN.md` — strategy and design system reference
- `docs/SOURCE-AUDIT.md` — where every historical claim comes from
- `CONTENT-REVIEW.md` — items awaiting family approval before launch
- `CONTENT-PENDING.md` — archives not yet reviewed

## QA

```bash
npm run check                       # lint + types + build
npm start                           # serve out/ on :3000 (or serve out -l 8311)
node scripts/qa-screenshots.mjs http://localhost:3000 qa-screenshots
```

The QA script captures every page at 375px and 1440px and fails on console
errors. Screenshots of the current build are in `docs/screenshots/`.

## Deployment notes

- Set the production domain in `src/lib/i18n.ts` (`SITE_URL`) if it changes;
  sitemap, canonical URLs and Open Graph all derive from it.
- Analytics: none installed. If the committee approves one later, choose a
  privacy-respecting option and add a consent notice first.
- Forms: intentionally email-based (`maklum@w8dbak.com`) until the committee
  approves a data-handling flow; see the Participate page.
