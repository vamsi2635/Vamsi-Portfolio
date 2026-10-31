import { ArrowUpRight } from 'lucide-react'
import { projects } from '../../data/projects'
import { profile } from '../../data/profile'
import type { Project } from '../../types'
import { GitHubIcon } from '../ui/BrandIcons'
import { Disclosure } from '../ui/Disclosure'
import { LinkButton } from '../ui/LinkButton'
import { Section } from '../ui/Section'
import { Tag, TagList } from '../ui/Tag'

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-subtle">{title}</h4>
      <ul className="mt-2.5 space-y-2" role="list">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
            <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Evidence({ project }: { project: Project }) {
  const { repoUrl, reportUrl, screenshots } = project.evidence
  return (
    <div className="space-y-3">
      <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-subtle">Source</h4>
      <div className="flex flex-wrap gap-2">
        {repoUrl && (
          <LinkButton href={repoUrl} external variant="secondary" icon={<GitHubIcon size={16} />}>
            View on GitHub
          </LinkButton>
        )}
        {reportUrl && (
          <LinkButton href={reportUrl} external variant="secondary" icon={<ArrowUpRight size={16} aria-hidden="true" />}>
            View report
          </LinkButton>
        )}
      </div>
      {screenshots && screenshots.length > 0 && (
        <ul className="grid gap-3 sm:grid-cols-2" role="list">
          {screenshots.map((shot) => (
            <li key={shot.src}>
              <img src={shot.src} alt={shot.alt} loading="lazy" className="rounded-lg border border-line" />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-xl border border-line bg-surface shadow-card">
      <Disclosure
        label={`${project.title} details`}
        header={
          <>
            {project.placeholder && (
              <Tag tone="dashed" className="mb-3">
                Placeholder · details pending
              </Tag>
            )}
            <span className="block text-lg font-semibold leading-snug text-ink">{project.title}</span>
            <span className="mt-0.5 block font-mono text-[11px] uppercase tracking-wide text-accent">
              {project.kind}
            </span>
            <span className="mt-3 block text-sm leading-relaxed text-muted">{project.overview}</span>
            <span className="mt-4 block">
              <TagList items={project.stack} />
            </span>
          </>
        }
      >
        <div className="space-y-6">
          <DetailList title="Architecture" items={project.architecture} />
          <DetailList title="Key capabilities" items={project.capabilities} />
          <Evidence project={project} />
        </div>
      </Disclosure>
    </article>
  )
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Featured projects"
      description="How I approach framework design, API testing and AI-assisted automation."
    >
      <div className="grid items-start gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="mt-8">
        <LinkButton href={profile.github} external variant="secondary" icon={<GitHubIcon size={16} />}>
          Browse GitHub profile
        </LinkButton>
      </div>
    </Section>
  )
}
