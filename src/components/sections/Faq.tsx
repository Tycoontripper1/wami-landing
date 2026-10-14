import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { faqs } from "@/content/site";

export function Faq() {
  return (
    <Section id="faq">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeader eyebrow="Questions" title="Good to know before you start." />
        <Reveal delay={100} className="border-t border-line">
          {faqs.map((item) => (
            <details key={item.q} className="group border-b border-line">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                {item.q}
                <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 shrink-0 stroke-fg transition group-open:rotate-45" fill="none" strokeWidth={2.5} strokeLinecap="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p className="max-w-2xl animate-fade-down pb-6 leading-relaxed text-fg-muted">{item.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
