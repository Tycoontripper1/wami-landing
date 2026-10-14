"use client";

import { useEffect, useRef } from "react";
import { SplitText, whenMotionAllowed } from "@/lib/motion";

/**
 * A heading whose lines rise out of a mask, one after another, as it scrolls
 * into view. The text is ordinary text in the DOM (readable, selectable,
 * indexable); the split is applied on top and reverted on cleanup. SplitText
 * re-splits itself when fonts load or the width changes, so wrapping stays
 * correct on resize and rotate.
 */
export function SplitHeading({ children, className }: { children: string; className?: string }) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    return whenMotionAllowed((g) => {
      SplitText.create(el, {
        type: "lines",
        mask: "lines",
        autoSplit: true,
        onSplit: (self) =>
          g.from(self.lines, {
            yPercent: 115,
            duration: 0.95,
            ease: "power4.out",
            stagger: 0.1,
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          }),
      });
    });
  }, []);

  return (
    <h2 ref={ref} className={className}>
      {children}
    </h2>
  );
}
