"use client";

import { THEME_STORAGE_KEY } from "@/lib/theme";

/** Both glyphs are rendered; CSS (driven by data-theme) shows the right one, so there's no hydration flicker. */
export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      /* private mode — the choice just won't persist */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch between light and dark theme"
      className="grid size-11 place-items-center rounded-full border border-line bg-surface transition hover:bg-muted"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 dark:hidden" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path className="fill-ill-warm stroke-ill-ink" d="M20 14.5A8.5 8.5 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5Z" />
      </svg>
      <svg viewBox="0 0 24 24" aria-hidden="true" className="hidden size-5 dark:block" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <circle className="fill-ill-warm stroke-ill-warm" cx="12" cy="12" r="4.5" />
        <path className="stroke-ill-warm" d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M18.7 5.3l-1.6 1.6M6.9 17.1l-1.6 1.6" />
      </svg>
    </button>
  );
}
