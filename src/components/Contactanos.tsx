import { contactChannels, firmOverview, socialNotice } from '../content/siteContent'

function Contactanos() {
  return (
    <section id="contacto" className="px-6 py-18 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)]">
        <div className="rounded-4xl bg-brand-primary p-8 text-white md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-brand-secondary">
            Contacto
          </p>
          <h2 className="mt-4 max-w-xl text-4xl font-bold leading-tight md:text-5xl">
            Agenda una conversación y evaluemos la ruta legal más sólida para tu operación.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/80">
            Atendemos consultas corporativas, tributarias, administrativas y aduaneras con una
            mirada estratégica enfocada en resultados y continuidad operativa.
          </p>

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/8 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-secondary">
              Dirección
            </p>
            <p className="mt-3 text-base leading-7">{firmOverview.office}</p>
          </div>
        </div>

        <div className="rounded-4xl border border-brand-primary/10 bg-white p-8 shadow-[0_20px_70px_rgba(11,61,145,0.06)] md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-brand-secondary">
            Canales directos
          </p>

          <div className="mt-6 space-y-4">
            {contactChannels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                className="block rounded-[22px] border border-brand-primary/10 bg-brand-surface px-5 py-4 transition hover:border-brand-secondary/50"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-muted">
                  {channel.label}
                </p>
                <p className="mt-2 text-lg font-bold text-brand-primary">{channel.value}</p>
              </a>
            ))}
          </div>

          <div className="mt-8 rounded-[22px] border border-dashed border-brand-primary/20 px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-muted">
              Redes sociales
            </p>
            <p className="mt-2 text-sm leading-7 text-brand-muted">{socialNotice}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contactanos
