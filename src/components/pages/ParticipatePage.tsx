import { altHref, type Lang } from '@/lib/i18n';
import { Shell } from '@/components/Shell';
import { EightStar } from '@/components/Motif';

const EMAIL = 'maklum@w8dbak.com';

const copy = {
  title: { ms: 'Turut Serta', en: 'Participate' },
  lede: {
    ms: 'Warisan ini dijaga oleh tangan yang banyak. Pilih satu cara — kecil atau besar — dan jadilah sebahagian daripada kisah Rumah Batu.',
    en: 'This heritage is kept by many hands. Choose one way, small or large, and become part of the Rumah Batu story.',
  },
  ways: {
    ms: [
      {
        t: 'Sumbangkan kenangan',
        b: 'Cerita datuk nenek, surat lama, atau kenangan anda sendiri tentang Rumah Batu dan keluarga. Setiap cerita membantu melengkapkan sejarah.',
        subject: 'Kenangan untuk arkib Rumah Batu',
      },
      {
        t: 'Kenal pasti gambar',
        b: 'Ada gambar lama keluarga? Atau anda mengenali wajah dan tarikh dalam gambar arkib kami? Bantu kami melabelnya dengan tepat.',
        subject: 'Maklumat gambar arkib',
      },
      {
        t: 'Tawarkan kepakaran',
        b: 'Pemuliharaan, seni bina, kejuruteraan, undang-undang, penyelidikan, media, penjagaan arkib: kemahiran anda ada tempatnya di sini.',
        subject: 'Tawaran kepakaran untuk Rumah Batu',
      },
      {
        t: 'Sokong pemulihan',
        b: 'Sokongan untuk kerja pemuliharaan diselaraskan oleh jawatankuasa dan direkodkan dengan telus. Hubungi kami untuk maklumat semasa.',
        subject: 'Sokongan untuk pemulihan Rumah Batu',
      },
      {
        t: 'Daftar minat waris',
        b: 'Waris jalur 1 hingga 8 boleh mendaftarkan minat untuk dihubungi mengenai daftar waris dan majlis keluarga.',
        subject: 'Pendaftaran minat waris',
      },
    ],
    en: [
      {
        t: 'Contribute a memory',
        b: 'Your grandparents’ stories, old letters, or your own memories of Rumah Batu and the family. Every story helps complete the history.',
        subject: 'A memory for the Rumah Batu archive',
      },
      {
        t: 'Identify a photograph',
        b: 'Do you keep old family photographs? Or recognise a face or a date in our archive images? Help us label them accurately.',
        subject: 'Information about an archive photograph',
      },
      {
        t: 'Volunteer expertise',
        b: 'Conservation, architecture, engineering, law, research, media, archival care: your skills have a place here.',
        subject: 'Offering expertise for Rumah Batu',
      },
      {
        t: 'Support the restoration',
        b: 'Support for the conservation work is coordinated by the committee and recorded transparently. Write to us for current information.',
        subject: 'Supporting the Rumah Batu restoration',
      },
      {
        t: 'Register heir interest',
        b: 'Heirs of lines 1 to 8 can register interest to be contacted about the family registry and gatherings.',
        subject: 'Heir interest registration',
      },
    ],
  },
  writeCta: { ms: 'Tulis kepada kami', en: 'Write to us' },
  formNote: {
    ms: 'Buat masa ini, penyertaan diurus melalui e-mel supaya data peribadi anda sampai terus kepada Setiausaha sahaja. Borang dalam talian yang selamat akan dilancarkan setelah proses pengendalian data diluluskan; ia tidak akan meminta lebih daripada yang perlu.',
    en: 'For now, participation is handled by email so your personal details reach only the Secretary. A secure online form will launch once the data-handling process is approved; it will never ask for more than is needed.',
  },
  privacyNote: {
    ms: 'Nota privasi: e-mel anda diproses di bawah Notis Perlindungan Data Peribadi W8-DBAK (Akta PDP 2010). Jangan hantar nombor kad pengenalan atau dokumen sensitif dalam e-mel pertama.',
    en: 'Privacy note: your email is processed under the W8-DBAK Personal Data Protection Notice (PDPA 2010). Please do not send identity-card numbers or sensitive documents in a first email.',
  },
};

export function ParticipatePage({ lang }: { lang: Lang }) {
  const t = <T,>(b: { ms: T; en: T }): T => b[lang];
  return (
    <Shell lang={lang} altUrl={altHref('participate', lang)}>
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <header className="max-w-3xl">
          <h1 className="font-display [font-size:var(--text-fluid-hero)]">
            {t(copy.title)}
          </h1>
          <p className="mt-4 text-xl text-ink-soft">{t(copy.lede)}</p>
        </header>

        <ul className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {t(copy.ways).map((w, i) => (
            <li key={i} className="border-t border-gold/50 pt-5">
              <span className="text-green-700">
                <EightStar size={20} />
              </span>
              <h2 className="mt-2 font-display text-xl">{w.t}</h2>
              <p className="mt-2 max-w-prose">{w.b}</p>
              <p className="mt-3">
                <a
                  href={`mailto:${EMAIL}?subject=${encodeURIComponent(w.subject)}`}
                  className="font-medium text-green-700 underline underline-offset-4 hover:text-green-900"
                >
                  {t(copy.writeCta)}: {EMAIL}
                </a>
              </p>
            </li>
          ))}
        </ul>

        <div className="prose-flow mt-14 rounded-xl bg-surface p-6">
          <p>{t(copy.formNote)}</p>
          <p className="text-sm text-ink-soft">{t(copy.privacyNote)}</p>
        </div>
      </div>
    </Shell>
  );
}
