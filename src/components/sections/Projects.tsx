import { ArrowDownRight, ArrowUpRight, CalendarDays } from 'lucide-react'
import { engagements } from '../../data/experience'
import { Section } from '../ui/Section'
import { TagList } from '../ui/Tag'

function ClientProjectRow({ project, index }: { project: (typeof engagements)[number]; index: number }) {
  return (
    <details className="group border-t border-line py-6 first:border-t-0 first:pt-0">
      <summary className="grid cursor-pointer list-none gap-5 [&::-webkit-details-marker]:hidden md:grid-cols-[4rem_minmax(0,1fr)_minmax(10rem,.38fr)_2rem] md:items-start">
        <span className="font-display text-4xl leading-none text-[#aab3c3]">0{index + 1}</span>
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">{project.client}</h3>
            <span className="bg-accent-soft px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-accent-strong">{project.domain}</span>
          </div>
          <p className="mt-2 text-sm font-medium text-ink/80">{project.platform}</p>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{project.summary}</p>
          <div className="mt-4"><TagList items={project.stack} /></div>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted md:flex-col md:gap-2 md:pt-1">
          <span className="font-semibold text-ink">{project.role}</span>
          <span className="inline-flex items-center gap-1"><CalendarDays size={13} />{project.dates}</span>
        </div>
        <span className="flex size-9 items-center justify-center border border-line bg-white text-accent transition group-open:rotate-45"><ArrowDownRight size={17} /></span>
      </summary>
      <div className="mt-6 grid gap-7 border-l-2 border-accent/25 bg-white/70 py-5 pl-5 pr-4 md:ml-16 md:grid-cols-2 md:pl-7">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent">Responsibilities</p>
          <ul className="mt-3 space-y-2.5">{project.responsibilities.map((item) => <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />{item}</li>)}</ul>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent">Engineering contributions</p>
          <ul className="mt-3 space-y-2.5">{project.contributions.map((item) => <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />{item}</li>)}</ul>
        </div>
      </div>
    </details>
  )
}

export function Projects() {
  return (
    <Section id="projects" eyebrow="Selected enterprise work" title="Enterprise work, beyond test scripts." description="A selection of client engagements across banking, hospitality, retail and insurance. Details are written to show engineering scope while respecting client confidentiality.">
      <div className="border-y border-line">
        {engagements.map((project, index) => <ClientProjectRow key={project.id} project={project} index={index} />)}
      </div>
      <div className="mt-7 flex items-start gap-3 border border-line bg-white/70 p-4 text-sm leading-relaxed text-muted">
        <ArrowUpRight size={17} className="mt-0.5 shrink-0 text-accent" />
        <p>Client-owned source code, credentials, production data and restricted artifacts are intentionally not published. Project descriptions reflect professional responsibilities and contributions.</p>
      </div>
    </Section>
  )
}