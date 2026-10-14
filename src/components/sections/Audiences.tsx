import { CheckList } from "@/components/CheckList";
import { Illustration } from "@/components/illustrations/Illustration";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { audiences } from "@/content/site";

/* Two cards, deliberately different weight: the first is the neutral surface,
   the second is the brand colour. Same component, so only the data differs. */
const cardStyles = [
  { wrap: "bg-surface", tint: "surface" as const },
  { wrap: "bg-primary text-on-primary", tint: "inverse" as const },
];

export function Audiences() {
  return (
    <Section surface="surface">
      <div className="grid gap-6 md:grid-cols-2">
        {audiences.map((audience, index) => {
          const style = cardStyles[index % cardStyles.length];
          return (
            <Reveal
              key={audience.title}
              as="article"
              delay={index * 120}
              className={`relative overflow-hidden rounded-[2rem] border-2 border-ink p-8 sm:p-10 ${style.wrap}`}
            >
              {/* title and drawing share a row, so the drawing never sits on the text */}
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-2xl font-bold tracking-tight text-balance sm:text-3xl">{audience.title}</h3>
                <Illustration name={audience.illustration} className="-mr-2 -mt-3 size-24 shrink-0 rotate-6 sm:size-28" />
              </div>
              <div className="mt-6">
                <CheckList items={audience.points} tint={style.tint} />
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
