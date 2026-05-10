export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6 text-center">
      <div className="flex justify-center gap-4 mb-4">
        <a href="#" className="text-fg-muted hover:text-accent transition-colors text-sm">GitHub</a>
        <a href="#" className="text-fg-muted hover:text-accent transition-colors text-sm">邮箱</a>
      </div>
      <p className="text-fg-muted/50 text-xs">&copy; {new Date().getFullYear()} 清水. All rights reserved.</p>
    </footer>
  )
}
