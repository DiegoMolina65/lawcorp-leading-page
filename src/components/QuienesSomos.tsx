import { differentiators, firmOverview } from '../content/siteContent'

function QuienesSomos() {
  return (
    <section id="firma" className="border-b border-brand-primary/12 px-6 py-18 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-brand-secondary">
            Quiénes somos
          </p>
          <h2 className="mt-4 max-w-xl text-4xl font-bold text-brand-primary md:text-5xl">
            Una firma construida para defender operaciones sensibles y decisiones estratégicas.
          </h2>
        </div>

        <div>
          <p className="text-lg leading-8 text-brand-muted">
            {firmOverview.description} Nuestro trabajo combina experiencia institucional, dominio
            procesal y comprensión práctica del entorno empresarial y de comercio internacional.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {differentiators.map((item) => (
              <article
                key={item.title}
                className="rounded-[24px] border border-brand-primary/10 bg-brand-surface p-6"
              >
                <h3 className="text-xl font-bold text-brand-primary">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-brand-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default QuienesSomos
