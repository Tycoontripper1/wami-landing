import { FeatureItem } from "@/components/FeatureItem";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { creatives } from "@/content/site";

export function Creatives() {
  return (
    <Section id="creatives">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeader eyebrow={creatives.eyebrow} title={creatives.title} body={creatives.body} />
        <div className="space-y-8">
          {creatives.perks.map((perk) => (
            <FeatureItem key={perk.title} item={perk} variant="row" />
          ))}
        </div>
      </div>
    </Section>
  );
}
