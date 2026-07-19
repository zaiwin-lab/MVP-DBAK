import type { Lang } from '@/lib/i18n';
import { statusLabel, type PhaseStatus } from '@/content/phases';

const styles: Record<PhaseStatus, string> = {
  completed: 'bg-green-700 text-ivory',
  inprogress: 'bg-terracotta text-ivory',
  next: 'border border-gold-deep text-gold-deep bg-transparent',
  future: 'bg-surface text-ink-soft border border-ink-soft/30',
};

export function StatusChip({
  status,
  lang,
}: {
  status: PhaseStatus;
  lang: Lang;
}) {
  return (
    <span
      className={`inline-block rounded-full px-3 py-0.5 text-sm font-medium ${styles[status]}`}
    >
      {statusLabel[status][lang]}
    </span>
  );
}
