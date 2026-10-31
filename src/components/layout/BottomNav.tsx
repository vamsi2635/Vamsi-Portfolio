import { AnimatePresence, m } from 'framer-motion'
import { Download, Ellipsis, X } from 'lucide-react'
import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from 'react'
import { navItems } from '../../data/navigation'
import { profile } from '../../data/profile'
import { asset } from '../../lib/assets'
import { cn } from '../../lib/cn'
import type { SectionId } from '../../types'
import { GitHubIcon, LinkedInIcon } from '../ui/BrandIcons'
import { navIcons } from './navIcons'

const primary = navItems.filter((item) => item.primaryOnMobile)
const secondary = navItems.filter((item) => !item.primaryOnMobile)

/** Mobile bottom tab bar (below md) with a "More" sheet for the remaining sections. */
export function BottomNav({ active }: { active: SectionId }) {
  const [sheetOpen, setSheetOpen] = useState(false)
  const moreButton = useRef<HTMLButtonElement>(null)
  const sheetRef = useRef<HTMLDivElement>(null)

  const close = useCallback(() => {
    setSheetOpen(false)
    moreButton.current?.focus()
  }, [])

  // Lock page scroll while the sheet is open and move focus into it.
  useEffect(() => {
    if (!sheetOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    sheetRef.current?.querySelector<HTMLElement>('a, button')?.focus()
    return () => {
      document.body.style.overflow = previous
    }
  }, [sheetOpen])

  const onSheetKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      event.stopPropagation()
      close()
      return
    }
    if (event.key !== 'Tab' || !sheetRef.current) return
    const focusable = sheetRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')
    if (focusable.length === 0) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }

  const moreActive = secondary.some((item) => item.id === active)

  return (
    <>
      <nav
        aria-label="Primary"
        className="pb-safe fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface md:hidden"
      >
        <ul className="grid grid-cols-5">
          {primary.map((item) => {
            const Icon = navIcons[item.id]
            const isActive = active === item.id
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? 'location' : undefined}
                  className={cn(
                    'flex h-16 flex-col items-center justify-center gap-1 text-[11px] transition-colors',
                    isActive ? 'font-semibold text-accent' : 'text-muted',
                  )}
                >
                  <Icon size={21} aria-hidden="true" strokeWidth={isActive ? 2.2 : 1.8} />
                  {item.mobileLabel}
                </a>
              </li>
            )
          })}
          <li>
            <button
              ref={moreButton}
              type="button"
              aria-haspopup="dialog"
              aria-expanded={sheetOpen}
              onClick={() => setSheetOpen(true)}
              className={cn(
                'flex h-16 w-full flex-col items-center justify-center gap-1 text-[11px] transition-colors',
                moreActive ? 'font-semibold text-accent' : 'text-muted',
              )}
            >
              <Ellipsis size={21} aria-hidden="true" />
              More
            </button>
          </li>
        </ul>
      </nav>

      <AnimatePresence>
        {sheetOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <m.div
              className="absolute inset-0 bg-ink/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={close}
              aria-hidden="true"
            />
            <m.div
              ref={sheetRef}
              role="dialog"
              aria-modal="true"
              aria-label="More sections"
              onKeyDown={onSheetKeyDown}
              className="pb-safe absolute inset-x-0 bottom-0 rounded-t-2xl bg-surface shadow-raised"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'tween', duration: 0.24, ease: 'easeOut' }}
            >
              <div className="flex items-center justify-between px-5 pb-2 pt-4">
                <p className="text-sm font-semibold text-ink">More</p>
                <button
                  type="button"
                  onClick={close}
                  aria-label="Close menu"
                  className="-mr-2 flex size-11 items-center justify-center rounded-full text-muted hover:bg-sunken"
                >
                  <X size={20} aria-hidden="true" />
                </button>
              </div>
              <ul className="px-3 pb-2">
                {secondary.map((item) => {
                  const Icon = navIcons[item.id]
                  const isActive = active === item.id
                  return (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        onClick={() => setSheetOpen(false)}
                        aria-current={isActive ? 'location' : undefined}
                        className={cn(
                          'flex min-h-12 items-center gap-3 rounded-lg px-3 text-[15px]',
                          isActive ? 'bg-accent-soft font-medium text-accent-strong' : 'text-ink',
                        )}
                      >
                        <Icon size={19} aria-hidden="true" className="text-muted" />
                        {item.label}
                      </a>
                    </li>
                  )
                })}
              </ul>
              <div className="grid grid-cols-[1fr_auto_auto] gap-2 border-t border-line p-4">
                <a
                  href={asset(profile.resumePath)}
                  download
                  className="flex min-h-11 items-center justify-center gap-2 rounded-lg bg-accent text-sm font-medium text-white"
                >
                  <Download size={16} aria-hidden="true" />
                  Download Resume
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile (opens in a new tab)"
                  className="flex size-11 items-center justify-center rounded-lg border border-line-strong text-ink"
                >
                  <LinkedInIcon size={18} />
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile (opens in a new tab)"
                  className="flex size-11 items-center justify-center rounded-lg border border-line-strong text-ink"
                >
                  <GitHubIcon size={18} />
                </a>
              </div>
            </m.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
