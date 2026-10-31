import { stats } from '@/content/site'

export default function Hero() {
  return (
    <>
      <section className="grid-lines grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] border-b border-line">
        <div className="flex min-h-[calc(100vh-108px)] flex-col justify-center gap-10 bg-bg px-gutter py-20">
          <div className="flex flex-col gap-7">
            <span className="text-[13px] uppercase tracking-[0.28em] text-accent">— Construyo lo que imagino</span>
            <h1 className="font-serif text-[clamp(76px,11vw,150px)] font-normal leading-[0.94] tracking-[-0.02em] text-ink">
              Julia
              <br />
              Gómez
            </h1>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#proyectos" className="btn-outline px-5 py-[11px] text-sm font-medium">
              Ver proyectos
            </a>
            <a href="#contacto" className="flex items-center gap-2 py-[11px] text-sm font-medium text-body transition-colors hover:text-ink">
              Hablemos <span>→</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-7 bg-bg px-[clamp(20px,5vw,64px)] py-20">
          <p className="max-w-[430px] text-lg leading-[1.65] text-body [text-wrap:pretty]">
            Construyo ecosistemas digitales desde cero — sitios, apps, sistemas, productos con identidad propia. Para
            clientes que tienen algo que decir y para ideas que no puedo dejar de imaginar.
          </p>
          <p className="max-w-[410px] text-sm leading-[1.7] text-muted [text-wrap:pretty]">
            Cuando veo un problema interesante, lo más probable es que ya esté construyendo la solución. Eso aplica para
            mis clientes y para mí misma.
          </p>
        </div>
      </section>

      <section className="grid-lines grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] border-b border-line">
        {stats.map((s) => (
          <div key={s.label} className="flex items-baseline gap-4 bg-bg px-gutter pb-[22px] pt-6">
            <span className="font-serif text-2xl leading-none text-ink">{s.n}</span>
            <span className="text-xs uppercase tracking-[0.12em] text-muted">{s.label}</span>
          </div>
        ))}
      </section>
    </>
  )
}
