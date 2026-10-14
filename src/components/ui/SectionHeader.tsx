import { cx } from "@/lib/cx";
import { Reveal } from "./Reveal";
import { SplitHeading } from "./SplitHeading";

const tones = {
  default: { eyebrow: "text-link", body: "text-fg-muted" },
  inverse: { eyebrow: "text-primary", body: "text-on-ink-muted" },
} as const;

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  /** Use "inverse" on a dark ink band. */
  tone?: keyof typeof tones;
  className?: string;
};

export function SectionHeader({ eyebrow, title, body, tone = "default", className }: SectionHeaderProps) {
  return (
    <header className={cx("max-w-2xl", className)}>
      {eyebrow ? (
        <Reveal>
          <p className={cx("mb-3 text-sm font-semibold tracking-wide", tones[tone].eyebrow)}>{eyebrow}</p>
        </Reveal>
      ) : null}
      <SplitHeading className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
        {title}
      </SplitHeading>
      {body ? (
        <Reveal delay={150}>
          <p className={cx("mt-4 text-lg leading-relaxed", tones[tone].body)}>{body}</p>
        </Reveal>
      ) : null}
    </header>
  );
}
