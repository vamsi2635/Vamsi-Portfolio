import type { NavItem } from '../types'

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home', mobileLabel: 'Home', primaryOnMobile: true },
  { id: 'about', label: 'About', mobileLabel: 'About', primaryOnMobile: false },
  { id: 'experience', label: 'Experience', mobileLabel: 'Work', primaryOnMobile: true },
  { id: 'skills', label: 'Skills', mobileLabel: 'Skills', primaryOnMobile: true },
  { id: 'framework', label: 'Framework', mobileLabel: 'Framework', primaryOnMobile: false },
  { id: 'projects', label: 'Projects', mobileLabel: 'Projects', primaryOnMobile: true },
  { id: 'ai', label: 'AI Automation', mobileLabel: 'AI', primaryOnMobile: false },
  { id: 'contact', label: 'Contact', mobileLabel: 'Contact', primaryOnMobile: false },
]
