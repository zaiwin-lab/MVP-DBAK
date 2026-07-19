import type { Bi } from '@/lib/i18n';

export type GalleryTag =
  | 'sejarah' // Historical
  | 'keluarga' // Family
  | 'aktiviti' // Activities
  | 'rumah-batu' // The house
  | 'pemulihan' // Restoration/condition
  | 'komuniti'; // Community

export const tagLabel: Record<GalleryTag, Bi> = {
  sejarah: { ms: 'Sejarah', en: 'Historical' },
  keluarga: { ms: 'Keluarga', en: 'Family' },
  aktiviti: { ms: 'Aktiviti', en: 'Activities' },
  'rumah-batu': { ms: 'Rumah Batu', en: 'Rumah Batu' },
  pemulihan: { ms: 'Pemulihan', en: 'Restoration' },
  komuniti: { ms: 'Komuniti', en: 'Community' },
};

export interface GalleryItem {
  /** image-manifest key */
  img: string;
  alt: Bi;
  caption: Bi;
  date: Bi;
  credit: Bi;
  /** public-consent status shown in CONTENT-REVIEW.md; all current items were previously published by the family */
  consent: 'published-before' | 'approved' | 'review';
  tags: GalleryTag[];
  duotone?: boolean;
}

export const gallery: GalleryItem[] = [
  {
    img: 'ramah-tamah-2025',
    alt: {
      ms: 'Ratusan ahli keluarga Waris DBAK berdiri bersama di dewan besar semasa Majlis Ramah Tamah Bersama Premier Sarawak',
      en: 'Hundreds of Waris DBAK family members standing together in a grand hall during the Ramah Tamah with the Premier of Sarawak',
    },
    caption: {
      ms: 'Majlis Ramah Tamah Bersama Premier Sarawak. Kelapan-lapan jalur dalam satu dewan.',
      en: 'Ramah Tamah with the Premier of Sarawak. All eight lines in one hall.',
    },
    date: { ms: '19 April 2025', en: '19 April 2025' },
    credit: { ms: 'Arkib keluarga W8-DBAK', en: 'W8-DBAK family archive' },
    consent: 'published-before',
    tags: ['keluarga', 'aktiviti', 'komuniti'],
  },
  {
    img: 'dbak-portrait',
    alt: {
      ms: 'Potret studio hitam putih Datu Bandar Abang Haji Muhammad Kassim dalam pakaian rasmi',
      en: 'Black-and-white studio portrait of Datu Bandar Abang Haji Muhammad Kassim in ceremonial dress',
    },
    caption: {
      ms: '"The Late Datu Bandar Abg Haji Mohd Kassim" — potret bersejarah DBAK.',
      en: '"The Late Datu Bandar Abg Haji Mohd Kassim" — historical portrait of DBAK.',
    },
    date: { ms: 'Sebelum 1921', en: 'Before 1921' },
    credit: { ms: 'Arkib keluarga W8-DBAK', en: 'W8-DBAK family archive' },
    consent: 'published-before',
    tags: ['sejarah', 'keluarga'],
    duotone: true,
  },
  {
    img: 'rumah-batu-historic',
    alt: {
      ms: 'Foto lama hitam putih Rumah Batu: rumah dua tingkat bertiang dengan bumbung curam dan beranda panjang',
      en: 'Old black-and-white photograph of Rumah Batu: a two-storey colonnaded house with steep roofs and a long verandah',
    },
    caption: {
      ms: 'Rumah Batu pada awal abad ke-20, megah dengan beranda dan tiang-tiangnya.',
      en: 'Rumah Batu in the early 20th century, proud with its verandahs and columns.',
    },
    date: { ms: 'Awal abad ke-20 (anggaran)', en: 'Early 20th century (estimated)' },
    credit: { ms: 'Arkib keluarga W8-DBAK', en: 'W8-DBAK family archive' },
    consent: 'published-before',
    tags: ['sejarah', 'rumah-batu'],
    duotone: true,
  },
  {
    img: 'rumah-batu-2020',
    alt: {
      ms: 'Rumah Batu pada tahun 2020, dikelilingi pokok renek, dinding putih dengan beranda hijau',
      en: 'Rumah Batu in 2020, surrounded by shrubs, white walls with green verandah railings',
    },
    caption: {
      ms: 'Rumah Batu hari ini: masih berdiri, menanti pemulihan.',
      en: 'Rumah Batu today: still standing, awaiting restoration.',
    },
    date: { ms: '2020', en: '2020' },
    credit: { ms: 'Arkib keluarga W8-DBAK', en: 'W8-DBAK family archive' },
    consent: 'published-before',
    tags: ['rumah-batu'],
  },
  {
    img: 'majlis-2020-invite',
    alt: {
      ms: 'Kad jemputan Majlis Perjumpaan dan Mesyuarat Waris 8, 19 September 2020, Hotel UCSI Kuching, dengan foto Rumah Batu',
      en: 'Invitation card for the Waris 8 gathering and meeting, 19 September 2020, UCSI Hotel Kuching, with a photograph of Rumah Batu',
    },
    caption: {
      ms: 'Jemputan majlis 19 September 2020: perhimpunan semula lapan jalur bermula di sini.',
      en: 'The 19 September 2020 invitation: the regathering of the eight lines began here.',
    },
    date: { ms: 'September 2020', en: 'September 2020' },
    credit: { ms: 'AJK W8-DBAK', en: 'W8-DBAK committee' },
    consent: 'published-before',
    tags: ['aktiviti', 'keluarga'],
  },
  {
    img: 'keadaan-verandah',
    alt: {
      ms: 'Enam foto keadaan beranda atas Rumah Batu: lantai kayu terhakis, tiang dan pagar besi hijau masih utuh',
      en: 'Six photographs of the upper verandah of Rumah Batu: worn timber floors, columns and green iron balustrades still intact',
    },
    caption: {
      ms: 'Beranda tingkat atas, direkodkan semasa dokumentasi keadaan 2020–2022.',
      en: 'The upper verandah, recorded during the 2020–2022 condition documentation.',
    },
    date: { ms: '2020–2022', en: '2020–2022' },
    credit: { ms: 'Dokumentasi AJK W8-DBAK', en: 'W8-DBAK committee documentation' },
    consent: 'published-before',
    tags: ['pemulihan', 'rumah-batu'],
  },
  {
    img: 'keadaan-tingkat-atas',
    alt: {
      ms: 'Sembilan foto keadaan dalaman tingkat atas Rumah Batu: bilik-bilik kosong, perabot lama dan lantai jubin bercorak',
      en: 'Nine photographs of the upper-floor interior of Rumah Batu: empty rooms, old furniture and patterned tile floors',
    },
    caption: {
      ms: 'Dalaman tingkat atas: jubin bercorak asal masih kelihatan di beberapa ruang.',
      en: 'Upper-floor interior: original patterned tiles still visible in places.',
    },
    date: { ms: '2020–2022', en: '2020–2022' },
    credit: { ms: 'Dokumentasi AJK W8-DBAK', en: 'W8-DBAK committee documentation' },
    consent: 'published-before',
    tags: ['pemulihan', 'rumah-batu'],
  },
  {
    img: 'keadaan-tingkat-bawah',
    alt: {
      ms: 'Empat foto tingkat bawah Rumah Batu: ruang terbuka bertiang tanpa dinding dalaman dan pintu bilik solat',
      en: 'Four photographs of the ground floor of Rumah Batu: open colonnaded space without internal walls and a prayer-room door',
    },
    caption: {
      ms: 'Tingkat bawah kini terbuka tanpa dinding dalaman; struktur utama masih kukuh.',
      en: 'The ground floor now stands open without internal walls; the main structure remains sound.',
    },
    date: { ms: '2020–2022', en: '2020–2022' },
    credit: { ms: 'Dokumentasi AJK W8-DBAK', en: 'W8-DBAK committee documentation' },
    consent: 'published-before',
    tags: ['pemulihan', 'rumah-batu'],
  },
  {
    img: 'buku-perabangan',
    alt: {
      ms: 'Kulit buku Genealogical Directory Perabangan Malayu Sarawak dengan foto lama rumah tradisional',
      en: 'Cover of the Genealogical Directory Perabangan Malayu Sarawak with an old photograph of a traditional house',
    },
    caption: {
      ms: 'Genealogical Directory Perabangan Malayu Sarawak, rujukan salasilah keluarga.',
      en: 'The Genealogical Directory Perabangan Malayu Sarawak, a genealogical reference.',
    },
    date: { ms: 'Terbitan keluarga', en: 'Family publication' },
    credit: {
      ms: 'Abang Tan Hj Ir Mohammed Ekhwan bin Tan Hj Zolkipli',
      en: 'Abang Tan Hj Ir Mohammed Ekhwan bin Tan Hj Zolkipli',
    },
    consent: 'published-before',
    tags: ['sejarah', 'komuniti'],
  },
];
