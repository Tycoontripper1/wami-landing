"use client";

import gsap from "gsap";
import { useRef } from "react";

const HEART_PATH = "M12 20.5C4.5 15 3 10 6.5 7.5 9 5.8 12 7.2 12 9.8 12 7.2 15 5.8 17.5 7.5 21 10 19.5 15 12 20.5Z";
const PIECES = 12;
const TONES = ["text-accent", "text-primary", "text-ill-paper"];

/**
 * The like button on the phone mock. It pulses on its own (a CSS loop), and a
 * tap sends a burst of little hearts out of it — so the demo is something you
 * can play with, on a phone, not just look at.
 */
export function LikeButton() {
  const ref = useRef<HTMLButtonElement>(null);

  const burst = () => {
    const button = ref.current;
    if (!button || matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    for (let i = 0; i < PIECES; i += 1) {
      const piece = document.createElement("span");
      piece.className = `pointer-events-none absolute left-1/2 top-1/2 -ml-2 -mt-2 ${TONES[i % TONES.length]}`;
      piece.innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="${HEART_PATH}" fill="currentColor" style="stroke:var(--ink);stroke-width:2.5;stroke-linejoin:round"/></svg>`;
      button.appendChild(piece);

      const angle = (Math.PI * 2 * i) / PIECES + Math.random() * 0.5;
      const distance = 44 + Math.random() * 34;
      gsap.fromTo(
        piece,
        { x: 0, y: 0, scale: 0.4, opacity: 1, rotate: 0 },
        {
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance - 18,
          scale: 0.9 + Math.random() * 0.7,
          rotate: (Math.random() - 0.5) * 80,
          opacity: 0,
          duration: 0.85,
          ease: "power2.out",
          onComplete: () => piece.remove(),
        },
      );
    }
    gsap.fromTo(button, { scale: 0.82 }, { scale: 1, duration: 0.5, ease: "elastic.out(1.1, 0.4)" });
  };

  return (
    <button
      ref={ref}
      type="button"
      onClick={burst}
      aria-label="Like"
      className="relative grid size-12 animate-pop place-items-center rounded-full border-2 border-ink bg-accent"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6 stroke-on-accent" fill="none" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
        <path d={HEART_PATH} />
      </svg>
    </button>
  );
}
