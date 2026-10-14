import { cx } from "@/lib/cx";

/** The pin-with-W mark, same geometry as the app's WAMIPinIcon (48×60 box). */
const PIN_PATH =
  "M24,2 C13.5,2 5.5,11 5.5,21.5 C5.5,32 24,57.5 24,57.5 C24,57.5 42.5,32 42.5,21.5 C42.5,11 34.5,2 24,2 Z " +
  "M14.2,34.5 L18.4,18.5 L21.6,18.5 L17.4,34.5 Z " +
  "M20.8,34.5 L24.8,24.5 L27.2,24.5 L23.2,34.5 Z " +
  "M26.4,34.5 L30.6,18.5 L33.8,18.5 L29.6,34.5 Z";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 60" aria-hidden="true" className={cx("h-8 w-auto fill-primary", className)}>
      <path d={PIN_PATH} fillRule="evenodd" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#top" className={cx("inline-flex items-center gap-2.5", className)} aria-label="Wami home">
      <LogoMark />
      <span className="font-display text-2xl font-extrabold tracking-tight">wami</span>
    </a>
  );
}
