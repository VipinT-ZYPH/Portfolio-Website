import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="scroll-mt-16">
        <Hero />
      </section>
      <section className="scroll-mt-16">
        <Skills />
      </section>
      <section className="scroll-mt-16">
        <Projects />
      </section>
      <section className="scroll-mt-16">
        <Contact />
      </section>
    </main>
  )
}
