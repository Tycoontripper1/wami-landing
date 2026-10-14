import { LogoMark } from "@/components/brand/Logo";
import { DuskScene } from "@/components/illustrations/dusk";
import { StoreButtons } from "@/components/StoreButtons";
import { Container } from "@/components/ui/Container";
import { nav, site } from "@/content/site";

/* The page ends on a poster: an amber sky with the wordmark as oversized
   lettering, a teal town standing on a dark-teal street, and the links
   sitting on that street. All colours are the dusk tokens. */
export function Footer() {
  return (
    <footer className="overflow-hidden bg-dusk-teal-night text-on-ink">
      <div className="relative bg-dusk-sky pt-10 sm:pt-14">
        <p
          aria-hidden="true"
          className="relative select-none text-center font-display text-[30vw] font-extrabold leading-[0.8] tracking-tighter text-dusk-cloud-soft sm:text-[13rem] lg:text-[17rem]"
        >
          wami
        </p>
        <DuskScene className="relative -mt-[4vw] h-48 sm:h-64 lg:h-80" />
      </div>

      <Container className="flex flex-col gap-10 pb-10 pt-12 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-xl">
          <a href="#top" className="inline-flex items-center gap-2.5" aria-label="Wami home">
            <LogoMark />
            <span className="font-display text-2xl font-extrabold tracking-tight">wami</span>
          </a>
          <p className="mt-4 max-w-sm text-base leading-relaxed text-on-ink-muted">{site.tagline}</p>
          <StoreButtons className="mt-6" />
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3 lg:flex-col lg:items-end">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-base font-bold text-on-ink transition hover:text-dusk-cloud">
              {item.label}
            </a>
          ))}
        </nav>
      </Container>

      <Container className="border-t border-dusk-teal-deep py-6">
        <p className="text-xs text-on-ink-muted">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
