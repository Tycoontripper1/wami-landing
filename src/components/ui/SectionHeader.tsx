import { cx } from "@/lib/cx";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  className?: string;
};

export function SectionHeader({ eyebrow, title, body, className }: SectionHeaderProps) {
  return (
    <header className={cx("max-w-2xl", className)}>
      {eyebrow ? <p className="mb-3 text-sm font-semibold tracking-wide text-link">{eyebrow}</p> : null}
      <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">{title}</h2>
      {body ? <p className="mt-4 text-lg leading-relaxed text-fg-muted">{body}</p> : null}
    </header>
  );
}
