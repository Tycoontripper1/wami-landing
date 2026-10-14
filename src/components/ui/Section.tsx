import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import { Container } from "./Container";

const surfaces = {
  canvas: "bg-canvas",
  surface: "bg-surface border-y border-line",
} as const;

type SectionProps = {
  id?: string;
  surface?: keyof typeof surfaces;
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
