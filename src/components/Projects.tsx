'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ProjectType } from '@/types'

const projects: ProjectType[] = [
  {
    id: 1,
    title: '"La Puerta de mi Pueblo"',
    category: "Escritura",
    description: "Obra literaria que explora las conexiones entre tradición y modernidad, narrando historias que conectan generaciones a través de la tecnología.",
    image: "/img/libro-la-puerta-de-mi-pueblo.jpg",
    emoji: "📚",
    link: "https://www.amazon.com.mx/puerta-mi-pueblo-Spanish/dp/B0BZFPJT7X"
  },
  {
    id: 2,
    title: "Calculadora Financiera para Emprendedores",
    category: "Full Stack Development",
    description: "Aplicación web PWA construida con React 18, TypeScript y Vite. Incluye generación de reportes PDF, backend con Supabase, testing automatizado y diseño responsive con TailwindCSS para cálculos financieros empresariales.",
    image: "/img/calculadora-emprendedora.png",
    emoji: "💰",
    link: "https://calculadora-financiera-emprendedore-iota.vercel.app/"
  },
  {
    id: 3,
    title: "WikiAi",
    category: "AI & Web Development",
    description: "Plataforma de noticias impulsada por IA construida con Next.js 15 y TypeScript. Incluye curación automática de noticias con modelos de Hugging Face, análisis de sentimiento, asistente virtual (WikiBot) y diseño moderno con shadcn/ui.",
    image: "/img/wikiai.png",
    emoji: "🤖",
    link: "#" // Placeholder hasta que esté desplegado
  },
  {
    id: 4,
    title: "Store Dashboard Pro",
    category: "Business Management",
    description: "Sistema de gestión empresarial completo con reconocimiento de voz IA, roles manager/supervisor, control de inventario en tiempo real y dashboard financiero. Construido con Next.js 15, Supabase y Whisper AI.",
    image: "/img/fresh-store.png",
    emoji: "🌱",
    link: ""
  },
  {
    id: 5,
    title: "Carta Astral & Diseño Humano",
    category: "Web Development",
    description: "Plataforma web moderna construida con Astro v5, React 18 y Tailwind CSS. Incluye diseño glassmorphism, carrusel automático de testimonios, integración WhatsApp con QR, y sistema de blog con Content Collections.",
    image: "/img/hero-meditation.png",
    emoji: "🔮",
    link: "https://www.astralhumandesign.com"
  },
  {
    id: 6,
    title: "Sonora en un Sorbo",
    category: "Creative Web Development",
    description: "Experiencia digital inmersiva que celebra la cultura sonorense a través de 12 cócteles únicos. Construida con React 19, TypeScript, Vite y Swiper.js. Incluye storytelling interactivo, fondos dinámicos rotando cada 10s, panel lateral deslizante y diseño responsivo mobile-first.",
    image: "/img/atardecer4.jpg",
    emoji: "🍸",
    link: "https://github.com/juliagomezg/tragoss"
  },
]

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0)
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    }

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up')
        }
      })
    }, observerOptions)

    const sectionHeader = document.querySelector('.section-header')
    if (sectionHeader) {
      observerRef.current.observe(sectionHeader)
    }

    const projectContainer = document.querySelector('.project-showcase')
    if (projectContainer) {
      observerRef.current.observe(projectContainer)
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  const handleProjectChange = (index: number) => {
    setIsImageLoaded(false)
    setCurrentProject(index)
  }

  const handleImageLoad = () => {
    setIsImageLoaded(true)
  }

  return (
    <section id="projects" className="pt-16 pb-32 px-4 lg:px-8 max-w-7xl mx-auto">
      <div className="section-header text-center mb-16 lg:mb-24">
        <div className="text-sm tracking-widest uppercase text-text-secondary mb-4 font-medium">
          Proyectos seleccionados
        </div>
        <h2 className="font-crimson text-4xl lg:text-6xl font-semibold text-center mb-8 lg:mb-12 text-primary-dark relative tracking-tight cursor-pointer transition-all duration-500 group">
          <span className="relative">
            Trabajo reciente
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-accent-secondary transition-all duration-700 ease-out group-hover:w-full"></span>
          </span>
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-accent to-accent rounded-full opacity-100 group-hover:opacity-0 transition-opacity duration-300"></span>
        </h2>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden mb-8">
        <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => handleProjectChange(index)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                currentProject === index
                  ? 'bg-accent text-white'
                  : 'bg-gray-100 text-text-secondary hover:bg-gray-200'
              }`}
            >
              {project.emoji} {project.title.length > 20 ? project.title.substring(0, 17) + '...' : project.title}
            </button>
          ))}
        </div>
      </div>

      {/* Split-Screen Layout */}
      <div className="project-showcase">
        {/* Mobile: Full-screen image with overlay */}
        <div className="lg:hidden">
          <div className="relative h-[70vh] rounded-2xl overflow-hidden mb-6">
            <div className={`absolute inset-0 transition-opacity duration-500 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <Image
                src={projects[currentProject].image}
                alt={projects[currentProject].title}
                fill
                className="object-cover"
                onLoad={handleImageLoad}
                priority={currentProject === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            
            {/* Loading skeleton */}
            {!isImageLoaded && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                <div className="text-4xl">{projects[currentProject].emoji}</div>
              </div>
            )}

            {/* Mobile overlay content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="text-xs uppercase tracking-wide mb-2 opacity-90">
                {projects[currentProject].category}
              </div>
              <h3 className="font-crimson text-2xl font-bold mb-3 leading-tight">
                {projects[currentProject].title}
              </h3>
              <p className="text-sm leading-relaxed opacity-90 mb-4 line-clamp-3">
                {projects[currentProject].description}
              </p>
              <a
                href={projects[currentProject].link}
                className="inline-flex items-center gap-2 text-white/90 hover:text-white no-underline font-medium text-sm tracking-wide transition-all duration-300"
              >
                <span>Ver proyecto</span>
                <span className="transition-transform duration-300 hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Desktop: Side-by-side layout */}
        <div className="hidden lg:flex gap-0 h-[80vh] rounded-2xl overflow-hidden bg-white border border-border shadow-xl">
          {/* Left: Image (60%) */}
          <div className="w-[60%] relative">
            <div className={`absolute inset-0 transition-opacity duration-500 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <Image
                src={projects[currentProject].image}
                alt={projects[currentProject].title}
                fill
                className="object-cover"
                onLoad={handleImageLoad}
                priority={currentProject === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent-secondary/5"></div>
            </div>
            
            {/* Loading skeleton */}
            {!isImageLoaded && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                <div className="text-6xl">{projects[currentProject].emoji}</div>
              </div>
            )}

            {/* Navigation arrows */}
            <button
              onClick={() => handleProjectChange(currentProject > 0 ? currentProject - 1 : projects.length - 1)}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={() => handleProjectChange(currentProject < projects.length - 1 ? currentProject + 1 : 0)}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Right: Content (40%) */}
          <div className="w-[40%] p-12 flex flex-col justify-center">
            <div className="max-w-lg">
              <div className="text-xs uppercase tracking-wide text-accent-coral mb-6 font-semibold bg-accent-coral/10 px-4 py-2 rounded-xl inline-block">
                {projects[currentProject].category}
              </div>
              
              <h3 className="font-crimson text-3xl lg:text-4xl font-bold mb-6 text-primary-dark leading-tight">
                {projects[currentProject].title}
              </h3>
              
              <p className="text-text-secondary leading-relaxed mb-8 text-lg">
                {projects[currentProject].description}
              </p>
              
              <a
                href={projects[currentProject].link}
                className="inline-flex items-center gap-3 text-text-primary hover:text-accent-secondary no-underline font-semibold text-lg tracking-wide transition-all duration-300 group"
              >
                <span className="relative">
                  {projects[currentProject].category === "Escritura" ? "Ver en Amazon" : "Ver proyecto"}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-secondary transition-all duration-500 group-hover:w-full"></span>
                </span>
                <span className="transition-transform duration-300 group-hover:translate-x-1 text-xl">→</span>
              </a>

              {/* Desktop project navigation */}
              <div className="mt-12">
                <div className="flex gap-3 flex-wrap">
                  {projects.map((project, index) => (
                    <button
                      key={project.id}
                      onClick={() => handleProjectChange(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentProject === index
                          ? 'bg-accent-secondary scale-110'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Ver proyecto: ${project.title}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects 