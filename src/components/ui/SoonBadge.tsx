import { cx } from "@/lib/cx";

export function SoonBadge({ className }: { className?: string }) {
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-full bg-accent px-2.5 py-0.5 text-xs font-bold text-on-accent",
        className,
      )}
    >
      Coming soon
    </span>
  );
}
