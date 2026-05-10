import { experience, education } from '../data/resume'

function Timeline({ items }) {
  return (
    <div className="relative">
      <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-border" />
      {items.map((item, i) => (
        <div key={i} className="flex gap-4 pb-8 last:pb-0">
          <div className="relative z-10 mt-1.5 w-6 h-6 rounded-full bg-surface border-2 border-accent flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <span className="text-xs text-accent font-mono">{item.period}</span>
            <h3 className="text-fg font-medium mt-1">{item.title}</h3>
            <p className="text-fg-muted text-sm">{item.company}</p>
            <p className="text-fg-muted/80 text-sm mt-1 leading-relaxed">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Resume() {
  return (
    <section id="resume" className="min-h-screen py-24 px-6 scroll-mt-14 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold text-fg mb-2">简历</h2>
      <p className="text-fg-muted text-sm mb-10">我的工作和学习经历</p>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-lg font-medium text-accent mb-6">工作经历</h3>
          <Timeline items={experience} />
        </div>
        <div>
          <h3 className="text-lg font-medium text-accent mb-6">教育</h3>
          <Timeline items={education} />
        </div>
      </div>
    </section>
  )
}
