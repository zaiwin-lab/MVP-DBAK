import type { Lang } from '@/lib/i18n';
import { warisLines } from '@/content/waris8';

/**
 * Radial eight-branch composition on wide screens; the same content renders
 * as stacked cards on mobile. Pure SVG + HTML, no client JS.
 */
export function Waris8Diagram({ lang }: { lang: Lang }) {
  const cx = 340;
  const cy = 340;
  const rInner = 74;
  const rOuter = 236;
  return (
    <div>
      {/* Radial (≥lg) */}
      <div className="hidden lg:block" aria-hidden="true">
        <svg viewBox="0 0 680 680" role="presentation" className="mx-auto max-w-2xl">
          {warisLines.map((w, i) => {
            const angle = (i * 45 - 90) * (Math.PI / 180);
            const x1 = cx + rInner * Math.cos(angle);
            const y1 = cy + rInner * Math.sin(angle);
            const x2 = cx + rOuter * Math.cos(angle);
            const y2 = cy + rOuter * Math.sin(angle);
            return (
              <line
                key={w.n}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="var(--color-gold)"
                strokeWidth="1.5"
              />
            );
          })}
          <circle
            cx={cx}
            cy={cy}
            r={rInner}
            fill="var(--color-green-900)"
          />
          <text
            x={cx}
            y={cy - 8}
            textAnchor="middle"
            fill="var(--color-ivory)"
            fontFamily="var(--font-display)"
            fontSize="30"
            fontWeight="600"
          >
            DBAK
          </text>
          <text
            x={cx}
            y={cy + 20}
            textAnchor="middle"
            fill="var(--color-green-300)"
            fontSize="15"
          >
            1841–1921
          </text>
          {warisLines.map((w, i) => {
            const angle = (i * 45 - 90) * (Math.PI / 180);
            const x = cx + (rOuter + 4) * Math.cos(angle);
            const y = cy + (rOuter + 4) * Math.sin(angle);
            const parts = w.name.split(' ');
            const mid = Math.ceil(parts.length / 2);
            return (
              <g key={w.n} transform={`translate(${x} ${y})`}>
                <circle r="34" fill="var(--color-surface)" stroke="var(--color-gold)" />
                <text
                  y="-40"
                  textAnchor="middle"
                  fontSize="13"
                  fill="var(--color-ink-soft)"
                >
                  {lang === 'ms' ? `Waris ${w.n}` : `Line ${w.n}`}
                </text>
                <text
                  textAnchor="middle"
                  fontFamily="var(--font-display)"
                  fontSize="26"
                  fontWeight="600"
                  dy="9"
                  fill="var(--color-green-900)"
                >
                  {w.n}
                </text>
                <text y="52" textAnchor="middle" fontSize="13.5" fill="var(--color-ink)">
                  <tspan x="0">{parts.slice(0, mid).join(' ')}</tspan>
                  <tspan x="0" dy="16">
                    {parts.slice(mid).join(' ')}
                  </tspan>
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Accessible stacked list (always in DOM; visual cards <lg) */}
      <ol className="grid gap-3 sm:grid-cols-2 lg:sr-only">
        {warisLines.map((w) => (
          <li
            key={w.n}
            className="flex items-baseline gap-4 rounded-xl border border-ink/10 bg-bg p-4"
          >
            <span
              className="font-display text-3xl font-semibold text-gold-deep"
              aria-hidden="true"
            >
              {w.n}
            </span>
            <div>
              <p className="text-sm text-ink-soft">
                {lang === 'ms' ? `Waris ${w.n}` : `Line ${w.n}`}
              </p>
              <p className="font-display text-lg leading-snug">{w.name}</p>
              {w.note ? (
                <p className="mt-1 text-sm text-ink-soft">{w.note[lang]}</p>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
