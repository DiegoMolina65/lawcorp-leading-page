import { useState, useEffect } from 'react'

// ─────────────────────────────────────────────────────────────
// ✏️  EDITA AQUÍ cuando tengas la información real
// Reemplaza cada valor de "icono" con la ruta a tu imagen:
// Ejemplo: icono: '/src/assets/iconos/aduanero.png'
// ─────────────────────────────────────────────────────────────
interface Servicio {
  id: number
  icono: string       // ruta de la imagen del ícono
  titulo: string
  resumen: string
  descripcion: string
  areas: string[]
}

const servicios: Servicio[] = [
  {
    id: 1,
    icono: '',        // ← reemplaza con: '/src/assets/iconos/aduanero.png'
    titulo: 'Derecho Aduanero',
    resumen: 'Asesoría y defensa integral en procesos aduaneros administrativos y judiciales.',
    descripcion:
      'Representamos a operadores de comercio internacional ante la Aduana Nacional en todas las instancias del proceso: recursos de alzada, jerárquicos y constitucionales. Nuestro equipo cuenta con experiencia comprobada en fiscalizaciones, valoraciones aduaneras, clasificación arancelaria y regímenes aduaneros especiales. [Reemplaza este texto con la descripción real del servicio].',
    areas: ['Recursos de Alzada', 'Fiscalización Aduanera', 'Valoración Arancelaria'],
  },
  {
    id: 2,
    icono: '',        // ← reemplaza con: '/src/assets/iconos/tributario.png'
    titulo: 'Derecho Tributario',
    resumen: 'Defensa y planificación en materia fiscal frente a la administración tributaria.',
    descripcion:
      'Brindamos asesoría en procedimientos de fiscalización, determinación de deuda tributaria, impugnación de resoluciones administrativas y representación en procesos contenciosos tributarios. [Reemplaza este texto con la descripción real del servicio].',
    areas: ['Fiscalización Tributaria', 'Contencioso Tributario', 'Planificación Fiscal'],
  },
  {
    id: 3,
    icono: '',        // ← reemplaza con: '/src/assets/iconos/constitucional.png'
    titulo: 'Derecho Constitucional',
    resumen: 'Interposición y defensa en acciones constitucionales para proteger sus derechos.',
    descripcion:
      'Especializados en la interposición de Acciones de Amparo Constitucional, Acciones de Libertad y otros recursos constitucionales. Hemos liderado más de 32 amparos con resultados positivos para nuestros clientes. [Reemplaza este texto con la descripción real del servicio].',
    areas: ['Amparo Constitucional', 'Acción de Libertad', 'Tutela de Derechos'],
  },
  {
    id: 4,
    icono: '',        // ← reemplaza con: '/src/assets/iconos/empresarial.png'
    titulo: 'Derecho Empresarial',
    resumen: 'Asesoría jurídica integral para empresas en sus operaciones y contratos.',
    descripcion:
      'Apoyamos a empresas en la estructuración de contratos comerciales, constitución de sociedades, fusiones, adquisiciones y gestión de riesgos legales. Ofrecemos acompañamiento jurídico permanente. [Reemplaza este texto con la descripción real del servicio].',
    areas: ['Contratos Comerciales', 'Constitución de Empresas', 'Asesoría Corporativa'],
  },
  {
    id: 5,
    icono: '',        // ← reemplaza con: '/src/assets/iconos/consultoria.png'
    titulo: 'Consultoría Jurídica',
    resumen: 'Análisis y opinión legal especializada para la toma de decisiones estratégicas.',
    descripcion:
      'Emitimos informes y opiniones jurídicas fundamentadas en áreas de Derecho Aduanero, Tributario, Administrativo y Empresarial, orientados a identificar riesgos y brindar soluciones concretas. [Reemplaza este texto con la descripción real del servicio].',
    areas: ['Opiniones Legales', 'Análisis de Riesgo', 'Due Diligence'],
  },
]
// ─────────────────────────────────────────────────────────────

// Ícono placeholder hasta que lleguen las imágenes reales
function IconoPlaceholder({ label }: { label: string }) {
  const inicial = label.charAt(0).toUpperCase()
  return (
    <div style={{
      width: '100%', height: '100%',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: '"Montserrat", sans-serif', fontWeight: 800,
      fontSize: '20px', color: '#D4AF37',
    }}>
      {inicial}
    </div>
  )
}

function IconoServicio({ src, titulo, size = 54, dorado = false }: { src: string; titulo: string; size?: number; dorado?: boolean }) {
  return (
    <div style={{
      width: `${size}px`, height: `${size}px`, borderRadius: '50%', flexShrink: 0,
      border: `1.5px solid ${dorado ? 'rgba(212,175,55,0.5)' : 'rgba(11,61,145,0.15)'}`,
      background: dorado ? 'rgba(212,175,55,0.1)' : 'rgba(11,61,145,0.06)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden',
    }}>
      {src ? (
        <img src={src} alt={titulo} style={{ width: '55%', height: '55%', objectFit: 'contain' }} />
      ) : (
        <IconoPlaceholder label={titulo} />
      )}
    </div>
  )
}

