import { Button } from "@/components/ui/Button";
import { stores } from "@/content/site";
import { cx } from "@/lib/cx";

/** Real link when a store URL is configured; an honest, non-clickable "coming soon" otherwise. */
export function StoreButtons({ className }: { className?: string }) {
  return (
    <div className={cx("flex flex-wrap gap-3", className)}>
      {stores.map((store) =>
        store.href ? (
          <Button key={store.id} href={store.href} size="lg">
            Get it on {store.label}
          </Button>
        ) : (
          <span
            key={store.id}
            aria-disabled="true"
            className="inline-flex h-14 items-center gap-3 rounded-full border border-line bg-surface px-7 text-base font-semibold text-fg-muted"
          >
            {store.label}
            <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-bold text-on-accent">Coming soon</span>
          </span>
        ),
      )}
    </div>
  );
}
