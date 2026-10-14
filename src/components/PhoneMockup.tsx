import { LogoMark } from "@/components/brand/Logo";
import { Illustration, type IllustrationName } from "@/components/illustrations/Illustration";
import { C, P, R } from "@/components/illustrations/shapes";
import { cx } from "@/lib/cx";

/* A drawn stand-in for the app's Discover screen: the real layout (location,
   Discover / Trending / Near You tabs, a card, pass / like) with an illustrated
   scene instead of a photo, so nothing here pretends to be a real person. */

function Scene() {
  return (
    <svg viewBox="0 0 240 280" className="size-full" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <R x={0} y={0} width={240} height={280} tone="soft" strokeWidth={0} />
      <C cx={186} cy={58} r={24} tone="accent" />
      <P tone="primary" d="M-2 178 C44 140 104 140 150 168 C180 186 214 180 242 164 V282 H-2 Z" />
      <P tone="paper" d="M-2 214 C56 190 116 198 168 214 C198 224 224 218 242 210 V282 H-2 Z" />
      {/* a photographer standing on the near hill, kept above the caption bar */}
      <P tone="accent" d="M70 206 C70 156 130 156 130 206 Z" />
      <C cx={100} cy={128} r={19} tone="warm" />
      <P d="M89 121 C93 113 107 113 111 121" strokeWidth={2.5} />
      <R x={82} y={158} width={40} height={26} rx={7} tone="ink" />
      <C cx={102} cy={171} r={8} tone="soft" strokeWidth={2} />
    </svg>
  );
}

const tabs = ["Discover", "Trending", "Near You"];

type StickerProps = {
  name: IllustrationName;
  className: string;
};

function Sticker({ name, className }: StickerProps) {
  return (
    <div className={cx("absolute hidden size-20 rounded-2xl border border-line bg-surface p-3 shadow-lg sm:block", className)}>
      <Illustration name={name} />
    </div>
  );
}

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[17.5rem] sm:w-[19rem]">
      <Sticker name="chat" className="-left-20 top-16 -rotate-6" />
      <Sticker name="star" className="-right-16 top-6 rotate-6" />
      <Sticker name="book" className="-left-14 bottom-24 rotate-3" />
      <Sticker name="shield" className="-right-20 bottom-10 -rotate-3" />

      <div className="rounded-[2.75rem] bg-ill-ink p-2.5 shadow-2xl ring-1 ring-line">
        <div className="overflow-hidden rounded-[2.1rem] bg-canvas">
          <div className="flex items-center gap-2 px-5 pt-5">
            <LogoMark className="h-5" />
            <span className="text-sm font-bold">Lagos, Nigeria</span>
          </div>

          <div className="flex gap-1.5 px-4 pt-3">
            {tabs.map((tab, index) => (
              <span
                key={tab}
                className={cx(
                  "rounded-full px-3 py-1.5 text-[11px] font-semibold",
                  index === 0 ? "bg-primary text-on-primary" : "border border-line text-fg-muted",
                )}
              >
                {tab}
              </span>
            ))}
          </div>

          <div className="relative mx-4 mt-3 aspect-[6/7] overflow-hidden rounded-3xl border border-line">
            <Scene />
            <div className="absolute inset-x-0 bottom-0 bg-ill-ink/85 px-4 py-3 text-ill-paper">
              <p className="font-display text-base font-bold leading-tight">Portrait sessions</p>
              <p className="text-xs opacity-80">Photographer · Near you</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 py-4">
            <span className="grid size-11 place-items-center rounded-full border border-line bg-surface">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 stroke-fg" fill="none" strokeWidth={2.5} strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </span>
            <span className="grid size-12 place-items-center rounded-full bg-accent">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6 stroke-on-accent" fill="none" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20.500C4.500 15 3 10 6.500 7.500 9 5.800 12 7.200 12 9.800 12 7.200 15 5.800 17.500 7.500 21 10 19.500 15 12 20.500Z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
