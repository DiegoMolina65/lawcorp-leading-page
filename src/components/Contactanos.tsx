import { useState } from 'react'

const WHATSAPP_URL =
  'https://wa.me/59171091917?text=Hola%2C%20me%20comunico%20desde%20la%20p%C3%A1gina%20web%20de%20LawCorp%20y%20quisiera%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios.'

interface ContactoInfo {
  label: string
  lineas: string[]
  href: string
}

const CONTACTOS: ContactoInfo[] = [
  {
    label: 'Dirección',
    lineas: ['Calle Gral. Saavedra N° 453', 'Edificio Alegranza'],
    href: 'https://www.google.com/maps?q=-17.78974723815918,-63.17535400390625&z=17&hl=es',
  },
  {
    label: 'Teléfonos',
    lineas: ['71091917 — Yohana Montaño', '77100902'],
    href: 'https://wa.me/59171091917',
  },
  {
    label: 'Correo',
    lineas: ['consultas@lawcorp.com'],
    href: 'mailto:consultas@lawcorp.com',
  },
]

function IconoContacto({ index }: { index: number }) {
  const paths: [string, string?][] = [
    [
      'M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z',
      'M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0',
    ],
    [
      'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.07 3.4 2 2 0 0 1 3.05 1.21h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 8.91A16 16 0 0 0 13 14.85l1.06-1.06a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 16.92z',
    ],
    [
      'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z',
      'M22,6 12,13 2,6',
    ],
  ]

  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#D4AF37"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[index].map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  )
}

function MapaEstatico() {
  const lat = -17.78974723815918
  const lng = -63.17535400390625
  const mapUrl = `https://www.google.com/maps?q=${lat},${lng}&z=17&hl=es`

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.1)',
        aspectRatio: '16/9',
        cursor: 'pointer',
        background: '#0d1f3c',
      }}
      onClick={() => window.open(mapUrl, '_blank')}
    >
      <iframe
        title="Ubicación LawCorp"
        width="100%"
        height="100%"
        style={{ border: 0, display: 'block', filter: 'saturate(0.7) contrast(1.1)' }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://maps.google.com/maps?q=${lat},${lng}&z=17&hl=es&output=embed`}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          padding: '1rem',
          pointerEvents: 'none',
        }}
      >
        <span
          style={{
            background: 'rgba(7,31,74,0.88)',
            backdropFilter: 'blur(6px)',
            border: '1px solid rgba(212,175,55,0.35)',
            color: '#D4AF37',
            fontFamily: '"Montserrat", sans-serif',
            fontWeight: 700,
            fontSize: '11px',
            letterSpacing: '1px',
            padding: '7px 14px',
            borderRadius: '8px',
            pointerEvents: 'auto',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
          Abrir en Google Maps
        </span>
      </div>
    </div>
  )
}

