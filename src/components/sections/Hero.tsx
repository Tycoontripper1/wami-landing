import { PhoneMockup } from "@/components/PhoneMockup";
import { StoreButtons } from "@/components/StoreButtons";
import { Container } from "@/components/ui/Container";
import { hero } from "@/content/site";

export function Hero() {
  return (
    <section id="top" className="overflow-hidden pb-24 pt-14 sm:pt-20">
      <Container className="grid items-center gap-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-5 text-sm font-semibold tracking-wide text-link">{hero.eyebrow}</p>
          <h1 className="font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg-muted sm:text-xl">{hero.body}</p>
          <StoreButtons className="mt-9" />
        </div>
        <PhoneMockup />
      </Container>
    </section>
  );
}
