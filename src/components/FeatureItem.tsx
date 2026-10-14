import { IllustrationTile } from "@/components/illustrations/IllustrationTile";
import { SoonBadge } from "@/components/ui/SoonBadge";
import type { Feature } from "@/content/site";
import { cx } from "@/lib/cx";

const layouts = {
  card: {
    wrap: "group flex flex-col gap-5 rounded-3xl border border-line bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-primary",
    tile: "lg",
    text: "",
    heading: "",
  },
  row: {
    wrap: "group flex items-start gap-5",
    tile: "md",
    text: "pt-1",
    heading: "",
  },
  step: {
    wrap: "group flex flex-col items-center gap-6 text-center",
    tile: "xl",
    text: "max-w-xs",
    heading: "justify-center",
  },
} as const;

type FeatureItemProps = {
  item: Pick<Feature, "illustration" | "tone" | "title" | "body" | "soon">;
  variant?: keyof typeof layouts;
};

/** One drawing + a title + a sentence. Used by the features grid, the steps and the creator perks. */
export function FeatureItem({ item, variant = "card" }: FeatureItemProps) {
  const layout = layouts[variant];
  return (
    <article className={layout.wrap}>
      <IllustrationTile name={item.illustration} tone={item.tone} size={layout.tile} />
      <div className={cx(layout.text)}>
        <h3 className={cx("flex flex-wrap items-center gap-x-3 gap-y-1 font-display text-xl font-bold tracking-tight", layout.heading)}>
          {item.title}
          {item.soon ? <SoonBadge /> : null}
        </h3>
        <p className="mt-2 leading-relaxed text-fg-muted">{item.body}</p>
      </div>
    </article>
  );
}
