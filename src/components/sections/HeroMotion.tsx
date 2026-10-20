"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { SplitText, whenMotionAllowed } from "@/lib/motion";

/* The hero's entrance, in one timeline: the headline rises out of a mask line
   by line, the words under it follow, the phone lifts into place, and then the
   phone's own screen plays: the From Wami card drops in, the post settles, the
   heart thumps (and thumps again every few seconds). A little scroll parallax
   moves the phone slower than the page. Parts opt in with `data-hero`; they
   start hidden only for people who have not asked for reduced motion
   (`motion-safe:opacity-0`), so everyone else sees the finished hero. */
export function HeroMotion({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    return whenMotionAllowed((g) => {
      const part = (name: string) => root.querySelector<HTMLElement>(`[data-hero="${name}"]`);
      const title = part("title");
      const phone = part("phone");
      const wami = part("wami");
      const post = part("post");
      const heart = part("heart");

      const intro = g.timeline({ defaults: { ease: "power3.out" } });

      if (title) {
        SplitText.create(title, {
          type: "lines",
          mask: "lines",
          autoSplit: true,
          onSplit: (self) => g.from(self.lines, { yPercent: 115, duration: 0.95, ease: "power4.out", stagger: 0.1, delay: 0.05 }),
        });
      }

      const words = ["eyebrow", "body", "stores"].map(part).filter((el): el is HTMLElement => el !== null);
      if (words.length) {
        intro.fromTo(words, { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.12 }, 0.15);
      }

      if (phone) {
        intro.fromTo(phone, { autoAlpha: 0, y: 70, rotate: 2 }, { autoAlpha: 1, y: 0, rotate: 0, duration: 1.1 }, 0.2);
        g.to(phone, {
          yPercent: -5,
          ease: "none",
          scrollTrigger: { trigger: root, start: "top top", end: "bottom top", scrub: 0.6 },
        });
      }

      if (wami) intro.from(wami, { y: -18, autoAlpha: 0, duration: 0.6 }, 1.0);
      if (post) intro.from(post, { y: 22, autoAlpha: 0, duration: 0.7 }, 1.15);

      if (heart) {
        // two quick thumps, then a rest, for as long as the page is open
        g.timeline({ repeat: -1, repeatDelay: 4.5, delay: 2.2 })
          .to(heart, { scale: 1.35, duration: 0.16, ease: "power2.out" })
          .to(heart, { scale: 1, duration: 0.16, ease: "power2.in" })
          .to(heart, { scale: 1.35, duration: 0.16, ease: "power2.out" })
          .to(heart, { scale: 1, duration: 0.3, ease: "elastic.out(1, 0.5)" });
      }
    });
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
