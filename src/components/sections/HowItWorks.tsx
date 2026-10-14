import { FeatureItem } from "@/components/FeatureItem";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { steps } from "@/content/site";

const STAGGER_MS = 140;

export function HowItWorks() {
  return (
    <Section id="how-it-works" surface="surface">
      <SectionHeader eyebrow="How it works" title="From first look to finished job, in three moves." />
      <div className="relative mt-16">
        {/* a dashed path that draws itself across the three drawings on wide screens */}
        <Reveal
          effect="draw"
          className="absolute left-[16%] right-[16%] top-[4.5rem] hidden border-t-2 border-dashed border-line lg:block"
        >
          <span className="sr-only">Steps are connected in order</span>
        </Reveal>
        <ol className="relative grid gap-14 lg:grid-cols-3 lg:gap-8">
          {steps.map((step, index) => (
            <Reveal key={step.title} as="li" delay={index * STAGGER_MS}>
              <FeatureItem item={step} variant="step" />
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
