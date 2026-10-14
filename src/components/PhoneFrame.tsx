import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

/** The phone bezel. Size it with `className` (width, or height + aspect). */
export function PhoneFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cx("rounded-[2.75rem] bg-ill-ink p-2.5 shadow-2xl ring-1 ring-line", className)}>
      <div className="relative h-full overflow-hidden rounded-[2.1rem] bg-canvas">{children}</div>
    </div>
  );
}
