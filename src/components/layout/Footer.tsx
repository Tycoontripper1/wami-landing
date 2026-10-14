import { LogoMark } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { nav, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-ink py-14 text-on-ink">
      <Container className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-xs">
          <a href="#top" className="inline-flex items-center gap-2.5" aria-label="Wami home">
            <LogoMark />
            <span className="font-display text-2xl font-extrabold tracking-tight">wami</span>
          </a>
          <p className="mt-4 text-sm leading-relaxed text-on-ink-muted">{site.tagline}</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-semibold text-on-ink-muted transition hover:text-on-ink">
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
      <Container className="mt-12 border-t border-ink-line pt-6">
        <p className="text-xs text-on-ink-muted">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
      </Container>
    </footer>
  );
}
