'use client'

import { useEffect, useRef } from 'react'

const Contact = () => {
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

  const contactLinks = [
    {
      type: "Email",
      icon: "@",
      url: "mailto:juliagomez19@gmail.com",
      bgColor: "bg-accent"
    },
    {
      type: "LinkedIn", 
      icon: "in",
      url: "https://linkedin.com/in/juliagomezg",
      bgColor: "bg-accent-secondary",
      textColor: "text-text-primary"
    },
    {
      type: "GitHub",
      icon: "{ }",
      url: "https://github.com/juliagomezg", 
      bgColor: "bg-accent-coral"
    },
    {
      type: "Instagram",
      icon: "📷",
      url: "https://instagram.com/juliagomezg",
      bgColor: "bg-accent"
    }
  ]

  return (
    <section 
      id="contact" 
      className="py-32 px-8 max-w-7xl mx-auto text-center relative"
      style={{
        backgroundImage: 'url(/img/sobre-colores.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="absolute inset-0 bg-white/85 z-10"></div>
      
      <div className="relative z-20 animate-on-scroll">
        <h2 className="font-crimson text-5xl lg:text-6xl font-semibold text-primary-dark mb-8 leading-tight cursor-pointer transition-all duration-500 relative group">
          <span className="relative">
            Conectemos
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-red-disruptive transition-all duration-700 ease-out group-hover:w-full"></span>
          </span>
        </h2>
        
        <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
          ¿Tienes un proyecto de IA con impacto social? ¿Necesitas mentoría en tech? 
          ¿Quieres colaborar en contenido editorial? Hablemos.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-12 flex-wrap">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 text-text-primary no-underline transition-all duration-300 p-6 rounded-lg border border-transparent bg-white/80 backdrop-blur-sm hover:border-border hover:bg-white/95 hover:-translate-y-1"
            >
              <div className={`w-6 h-6 ${link.bgColor} rounded-full flex items-center justify-center text-xs ${link.textColor || 'text-pure-white'}`}>
                {link.icon}
              </div>
              <span>{link.type}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact 