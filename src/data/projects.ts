import type { Project } from '../types'

import { profile } from './profile'

/*
 * Project descriptions only list capabilities that appear in the resume (no metrics).
 * By default each project links to the GitHub profile. When a dedicated repository, report or screenshots
 * exist, set `evidence.repoUrl` / `reportUrl` / `screenshots` for that project.
 */
const defaultEvidence = { repoUrl: profile.github }
export const projects: Project[] = [
  {
    id: 'aegis-qa',
    title: 'Aegis QA',
    kind: 'Playwright · TypeScript Automation Framework',
    overview:
      'A Playwright and TypeScript automation framework showcasing the layered architecture and reusable components I build in client work.',
    architecture: [
      'Test specifications on Playwright Test',
      'Business / workflow layer',
      'Page object layer with base-page abstractions',
      'Reusable utilities: configuration, browser management, waits, assertions, logging',
    ],
    stack: ['Playwright', 'TypeScript', 'Playwright Test'],
    capabilities: [
      'Page Object Model structure',
      'Cross-browser and parallel execution',
      'HTML reports, traces, screenshots and video',
      'Retry and recovery handling',
    ],
    evidence: defaultEvidence,
    placeholder: false,
  },
  {
    id: 'pom-framework',
    title: 'Enterprise Page Object Model Framework',
    kind: 'Selenium · Java · TestNG',
    overview:
      'A Page Object Model framework approach for enterprise web applications, as applied on Selenium, Java and TestNG engagements.',
    architecture: [
      'Page classes with base-page abstractions',
      'Reusable components and helpers',
      'TestNG test classes composing page actions',
    ],
    stack: ['Selenium WebDriver', 'Java', 'TestNG'],
    capabilities: [
      'Reduced script duplication through reusable components',
      'Maintainable conversion of manual scenarios to automation',
      'Design patterns such as Factory and Singleton',
    ],
    evidence: defaultEvidence,
    placeholder: false,
  },
  {
    id: 'api-automation',
    title: 'API Automation Testing',
    kind: 'REST Assured · Postman · GraphQL',
    overview:
      'Service-level automation and validation across REST and GraphQL APIs, with SQL-based backend checks.',
    architecture: [
      'Request and response validation layer',
      'Reusable test data and utilities',
      'SQL checks against MS SQL Server',
    ],
    stack: ['REST Assured', 'Postman', 'GraphQL', 'SQL / MS SQL Server'],
    capabilities: [
      'REST service testing with REST Assured and Postman',
      'GraphQL validation',
      'SQL-based backend validation',
    ],
    evidence: defaultEvidence,
    placeholder: false,
  },
  {
    id: 'ai-qa',
    title: 'AI-Assisted QA Automation',
    kind: 'GitHub Copilot · Claude Code · Prompt Engineering',
    overview:
      'Applying AI assistants to test generation, synthetic test data, debugging and framework refactoring in automation work.',
    architecture: [
      'Prompt patterns for test-case generation',
      'AI-assisted debugging of failing and flaky tests',
      'Utility scaffolding with AI tooling',
    ],
    stack: ['GitHub Copilot', 'Claude Code', 'Prompt Engineering'],
    capabilities: [
      'AI-assisted test generation',
      'Synthetic test-data creation',
      'Root-cause analysis support for flaky tests',
    ],
    evidence: defaultEvidence,
    placeholder: false,
  },
]