function Modal({ servicio, onClose }: { servicio: Servicio; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <>
      <div onClick={onClose} style={{
        position: 'fixed', inset: 0, zIndex: 2000,
        backgroundColor: 'rgba(7,31,74,0.75)',
        backdropFilter: 'blur(6px)',
        animation: 'fadeIn 0.2s ease',
      }} />

      <div style={{
        position: 'fixed', zIndex: 2001,
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'min(640px, calc(100vw - 2rem))',
        maxHeight: 'calc(100vh - 4rem)',
        borderRadius: '20px', overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
        animation: 'slideUp 0.3s ease',
        boxShadow: '0 32px 80px rgba(7,31,74,0.45)',
      }}>
        {/* Header azul */}
        <div style={{
          background: 'linear-gradient(135deg, #071f4a 0%, #0B3D91 100%)',
          padding: '2rem', position: 'relative', flexShrink: 0,
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'radial-gradient(circle, rgba(212,175,55,0.06) 1px, transparent 1px)',
            backgroundSize: '20px 20px', pointerEvents: 'none',
          }} />

          <button onClick={onClose} style={{
            position: 'absolute', top: '1.25rem', right: '1.25rem',
            width: '34px', height: '34px', borderRadius: '50%',
            border: '1.5px solid rgba(255,255,255,0.2)',
            backgroundColor: 'rgba(255,255,255,0.05)',
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'rgba(255,255,255,0.6)', fontSize: '16px',
            transition: 'all 0.2s ease', zIndex: 1,
          }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.backgroundColor = 'rgba(212,175,55,0.15)'
              el.style.borderColor = 'rgba(212,175,55,0.5)'
              el.style.color = '#D4AF37'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.backgroundColor = 'rgba(255,255,255,0.05)'
              el.style.borderColor = 'rgba(255,255,255,0.2)'
              el.style.color = 'rgba(255,255,255,0.6)'
            }}
          >✕</button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', paddingRight: '2.5rem', position: 'relative', zIndex: 1 }}>
            <IconoServicio src={servicio.icono} titulo={servicio.titulo} size={60} dorado />
            <div>
              <p style={{
                fontFamily: '"Montserrat", sans-serif', fontWeight: 600,
                fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase',
                color: 'rgba(212,175,55,0.8)', margin: '0 0 0.35rem',
              }}>Área de Práctica</p>
              <h3 style={{
                fontFamily: '"Montserrat", sans-serif', fontWeight: 800,
                fontSize: 'clamp(1.15rem, 3vw, 1.5rem)',
                color: '#FFFFFF', margin: 0, lineHeight: 1.2,
              }}>{servicio.titulo}</h3>
            </div>
          </div>

          <div style={{
            marginTop: '1.5rem', height: '1px', position: 'relative', zIndex: 1,
            background: 'linear-gradient(90deg, rgba(212,175,55,0.6), rgba(212,175,55,0.05))',
          }} />
        </div>

        {/* Cuerpo blanco */}
        <div style={{ backgroundColor: '#FFFFFF', padding: '2rem', overflowY: 'auto', flex: 1 }}>
          <p style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: '0.95rem', lineHeight: 1.9,
            color: '#3a3a3a', margin: '0 0 2rem',
          }}>{servicio.descripcion}</p>

          <p style={{
            fontFamily: '"Montserrat", sans-serif', fontWeight: 700,
            fontSize: '10px', letterSpacing: '2.5px', textTransform: 'uppercase',
            color: '#0B3D91', margin: '0 0 0.75rem',
          }}>Áreas que cubre</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '2rem' }}>
            {servicio.areas.map((area) => (
              <span key={area} style={{
                fontFamily: '"Montserrat", sans-serif', fontWeight: 600,
                fontSize: '11px', padding: '6px 14px', borderRadius: '20px',
                backgroundColor: 'rgba(11,61,145,0.06)',
                border: '1px solid rgba(11,61,145,0.15)',
                color: '#0B3D91',
              }}>{area}</span>
            ))}
          </div>

          <a href="#contacto" onClick={onClose} style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '13px 28px', borderRadius: '8px',
            background: 'linear-gradient(135deg, #0B3D91, #071f4a)',
            color: '#FFFFFF',
            fontFamily: '"Montserrat", sans-serif', fontWeight: 700,
            fontSize: '13px', textDecoration: 'none',
            transition: 'all 0.2s ease',
            boxShadow: '0 4px 16px rgba(11,61,145,0.3)',
          }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.transform = 'translateY(-2px)'
              el.style.boxShadow = '0 8px 24px rgba(11,61,145,0.4)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.transform = 'translateY(0)'
              el.style.boxShadow = '0 4px 16px rgba(11,61,145,0.3)'
            }}
          >
            Consultar sobre este servicio
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7H11M7.5 3.5L11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity:0 } to { opacity:1 } }
        @keyframes slideUp {
          from { opacity:0; transform:translate(-50%, calc(-50% + 24px)) }
          to   { opacity:1; transform:translate(-50%, -50%) }
        }
      `}</style>
    </>
  )
}

function Servicios() {
  const [seleccionado, setSeleccionado] = useState<Servicio | null>(null)

  return (
    <section id="servicios" style={{ position: 'relative' }}>

      {/* ── Ola superior: transición suave desde blanco (#FFFFFF de QuienesSomos) hacia azul ── */}
      <div style={{ lineHeight: 0, backgroundColor: '#F5F7FB' }}>
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
          style={{ display: 'block', width: '100%', height: '80px' }}>
          <path d="M0,0 C360,80 1080,0 1440,60 L1440,80 L0,80 Z" fill="#071f4a" />
        </svg>
      </div>

      {/* ── Cuerpo principal de la sección ── */}
      <div style={{
        background: 'linear-gradient(160deg, #071f4a 0%, #0B3D91 55%, #0d2f6b 100%)',
        padding: '4rem 0 6rem',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Patrón de puntos */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(circle, rgba(212,175,55,0.07) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }} />
        <div style={{
          position: 'absolute', bottom: '-100px', right: '-100px',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          {/* Encabezado */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{
              fontFamily: '"Montserrat", sans-serif', fontWeight: 600,
              fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase',
              color: '#D4AF37', display: 'block', marginBottom: '0.75rem',
            }}>Lo que hacemos</span>
            <h2 style={{
              fontFamily: '"Montserrat", sans-serif', fontWeight: 800,
              fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: '#FFFFFF',
              margin: '0 0 1rem', lineHeight: 1.2,
            }}>Nuestros Servicios</h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '1.25rem' }}>
              <div style={{ width: '48px', height: '2px', background: 'linear-gradient(90deg, transparent, #D4AF37)' }} />
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#D4AF37' }} />
              <div style={{ width: '48px', height: '2px', background: 'linear-gradient(90deg, #D4AF37, transparent)' }} />
            </div>
            <p style={{
              fontFamily: '"Open Sans", sans-serif', fontSize: '1rem',
              color: 'rgba(255,255,255,0.65)', maxWidth: '540px', margin: '0 auto', lineHeight: 1.75,
            }}>
              Haga clic en cualquier servicio para conocer más detalles sobre cómo podemos ayudarle.
            </p>
          </div>

          {/* Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.25rem',
          }}>
            {servicios.map((s) => (
              <button key={s.id} onClick={() => setSeleccionado(s)} style={{
                all: 'unset', cursor: 'pointer',
                display: 'flex', flexDirection: 'column',
                borderRadius: '16px', overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.1)',
                backgroundColor: 'rgba(255,255,255,0.06)',
                backdropFilter: 'blur(8px)',
                transition: 'all 0.25s ease',
                textAlign: 'left',
              }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = 'translateY(-5px)'
                  el.style.backgroundColor = 'rgba(255,255,255,0.1)'
                  el.style.borderColor = 'rgba(212,175,55,0.5)'
                  el.style.boxShadow = '0 16px 40px rgba(0,0,0,0.25)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = 'translateY(0)'
                  el.style.backgroundColor = 'rgba(255,255,255,0.06)'
                  el.style.borderColor = 'rgba(255,255,255,0.1)'
                  el.style.boxShadow = 'none'
                }}
              >
                <div style={{ height: '3px', background: 'linear-gradient(90deg, #D4AF37, rgba(212,175,55,0.2))', flexShrink: 0 }} />

                <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ marginBottom: '1.25rem' }}>
                    <IconoServicio src={s.icono} titulo={s.titulo} size={54} dorado />
                  </div>

                  <h3 style={{
                    fontFamily: '"Montserrat", sans-serif', fontWeight: 700,
                    fontSize: '1.05rem', color: '#FFFFFF',
                    margin: '0 0 0.6rem', lineHeight: 1.3,
                  }}>{s.titulo}</h3>

                  <p style={{
                    fontFamily: '"Open Sans", sans-serif', fontSize: '0.88rem',
                    color: 'rgba(255,255,255,0.6)', margin: '0 0 1.5rem', lineHeight: 1.7, flex: 1,
                  }}>{s.resumen}</p>

                  <div style={{
                    display: 'flex', alignItems: 'center', gap: '6px',
                    fontFamily: '"Montserrat", sans-serif', fontWeight: 700,
                    fontSize: '12px', color: '#D4AF37', marginTop: 'auto',
                  }}>
                    Ver detalle
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 7H11M7.5 3.5L11 7L7.5 10.5" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Ola inferior: transición suave hacia la siguiente sección (blanco) ── */}
      <div style={{ lineHeight: 0, backgroundColor: '#FFFFFF' }}>
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
          style={{ display: 'block', width: '100%', height: '80px', transform: 'scaleY(-1)' }}>
          <path d="M0,0 C360,80 1080,0 1440,60 L1440,80 L0,80 Z" fill="#0d2f6b" />
        </svg>
      </div>

      {seleccionado && <Modal servicio={seleccionado} onClose={() => setSeleccionado(null)} />}
    </section>
  )
}

export default Servicios