import { CheckList } from "@/components/CheckList";
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
              className={`relative overflow-hidden rounded-[2rem] border border-line p-8 sm:p-10 ${style.wrap}`}
            >
              <h3 className="font-display text-2xl font-bold tracking-tight text-balance sm:text-3xl">{audience.title}</h3>
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
