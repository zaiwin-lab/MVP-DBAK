import Link from 'next/link';
import { altHref, href, type Lang } from '@/lib/i18n';
import { Shell } from '@/components/Shell';
import { Timeline } from '@/components/Timeline';
import { Pic } from '@/components/Pic';
import { EightStar } from '@/components/Motif';
import { renewalTimeline } from '@/content/timeline';
import { JsonLd, eventLd } from '@/components/JsonLd';

/** Family photo/document albums hosted on the committee's Google Drive. */
const driveAlbums = [
  {
    url: 'https://drive.google.com/drive/folders/1CYkwQXpuJAWeTsOJAfza-UM605yYjS8U',
    title: { ms: 'Galeri Majlis', en: 'Event Gallery' },
    desc: {
      ms: 'Koleksi foto majlis dan perhimpunan keluarga.',
      en: 'Photograph collections from family gatherings and ceremonies.',
    },
  },
  {
    url: 'https://drive.google.com/drive/folders/16_t028RQ_MD2PoferpVqtS8XyveKSelw',
    title: { ms: 'Program Majlis', en: 'Event Programmes' },
    desc: {
      ms: 'Aturcara, jemputan dan bahan program majlis keluarga, termasuk jemputan Majlis Perjumpaan Waris 8 (19 September 2020).',
      en: 'Running orders, invitations and programme material, including the Waris 8 gathering invitation (19 September 2020).',
    },
  },
  {
    url: 'https://drive.google.com/drive/folders/1bUYEzOjnuKPu-H3XbC474qif-OsDljCW',
    title: { ms: 'Khatam Quran', en: 'Khatam Quran' },
    desc: {
      ms: 'Dokumentasi majlis Khatam Quran keluarga Waris DBAK.',
      en: 'Documentation of the Waris DBAK family Khatam Quran ceremonies.',
    },
  },
];

const copy = {
  title: { ms: 'Aktiviti & Pencapaian', en: 'Activities & Milestones' },
  lede: {
    ms: 'Sejak 2020, keluarga ini telah berhimpun semula, membina perlembagaan, memulakan daftar digital, mendokumentasi rumah, dan meraikan seratus tahun wasiat. Inilah rekodnya.',
    en: 'Since 2020 this family has regathered, built a constitution, begun a digital registry, documented the house, and marked the centenary of the will. This is the record.',
  },
  albumsH: { ms: 'Album & dokumen majlis', en: 'Event albums & documents' },
  albumsLede: {
    ms: 'Koleksi penuh foto dan bahan majlis tahunan keluarga disimpan dalam album Google Drive jawatankuasa.',
    en: 'The full photo collections and materials from the family’s annual events are kept in the committee’s Google Drive albums.',
  },
  albumsCta: { ms: 'Buka album di Drive', en: 'Open the album in Drive' },
  albumsNote: {
    ms: 'Pautan luar ke Google Drive; dibuka dalam tab baharu.',
    en: 'External links to Google Drive; each opens in a new tab.',
  },
  featAlt: {
    ms: 'Keluarga besar Waris DBAK bersama Premier Sarawak di dewan besar, April 2025',
    en: 'The extended Waris DBAK family with the Premier of Sarawak in a grand hall, April 2025',
  },
  featCap: {
    ms: 'Ramah Tamah Bersama Premier Sarawak, 19 April 2025 · Arkib keluarga W8-DBAK',
    en: 'Ramah Tamah with the Premier of Sarawak, 19 April 2025 · W8-DBAK family archive',
  },
  tlH: { ms: 'Garis masa 2020 hingga kini', en: 'Timeline, 2020 to today' },
  pendingNote: {
    ms: 'Aktiviti 2022–2026 selanjutnya (jangkauan "I\'m W8", program komuniti Julai 2022, kajian tapak, dan lain-lain) sedang disemak daripada arkib keluarga sebelum diterbitkan. Kami tidak menerbitkan sesuatu yang belum disahkan.',
    en: 'Further 2022–2026 activities (the "I\'m W8" outreach, the July 2022 community programme, site studies, and more) are being verified from the family archives before publication. We do not publish what is not yet confirmed.',
  },
  galleryCta: { ms: 'Lihat galeri penuh', en: 'See the full gallery' },
};

export function ActivitiesPage({ lang }: { lang: Lang }) {
  const t = <T,>(b: { ms: T; en: T }): T => b[lang];
  return (
    <Shell lang={lang} altUrl={altHref('activities', lang)}>
      <JsonLd data={eventLd} />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <header className="max-w-3xl">
          <h1 className="font-display [font-size:var(--text-fluid-hero)]">
            {t(copy.title)}
          </h1>
          <p className="mt-4 text-xl text-ink-soft">{t(copy.lede)}</p>
        </header>

        <figure className="mt-10">
          <Pic
            name="ramah-tamah-2025"
            alt={t(copy.featAlt)}
            sizes="(min-width: 1024px) 60rem, 100vw"
            imgClassName="w-full rounded-xl"
          />
          <figcaption className="mt-2 text-sm text-ink-soft">
            {t(copy.featCap)}
          </figcaption>
        </figure>

        <section className="mt-14">
          <h2 className="font-display [font-size:var(--text-fluid-h2)]">
            {t(copy.albumsH)}
          </h2>
          <p className="prose-flow mt-3">{t(copy.albumsLede)}</p>
          <ul className="mt-7 grid gap-5 sm:grid-cols-3">
            {driveAlbums.map((album) => (
              <li key={album.url}>
                <a
                  href={album.url}
                  target="_blank"
                  rel="noopener"
                  className="group flex h-full flex-col rounded-xl border border-ink/10 bg-bg p-5 no-underline transition-colors hover:border-green-700 hover:bg-surface"
                >
                  <span className="text-gold-deep">
                    <EightStar size={22} />
                  </span>
                  <h3 className="mt-3 font-display text-xl text-green-900">
                    {album.title[lang]}
                  </h3>
                  <p className="mt-1.5 grow text-[0.95rem] text-ink-soft">
                    {album.desc[lang]}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 font-medium text-green-700 underline-offset-4 group-hover:underline">
                    {t(copy.albumsCta)}
                    <svg
                      viewBox="0 0 16 16"
                      width="14"
                      height="14"
                      aria-hidden="true"
                      className="shrink-0"
                    >
                      <path
                        d="M6 3h7v7M13 3 7.5 8.5M12 9.5V12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h2.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-ink-soft">{t(copy.albumsNote)}</p>
        </section>

        <section className="mt-14">
          <h2 className="font-display [font-size:var(--text-fluid-h2)]">
            {t(copy.tlH)}
          </h2>
          <div className="mt-8">
            <Timeline entries={renewalTimeline} lang={lang} />
          </div>
          <p className="prose-flow mt-8 rounded-xl bg-surface p-5 text-ink-soft">
            {t(copy.pendingNote)}
          </p>
        </section>

        <p className="mt-10">
          <Link
            href={href('gallery', lang)}
            className="font-medium text-green-700 underline underline-offset-4 hover:text-green-900"
          >
            {t(copy.galleryCta)} →
          </Link>
        </p>
      </div>
    </Shell>
  );
}
