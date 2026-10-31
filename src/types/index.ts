export type SectionId =
  | 'home'
  | 'about'
  | 'experience'
  | 'skills'
  | 'framework'
  | 'projects'
  | 'ai'
  | 'contact'

export interface NavItem {
  id: SectionId
  label: string
  /** Shorter label used in the mobile bottom navigation. */
  mobileLabel: string
  /** Shown directly in the mobile bottom bar; the rest live under "More". */
  primaryOnMobile: boolean
}

export interface Profile {
  name: string
  shortName: string
  title: string
  roleLine: string
  experienceLabel: string
  employer: string
  headline: string
  tagline: string
  summary: string
  email: string
  phone: string
  phoneHref: string
  linkedin: string
  github: string
  resumePath: string
  /** Availability is only displayed once it has been confirmed by the owner. */
  availability: string | null
  /** Location from the resume; hidden until `locationVerified` is true. */
  location: string
  locationVerified: boolean
  heroTags: string[]
  education: { degree: string; institution: string }
}

export interface Engagement {
  id: string
  client: string
  platform: string
  domain: string
  role: string
  dates: string
  stack: string[]
  summary: string
  responsibilities: string[]
  contributions: string[]
}

export interface Employer {
  name: string
  role: string
  dates: string
  description: string
}

export interface SkillCategory {
  title: string
  description: string
  items: string[]
}

export interface FrameworkLayer {
  name: string
  caption: string
  description: string
}

export interface FrameworkComponent {
  name: string
  description: string
}

export interface ProjectEvidence {
  repoUrl?: string
  reportUrl?: string
  screenshots?: { src: string; alt: string }[]
}

export interface Project {
  id: string
  title: string
  kind: string
  overview: string
  architecture: string[]
  stack: string[]
  capabilities: string[]
  evidence: ProjectEvidence
  /** True while repository, screenshots and project-specific details are still to be supplied. */
  placeholder: boolean
}

export interface AiCapability {
  title: string
  description: string
}
