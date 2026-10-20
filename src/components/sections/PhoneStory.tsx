"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { FeatureItem } from "@/components/FeatureItem";
import { PhoneFrame } from "@/components/PhoneFrame";
import { Container } from "@/components/ui/Container";
import { steps } from "@/content/site";
import { cx } from "@/lib/cx";
import { whenMotionAllowed } from "@/lib/motion";

/* The phone stays put while the page scrolls, and its screen changes with
   the story: find someone → book the work → get it done. The scroll position
   IS the timeline (scrubbed), so it works by thumb on a phone as well as by
   wheel. People who prefer reduced motion get the same three steps as a plain
   list instead — see the fallback at the bottom. */

const weekdays = [
  { d: "Mon", n: 14 },
  { d: "Tue", n: 15 },
  { d: "Wed", n: 16 },
  { d: "Thu", n: 17 },
];

function ScreenShell({ tone, children }: { tone: string; children: ReactNode }) {
  return <div className={cx("absolute inset-0 flex flex-col gap-3 p-4 pt-[15%]", tone)}>{children}</div>;
}

/* Find someone: the Explore map, with each city as a bubble. */
function MapScreen() {
  return (
    <ScreenShell tone="bg-map-land">
      <svg viewBox="0 0 200 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true" className="absolute inset-0 size-full">
        <path d="M0 230 C40 214 80 250 130 240 S190 214 200 226 V300 H0 Z" className="fill-map-water" />
        <rect x="120" y="60" width="60" height="44" rx="14" className="fill-map-park" />
        <g className="stroke-map-road" strokeWidth="7" strokeLinecap="round" fill="none">
          <path d="M-10 110 L210 80" />
          <path d="M60 -10 L90 310" />
          <path d="M-10 180 C60 170 130 176 210 160" />
        </g>
      </svg>
      <div data-in className="relative flex items-center justify-center rounded-full bg-surface px-3 py-1.5 text-[11px] font-bold shadow-md">Lagos</div>
      {[
        { t: "Lagos", n: "commercial hub", c: "left-2 top-[24%]" },
        { t: "Ibadan", n: "Oyo State", c: "right-1 top-[38%]" },
        { t: "Abuja", n: "federal capital", c: "left-3 top-[52%]" },
      ].map((b) => (
        <div key={b.t} data-in className={cx("absolute flex items-center gap-1.5", b.c)}>
          <span className="grid size-7 shrink-0 place-items-center rounded-full bg-surface shadow-md">
            <svg viewBox="0 0 24 30" aria-hidden="true" className="h-4 w-auto">
              <path d="M12 1C6.3 1 2.5 5.3 2.5 10.6 2.5 17 12 29 12 29s9.5-12 9.5-18.4C21.5 5.3 17.7 1 12 1z" className="fill-primary" />
              <circle cx="12" cy="10.5" r="3.6" className="fill-accent" />
            </svg>
          </span>
          <span className="leading-tight">
            <b className="block text-[10px]">{b.t}</b>
            <i className="block whitespace-nowrap text-[9px] text-fg-muted">{b.n}</i>
          </span>
        </div>
      ))}
      <div data-in className="relative mt-auto flex items-center rounded-full bg-ink py-1 pl-3 pr-1 text-[10px] text-on-ink-muted">
        <span className="flex-1 truncate">Find a creative</span>
        <span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="size-3.5 fill-none stroke-on-primary" strokeWidth={3} strokeLinecap="round">
            <circle cx="11" cy="11" r="6" />
            <path d="M16 16l4 4" />
          </svg>
        </span>
      </div>
    </ScreenShell>
  );
}

/* Book the work: choose a date and a time, then send the request. */
function BookScreen() {
  return (
    <ScreenShell tone="bg-canvas">
      <p data-in className="font-display text-base font-bold leading-tight">Pick a date</p>
      <div data-in className="flex gap-1.5">
        {weekdays.map((day, i) => (
          <span
            key={day.n}
            className={cx(
              "flex flex-1 flex-col items-center rounded-xl border py-2 leading-tight",
              i === 2 ? "border-primary bg-primary text-on-primary" : "border-line bg-surface",
            )}
          >
            <span className="text-[10px]">{day.d}</span>
            <span className="text-sm font-bold">{day.n}</span>
          </span>
        ))}
      </div>
      <p data-in className="mt-1 text-xs font-bold">Time</p>
      <div data-in className="flex gap-1.5">
        {["10:00", "12:30", "3:00"].map((time, i) => (
          <span
            key={time}
            className={cx(
              "rounded-full border px-3 py-1.5 text-[11px] font-semibold",
              i === 1 ? "border-ink bg-ink text-on-ink" : "border-line bg-surface text-fg-muted",
            )}
          >
            {time}
          </span>
        ))}
      </div>
      <div data-in className="rounded-xl border border-line bg-surface px-3 py-2 text-[10px] leading-snug text-fg-muted">
        A portrait shoot in Ikeja, about two hours.
      </div>
      <span data-in className="mt-auto grid h-11 place-items-center rounded-xl bg-primary text-xs font-bold text-on-primary">
        Send request
      </span>
    </ScreenShell>
  );
}

