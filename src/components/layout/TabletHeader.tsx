import { Download } from 'lucide-react'
import { navItems } from '../../data/navigation'
import { profile } from '../../data/profile'
import { asset } from '../../lib/assets'
import { cn } from '../../lib/cn'
import type { SectionId } from '../../types'
import { LinkButton } from '../ui/LinkButton'
import { ProfilePhoto } from '../ui/ProfilePhoto'

/** Tablet navigation (md to lg): a sticky two-row top bar. */
export function TabletHeader({ active }: { active: SectionId }) {
  return (
    <header className="sticky top-0 z-40 hidden border-b border-line bg-canvas md:block lg:hidden">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-8 pb-2 pt-3">
        <a href="#home" className="flex min-h-11 min-w-0 items-center gap-3" aria-label={`${profile.name}, back to top`}>
          <ProfilePhoto variant="avatar" sizes="36px" alt="" className="size-9 rounded-full border border-line" />
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold leading-tight text-ink">{profile.name}</span>
            <span className="block truncate text-xs text-muted">{profile.title}</span>
          </span>
        </a>
        <div className="flex shrink-0 items-center gap-2">
          <LinkButton href="#contact" variant="secondary" className="min-h-10">
            Contact
          </LinkButton>
          <LinkButton
            href={asset(profile.resumePath)}
            download
            variant="primary"
            icon={<Download size={16} aria-hidden="true" />}
            className="min-h-10"
          >
            Resume
          </LinkButton>
        </div>
      </div>
      <nav aria-label="Primary" className="mx-auto max-w-5xl px-8">
        <ul className="no-scrollbar -mb-px flex gap-1 overflow-x-auto">
          {navItems.map((item) => {
            const isActive = active === item.id
            return (
              <li key={item.id} className="shrink-0">
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? 'location' : undefined}
                  className={cn(
                    'flex min-h-11 items-center border-b-2 px-3 text-sm transition-colors',
                    isActive
                      ? 'border-accent font-medium text-accent-strong'
                      : 'border-transparent text-muted hover:text-ink',
                  )}
                >
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
