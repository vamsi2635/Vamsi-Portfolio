import { ArrowUpRight, Building2, CalendarDays, ChevronDown } from 'lucide-react'
import { engagements } from '../../data/experience'
import { Section } from '../ui/Section'
import { TagList } from '../ui/Tag'

const projectAccents = [
  'from-teal-500/15 to-cyan-500/5',
  'from-blue-500/15 to-indigo-500/5',
  'from-orange-500/15 to-amber-500/5',
  'from-violet-500/15 to-fuchsia-500/5',
]

function ClientProjectCard({ project, index }: { project: (typeof engagements)[number]; index: number }) {
  return (
    <details className="group overflow-hidden rounded-2xl border border-line bg-surface shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-raised">
      <summary className="list-none cursor-pointer [&::-webkit-details-marker]:hidden">
        <div className={`relative min-h-36 overflow-hidden bg-gradient-to-br ${projectAccents[index % projectAccents.length]} p-5 sm:p-6`}>
          <div className="absolute right-5 top-5 flex size-11 items-center justify-center rounded-xl border border-white/70 bg-white/70 text-ink shadow-sm">
            <Building2 size={20} strokeWidth={1.7} />
          </div>
          <p className="font-mono text-[11px] font-semibold tracking-[0.18em] text-muted/80">CLIENT ENGAGEMENT / 0{index + 1}</p>
          <p className="mt-5 text-2xl font-semibold tracking-tight text-ink">{project.client}</p>
          <p className="mt-1 text-sm font-medium text-muted">{project.domain}</p>
        </div>
        <div className="p-5 sm:p-6">
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-muted">
            <span className="rounded-full bg-accent-soft px-2.5 py-1 text-accent-strong">{project.role}</span>
            <span className="inline-flex items-center gap-1"><CalendarDays size={13} />{project.dates}</span>
          </div>
          <h3 className="mt-4 text-xl font-semibold tracking-tight text-ink">{project.platform}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>
          <div className="mt-4"><TagList items={project.stack} /></div>
          <div className="mt-5 flex items-center justify-between border-t border-line pt-4 text-sm font-semibold text-accent">
            <span>View engagement details</span>
            <ChevronDown size={18} className="transition-transform group-open:rotate-180" />
          </div>
        </div>
      </summary>
      <div className="grid gap-6 border-t border-line bg-canvas/70 p-5 sm:grid-cols-2 sm:p-6">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-subtle">Responsibilities</p>
          <ul className="mt-3 space-y-2.5">
            {project.responsibilities.map((item) => <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />{item}</li>)}
          </ul>
        </div>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-subtle">Engineering contributions</p>
          <ul className="mt-3 space-y-2.5">
            {project.contributions.map((item) => <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />{item}</li>)}
          </ul>
        </div>
      </div>
    </details>
  )
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected enterprise work"
      title="Real products. Real engineering."
      description="A selection of client engagements from my professional experience. These are confidential enterprise programs, so I describe the work and my contributions without publishing client source code or internal screenshots."
    >
      <div className="grid items-start gap-5 md:grid-cols-2">
        {engagements.map((project, index) => <ClientProjectCard key={project.id} project={project} index={index} />)}
      </div>
      <div className="mt-6 flex items-start gap-3 rounded-xl border border-dashed border-line-strong bg-white/60 p-4 text-sm text-muted">
        <span className="mt-0.5 shrink-0 text-accent"><ArrowUpRight size={17} /></span>
        <p>Project details are based on my resume and professional responsibilities. Client-owned code, credentials, production data and restricted artifacts are intentionally not shared.</p>
      </div>
    </Section>
  )
}