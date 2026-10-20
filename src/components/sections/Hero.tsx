import { HeroMotion } from "@/components/sections/HeroMotion";
import { PhoneMockup } from "@/components/PhoneMockup";
import { StoreButtons } from "@/components/StoreButtons";
import { Container } from "@/components/ui/Container";
import { hero } from "@/content/site";

/* Above the fold, so it plays on load (GSAP, see HeroMotion) rather than
   waiting for a scroll observer. One headline, one line of explanation, the
   store buttons, and the app itself. */
export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-sky pb-24 pt-32 sm:pt-40">
      <noscript>
        <style>{"[data-hero]{opacity:1!important}"}</style>
      </noscript>
      <Container>
        <HeroMotion className="relative grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p data-hero="eyebrow" className="mb-5 text-sm font-semibold tracking-wide text-primary-deep motion-safe:opacity-0">
              {hero.eyebrow}
            </p>
            <h1
              data-hero="title"
              className="font-display text-[2.5rem] font-extrabold leading-[1.1] tracking-tight text-balance sm:text-6xl lg:text-[4rem]"
            >
              {hero.title}
            </h1>
            <p data-hero="body" className="mt-7 max-w-xl text-lg leading-relaxed text-fg-muted motion-safe:opacity-0 sm:text-xl">
              {hero.body}
            </p>
            <div data-hero="stores" className="mt-9 motion-safe:opacity-0">
              <StoreButtons />
            </div>
          </div>
          <div data-hero="phone" className="motion-safe:opacity-0">
            <PhoneMockup />
          </div>
        </HeroMotion>
      </Container>
    </section>
  );
}
