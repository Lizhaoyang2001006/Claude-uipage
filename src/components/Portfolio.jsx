import { projects } from '../data/portfolio'

export default function Portfolio() {
  return (
    <section id="portfolio" className="min-h-screen py-24 px-6 scroll-mt-14 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-fg mb-2">作品集</h2>
      <p className="text-fg-muted text-sm mb-10">我参与和开发的项目</p>

      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <a
            key={i}
            href={p.url}
            className="group block p-6 rounded-xl bg-surface border border-border hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-dark/5"
          >
            <div className="w-10 h-10 rounded-lg bg-accent-dark/20 flex items-center justify-center text-accent font-bold text-sm mb-4">
              {String(i + 1).padStart(2, '0')}
            </div>
            <h3 className="text-fg font-medium mb-2 group-hover:text-accent transition-colors">
              {p.title}
            </h3>
            <p className="text-fg-muted text-sm leading-relaxed mb-4">{p.description}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-accent-dark/10 text-accent/80">
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
