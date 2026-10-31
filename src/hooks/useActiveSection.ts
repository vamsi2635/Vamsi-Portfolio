import { useEffect, useState } from 'react'
import type { SectionId } from '../types'

/** Tracks which section is currently in the reading zone of the viewport. */
export function useActiveSection(ids: SectionId[]): SectionId {
  const [active, setActive] = useState<SectionId>(ids[0])

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (elements.length === 0) return

    const visible = new Map<string, number>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.intersectionRatio)
          else visible.delete(entry.target.id)
        }
        // Pick the earliest section in document order that is inside the reading zone.
        const current = ids.find((id) => visible.has(id))
        if (current) setActive(current)
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: [0, 0.01] },
    )
    elements.forEach((el) => observer.observe(el))

    const onScroll = () => {
      if (window.scrollY < 40) setActive(ids[0])
      else if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        setActive(ids[ids.length - 1])
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [ids])

  return active
}
