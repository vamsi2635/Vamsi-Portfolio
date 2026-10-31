import { ArrowDownRight, ArrowUpRight, Download, Mail, MapPin } from 'lucide-react'
import { profile } from '../../data/profile'
import { asset } from '../../lib/assets'
import { GitHubIcon, LinkedInIcon } from '../ui/BrandIcons'
import { LinkButton } from '../ui/LinkButton'
import { ProfilePhoto } from '../ui/ProfilePhoto'

export function Hero() {
  return (
    <section id="home" aria-labelledby="home-title" className="scroll-mt-20 pb-16 pt-7 md:pb-20 md:pt-12 lg:scroll-mt-0 lg:pb-24 lg:pt-14">
      <div className="relative overflow-hidden border-y border-line py-8 md:py-12">
        <div aria-hidden="true" className="pointer-events-none absolute -right-28 top-0 size-[30rem] rounded-full bg-[#dce5fb]/65 blur-3xl" />
        <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-center lg:gap-16">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#cbd7f3] bg-white/80 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-accent"><span className="size-1.5 rounded-full bg-emerald-500" />{profile.availability ?? 'Open to opportunities'}</span>
              <span className="font-mono text-[11px] tracking-wide text-subtle">BASED IN {profile.location.toUpperCase()}</span>
            </div>
            <p className="mt-10 text-sm font-semibold tracking-wide text-muted">{profile.name}</p>
            <h1 id="home-title" className="mt-3 max-w-4xl text-[3.5rem] font-semibold leading-[.96] tracking-[-0.065em] text-ink sm:text-6xl lg:text-[5.6rem]">Engineering <span className="font-display font-normal italic tracking-[-0.035em] text-accent">confidence</span><span className="block">through automation.</span></h1>
            <p className="mt-7 max-w-2xl text-base leading-[1.85] text-muted md:text-lg">Senior QA Automation Engineer / SDET focused on building reliable UI and API automation, scalable test frameworks and quality engineering practices for enterprise products.</p>
            <div className="mt-7 flex flex-wrap gap-2">{profile.heroTags.map((tag) => <span key={tag} className="border border-line-strong bg-white/75 px-3 py-1.5 font-mono text-[11px] font-medium text-[#46536a]">{tag}</span>)}</div>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <LinkButton href={asset(profile.resumePath)} download variant="primary" icon={<Download size={16} aria-hidden="true" />}>Download resume</LinkButton>
              <LinkButton href="#projects" variant="secondary" icon={<ArrowDownRight size={16} aria-hidden="true" />}>View selected work</LinkButton>
              <a href={`mailto:${profile.email}`} className="inline-flex min-h-11 items-center gap-2 px-2 text-sm font-semibold text-ink transition hover:text-accent"><Mail size={16} /> Get in touch <ArrowUpRight size={14} /></a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line pt-5 text-xs font-medium text-muted">
              <span className="inline-flex items-center gap-1.5"><MapPin size={13} />{profile.location}</span><span>{profile.experienceLabel} experience</span><span>{profile.employer}</span>
              <span className="ml-auto flex items-center gap-3"><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="transition hover:text-accent"><LinkedInIcon size={17} /></a><a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="transition hover:text-accent"><GitHubIcon size={17} /></a></span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[19rem] lg:mx-0 lg:max-w-none">
            <div className="absolute -inset-4 translate-x-3 translate-y-3 border border-[#cbd7f3]" />
            <div className="relative overflow-hidden bg-[#e7eaf0] p-2">
              <ProfilePhoto variant="portrait" priority sizes="(min-width: 1024px) 304px, 280px" className="aspect-[4/5] w-full object-cover" />
              <div className="absolute inset-x-2 bottom-2 bg-[#172238]/90 px-4 py-3 text-white backdrop-blur-sm"><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/55">Core discipline</p><p className="mt-1 text-sm font-semibold">Quality Engineering · Test Architecture</p></div>
            </div>
            <div className="mt-7 grid grid-cols-2 gap-px border border-line bg-line">
              <div className="bg-white px-4 py-4"><p className="font-display text-4xl leading-none text-ink">05<span className="text-accent">+</span></p><p className="mt-2 text-[10px] font-bold uppercase tracking-[0.12em] text-muted">Years in QA</p></div>
              <div className="bg-white px-4 py-4"><p className="font-display text-4xl leading-none text-ink">04</p><p className="mt-2 text-[10px] font-bold uppercase tracking-[0.12em] text-muted">Industry domains</p></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-subtle"><span>Playwright / TypeScript / Selenium / API</span><span>Scroll to explore <ArrowDownRight className="ml-1 inline" size={13} /></span></div>
    </section>
  )
}