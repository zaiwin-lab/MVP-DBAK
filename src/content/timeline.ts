import type { Bi } from '@/lib/i18n';

export type SourceClass =
  | 'document' // signed/official document in family custody
  | 'court' // court record
  | 'family' // family/oral history account
  | 'committee' // committee update
  | 'pending'; // named in archives, documentation under review

export interface TimelineEntry {
  year: string;
  date?: Bi;
  title: Bi;
  body: Bi;
  source: SourceClass;
  sourceNote?: Bi;
}

export const sourceLabel: Record<SourceClass, Bi> = {
  document: { ms: 'Dokumen keluarga', en: 'Family document' },
  court: { ms: 'Rekod mahkamah', en: 'Court record' },
  family: { ms: 'Riwayat keluarga', en: 'Family account' },
  committee: { ms: 'Kemas kini AJK', en: 'Committee update' },
  pending: { ms: 'Sumber dalam semakan', en: 'Source under review' },
};

/** The long arc: 1841 → today. Verified against w8dbak.com and family documents. */
export const historicTimeline: TimelineEntry[] = [
  {
    year: '1841',
    title: { ms: 'Kelahiran DBAK', en: 'DBAK is born' },
    body: {
      ms: 'Datu Bandar Abang Haji Muhammad Kassim dilahirkan, putera kepada Datu Bandar Abang Haji Bolhassan bin Datu Patinggi Abang Ali dan Dayang Aisah binti Abang Wahid.',
      en: 'Datu Bandar Abang Haji Muhammad Kassim is born, son of Datu Bandar Abang Haji Bolhassan bin Datu Patinggi Abang Ali and Dayang Aisah binti Abang Wahid.',
    },
    source: 'family',
  },
  {
    year: '1863',
    title: { ms: 'Pembinaan Rumah Batu', en: 'Rumah Batu is built' },
    body: {
      ms: 'Mengikut riwayat keluarga, Rumah Batu didirikan ketika DBAK berusia 22 tahun, berkemungkinan sebagai usaha bersama ayahandanya. Sesetengah ulasan sejarah mencadangkan pembinaan konkrit di Sarawak hanya bermula sekitar 1890; kedua-dua kemungkinan dicatat dengan jujur sementara bukti utama disemak.',
      en: 'By family account, Rumah Batu was raised when DBAK was 22, likely a joint effort with his father. Some historical commentary places concrete construction in Sarawak closer to the 1890s; both possibilities are recorded honestly while primary evidence is reviewed.',
    },
    source: 'family',
  },
  {
    year: '1921',
    date: { ms: '31 Mac 1921', en: '31 March 1921' },
    title: { ms: 'Wasiat DBAK', en: 'The will of DBAK' },
    body: {
      ms: 'DBAK memeterai wasiatnya, bertulis pada 22 Rejab 1339. Pada 18 Julai 1921 beliau kembali ke rahmatullah di Mekah ketika menunaikan haji, pada usia 80 tahun; isterinya Dayang Sahadah menyusul dua hari kemudian. Kedua-duanya disemadikan di Mekah.',
      en: 'DBAK seals his will, written on 22 Rejab 1339. On 18 July 1921 he passes away in Mecca while performing the Hajj, aged 80; his wife Dayang Sahadah follows two days later. Both are laid to rest in Mecca.',
    },
    source: 'document',
  },
  {
    year: '1922',
    date: { ms: 'November 1922', en: 'November 1922' },
    title: { ms: 'Deklarasi lapan beradik', en: 'Declaration of the eight' },
    body: {
      ms: 'Lapan orang anak DBAK yang masih hidup bersepakat melalui satu deklarasi untuk menjadikan Rumah Batu harta wakaf demi kepentingan semua waris. (Tarikh penuh dalam semakan dokumen: rekod menyebut 10 dan 22 November.)',
      en: 'The eight surviving children of DBAK agree by declaration to hold Rumah Batu as wakaf for the benefit of all heirs. (Exact date under document review: records cite both 10 and 22 November.)',
    },
    source: 'document',
  },
  {
    year: '1946',
    title: { ms: 'Mahkamah mengesahkan wakaf', en: 'The courts confirm the wakaf' },
    body: {
      ms: 'Keputusan Mahkamah Residen (22 Julai) dan Mahkamah Agung (2 September) memutuskan bahawa Rumah Batu adalah harta wakaf peninggalan DBAK untuk manfaat waris-warisnya.',
      en: 'Decisions of the Resident Court (22 July) and Supreme Court (2 September) hold that Rumah Batu is wakaf property left by DBAK for the benefit of his heirs.',
    },
    source: 'court',
  },
  {
    year: '2016',
    title: { ms: 'Mahkamah Syariah mengekalkan status', en: 'Syariah Court upholds the status' },
    body: {
      ms: 'Mahkamah Syariah mengekalkan status Rumah Batu sebagai harta wakaf keluarga, berpandukan keputusan Mahkamah Agung 1946.',
      en: 'The Syariah Court upholds Rumah Batu as family wakaf property, guided by the 1946 Supreme Court decision.',
    },
    source: 'court',
  },
];

