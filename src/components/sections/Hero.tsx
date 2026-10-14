import { Bunting } from "@/components/illustrations/decor";
import { PhoneMockup } from "@/components/PhoneMockup";
import { RollWords } from "@/components/RollWords";
import { StoreButtons } from "@/components/StoreButtons";
import { Container } from "@/components/ui/Container";
import { ScrollTilt } from "@/components/ui/ScrollTilt";
import { hero } from "@/content/site";

/* A pinboard: warm paper with a dot grid, bunting strung across the top, and
   cards pinned around the phone. Above the fold, so it enters on load (CSS
   keyframes, staggered) rather than waiting for a scroll observer. */
export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-sky pb-24 pt-36 sm:pt-44">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle,var(--ink-line)_1.2px,transparent_1.2px)] [background-size:26px_26px] opacity-30"
      />
      <Bunting className="absolute inset-x-0 top-[4.75rem] h-16" />

      <Container className="relative grid items-center gap-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-5 animate-rise text-sm font-semibold tracking-wide text-primary-deep">{hero.eyebrow}</p>
          <h1 className="animate-rise font-display text-[2.5rem] font-extrabold leading-[1.1] tracking-tight [animation-delay:80ms] sm:text-6xl lg:text-[4.25rem]">
            <span className="block whitespace-nowrap">
              {hero.lead} <RollWords words={hero.rolling} />
            </span>
            <span className="mt-1 block text-balance">{hero.title}</span>
          </h1>
          <p className="mt-7 max-w-xl animate-rise text-lg leading-relaxed text-fg-muted [animation-delay:180ms] sm:text-xl">
            {hero.body}
          </p>
          <StoreButtons className="mt-9 animate-rise [animation-delay:280ms]" />
        </div>
        <div className="animate-rise [animation-delay:200ms]">
          <ScrollTilt>
            <PhoneMockup />
          </ScrollTilt>
        </div>
      </Container>
    </section>
  );
}
