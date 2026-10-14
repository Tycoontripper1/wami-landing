"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { whenMotionAllowed } from "@/lib/motion";

type DriftProps = {
  /** Pixels the element travels (vertically) across the full time it's on screen. Negative drifts up. */
  distance: number;
  className?: string;
  children: ReactNode;
};

/** Parallax: moves at a different rate to the page while it scrolls past. */
export function Drift({ distance, className, children }: DriftProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    return whenMotionAllowed((g) => {
      g.fromTo(
        el,
        { y: -distance / 2 },
        {
          y: distance / 2,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
        },
      );
    });
  }, [distance]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
