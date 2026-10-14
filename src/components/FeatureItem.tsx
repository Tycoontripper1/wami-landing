import { Illustration } from "@/components/illustrations/Illustration";
import { IllustrationTile, tileTones } from "@/components/illustrations/IllustrationTile";
import { SoonBadge } from "@/components/ui/SoonBadge";
import type { Feature } from "@/content/site";
import { cx } from "@/lib/cx";

const layouts = {
  /* a pastel colour-block card with the drawing sitting straight on it */
  card: {
    wrap: "group flex flex-col gap-4 rounded-3xl border-2 border-ink p-6 transition duration-300 hover:-translate-y-1 hover:shadow-pop",
    text: "",
    heading: "",
  },
  row: {
    wrap: "group flex items-start gap-5",
    text: "pt-1",
    heading: "",
  },
  step: {
    wrap: "group flex flex-col items-center gap-6 text-center",
    text: "max-w-xs",
    heading: "justify-center",
  },
} as const;

type FeatureItemProps = {
  item: Pick<Feature, "illustration" | "tone" | "title" | "body" | "soon">;
  variant?: keyof typeof layouts;
  /** Set when the item sits on a dark ink band. */
  inverse?: boolean;
};

/** One drawing + a title + a sentence. Used by the features grid, the steps and the creator perks. */
export function FeatureItem({ item, variant = "card", inverse = false }: FeatureItemProps) {
  const layout = layouts[variant];
  const isCard = variant === "card";
  return (
    <article className={cx(layout.wrap, isCard && tileTones[item.tone])}>
      {isCard ? (
        <Illustration name={item.illustration} className="size-24 transition duration-300 group-hover:-rotate-3 group-hover:scale-105" />
      ) : (
        <IllustrationTile name={item.illustration} tone={item.tone} size={variant === "step" ? "xl" : "md"} />
      )}
      <div className={layout.text}>
        <h3 className={cx("flex flex-wrap items-center gap-x-3 gap-y-1 font-display text-xl font-bold tracking-tight", layout.heading)}>
          {item.title}
          {item.soon ? <SoonBadge /> : null}
        </h3>
        <p className={cx("mt-2 leading-relaxed", isCard ? "text-ink/80" : inverse ? "text-on-ink-muted" : "text-fg-muted")}>
          {item.body}
        </p>
      </div>
    </article>
  );
}
