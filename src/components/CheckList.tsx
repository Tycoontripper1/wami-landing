import { cx } from "@/lib/cx";

const tints = {
  surface: "bg-primary text-on-primary",
  inverse: "bg-on-primary text-primary",
} as const;

type CheckListProps = {
  items: string[];
  tint?: keyof typeof tints;
};

export function CheckList({ items, tint = "surface" }: CheckListProps) {
  return (
    <ul className="space-y-3.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className={cx("mt-0.5 grid size-6 shrink-0 place-items-center rounded-full", tints[tint])}>
            <svg viewBox="0 0 24 24" aria-hidden="true" className="size-3.5" fill="none" stroke="currentColor" strokeWidth={3.2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12.5l4.5 4.5L19 7.5" />
            </svg>
          </span>
          <span className="text-base leading-snug">{item}</span>
        </li>
      ))}
    </ul>
  );
}
