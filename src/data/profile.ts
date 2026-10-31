import type { Profile } from '../types'

export const profile: Profile = {
  name: 'Vamsi Krishna Padarthi',
  shortName: 'Vamsi Krishna P.',
  title: 'Senior QA Automation Engineer | SDET',
  roleLine: 'Playwright · TypeScript · Selenium',
  experienceLabel: '5+ years',
  employer: 'Publicis Sapient',
  headline: 'Engineering Quality. Automating Confidence.',
  tagline: 'Senior QA Automation Engineer | SDET',
  summary:
    'Over 5 years of experience building maintainable automation solutions for enterprise platforms using Playwright, TypeScript, Selenium, Java and API testing technologies.',
  email: 'vamsikrishnap1430@gmail.com',
  phone: '+91-9959487366',
  phoneHref: 'tel:+919959487366',
  linkedin: 'https://linkedin.com/in/vamsikrishna-padarthi-418699425',
  github: 'https://github.com/vamsikrishna-qa',
  resumePath: 'resume/Vamsi_Krishna_Padharthi_Senior_QA_Automation_SDET.pdf',
  // Shown as a status chip in the hero. Set to null to hide it.
  availability: 'Open to new opportunities',
  location: 'Bangalore, India',
  locationVerified: true,
  heroTags: ['Playwright', 'TypeScript', 'Selenium', 'Java', 'REST Assured', 'CI/CD'],
  education: {
    degree: 'Bachelor of Science (B.Sc.) — Computers',
    institution: 'Vikrama Simhapuri University, Nellore, Andhra Pradesh, India',
  },
}

export const aboutParagraphs: string[] = [
  'I design, build and maintain enterprise-grade automation across hospitality, banking, retail and insurance platforms. My day-to-day work centres on Playwright with TypeScript and Selenium WebDriver with Java, covering UI, API, cross-browser and parallel execution.',
  'I focus on framework architecture: scalable Page Object Model frameworks, reusable components, custom waits, assertions, logging, reporting and retry and recovery mechanisms, structured with clean architecture principles so suites stay maintainable as products grow.',
  'I work closely with developers, business analysts and enterprise stakeholders in Agile SDLC and STLC environments, and use AI-assisted tooling such as GitHub Copilot and Claude Code to speed up test development, debugging and refactoring.',
]

export const aboutHighlights: { title: string; detail: string }[] = [
  {
    title: 'Enterprise automation',
    detail: 'Four client programs across hospitality, banking, retail and insurance.',
  },
  {
    title: 'Framework architecture',
    detail: 'Layered Page Object Model frameworks with reusable, convention-driven utilities.',
  },
  {
    title: 'UI and API automation',
    detail: 'Playwright and Selenium for UI; REST Assured, Postman and GraphQL for services.',
  },
  {
    title: 'Cross-browser and parallel',
    detail: 'Execution across Chromium, Firefox and WebKit with parallel runs.',
  },
  {
    title: 'CI/CD integration',
    detail: 'Automated execution in Jenkins and Azure DevOps pipelines with stakeholder reports.',
  },
  {
    title: 'AI-assisted automation',
    detail: 'GitHub Copilot, Claude Code and prompt engineering applied to everyday QA work.',
  },
]

export const aboutFacts: { value: string; label: string }[] = [
  { value: '5+', label: 'Years of experience' },
  { value: '4', label: 'Enterprise client programs' },
  { value: '4', label: 'Industry domains' },
  { value: '3', label: 'Browser engines covered' },
]