function Contacto() {
  const [enviado, setEnviado] = useState(false)
  const [form, setForm] = useState({ nombre: '', email: '', asunto: '', mensaje: '' })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const texto = encodeURIComponent(
      `Hola, me comunico desde la página web de LawCorp.\n\nNombre: ${form.nombre}\nCorreo: ${form.email}\nAsunto: ${form.asunto}\n\n${form.mensaje}`
    )
    window.open(`https://wa.me/59171091917?text=${texto}`, '_blank')
    setEnviado(true)
    setTimeout(() => setEnviado(false), 4000)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '10px',
    border: '1.5px solid rgba(255,255,255,0.12)',
    backgroundColor: 'rgba(255,255,255,0.06)',
    color: '#FFFFFF',
    fontFamily: '"Open Sans", sans-serif',
    fontSize: '14px',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s ease',
  }

  const labelStyle: React.CSSProperties = {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 600,
    fontSize: '11px',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    color: 'rgba(212,175,55,0.8)',
    display: 'block',
    marginBottom: '7px',
  }

  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = 'rgba(212,175,55,0.6)'
  }
  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
  }

  const cardHoverEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.borderColor = 'rgba(212,175,55,0.4)'
    e.currentTarget.style.backgroundColor = 'rgba(212,175,55,0.05)'
    e.currentTarget.style.transform = 'translateY(-2px)'
  }
  const cardHoverLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)'
    e.currentTarget.style.transform = 'translateY(0)'
  }

  const btnHoverEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = '#c9a42e'
    e.currentTarget.style.transform = 'translateY(-2px)'
    e.currentTarget.style.boxShadow = '0 10px 30px rgba(212,175,55,0.45)'
  }
  const btnHoverLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = '#D4AF37'
    e.currentTarget.style.transform = 'translateY(0)'
    e.currentTarget.style.boxShadow = '0 6px 24px rgba(212,175,55,0.3)'
  }

  const waHoverEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.transform = 'translateY(-3px)'
    e.currentTarget.style.boxShadow = '0 12px 32px rgba(37,211,102,0.45)'
  }
  const waHoverLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.transform = 'translateY(0)'
    e.currentTarget.style.boxShadow = '0 6px 24px rgba(37,211,102,0.3)'
  }

  return (
    <section id="contacto" style={{ position: 'relative' }}>

      {/* Cuerpo */}
      <div
        style={{
          background: 'linear-gradient(160deg, #040e24 0%, #071f4a 40%, #0B3D91 100%)',
          padding: '4rem 0 6rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Patrón de puntos */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            backgroundImage: 'radial-gradient(circle, rgba(212,175,55,0.07) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />

        {/* Anillo decorativo */}
        <div
          style={{
            position: 'absolute',
            left: '-200px',
            bottom: '-200px',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            border: '1px solid rgba(212,175,55,0.06)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '0 2rem',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Encabezado */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span
              style={{
                fontFamily: '"Montserrat", sans-serif',
                fontWeight: 600,
                fontSize: '11px',
                letterSpacing: '4px',
                textTransform: 'uppercase',
                color: '#D4AF37',
                display: 'block',
                marginBottom: '0.75rem',
              }}
            >
              Estamos para servirle
            </span>
            <h2
              style={{
                fontFamily: '"Montserrat", sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                color: '#FFFFFF',
                margin: '0 0 1rem',
                lineHeight: 1.2,
              }}
            >
              Contáctenos
            </h2>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                marginBottom: '1.25rem',
              }}
            >
              <div style={{ width: '48px', height: '2px', background: 'linear-gradient(90deg, transparent, #D4AF37)' }} />
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#D4AF37' }} />
              <div style={{ width: '48px', height: '2px', background: 'linear-gradient(90deg, #D4AF37, transparent)' }} />
            </div>
            <p
              style={{
                fontFamily: '"Open Sans", sans-serif',
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.6)',
                maxWidth: '500px',
                margin: '0 auto',
                lineHeight: 1.75,
              }}
            >
              Tienes alguna duda legal ?. Nuestro equipo le responderá a la brevedad con orientación especializada.
            </p>
          </div>

          {/* Grid principal */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2.5rem',
              alignItems: 'start',
            }}
          >
            {/* ── Formulario ── */}
            <div
              style={{
                backgroundColor: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '20px',
                padding: '2rem',
              }}
            >
              <div
                style={{
                  height: '3px',
                  background: 'linear-gradient(90deg, #D4AF37, rgba(212,175,55,0.1))',
                  borderRadius: '2px',
                  marginBottom: '1.75rem',
                }}
              />
              <h3
                style={{
                  fontFamily: '"Montserrat", sans-serif',
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  color: '#FFFFFF',
                  margin: '0 0 1.5rem',
                }}
              >
                Envíenos un mensaje
              </h3>

              <form
                onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}
              >
                <div>
                  <label style={labelStyle}>Nombre completo</label>
                  <input
                    name="nombre"
                    required
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Su nombre"
                    style={inputStyle}
                    onFocus={onFocus}
                    onBlur={onBlur}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Correo electrónico</label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="correo@ejemplo.com"
                    style={inputStyle}
                    onFocus={onFocus}
                    onBlur={onBlur}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Área de consulta</label>
                  <select
                    name="asunto"
                    required
                    value={form.asunto}
                    onChange={handleChange}
                    style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                    onFocus={onFocus}
                    onBlur={onBlur}
                  >
                    <option value="" disabled style={{ background: '#071f4a' }}>
                      Seleccione un área
                    </option>
                    <option value="Derecho Tributario" style={{ background: '#071f4a' }}>Derecho Tributario</option>
                    <option value="Comercio Exterior y Derecho Aduanero" style={{ background: '#071f4a' }}>Comercio Exterior y Derecho Aduanero</option>
                    <option value="Derecho Corporativo y Comercial" style={{ background: '#071f4a' }}>Derecho Corporativo y Comercial</option>
                    <option value="Derecho Administrativo y Regulatorio" style={{ background: '#071f4a' }}>Derecho Administrativo y Regulatorio</option>
                    <option value="Derecho Civil" style={{ background: '#071f4a' }}>Derecho Civil</option>
                    <option value="Derecho Penal" style={{ background: '#071f4a' }}>Derecho Penal</option>
                    <option value="Otro" style={{ background: '#071f4a' }}>Otro</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Mensaje</label>
                  <textarea
                    name="mensaje"
                    required
                    value={form.mensaje}
                    onChange={handleChange}
                    placeholder="Describa brevemente su consulta..."
                    rows={4}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '100px', lineHeight: 1.6 }}
                    onFocus={onFocus}
                    onBlur={onBlur}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    marginTop: '0.5rem',
                    padding: '14px 28px',
                    borderRadius: '10px',
                    border: 'none',
                    backgroundColor: '#D4AF37',
                    color: '#071f4a',
                    fontFamily: '"Montserrat", sans-serif',
                    fontWeight: 800,
                    fontSize: '13px',
                    letterSpacing: '0.5px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    transition: 'all 0.25s ease',
                    boxShadow: '0 6px 24px rgba(212,175,55,0.3)',
                    width: '100%',
                  }}
                  onMouseEnter={btnHoverEnter}
                  onMouseLeave={btnHoverLeave}
                >
                  {enviado ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      ¡Mensaje enviado!
                    </>
                  ) : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="#071f4a">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.304A9.956 9.956 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.952 7.952 0 0 1-4.053-1.107l-.29-.173-2.956.775.789-2.879-.19-.298A7.96 7.96 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
                      </svg>
                      Enviar por WhatsApp
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* ── Columna derecha ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

              {/* Botón WhatsApp directo — TAG <a> FALTABA */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  padding: '16px 24px',
                  borderRadius: '12px',
                  backgroundColor: '#25D366',
                  color: '#FFFFFF',
                  fontFamily: '"Montserrat", sans-serif',
                  fontWeight: 800,
                  fontSize: '15px',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease',
                  boxShadow: '0 6px 24px rgba(37,211,102,0.3)',
                }}
                onMouseEnter={waHoverEnter}
                onMouseLeave={waHoverLeave}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.304A9.956 9.956 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.952 7.952 0 0 1-4.053-1.107l-.29-.173-2.956.775.789-2.879-.19-.298A7.96 7.96 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
                </svg>
                Contáctenos por WhatsApp
              </a>

              {CONTACTOS.map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    backgroundColor: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '14px',
                    padding: '1.25rem 1.5rem',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={cardHoverEnter}
                  onMouseLeave={cardHoverLeave}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(212,175,55,0.1)',
                      border: '1px solid rgba(212,175,55,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <IconoContacto index={i} />
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: '"Montserrat", sans-serif',
                        fontWeight: 700,
                        fontSize: '10px',
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        color: 'rgba(212,175,55,0.7)',
                        margin: '0 0 4px',
                      }}
                    >
                      {c.label}
                    </p>
                    {c.lineas.map((l, j) => (
                      <p
                        key={j}
                        style={{
                          fontFamily: '"Open Sans", sans-serif',
                          fontSize: '14px',
                          color: 'rgba(255,255,255,0.85)',
                          margin: 0,
                          lineHeight: 1.6,
                        }}
                      >
                        {l}
                      </p>
                    ))}
                  </div>
                </a>
              ))}

              {/* Mapa */}
              <MapaEstatico />
            </div>
          </div>
        </div>
      </div>

      {/* Cierre degradado */}
      <div
        style={{
          height: '80px',
          background: 'linear-gradient(to bottom, #0B3D91, #040e24)',
        }}
      />
    </section>
  )
}

export default Contacto