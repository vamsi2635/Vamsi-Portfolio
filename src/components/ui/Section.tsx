import type { ReactNode } from 'react'
import type { SectionId } from '../../types'
import { cn } from '../../lib/cn'

interface SectionProps {
  id: SectionId
  eyebrow: string
  title: string
  description?: ReactNode
  children: ReactNode
  className?: string
}

export function Section({ id, eyebrow, title, description, children, className }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn(
        'scroll-mt-20 border-t border-line py-14 md:scroll-mt-32 md:py-18 lg:scroll-mt-0 lg:py-24',
        className,
      )}
    >
      <header className="mb-8 max-w-2xl md:mb-12">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-accent">{eyebrow}</p>
        <h2
          id={`${id}-title`}
          className="font-display text-[2rem] leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]"
        >
          {title}
        </h2>
        {description && <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>}
      </header>
      {children}
    </section>
  )
}
