import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

type Variant = 'primary' | 'secondary' | 'quiet'

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant
  icon?: ReactNode
  /** Opens in a new tab with safe rel attributes. */
  external?: boolean
}

const variants: Record<Variant, string> = {
  primary: 'bg-accent text-white hover:bg-accent-strong border border-transparent',
  secondary:
    'bg-surface text-ink border border-line-strong hover:bg-sunken hover:border-ink/25',
  quiet: 'text-accent hover:text-accent-strong hover:bg-accent-soft border border-transparent',
}

export function LinkButton({
  variant = 'secondary',
  icon,
  external = false,
  className,
  children,
  ...rest
}: LinkButtonProps) {
  return (
    <a
      {...rest}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={cn(
        'inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-lg px-3 text-sm font-medium transition-colors sm:px-4',
        variants[variant],
        className,
      )}
    >
      {icon}
      <span>{children}</span>
      {external && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  )
}
