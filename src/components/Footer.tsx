import { EMAIL, navLinks, socialLinks } from '@/content/site'

export default function Footer() {
  return (
    <footer id="contacto" className="border-t border-line">
      <div className="mx-auto flex max-w-page flex-wrap justify-between gap-12 px-gutter pb-20 pt-[88px]">
        <div className="flex flex-col gap-3.5">
          <span className="text-xs uppercase tracking-[0.16em] text-muted">Conectemos</span>
          <h2 className="font-serif text-[clamp(36px,4.5vw,52px)] font-normal leading-[1.05] text-ink">
            ¿Tienes un proyecto
            <br />
            <em className="text-soft">con impacto social?</em>
          </h2>
          <a
            href={`mailto:${EMAIL}`}
            className="btn-outline mt-5 flex items-center gap-3 self-start px-6 py-3 text-[12.5px] uppercase tracking-[0.14em]"
          >
            Escribir un mensaje <span>→</span>
          </a>
        </div>
        <div className="flex flex-col items-end gap-[22px] text-[12.5px] uppercase tracking-[0.14em] text-muted">
          <nav className="flex flex-wrap justify-end gap-x-8 gap-y-3">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="transition-colors hover:text-ink">
                {l.label}
              </a>
            ))}
          </nav>
          <nav className="flex flex-wrap justify-end gap-x-8 gap-y-3">
            {socialLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                {...(l.href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
                className="transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-page flex-wrap items-center justify-between gap-3 px-gutter pb-7 pt-6">
          <span className="font-serif text-[17px] text-ink">Julia Gómez</span>
          <span className="text-[12.5px] text-faint">© {new Date().getFullYear()} · Todos los derechos reservados</span>
        </div>
      </div>
    </footer>
  )
}
