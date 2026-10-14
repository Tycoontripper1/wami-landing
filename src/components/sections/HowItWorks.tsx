import { FeatureItem } from "@/components/FeatureItem";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { steps } from "@/content/site";

export function HowItWorks() {
  return (
    <Section id="how-it-works" surface="surface">
      <SectionHeader eyebrow="How it works" title="From first look to finished job, in three moves." />
      <div className="relative mt-16">
        {/* a dashed path joining the three drawings on wide screens */}
        <div aria-hidden="true" className="absolute left-[16%] right-[16%] top-[4.5rem] hidden border-t-2 border-dashed border-line lg:block" />
        <ol className="relative grid gap-14 lg:grid-cols-3 lg:gap-8">
          {steps.map((step) => (
            <li key={step.title}>
              <FeatureItem item={step} variant="step" />
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
