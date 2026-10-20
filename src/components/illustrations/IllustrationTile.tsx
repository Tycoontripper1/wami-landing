export const tileTones = {
  a: "bg-tile-a",
  b: "bg-tile-b",
  c: "bg-tile-c",
  d: "bg-tile-d",
  e: "bg-tile-e",
} as const;

export type TileTone = keyof typeof tileTones;

/** Fully saturated colours for the mobile category slides. */
export const boldTones = {
  cyan: "bg-bold-cyan",
  lime: "bg-bold-lime",
  coral: "bg-bold-coral",
  amber: "bg-bold-amber",
  lilac: "bg-bold-lilac",
} as const;

export type BoldTone = keyof typeof boldTones;
