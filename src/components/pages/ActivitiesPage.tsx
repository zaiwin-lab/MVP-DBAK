import Link from 'next/link';
import { altHref, href, type Lang } from '@/lib/i18n';
import { Shell } from '@/components/Shell';
import { Timeline } from '@/components/Timeline';
import { Pic } from '@/components/Pic';
import { renewalTimeline } from '@/content/timeline';
import { JsonLd, eventLd } from '@/components/JsonLd';

const copy = {
  title: { ms: 'Aktiviti & Pencapaian', en: 'Activities & Milestones' },
  lede: {
    ms: 'Sejak 2020, keluarga ini telah berhimpun semula, membina perlembagaan, memulakan daftar digital, mendokumentasi rumah, dan meraikan seratus tahun wasiat. Inilah rekodnya.',
    en: 'Since 2020 this family has regathered, built a constitution, begun a digital registry, documented the house, and marked the centenary of the will. This is the record.',
  },
  gatherAlt: {
    ms: 'Kad jemputan Majlis Perjumpaan dan Mesyuarat Waris 8 pada 19 September 2020 dengan foto Rumah Batu',
    en: 'Invitation card for the Waris 8 gathering and meeting on 19 September 2020 with a photograph of Rumah Batu',
  },
  gatherCap: {
    ms: 'Jemputan 19 September 2020, Hotel UCSI Kuching · AJK W8-DBAK',
    en: 'Invitation, 19 September 2020, UCSI Hotel Kuching · W8-DBAK committee',
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

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <figure>
            <Pic
              name="ramah-tamah-2025"
              alt={t(copy.featAlt)}
              sizes="(min-width: 640px) 50vw, 100vw"
              imgClassName="w-full rounded-xl"
            />
            <figcaption className="mt-2 text-sm text-ink-soft">
              {t(copy.featCap)}
            </figcaption>
          </figure>
          <figure>
            <Pic
              name="majlis-2020-invite"
              alt={t(copy.gatherAlt)}
              sizes="(min-width: 640px) 50vw, 100vw"
              imgClassName="w-full rounded-xl"
            />
            <figcaption className="mt-2 text-sm text-ink-soft">
              {t(copy.gatherCap)}
            </figcaption>
          </figure>
        </div>

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
