'use client'

import Image from 'next/image'

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      const headerHeight = 80
      const targetPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 px-8 max-w-7xl mx-auto">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="animate-slide-up text-center lg:text-left">
          <div className="relative w-32 h-32 mb-6 mx-auto lg:mx-0">
            <Image
              src="/img/cerebro.png"
              alt="Julia Gómez - Escritora Creativa & Desarrolladora enfocada en Inteligencia Artificial"
              width={120}
              height={120}
              className="rounded-full object-cover border-4 border-accent shadow-lg"
              priority
            />
            <div className="absolute -bottom-1 -right-1 w-9 h-9 bg-pure-white rounded-full flex items-center justify-center text-xl border-2 border-accent-coral shadow-md">
              🤖
            </div>
          </div>
          
          <div className="text-sm tracking-widest uppercase text-text-secondary mb-6 font-medium">
            Portfolio 2025
          </div>
          
          <h1 className="font-crimson text-6xl lg:text-7xl font-semibold leading-tight text-primary-dark mb-8 tracking-tight">
            Julia Gómez
          </h1>
          
          <p className="text-xl text-text-secondary leading-relaxed mb-8 font-light">
            Escritora Creativa & Desarrolladora enfocada en Inteligencia Artificial
          </p>
          
          <p className="text-lg text-text-secondary leading-relaxed mb-10 font-light">
            Explorando la intersección entre narrativa humana e inteligencia artificial. 
            Creando contenido que conecta tecnología con propósito social.
          </p>
          
          <button
            onClick={scrollToProjects}
            className="inline-flex items-center gap-3 text-text-primary bg-transparent p-0 border-none no-underline font-semibold text-xl tracking-wide transition-all duration-500 relative uppercase font-crimson group cursor-pointer"
          >
            <span className="relative">
              Ver mi trabajo
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-red-disruptive transition-all duration-700 ease-out group-hover:w-full"></span>
            </span>
            <span className="text-2xl transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>
        
        <div className="animate-slide-up-delay">
          <div 
            className="bg-pure-white border border-border rounded-xl p-12 shadow-xl relative"
            style={{
              backgroundImage: 'url(/img/lineas.png)',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay'
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-coral to-accent-secondary rounded-t-xl"></div>
            
            <div className="text-xs uppercase tracking-wide text-text-secondary mb-6 font-medium">
              Especialidades
            </div>
            
            <div className="flex flex-col gap-6">
              {[
                { name: 'Narrativa Digital', type: 'Escritura' },
                { name: 'Machine Learning', type: 'AI Development' },
                { name: 'Frontend Development', type: 'Code' },
                { name: 'Tech Mentoring', type: 'Leadership' }
              ].map((specialty, index) => (
                <div key={index} className="flex justify-between items-center pb-4 border-b border-border last:border-b-0 last:pb-0">
                  <span className="font-crimson text-xl font-semibold text-primary-dark">
                    {specialty.name}
                  </span>
                  <span className="text-xs text-text-secondary tracking-wide uppercase">
                    {specialty.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 