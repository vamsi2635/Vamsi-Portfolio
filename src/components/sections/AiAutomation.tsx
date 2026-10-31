import { aiExplored, aiHandsOn, aiIntro } from '../../data/ai'
import type { AiCapability } from '../../types'
import { Section } from '../ui/Section'
import { Tag } from '../ui/Tag'

function CapabilityGroup({
  label,
  tone,
  items,
  note,
}: {
  label: string
  tone: 'accent' | 'neutral'
  items: AiCapability[]
  note: string
}) {
  return (
    <div className="rounded-xl border border-line bg-surface shadow-card">
      <div className="border-b border-line px-5 py-4 md:px-6">
        <Tag tone={tone}>{label}</Tag>
        <p className="mt-2 text-sm text-muted">{note}</p>
      </div>
      <ul className="divide-y divide-line" role="list">
        {items.map((item) => (
          <li key={item.title} className="px-5 py-4 md:px-6">
            <h3 className="text-[15px] font-semibold text-ink">{item.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function AiAutomation() {
  return (
    <Section id="ai" eyebrow="AI-assisted engineering" title="AI-assisted QA automation" description={aiIntro}>
      <div
        className={
          aiExplored.length > 0
            ? 'grid items-start gap-5 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]'
            : 'grid max-w-3xl gap-5'
        }
      >
        <CapabilityGroup
          label="Hands-on experience"
          tone="accent"
          items={aiHandsOn}
          note="Applied in my automation work."
        />
        {aiExplored.length > 0 && (
          <CapabilityGroup
            label="Explored concepts"
            tone="neutral"
            items={aiExplored}
            note="Areas I have investigated but not claimed as production experience."
          />
        )}
      </div>
    </Section>
  )
}
