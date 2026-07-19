import type { Bi } from '@/lib/i18n';

export interface WarisLine {
  n: number;
  name: string;
  note?: Bi;
}

/** The eight surviving children of DBAK, in the family's established order. */
export const warisLines: WarisLine[] = [
  { n: 1, name: 'Abang Zulkipli Akip' },
  {
    n: 2,
    name: 'Datu Patinggi Abang Haji Abdillah',
    note: {
      ms: 'Kemudiannya Datu Patinggi Sarawak dan pentadbir harta pusaka DBAK.',
      en: 'Later Datu Patinggi of Sarawak and administrator of the DBAK estate.',
    },
  },
  { n: 3, name: 'Abang Haji Fadzil' },
  { n: 4, name: 'Abang Haji Adawi' },
  { n: 5, name: 'Dayang Zurah / Yong' },
  { n: 6, name: 'Abang Haji Anis' },
  { n: 7, name: 'Dayang Hajjah Siti Nauyah' },
  { n: 8, name: 'Datin Dayang Hajjah Halimah' },
];

/** DBAK's five children who predeceased him, remembered alongside the eight. */
export const rememberedChildren: string[] = [
  'Dayang Malihah / Lihot',
  'Abang Zaini',
  'Abang Mohd Yaman',
  'Abang Mohamad',
  'Abang Sulhi',
];
