import { Briefcase, Folder, House, Layers, Mail, Sparkles, User, Wrench, type LucideIcon } from 'lucide-react'
import type { SectionId } from '../../types'

export const navIcons: Record<SectionId, LucideIcon> = {
  home: House,
  about: User,
  experience: Briefcase,
  skills: Wrench,
  framework: Layers,
  projects: Folder,
  ai: Sparkles,
  contact: Mail,
}
