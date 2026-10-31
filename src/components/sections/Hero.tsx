import { Download, Mail } from 'lucide-react'
import { profile } from '../../data/profile'
import { asset } from '../../lib/assets'
import { GitHubIcon, LinkedInIcon } from '../ui/BrandIcons'
import { LinkButton } from '../ui/LinkButton'
import { ProfilePhoto } from '../ui/ProfilePhoto'
import { TagList } from '../ui/Tag'

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="home-title"
      className="scroll-mt-20 pb-14 pt-8 md:scroll-mt-32 md:pb-18 md:pt-14 lg:scroll-mt-0 lg:pb-24 lg:pt-24"
    >
      <div className="grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-7 md:grid-cols-[minmax(0,1fr)_14rem] md:gap-x-10 lg:grid-cols-[minmax(0,1fr)_21rem] lg:gap-x-16">
        <div className="col-start-1 row-start-1 md:col-start-2 md:row-span-3 md:self-center">
          <ProfilePhoto
            variant="portrait"
            priority
            sizes="(min-width: 1024px) 336px, (min-width: 768px) 224px, 96px"
            className="size-24 rounded-2xl border border-line md:aspect-[4/5] md:h-auto md:w-full md:shadow-raised lg:rounded-2xl"
          />
        </div>

        <div className="col-start-2 row-start-1 min-w-0 md:col-start-1 md:self-end">
          <p className="text-lg font-semibold leading-tight text-ink md:text-xl">{profile.name}</p>
          <p className="mt-1 text-balance text-sm leading-snug text-muted md:text-base">{profile.tagline}</p>
          <p className="mt-2 text-xs text-subtle md:text-sm">
            {profile.employer} · {profile.experienceLabel}
            {profile.locationVerified && ` · ${profile.location}`}
          </p>
          {profile.availability && (
            <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-ink">
              <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
              {profile.availability}
            </p>
          )}
        </div>

        <div className="col-span-2 md:col-span-1 md:col-start-1">
          <h1
            id="home-title"
            className="font-display text-[2.6rem] leading-[1.04] tracking-tight text-ink xs:text-5xl md:text-[3.4rem] lg:text-[4rem]"
          >
            Engineering Quality.
            <br />
            <span className="text-accent">Automating Confidence.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">{profile.summary}</p>
        </div>

        <div className="col-span-2 md:col-span-1 md:col-start-1">
          <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
            <LinkButton
              href={asset(profile.resumePath)}
              download
              variant="primary"
              icon={<Download size={16} aria-hidden="true" />}
              className="max-[359px]:col-span-2"
            >
              Download Resume
            </LinkButton>
            <LinkButton href="#contact" icon={<Mail size={16} aria-hidden="true" />}>
              Contact Me
            </LinkButton>
            <LinkButton href={profile.linkedin} external icon={<LinkedInIcon size={16} />}>
              LinkedIn
            </LinkButton>
            <LinkButton href={profile.github} external icon={<GitHubIcon size={16} />}>
              GitHub
            </LinkButton>
          </div>
          <TagList items={profile.heroTags} className="mt-6" />
        </div>
      </div>
    </section>
  )
}
