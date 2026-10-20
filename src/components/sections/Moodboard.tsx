import { boldTones, tileTones } from "@/components/illustrations/IllustrationTile";
import { Scene } from "@/components/illustrations/scenes";
import { Carousel } from "@/components/ui/Carousel";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { categories } from "@/content/site";
import { cx } from "@/lib/cx";

type Category = (typeof categories)[number];

/* Desktop: one big card for the first category and four smaller ones beside it. */
const layouts = [
  { span: "lg:col-span-3 lg:row-span-2", featured: true },
  { span: "lg:col-span-3", featured: false },
  { span: "lg:col-span-3", featured: false },
  { span: "lg:col-span-3", featured: false },
  { span: "lg:col-span-3", featured: false },
] as const;

function BoardCard({ category, index }: { category: Category; index: number }) {
  const layout = layouts[index % layouts.length];
  return (
    <Reveal delay={(index % 2) * 120} className={layout.span}>
      <article
        className={cx(
          "group relative h-full rounded-[2rem] border border-line p-7 transition duration-300",
          "hover:-translate-y-1",
          tileTones[category.tone],
        )}
      >
        <div className={cx("flex h-full gap-4", layout.featured ? "flex-col" : "flex-col sm:flex-row sm:items-center")}>
          <div className={layout.featured ? "" : "sm:w-1/2"}>
            <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">{category.title}</h3>
            <p className="mt-2 max-w-xs leading-relaxed text-ink/80">{category.body}</p>
          </div>
          <Scene
            name={category.scene}
            className={cx(
              "transition duration-500 group-hover:scale-105",
              layout.featured ? "mx-auto mt-auto w-full max-w-sm" : "mx-auto w-full max-w-[13rem] sm:w-1/2",
            )}
          />
        </div>
      </article>
    </Reveal>
  );
}

/* Mobile: the same categories as a swipeable row in the bold colour set. */
function BoldSlide({ category }: { category: Category }) {
  return (
    <article className={cx("relative flex h-full flex-col rounded-[2rem] p-6", boldTones[category.bold])}>
      <Scene name={category.scene} className="mx-auto w-full max-w-[15rem]" />
      <h3 className="mt-4 font-display text-2xl font-bold tracking-tight">{category.title}</h3>
      <p className="mt-1.5 leading-relaxed text-ink/80">{category.body}</p>
    </article>
  );
}

export function Moodboard() {
  return (
    <Section id="browse" className="overflow-hidden">
      <SectionHeader
        eyebrow="Browse"
        title="Start with a category."
        body="Photography, hair and beauty, fashion, art and digital. Each one opens the people and products near you."
      />

      <div className="mt-8 lg:hidden">
        <p className="mb-1 flex items-center gap-2 text-sm font-semibold text-fg-muted" aria-hidden="true">
          Swipe <span className="animate-nudge">→</span>
        </p>
      </div>
      <Carousel label="Categories" autoplayMs={4500} className="-mx-5 sm:-mx-8 lg:hidden">
        {categories.map((category) => (
          <BoldSlide key={category.id} category={category} />
        ))}
      </Carousel>

      <div className="mt-16 hidden gap-x-6 gap-y-10 lg:grid lg:grid-cols-6">
        {categories.map((category, index) => (
          <BoardCard key={category.id} category={category} index={index} />
        ))}
      </div>
    </Section>
  );
}
