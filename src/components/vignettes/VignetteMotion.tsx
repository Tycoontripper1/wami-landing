"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { whenMotionAllowed } from "@/lib/motion";

/* Plays a small story the first time a vignette scrolls into view, driven by
   `data-a` marks on its parts:
     rise   fades up          pop    springs in from nothing
     msg    a chat bubble     star   spins in
     slide  comes in sideways beat   a heart that thumps
     count  counts up to `data-to`
   Each mark is optional, so one wrapper serves every vignette. Under reduced
   motion nothing is hidden and nothing moves (see whenMotionAllowed). */
export function VignetteMotion({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    return whenMotionAllowed((g) => {
      const marks = (name: string) => g.utils.toArray<HTMLElement>(`[data-a="${name}"]`, root);
      const tl = g.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: { trigger: root, start: "top 85%", once: true },
      });

      const rise = marks("rise");
      if (rise.length) {
        g.set(rise, { autoAlpha: 0, y: 14 });
        tl.to(rise, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.08 }, 0);
      }

      const pop = marks("pop");
      if (pop.length) {
        g.set(pop, { autoAlpha: 0, scale: 0.4, transformOrigin: "20% 50%" });
        tl.to(pop, { autoAlpha: 1, scale: 1, duration: 0.6, ease: "back.out(2.2)", stagger: 0.18 }, 0.15);
      }

      const msg = marks("msg");
      if (msg.length) {
        g.set(msg, { autoAlpha: 0, y: 12, scale: 0.96 });
        tl.to(msg, { autoAlpha: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.55 }, 0.2);
      }

      const stars = marks("star");
      if (stars.length) {
        g.set(stars, { scale: 0, rotate: -40, transformOrigin: "50% 50%" });
        tl.to(stars, { scale: 1, rotate: 0, duration: 0.4, ease: "back.out(3)", stagger: 0.09 }, 0.3);
      }

      const slide = marks("slide");
      if (slide.length) {
        g.set(slide, { autoAlpha: 0, x: 28 });
        tl.to(slide, { autoAlpha: 1, x: 0, duration: 0.55, stagger: 0.16 }, 0.1);
      }

      marks("beat").forEach((el) => {
        tl.fromTo(el, { scale: 1 }, { scale: 1.35, duration: 0.18, yoyo: true, repeat: 3, ease: "power2.inOut" }, 0.9);
      });

      const restore: Array<() => void> = [];
      marks("count").forEach((el) => {
        const original = el.textContent;
        restore.push(() => {
          el.textContent = original;
        });
        const target = Number(el.dataset.to ?? 0);
        const prefix = el.dataset.prefix ?? "";
        const counter = { value: 0 };
        el.textContent = `${prefix}0`;
        tl.to(
          counter,
          {
            value: target,
            duration: 1.2,
            ease: "power2.out",
            onUpdate: () => {
              el.textContent = `${prefix}${Math.round(counter.value).toLocaleString("en-NG")}`;
            },
          },
          0.2,
        );
      });

      return () => restore.forEach((undo) => undo());
    });
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
