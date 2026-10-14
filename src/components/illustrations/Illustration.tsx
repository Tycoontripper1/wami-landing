import { cx } from "@/lib/cx";
import { drawings, type IllustrationName } from "./drawings";

export type { IllustrationName };

type IllustrationProps = {
  name: IllustrationName;
  className?: string;
  /** Provide only when the drawing carries meaning on its own; otherwise it is decorative. */
  title?: string;
};

export function Illustration({ name, className, title }: IllustrationProps) {
  const Drawing = drawings[name];
  return (
    <svg
      viewBox="0 0 96 96"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cx("size-full", className)}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      <Drawing />
    </svg>
  );
}
