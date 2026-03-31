'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

interface CircularMediaProps {
  title: string;
  description: string;
  href: string;
  backgroundColor: string;
  accentColor: string;
  image: string;
  category: string;
}

const CircularMedia: React.FC<CircularMediaProps> = ({
  title,
  description,
  href,
  backgroundColor,
  accentColor,
  image,
  category
}) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group block">
      <div className="text-center space-y-4">
        {/* Círculo con imagen */}
        <div className="relative mx-auto w-32 h-32 md:w-40 md:h-40 transition-transform duration-300 group-hover:scale-105">
          {/* Fondo circular */}
          <div 
            className="w-full h-full rounded-full flex items-center justify-center shadow-lg overflow-hidden border-4 border-white"
            style={{ backgroundColor }}
          >
            {/* Imagen */}
            <div className="relative w-24 h-24 md:w-32 md:h-32 transition-transform duration-300 group-hover:scale-110">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover rounded-full"
                sizes="(max-width: 768px) 96px, 128px"
              />
            </div>
          </div>
          
          {/* Acento decorativo */}
          <div 
            className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full opacity-80"
            style={{ backgroundColor: accentColor }}
          />
        </div>

        {/* Información */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-accent uppercase tracking-wider">
            {category}
          </p>
          <h3 className="font-crimson text-xl md:text-2xl font-bold text-primary-dark group-hover:text-accent-secondary transition-colors">
            {title}
          </h3>
          <p className="text-text-secondary text-sm md:text-base max-w-xs mx-auto leading-relaxed">
            {description}
          </p>
          
          {/* Call to action */}
          <div className="pt-2">
            <span className="inline-flex items-center gap-2 text-text-primary font-medium text-sm tracking-wide transition-all duration-300 group-hover:gap-4 group-hover:text-accent-secondary">
              <span className="relative">
                {category === "ENTREVISTA" ? "Ver entrevista" : category === "DEMO CLASS" ? "Ver clase" : "Leer newsletter"}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-accent-secondary transition-all duration-500 group-hover:w-full"></span>
              </span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                {category === "CONTENT" ? "📖" : "▶️"}
              </span>
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

const Media = () => {
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

  const mediaItems = [
    {
      title: "Entrevista sobre IA y Creatividad",
      description: "Conversación profunda sobre el impacto de la inteligencia artificial en procesos creativos y cómo la tecnología puede amplificar la creatividad humana.",
      href: "https://youtu.be/kxUyG7L5FPA?si=3vXWwih8oUg--oUX",
      backgroundColor: "#A7C6ED", // Azul suave (como tu página)
      accentColor: "#F59E0B", // Amarillo dorado - complementa el azul
      image: "/img/podcast.png",
      category: "ENTREVISTA"
    },
    {
      title: "Clase Demostrativa de Creatividad",
      description: "Clase práctica donde demuestro metodologías y herramientas para integrar tecnología con propósito creativo y social.",
      href: "https://youtu.be/T4ABDEDyhuo",
      backgroundColor: "#F59E0B", // Amarillo dorado (como tu página)
      accentColor: "#A7C6ED", // Azul suave - complementa el amarillo
      image: "/img/clase.png",
      category: "DEMO CLASS"
    },
    {
      title: "Newsletter Semanal",
      description: "Newsletter donde comparto reflexiones sobre arte, creatividad, tecnología e introspección. Contenido regular sobre la intersección entre narrativa y tecnología.",
      href: "https://juliagomezg.beehiiv.com/",
      backgroundColor: "#F97316", // Naranja (como tu página)
      accentColor: "#EF4444", // Rojito - contrasta perfecto con el naranja
      image: "/img/newsletter.png",
      category: "CONTENT"
    }
  ]

  return (
    <section id="media" className="py-16 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-sm tracking-widest uppercase text-text-secondary mb-4 font-medium">
            Media & Contenido
          </div>
          <h2 className="font-crimson text-5xl lg:text-6xl font-semibold text-center mb-12 text-primary-dark relative tracking-tight cursor-pointer transition-all duration-500 group">
            <span className="relative">
              En los medios
              <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-accent-secondary transition-all duration-700 ease-out group-hover:w-full"></span>
            </span>
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-accent-coral to-accent rounded-full opacity-100 group-hover:opacity-0 transition-opacity duration-300"></span>
          </h2>
        </div>

        {/* Grid de íconos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {mediaItems.map((item, index) => (
            <div 
              key={index}
              className="animate-on-scroll opacity-100 translate-y-0"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CircularMedia {...item} />
            </div>
          ))}
        </div>

        {/* Footer decorativo */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-sm text-text-secondary">
            <div className="w-8 h-px bg-gradient-to-r from-yellow-400 to-red-400"></div>
            <span>Conectando creatividad, tecnología y propósito</span>
            <div className="w-8 h-px bg-gradient-to-r from-red-400 to-blue-400"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Media 