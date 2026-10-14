import { FeatureItem } from "@/components/FeatureItem";
import type { BoldTone } from "@/components/illustrations/IllustrationTile";
import { Carousel } from "@/components/ui/Carousel";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { features } from "@/content/site";

const COLUMNS = 3;
const STAGGER_MS = 90;
const BOLD_ORDER: BoldTone[] = ["lime", "cyan", "coral", "lilac", "amber", "cyan"];

export function Features() {
  return (
    <Section id="features" className="overflow-hidden">
      <SectionHeader
        eyebrow="What you get"
        title="Everything between “I need someone” and “it's done”."
      />

      {/* phones: a swipeable carousel in the bold colour set */}
      <Carousel label="Features" effect="snap" autoplayMs={5000} slideClassName="w-[82%]" className="-mx-5 mt-8 sm:hidden">
        {features.map((feature, index) => (
          <FeatureItem key={feature.title} item={feature} bold={BOLD_ORDER[index % BOLD_ORDER.length]} />
        ))}
      </Carousel>

      {/* wider screens: the pastel grid */}
      <div className="mt-14 hidden gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <Reveal key={feature.title} delay={(index % COLUMNS) * STAGGER_MS}>
            <FeatureItem item={feature} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
