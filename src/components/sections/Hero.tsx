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
      <div className="relative isolate overflow-hidden rounded-[1.6rem] border border-[#dce7f3] bg-gradient-to-br from-[#f8fbff] via-[#eef5fc] to-[#e7f0fa] text-ink shadow-raised">
        <div aria-hidden="true" className="grid-glow absolute inset-0 opacity-80" />
        <div aria-hidden="true" className="absolute -right-24 -top-28 size-96 rounded-full bg-sky-300/25 blur-3xl" />
        <div aria-hidden="true" className="absolute -bottom-32 left-1/3 size-80 rounded-full bg-indigo-200/25 blur-3xl" />
        <div className="relative grid gap-10 p-6 sm:p-9 md:grid-cols-[minmax(0,1fr)_13rem] md:items-center md:p-11 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-14 lg:p-14">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#c9dced] bg-white/75 px-3 py-1.5 text-xs font-semibold text-[#315f91] shadow-sm">
              <span className="size-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,.35)]" />
              {profile.availability ?? 'Open to relevant opportunities'}
            </div>
            <p className="mt-7 text-sm font-semibold tracking-wide text-[#3d72b4]">{profile.name}</p>
            <h1 id="home-title" className="mt-3 max-w-3xl text-[2.65rem] font-semibold leading-[1.04] tracking-[-0.055em] text-[#17263b] sm:text-5xl lg:text-[4.25rem]">
              I build automation that makes <span className="text-[#3d72b4]">quality scale.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#52647a] md:text-lg">
              {profile.summary}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {profile.heroTags.map((tag) => (
                <span key={tag} className="rounded-full border border-[#d4e1ef] bg-white/70 px-3 py-1.5 text-xs font-medium text-[#405873] shadow-sm">{tag}</span>
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
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-[#71839a]">
              <span className="inline-flex items-center gap-1.5"><MapPin size={13} />{profile.location}</span>
              <span>{profile.experienceLabel} experience</span>
              <span>{profile.employer}</span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[13rem] md:max-w-none">
            <div className="absolute -inset-3 rounded-[1.5rem] border border-[#9dbbda] rotate-3" />
            <div className="relative overflow-hidden rounded-[1.35rem] border border-white bg-white/80 p-2 shadow-xl">
              <ProfilePhoto
                variant="portrait"
                priority
                sizes="(min-width: 1024px) 256px, (min-width: 768px) 208px, 180px"
                className="aspect-[4/5] w-full rounded-[1rem] object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-8 flex items-center gap-2 rounded-xl border border-[#d5e3f1] bg-white px-3 py-2.5 shadow-lg">
              <span className="flex size-8 items-center justify-center rounded-lg bg-[#e7f0fb] text-[#3d72b4]"><Sparkles size={16} /></span>
              <span><span className="block text-xs font-semibold text-ink">Automation-first</span><span className="block text-[10px] text-muted">Engineering mindset</span></span>
            </div>
            <div className="mt-10 flex justify-center gap-3 md:justify-end">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="rounded-full border border-[#d3e0ee] bg-white/75 p-2.5 text-[#52647a] transition hover:border-accent hover:text-accent"><LinkedInIcon size={17} /></a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="rounded-full border border-[#d3e0ee] bg-white/75 p-2.5 text-[#52647a] transition hover:border-accent hover:text-accent"><GitHubIcon size={17} /></a>
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