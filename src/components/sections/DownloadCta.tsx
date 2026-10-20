import { StoreButtons } from "@/components/StoreButtons";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";

export function DownloadCta() {
  return (
    <section id="download" className="bg-canvas py-20 sm:py-28">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-dusk-teal px-4 py-20 text-center text-on-primary sm:px-16 sm:py-28">
          {/* a flat sun and two clouds: amber against teal, no outlines */}
          <div aria-hidden="true" className="absolute -bottom-32 left-1/2 size-80 -translate-x-1/2 rounded-full bg-dusk-sky" />
          <div aria-hidden="true" className="absolute bottom-24 left-6 h-8 w-36 rounded-full bg-dusk-teal-light sm:left-12" />
          <div aria-hidden="true" className="absolute right-6 top-16 h-8 w-28 rounded-full bg-dusk-teal-light sm:right-14" />
          <h2 className="relative mx-auto max-w-2xl font-display text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
            Find your next favourite creative.
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-lg text-on-primary">{site.tagline}</p>
          <StoreButtons className="relative mt-10 justify-center pb-24 sm:pb-20" />
        </Reveal>
      </Container>
    </section>
  );
}
