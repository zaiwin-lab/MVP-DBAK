import type { Bi } from '@/lib/i18n';

export type PhaseStatus = 'completed' | 'inprogress' | 'next' | 'future';

export const statusLabel: Record<PhaseStatus, Bi> = {
  completed: { ms: 'Selesai', en: 'Completed' },
  inprogress: { ms: 'Sedang berjalan', en: 'In progress' },
  next: { ms: 'Seterusnya', en: 'Next' },
  future: { ms: 'Aspirasi masa depan', en: 'Future aspiration' },
};

export interface Phase {
  title: Bi;
  status: PhaseStatus;
  body: Bi;
  evidence?: Bi;
}

/**
 * Statuses are assigned only from verified evidence (old-site documentation,
 * published committee material). Never percentages.
 */
export const phases: Phase[] = [
  {
    title: {
      ms: 'Penyelidikan & Dokumentasi',
      en: 'Research & Documentation',
    },
    status: 'inprogress',
    body: {
      ms: 'Mengumpul sejarah lisan, gambar, dokumen hakmilik, rekod mahkamah dan laporan terdahulu; merekod keadaan sedia ada Rumah Batu.',
      en: 'Collecting oral histories, photographs, titles, court records and prior reports; recording the existing condition of Rumah Batu.',
    },
    evidence: {
      ms: 'Dokumentasi bergambar 2020–2022 telah dibuat; semakan arkib 2024–2026 sedang berjalan.',
      en: 'Photographic documentation 2020–2022 completed; review of 2024–2026 archives ongoing.',
    },
  },
  {
    title: {
      ms: 'Penilaian & Penstabilan',
      en: 'Assessment & Stabilisation',
    },
    status: 'next',
    body: {
      ms: 'Penilaian profesional struktur, seni bina, bahan dan perkhidmatan; mengenal pasti keutamaan penstabilan dan perlindungan cuaca yang mendesak.',
      en: 'Professional structural, architectural, material and services assessments; identifying urgent stabilisation and weatherproofing priorities.',
    },
    evidence: {
      ms: 'Dokumentasi masih diperlukan: laporan penilaian struktur bertauliah.',
      en: 'Evidence still required: a certified structural assessment report.',
    },
  },
  {
    title: {
      ms: 'Reka Bentuk Pemuliharaan & Kelulusan',
      en: 'Conservation Design & Approvals',
    },
    status: 'future',
    body: {
      ms: 'Prinsip pemuliharaan dan kegunaan masa depan yang dipersetujui waris; reka bentuk, anggaran kos, kelulusan pihak berkuasa dan pembiayaan.',
      en: 'Conservation principles and a viable future use agreed by the heirs; designs, estimates, approvals and funding.',
    },
  },
  {
    title: {
      ms: 'Kerja-Kerja Pemuliharaan',
      en: 'Restoration Works',
    },
    status: 'future',
    body: {
      ms: 'Kerja pemuliharaan fizikal dengan rekod fotografi dan teknikal pada setiap peringkat. Perkataan "telah dipulihkan" hanya akan digunakan apabila kerja ini benar-benar selesai.',
      en: 'Physical conservation works with photographic and technical records at every stage. The word "restored" will only be used once this work is truly complete.',
    },
  },
  {
    title: {
      ms: 'Warisan Hidup & Jagaan Jangka Panjang',
      en: 'Living Heritage & Long-Term Care',
    },
    status: 'future',
    body: {
      ms: 'Tafsiran warisan untuk pelawat dan generasi akan datang; penyelenggaraan, tadbir urus, pengisian aktiviti dan jagaan berterusan.',
      en: 'Heritage interpretation for visitors and future generations; maintenance, governance, programming and continuing care.',
    },
  },
];
