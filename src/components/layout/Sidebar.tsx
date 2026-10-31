import { Download, Mail } from 'lucide-react'
import { navItems } from '../../data/navigation'
import { profile } from '../../data/profile'
import { asset } from '../../lib/assets'
import { cn } from '../../lib/cn'
import type { SectionId } from '../../types'
import { GitHubIcon, LinkedInIcon } from '../ui/BrandIcons'
import { LinkButton } from '../ui/LinkButton'
import { ProfilePhoto } from '../ui/ProfilePhoto'
import { navIcons } from './navIcons'

export function Sidebar({ active }: { active: SectionId }) {
  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 flex-col bg-[#172238] text-white lg:flex">
      <div className="border-b border-white/10 px-6 pb-7 pt-9">
        <a href="#home" className="flex items-center gap-3"><ProfilePhoto variant="avatar" sizes="48px" alt="" className="size-12 rounded-full border border-white/20" /><span className="min-w-0"><span className="block truncate text-[15px] font-semibold leading-tight">{profile.name}</span><span className="mt-1 block text-[11px] text-white/55">QA AUTOMATION / SDET</span></span></a>
        <p className="mt-6 max-w-[13rem] text-xs leading-relaxed text-white/55">Building dependable automation systems for complex products.</p>
      </div>
      <nav aria-label="Primary" className="flex-1 overflow-y-auto px-4 py-7">
        <p className="mb-4 px-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">Portfolio index</p>
        <ul className="space-y-1">{navItems.map((item, index) => { const Icon = navIcons[item.id]; const isActive = active === item.id; return <li key={item.id}><a href={`#${item.id}`} aria-current={isActive ? 'location' : undefined} className={cn('group flex min-h-11 items-center gap-3 border-l-2 px-3 text-[13px] transition-all', isActive ? 'border-[#8faaff] bg-white/[0.08] font-semibold text-white' : 'border-transparent text-white/55 hover:border-white/25 hover:bg-white/[0.04] hover:text-white')}><span className="w-5 font-mono text-[10px] text-white/30">{String(index + 1).padStart(2, '0')}</span><Icon size={16} aria-hidden="true" strokeWidth={isActive ? 2.2 : 1.7} />{item.label}</a></li> })}</ul>
      </nav>
      <div className="space-y-4 border-t border-white/10 p-5">
        <LinkButton href={asset(profile.resumePath)} download variant="primary" icon={<Download size={16} aria-hidden="true" />} className="w-full">Download resume</LinkButton>
        <div className="flex items-center justify-between px-1 text-white/55"><span className="text-[10px] font-bold uppercase tracking-[0.16em]">Connect</span><div className="flex items-center gap-4"><a href={`mailto:${profile.email}`} aria-label="Email Vamsi" className="hover:text-white"><Mail size={17} /></a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="hover:text-white"><LinkedInIcon size={17} /></a><a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="hover:text-white"><GitHubIcon size={17} /></a></div></div>
      </div>
    </aside>
  )
}