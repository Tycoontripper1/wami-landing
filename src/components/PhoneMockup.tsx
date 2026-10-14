import { LogoMark } from "@/components/brand/Logo";
import { Pin } from "@/components/illustrations/decor";
import { Illustration, type IllustrationName } from "@/components/illustrations/Illustration";
import { tileTones, type TileTone } from "@/components/illustrations/IllustrationTile";
import { C, P, R } from "@/components/illustrations/shapes";
import { LikeButton } from "@/components/LikeButton";
import { PhoneFrame } from "@/components/PhoneFrame";
import { Drift } from "@/components/ui/Drift";
import { cx } from "@/lib/cx";

/* A drawn stand-in for the app's Discover screen: the real layout (location,
   Discover / Trending / Near You tabs, a card, pass / like, the five bottom
   tabs) with an illustrated scene instead of a photo, so nothing here
   pretends to be a real person. */

function Scene() {
  return (
    <svg
      viewBox="0 0 240 280"
      preserveAspectRatio="xMidYMax slice"
      className="size-full"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* tall sky, so the scene still fills a card taller than the drawing */}
      <R x={0} y={-400} width={240} height={680} tone="soft" strokeWidth={0} />
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

const feedTabs = ["Discover", "Trending", "Near You"];
const appTabs = ["Home", "Shop", "Post", "Chats", "Profile"];

type StickerProps = {
  name: IllustrationName;
  tone: TileTone;
  /** Position and tilt. */
  className: string;
  /** Offsets each sticker's float so they never move in step. */
  delay: string;
  /** Scroll parallax travel in px; differs per sticker so they separate as you scroll. */
  drift: number;
};

/* A card pinned to the board. Three layers, each owning one kind of motion
   so they never fight: Drift (scroll parallax, GSAP) → positioned/tilted
   wrapper → float (CSS loop). */
function Sticker({ name, tone, className, delay, drift }: StickerProps) {
  return (
    <Drift distance={drift} className={cx("absolute hidden sm:block", className)}>
      <div
        className={cx("relative size-24 animate-float rounded-2xl border-2 border-ink p-3 shadow-pop", tileTones[tone])}
        style={{ animationDelay: delay }}
      >
        <Pin tone="accent" className="absolute -top-5 left-1/2 h-7 -translate-x-1/2" />
        <Illustration name={name} />
      </div>
    </Drift>
  );
}

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[17.5rem] sm:w-[20rem] lg:w-[21rem]">
      <Sticker name="chat" tone="d" className="-left-24 top-24 -rotate-6" delay="0s" drift={-70} />
      <Sticker name="star" tone="b" className="-right-24 top-8 rotate-6" delay="-2.3s" drift={-130} />
      <Sticker name="book" tone="c" className="-left-20 bottom-40 rotate-3" delay="-4.1s" drift={60} />
      <Sticker name="shield" tone="a" className="-right-28 bottom-16 -rotate-3" delay="-5.6s" drift={110} />

      <PhoneFrame>
        <div className="flex items-center gap-[0.5em] px-[1.3em] pt-[0.4em]">
          <LogoMark className="h-[1.5em]" />
          <span className="text-[1.05em] font-bold">Lagos, Nigeria</span>
        </div>

        <div className="flex gap-[0.4em] px-[1.1em] pt-[0.7em]">
          {feedTabs.map((tab, index) => (
            <span
              key={tab}
              className={cx(
                "rounded-full px-[0.85em] py-[0.4em] text-[0.82em] font-semibold",
                index === 0 ? "bg-primary text-on-primary" : "border border-line text-fg-muted",
              )}
            >
              {tab}
            </span>
          ))}
        </div>

        {/* Mirrors the app: pass / like swipes the card off, the next settles in. */}
        <div className="relative mx-[1.1em] mt-[0.8em] min-h-0 flex-1 animate-swipe overflow-hidden rounded-3xl border border-line">
          <Scene />
          <div className="absolute inset-x-0 bottom-0 bg-ill-ink/85 px-[1.1em] py-[0.7em] text-ill-paper">
            <p className="font-display text-[1.15em] font-bold leading-tight">Portrait sessions</p>
            <p className="text-[0.82em] opacity-80">Photographer · Near you</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 py-[0.9em]">
          <span className="grid size-11 place-items-center rounded-full border border-line bg-surface">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 stroke-fg" fill="none" strokeWidth={2.5} strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </span>
          <LikeButton />
        </div>

        {/* the app's real bottom tabs */}
        <div className="mx-[0.9em] mb-[1.9em] flex items-center justify-between rounded-full border border-line bg-surface px-[0.4em] py-[0.35em]">
          {appTabs.map((tab, index) => (
            <span
              key={tab}
              className={cx(
                "rounded-full px-[0.6em] py-[0.45em] text-[0.7em] font-bold",
                index === 0 ? "bg-primary text-on-primary" : "text-fg-muted",
              )}
            >
              {tab}
            </span>
          ))}
        </div>
      </PhoneFrame>
    </div>
  );
}
