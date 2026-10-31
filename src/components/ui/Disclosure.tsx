import { ChevronDown } from 'lucide-react'
import { useId, useState, type ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface DisclosureProps {
  /** Content of the always-visible, clickable header. Use inline/span elements only. */
  header: ReactNode
  children: ReactNode
  defaultOpen?: boolean
  /** Accessible name for the expandable region. */
  label: string
  headingLevel?: 'h3' | 'h4'
  className?: string
}

export function Disclosure({
  header,
  children,
  defaultOpen = false,
  label,
  headingLevel: Heading = 'h3',
  className,
}: DisclosureProps) {
  const [open, setOpen] = useState(defaultOpen)
  const panelId = useId()

  return (
    <div className={className}>
      <Heading className="m-0">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
          className="flex w-full items-start gap-4 rounded-xl p-5 text-left transition-colors hover:bg-canvas/70 md:p-6"
        >
          <span className="block min-w-0 flex-1">{header}</span>
          <span
            aria-hidden="true"
            className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full border border-line text-muted"
          >
            <ChevronDown
              size={16}
              className={cn('transition-transform duration-300 motion-reduce:transition-none', open && 'rotate-180')}
            />
          </span>
          <span className="sr-only">{open ? 'Hide' : 'Show'} details</span>
        </button>
      </Heading>
      <div
        id={panelId}
        role="region"
        aria-label={label}
        inert={!open}
        className={cn(
          'grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none',
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        )}
      >
        <div className="overflow-hidden">
          <div className="border-t border-line px-5 pb-5 pt-5 md:px-6 md:pb-6">{children}</div>
        </div>
      </div>
    </div>
  )
}
