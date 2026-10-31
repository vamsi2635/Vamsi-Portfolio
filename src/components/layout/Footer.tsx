import { profile } from '../../data/profile'

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-line py-8 text-sm text-muted">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p>
          © {currentYear} {profile.name}
        </p>
        <p className="text-xs text-subtle">Built with React, TypeScript, Vite and Tailwind CSS.</p>
      </div>
    </footer>
  )
}
