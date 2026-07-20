import Link from 'next/link';
import { altHref, href, type Lang } from '@/lib/i18n';
import { Shell } from '@/components/Shell';
import { Pic } from '@/components/Pic';
import { EightStar } from '@/components/Motif';
import { albumSections } from '@/content/albums';

const copy = {
  title: { ms: 'Album Majlis', en: 'Event Albums' },
  lede: {
    ms: 'Koleksi foto dan bahan rasmi majlis keluarga Waris DBAK, dipilih dan disemak daripada arkib jawatankuasa sebelum diterbitkan. Bahan peribadi tidak disiarkan.',
    en: 'Photographs and official material from Waris DBAK family events, selected and reviewed from the committee archives before publication. Private material is never published.',
  },
  toc: { ms: 'Dalam album ini', en: 'In these albums' },
  photos: { ms: 'foto', en: 'photos' },
  back: { ms: 'Kembali ke Aktiviti & Pencapaian', en: 'Back to Activities & Milestones' },
};

export function AlbumsPage({ lang }: { lang: Lang }) {
  const t = <T,>(b: { ms: T; en: T }): T => b[lang];
  return (
    <Shell lang={lang} altUrl={altHref('albums', lang)}>
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <header className="max-w-3xl">
          <h1 className="font-display [font-size:var(--text-fluid-hero)]">
            {t(copy.title)}
          </h1>
          <p className="mt-4 text-xl text-ink-soft">{t(copy.lede)}</p>
          <nav aria-label={t(copy.toc)} className="mt-6 flex flex-wrap gap-2">
            {albumSections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="rounded-full border border-ink/25 px-3.5 py-1 text-sm font-medium text-ink-soft no-underline hover:border-green-700 hover:text-green-700"
              >
                {s.title[lang]} · {s.count}
              </a>
            ))}
          </nav>
        </header>

        {albumSections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="mt-16 scroll-mt-24"
          >
            <div className="flex items-start gap-3">
              <span className="mt-1.5 text-gold-deep">
                <EightStar size={24} />
              </span>
              <div>
                <h2 className="font-display [font-size:var(--text-fluid-h2)]">
                  {section.title[lang]}
                </h2>
                <p className="prose-flow mt-2 max-w-3xl text-ink-soft">
                  {section.blurb[lang]}
                </p>
                <p className="mt-1 text-sm text-ink-soft">
                  {section.count} {t(copy.photos)} · {section.credit[lang]}
                </p>
              </div>
            </div>

            {section.groups ? (
              section.groups.map((group) => (
                <div key={group.from} className="mt-8">
                  <h3 className="font-display text-lg text-green-900">
                    {group.label[lang]}
                  </h3>
                  <ul className="mt-4 grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
                    {Array.from(
                      { length: group.to - group.from + 1 },
                      (_, i) => group.from + i
                    ).map((n) => (
                      <li key={n}>
                        <Pic
                          name={`album-${section.prefix}-${String(n).padStart(2, '0')}`}
                          alt={`${section.alt[lang]} ${n}`}
                          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 100vw"
                          imgClassName="w-full rounded-lg"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <ul className="mt-7 grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {Array.from({ length: section.count }, (_, i) => i + 1).map(
                  (n) => (
                    <li key={n}>
                      <Pic
                        name={`album-${section.prefix}-${String(n).padStart(2, '0')}`}
                        alt={`${section.alt[lang]} ${n}`}
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 100vw"
                        imgClassName="w-full rounded-lg"
                      />
                    </li>
                  )
                )}
              </ul>
            )}
          </section>
        ))}

        <p className="mt-14">
          <Link
            href={href('activities', lang)}
            className="font-medium text-green-700 underline underline-offset-4 hover:text-green-900"
          >
            ← {t(copy.back)}
          </Link>
        </p>
      </div>
    </Shell>
  );
}
