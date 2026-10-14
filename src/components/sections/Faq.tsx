import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { faqs } from "@/content/site";

export function Faq() {
  return (
    <Section id="faq">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeader eyebrow="Questions" title="Good to know before you start." />
        <Reveal delay={100} className="space-y-3">
          {faqs.map((item) => (
            <details key={item.q} className="group rounded-2xl border-2 border-ink bg-surface open:shadow-pop">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-primary transition group-open:rotate-45">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 stroke-on-primary" fill="none" strokeWidth={3} strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p className="max-w-2xl animate-fade-down px-6 pb-6 leading-relaxed text-fg-muted">{item.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
