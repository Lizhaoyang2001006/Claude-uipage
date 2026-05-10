import { useState, useEffect, useRef } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Hobbies from './components/Hobbies'
import Footer from './components/Footer'

const SECTION_IDS = ['hero', 'resume', 'portfolio', 'hobbies']

export default function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const observerRef = useRef(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observerRef.current.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <div className="scroll-smooth">
      <NavBar activeSection={activeSection} />
      <main>
        <Hero />
        <Resume />
        <Portfolio />
        <Hobbies />
      </main>
      <Footer />
    </div>
  )
}
