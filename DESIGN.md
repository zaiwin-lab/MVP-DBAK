# Design

## Theme

Contemporary Sarawak heritage editorial. Dignified, warm, tactile,
family-centred. Light surfaces carry long-form history; deep forest green is
the committed brand surface (hero, section bands, footer), anchored by the
Wakaf DBAK logo (green/red roundel, "Since 1863"). Color strategy: Committed —
green carries 30–40% of the surface; warmth comes from imagery, gold rules,
and typography, not from a cream-tinted body.

## Color palette (OKLCH)

| Token | Value | Use |
|---|---|---|
| `--ink` | oklch(0.24 0.02 160) | body text, near-black green-cast ink |
| `--bg` | oklch(0.985 0.004 120) | body background, true off-white (chroma toward brand hue, not warm-beige) |
| `--surface` | oklch(0.955 0.008 130) | soft sage-tinted secondary panels |
| `--green-900` | oklch(0.28 0.06 155) | deep forest green: footer, drenched bands |
| `--green-700` | oklch(0.38 0.08 155) | primary brand green: buttons, links |
| `--green-300` | oklch(0.82 0.05 150) | sage tint on dark surfaces |
| `--gold` | oklch(0.68 0.10 85) | muted heritage gold: rules, marks, timeline spine |
| `--terracotta` | oklch(0.55 0.12 35) | restrained brick accent: status "in progress", small highlights |
| `--ivory` | oklch(0.97 0.01 95) | text on dark green surfaces |

Body text on `--bg` ≥ 12:1. Ivory on green-900 ≥ 10:1. Gold used only ≥3:1
large/graphic; never for body text.

## Typography

- Display/headings: **Literata** (variable, opsz) — bookish, archival, sets
  Bahasa Melayu beautifully. Distinctive at display sizes with tight opsz.
- Body/UI: **Alegreya Sans** — humanist, calligraphic warmth, long-form
  readable. 400/500/700.
- Both self-hosted (next/font/local), no runtime font requests.
- Fluid modular scale, ratio ≥1.25; display clamp max 4.5rem; body 1.0625rem,
  line-height 1.65, max width 68ch. `text-wrap: balance` on headings.

## Motif & texture

- The eight-part motif: a subtle 8-spoke star/compass derived from the family's
  eight lines, used as SVG mark for section dividers and the Waris 8 diagram.
- Hairline gold rules (1px) as editorial separators; no boxes-in-boxes.
- Archival duotone treatment (green ink) available for historical photos.
- No stock ornament, no glassmorphism, no gradient text.

## Components

- Header: ivory, hairline bottom rule, logo roundel + wordmark, BM/EN switch,
  no-JS `<details>` mobile menu.
- Hero: full-bleed photograph, deep green scrim bottom-up, headline in ivory
  Literata, two solid CTAs (green solid + ivory outline).
- Timeline: vertical gold spine, year markers in Literata, dated entries with
  source notes.
- Phase tracker: 5 stages, status chips (Selesai/Completed = green,
  Sedang berjalan/In progress = terracotta, Seterusnya/Next = gold outline,
  Aspirasi/Future = neutral). Never percentages.
- Status/source note: small caption block with document icon, names the source
  class (arkib keluarga / dokumen / rekod mahkamah / kemas kini AJK).
- Gallery album: responsive photo grid, real captions with date + credit +
  consent state; filter chips (client-side, content fully visible without JS).
- Waris 8: radial 8-branch SVG on wide screens, stacked accessible cards on
  mobile.

## Motion

Restrained: one soft page-load fade/rise on hero text only; scroll reveals
enhance already-visible content (opacity 1 fallback); all gated behind
`prefers-reduced-motion`. Ease-out-quart, 300–500ms.

## Layout

Single-column editorial flow, max 72rem shell; generous `clamp()` section
spacing; asymmetric photo/text splits alternate; full-bleed green bands pace
the scroll. Mobile-first from 320px.
