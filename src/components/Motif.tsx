/**
 * The eight-part motif: one ray for each family line, drawn as a quiet
 * compass star. Used as a section divider and diagram core; decorative
 * instances are aria-hidden.
 */
export function EightStar({
  className,
  size = 28,
}: {
  className?: string;
  size?: number;
}) {
  const rays = Array.from({ length: 8 }, (_, i) => i * 45);
  return (
    <svg
      viewBox="-50 -50 100 100"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {rays.map((deg) => (
        <line
          key={deg}
          x1="0"
          y1="-16"
          x2="0"
          y2="-44"
          stroke="currentColor"
          strokeWidth={deg % 90 === 0 ? 5 : 2.5}
          strokeLinecap="round"
          transform={`rotate(${deg})`}
        />
      ))}
      <circle r="7" fill="currentColor" />
    </svg>
  );
}

export function Divider({ className = '' }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center gap-4 text-gold ${className}`}
      aria-hidden="true"
    >
      <hr className="rule-gold w-16 sm:w-24" />
      <EightStar size={22} />
      <hr className="rule-gold w-16 sm:w-24" />
    </div>
  );
}
