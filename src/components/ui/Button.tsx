import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cx } from "@/lib/cx";

const variants = {
  primary:
    "bg-primary text-on-primary border-2 border-ink shadow-pop hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none",
  secondary: "bg-surface text-fg border-2 border-ink hover:bg-muted active:scale-[0.97]",
} as const;

const sizes = {
  md: "h-11 px-5 text-sm",
  lg: "h-14 px-7 text-base",
} as const;

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  children: ReactNode;
};

export function Button({ variant = "primary", size = "md", className, children, ...rest }: ButtonProps) {
  return (
    <a
      {...rest}
      className={cx(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition",
        variants[variant],
        sizes[size],
        className,
      )}
    >
      {children}
    </a>
  );
}
