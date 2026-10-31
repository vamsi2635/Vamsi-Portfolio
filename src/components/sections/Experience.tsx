import { ArrowUpRight, BriefcaseBusiness, CalendarDays } from 'lucide-react'
import { employer, engagements } from '../../data/experience'
import { Section } from '../ui/Section'

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Career"
      title="Experience built in enterprise teams."
      description="Professional experience at Publicis Sapient, contributing to enterprise products across four business domains."
    >
      <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-card">
        <div className="flex flex-col gap-4 bg-night p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex items-start gap-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.08] text-teal-200">
              <BriefcaseBusiness size={22} />
            </span>
            <div>
              <p className="text-xl font-semibold tracking-tight">{employer.name}</p>
              <p className="mt-1 text-sm text-slate-300">{employer.role}</p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400">{employer.description}</p>
            </div>
          </div>
          <span className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-white/15 bg-white/[0.07] px-3 py-2 text-xs font-medium text-slate-200 sm:self-center">
            <CalendarDays size={14} />{employer.dates}
          </span>
        </div>
        <div className="p-5 sm:p-7">
          <div className="mb-5 flex items-center justify-between gap-3">
            <h3 className="text-sm font-semibold text-ink">Client engagement timeline</h3>
            <span className="text-xs text-muted">Most recent first</span>
          </div>
          <ol className="relative space-y-0 border-l border-line-strong pl-6">
            {engagements.map((engagement, index) => (
              <li key={engagement.id} className="relative pb-6 last:pb-0">
                <span className={`absolute -left-[1.72rem] top-1 flex size-3 items-center justify-center rounded-full border-2 ${index === 0 ? 'border-accent bg-accent' : 'border-line-strong bg-surface'}`} />
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="font-semibold text-ink">{engagement.client}</p>
                    <p className="mt-0.5 text-sm text-muted">{engagement.role} · {engagement.platform}</p>
                    <span className="mt-2 inline-flex rounded-full bg-accent-soft px-2.5 py-1 text-[11px] font-semibold text-accent-strong">{engagement.domain}</span>
                  </div>
                  <span className="shrink-0 text-xs font-medium text-muted">{engagement.dates}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className="mt-5 flex items-center gap-2 text-sm text-muted">
        <ArrowUpRight size={16} className="shrink-0 text-accent" />
        <span>Detailed responsibilities and technical contributions are documented in the selected enterprise work section.</span>
      </div>
    </Section>
  )
}