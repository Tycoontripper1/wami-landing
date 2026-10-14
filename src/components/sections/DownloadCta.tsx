import { StoreButtons } from "@/components/StoreButtons";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

export function DownloadCta() {
  return (
    <section id="download" className="pb-24 sm:pb-32">
      <Container>
        <div className="rounded-[2.5rem] border border-line bg-ill-ink px-8 py-14 text-center text-ill-paper sm:px-16 sm:py-20">
          <h2 className="mx-auto max-w-2xl font-display text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
            Your next favourite creative is a swipe away.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg opacity-80">{site.tagline}</p>
          <StoreButtons className="mt-10 justify-center" />
        </div>
      </Container>
    </section>
  );
}
