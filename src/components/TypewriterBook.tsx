'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'

interface TypewriterBookProps {
  className?: string;
}

const TypewriterBook: React.FC<TypewriterBookProps> = ({ className = "" }) => {
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
    <section id="currently-working" className={`relative py-20 bg-gradient-to-br from-yellow-50 to-orange-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
            CURRENTLY WORKING
          </p>
          <h1 className="font-crimson text-4xl md:text-6xl font-bold text-primary-dark mb-4 relative tracking-tight cursor-pointer transition-all duration-500 group">
            <span className="relative">
              En progreso
              <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-accent-secondary transition-all duration-700 ease-out group-hover:w-full"></span>
            </span>
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-accent-coral to-accent rounded-full opacity-100 group-hover:opacity-0 transition-opacity duration-300"></span>
          </h1>
        </div>

        {/* Contenido principal con imagen */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Imagen de la máquina de escribir */}
          <div className="relative animate-on-scroll opacity-100 translate-y-0">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/img/typewriter-desk.png"
                alt="Máquina de escribir vintage representando el proceso de escritura"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Badge flotante minimalista */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-accent flex items-center space-x-1">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <span>En proceso de escritura</span>
              </div>
            </div>
          </div>

          {/* Contenido del texto - Simplificado */}
          <div className="space-y-6 animate-on-scroll opacity-100 translate-y-0">
            <div>
              <h2 className="font-crimson text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark mb-6">
                Mi Próximo Libro
              </h2>
              
              <div className="text-xl text-text-primary leading-relaxed min-h-[4rem]">
                <Typewriter
                  options={{
                    strings: [
                      'Actualmente estoy escribiendo mi siguiente obra literaria que explora la evolución de la narrativa humana en la era de la inteligencia artificial.',
                      'Espéralo 2026 📚✨'
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 30,
                    deleteSpeed: 25,
                    cursor: '|'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer decorativo */}
        <div className="text-center mt-16 animate-on-scroll">
          <div className="inline-flex items-center space-x-2 text-sm text-text-secondary">
            <div className="w-8 h-px bg-gradient-to-r from-yellow-400 to-orange-400"></div>
            <span className="italic font-crimson">"Donde la narrativa encuentra el futuro"</span>
            <div className="w-8 h-px bg-gradient-to-r from-orange-400 to-yellow-400"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypewriterBook; 