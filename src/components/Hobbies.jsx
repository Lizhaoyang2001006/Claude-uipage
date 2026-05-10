import { hobbies } from '../data/hobbies'

export default function Hobbies() {
  return (
    <section id="hobbies" className="min-h-screen py-24 px-6 scroll-mt-14 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-fg mb-2">兴趣爱好</h2>
      <p className="text-fg-muted text-sm mb-10">工作之外的我</p>

      <div className="flex flex-wrap gap-4">
        {hobbies.map((h, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-5 py-3 rounded-xl bg-surface border border-border hover:border-accent/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            <span className="text-xl">{h.emoji}</span>
            <div>
              <span className="text-fg text-sm font-medium">{h.name}</span>
              <p className="text-fg-muted/70 text-xs mt-0.5">{h.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
