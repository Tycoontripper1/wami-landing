import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

/* An iPhone 17 Pro-shaped device: ~19.5:9 screen, thin bezel, continuous
   corners, a dynamic island, status bar, home indicator and the side
   buttons. Everything is a percentage of the device, so it keeps its
   proportions at any width — size it by width, or by height (the aspect
   ratio does the rest). Corners use the elliptical `x% / y%` form so they
   stay circular as the box scales. */

const BUTTON = "absolute w-[1.1%] rounded-full bg-ink-line";

function StatusBar() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-[7.5%] top-[1.5%] z-20 flex h-[3.4%] items-center justify-between text-[0.62em] font-bold leading-none"
    >
      <span>9:41</span>
      <span className="flex items-center gap-[0.35em]">
        {/* signal */}
        <svg viewBox="0 0 18 12" className="h-[1.1em] w-auto fill-current" aria-hidden="true">
          <rect x="0" y="8" width="3" height="4" rx="1" />
          <rect x="5" y="5" width="3" height="7" rx="1" />
          <rect x="10" y="2" width="3" height="10" rx="1" />
          <rect x="15" y="0" width="3" height="12" rx="1" />
        </svg>
        {/* battery */}
        <svg viewBox="0 0 28 12" className="h-[1.1em] w-auto" aria-hidden="true">
          <rect x="0.75" y="0.75" width="23" height="10.5" rx="3.2" className="fill-none stroke-current" strokeWidth="1.2" opacity="0.5" />
          <rect x="2.4" y="2.4" width="19.6" height="7.2" rx="2" className="fill-current" />
          <rect x="25" y="4" width="2" height="4" rx="1" className="fill-current" opacity="0.5" />
        </svg>
      </span>
    </div>
  );
}

type PhoneFrameProps = {
  children: ReactNode;
  className?: string;
};

export function PhoneFrame({ children, className }: PhoneFrameProps) {
  return (
    <div className={cx("relative aspect-[9/19.5] w-full text-fg [font-size:clamp(11px,3.4vw,16px)]", className)}>
      {/* side buttons: action + volume on the left, power on the right */}
      <span aria-hidden="true" className={cx(BUTTON, "-left-[0.9%] top-[16%] h-[3.4%]")} />
      <span aria-hidden="true" className={cx(BUTTON, "-left-[0.9%] top-[22%] h-[6.4%]")} />
      <span aria-hidden="true" className={cx(BUTTON, "-left-[0.9%] top-[30%] h-[6.4%]")} />
      <span aria-hidden="true" className={cx(BUTTON, "-right-[0.9%] top-[25%] h-[10%]")} />
      <span aria-hidden="true" className={cx(BUTTON, "-right-[0.9%] top-[62%] h-[7%]")} />

      {/* body */}
      <div className="absolute inset-0 rounded-[14.5%/6.7%] bg-ill-ink shadow-2xl ring-1 ring-ink-line" />
      <div className="absolute inset-0 rounded-[14.5%/6.7%] ring-2 ring-inset ring-ink-line" />

      {/* screen */}
      <div className="absolute inset-[2.6%] overflow-hidden rounded-[12.2%/5.65%] bg-canvas">
        <div className="relative h-full">
          <StatusBar />
          {/* dynamic island */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-[1.3%] z-30 flex h-[4.2%] w-[31%] -translate-x-1/2 items-center justify-end rounded-full bg-ill-ink pr-[5%]"
          >
            <span className="size-[28%] max-w-[1.1em] rounded-full bg-ink-line ring-1 ring-ink-raised" />
          </div>

          <div className="flex h-full flex-col pt-[10.5%]">{children}</div>

          {/* home indicator */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[1.1%] left-1/2 z-20 h-[0.55%] w-[34%] -translate-x-1/2 rounded-full bg-fg/80"
          />
        </div>
      </div>
    </div>
  );
}
