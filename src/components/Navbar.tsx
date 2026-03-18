import { navigationItems } from '../content/siteContent'

function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-brand-primary/10 bg-white/88 px-6 py-4 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <a href="#inicio" className="flex items-center gap-4">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-primary/10 bg-brand-surface shadow-[0_12px_30px_rgba(11,61,145,0.08)]">
            <img src="/lawcorp.svg" alt="LawCorp" className="h-10 w-10 object-contain" />
          </span>
          <div>
            <p className="text-lg font-bold uppercase tracking-[0.2em] text-brand-primary">
              LawCorp
            </p>
            <p className="text-sm text-brand-muted">Defensa aduanera y corporativa</p>
          </div>
        </a>

        <div className="flex flex-wrap items-center gap-3">
          <nav className="flex flex-wrap gap-2 text-sm font-semibold text-brand-primary">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 transition hover:text-brand-secondary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contacto"
            className="rounded-full bg-brand-primary px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-secondary hover:text-brand-text"
          >
            Solicitar asesoría
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
