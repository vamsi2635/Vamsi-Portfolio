import type { ReactNode } from 'react'
import type { SectionId } from '../../types'
import { cn } from '../../lib/cn'

interface SectionProps { id: SectionId; eyebrow: string; title: string; description?: ReactNode; children: ReactNode; className?: string }

export function Section({ id, eyebrow, title, description, children, className }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn('scroll-mt-20 border-t border-line py-16 md:scroll-mt-32 md:py-20 lg:scroll-mt-0 lg:py-24', className)}>
      <header className="mb-9 grid gap-4 md:mb-12 md:grid-cols-[minmax(0,1fr)_minmax(16rem,.72fr)] md:items-end md:gap-10">
        <div>
          <p className="eyebrow-line mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
          <h2 id={`${id}-title`} className="max-w-3xl font-display text-[2.8rem] leading-[.98] tracking-[-0.025em] text-ink sm:text-5xl lg:text-[3.6rem]">{title}</h2>
        </div>
        {description && <div className="max-w-xl text-sm leading-[1.85] text-muted md:justify-self-end md:text-[15px]">{description}</div>}
      </header>
      {children}
    </section>
  )
}