import { altHref, type Lang } from '@/lib/i18n';
import { Shell } from '@/components/Shell';
import { updates } from '@/content/updates';

const copy = {
  title: { ms: 'Berita & Kemas Kini', en: 'News & Updates' },
  lede: {
    ms: 'Perkembangan yang disahkan, direkodkan seadanya. Kemas kini baharu ditambah selepas semakan.',
    en: 'Verified developments, recorded as they are. New updates are added after review.',
  },
  verified: { ms: 'Disahkan', en: 'Verified' },
};

export function NewsPage({ lang }: { lang: Lang }) {
  const t = <T,>(b: { ms: T; en: T }): T => b[lang];
  const sorted = [...updates].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <Shell lang={lang} altUrl={altHref('news', lang)}>
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <header className="max-w-3xl">
          <h1 className="font-display [font-size:var(--text-fluid-hero)]">
            {t(copy.title)}
          </h1>
          <p className="mt-4 text-xl text-ink-soft">{t(copy.lede)}</p>
        </header>

        <div className="mt-12 max-w-3xl space-y-14">
          {sorted.map((u) => (
            <article
              key={u.slug}
              id={u.slug}
              aria-labelledby={`${u.slug}-h`}
              className="scroll-mt-24 border-t border-gold/50 pt-6"
            >
              <p className="text-sm text-ink-soft">
                <time dateTime={u.date}>{u.dateLabel[lang]}</time>
                {u.verified ? (
                  <span className="ml-3 rounded-full bg-green-700/10 px-2.5 py-0.5 text-xs font-medium text-green-700">
                    {t(copy.verified)}
                  </span>
                ) : null}
              </p>
              <h2
                id={`${u.slug}-h`}
                className="mt-2 font-display [font-size:var(--text-fluid-h3)]"
              >
                {u.title[lang]}
              </h2>
              <div className="prose-flow mt-4">
                {u.body[lang].map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </Shell>
  );
}
