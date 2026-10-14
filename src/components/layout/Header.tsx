import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { nav } from "@/content/site";

/* One floating bar rather than a full-width strip: logo, links, call to action
   in a single rounded container that sits over the page. */
export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border-2 border-ink bg-surface/95 py-2 pl-6 pr-2 shadow-pop backdrop-blur">
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-fg-muted transition hover:bg-muted hover:text-fg"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button href="#download" size="md">
            Get the app
          </Button>

          {/* No-JS mobile menu: a native <details> disclosure. */}
          <details className="group relative md:hidden">
            <summary
              aria-label="Menu"
              className="grid size-11 cursor-pointer list-none place-items-center rounded-full border-2 border-ink bg-surface [&::-webkit-details-marker]:hidden"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 stroke-fg" fill="none" strokeWidth={2.5} strokeLinecap="round">
                <path className="group-open:hidden" d="M4 8h16M4 16h16" />
                <path className="hidden group-open:block" d="M6 6l12 12M18 6L6 18" />
              </svg>
            </summary>
            <nav
              aria-label="Mobile"
              className="absolute right-0 top-14 flex w-60 flex-col rounded-3xl border-2 border-ink bg-surface p-2 shadow-pop"
            >
              {nav.map((item) => (
                <a key={item.href} href={item.href} className="rounded-2xl px-4 py-3 text-sm font-semibold hover:bg-muted">
                  {item.label}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
