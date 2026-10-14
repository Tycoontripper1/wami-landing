"use client";

import { Children, useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { cx } from "@/lib/cx";

type CarouselProps = {
  /** Describes the carousel to assistive tech, e.g. "Categories". */
  label: string;
  children: ReactNode;
  /** "coverflow" tilts and fades the neighbours; "snap" just snaps. */
  effect?: "coverflow" | "snap";
  /** Advance on a timer (ms). Pauses while touched, hovered or off screen. */
  autoplayMs?: number;
  /** Width of one slide — also decides how much of the neighbours peek. */
  slideClassName?: string;
  className?: string;
};

const RESUME_DELAY_MS = 4000;

/**
 * Native scroll-snap does the swiping (so it feels like the OS), and a scroll
 * listener layers the coverflow on top. The dots double as a progress bar for
 * autoplay. People who prefer reduced motion get plain snap scrolling: no
 * tilt, no autoplay.
 */
export function Carousel({
  label,
  children,
  effect = "coverflow",
  autoplayMs,
  slideClassName = "w-[76%]",
  className,
}: CarouselProps) {
  const slides = Children.toArray(children);
  const trackRef = useRef<HTMLUListElement>(null);
  const activeRef = useRef(0);
  const reducedRef = useRef(false);
  const pausedRef = useRef(false);
  const inViewRef = useRef(true);
  const resumeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const [active, setActive] = useState(0);

  const update = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const center = track.scrollLeft + track.clientWidth / 2;
    let nearest = 0;
    let nearestDistance = Infinity;

    Array.from(track.children).forEach((child, index) => {
      const node = child as HTMLElement;
      // -1 = one slide to the left, 0 = centred, 1 = one slide to the right
      const offset = (node.offsetLeft + node.offsetWidth / 2 - center) / node.offsetWidth;
      const distance = Math.abs(offset);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearest = index;
      }
      if (effect === "coverflow" && !reducedRef.current) {
        const clamped = Math.min(distance, 1.2);
        // the tilt is capped so slides far off screen don't spin edge-on
        const tilt = Math.max(-1.2, Math.min(1.2, offset));
        node.style.transform = `perspective(900px) rotateY(${(-tilt * 16).toFixed(2)}deg) scale(${(1 - clamped * 0.1).toFixed(3)})`;
        node.style.opacity = String(1 - Math.min(clamped, 1) * 0.4);
      }
    });

    activeRef.current = nearest;
    setActive(nearest);
  }, [effect]);

  const goTo = useCallback((index: number) => {
    const track = trackRef.current;
    const node = track?.children[index] as HTMLElement | undefined;
    if (!track || !node) return;
    track.scrollTo({
      left: node.offsetLeft - (track.clientWidth - node.offsetWidth) / 2,
      behavior: reducedRef.current ? "auto" : "smooth",
    });
  }, []);

  useEffect(() => {
    reducedRef.current = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();

    const observer = new IntersectionObserver(([entry]) => {
      inViewRef.current = entry.isIntersecting;
    });
    observer.observe(track);

    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      observer.disconnect();
    };
  }, [update]);

  useEffect(() => {
    if (!autoplayMs || reducedRef.current || slides.length < 2) return;
    const timer = setInterval(() => {
      if (pausedRef.current || !inViewRef.current) return;
      goTo((activeRef.current + 1) % slides.length);
    }, autoplayMs);
    return () => clearInterval(timer);
  }, [autoplayMs, slides.length, goTo]);

  const pause = () => {
    pausedRef.current = true;
    clearTimeout(resumeTimer.current);
  };
  const resumeLater = () => {
    clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      pausedRef.current = false;
    }, RESUME_DELAY_MS);
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      className={className}
      onPointerDown={pause}
      onPointerUp={resumeLater}
      onPointerCancel={resumeLater}
      onMouseEnter={pause}
      onMouseLeave={resumeLater}
    >
      <ul
        ref={trackRef}
        className="relative flex snap-x snap-mandatory gap-4 overflow-x-auto px-[12%] py-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((slide, index) => (
          <li
            key={index}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${slides.length}`}
            data-active={index === active}
            className={cx(
              "group/slide shrink-0 snap-center transition-[transform,opacity] duration-150 will-change-transform",
              slideClassName,
            )}
          >
            {slide}
          </li>
        ))}
      </ul>

      <div className="mt-2 flex items-center justify-center gap-2" role="tablist" aria-label={`${label} slides`}>
        {slides.map((_, index) => {
          const isActive = index === active;
          return (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => {
                pause();
                goTo(index);
                resumeLater();
              }}
              className={cx(
                "relative h-2.5 overflow-hidden rounded-full border-2 border-ink transition-all duration-300",
                isActive ? "w-10 bg-surface" : "w-2.5 bg-surface/60",
              )}
            >
              {isActive && autoplayMs ? (
                <span
                  key={`${index}-${autoplayMs}`}
                  className="absolute inset-0 origin-left animate-fill bg-ink"
                  style={{ animationDuration: `${autoplayMs}ms` }}
                />
              ) : isActive ? (
                <span className="absolute inset-0 bg-ink" />
              ) : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}
