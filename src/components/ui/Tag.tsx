import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface TagProps {
  children: ReactNode
  tone?: 'neutral' | 'accent' | 'dashed'
  className?: string
}

const tones = {
  neutral: 'border-line bg-sunken text-muted',
  accent: 'border-transparent bg-accent-soft text-accent-strong',
  dashed: 'border-dashed border-line-strong bg-transparent text-muted',
}

export function Tag({ children, tone = 'neutral', className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium leading-5',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}

export function TagList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn('flex flex-wrap gap-1.5', className)} role="list">
      {items.map((item) => (
        <li key={item}>
          <Tag>{item}</Tag>
        </li>
      ))}
    </ul>
  )
}
