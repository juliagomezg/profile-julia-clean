'use client'

import { useEffect, useRef } from 'react'

const Blog = () => {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated')
        }
      })
    }, observerOptions)

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      if (observerRef.current) {
        observerRef.current.observe(el)
      }
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])


  return (
    <section id="blog" className="py-20 px-8 max-w-7xl mx-auto">
      <div className="text-center animate-on-scroll">
        {/* Newsletter CTA Card */}
        <div className="max-w-2xl mx-auto bg-gradient-to-br from-accent/5 to-accent-secondary/10 border border-accent/20 rounded-2xl p-12 transition-all duration-500 hover:shadow-2xl hover:border-accent/40 group">
          <div className="text-5xl mb-6 animate-bounce">📩</div>
          
          <h3 className="font-crimson text-3xl font-bold text-primary-dark mb-4 group-hover:text-accent transition-colors duration-300">
            Newsletter
          </h3>
          
          <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-lg mx-auto">
            Reflexiones sobre <strong className="text-accent">arte</strong>, <strong className="text-accent-secondary">creatividad</strong> 
            y <strong className="text-accent-coral">tecnología</strong>. Únete a una comunidad de creativos que buscan 
            inspiración y contenido de valor.
          </p>
          
          <div className="flex items-center justify-center gap-6 text-sm text-text-secondary/80 mb-8">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              <span>Sin spam</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent-secondary rounded-full animate-pulse delay-300"></span>
              <span>Contenido exclusivo</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent-coral rounded-full animate-pulse delay-500"></span>
              <span>Cancelar cuando quieras</span>
            </div>
          </div>
          
          <a 
            href="https://juliagomezg.beehiiv.com/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-red-disruptive text-white px-8 py-4 rounded-xl font-bold text-lg tracking-wide transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:bg-red-disruptive/90 group/button no-underline"
          >
            <span className="relative">
              Suscríbete Gratis
              <span className="absolute inset-0 bg-white/20 rounded-xl scale-0 group-hover/button:scale-100 transition-transform duration-300"></span>
            </span>
            <span className="text-2xl transition-transform duration-300 group-hover/button:translate-x-1 group-hover/button:scale-110">
              ✨
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Blog 