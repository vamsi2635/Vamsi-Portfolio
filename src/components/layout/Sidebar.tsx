import { Download, Mail } from 'lucide-react'
import { navItems } from '../../data/navigation'
import { profile } from '../../data/profile'
import { asset } from '../../lib/assets'
import { cn } from '../../lib/cn'
import type { SectionId } from '../../types'
import { GitHubIcon, LinkedInIcon } from '../ui/BrandIcons'
import { LinkButton } from '../ui/LinkButton'
import { ProfilePhoto } from '../ui/ProfilePhoto'
import { navIcons } from './navIcons'

/** Desktop navigation (lg and up): a fixed left sidebar. */
export function Sidebar({ active }: { active: SectionId }) {
  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 flex-col border-r border-line bg-surface lg:flex">
      <div className="flex items-center gap-3 px-6 pb-6 pt-8">
        <ProfilePhoto
          variant="avatar"
          sizes="48px"
          alt=""
          className="size-12 rounded-full border border-line"
        />
        <div className="min-w-0">
          <p className="truncate text-[15px] font-semibold leading-tight text-ink">{profile.name}</p>
          <p className="mt-0.5 text-xs leading-snug text-muted">Senior QA Automation Engineer</p>
        </div>
      </div>

      <nav aria-label="Primary" className="flex-1 overflow-y-auto px-3">
        <ul className="space-y-0.5">
          {navItems.map((item) => {
            const Icon = navIcons[item.id]
            const isActive = active === item.id
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? 'location' : undefined}
                  className={cn(
                    'flex min-h-10 items-center gap-3 rounded-lg px-3 text-sm transition-colors',
                    isActive
                      ? 'bg-accent-soft font-medium text-accent-strong'
                      : 'text-muted hover:bg-sunken hover:text-ink',
                  )}
                >
                  <Icon size={17} aria-hidden="true" strokeWidth={isActive ? 2.1 : 1.8} />
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="space-y-3 border-t border-line p-4">
        <LinkButton
          href={asset(profile.resumePath)}
          download
          variant="primary"
          icon={<Download size={16} aria-hidden="true" />}
          className="w-full"
        >
          Download Resume
        </LinkButton>
        <div className="grid grid-cols-3 gap-2">
          <LinkButton
            href={`mailto:${profile.email}`}
            aria-label="Email Vamsi"
            icon={<Mail size={17} aria-hidden="true" />}
            className="px-0"
          >
            <span className="sr-only">Email</span>
          </LinkButton>
          <LinkButton
            href={profile.linkedin}
            external
            aria-label="LinkedIn profile"
            icon={<LinkedInIcon size={17} />}
            className="px-0"
          >
            <span className="sr-only">LinkedIn</span>
          </LinkButton>
          <LinkButton
            href={profile.github}
            external
            aria-label="GitHub profile"
            icon={<GitHubIcon size={17} />}
            className="px-0"
          >
            <span className="sr-only">GitHub</span>
          </LinkButton>
        </div>
      </div>
    </aside>
  )
}
