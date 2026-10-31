import { practices, skillCategories } from '../../data/skills'
import { Section } from '../ui/Section'
import { TagList } from '../ui/Tag'

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technical expertise"
      description="Tools and practices I use in production automation work, grouped by discipline."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <article key={category.title} className="rounded-xl border border-line bg-surface p-5 shadow-card">
            <h3 className="text-[15px] font-semibold text-ink">{category.title}</h3>
            <p className="mt-1 text-sm text-muted">{category.description}</p>
            <TagList items={category.items} className="mt-4" />
          </article>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-3 border-t border-line pt-6 md:flex-row md:items-start md:gap-8">
        <h3 className="shrink-0 text-xs font-semibold uppercase tracking-[0.12em] text-subtle md:w-28 md:pt-1">
          Practices
        </h3>
        <TagList items={practices} />
      </div>
    </Section>
  )
}
