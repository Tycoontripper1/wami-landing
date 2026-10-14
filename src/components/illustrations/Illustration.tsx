import { cx } from "@/lib/cx";
import { drawings, type IllustrationName } from "./drawings";

export type { IllustrationName };

type IllustrationProps = {
  name: IllustrationName;
  className?: string;
  /** Provide only when the drawing carries meaning on its own; otherwise it is decorative. */
  title?: string;
};

/** Fills its box by default; pass any `size-*`, `w-*` or `h-*` and that replaces the default instead of competing with it. */
const hasOwnSize = (className?: string) =>
  className?.split(" ").some((c) => /^(size|w|h)-/.test(c)) ?? false;

export function Illustration({ name, className, title }: IllustrationProps) {
  const Drawing = drawings[name];
  return (
    <svg
      viewBox="0 0 96 96"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cx(hasOwnSize(className) ? undefined : "size-full", className)}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      <Drawing />
    </svg>
  );
}
