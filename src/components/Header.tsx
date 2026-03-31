'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
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
    <header 
      className={`fixed top-0 left-0 right-0 z-50 border-b border-border p-4 animate-slide-down transition-all duration-300 ${
        scrolled 
          ? 'bg-white/98 backdrop-blur-xl' 
          : 'bg-white/95 backdrop-blur-xl'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <Link 
          href="#" 
          className="font-crimson text-2xl font-semibold text-primary-dark no-underline"
        >
          Julia Gómez
        </Link>
        
        <ul className="hidden md:flex gap-8 list-none">
          <li>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-text-secondary no-underline text-sm font-normal tracking-wide transition-colors duration-300 hover:text-accent cursor-pointer bg-transparent border-none"
            >
              Proyectos
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('currently-working')}
              className="text-text-secondary no-underline text-sm font-normal tracking-wide transition-colors duration-300 hover:text-accent cursor-pointer bg-transparent border-none"
            >
              En Curso
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('media')}
              className="text-text-secondary no-underline text-sm font-normal tracking-wide transition-colors duration-300 hover:text-accent cursor-pointer bg-transparent border-none"
            >
              Media
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('blog')}
              className="text-text-secondary no-underline text-sm font-normal tracking-wide transition-colors duration-300 hover:text-accent cursor-pointer bg-transparent border-none"
            >
              Newsletter
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('about')}
              className="text-text-secondary no-underline text-sm font-normal tracking-wide transition-colors duration-300 hover:text-accent cursor-pointer bg-transparent border-none"
            >
              Sobre mí
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-text-secondary no-underline text-sm font-normal tracking-wide transition-colors duration-300 hover:text-accent cursor-pointer bg-transparent border-none"
            >
              Contacto
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header 