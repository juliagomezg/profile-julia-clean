import { navLinks } from '@/content/site'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-bg-blur backdrop-blur-[12px]">
      <div className="flex items-center justify-between gap-6 border-b border-line px-gutter py-3">
        <a href="#top" className="flex-none whitespace-nowrap font-serif text-[21px] tracking-[-0.01em] text-ink">
          Julia Gómez
        </a>
        <nav className="scrollbar-hide flex min-w-0 flex-auto [justify-content:safe_center] gap-[clamp(14px,2vw,32px)] overflow-x-auto text-[12.5px] uppercase tracking-[clamp(0.08em,1vw,0.16em)] text-muted">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="whitespace-nowrap transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-none items-center gap-5">
          <ThemeToggle />
          <a
            href="#contacto"
            className="btn-outline whitespace-nowrap px-[17px] py-[9px] text-[12.5px] uppercase tracking-[0.16em]"
          >
            Contacto
          </a>
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-x-6 gap-y-1.5 border-b border-line px-gutter py-[11px] text-xs uppercase tracking-[0.16em] text-faint">
        <span>Hermosillo, Sonora · México</span>
        <span>Product builder · Creativa · Escritora</span>
      </div>
    </header>
  )
}
