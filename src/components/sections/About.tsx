import { aboutFacts, aboutHighlights, aboutParagraphs, profile } from '../../data/profile'
import { ProfilePhoto } from '../ui/ProfilePhoto'
import { Section } from '../ui/Section'

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Professional overview">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-14">
        <div className="space-y-5 text-base leading-relaxed text-muted md:text-[17px]">
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <aside
          aria-label="At a glance"
          className="rounded-xl border border-line bg-surface p-5 shadow-card md:p-6"
        >
          <div className="flex items-center gap-4">
            <ProfilePhoto
              variant="avatar"
              sizes="64px"
              alt="Vamsi Krishna Padarthi"
              className="size-16 rounded-xl border border-line"
            />
            <div className="min-w-0">
              <p className="font-semibold leading-tight text-ink">{profile.name}</p>
              <p className="mt-0.5 text-sm text-muted">{profile.employer}</p>
            </div>
          </div>
          <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-5 border-t border-line pt-5">
            {aboutFacts.map((fact) => (
              <div key={fact.label}>
                <dt className="order-2 text-xs leading-snug text-muted">{fact.label}</dt>
                <dd className="font-display text-4xl leading-none text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-5 border-t border-line pt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-subtle">Education</p>
            <p className="mt-1.5 text-sm font-medium text-ink">{profile.education.degree}</p>
            <p className="text-sm text-muted">{profile.education.institution}</p>
          </div>
        </aside>
      </div>

      <ul className="mt-12 grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3" role="list">
        {aboutHighlights.map((item) => (
          <li key={item.title} className="border-t border-line-strong pt-4">
            <h3 className="text-[15px] font-semibold text-ink">{item.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.detail}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
