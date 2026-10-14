import { cx } from "@/lib/cx";
import { Illustration, type IllustrationName } from "./Illustration";

const tileTones = {
  a: "bg-tile-a",
  b: "bg-tile-b",
  c: "bg-tile-c",
} as const;

export type TileTone = keyof typeof tileTones;

const tileSizes = {
  md: { box: "size-20 rounded-2xl p-2.5" },
  lg: { box: "size-28 rounded-3xl p-3" },
  xl: { box: "size-36 rounded-[2rem] p-4" },
} as const;

type IllustrationTileProps = {
  name: IllustrationName;
  tone?: TileTone;
  size?: keyof typeof tileSizes;
  className?: string;
};

/** A drawing seated on a tinted tile — the one way illustrations appear in the UI. */
export function IllustrationTile({ name, tone = "a", size = "lg", className }: IllustrationTileProps) {
  return (
    <div className={cx("shrink-0 border border-line", tileTones[tone], tileSizes[size].box, className)}>
      <Illustration name={name} />
    </div>
  );
}
