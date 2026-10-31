import type { FrameworkComponent, FrameworkLayer } from '../types'

export const frameworkIntro =
  'The layered structure I apply when architecting Playwright and TypeScript frameworks: page, business/workflow and utility layers kept separate so suites stay readable, reusable and easy to onboard onto. This is a reference architecture of my approach, not a specific client codebase.'

export const frameworkLayers: FrameworkLayer[] = [
  {
    name: 'Test Specifications',
    caption: 'Intent',
    description: 'Readable scenarios that describe behaviour and call the workflow layer, with no locators or low-level browser logic.',
  },
  {
    name: 'Test Runner',
    caption: 'Playwright Test',
    description: 'Executes the suites, manages fixtures, and enables parallel and multi-browser runs across Chromium, Firefox and WebKit.',
  },
  {
    name: 'Business / Workflow Layer',
    caption: 'Composition',
    description: 'Composes page-level actions into business flows such as a booking or a payment authorization, so tests state what happens rather than how.',
  },
  {
    name: 'Page Object Layer',
    caption: 'Page Object Model',
    description: 'Encapsulates elements and interactions per page, with base-page abstractions that standardize element handling and reduce script duplication.',
  },
  {
    name: 'Reusable Utilities',
    caption: 'Shared services',
    description: 'Configuration, browser management, custom waits, assertions, logging and reporting helpers built with Factory, Singleton, Strategy and Dependency Injection patterns.',
  },
  {
    name: 'Browser / Application',
    caption: 'System under test',
    description: 'The application driven through Playwright or Selenium, including network interception where it helps reliability.',
  },
]

export const frameworkComponents: FrameworkComponent[] = [
  {
    name: 'Configuration management',
    description: 'Central, reusable configuration so environments and run settings are changed in one place.',
  },
  {
    name: 'Browser management',
    description: 'A single point for launching and configuring browsers across Chromium, Firefox and WebKit.',
  },
  {
    name: 'Custom waits',
    description: 'Reusable wait helpers that complement Playwright auto-waiting for reliable synchronization.',
  },
  {
    name: 'Assertions',
    description: 'Shared assertion components that keep verifications consistent and readable.',
  },
  {
    name: 'Logging',
    description: 'Structured logging in the framework utilities to make runs easier to follow and debug.',
  },
  {
    name: 'Reporting',
    description: 'Playwright HTML reports and execution summaries for stakeholder visibility.',
  },
  {
    name: 'Retry and recovery',
    description: 'Retry, recovery and exception-handling mechanisms that improve framework stability.',
  },
  {
    name: 'Screenshots',
    description: 'Captured on failure to speed up triage and root-cause analysis.',
  },
  {
    name: 'Video recording',
    description: 'Recorded sessions that show exactly what a failing test did.',
  },
  {
    name: 'Trace Viewer',
    description: 'Playwright traces for step-by-step failure analysis, including network and DOM state.',
  },
  {
    name: 'Parallel execution',
    description: 'Parallel and multi-browser execution to shorten regression feedback cycles in CI/CD.',
  },
]
