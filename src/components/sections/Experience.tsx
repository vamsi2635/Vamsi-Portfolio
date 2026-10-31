import { employer, engagements } from '../../data/experience'
import type { Engagement } from '../../types'
import { Disclosure } from '../ui/Disclosure'
import { Section } from '../ui/Section'
import { Tag, TagList } from '../ui/Tag'

function BulletList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-subtle">{title}</h4>
      <ul className="mt-3 space-y-2.5" role="list">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
            <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function EngagementCard({ engagement, defaultOpen }: { engagement: Engagement; defaultOpen: boolean }) {
  return (
    <article className="rounded-xl border border-line bg-surface shadow-card">
      <Disclosure
        defaultOpen={defaultOpen}
        label={`${engagement.client} engagement details`}
        header={
          <>
            <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="block text-lg font-semibold leading-snug text-ink">{engagement.client}</span>
              <Tag tone="accent">{engagement.domain}</Tag>
            </span>
            <span className="mt-1 block text-sm font-medium text-ink/80">{engagement.platform}</span>
            <span className="mt-1 block text-sm text-muted">
              {engagement.role} · {engagement.dates}
            </span>
            <span className="mt-3 block text-sm leading-relaxed text-muted">{engagement.summary}</span>
            <span className="mt-4 block">
              <TagList items={engagement.stack} />
            </span>
          </>
        }
      >
        <div className="grid gap-7 md:grid-cols-2 md:gap-10">
          <BulletList title="Responsibilities" items={engagement.responsibilities} />
          <BulletList title="Engineering contributions" items={engagement.contributions} />
        </div>
      </Disclosure>
    </article>
  )
}

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Professional experience"
      description="Four enterprise client engagements delivered through Publicis Sapient, most recent first."
    >
      <div className="mb-8 flex flex-col gap-1 border-b border-line pb-6 md:flex-row md:items-baseline md:justify-between">
        <div>
          <p className="text-xl font-semibold text-ink">{employer.name}</p>
          <p className="text-sm text-muted">{employer.role}</p>
        </div>
        <p className="text-sm font-medium text-muted md:text-right">{employer.dates}</p>
      </div>
      <p className="-mt-2 mb-8 max-w-2xl text-sm leading-relaxed text-muted">{employer.description}</p>

      <ol className="relative space-y-5 md:ml-3 md:space-y-6 md:border-l md:border-line-strong md:pl-8">
        {engagements.map((engagement, index) => (
          <li key={engagement.id} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[2.45rem] top-7 hidden size-2.5 rounded-full border-2 border-accent bg-canvas md:block"
            />
            <EngagementCard engagement={engagement} defaultOpen={index === 0} />
          </li>
        ))}
      </ol>
    </Section>
  )
}
