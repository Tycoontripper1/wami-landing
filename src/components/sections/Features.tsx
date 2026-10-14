import { FeatureItem } from "@/components/FeatureItem";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { features } from "@/content/site";

export function Features() {
  return (
    <Section id="features">
      <SectionHeader
        eyebrow="What you get"
        title="Everything between “I need someone” and “it's done”."
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <FeatureItem key={feature.title} item={feature} />
        ))}
      </div>
    </Section>
  );
}
