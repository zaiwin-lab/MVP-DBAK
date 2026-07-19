# CONTENT-PENDING — archives not yet reviewed

The build brief lists six WhatsApp archive exports in the Google Drive folder
"ZK3 WhatsApp Data" (uploaded 19 July 2026). **None were accessible in this
build environment** — the Google Drive connector could not be authorised in a
non-interactive session, and the `research/drive/exco/` extraction referenced
by the brief was not present in the workspace. The review is therefore NOT
complete; this file says exactly what remains.

## Archives awaiting review

| # | Archive | Size | Wanted from it |
|---|---|---|---|
| 1 | WhatsApp Chat with Abang Iskandar DBAK | ~135.8 MB | Chronology 2020–2022; committee milestones |
| 2 | WhatsApp Chat with Exco AJK W8 DBAK | ~26.3 MB | **Priority**: final Wakaf DBAK logo vector; Jan 2021 online-meeting images; committee/workshop photos; Majlis 100 Tahun banner & programme; RB exterior/campaign banners; Oct 2021 meeting image; "I'm W8" artwork |
| 3 | WhatsApp Chat with Wakil W8-RB | ~83.0 MB | Line-representative activity, gathering photos |
| 4 | WhatsApp Chat with AJK RT DBAK 20Apr25 | ~1.49 GB | **Priority**: high-resolution 19 April 2025 Ramah Tamah photographs; names/titles verification |
| 5 | WhatsApp Chat with AJK W8 DBAK 2022 2024 | ~458.6 MB | July 2022 community programme photos; AGM 2022; site studies; 1 Oct 2022 visit originals |
| 6 | WhatsApp Chat with JKWW8 DBAK sesi 2024 2026 | ~537.6 MB | 2024–2026 committee work, conservation planning, stakeholder engagement, verified progress |

## Image categories still needed

- High-resolution originals of: Rumah Batu exterior (current), the 2025 Ramah
  Tamah, the 1 Oct 2022 site visit (`site-33/34/35` equivalents), interior
  details (replace the low-res collages), the centenary programme artwork.
- The clean Wakaf DBAK logo (vector/PDF) — the site currently uses a
  placeholder eight-ray motif in the header and favicon.
- Aerial/drone survey imagery, if the 2022 proposal produced any.

## Content that stays gated on those archives

- Timeline entries marked **"Sumber dalam semakan / Source under review"**
  (2024–2026 committee work; March 2022 public-leadership outreach; July 2022
  community programme identification).
- The featured 2025 story's guest names and titles.
- Any expansion of the gallery beyond the nine already-public images.

## How to complete the review

1. Download the six exports from the Drive folder into `research/` (kept out
   of git; they contain private communications and personal data).
2. Extract media; run a privacy screen (no chat screenshots, IDs, phone
   numbers, Zoom credentials, minors without consent).
3. Add approved images via the workflow in `README.md` and update the
   asset inventory in `src/content/gallery.ts` (caption, date, credit,
   consent).
4. Upgrade timeline entries from `pending` to a firm source class as evidence
   is confirmed, and clear the corresponding rows in `CONTENT-REVIEW.md`.
