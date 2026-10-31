import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Disciplines from '@/components/Disciplines'
import Projects from '@/components/Projects'
import Book from '@/components/Book'
import Media from '@/components/Media'
import About from '@/components/About'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <div className="mx-auto max-w-page px-gutter">
          <Disciplines />
          <Projects />
          <Book />
          <Media />
          <About />
          <Newsletter />
        </div>
      </main>
      <Footer />
    </>
  )
}
