import type { Lang } from '@/lib/i18n';
import { phases } from '@/content/phases';
import { StatusChip } from './StatusChip';

export function PhaseTracker({
  lang,
  detailed = false,
}: {
  lang: Lang;
  detailed?: boolean;
}) {
  return (
    <ol className="grid gap-4">
      {phases.map((p, i) => (
        <li
          key={i}
          className="rounded-xl border border-ink/10 bg-bg p-5 sm:flex sm:items-start sm:justify-between sm:gap-6"
        >
          <div className="max-w-prose">
            <h3 className="font-display text-lg">
              <span aria-hidden="true" className="mr-2 text-gold-deep">
                {i + 1}.
              </span>
              {p.title[lang]}
            </h3>
            <p className="mt-1.5 text-[0.98rem]">{p.body[lang]}</p>
            {detailed && p.evidence ? (
              <p className="mt-2 text-sm text-ink-soft">
                {lang === 'ms' ? 'Bukti: ' : 'Evidence: '}
                {p.evidence[lang]}
              </p>
            ) : null}
          </div>
          <div className="mt-3 shrink-0 sm:mt-1">
            <StatusChip status={p.status} lang={lang} />
          </div>
        </li>
      ))}
    </ol>
  );
}
