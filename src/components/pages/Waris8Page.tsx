import Link from 'next/link';
import { altHref, href, type Lang } from '@/lib/i18n';
import { Shell } from '@/components/Shell';
import { Waris8Diagram } from '@/components/Waris8Diagram';
import { SourceNote } from '@/components/SourceNote';
import { Divider } from '@/components/Motif';

const copy = {
  title: { ms: 'Waris 8', en: 'Waris 8' },
  lede: {
    ms: 'Lapan anak DBAK yang meneruskan zuriat, lapan jalur yang kini menganggotai ribuan waris. Setiap jalur setara; setiap waris ada tempat.',
    en: 'The eight children of DBAK who carried the line, eight branches that now number thousands of heirs. Every line is equal; every heir has a place.',
  },
  estNote: {
    ms: 'Kajian tahun 2020 menganggarkan lebih kurang 1,500 waris dari generasi ketiga hingga ketujuh — kira-kira separuh daripada jumlah semua waris. Angka ini ialah anggaran sejarah, bukan jumlah semasa.',
    en: 'A 2020 study estimated roughly 1,500 heirs across generations three to seven — about half of all descendants. This figure is a historical estimate, not a current total.',
  },
  repH: {
    ms: 'Perwakilan dan penjagaan bersama',
    en: 'Representation and shared stewardship',
  },
  rep1: {
    ms: 'Setiap jalur melantik dua orang wakil. Enam belas wakil inilah yang menganggotai Jawatankuasa Pengurusan Wakaf Rumah Batu DBAK (W8-DBAK), bertindak di bawah Perlembagaan Bil. 1/2021 (disemak 01/2024). Wakil bertanggungjawab melapor kembali kepada waris jalur masing-masing; keputusan besar memerlukan kemuafakatan waris, bukan keputusan individu.',
    en: 'Each line appoints two representatives. These sixteen form the Rumah Batu DBAK Wakaf Management Committee (W8-DBAK), acting under Constitution No. 1/2021 (revised 01/2024). Representatives answer back to the heirs of their own line; major decisions require the consensus of the heirs, never one person’s will.',
  },
  rep2: {
    ms: 'Waris berumur 21 tahun ke atas berhak mengundi; yang berumur 27 tahun ke atas layak bertanding sebagai wakil. Senarai jawatankuasa semasa (sesi 2024–2026) akan diterbitkan di sini setelah semakan dan kelulusan, lengkap dengan tempoh sesi supaya rekod lama tidak disalah anggap sebagai kepimpinan semasa.',
    en: 'Heirs aged 21 and above may vote; those 27 and above may stand as representatives. The current committee list (2024–2026 session) will be published here after verification and approval, always with session dates so that past records are never mistaken for current leadership.',
  },
  privacyH: { ms: 'Privasi didahulukan', en: 'Privacy first' },
  privacy1: {
    ms: 'Laman awam ini tidak menerbitkan nombor kad pengenalan, alamat, telefon, e-mel peribadi, tarikh lahir, salasilah peribadi terperinci, atau butiran kanak-kanak. Daftar waris penuh ialah perkhidmatan selamat yang berasingan, diurus Setiausaha di bawah Notis Perlindungan Data Peribadi W8-DBAK.',
    en: 'This public site publishes no identity-card numbers, addresses, phone numbers, private emails, dates of birth, detailed private lineage records, or details of minors. The full family registry is a separate secure service, managed by the Secretary under the W8-DBAK Personal Data Protection Notice.',
  },
  joinH: {
    ms: 'Generasi muda: ini jemputan anda',
    en: 'Younger generations: this is your invitation',
  },
  join1: {
    ms: 'Jika datuk atau nenek anda pernah menyebut "Rumah Batu", anda sebahagian daripada kisah ini. Kenali jalur anda, hadiri majlis keluarga, dan daftarkan minat anda.',
    en: 'If your grandparents ever spoke of "Rumah Batu", you are part of this story. Learn your line, come to the family gatherings, and register your interest.',
  },
  joinCta: { ms: 'Turut serta', en: 'Take part' },
};

export function Waris8Page({ lang }: { lang: Lang }) {
  const t = <T,>(b: { ms: T; en: T }): T => b[lang];
  return (
    <Shell lang={lang} altUrl={altHref('waris8', lang)}>
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <header className="mx-auto max-w-3xl text-center">
          <Divider />
          <h1 className="mt-6 font-display [font-size:var(--text-fluid-hero)]">
            {t(copy.title)}
          </h1>
          <p className="mt-4 text-xl text-ink-soft">{t(copy.lede)}</p>
        </header>

        <div className="mt-10">
          <Waris8Diagram lang={lang} />
        </div>

        <div className="prose-flow mx-auto mt-12">
          <p className="text-ink-soft">{t(copy.estNote)}</p>
          <SourceNote source="family" lang={lang} />

          <h2>{t(copy.repH)}</h2>
          <p>{t(copy.rep1)}</p>
          <p>{t(copy.rep2)}</p>
          <SourceNote source="document" lang={lang} />

          <h2>{t(copy.privacyH)}</h2>
          <p>{t(copy.privacy1)}</p>

          <h2>{t(copy.joinH)}</h2>
          <p>{t(copy.join1)}</p>
          <p>
            <Link
              href={href('participate', lang)}
              className="inline-block rounded-md bg-green-700 px-5 py-2.5 font-medium text-ivory no-underline hover:bg-green-900"
            >
              {t(copy.joinCta)}
            </Link>
          </p>
        </div>
      </div>
    </Shell>
  );
}
