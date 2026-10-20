import { SoonBadge } from "@/components/ui/SoonBadge";
import { Vignette } from "@/components/vignettes/Vignettes";
import type { Feature } from "@/content/site";
import { cx } from "@/lib/cx";

const layouts = {
  /* a plain card: a crop of the app on top, the words underneath */
  card: {
    wrap: "flex flex-col gap-5 rounded-3xl border border-line bg-surface p-3",
    text: "px-3 pb-3",
    vignette: "",
  },
  /* the dark band: the crop beside the words */
  row: {
    wrap: "grid items-center gap-5 sm:grid-cols-[15rem_1fr]",
    text: "",
    vignette: "",
  },
  step: {
    wrap: "flex flex-col gap-5",
    text: "",
    vignette: "",
  },
} as const;

type FeatureItemProps = {
  item: Pick<Feature, "vignette" | "title" | "body" | "soon">;
  variant?: keyof typeof layouts;
  /** Set when the item sits on a dark ink band. */
  inverse?: boolean;
};

/** A crop of the app, a title and a sentence. Used by the features grid, the steps and the creator perks. */
export function FeatureItem({ item, variant = "card", inverse = false }: FeatureItemProps) {
  const layout = layouts[variant];
  return (
    <article className={layout.wrap}>
      <Vignette name={item.vignette} className={layout.vignette} />
      <div className={layout.text}>
        <h3 className="flex flex-wrap items-center gap-x-3 gap-y-1 font-display text-xl font-bold tracking-tight">
          {item.title}
          {item.soon ? <SoonBadge /> : null}
        </h3>
        <p className={cx("mt-2 leading-relaxed", inverse ? "text-on-ink-muted" : "text-fg-muted")}>{item.body}</p>
      </div>
    </article>
  );
}
