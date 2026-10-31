import { highlights, stats } from '@/content/site'
import SectionHeader from './SectionHeader'

export default function About() {
  return (
    <section id="sobre-mi" className="flex flex-col gap-12 pb-[72px] pt-14">
      <SectionHeader label="Sobre mí" />
      <div className="grid-lines grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] border border-line">
        <div className="flex flex-col gap-11 bg-bg px-10 py-11">
          <div className="relative pt-14">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-1.5 top-0 font-serif text-[120px] leading-[0.9] tracking-[-0.03em] text-num opacity-[.45]"
            >
              JG
            </span>
            <p className="relative text-[16.5px] leading-[1.65] text-body [text-wrap:pretty]">
              Soy de las personas que cuando encuentran un problema interesante, ya están pensando en cómo construir la
              solución. A veces eso es para un cliente. A veces es para mí misma. Siempre tiene{' '}
              <strong className="font-medium text-ink">identidad</strong>,{' '}
              <strong className="font-medium text-ink">propósito</strong> y mucha creatividad.
            </p>
          </div>
          <div className="grid-lines grid-cols-2">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1.5 bg-bg px-6 py-[26px]">
                <span className="font-serif text-[28px] leading-[1.1] text-ink">{s.n}</span>
                <span className="text-xs uppercase tracking-[0.14em] text-faint">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-[22px] bg-bg px-10 py-11">
          <p className="text-base leading-[1.7] text-body [text-wrap:pretty]">
            Soy Julia Gómez — product builder, escritora y mentora desde Hermosillo, Sonora. Construyo la presencia digital
            completa de negocios que tienen historia y algo que decir: su sitio, su app, su sistema, todo con identidad
            propia.
          </p>
          <p className="text-sm leading-[1.7] text-muted [text-wrap:pretty]">
            También tengo mis propios productos — algunos vivos, uno en stealth, otro que construí porque no quería comprar
            la versión comercial. Y escribo, porque la narrativa es parte de cómo pienso y cómo construyo.
          </p>
          <ul className="mt-9 flex flex-col gap-4 border-t border-line pt-9">
            {highlights.map((h) => (
              <li key={h} className="flex gap-4 text-[14.5px] leading-[1.5] text-body">
                <span className="text-accent">—</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
