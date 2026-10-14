"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { ScrollTrigger, whenMotionAllowed } from "@/lib/motion";

const MAX_SKEW_DEG = 10;

/**
 * Leans its child in the direction of travel while the page is scrolling and
 * eases back upright when it stops — the faster you scroll, the harder it
 * leans. Purely a response to scroll speed; nothing happens at rest.
 */
export function VelocitySkew({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    return whenMotionAllowed((g) => {
      const skewTo = g.quickTo(el, "skewX", { duration: 0.5, ease: "power3.out" });
      let settle: ReturnType<typeof setTimeout>;
      const trigger = ScrollTrigger.create({
        onUpdate: (self) => {
          const lean = g.utils.clamp(-MAX_SKEW_DEG, MAX_SKEW_DEG, self.getVelocity() / -250);
          skewTo(lean);
          clearTimeout(settle);
          settle = setTimeout(() => skewTo(0), 120);
        },
      });
      return () => {
        trigger.kill();
        clearTimeout(settle);
      };
    });
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
