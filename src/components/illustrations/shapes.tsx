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

/** Every shape shares the same ink outline, so a drawing is just geometry + tone.
    A shape may pass its own `stroke-*` class (e.g. a paper-white highlight) and
    that replaces the default rather than competing with it. */
function classes(tone: Tone | undefined, className: string | undefined) {
  const hasOwnStroke = className?.split(" ").some((c) => c.startsWith("stroke-"));
  return cx(hasOwnStroke ? undefined : "stroke-ill-ink", tone ? tones[tone] : "fill-none", className);
}

export function P({ tone, className, ...rest }: SVGProps<SVGPathElement> & Extra) {
  return <path strokeWidth={2.5} {...rest} className={classes(tone, className)} />;
}

export function R({ tone, className, ...rest }: SVGProps<SVGRectElement> & Extra) {
  return <rect strokeWidth={2.5} {...rest} className={classes(tone, className)} />;
}

export function C({ tone, className, ...rest }: SVGProps<SVGCircleElement> & Extra) {
  return <circle strokeWidth={2.5} {...rest} className={classes(tone, className)} />;
}

export function E({ tone, className, ...rest }: SVGProps<SVGEllipseElement> & Extra) {
  return <ellipse strokeWidth={2.5} {...rest} className={classes(tone, className)} />;
}