/** The renewal: 2020 → today. */
export const renewalTimeline: TimelineEntry[] = [
  {
    year: '2020',
    date: { ms: '19 September 2020', en: '19 September 2020' },
    title: {
      ms: 'Perjumpaan & Mesyuarat Waris 8',
      en: 'Waris 8 gathering and meeting',
    },
    body: {
      ms: 'Buat pertama kali sejak sekian lama, wakil kelapan-lapan jalur berkumpul di Hotel UCSI, Kuching. Jawatankuasa 16 orang ditubuhkan, dua wakil bagi setiap jalur.',
      en: 'For the first time in many years, representatives of all eight lines gather at UCSI Hotel, Kuching. A 16-member committee is formed, two representatives per line.',
    },
    source: 'family',
  },
  {
    year: '2021',
    date: { ms: '13 Februari 2021', en: '13 February 2021' },
    title: { ms: 'Perlembagaan W8-DBAK', en: 'The W8-DBAK constitution' },
    body: {
      ms: 'Perlembagaan W8-DBAK Bil. 1/2021 dipersetujui dan dimaktubkan sebagai hala tuju pengurusan Rumah Batu; disemak semula pada Januari 2024.',
      en: 'Constitution W8-DBAK No. 1/2021 is agreed and enacted as the charter for managing Rumah Batu; revised January 2024.',
    },
    source: 'document',
  },
  {
    year: '2021',
    date: { ms: '3 April 2021', en: '3 April 2021' },
    title: {
      ms: 'Majlis Memperingati 100 Tahun Wasiat DBAK',
      en: 'Centenary of the will of DBAK',
    },
    body: {
      ms: 'Seratus tahun selepas wasiat 1921, keluarga berhimpun secara fizikal dan maya untuk memperingatinya, lengkap dengan pembentangan sejarah dan rakaman yang kekal di saluran YouTube keluarga.',
      en: 'One hundred years after the 1921 will, the family gathers in person and online to commemorate it, with history presentations preserved on the family YouTube channel.',
    },
    source: 'family',
  },
  {
    year: '2021',
    title: {
      ms: 'Projek Pangkalan Data Waris',
      en: 'Family database project',
    },
    body: {
      ms: '"Waris sah kerana datanya sahih." Pasukan lapan jalur memulakan daftar waris digital Fasa 1, mesyuarat maya sepanjang pandemik, dan rekod rasmi keluarga.',
      en: '"Heirs are recognised because their records are sound." An eight-line team begins the Phase 1 digital registry, virtual meetings through the pandemic, and formal family records.',
    },
    source: 'family',
  },
  {
    year: '2022',
    title: { ms: 'Mesyuarat Agung & jangkauan waris', en: 'AGM and family outreach' },
    body: {
      ms: 'Mesyuarat Agung 2022 diadakan bersama usaha jangkauan pendaftaran waris dan penyertaan meluas merentas jalur.',
      en: 'The 2022 AGM is held alongside registry outreach, with strong participation across the lines.',
    },
    source: 'family',
  },
  {
    year: '2022',
    date: { ms: '1 Oktober 2022', en: '1 October 2022' },
    title: {
      ms: 'Bab baharu penjagaan bersama',
      en: 'A renewed chapter of stewardship',
    },
    body: {
      ms: 'Dengan lawatan ke Rumah Batu pada 1 Oktober 2022, bermulalah bab baharu penjagaan keluarga terhadap rumah ini, diiringi cadangan pelan pemulihan dan pembangunan serta dokumentasi tapak.',
      en: 'With a visit to Rumah Batu on 1 October 2022, a renewed chapter of family stewardship begins, alongside proposals for a restoration plan and site documentation.',
    },
    source: 'family',
  },
  {
    year: '2025',
    date: { ms: '19 April 2025', en: '19 April 2025' },
    title: {
      ms: 'Ramah Tamah Bersama Premier Sarawak',
      en: 'Ramah Tamah with the Premier of Sarawak',
    },
    body: {
      ms: 'Detik bersejarah: keluarga besar Waris DBAK berhimpun dalam Majlis Ramah Tamah Bersama Premier Sarawak, tanda sokongan dan perhatian terhadap usaha memelihara Rumah Batu.',
      en: 'A milestone moment: the extended Waris DBAK family gathers for a Ramah Tamah with the Premier of Sarawak, a mark of support for the effort to care for Rumah Batu.',
    },
    source: 'family',
  },
  {
    year: '2024–2026',
    title: {
      ms: 'Kerja jawatankuasa sesi semasa',
      en: 'Current committee session',
    },
    body: {
      ms: 'Perancangan pemuliharaan, kajian tapak dan penglibatan pihak berkepentingan diteruskan oleh jawatankuasa sesi 2024–2026. Butiran penuh sedang disemak daripada arkib terkini sebelum diterbitkan.',
      en: 'Conservation planning, site studies and stakeholder engagement continue under the 2024–2026 committee session. Full details are being verified from recent archives before publication.',
    },
    source: 'pending',
  },
];