/* Get it done: talk it through in chat. */
function ChatScreen() {
  const mine = "ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-primary px-2.5 py-1.5 text-[10px] text-on-primary";
  const theirs = "max-w-[85%] rounded-2xl rounded-bl-md bg-muted px-2.5 py-1.5 text-[10px] text-fg";
  return (
    <ScreenShell tone="bg-canvas">
      <div className="flex items-center gap-2 border-b border-line pb-3">
        <span className="grid size-8 place-items-center rounded-full bg-tile-a text-[11px] font-bold">SA</span>
        <span className="leading-tight">
          <b className="block text-xs">Sola Adeyemi</b>
          <span className="text-[10px] text-fg-muted">Hair · Braiding</span>
        </span>
      </div>
      <div className="mt-auto flex flex-col gap-2">
        <p data-in className={theirs}>Hi! Are you free on Wednesday?</p>
        <p data-in className={mine}>Yes. What are you after, and where?</p>
        <p data-in className={theirs}>A portrait shoot in Ikeja.</p>
      </div>
      <div data-in className="flex items-center rounded-full border border-line bg-surface py-1.5 pl-4 pr-1.5 text-[11px] text-fg-muted">
        <span className="flex-1 truncate">Type a message...</span>
        <span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="size-3.5 fill-on-primary">
            <path d="M3 11.5 21 3l-6 18-3.5-7.5z" />
          </svg>
        </span>
      </div>
    </ScreenShell>
  );
}

const screens = [MapScreen, BookScreen, ChatScreen];

export function PhoneStory() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    return whenMotionAllowed((g) => {
      const screenEls = g.utils.toArray<HTMLElement>("[data-screen]", track);
      const captionEls = g.utils.toArray<HTMLElement>("[data-caption]", track);
      const fillEls = g.utils.toArray<HTMLElement>("[data-fill]", track);

      // everything except the first step waits offstage, and so do the parts of each later screen
      g.set(screenEls.slice(1), { autoAlpha: 0, yPercent: 8 });
      screenEls.slice(1).forEach((screen) => g.set(screen.querySelectorAll("[data-in]"), { autoAlpha: 0, y: 14 }));
      g.set(captionEls.slice(1), { autoAlpha: 0, y: 18 });
      g.set(fillEls, { scaleX: 0, transformOrigin: "left center" });

      const timeline = g.timeline({
        defaults: { ease: "none" },
        scrollTrigger: { trigger: track, start: "top top", end: "bottom bottom", scrub: 0.6 },
      });

      // each step owns one unit of the timeline; the hand-over is its last 20%
      const count = screenEls.length;
      screenEls.forEach((_, i) => {
        timeline.to(fillEls[i], { scaleX: 1, duration: 1 }, i);
        if (i < count - 1) {
          const at = i + 0.8;
          timeline
            .to(screenEls[i], { autoAlpha: 0, yPercent: -8, duration: 0.2 }, at)
            .to(captionEls[i], { autoAlpha: 0, y: -18, duration: 0.2 }, at)
            .to(screenEls[i + 1], { autoAlpha: 1, yPercent: 0, duration: 0.2 }, at)
            .to(captionEls[i + 1], { autoAlpha: 1, y: 0, duration: 0.2 }, at)
            .to(screenEls[i + 1].querySelectorAll("[data-in]"), { autoAlpha: 1, y: 0, duration: 0.1, stagger: 0.012 }, at + 0.08);
        }
      });

    });
  }, []);

  return (
    <section id="how-it-works" className="relative border-y border-line bg-surface">
      {/* the pinned story — a tall track with one screen-high stage held in view */}
      <div ref={trackRef} className="relative motion-safe:h-[360svh] motion-reduce:hidden">
        <div className="sticky top-0 flex h-svh flex-col items-center justify-center gap-5 px-5 pb-6 pt-24 lg:flex-row lg:gap-24">
          <div className="w-full max-w-md text-center lg:text-left">
            <p className="mb-2 text-sm font-semibold tracking-wide text-link">How it works</p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance lg:text-5xl">
              Find, book, done.
            </h2>

            <div className="relative mt-5 min-h-[7rem] lg:min-h-[9rem]">
              {steps.map((step) => (
                <div key={step.title} data-caption className="absolute inset-0">
                  <h3 className="font-display text-2xl font-bold tracking-tight">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-fg-muted">{step.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-3 flex gap-2" aria-hidden="true">
              {steps.map((step) => (
                <span key={step.title} className="h-1.5 flex-1 overflow-hidden rounded-full bg-line">
                  <span data-fill className="block h-full bg-ink" />
                </span>
              ))}
            </div>
          </div>

          <div data-phone className="relative aspect-[9/19.5] h-[54svh] max-h-[36rem]">
            <PhoneFrame className="h-full w-full">
              {screens.map((Screen, i) => (
                <div key={i} data-screen className="absolute inset-0">
                  <Screen />
                </div>
              ))}
            </PhoneFrame>
          </div>
        </div>
      </div>

      {/* reduced motion: the same three steps, no pinning */}
      <div className="hidden py-20 motion-reduce:block">
        <Container>
          <h2 className="font-display text-3xl font-bold tracking-tight">Find, book, done.</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {steps.map((step) => (
              <FeatureItem key={step.title} item={step} variant="step" />
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
