import type { Bi } from '@/lib/i18n';

/**
 * Curated event albums, republished from the committee's archives.
 * Source: JKWW8 WhatsApp archives, reviewed image-by-image before publication.
 * Nothing private (documents, contact details, chat content) is included.
 */
export interface AlbumSection {
  /** anchor id used by /aktiviti links */
  id: string;
  title: Bi;
  blurb: Bi;
  credit: Bi;
  /** image-manifest key prefix, album-<prefix>-NN */
  prefix: string;
  count: number;
  /** base alt text; photo number is appended */
  alt: Bi;
  /** groups of photos labelled within the section, by 1-based index ranges */
  groups?: { from: number; to: number; label: Bi }[];
}

export const albumSections: AlbumSection[] = [
  {
    id: 'galeri',
    title: { ms: 'Galeri Majlis', en: 'Event Gallery' },
    blurb: {
      ms: 'Perhimpunan, mesyuarat dan majlis keluarga Waris DBAK — daripada gotong-royong di tanah perkuburan hingga Ramah Tamah bersama Premier Sarawak.',
      en: 'Waris DBAK family gatherings, meetings and ceremonies — from gotong-royong at the family cemetery to the Ramah Tamah with the Premier of Sarawak.',
    },
    credit: { ms: 'Arkib keluarga W8-DBAK', en: 'W8-DBAK family archive' },
    prefix: 'galeri',
    count: 33,
    alt: {
      ms: 'Majlis dan perhimpunan keluarga Waris DBAK — foto',
      en: 'Waris DBAK family gathering — photo',
    },
  },
  {
    id: 'program',
    title: { ms: 'Program & Jemputan Majlis', en: 'Programmes & Invitations' },
    blurb: {
      ms: 'Poster, jemputan dan notis rasmi majlis keluarga: mesyuarat agung, ramah tamah Aidilfitri, sesi taklimat wakaf, gotong-royong dan keratan akhbar.',
      en: 'Official event posters, invitations and notices: general meetings, Aidilfitri gatherings, waqf briefings, gotong-royong and press cuttings.',
    },
    credit: {
      ms: 'Jawatankuasa Wakil Waris 8 (JKWW8)',
      en: 'Committee of Heir Representatives (JKWW8)',
    },
    prefix: 'program',
    count: 17,
    alt: {
      ms: 'Poster atau jemputan rasmi majlis keluarga Waris DBAK — bahan',
      en: 'Official Waris DBAK event poster or invitation — item',
    },
  },
  {
    id: 'khatam',
    title: { ms: 'Majlis Khatam Al-Quran', en: 'Khatam Al-Quran Ceremonies' },
    blurb: {
      ms: 'Tradisi tahunan keluarga sejak lima tahun: majlis Khatam Al-Quran DBAK pada setiap Ramadan, menghimpunkan waris lapan jalur dalam bacaan yang disempurnakan bersama.',
      en: 'A family tradition now in its fifth year: the annual DBAK Khatam Al-Quran each Ramadan, bringing heirs of the eight lines together to complete the reading as one.',
    },
    credit: {
      ms: 'Program Khatam Al-Quran DBAK · Arkib keluarga',
      en: 'DBAK Khatam Al-Quran programme · Family archive',
    },
    prefix: 'khatam',
    count: 43,
    alt: {
      ms: 'Majlis Khatam Al-Quran DBAK — foto',
      en: 'DBAK Khatam Al-Quran ceremony — photo',
    },
    groups: [
      { from: 1, to: 4, label: { ms: 'Poster program', en: 'Programme posters' } },
      { from: 5, to: 16, label: { ms: 'Ramadan 1445H · April 2024', en: 'Ramadan 1445H · April 2024' } },
      { from: 17, to: 28, label: { ms: 'Ramadan 1446H · Mac 2025', en: 'Ramadan 1446H · March 2025' } },
      { from: 29, to: 43, label: { ms: 'Tahun ke-5, Ramadan 1447H · Mac 2026', en: '5th year, Ramadan 1447H · March 2026' } },
    ],
  },
];
