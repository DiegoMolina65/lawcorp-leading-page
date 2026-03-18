import { partners } from '../content/siteContent'

function Equipo() {
  return (
    <section id="socios" className="border-b border-brand-primary/12 px-6 py-18 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-brand-secondary">
            Socios fundadores
          </p>
          <h2 className="mt-4 text-4xl font-bold text-brand-primary md:text-5xl">
            Trayectoria jurídica, visión institucional y defensa especializada.
          </h2>
          <p className="mt-5 text-lg leading-8 text-brand-muted">
            El equipo directivo de la firma concentra experiencia en derecho aduanero, tributario,
            constitucional y representación estratégica frente a entidades públicas y procesos
            complejos.
          </p>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-3">
          {partners.map((partner) => (
            <article
              key={partner.name}
              className="flex h-full flex-col rounded-[30px] border border-brand-primary/10 bg-white p-8 shadow-[0_20px_70px_rgba(11,61,145,0.06)]"
            >
              <div className="flex items-center gap-5">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-surface text-2xl font-extrabold text-brand-primary">
                  {partner.initials}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-secondary">
                    {partner.status}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-brand-primary">{partner.name}</h3>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-brand-muted">
                    {partner.role}
                  </p>
                </div>
              </div>

              <p className="mt-8 text-sm leading-7 text-brand-muted">{partner.profile}</p>
              <p className="mt-5 text-sm leading-7 text-brand-muted">{partner.experience}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Equipo
