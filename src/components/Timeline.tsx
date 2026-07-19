import type { Lang } from '@/lib/i18n';
import type { TimelineEntry } from '@/content/timeline';
import { SourceNote } from './SourceNote';

export function Timeline({
  entries,
  lang,
}: {
  entries: TimelineEntry[];
  lang: Lang;
}) {
  return (
    <ol className="relative ml-3 border-l border-gold/60 sm:ml-6">
      {entries.map((e, i) => (
        <li key={i} className="relative pb-10 pl-6 last:pb-0 sm:pl-10">
          <span
            aria-hidden="true"
            className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-gold bg-bg"
          />
          <p className="font-display text-2xl font-semibold text-green-900">
            {e.year}
          </p>
          <h3 className="mt-1 font-display text-xl">
            {e.title[lang]}
            {e.date ? (
              <span className="ml-2 align-middle text-sm font-normal text-ink-soft">
                {e.date[lang]}
              </span>
            ) : null}
          </h3>
          <p className="mt-2 max-w-prose">{e.body[lang]}</p>
          <SourceNote source={e.source} note={e.sourceNote} lang={lang} />
        </li>
      ))}
    </ol>
  );
}
