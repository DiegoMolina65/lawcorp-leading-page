import React from 'react'
import logoLawCorp from '../assets/images/LOGOTIPOLAWCORPDORADO.png'

const WHATSAPP_URL =
  'https://wa.me/59171091917?text=Hola%2C%20me%20comunico%20desde%20la%20p%C3%A1gina%20web%20de%20LawCorp%20y%20quisiera%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios.'

const INSTAGRAM_URL = 'https://www.instagram.com/lawcorpbo?igsh=Z3QwMGdycDBrZ3d4'

const LINKS = [
  { label: 'Inicio',         href: '#inicio' },
  { label: 'Quiénes Somos', href: '#quienes-somos' },
  { label: 'Servicios',      href: '#servicios' },
  { label: 'Contáctenos',    href: '#contacto' },
]

const SERVICIOS_LINKS = [
  'Derecho Tributario',
  'Comercio Exterior y Derecho Aduanero',
  'Derecho Corporativo y Comercial',
  'Derecho Administrativo y Regulatorio',
  'Derecho Civil',
  'Derecho Penal',
]

function IconoWhatsApp() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.304A9.956 9.956 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.952 7.952 0 0 1-4.053-1.107l-.29-.173-2.956.775.789-2.879-.19-.298A7.96 7.96 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
    </svg>
  )
}

function IconoInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function PiePagina() {
  const year = new Date().getFullYear()

  const linkHoverEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = '#D4AF37'
    e.currentTarget.style.paddingLeft = '6px'
  }
  const linkHoverLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = 'rgba(255,255,255,0.45)'
    e.currentTarget.style.paddingLeft = '0'
  }

  const socialHoverEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.borderColor = 'rgba(212,175,55,0.6)'
    e.currentTarget.style.color = '#D4AF37'
    e.currentTarget.style.backgroundColor = 'rgba(212,175,55,0.08)'
    e.currentTarget.style.transform = 'translateY(-3px)'
  }
  const socialHoverLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
    e.currentTarget.style.color = 'rgba(255,255,255,0.5)'
    e.currentTarget.style.backgroundColor = 'transparent'
    e.currentTarget.style.transform = 'translateY(0)'
  }

  return (
    <footer
      style={{
        background: '#040e24',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ── SVG de Transición Fluida Inversa ── */}
      <div style={{ lineHeight: 0, backgroundColor: 'transparent', width: '100%' }}>
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
          style={{ display: 'block', width: '100%', height: '60px', transform: 'scaleY(-1)' }}>
          <path d="M0,0 C360,80 1080,0 1440,60 L1440,80 L0,80 Z" fill="#040e24" />
        </svg>
      </div>

      {/* Patrón de puntos sutil */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(212,175,55,0.04) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        top: '60px'
      }} />

      {/* Brillo decorativo izquierdo */}
      <div style={{
        position: 'absolute', top: '20px', left: '-120px',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(11,61,145,0.18) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      {/* ── Cuerpo principal ── */}
      <div style={{
        maxWidth: '1100px', margin: '0 auto',
        padding: '2rem 2rem 2rem',
        position: 'relative', zIndex: 1,
      }}>

        {/* Grid superior */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem',
        }}>

          {/* Columna 1 — Marca */}
          <div style={{ maxWidth: '260px' }}>
            <div style={{ marginBottom: '1.25rem' }}>
              <img
                src={logoLawCorp}
                alt="LawCorp"
                style={{
                  height: '215px',
                  width: '215px',
                  objectFit: 'contain',
                  objectPosition: 'left center',
                  display: 'block',
                  borderRadius: '6px',
                  mixBlendMode: 'lighten',
                }}
              />
            </div>

            <p style={{
              fontFamily: '"Open Sans", sans-serif',
              fontSize: '0.85rem', lineHeight: 1.8,
              color: 'rgba(255,255,255,0.45)',
              margin: '0 0 1.5rem',
            }}>
              Firma jurídica especializada en derecho tributario, aduanero y comercial. Defendemos sus intereses con rigor y precisión.
            </p>

            {/* Redes sociales */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
                style={{
                  width: '38px', height: '38px', borderRadius: '10px',
                  border: '1px solid rgba(255,255,255,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.5)',
                  textDecoration: 'none',
                  transition: 'all 0.22s ease',
                }}
                onMouseEnter={socialHoverEnter}
                onMouseLeave={socialHoverLeave}
              >
                <IconoWhatsApp />
              </a>
              
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                style={{
                  width: '38px', height: '38px', borderRadius: '10px',
                  border: '1px solid rgba(255,255,255,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.5)',
                  textDecoration: 'none',
                  transition: 'all 0.22s ease',
                }}
                onMouseEnter={socialHoverEnter}
                onMouseLeave={socialHoverLeave}
              >
                <IconoInstagram />
              </a>
            </div>
          </div>

          {/* Columna 2 — Navegación */}
          <div>
            <p style={{
              fontFamily: '"Montserrat", sans-serif', fontWeight: 700,
              fontSize: '10px', letterSpacing: '2.5px', textTransform: 'uppercase',
              color: '#D4AF37', margin: '0 0 1.25rem',
            }}>Navegación</p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    style={{
                      fontFamily: '"Open Sans", sans-serif',
                      fontSize: '0.88rem',
                      color: 'rgba(255,255,255,0.45)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease, padding-left 0.2s ease',
                      display: 'inline-block',
                    }}
                    onMouseEnter={linkHoverEnter}
                    onMouseLeave={linkHoverLeave}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3 — Servicios */}
          <div>
            <p style={{
              fontFamily: '"Montserrat", sans-serif', fontWeight: 700,
              fontSize: '10px', letterSpacing: '2.5px', textTransform: 'uppercase',
              color: '#D4AF37', margin: '0 0 1.25rem',
            }}>Áreas de Práctica</p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {SERVICIOS_LINKS.map((s) => (
                <li key={s}>
                  <a
                    href="#servicios"
                    style={{
                      fontFamily: '"Open Sans", sans-serif',
                      fontSize: '0.88rem',
                      color: 'rgba(255,255,255,0.45)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease, padding-left 0.2s ease',
                      display: 'inline-block',
                    }}
                    onMouseEnter={linkHoverEnter}
                    onMouseLeave={linkHoverLeave}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4 — Contacto rápido */}
          <div>
            <p style={{
              fontFamily: '"Montserrat", sans-serif', fontWeight: 700,
              fontSize: '10px', letterSpacing: '2.5px', textTransform: 'uppercase',
              color: '#D4AF37', margin: '0 0 1.25rem',
            }}>Contacto</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span style={{ fontFamily: '"Open Sans", sans-serif', fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>
                  Calle Gral. Saavedra N° 453<br />Edificio Alegranza
                </span>
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.07 3.4 2 2 0 0 1 3.05 1.21h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 8.91A16 16 0 0 0 13 14.85l1.06-1.06a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 16.92z"/>
                </svg>
                <span style={{ fontFamily: '"Open Sans", sans-serif', fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>
                  71 091 917<br />77 119 933
                </span>
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <a
                  href="mailto:consultas@lawcorp.com"
                  style={{ fontFamily: '"Open Sans", sans-serif', fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, textDecoration: 'none', transition: 'color 0.2s ease' }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.color = '#D4AF37' }}
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.color = 'rgba(255,255,255,0.45)' }}
                >
                  consultas@lawcorp.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.2) 20%, rgba(212,175,55,0.2) 80%, transparent)',
          marginBottom: '1.5rem',
        }} />

        {/* Barra inferior */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.75rem',
        }}>
          <p style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: '12px',
            color: 'rgba(255,255,255,0.25)',
            margin: 0,
          }}>
            © {year} LawCorp. Todos los derechos reservados.
          </p>
          <p style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: '12px',
            color: 'rgba(255,255,255,0.2)',
            margin: 0,
          }}>
            Santa Cruz de la Sierra, Bolivia
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          footer .pie-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}

export default PiePagina