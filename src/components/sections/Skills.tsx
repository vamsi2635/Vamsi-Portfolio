import { practices, skillCategories } from '../../data/skills'
import { Section } from '../ui/Section'
import { TagList } from '../ui/Tag'

export function Skills() {
  return (
    <Section id="skills" eyebrow="Technical toolkit" title="The tools behind reliable delivery." description="A practical engineering toolkit spanning browser automation, API validation, programming, data and continuous integration.">
      <div className="divide-y divide-line border-y border-line">
        {skillCategories.map((category, index) => (
          <article key={category.title} className="grid gap-4 py-6 first:pt-5 md:grid-cols-[4rem_minmax(12rem,.55fr)_minmax(0,1fr)] md:gap-7">
            <span className="font-display text-3xl leading-none text-[#aab3c3]">0{index + 1}</span>
            <div>
              <h3 className="text-base font-semibold tracking-tight text-ink">{category.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{category.description}</p>
            </div>
            <div className="md:pt-0.5"><TagList items={category.items} /></div>
          </article>
        ))}
      </div>
      <div className="mt-8 grid gap-4 border border-line bg-white p-5 md:grid-cols-[10rem_minmax(0,1fr)] md:p-7">
        <h3 className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent">Engineering practices</h3>
        <div><TagList items={practices} /><p className="mt-4 max-w-2xl text-xs leading-relaxed text-muted">Tool selection is driven by the product, test strategy and delivery pipeline—not by using every tool in every project.</p></div>
      </div>
    </Section>
  )
}