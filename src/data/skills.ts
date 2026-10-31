import type { SkillCategory } from '../types'

export const skillCategories: SkillCategory[] = [
  {
    title: 'Automation Engineering',
    description: 'UI automation and test runners.',
    items: ['Playwright', 'Selenium WebDriver', 'Playwright Test', 'TestNG', 'BDD', 'Cucumber'],
  },
  {
    title: 'Programming',
    description: 'Languages used for automation code.',
    items: ['TypeScript', 'Java', 'JavaScript'],
  },
  {
    title: 'API Testing',
    description: 'Service-level validation.',
    items: ['REST Assured', 'Postman', 'GraphQL'],
  },
  {
    title: 'Framework Architecture',
    description: 'Structure and design principles.',
    items: [
      'Page Object Model',
      'SOLID',
      'Factory',
      'Singleton',
      'Strategy',
      'Dependency Injection',
      'Clean Architecture',
    ],
  },
  {
    title: 'Database',
    description: 'Backend data validation.',
    items: ['SQL', 'MS SQL Server'],
  },
  {
    title: 'CI/CD & Version Control',
    description: 'Pipelines and source control.',
    items: ['Jenkins', 'Azure DevOps', 'Git', 'GitHub'],
  },
  {
    title: 'Reporting & Diagnostics',
    description: 'Evidence and failure analysis.',
    items: ['Playwright HTML Reports', 'Trace Viewer', 'Screenshots', 'Video Recording'],
  },
  {
    title: 'AI-assisted Engineering',
    description: 'Tooling used alongside day-to-day automation.',
    items: ['GitHub Copilot', 'Claude Code', 'Prompt Engineering', 'MCP Concepts'],
  },
]

export const practices: string[] = [
  'Regression, Smoke and Sanity Testing',
  'Cross-Browser Testing',
  'Parallel Test Execution',
  'Agile / Scrum',
  'SDLC and STLC',
]
