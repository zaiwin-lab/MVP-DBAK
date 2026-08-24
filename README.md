# Rumah Batu — Waris DBAK Digital Heritage Platform

> **Maturity:** Working public heritage platform · bilingual static release with source and consent controls

A bilingual digital home for Rumah Batu and the eight family lines of Datu Bandar Abang Haji Muhammad Kassim (W8-DBAK). The platform presents family heritage, restoration activity and participation pathways while keeping unresolved archives and unapproved material outside the public layer.

**Live platform:** [dbaksarawak.org](https://dbaksarawak.org/)

## Business problem

Family and community heritage can become fragmented across oral accounts, private chats, documents and personal photo collections. A public website must make that history understandable without publishing unverified claims, exposing private material or overstating restoration progress. This project tests a content-governance model in which source status, consent and committee review are part of the product architecture.

## Intended users

- Waris DBAK descendants in Malaysia and abroad
- Family elders and younger generations
- Heritage researchers and educators
- Restoration and programme stakeholders
- Visitors learning about Rumah Batu and its family context

## Demonstrated capabilities

- Bahasa Melayu-first site with complete English routes
- Static, mobile-first heritage pages
- Timeline entries carrying visible source classifications
- Eight-family-line presentation
- Restoration phases and status communication
- Gallery records with captions, dates, credits and consent fields
- News and update publishing through typed content files
- Source-audit, pending-content and content-review documentation
- Responsive image optimisation and manifest generation
- Sitemap, canonical metadata, Open Graph and static 404 output
- Automated mobile/desktop screenshot and console-error QA script
- Keyboard navigation, reduced-motion support and accessibility-oriented structure

## Strategic value

Rumah Batu demonstrates that digital heritage is not only a design exercise. The repository treats evidence, privacy, consent, translation and approval status as first-class delivery requirements. This creates a reusable approach for family archives, cultural organisations and community heritage programmes that need a dignified public layer without exposing their entire research archive.

## What is actually implemented

The platform is a static-export Next.js application. Historical and restoration content is maintained in typed bilingual source files. Timeline records include evidence categories such as document, court, family, committee and pending; these classifications communicate provenance but do not independently prove each historical statement.

Archive material listed in `CONTENT-PENDING.md` was not available to the original build environment and is intentionally not represented as verified public content. Restoration status changes and public photographs remain subject to authorised evidence and consent.

No generative-AI historian, automated fact verification, donation processor, private family database or member account system is implemented.

## Technology

- Next.js 15, React 19 and TypeScript
- Tailwind CSS
- Static export
- Typed bilingual content modules
- Sharp-based image optimisation
- Self-hosted fonts
- Playwright-style screenshot QA script
- Netlify-compatible static deployment

## Delivery role

**Ts. Zaiwin Kassim** leads product strategy, stakeholder requirements, heritage-content governance and supervised AI-assisted delivery with the **KOBIS AI Prodigy Team**. The repository demonstrates responsible digital-heritage delivery; it does not claim authorship of family history, institutional endorsement or authority to determine disputed heritage facts.

## Responsible-use boundaries

- Historical claims must preserve their source classification and remain open to correction when stronger evidence appears.
- Family accounts, official records and committee statements should not be treated as interchangeable forms of evidence.
- Living people’s photographs, names and stories require appropriate consent and purpose limitation.
- Identity documents, phone numbers, private messages, addresses and unapproved archives must remain outside the public bundle.
- Restoration progress, funding and completion status must be supported by current authorised evidence.
- Bilingual changes should be reviewed together so meaning is not lost or materially altered.
- Cultural, religious, genealogical and ownership disputes require authorised human governance; the website must not adjudicate them.
- External bodies or community references do not imply endorsement unless formally documented.

## Current limitations

- The platform has no private archive-management or member-access layer.
- Public participation uses email rather than a governed submission workflow.
- Some source archives remain unavailable or pending review.
- Evidence classification is manually maintained.
- No analytics are installed; audience reach and adoption are therefore not evidenced.
- WCAG intent is documented, but independent accessibility certification is not evidenced.
- Public availability does not establish that every family branch has approved every item.

## Run locally

```bash
npm install
npm run dev
npm run check
```

## Content workflow

1. Confirm the source and approval status.
2. Update both Bahasa Melayu and English content.
3. Record image credit and consent.
4. Run image processing where applicable.
5. Run lint, type checking, static build and visual QA.
6. Publish only material cleared for the public layer.

## Portfolio evidence

Rumah Batu demonstrates bilingual information architecture, evidence-aware content modelling, privacy-by-design, static performance engineering and a disciplined human-governance approach to culturally sensitive digital transformation.
