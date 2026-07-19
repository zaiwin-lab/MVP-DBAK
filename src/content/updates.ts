import type { Bi } from '@/lib/i18n';

export interface UpdatePost {
  slug: string;
  date: string; // ISO
  dateLabel: Bi;
  title: Bi;
  summary: Bi;
  body: Bi<string[]>; // paragraphs
  verified: boolean;
}

/**
 * Maintainable updates: add a new object to the top of this array.
 * Keep `verified: true` only for posts checked against documents or
 * public/official records.
 */
export const updates: UpdatePost[] = [
  {
    slug: 'ramah-tamah-premier-2025',
    date: '2025-04-19',
    dateLabel: { ms: '19 April 2025', en: '19 April 2025' },
    title: {
      ms: 'Ramah Tamah Bersama Premier Sarawak',
      en: 'Ramah Tamah with the Premier of Sarawak',
    },
    summary: {
      ms: 'Keluarga besar Waris DBAK berhimpun dalam majlis ramah tamah bersama Premier Sarawak, satu detik kebanggaan bagi kelapan-lapan jalur.',
      en: 'The extended Waris DBAK family gathered for a Ramah Tamah with the Premier of Sarawak, a proud moment for all eight lines.',
    },
    body: {
      ms: [
        'Pada 19 April 2025, ahli keluarga daripada kelapan-lapan jalur Waris DBAK berhimpun dalam Majlis Ramah Tamah Bersama Premier Sarawak. Dewan yang penuh, dari generasi kelima hingga yang terkecil dalam dukungan, menjadi gambaran paling jelas tentang apa yang sedang dibina semula: bukan sahaja sebuah rumah, tetapi sebuah keluarga.',
        'Majlis ini menandakan sokongan dan perhatian yang berterusan terhadap usaha memelihara Rumah Batu. Nama dan gelaran tetamu kehormat serta butiran rasmi majlis sedang disemak untuk penerbitan penuh.',
      ],
      en: [
        'On 19 April 2025, family members from all eight Waris DBAK lines gathered for a Ramah Tamah with the Premier of Sarawak. A full hall, from the fifth generation to infants in arms, was the clearest picture of what is being rebuilt: not only a house, but a family.',
        'The occasion marks continuing support for the effort to care for Rumah Batu. The names and titles of the guests of honour and the official details of the event are being verified for full publication.',
      ],
    },
    verified: true,
  },
  {
    slug: 'perlembagaan-semakan-2024',
    date: '2024-01-31',
    dateLabel: { ms: 'Januari 2024', en: 'January 2024' },
    title: {
      ms: 'Perlembagaan W8-DBAK disemak semula',
      en: 'W8-DBAK constitution revised',
    },
    summary: {
      ms: 'Perlembagaan Bil. 1/2021 disemak semula (semakan 01/2024) dan boleh dimuat turun di halaman Sumber.',
      en: 'Constitution No. 1/2021 has been revised (rev. 01/2024) and can be downloaded on the Resources page.',
    },
    body: {
      ms: [
        'Perlembagaan W8-DBAK, mula dimaktubkan pada 13 Februari 2021, telah melalui semakan pada Januari 2024. Dokumen penuh tersedia untuk semua waris di halaman Sumber & Arkib.',
      ],
      en: [
        'The W8-DBAK constitution, first enacted on 13 February 2021, was revised in January 2024. The full document is available to all heirs on the Resources & Archive page.',
      ],
    },
    verified: true,
  },
  {
    slug: 'laman-baharu',
    date: '2026-07-19',
    dateLabel: { ms: 'Julai 2026', en: 'July 2026' },
    title: {
      ms: 'Laman warisan baharu Rumah Batu',
      en: 'A new heritage home online',
    },
    summary: {
      ms: 'Laman sesawang baharu ini menghimpunkan sejarah yang disahkan, perjalanan pemulihan dan jemputan kepada semua generasi.',
      en: 'This new website brings together verified history, the restoration journey, and an invitation to every generation.',
    },
    body: {
      ms: [
        'Laman ini dibina untuk menghimpunkan kisah DBAK, lapan jalur waris dan perjalanan pemulihan Rumah Batu di satu tempat yang mudah dicapai oleh semua generasi. Kandungan sejarah disemak terhadap dokumen dan laman terdahulu; bahan baharu akan ditambah setelah semakan dan kelulusan keluarga.',
      ],
      en: [
        'This site was built to gather the story of DBAK, the eight family lines and the restoration journey of Rumah Batu in one place, easy to reach for every generation. Historical content is checked against documents and the previous website; new material will be added after family review and approval.',
      ],
    },
    verified: true,
  },
];
