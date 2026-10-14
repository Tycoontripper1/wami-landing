"use client";

import { useEffect, useState } from "react";
import { cx } from "@/lib/cx";

type RollWordsProps = {
  words: string[];
  holdMs?: number;
  className?: string;
};

/**
 * One word at a time, on a highlighter swipe, rolling up like a ticket
 * counter. The chip hugs whichever word is showing (nothing follows it on its
 * line, so it needs no reserved width), assistive tech reads the first word
 * only, and reduced-motion users just see that first word.
 */
export function RollWords({ words, holdMs = 2300, className }: RollWordsProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % words.length), holdMs);
    return () => clearInterval(timer);
  }, [words.length, holdMs]);

  return (
    <>
      <span className="sr-only">{words[0]}</span>
      <span
        aria-hidden="true"
        className={cx(
          "relative inline-block overflow-hidden rounded-xl bg-primary px-3 align-bottom text-on-primary",
          className,
        )}
      >
        {words.map((word, i) => {
          const offset = (i - index + words.length) % words.length;
          const isCurrent = offset === 0;
          // current: in flow and in place · just-left: slides out above · everything else waits below
          const motion = isCurrent ? "translate-y-0" : offset === words.length - 1 ? "-translate-y-full" : "translate-y-full";
          return (
            <span
              key={word}
              className={cx(
                "block transition-transform duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)]",
                !isCurrent && "absolute inset-x-3 top-0",
                motion,
              )}
            >
              {word}
            </span>
          );
        })}
      </span>
    </>
  );
}
