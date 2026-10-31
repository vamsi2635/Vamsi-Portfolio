import { ChevronDown } from 'lucide-react'
import { frameworkComponents, frameworkIntro, frameworkLayers } from '../../data/framework'
import { Section } from '../ui/Section'

export function Framework() {
  return (
    <Section id="framework" eyebrow="Framework engineering" title="How I architect automation" description={frameworkIntro}>
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-10">
        <figure aria-labelledby="architecture-caption">
          <ol className="flex flex-col" aria-label="Automation framework layers from specifications to application">
            {frameworkLayers.map((layer, index) => (
              <li key={layer.name} className="flex flex-col items-stretch">
                <div className="flex gap-4 rounded-xl border border-line bg-surface p-4 shadow-card md:p-5">
                  <span
                    aria-hidden="true"
                    className="pt-0.5 font-mono text-xs font-medium text-subtle"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
                      <h3 className="text-[15px] font-semibold text-ink">{layer.name}</h3>
                      <span className="font-mono text-[11px] uppercase tracking-wide text-accent">
                        {layer.caption}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{layer.description}</p>
                  </div>
                </div>
                {index < frameworkLayers.length - 1 && (
                  <ChevronDown
                    size={18}
                    aria-hidden="true"
                    className="mx-auto my-1.5 text-line-strong"
                    strokeWidth={2}
                  />
                )}
              </li>
            ))}
          </ol>
          <figcaption id="architecture-caption" className="mt-4 text-xs text-subtle">
            Layered architecture: each layer depends only on the layer beneath it.
          </figcaption>
        </figure>

        <div className="h-fit rounded-xl border border-line bg-surface shadow-card lg:sticky lg:top-8">
          <div className="border-b border-line px-5 py-4 md:px-6">
            <h3 className="text-[15px] font-semibold text-ink">Supporting components</h3>
            <p className="mt-0.5 text-sm text-muted">Cross-cutting capabilities shared by every layer.</p>
          </div>
          <dl className="divide-y divide-line">
            {frameworkComponents.map((component) => (
              <div key={component.name} className="px-5 py-3.5 md:px-6">
                <dt className="text-sm font-medium text-ink">{component.name}</dt>
                <dd className="mt-0.5 text-sm leading-relaxed text-muted">{component.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  )
}
