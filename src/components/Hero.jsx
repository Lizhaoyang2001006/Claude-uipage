export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-6 scroll-mt-0"
    >
      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent-dark to-accent flex items-center justify-center text-3xl font-bold text-bg mb-6 shadow-lg shadow-accent-dark/20">
        清
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-fg mb-3">清水</h1>
      <p className="text-fg-muted text-lg md:text-xl mb-8 text-center max-w-md">
        前端开发工程师 · 喜欢用代码创造美好的事物
      </p>
      <div className="animate-bounce text-fg-muted/50">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
