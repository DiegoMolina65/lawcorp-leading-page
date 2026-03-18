import { services } from '../content/siteContent'

function Servicios() {
  return (
    <section id="servicios" className="border-b border-brand-primary/12 px-6 py-18 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-brand-secondary">
            Servicios
          </p>
          <h2 className="mt-4 text-4xl font-bold text-brand-primary md:text-5xl">
            Áreas de trabajo orientadas a defensa, cumplimiento y continuidad operativa.
          </h2>
          <p className="mt-5 text-lg leading-8 text-brand-muted">
            Estructuramos soluciones legales para escenarios complejos donde la precisión técnica,
            la velocidad de respuesta y la estrategia procesal marcan la diferencia.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group rounded-[28px] border border-brand-primary/10 bg-white p-7 shadow-[0_18px_60px_rgba(11,61,145,0.05)] transition hover:-translate-y-1 hover:border-brand-secondary/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary text-lg font-bold text-white">
                {index + 1}
              </div>
              <h3 className="mt-6 text-2xl font-bold text-brand-primary transition group-hover:text-brand-secondary">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-brand-muted">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Servicios
