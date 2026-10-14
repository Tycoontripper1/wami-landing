import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import { Container } from "./Container";

/* `ink` is the dark band that breaks up the white page. Text colour is set
   here so everything inside inherits the right one. */
const surfaces = {
  canvas: "bg-canvas",
  surface: "bg-surface border-y border-line",
  ink: "bg-ink text-on-ink",
} as const;

export type SectionSurface = keyof typeof surfaces;

type SectionProps = {
  id?: string;
  surface?: SectionSurface;
  children: ReactNode;
  className?: string;
};

export function Section({ id, surface = "canvas", children, className }: SectionProps) {
  return (
    <section id={id} className={cx("py-20 sm:py-28", surfaces[surface], className)}>
      <Container>{children}</Container>
    </section>
  );
}
