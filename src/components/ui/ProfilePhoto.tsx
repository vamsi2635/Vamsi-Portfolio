import { useState } from 'react'
import { asset } from '../../lib/assets'
import { cn } from '../../lib/cn'

interface ProfilePhotoProps {
  /** `portrait` uses the full photo (cropped via CSS); `avatar` uses a pre-cropped square. */
  variant: 'portrait' | 'avatar'
  className?: string
  sizes: string
  priority?: boolean
  alt?: string
}

const sources = {
  portrait: {
    webp: 'images/vamsi-480.webp 480w, images/vamsi-800.webp 800w, images/vamsi-1100.webp 1100w',
    jpg: 'images/vamsi-480.jpg 480w, images/vamsi-800.jpg 800w, images/vamsi-1100.jpg 1100w',
    fallback: 'images/vamsi-800.jpg',
    width: 1100,
    height: 1428,
  },
  avatar: {
    webp: 'images/avatar-96.webp 96w, images/avatar-192.webp 192w, images/avatar-384.webp 384w',
    jpg: 'images/avatar-96.jpg 96w, images/avatar-192.jpg 192w, images/avatar-384.jpg 384w',
    fallback: 'images/avatar-192.jpg',
    width: 384,
    height: 384,
  },
} as const

function resolveSrcSet(value: string): string {
  return value
    .split(',')
    .map((part) => {
      const [url, descriptor] = part.trim().split(' ')
      return `${asset(url)} ${descriptor}`
    })
    .join(', ')
}

export function ProfilePhoto({
  variant,
  className,
  sizes,
  priority = false,
  alt = 'Portrait of Vamsi Krishna Padarthi',
}: ProfilePhotoProps) {
  const [failed, setFailed] = useState(false)
  const source = sources[variant]

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          'flex items-center justify-center bg-accent-soft font-display text-3xl text-accent-strong',
          className,
        )}
      >
        VK
      </div>
    )
  }

  return (
    <picture>
      <source type="image/webp" srcSet={resolveSrcSet(source.webp)} sizes={sizes} />
      <source type="image/jpeg" srcSet={resolveSrcSet(source.jpg)} sizes={sizes} />
      <img
        src={asset(source.fallback)}
        alt={alt}
        width={source.width}
        height={source.height}
        sizes={sizes}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        {...(priority ? { fetchPriority: 'high' as const } : {})}
        onError={() => setFailed(true)}
        className={cn(
          'block bg-sunken object-cover',
          variant === 'portrait' ? 'object-[50%_18%]' : 'object-center',
          className,
        )}
      />
    </picture>
  )
}
