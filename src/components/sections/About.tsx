import { aboutFacts, aboutHighlights, aboutParagraphs, profile } from '../../data/profile'
import { ProfilePhoto } from '../ui/ProfilePhoto'
import { Section } from '../ui/Section'

export function About() {
  return (
    <Section id="about" eyebrow="Profile" title="Quality is an engineering discipline." description="I work at the intersection of product behaviour, automation architecture and release confidence.">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(18rem,.75fr)] lg:gap-16">
        <div className="space-y-5 text-[15px] leading-[1.9] text-muted md:text-base">
          {aboutParagraphs.map((paragraph, index) => <p key={paragraph} className={index === 0 ? 'text-lg leading-[1.8] text-ink md:text-xl' : ''}>{paragraph}</p>)}
        </div>
        <aside aria-label="Professional snapshot" className="h-fit border border-line bg-white p-5 shadow-card md:p-7">
          <div className="flex items-center gap-4">
            <ProfilePhoto variant="avatar" sizes="64px" alt="Vamsi Krishna Padarthi" className="size-16 rounded-full border border-line" />
            <div className="min-w-0"><p className="font-semibold leading-tight text-ink">{profile.name}</p><p className="mt-1 text-sm text-muted">{profile.title}</p></div>
          </div>
          <dl className="mt-7 grid grid-cols-2 gap-x-5 gap-y-6 border-y border-line py-6">
            {aboutFacts.map((fact) => <div key={fact.label}><dd className="font-display text-4xl leading-none text-ink">{fact.value}</dd><dt className="mt-2 text-[10px] font-bold uppercase tracking-[0.12em] text-muted">{fact.label}</dt></div>)}
          </dl>
          <div className="pt-5"><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-accent">Education</p><p className="mt-2 text-sm font-semibold text-ink">{profile.education.degree}</p><p className="mt-1 text-xs leading-relaxed text-muted">{profile.education.institution}</p></div>
        </aside>
      </div>
      <div className="mt-14 grid gap-x-8 gap-y-0 border-y border-line sm:grid-cols-2 lg:grid-cols-3">
        {aboutHighlights.map((item, index) => <article key={item.title} className="border-b border-line py-5 last:border-b-0 sm:nth-[2n]:border-b-0 lg:nth-[2n]:border-b lg:nth-[3n]:border-b-0">
          <p className="font-mono text-[10px] text-accent">CAPABILITY / 0{index + 1}</p><h3 className="mt-2 text-sm font-semibold text-ink">{item.title}</h3><p className="mt-1.5 text-sm leading-relaxed text-muted">{item.detail}</p>
        </article>)}
      </div>
    </Section>
  )
}