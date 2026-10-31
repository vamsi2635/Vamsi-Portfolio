import type { Employer, Engagement } from '../types'

export const employer: Employer = {
  name: 'Publicis Sapient',
  role: 'Senior QA Automation Engineer',
  dates: 'Feb 2021 – Present',
  description:
    'Global digital business transformation consultancy delivering enterprise engineering solutions for Fortune 500 clients across hospitality, banking, retail and insurance.',
}

/** Most recent engagement first. Dates are exactly as written in the resume. */
export const engagements: Engagement[] = [
  {
    id: 'marriott',
    client: 'Marriott Hotels',
    platform: 'Groups & Meetings Platform',
    domain: 'Hospitality',
    role: 'Senior Test Engineer',
    dates: 'Dec 2025 – Present',
    stack: ['Playwright', 'TypeScript', 'Page Object Model', 'CI/CD'],
    summary:
      'Quick Group and RFP booking workflows on a global group-booking platform, automated with Playwright and TypeScript.',
    responsibilities: [
      'Led automation strategy and framework execution for Quick Group and RFP booking workflows.',
      'Translated business requirements into automated test coverage by collaborating with developers, business analysts and stakeholders throughout Agile sprint cycles.',
      'Developed and maintained regression, smoke and sanity automation suites aligned with sprint release cycles.',
    ],
    contributions: [
      'Enhanced the Page Object Model based framework with reusable utilities and components for maintainable test development.',
      'Integrated automated execution into CI/CD workflows and generated execution reports for stakeholder visibility.',
      'Conducted framework handover demonstrations for client engineering teams and supported automation adoption.',
    ],
  },
  {
    id: 'idfc',
    client: 'IDFC FIRST Bank',
    platform: 'Payment BC Platform',
    domain: 'Banking & Payments',
    role: 'QA Engineer',
    dates: 'Dec 2023 – Nov 2025',
    stack: ['Playwright', 'TypeScript', 'Cross-browser', 'CI/CD', 'Trace Viewer'],
    summary:
      'A multi-mode B2B payment collection platform supporting invoice-based buyer and seller transactions.',
    responsibilities: [
      'Collaborated with developers and business analysts to validate critical business workflows and track defects.',
      'Generated and analyzed Playwright HTML reports and tracked defects.',
    ],
    contributions: [
      'Designed and implemented a scalable Page Object Model automation framework.',
      'Implemented cross-browser automation across Chromium, Firefox and WebKit and integrated execution into CI/CD pipelines for continuous regression testing.',
      'Used Playwright auto-waiting, network interception, Trace Viewer, screenshots and execution reports for reliable automation and failure analysis.',
      'Developed reusable test utilities and components to standardize automation across payment authorization workflows.',
    ],
  },
  {
    id: 'wegmans',
    client: 'Wegmans Food Markets',
    platform: 'E-Commerce Platform',
    domain: 'Retail / E-Commerce',
    role: 'Test Engineer',
    dates: 'Nov 2022 – Dec 2023',
    stack: ['Selenium WebDriver', 'Java', 'TestNG', 'Azure DevOps'],
    summary: 'Critical test scenarios for a digital food marketplace automated with Selenium WebDriver, Java and TestNG.',
    responsibilities: [
      'Authored and maintained test cases based on Software Requirements Specification documentation throughout Agile sprint cycles.',
      'Logged, tracked and collaborated on defect resolution using Azure DevOps.',
      'Prepared execution and test-status reports for stakeholders across the testing lifecycle.',
    ],
    contributions: [
      'Automated critical test scenarios using Selenium WebDriver, Java and TestNG.',
      'Converted manual test scenarios into maintainable automation scripts aligned with application requirements.',
    ],
  },
  {
    id: 'cna',
    client: 'CNA Lawyers Insurance',
    platform: 'Policy & Claims Platform',
    domain: 'Insurance',
    role: 'Test Engineer',
    dates: 'Mar 2021 – Nov 2022',
    stack: ['Selenium WebDriver', 'Java', 'Postman'],
    summary:
      'A professional liability insurance platform covering quoting, policy booking and claims workflows.',
    responsibilities: [
      'Performed functional, regression and web-service testing across quoting, policy booking and claims workflows.',
      'Developed diverse test datasets and documented defects with detailed reproduction information to support developer triage.',
      'Collaborated with client teams during knowledge-transfer sessions and delivered weekly status and defect-summary reports.',
    ],
    contributions: [
      'Performed API testing with Postman to validate backend services across the quoting and claims modules.',
    ],
  },
]
