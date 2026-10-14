import { cx } from "@/lib/cx";
import { Illustration, type IllustrationName } from "./Illustration";

export const tileTones = {
  a: "bg-tile-a",
  b: "bg-tile-b",
  c: "bg-tile-c",
  d: "bg-tile-d",
  e: "bg-tile-e",
} as const;

export type TileTone = keyof typeof tileTones;

const tileSizes = {
  md: "size-20 rounded-2xl p-2.5",
  lg: "size-28 rounded-3xl p-3",
  xl: "size-36 rounded-[2rem] p-4",
} as const;

type IllustrationTileProps = {
  name: IllustrationName;
  tone?: TileTone;
  size?: keyof typeof tileSizes;
  className?: string;
};

/** A drawing seated on a pastel tile with the ink outline — how small illustrations appear in the UI. */
export function IllustrationTile({ name, tone = "a", size = "lg", className }: IllustrationTileProps) {
  return (
    <div
      className={cx(
        "shrink-0 border-2 border-ink transition duration-300 group-hover:-rotate-3 group-hover:scale-105",
        tileTones[tone],
        tileSizes[size],
        className,
      )}
    >
      <Illustration name={name} />
    </div>
  );
}
