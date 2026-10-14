import { PhoneMockup } from "@/components/PhoneMockup";
import { StoreButtons } from "@/components/StoreButtons";
import { Container } from "@/components/ui/Container";
import { hero } from "@/content/site";

/* Above the fold, so it enters on load (CSS keyframes, staggered) rather than
   waiting for a scroll observer. */
export function Hero() {
  return (
    <section id="top" className="overflow-hidden pb-24 pt-14 sm:pt-20">
      <Container className="grid items-center gap-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-5 animate-rise text-sm font-semibold tracking-wide text-link">{hero.eyebrow}</p>
          <h1 className="animate-rise font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-balance [animation-delay:80ms] sm:text-6xl lg:text-7xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-xl animate-rise text-lg leading-relaxed text-fg-muted [animation-delay:180ms] sm:text-xl">
            {hero.body}
          </p>
          <StoreButtons className="mt-9 animate-rise [animation-delay:280ms]" />
        </div>
        <div className="animate-rise [animation-delay:200ms]">
          <PhoneMockup />
        </div>
      </Container>
    </section>
  );
}
