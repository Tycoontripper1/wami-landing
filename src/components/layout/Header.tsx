import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { nav } from "@/content/site";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/90 backdrop-blur">
      <Container className="flex h-[4.5rem] items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-fg-muted transition hover:text-fg">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <Button href="#download" className="hidden sm:inline-flex">
            Get the app
          </Button>

          {/* No-JS mobile menu: a native <details> disclosure. */}
          <details className="group relative md:hidden">
            <summary
              aria-label="Menu"
              className="grid size-11 cursor-pointer list-none place-items-center rounded-full border border-line bg-surface [&::-webkit-details-marker]:hidden"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 stroke-fg" fill="none" strokeWidth={2} strokeLinecap="round">
                <path className="group-open:hidden" d="M4 8h16M4 16h16" />
                <path className="hidden group-open:block" d="M6 6l12 12M18 6L6 18" />
              </svg>
            </summary>
            <nav
              aria-label="Mobile"
              className="absolute right-0 top-14 flex w-56 flex-col rounded-2xl border border-line bg-surface p-2 shadow-lg"
            >
              {[...nav, { label: "Get the app", href: "#download" }].map((item) => (
                <a key={item.href} href={item.href} className="rounded-xl px-4 py-3 text-sm font-medium hover:bg-muted">
                  {item.label}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </Container>
    </header>
  );
}
