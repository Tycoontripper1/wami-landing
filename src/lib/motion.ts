"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

let registered = false;

/** The single place GSAP plugins are registered. */
function ensureRegistered() {
  if (!registered) {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    registered = true;
  }
}

export { ScrollTrigger, SplitText };

/**
 * Runs `setup` only for people who haven't asked for reduced motion, and
 * returns a cleanup that reverts every tween, SplitText and ScrollTrigger it
 * created. Because the hidden "from" state is applied inside `setup`, anyone
 * with reduced motion (or no JS) simply sees the finished page.
 */
export function whenMotionAllowed(setup: (g: typeof gsap) => void | (() => void)): () => void {
  ensureRegistered();
  const mm = gsap.matchMedia();
  // whatever `setup` returns is its own cleanup and runs when the context reverts
  mm.add("(prefers-reduced-motion: no-preference)", () => setup(gsap));
  return () => mm.revert();
}
