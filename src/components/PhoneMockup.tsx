import { LogoMark } from "@/components/brand/Logo";
import { Scene } from "@/components/illustrations/scenes";
import { PhoneFrame } from "@/components/PhoneFrame";
import { cx } from "@/lib/cx";

/* A drawn copy of the app's Home feed: location and the map and bell icons,
   the For you / Near you / Trending tabs, a "From Wami" card, and a creative's
   post with its photo shown as an illustrated scene, so nothing here pretends
   to be a real person. */

const feedTabs = ["For you", "Near you", "Trending"];
const appTabs = ["Home", "Shop", "Post", "Chats", "Profile"];

function Icon({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-[1.25em] fill-none stroke-fg" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  );
}

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[17.5rem] sm:w-[20rem] lg:w-[21rem]">
      <PhoneFrame>
        <div className="flex items-center justify-between px-[1.2em] pt-[0.4em]">
          <span className="flex items-center gap-[0.5em]">
            <LogoMark className="h-[1.5em]" />
            <span className="text-[1.05em] font-bold">Lagos, Nigeria</span>
          </span>
          <span className="flex items-center gap-[0.7em]">
            <Icon d="M9 4 3 6.5v13L9 17l6 3 6-2.5v-13L15 7 9 4zM9 4v13M15 7v13" />
            <Icon d="M6 9a6 6 0 0 1 12 0c0 6 2.5 7.5 2.5 7.5h-17S6 15 6 9zM10 20a2 2 0 0 0 4 0" />
          </span>
        </div>

        <div className="flex items-center gap-[0.4em] px-[1.1em] pt-[0.7em]">
          {feedTabs.map((tab, index) => (
            <span
              key={tab}
              className={cx(
                "rounded-full px-[0.8em] py-[0.4em] text-[0.78em] font-semibold",
                index === 0 ? "bg-primary text-on-primary" : "bg-muted text-fg-muted",
              )}
            >
              {tab}
            </span>
          ))}
          <span className="ml-auto text-[0.78em] font-bold text-link">Swipe</span>
        </div>

        <div data-hero="wami" className="mx-[1.1em] mt-[0.8em] rounded-2xl bg-primary px-[1em] py-[0.8em] text-on-primary">
          <span className="inline-flex items-center rounded-full bg-ink/10 px-[0.7em] py-[0.2em] text-[0.68em] font-bold">
            From Wami
          </span>
          <p className="mt-[0.4em] text-[0.95em] font-extrabold leading-tight">See creatives on the map</p>
          <span className="mt-[0.55em] inline-block rounded-lg bg-ink px-[0.9em] py-[0.4em] text-[0.72em] font-bold text-on-ink">
            Open the map
          </span>
        </div>

        <div data-hero="post" className="mx-[1.1em] mt-[0.7em] flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl bg-muted">
          <div className="flex items-center gap-[0.6em] px-[0.8em] py-[0.6em]">
            <span className="grid size-[2.2em] place-items-center rounded-full bg-tile-a text-[0.75em] font-bold">SA</span>
            <span className="min-w-0 flex-1 leading-tight">
              <span className="block truncate text-[0.85em] font-bold">Sola Adeyemi</span>
              <span className="block truncate text-[0.68em] text-fg-muted">Hair · Braiding · Ikeja</span>
            </span>
            <span className="text-[0.8em] font-bold">★ 4.9</span>
          </div>
          <div className="min-h-0 flex-1 bg-tile-d">
            <Scene name="beauty" className="size-full" />
          </div>
          <div className="flex items-center gap-[0.8em] px-[0.8em] py-[0.55em]">
            <span data-hero="heart" className="inline-flex">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="size-[1.4em] fill-none stroke-fg-muted" strokeWidth={2} strokeLinejoin="round">
                <path d="M12 20.5C5 15.6 3.2 11.7 4.7 8.6 6 6 9.6 5.7 12 8.5c2.4-2.8 6-2.5 7.3.1 1.5 3.1-.3 7-7.3 11.9z" />
              </svg>
            </span>
            <span className="ml-auto rounded-lg bg-primary px-[0.8em] py-[0.35em] text-[0.7em] font-bold text-on-primary">View profile</span>
          </div>
        </div>

        {/* the app's real bottom tabs */}
        <div className="mx-[0.9em] mb-[1.9em] mt-[0.8em] flex items-center justify-between rounded-full border border-line bg-surface px-[0.4em] py-[0.35em]">
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
