import { Scene } from "@/components/illustrations/scenes";
import { VignetteMotion } from "@/components/vignettes/VignetteMotion";
import { cx } from "@/lib/cx";
import type { ReactNode } from "react";

/* Small crops of the real app: the same cards, chips and bubbles, drawn in
   HTML at a size that fits a feature card. They stand in for stock icons, so
   what you see here is what you get in the app. People and numbers are
   examples, and the "work" photo is an illustrated scene, so nothing here
   pretends to be a real person. All decorative: the text next to each one
   says the same thing. */

export type VignetteName =
  | "feed"
  | "map"
  | "book"
  | "chat"
  | "review"
  | "listing"
  | "import"
  | "wallet";

const frame = "relative h-48 w-full overflow-hidden rounded-2xl";

function Avatar({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cx(
        "grid size-8 shrink-0 place-items-center rounded-full bg-tile-a text-[11px] font-bold text-ink",
        className,
      )}
    >
      {children}
    </span>
  );
}

function Star({ className, animate }: { className?: string; animate?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" data-a={animate ? "star" : undefined} className={cx("size-3.5 fill-accent", className)}>
      <path d="M12 2.6l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4 6.1 20.6l1.2-6.5L2.5 9.5l6.6-.9z" />
    </svg>
  );
}

function PinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 30" aria-hidden="true" className={cx("h-5 w-auto", className)}>
      <path
        d="M12 1C6.3 1 2.5 5.3 2.5 10.6 2.5 17 12 29 12 29s9.5-12 9.5-18.4C21.5 5.3 17.7 1 12 1z"
        className="fill-primary"
      />
      <circle cx="12" cy="10.5" r="3.6" className="fill-accent" />
    </svg>
  );
}

/* ── the feed ─────────────────────────────────────────────────────────────── */

function Feed() {
  return (
    <div className={cx(frame, "bg-tile-a p-4")}>
      <div data-a="rise" className="mx-auto flex h-full max-w-[17rem] flex-col overflow-hidden rounded-2xl bg-surface shadow-sm">
        <div className="flex items-center gap-2 px-3 py-2">
          <Avatar>SA</Avatar>
          <div className="min-w-0 flex-1 leading-tight">
            <p className="truncate text-[12px] font-bold">Sola Adeyemi</p>
            <p className="truncate text-[10px] text-fg-muted">Hair · Braiding · Ikeja</p>
          </div>
          <span className="flex items-center gap-0.5 text-[11px] font-bold">
            <Star />
            4.9
          </span>
        </div>
        <div className="min-h-0 flex-1 bg-tile-d">
          <Scene name="beauty" className="size-full" />
        </div>
        <div className="flex items-center gap-3 px-3 py-2">
          <span data-a="beat" className="inline-flex">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-none stroke-fg-muted" strokeWidth={2} strokeLinejoin="round">
              <path d="M12 20.5C5 15.6 3.2 11.7 4.7 8.6 6 6 9.6 5.7 12 8.5c2.4-2.8 6-2.5 7.3.1 1.5 3.1-.3 7-7.3 11.9z" />
            </svg>
          </span>
          <span className="ml-auto rounded-lg bg-primary px-2.5 py-1 text-[10px] font-bold text-on-primary">View profile</span>
        </div>
      </div>
    </div>
  );
}

/* ── the map ──────────────────────────────────────────────────────────────── */

function Bubble({ title, note, className }: { title: string; note: string; className: string }) {
  return (
    <div data-a="pop" className={cx("absolute flex items-center gap-1.5", className)}>
      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-surface shadow-md">
        <PinIcon />
      </span>
      <span className="leading-tight">
        <b className="block text-[11px] font-bold text-ink">{title}</b>
        <i className="block text-[10px] text-fg-muted">{note}</i>
      </span>
    </div>
  );
}

