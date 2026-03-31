'use client'

import { useEffect, useRef } from 'react'

const About = () => {
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

  const stats = [
    { number: "3+", label: "Años en IA", color: "text-accent" },
    { number: "15+", label: "Proyectos", color: "text-accent-secondary" },
    { number: "2.4K", label: "Seguidores", color: "text-accent-coral" },
    { number: "100+", label: "Mentees", color: "text-accent" }
  ]

  return (
    <section 
      id="about" 
      className="relative py-32 px-8"
      style={{
        background: 'linear-gradient(135deg, var(--bg-light), rgba(255, 226, 113, 0.1))'
      }}
    >
      <div 
        className="absolute top-0 right-0 w-80 h-full opacity-20 z-10"
        style={{
          backgroundImage: 'url(/img/piezas.png)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top right'
        }}
      ></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-24 items-start relative z-20">
        <div className="lg:sticky lg:top-32 animate-on-scroll">
          <h2 className="font-crimson text-5xl lg:text-6xl font-semibold text-primary-dark mb-8 leading-tight cursor-pointer transition-all duration-500 relative group">
            <span className="relative">
              Sobre mí
              <span className="absolute -bottom-4 left-0 w-0 h-1 bg-red-disruptive transition-all duration-700 ease-out group-hover:w-full"></span>
            </span>
          </h2>
          
          <p className="text-lg text-text-secondary leading-relaxed mb-12">
            Escritora y desarrolladora que combina storytelling con tecnología para
            crear experiencias que conectan tradición y modernidad. Especializada en inteligencia artificial, 
            enfocada en explorar cómo la tecnología puede amplificar la creatividad humana 
            y generar impacto social positivo.
          </p>
          
          <p className="text-lg text-text-secondary leading-relaxed mb-12">
            Mi trabajo se sitúa en la intersección entre narrativa, código y machine learning, 
            siempre con una perspectiva ética y un compromiso con la inclusión tecnológica.
          </p>
        </div>

        <div className="lg:col-span-2 animate-on-scroll">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-8 bg-pure-white rounded-lg border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className={`font-crimson text-4xl font-semibold ${stat.color} block mb-2`}>
                  {stat.number}
                </span>
                <span className="text-sm text-text-secondary uppercase tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 