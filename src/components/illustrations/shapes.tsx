import type { SVGProps } from "react";
import { cx } from "@/lib/cx";

/** Fill tones — each maps to a themed illustration colour variable. */
const tones = {
  paper: "fill-ill-paper",
  soft: "fill-ill-soft",
  warm: "fill-ill-warm",
  primary: "fill-ill-primary",
  accent: "fill-ill-accent",
  ink: "fill-ill-ink",
} as const;

export type Tone = keyof typeof tones;

type Extra = { tone?: Tone };

/** Every shape shares the same ink outline, so a drawing is just geometry + tone. */
const base = "stroke-ill-ink";
const toneClass = (tone?: Tone) => (tone ? tones[tone] : "fill-none");

export function P({ tone, className, ...rest }: SVGProps<SVGPathElement> & Extra) {
  return <path strokeWidth={2.5} {...rest} className={cx(base, toneClass(tone), className)} />;
}

export function R({ tone, className, ...rest }: SVGProps<SVGRectElement> & Extra) {
  return <rect strokeWidth={2.5} {...rest} className={cx(base, toneClass(tone), className)} />;
}

export function C({ tone, className, ...rest }: SVGProps<SVGCircleElement> & Extra) {
  return <circle strokeWidth={2.5} {...rest} className={cx(base, toneClass(tone), className)} />;
}

export function E({ tone, className, ...rest }: SVGProps<SVGEllipseElement> & Extra) {
  return <ellipse strokeWidth={2.5} {...rest} className={cx(base, toneClass(tone), className)} />;
}
