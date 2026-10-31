import { Download, Mail } from 'lucide-react'
import { profile } from '../../data/profile'
import { asset } from '../../lib/assets'
import { ProfilePhoto } from '../ui/ProfilePhoto'

/** Mobile app-style compact header (below md). */
export function MobileHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas pt-[env(safe-area-inset-top)] md:hidden">
      <div className="flex h-14 items-center justify-between gap-2 px-4">
        <a href="#home" className="flex min-h-11 min-w-0 items-center gap-3" aria-label={`${profile.name}, back to top`}>
          <ProfilePhoto variant="avatar" sizes="32px" alt="" className="size-8 rounded-full border border-line" />
          <span className="min-w-0">
            <span className="block truncate text-[15px] font-semibold leading-tight text-ink">
              {profile.shortName}
            </span>
            <span className="block truncate text-[11px] leading-tight text-muted">{profile.roleLine}</span>
          </span>
        </a>
        <div className="flex shrink-0 items-center">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email Vamsi"
            className="flex size-11 items-center justify-center rounded-full text-muted transition-colors hover:bg-sunken hover:text-ink"
          >
            <Mail size={20} aria-hidden="true" />
          </a>
          <a
            href={asset(profile.resumePath)}
            download
            aria-label="Download resume (PDF)"
            className="flex size-11 items-center justify-center rounded-full text-accent transition-colors hover:bg-accent-soft"
          >
            <Download size={20} aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  )
}
