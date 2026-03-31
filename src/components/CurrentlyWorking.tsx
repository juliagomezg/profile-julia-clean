'use client'

import { useEffect, useRef } from 'react'

const CurrentlyWorking = () => {
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
    <section 
      className="relative py-32 px-8 min-h-[70vh] flex items-center"
      style={{
        backgroundImage: 'url(/img/escritorio.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay para mejorar legibilidad */}
      <div className="absolute inset-0 bg-primary-dark/60 z-10"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-20 animate-on-scroll">
        <div className="text-sm tracking-widest uppercase text-accent-secondary mb-6 font-medium">
          Currently Working
        </div>
        
        <h2 className="font-crimson text-5xl lg:text-6xl font-semibold text-pure-white mb-8 leading-tight">
          Mi Próximo Libro
        </h2>
        
        <div className="bg-pure-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-pure-white/20">
          <p className="text-xl lg:text-2xl text-pure-white/95 leading-relaxed mb-6 font-light">
            Actualmente estoy escribiendo mi siguiente obra literaria que explora 
            la evolución de la narrativa humana en la era de la inteligencia artificial.
          </p>
          
          <p className="text-lg text-pure-white/80 leading-relaxed mb-8">
            Una reflexión profunda sobre cómo la tecnología transforma no solo nuestras herramientas, 
            sino también la esencia misma de cómo contamos historias y preservamos nuestra humanidad.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-accent-secondary rounded-full animate-pulse"></div>
              <span className="text-pure-white/90 font-medium">En progreso</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-accent-coral/20 rounded-full flex items-center justify-center">
                <span className="text-lg">📚</span>
              </div>
              <span className="text-pure-white/90 font-medium">Publicación estimada: 2026</span>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <div className="inline-flex items-center gap-3 text-pure-white/80 text-sm">
            <div className="w-12 h-0.5 bg-gradient-to-r from-accent-secondary to-accent-coral"></div>
            <span>Donde la narrativa encuentra el futuro</span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-accent-coral to-accent-secondary"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CurrentlyWorking 