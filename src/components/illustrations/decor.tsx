import { cx } from "@/lib/cx";
import { P } from "./shapes";

/* The pinboard motif. Wami's mark is a map pin, so the page is "pinned up":
   cards held by little logo-shaped pins, bunting strung across the top. */

const PIN_PATH =
  "M24,2 C13.5,2 5.5,11 5.5,21.5 C5.5,32 24,57.5 24,57.5 C24,57.5 42.5,32 42.5,21.5 C42.5,11 34.5,2 24,2 Z";

const pinTones = {
  primary: "fill-ill-primary",
  accent: "fill-ill-accent",
  ink: "fill-ill-ink",
} as const;

type PinProps = {
  tone?: keyof typeof pinTones;
  className?: string;
};

/** A push-pin in the shape of the Wami mark, to sit over the top edge of a card. */
export function Pin({ tone = "accent", className }: PinProps) {
  return (
    <svg viewBox="0 0 48 60" aria-hidden="true" className={cx("h-9 w-auto drop-shadow-sm", className)}>
      <path d={PIN_PATH} className={cx("stroke-ill-ink", pinTones[tone])} strokeWidth={3} strokeLinejoin="round" />
      <circle cx="24" cy="22" r="7" className="fill-ill-paper stroke-ill-ink" strokeWidth={3} />
    </svg>
  );
}

const flagTones = ["fill-ill-primary", "fill-ill-accent", "fill-ill-paper", "fill-ill-warm", "fill-ill-soft"] as const;

/** A string of bunting. Flags keep their proportions at any width (the string is cropped, not squashed). */
export function Bunting({ className, count = 26 }: { className?: string; count?: number }) {
  const width = 1600;
  const step = width / count;
  return (
    <svg
      viewBox={`0 0 ${width} 90`}
      preserveAspectRatio="xMidYMin slice"
      aria-hidden="true"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cx("block w-full", className)}
    >
      <P d={`M-10 10 Q ${width / 2} 58 ${width + 10} 10`} strokeWidth={3} />
      {Array.from({ length: count }).map((_, i) => {
        const x = step * i + step / 2;
        // follow the sag of the string: lowest in the middle
        const t = (x / width) * 2 - 1;
        const y = 10 + (1 - t * t) * 24;
        return (
          <path
            key={i}
            d={`M${x - 24} ${y} L${x + 24} ${y} L${x} ${y + 46} Z`}
            className={cx("stroke-ill-ink", flagTones[i % flagTones.length])}
            strokeWidth={2.5}
          />
        );
      })}
    </svg>
  );
}
