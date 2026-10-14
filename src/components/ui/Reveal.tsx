"use client";

import { createElement, useEffect, useRef, type ReactNode } from "react";
import { whenMotionAllowed } from "@/lib/motion";

type RevealProps = {
  as?: "div" | "li" | "header" | "article";
  /** "rise" fades up once; "draw" scales in from the left, scrubbed by scroll (connector lines). */
  effect?: "rise" | "draw";
  /** Stagger siblings by passing index * a small number of ms. */
  delay?: number;
  className?: string;
  children: ReactNode;
};

export function Reveal({ as = "div", effect = "rise", delay = 0, className, children }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    return whenMotionAllowed((g) => {
      if (effect === "draw") {
        g.fromTo(
          el,
          { scaleX: 0, transformOrigin: "left center" },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top 90%", end: "top 50%", scrub: 0.6 },
          },
        );
        return;
      }
      g.fromTo(
        el,
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          delay: delay / 1000,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        },
      );
    });
  }, [effect, delay]);

  return createElement(as, { ref, className }, children);
}
