import { FeatureItem } from "@/components/FeatureItem";
import { Pin } from "@/components/illustrations/decor";
import { Scene } from "@/components/illustrations/scenes";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { creatives } from "@/content/site";

const STAGGER_MS = 110;

/* The dark band: the supply side of the marketplace gets its own world. */
export function Creatives() {
  return (
    <Section id="creatives" surface="ink">
      <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <SectionHeader tone="inverse" eyebrow={creatives.eyebrow} title={creatives.title} body={creatives.body} />
          <Reveal delay={120} className="relative mt-12 max-w-md">
            <div className="relative rounded-[2rem] border-2 border-on-ink bg-tile-b p-6 text-ink">
              <Pin tone="primary" className="absolute -top-5 left-12" />
              <Scene name="stall" />
            </div>
          </Reveal>
        </div>
        <div className="space-y-9">
          {creatives.perks.map((perk, index) => (
            <Reveal key={perk.title} delay={index * STAGGER_MS}>
              <FeatureItem item={perk} variant="row" inverse />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
