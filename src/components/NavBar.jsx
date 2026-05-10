import { useState, useEffect } from 'react'

const SECTIONS = [
  { id: 'hero', label: '首页' },
  { id: 'resume', label: '简历' },
  { id: 'portfolio', label: '作品集' },
  { id: 'hobbies', label: '兴趣' },
]

export default function NavBar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <button onClick={() => scrollTo('hero')} className="text-accent font-semibold tracking-wide">
          清水
        </button>
        <div className="flex gap-6">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`text-sm transition-colors duration-200 ${
                activeSection === s.id
                  ? 'text-accent'
                  : 'text-fg-muted hover:text-fg'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
