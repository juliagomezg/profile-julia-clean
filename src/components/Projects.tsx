import { projectGroups } from '@/content/site'
import type { Project } from '@/types'
import SectionHeader from './SectionHeader'

const total = projectGroups.reduce((n, g) => n + g.items.length, 0)

function ProjectRow({ p }: { p: Project }) {
  const linked = Boolean(p.href)
  const content = (
    <>
      <span className="w-16 flex-[0_0_64px] font-serif text-lg leading-[1.6] text-num">{p.num}</span>
      <div className="flex max-w-[420px] flex-[1_1_360px] flex-col gap-2">
        <h3 className="font-serif text-2xl font-normal leading-[1.25] text-ink transition-colors duration-[250ms] group-hover:text-accent">
          {p.title}
        </h3>
        <p className="text-[14.5px] leading-[1.7] text-muted [text-wrap:pretty]">{p.text}</p>
      </div>
      <div className="flex flex-[1_1_240px] flex-col gap-1 pl-[clamp(0px,6vw,92px)]">
        <span className="text-xs uppercase tracking-[0.14em] text-faint">{p.meta}</span>
        <span className="text-[12.5px] text-accent">{p.status}</span>
      </div>
      <span className="flex-[0_0_24px] text-right text-base leading-[1.4] text-faint transition-[color,transform] duration-[250ms] group-hover:translate-x-1 group-hover:text-accent">
        {linked ? '→' : '—'}
      </span>
    </>
  )

  const rowClass = 'flex flex-wrap gap-x-6 gap-y-3 border-b border-line pb-[38px] pt-9'

  if (!linked) return <div className={`${rowClass} cursor-default`}>{content}</div>

  return (
    <a
      href={p.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group ${rowClass} transition-colors duration-[250ms] hover:bg-bg2`}
    >
      {content}
    </a>
  )
}

export default function Projects() {
  return (
    <section id="proyectos" className="flex flex-col gap-14 pb-[72px] pt-14">
      <SectionHeader label="Proyectos" count={`${String(total).padStart(2, '0')} builds`} />
      {projectGroups.map((g) => (
        <div key={g.label} className="flex flex-col">
          <span className="border-b border-line pb-4 text-xs uppercase tracking-[0.16em] text-accent">{g.label}</span>
          {g.items.map((p) => (
            <ProjectRow key={p.num} p={p} />
          ))}
        </div>
      ))}
    </section>
  )
}
