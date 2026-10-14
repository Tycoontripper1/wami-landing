import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { nav, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-fg-muted">{site.tagline}</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-fg-muted transition hover:text-fg">
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
      <Container className="mt-10">
        <p className="text-xs text-fg-subtle">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
      </Container>
    </footer>
  );
}
