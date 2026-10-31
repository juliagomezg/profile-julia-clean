import { media } from '@/content/site'
import SectionHeader from './SectionHeader'

export default function Media() {
  return (
    <section id="media" className="flex flex-col gap-12 pb-[72px] pt-14">
      <SectionHeader label="Media" count={`${String(media.length).padStart(2, '0')} piezas`} />
      <div className="grid-lines grid-cols-[repeat(auto-fit,minmax(min(100%,290px),1fr))] border border-line">
        {media.map((m) => (
          <a
            key={m.num}
            href={m.href}
            target="_blank"
            rel="noopener noreferrer"
            className="cell-hover flex flex-col gap-3.5 bg-bg px-8 pb-9 pt-[34px]"
          >
            <div className="mb-3.5 flex items-start justify-between">
              <span className="font-serif text-[30px] leading-none text-num">{m.num}</span>
              <span className="text-xs uppercase tracking-[0.14em] text-accent">{m.kind}</span>
            </div>
            <h3 className="font-serif text-[21px] font-normal leading-[1.3] text-ink">{m.title}</h3>
            <p className="flex-1 text-sm leading-[1.7] text-muted [text-wrap:pretty]">{m.text}</p>
            <span className="mt-[22px] flex items-center gap-2 text-sm text-body">
              {m.cta} <span>→</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
