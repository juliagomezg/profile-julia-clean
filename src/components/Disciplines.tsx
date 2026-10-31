import { disciplines } from '@/content/site'
import SectionHeader from './SectionHeader'

export default function Disciplines() {
  return (
    <section className="flex flex-col gap-11 pb-[72px] pt-11">
      <SectionHeader label="Qué construyo" count="04 disciplinas" />
      <div className="grid-lines grid-cols-[repeat(auto-fit,minmax(min(100%,230px),1fr))] border border-line">
        {disciplines.map((d) => (
          <div key={d.num} className="cell-hover flex flex-col gap-3.5 bg-bg px-8 pb-9 pt-8">
            <span className="mb-3.5 font-serif text-[32px] leading-none text-num">{d.num}</span>
            <h3 className="font-serif text-2xl font-normal leading-[1.25] text-ink">
              {d.l1}
              <br />
              {d.l2}
            </h3>
            <p className="mt-1.5 text-sm leading-[1.65] text-muted [text-wrap:pretty]">{d.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
