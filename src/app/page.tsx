import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import TypewriterBook from '@/components/TypewriterBook'
import Media from '@/components/Media'
import Blog from '@/components/Blog'
import About from '@/components/About'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Projects />
      <TypewriterBook />
      <Media />
      <Blog />
      <About />
      <Contact />
    </main>
  )
} 