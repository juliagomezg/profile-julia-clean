import { NEWSLETTER_URL } from '@/content/site'
import SectionHeader from './SectionHeader'

export default function Newsletter() {
  return (
    <section id="newsletter" className="flex flex-col gap-12 pb-24 pt-14">
      <SectionHeader label="Newsletter" />
      <div className="grid-lines grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] border border-line">
        <div className="flex flex-col gap-5 bg-bg px-10 py-11">
          <h2 className="font-serif text-4xl font-normal leading-[1.1] text-ink">
            Ideas que
            <br />
            <em>valen la pena</em>
          </h2>
          <p className="max-w-[300px] text-sm leading-[1.7] text-muted">
            Reflexiones semanales sobre escritura, inteligencia artificial y creatividad. Sin spam, solo contenido que me
            emociona compartir.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-6 bg-bg px-10 py-11">
          <p className="text-[15px] leading-[1.7] text-body">
            Explora las ediciones anteriores y suscríbete directo en beehiiv.
          </p>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-6 text-[12.5px] text-faint">
              <span>Sin spam</span>
              <span>Cancela cuando quieras</span>
            </div>
            <a
              href={NEWSLETTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center gap-2.5 px-5 py-[11px] text-[12.5px] uppercase tracking-[0.14em]"
            >
              Ir al newsletter <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
