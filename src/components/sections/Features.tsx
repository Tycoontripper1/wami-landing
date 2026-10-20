import { FeatureItem } from "@/components/FeatureItem";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { features } from "@/content/site";

const COLUMNS = 3;
const STAGGER_MS = 90;

export function Features() {
  return (
    <Section id="features">
      <SectionHeader
        eyebrow="What you get"
        title="Everything in one app."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <Reveal key={feature.title} delay={(index % COLUMNS) * STAGGER_MS}>
            <FeatureItem item={feature} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
