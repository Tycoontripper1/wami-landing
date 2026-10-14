"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { FeatureItem } from "@/components/FeatureItem";
import { Pin } from "@/components/illustrations/decor";
import { Illustration } from "@/components/illustrations/Illustration";
import { Scene } from "@/components/illustrations/scenes";
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

const weekdays = ["M", "T", "W", "T", "F"];

function ScreenShell({ tone, children }: { tone: string; children: ReactNode }) {
  return <div className={cx("absolute inset-0 flex flex-col gap-3 p-4 pt-8", tone)}>{children}</div>;
}

function DiscoverScreen() {
  return (
    <ScreenShell tone="bg-bold-cyan">
      <p className="text-xs font-bold">Near you</p>
      <div className="rounded-2xl border-2 border-ink bg-ill-soft p-3">
        <Scene name="camera" />
      </div>
      <div className="mt-auto rounded-2xl border-2 border-ink bg-surface px-3 py-2.5">
        <p className="font-display text-sm font-bold leading-tight">Portrait sessions</p>
        <p className="text-[11px] text-fg-muted">Photographer · Near you</p>
      </div>
    </ScreenShell>
  );
}

function BookScreen() {
  return (
    <ScreenShell tone="bg-bold-lime">
      <p className="font-display text-base font-bold leading-tight">Pick a day</p>
      <div className="flex gap-1.5">
        {weekdays.map((day, i) => (
          <span
            key={`${day}-${i}`}
            className={cx(
              "grid h-12 flex-1 place-items-center rounded-xl border-2 border-ink text-xs font-bold",
              i === 2 ? "bg-ink text-on-ink" : "bg-surface",
            )}
          >
            {day}
          </span>
        ))}
      </div>
      <Illustration name="book" className="mx-auto my-1 size-28" />
      <span className="mt-auto grid h-11 place-items-center rounded-full border-2 border-ink bg-ink text-xs font-bold text-on-ink">
        Send request
      </span>
    </ScreenShell>
  );
}

function DoneScreen() {
  const rows = ["Booked", "Work in progress", "Payment released"];
  return (
    <ScreenShell tone="bg-bold-amber">
      <Illustration name="shield" className="mx-auto size-24" />
      <ul className="space-y-2">
        {rows.map((row) => (
          <li key={row} className="flex items-center gap-2.5 rounded-xl border-2 border-ink bg-surface px-3 py-2 text-xs font-bold">
            <span className="grid size-5 shrink-0 place-items-center rounded-full bg-ink">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="size-3 stroke-on-ink" fill="none" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
            </span>
            {row}
          </li>
        ))}
      </ul>
      <span className="mt-auto grid h-11 place-items-center rounded-full border-2 border-ink bg-surface text-xs font-bold">
        Leave a review
      </span>
    </ScreenShell>
  );
}

const screens = [DiscoverScreen, BookScreen, DoneScreen];

export function PhoneStory() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    return whenMotionAllowed((g) => {
      const screenEls = g.utils.toArray<HTMLElement>("[data-screen]", track);
      const captionEls = g.utils.toArray<HTMLElement>("[data-caption]", track);
      const fillEls = g.utils.toArray<HTMLElement>("[data-fill]", track);
      const phone = track.querySelector<HTMLElement>("[data-phone]");

      // everything except the first step waits offstage
      g.set(screenEls.slice(1), { autoAlpha: 0, yPercent: 8 });
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
            .to(captionEls[i + 1], { autoAlpha: 1, y: 0, duration: 0.2 }, at);
        }
      });

      if (phone) timeline.fromTo(phone, { rotate: -5, scale: 0.95 }, { rotate: 5, scale: 1, duration: count }, 0);
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
              From first look to finished job.
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
                <span key={step.title} className="h-2 flex-1 overflow-hidden rounded-full border-2 border-ink bg-surface">
                  <span data-fill className="block h-full bg-ink" />
                </span>
              ))}
            </div>
          </div>

          <div data-phone className="relative h-[50svh] max-h-[34rem] aspect-[9/19]">
            <Pin tone="accent" className="absolute -top-4 left-1/2 z-10 h-8 -translate-x-1/2" />
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
          <h2 className="font-display text-3xl font-bold tracking-tight">From first look to finished job.</h2>
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
