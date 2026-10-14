import type { ReactNode } from "react";
import { storeLogos } from "@/components/StoreLogos";
import { stores } from "@/content/site";
import { cx } from "@/lib/cx";

/* Sets its own text colour (text-fg) alongside its own background, so it
   reads correctly wherever it's placed — e.g. inside the dark CTA card,
   where the inherited colour is white. */
const pill =
  "inline-flex h-16 items-center gap-3.5 rounded-2xl border border-line bg-surface pl-5 pr-6 text-left text-fg transition";

type Store = (typeof stores)[number];

function StoreLabel({ store, children }: { store: Store; children?: ReactNode }) {
  const Logo = storeLogos[store.id];
  return (
    <>
      <Logo />
      <span className="flex flex-col leading-tight">
        <span className="text-xs text-fg-muted">{store.kicker}</span>
        <span className="font-display text-lg font-bold">{store.label}</span>
      </span>
      {children}
    </>
  );
}

/** A real link once `href` is set in content/site.ts; until then an honest, non-clickable "coming soon". */
export function StoreButtons({ className }: { className?: string }) {
  return (
    <div className={cx("flex flex-wrap gap-3", className)}>
      {stores.map((store) =>
        store.href ? (
          <a key={store.id} href={store.href} className={cx(pill, "hover:-translate-y-0.5 hover:border-primary active:scale-[0.97]")}>
            <StoreLabel store={store} />
          </a>
        ) : (
          <span key={store.id} aria-disabled="true" className={cx(pill, "cursor-default")}>
            <StoreLabel store={store}>
              <span className="ml-1 rounded-full bg-accent px-2.5 py-0.5 text-xs font-bold text-on-accent">Coming soon</span>
            </StoreLabel>
          </span>
        ),
      )}
    </div>
  );
}
