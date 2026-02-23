export default function Footer() {
  return (
    <footer
      className="border-t py-10"
      style={{ borderColor: 'var(--border)' }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-serif text-lg font-bold text-primary">
          AM<span style={{ color: 'var(--accent)' }}>.</span>
        </p>
        <p className="text-xs font-mono text-secondary">
          © {new Date().getFullYear()} Ahmed Mohamed — All rights reserved.
        </p>
        <a
          href="#home"
          className="text-xs font-mono uppercase tracking-widest text-secondary hover:text-primary transition-colors"
        >
          ↑ Back to top
        </a>
      </div>
    </footer>
  )
}
