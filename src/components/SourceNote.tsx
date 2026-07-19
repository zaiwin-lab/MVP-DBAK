import type { Bi, Lang } from '@/lib/i18n';
import { sourceLabel, type SourceClass } from '@/content/timeline';

/**
 * The visible "Sources & Notes" convention: every historical claim names its
 * source class so a visitor can tell oral history from court record.
 */
export function SourceNote({
  source,
  note,
  lang,
}: {
  source: SourceClass;
  note?: Bi;
  lang: Lang;
}) {
  return (
    <p className="mt-2 text-sm text-ink-soft">
      <span
        aria-hidden="true"
        className="mr-1.5 inline-block h-2 w-2 rounded-full bg-gold align-middle"
      />
      <span className="font-medium">{sourceLabel[source][lang]}</span>
      {note ? <> · {note[lang]}</> : null}
    </p>
  );
}
