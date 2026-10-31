import type { AiCapability } from '../types'

export const aiIntro =
  'I use AI assistants as engineering tools alongside my day-to-day automation work, from test generation to debugging and framework refactoring.'

export const aiHandsOn: AiCapability[] = [
  {
    title: 'MCP concepts',
    description: 'Model Context Protocol concepts for AI-assisted and tool-integrated QA workflows.',
  },
  {
    title: 'GitHub Copilot and Claude Code',
    description:
      'Used to accelerate automation development, code review, debugging and framework refactoring.',
  },
  {
    title: 'Prompt engineering',
    description:
      'Applied to test-case generation and reusable automation utility scaffolding.',
  },
  {
    title: 'AI-assisted test generation',
    description: 'Using prompt engineering to generate test cases for automation.',
  },
  {
    title: 'Synthetic test-data generation',
    description: 'Prompt-driven creation of synthetic test data.',
  },
  {
    title: 'Code review and debugging',
    description:
      'AI-assisted debugging to support root-cause analysis of failing and flaky automation tests.',
  },
]

/** Concepts explored but not yet claimed as hands-on. Leave empty to hide the group. */
export const aiExplored: AiCapability[] = []
