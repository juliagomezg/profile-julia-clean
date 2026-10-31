'use client'

import { useState, type FormEvent } from 'react'
import { NEWSLETTER_URL } from '@/content/site'
import SectionHeader from './SectionHeader'

type Status = 'idle' | 'error' | 'ok'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  const subscribe = (e: FormEvent) => {
    e.preventDefault()
    const value = email.trim()
    if (!EMAIL_RE.test(value)) {
      setStatus('error')
      return
    }
    // beehiiv completa la suscripción en su página con el correo precargado
    window.open(`${NEWSLETTER_URL}subscribe?email=${encodeURIComponent(value)}`, '_blank', 'noopener')
    setStatus('ok')
    setEmail('')
  }

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
        <form onSubmit={subscribe} noValidate className="flex flex-col justify-center gap-6 bg-bg px-10 py-11">
          <input
            type="email"
            placeholder="tu@email.com"
            aria-label="Correo electrónico"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setStatus('idle')
            }}
            className={`w-full border-0 border-b bg-transparent py-3 text-[15px] text-ink outline-none transition-colors focus:border-accent ${
              status === 'error' ? 'border-[#f0a0a0]' : 'border-line2'
            }`}
          />
          <div className="flex flex-wrap items-center justify-between gap-4">
            {status === 'idle' && (
              <div className="flex gap-6 text-[12.5px] text-faint">
                <span>Sin spam</span>
                <span>Cancela cuando quieras</span>
              </div>
            )}
            {status === 'error' && (
              <span role="alert" className="text-[12.5px] text-[#f0a0a0]">
                Revisa tu correo, parece incompleto.
              </span>
            )}
            {status === 'ok' && (
              <span role="status" className="text-[12.5px] text-accent">
                Termina tu suscripción en la pestaña que se abrió.
              </span>
            )}
            <button type="submit" className="btn-outline bg-transparent px-5 py-[11px] text-[12.5px] uppercase tracking-[0.14em]">
              Suscribirme
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
