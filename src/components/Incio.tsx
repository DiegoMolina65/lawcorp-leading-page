import { firmOverview, heroStats } from '../content/siteContent'
import { useThemePalette } from '../hooks/useThemePalette'

export function Incio() {
  const palette = useThemePalette()

  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-brand-primary/12 px-6 pb-18 pt-16 md:pb-24 md:pt-24"
    >
      <div
        className="absolute -right-20 -top-16 h-72 w-72 rounded-full blur-3xl"
        style={{ backgroundColor: `${palette.secondary}20` }}
      />
      <div
        className="absolute left-0 top-32 h-64 w-64 rounded-full blur-3xl"
        style={{ backgroundColor: `${palette.primary}12` }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-10 md:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-brand-secondary">
            {firmOverview.eyebrow}
          </p>
          <h1
            className="mt-5 max-w-4xl text-5xl leading-tight font-extrabold md:text-7xl"
            style={{ color: palette.primary }}
          >
            {firmOverview.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-muted md:text-xl">
            {firmOverview.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="rounded-full bg-brand-primary px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-secondary hover:text-brand-text"
            >
              Solicitar asesoría
            </a>
            <a
              href="#socios"
              className="rounded-full border border-brand-primary/20 px-6 py-3 text-sm font-bold text-brand-primary transition hover:border-brand-secondary hover:text-brand-secondary"
            >
              Ver socios fundadores
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {heroStats.map((stat) => (
              <article
                key={stat.label}
                className="rounded-3xl border border-brand-primary/10 bg-white p-5 shadow-[0_18px_60px_rgba(11,61,145,0.06)]"
              >
                <p className="text-3xl font-extrabold text-brand-primary">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-brand-muted">
                  {stat.label}
                </p>
              </article>
            ))}
          </div>
        </div>

        <aside className="rounded-4xl bg-brand-primary p-8 text-white shadow-[0_30px_90px_rgba(11,61,145,0.18)] md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-secondary">
            Enfoque de firma
          </p>
          <h2 className="mt-5 text-3xl font-bold leading-tight">
            Respuesta jurídica seria para operaciones que no admiten
            improvisación.
          </h2>
          <p className="mt-5 text-base leading-8 text-white/80">
            Diseñamos estrategia, ejecución y defensa para fiscalizaciones,
            procesos administrativos, litigios especializados y decisiones
            corporativas de alto impacto.
          </p>

          <div className="mt-8 space-y-4">
            <div className="rounded-3xl border border-white/10 bg-white/8 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-secondary">
                Dirección
              </p>
              <p className="mt-3 text-base leading-7">{firmOverview.office}</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/8 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-secondary">
                Correo corporativo
              </p>
              <a
                href={`mailto:${firmOverview.email}`}
                className="mt-3 inline-block text-base font-semibold transition hover:text-brand-secondary"
              >
                {firmOverview.email}
              </a>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/8 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-secondary">
                Cobertura
              </p>
              <p className="mt-3 text-base leading-7">
                Derecho aduanero, tributario, administrativo, constitucional y
                asesoría corporativa.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Incio