function MapVignette() {
  return (
    <div className={cx(frame, "bg-map-land")}>
      <svg viewBox="0 0 320 192" preserveAspectRatio="xMidYMid slice" aria-hidden="true" className="absolute inset-0 size-full">
        <path d="M0 150 C50 128 96 168 160 156 S270 128 320 148 V192 H0 Z" className="fill-map-water" />
        <rect x="214" y="18" width="74" height="46" rx="16" className="fill-map-park" />
        <rect x="26" y="96" width="52" height="30" rx="12" className="fill-map-park" />
        <g className="stroke-map-road" strokeWidth="7" strokeLinecap="round" fill="none">
          <path d="M-10 70 L330 40" />
          <path d="M40 -10 L96 200" />
          <path d="M-10 128 C90 112 200 118 330 100" />
          <path d="M196 -10 L246 200" />
        </g>
      </svg>
      <Bubble title="Lagos" note="commercial capital" className="left-4 top-12" />
      <Bubble title="Ibadan" note="Oyo State" className="right-3 top-5" />
      <Bubble title="Abuja" note="federal capital" className="bottom-6 left-1/3" />
    </div>
  );
}

/* ── booking ──────────────────────────────────────────────────────────────── */

const days = [
  { d: "Mon", n: 14 },
  { d: "Tue", n: 15 },
  { d: "Wed", n: 16 },
  { d: "Thu", n: 17 },
  { d: "Fri", n: 18 },
];

function Book() {
  return (
    <div className={cx(frame, "bg-tile-c p-4")}>
      <div className="mx-auto h-full max-w-[17rem] rounded-2xl bg-surface p-3 shadow-sm">
        <p className="text-[12px] font-bold">Pick a date</p>
        <div className="mt-2 flex gap-1.5">
          {days.map((day, i) => (
            <span
              key={day.n}
              data-a="rise"
              className={cx(
                "flex flex-1 flex-col items-center rounded-lg border py-1.5 leading-tight",
                i === 2 ? "border-primary bg-primary text-on-primary" : "border-line text-fg",
              )}
            >
              <span className="text-[9px]">{day.d}</span>
              <span className="text-[13px] font-bold">{day.n}</span>
            </span>
          ))}
        </div>
        <div className="mt-2 flex gap-1.5">
          {["10:00", "12:30", "3:00"].map((time, i) => (
            <span
              key={time}
              data-a="rise"
              className={cx(
                "rounded-full border px-2.5 py-1 text-[10px] font-semibold",
                i === 1 ? "border-ink bg-ink text-on-ink" : "border-line text-fg-muted",
              )}
            >
              {time}
            </span>
          ))}
        </div>
        <span data-a="rise" className="mt-3 grid h-8 place-items-center rounded-lg bg-primary text-[11px] font-bold text-on-primary">
          Send request
        </span>
      </div>
    </div>
  );
}

/* ── chat ─────────────────────────────────────────────────────────────────── */

function Chat() {
  const mine = "ml-auto max-w-[78%] rounded-2xl rounded-br-md bg-primary px-3 py-2 text-[11px] text-on-primary";
  const theirs = "max-w-[78%] rounded-2xl rounded-bl-md bg-muted px-3 py-2 text-[11px] text-fg";
  return (
    <div className={cx(frame, "bg-tile-d p-4")}>
      <div className="mx-auto flex h-full max-w-[17rem] flex-col justify-end gap-2 rounded-2xl bg-surface p-3 shadow-sm">
        <p data-a="msg" className={theirs}>Hi! Are you free on Wednesday?</p>
        <p data-a="msg" className={mine}>Yes. What are you after, and where?</p>
        <p data-a="msg" className={theirs}>A portrait shoot in Ikeja, about two hours.</p>
        <p data-a="msg" className={mine}>Done. I&apos;ll send you a price.</p>
      </div>
    </div>
  );
}

/* ── reviews ──────────────────────────────────────────────────────────────── */

