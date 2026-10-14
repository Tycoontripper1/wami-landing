"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { whenMotionAllowed } from "@/lib/motion";

/** Turns its child in 3D as it travels through the viewport, scrubbed by scroll. */
export function ScrollTilt({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    return whenMotionAllowed((g) => {
      g.fromTo(
        el,
        { rotateY: 14, rotateX: 5, transformPerspective: 1000 },
        {
          rotateY: -10,
          rotateX: -4,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top 85%", end: "bottom top", scrub: 0.8 },
        },
      );
    });
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
