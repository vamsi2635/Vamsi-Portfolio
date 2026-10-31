import { ArrowDownRight, Download, Mail, MapPin, Sparkles } from 'lucide-react'
import { profile } from '../../data/profile'
import { asset } from '../../lib/assets'
import { GitHubIcon, LinkedInIcon } from '../ui/BrandIcons'
import { LinkButton } from '../ui/LinkButton'
import { ProfilePhoto } from '../ui/ProfilePhoto'

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="home-title"
      className="scroll-mt-20 pb-12 pt-5 md:scroll-mt-32 md:pb-16 md:pt-8 lg:scroll-mt-0 lg:pb-20 lg:pt-10"
    >
      <div className="relative isolate overflow-hidden rounded-[1.6rem] bg-night text-white shadow-raised">
        <div aria-hidden="true" className="grid-glow absolute inset-0 opacity-70" />
        <div aria-hidden="true" className="absolute -right-24 -top-28 size-96 rounded-full bg-teal-500/15 blur-3xl" />
        <div className="relative grid gap-10 p-6 sm:p-9 md:grid-cols-[minmax(0,1fr)_13rem] md:items-center md:p-11 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-14 lg:p-14">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-3 py-1.5 text-xs font-medium text-teal-100">
              <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.8)]" />
              {profile.availability ?? 'Open to relevant opportunities'}
            </div>
            <p className="mt-7 text-sm font-semibold tracking-wide text-teal-200">{profile.name}</p>
            <h1 id="home-title" className="mt-3 max-w-3xl text-[2.65rem] font-semibold leading-[1.04] tracking-[-0.055em] text-white sm:text-5xl lg:text-[4.25rem]">
              I build automation that makes <span className="text-teal-300">quality scale.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
              {profile.summary}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {profile.heroTags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-slate-200">{tag}</span>
              ))}
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              <LinkButton href={asset(profile.resumePath)} download variant="primary" icon={<Download size={16} aria-hidden="true" />}>
                Download resume
              </LinkButton>
              <LinkButton href="#experience" variant="secondary" icon={<ArrowDownRight size={16} aria-hidden="true" />}>
                Explore my work
              </LinkButton>
              <LinkButton href={`mailto:${profile.email}`} icon={<Mail size={16} aria-hidden="true" />}>Contact</LinkButton>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5"><MapPin size={13} />{profile.location}</span>
              <span>{profile.experienceLabel} experience</span>
              <span>{profile.employer}</span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[13rem] md:max-w-none">
            <div className="absolute -inset-3 rounded-[1.5rem] border border-teal-300/25 rotate-3" />
            <div className="relative overflow-hidden rounded-[1.35rem] border border-white/15 bg-night-soft p-2 shadow-2xl">
              <ProfilePhoto
                variant="portrait"
                priority
                sizes="(min-width: 1024px) 256px, (min-width: 768px) 208px, 180px"
                className="aspect-[4/5] w-full rounded-[1rem] object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-8 flex items-center gap-2 rounded-xl border border-white/10 bg-[#172b40] px-3 py-2.5 shadow-xl">
              <span className="flex size-8 items-center justify-center rounded-lg bg-teal-400/15 text-teal-200"><Sparkles size={16} /></span>
              <span><span className="block text-xs font-semibold text-white">Automation-first</span><span className="block text-[10px] text-slate-400">Engineering mindset</span></span>
            </div>
            <div className="mt-10 flex justify-center gap-3 md:justify-end">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="rounded-full border border-white/15 p-2.5 text-slate-300 transition hover:border-teal-300 hover:text-teal-200"><LinkedInIcon size={17} /></a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="rounded-full border border-white/15 p-2.5 text-slate-300 transition hover:border-teal-300 hover:text-teal-200"><GitHubIcon size={17} /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { value: '5+', label: 'Years in QA' },
          { value: '4', label: 'Enterprise domains' },
          { value: '3', label: 'Browser engines' },
          { value: 'UI + API', label: 'Automation coverage' },
        ].map((item) => (
          <div key={item.label} className="rounded-xl border border-line bg-surface px-4 py-4 shadow-card">
            <p className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{item.value}</p>
            <p className="mt-1 text-xs font-medium text-muted">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}