function Review() {
  return (
    <div className={cx(frame, "bg-tile-b p-4")}>
      <div className="mx-auto h-full max-w-[17rem] rounded-2xl bg-surface p-3 shadow-sm">
        <div className="flex items-center gap-2">
          <Avatar className="bg-tile-d">TK</Avatar>
          <div className="min-w-0 flex-1 leading-tight">
            <p className="text-[12px] font-bold">Tolu K.</p>
            <p className="text-[10px] text-fg-muted">Booked a portrait shoot</p>
          </div>
        </div>
        <div className="mt-2 flex gap-0.5">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} animate className="size-4" />
          ))}
        </div>
        <p data-a="rise" className="mt-2 text-[11px] leading-snug text-fg-muted">
          On time, easy to talk to, and the photos were exactly what I asked for.
        </p>
      </div>
    </div>
  );
}

/* ── a listing ────────────────────────────────────────────────────────────── */

function Listing() {
  return (
    <div className={cx(frame, "bg-tile-e p-4")}>
      <div className="mx-auto flex h-full max-w-[17rem] flex-col justify-center gap-3">
        {[
          { name: "Handmade bag", meta: "Accessories · 3 in stock", price: "₦25,000", scene: "fashion" as const },
          { name: "Art print", meta: "Art · 1 in stock", price: "₦12,000", scene: "art" as const },
        ].map((item) => (
          <div key={item.name} data-a="slide" className="flex items-center gap-3 rounded-2xl bg-surface p-2.5 shadow-sm">
            <span className="size-14 shrink-0 overflow-hidden rounded-xl bg-tile-b">
              <Scene name={item.scene} className="size-full" />
            </span>
            <div className="min-w-0 flex-1 leading-tight">
              <p className="truncate text-[12px] font-bold">{item.name}</p>
              <p className="truncate text-[10px] text-fg-muted">{item.meta}</p>
              <p className="mt-1 text-[13px] font-extrabold">{item.price}</p>
            </div>
            <span className="rounded-lg bg-primary px-2.5 py-1 text-[10px] font-bold text-on-primary">View</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── bring your Instagram posts in ────────────────────────────────────────── */

function Import() {
  return (
    <div className={cx(frame, "bg-tile-a p-4")}>
      <div className="mx-auto flex h-full max-w-[17rem] items-center justify-center gap-3">
        <span data-a="pop" className="grid size-14 place-items-center rounded-2xl bg-accent shadow-sm">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="size-7 fill-none stroke-ink" strokeWidth={2}>
            <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.2" cy="6.8" r="1" className="fill-ink" />
          </svg>
        </span>
        <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6 shrink-0 fill-none stroke-fg-muted" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 12h15M13 6l6 6-6 6" />
        </svg>
        <div className="flex flex-col gap-1.5">
          {["Tassel bag", "Pink earrings", "Luxury watch"].map((name) => (
            <span key={name} data-a="slide" className="flex items-center gap-2 rounded-lg bg-surface px-2.5 py-1.5 text-[10px] font-semibold shadow-sm">
              <span className="size-2 rounded-full bg-primary" />
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── the wallet ───────────────────────────────────────────────────────────── */

function Wallet() {
  return (
    <div className={cx(frame, "bg-tile-c p-4")}>
      <div className="mx-auto flex h-full max-w-[17rem] flex-col justify-center rounded-2xl bg-ink p-4 text-on-ink shadow-sm">
        <p className="text-[10px] text-on-ink-muted">Wallet balance</p>
        <p data-a="count" data-to="48500" data-prefix="₦" className="mt-1 font-display text-2xl font-extrabold">₦48,500</p>
        <div className="mt-3 flex gap-2">
          <span className="rounded-lg bg-primary px-3 py-1.5 text-[10px] font-bold text-on-primary">Request payout</span>
          <span className="rounded-lg border border-ink-line px-3 py-1.5 text-[10px] font-bold">History</span>
        </div>
      </div>
    </div>
  );
}

const vignettes: Record<VignetteName, () => React.JSX.Element> = {
  feed: Feed,
  map: MapVignette,
  book: Book,
  chat: Chat,
  review: Review,
  listing: Listing,
  import: Import,
  wallet: Wallet,
};

export function Vignette({ name, className }: { name: VignetteName; className?: string }) {
  const Piece = vignettes[name];
  return (
    <div aria-hidden="true" className={className}>
      <VignetteMotion>
        <Piece />
      </VignetteMotion>
    </div>
  );
}
