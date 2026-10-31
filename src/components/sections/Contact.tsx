import { ArrowUpRight, Download, Mail, MapPin, Phone } from 'lucide-react'
import type { ReactNode } from 'react'
import { profile } from '../../data/profile'
import { asset } from '../../lib/assets'
import { GitHubIcon, LinkedInIcon } from '../ui/BrandIcons'
import { LinkButton } from '../ui/LinkButton'
import { ProfilePhoto } from '../ui/ProfilePhoto'
import { Section } from '../ui/Section'

interface ContactRowProps {
  href: string
  icon: ReactNode
  label: string
  value: string
  external?: boolean
  download?: boolean
}

function ContactRow({ href, icon, label, value, external, download }: ContactRowProps) {
  return (
    <a
      href={href}
      download={download}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="group flex min-h-16 items-center gap-4 px-5 py-3.5 transition-colors hover:bg-canvas md:px-6"
    >
      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-sunken text-ink">{icon}</span>
      <span className="min-w-0 flex-1">
        <span className="block text-xs text-muted">{label}</span>
        <span className="block text-[15px] font-medium leading-snug text-ink [overflow-wrap:anywhere]">{value}</span>
      </span>
      <ArrowUpRight
        size={18}
        aria-hidden="true"
        className="shrink-0 text-subtle transition-colors group-hover:text-accent"
      />
      {external && <span className="sr-only">(opens in a new tab)</span>}
    </a>
  )
}

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Get in touch"
      description="For roles, collaborations or questions about my work, reach out through any channel below."
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:gap-12">
        <div>
          <div className="flex items-center gap-4">
            <ProfilePhoto
              variant="avatar"
              sizes="80px"
              alt="Vamsi Krishna Padarthi"
              className="size-20 rounded-2xl border border-line"
            />
            <div>
              <p className="text-lg font-semibold leading-tight text-ink">{profile.name}</p>
              <p className="mt-1 text-balance text-sm text-muted">{profile.title}</p>
              {profile.locationVerified && (
                <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
                  <MapPin size={14} aria-hidden="true" />
                  {profile.location}
                </p>
              )}
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <LinkButton
              href={`mailto:${profile.email}?subject=${encodeURIComponent('Opportunity discussion')}`}
              variant="primary"
              icon={<Mail size={16} aria-hidden="true" />}
            >
              Email Me
            </LinkButton>
            <LinkButton
              href={asset(profile.resumePath)}
              download
              icon={<Download size={16} aria-hidden="true" />}
            >
              Download Resume
            </LinkButton>
          </div>
        </div>

        <div className="divide-y divide-line overflow-hidden rounded-xl border border-line bg-surface shadow-card">
          <ContactRow
            href={`mailto:${profile.email}`}
            icon={<Mail size={18} aria-hidden="true" />}
            label="Email"
            value={profile.email}
          />
          <ContactRow
            href={profile.linkedin}
            external
            icon={<LinkedInIcon size={18} />}
            label="LinkedIn"
            value="linkedin.com/in/vamsikrishna-padarthi-418699425"
          />
          <ContactRow
            href={profile.github}
            external
            icon={<GitHubIcon size={18} />}
            label="GitHub"
            value="github.com/vamsikrishna-qa"
          />
          <ContactRow
            href={profile.phoneHref}
            icon={<Phone size={18} aria-hidden="true" />}
            label="Phone"
            value={profile.phone}
          />
        </div>
      </div>
    </Section>
  )
}
