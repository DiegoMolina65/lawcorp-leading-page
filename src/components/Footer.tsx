import logo from '../assets/images/LOGOTIPOLAWCORPDORADO.png'
import { firmOverview } from '../content/siteContent'

function Footer() {
  return (
    <footer className="border-t border-brand-primary/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-4">
          <img
            src={logo}
            alt="Logotipo LawCorp"
            className="h-16 w-auto max-w-[260px] object-contain object-left"
          />
          <p className="max-w-xl text-sm leading-6 text-brand-muted">
            Firma orientada a defensa aduanera, tributaria, administrativa, constitucional y
            asesoría corporativa para empresas y operadores de comercio internacional.
          </p>
        </div>

        <div className="text-sm leading-7 text-brand-muted md:text-right">
          <p>{firmOverview.office}</p>
          <a href={`mailto:${firmOverview.email}`} className="font-semibold text-brand-primary">
            {firmOverview.email}
          </a>
          <p className="mt-2">© {new Date().getFullYear()} LawCorp. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
