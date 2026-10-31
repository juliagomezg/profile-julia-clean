import SectionHeader from './SectionHeader'

export default function Book() {
  return (
    <section id="en-curso" className="flex flex-col items-center pb-24 pt-14">
      <SectionHeader label="En camino" count="2026" className="mb-14 self-stretch" />
      <span className="h-12 w-px bg-line2" />
      <blockquote className="my-10 max-w-[760px] text-center font-serif text-[clamp(40px,6vw,68px)] italic leading-[1.08] tracking-[-0.01em] text-ink [text-wrap:balance]">
        &ldquo;Donde la narrativa encuentra el futuro&rdquo;
      </blockquote>
      <span className="h-12 w-px bg-line2" />
      <p className="mb-9 mt-11 max-w-[390px] text-center text-[14.5px] leading-[1.65] text-muted [text-wrap:pretty]">
        Un libro en proceso sobre la intersección entre escritura creativa e inteligencia artificial. Suscríbete para
        recibir actualizaciones exclusivas.
      </p>
      <a href="#newsletter" className="btn-outline flex items-center gap-2.5 px-6 py-[13px] text-sm font-medium">
        Avísame cuando salga <span>→</span>
      </a>
    </section>
  )
}
