import { FeatureItem } from "@/components/FeatureItem";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { creatives } from "@/content/site";

const STAGGER_MS = 110;

export function Creatives() {
  return (
    <Section id="creatives">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeader eyebrow={creatives.eyebrow} title={creatives.title} body={creatives.body} />
        <div className="space-y-8">
          {creatives.perks.map((perk, index) => (
            <Reveal key={perk.title} delay={index * STAGGER_MS}>
              <FeatureItem item={perk} variant="row" />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
