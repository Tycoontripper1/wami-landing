import { Illustration } from "@/components/illustrations/Illustration";
import { tileTones, type TileTone } from "@/components/illustrations/IllustrationTile";
import { VelocitySkew } from "@/components/ui/VelocitySkew";
import { ticker } from "@/content/site";

const tones: TileTone[] = ["a", "b", "c", "d", "e"];

function TickerItem({ item, index }: { item: (typeof ticker)[number]; index: number }) {
  return (
    <li className="flex shrink-0 items-center gap-3 pr-10">
      <span className={`grid size-11 place-items-center rounded-xl border-2 border-on-ink/30 p-1.5 ${tileTones[tones[index % tones.length]]}`}>
        <Illustration name={item.illustration} />
      </span>
      <span className="whitespace-nowrap font-display text-xl font-bold">{item.text}</span>
    </li>
  );
}

/* A dark band that breaks up the white page. The list is rendered twice and
   the track slides exactly half its width, so the loop never visibly resets.
   The second copy is hidden from assistive tech. */
export function Ticker() {
  return (
    <section
      aria-label="What Wami does"
      className="relative z-10 -my-1 -rotate-[1.2deg] scale-x-[1.04] overflow-hidden border-y-2 border-ink bg-dusk-blue py-6 text-on-ink"
    >
      {/* leans with scroll speed; the marquee slides inside it */}
      <VelocitySkew>
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          <ul className="flex">
            {ticker.map((item, i) => (
              <TickerItem key={item.text} item={item} index={i} />
            ))}
          </ul>
          <ul className="flex" aria-hidden="true">
            {ticker.map((item, i) => (
              <TickerItem key={item.text} item={item} index={i} />
            ))}
          </ul>
        </div>
      </VelocitySkew>
    </section>
  );
}
