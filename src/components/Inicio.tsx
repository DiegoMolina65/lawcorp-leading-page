import { useState, useEffect, useRef } from 'react'
import heroBg from '../assets/images/imageninicio.webp'
import logoMarcaDeAgua from '../assets/images/LOGOTIPOLAWCORPDORADO.webp' 

const PILARES = [
  { prefix: '+', target: 32, label: 'Amparos\nConstitucionales' },
  { prefix: '+', target: 20, label: 'Recursos\nAdministrativos' },
  { prefix: '',   target: 11, label: 'Años de\nExperiencia' },
]

// ── CONFIGURACIÓN DE WHATSAPP (Centralizado) ──
const WHATSAPP_NUMBER = '59171091917' 
const WHATSAPP_MESSAGE = encodeURIComponent('Hola, me gustaría agendar una consulta gratuita.')
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

function useCounter(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    if (!start) return
    setCount(0)
    let startTime: number | null = null

    const tick = (ts: number) => {
      if (!startTime) startTime = ts
      const elapsed = ts - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [start, target, duration])

  return count
}

function Pilar({ prefix, target, label, start, delay, isLast }: {
  prefix: string; target: number; label: string
  start: boolean; delay: number; isLast: boolean
}) {
  const [localStart, setLocalStart] = useState(false)
  useEffect(() => {
    if (!start) return
    const t = setTimeout(() => setLocalStart(true), delay)
    return () => clearTimeout(t)
  }, [start, delay])

  const count = useCounter(target, 1400, localStart)

  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '1rem',
      flex: '1 1 auto', 
      paddingRight: !isLast ? '2.5rem' : '0',
      marginRight:  !isLast ? '2.5rem' : '0',
      borderRight:  !isLast ? '1px solid rgba(255,255,255,0.1)' : 'none',
      minWidth: '200px', 
      marginBottom: '1rem'
    }}>
      <span style={{
        fontFamily: '"Montserrat", sans-serif', fontWeight: 900,
        fontSize: 'clamp(3rem, 5vw, 4.2rem)',   
        color: '#D4AF37',
        lineHeight: 1, letterSpacing: '-2px',
        minWidth: '3ch',
        fontVariantNumeric: 'tabular-nums',
        textShadow: '0 0 28px rgba(212,175,55,0.4), 0 2px 8px rgba(0,0,0,0.4)', 
      }}>
        {prefix}{count}
      </span>
      <span style={{
        fontFamily: '"Open Sans", sans-serif',
        fontSize: '11px', letterSpacing: '0.5px',
        color: 'rgba(255,255,255,0.6)', 
        textTransform: 'uppercase', lineHeight: 1.5,
        whiteSpace: 'pre-line',
      }}>
        {label}
      </span>
    </div>
  )
}

function Inicio() {
  const [loaded, setLoaded]         = useState(false)
  const [startCount, setStartCount] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => {
      setLoaded(true)
      setTimeout(() => setStartCount(true), 900)
    }, 150)
    return () => clearTimeout(t)
  }, [])

  const anim = (delay: number): React.CSSProperties => ({
    opacity:    loaded ? 1 : 0,
    transform:  loaded ? 'translateY(0)' : 'translateY(22px)',
    transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
  })

  return (
    <section
      id="inicio"
      className="hero-section"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        marginTop: '-80px',
        backgroundColor: '#040e24', 
      }}
    >
      {/* Fondo de pantalla */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover', backgroundPosition: 'center 30%',
        transform: loaded ? 'scale(1)' : 'scale(1.03)',
        transition: 'transform 1.8s cubic-bezier(0.16, 1, 0.3, 1)',
      }} />

      {/* Degradado general izquierdo */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(105deg, rgba(4,14,36,0.98) 0%, rgba(7,31,74,0.95) 35%, rgba(11,61,145,0.6) 65%, rgba(11,61,145,0.2) 100%)',
        zIndex: 1,
      }} />

      {/* Degradado oscuro estratégico detrás del logo */}
      <div style={{
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        width: '50vw',
        background: 'radial-gradient(circle at 60% 50%, rgba(4,14,36,0.7) 0%, transparent 70%)',
        zIndex: 2,
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(212,175,55,0.06) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        zIndex: 1,
      }} />

      <div style={{
        position: 'absolute', right: '-100px', top: '45%', transform: 'translateY(-50%)',
        width: '750px', height: '750px', borderRadius: '50%',
        border: '1px solid rgba(212,175,55,0.07)', pointerEvents: 'none',
        zIndex: 1,
      }} />

      {/* CONTENEDOR PRINCIPAL */}
      <div className="hero-container" style={{
        position: 'relative', 
        zIndex: 10,
        width: '100%', 
        maxWidth: '1300px', 
        margin: '0 auto',
        padding: '140px 2.5rem 80px',
      }}>

        {/* Bloque de Textos e Imagen del Logo */}
        <div className="hero-content-split">
          
          {/* Columna Izquierda: Mensajes */}
          <div className="hero-text-block">
            <h1 style={{
              fontFamily: '"Montserrat", sans-serif', fontWeight: 900,
              fontSize: 'clamp(2rem, 4.2vw, 3.8rem)',
              lineHeight: 1.15, letterSpacing: '-0.5px',
              color: '#FFFFFF', margin: '0 0 1.5rem',
              ...anim(0.15),
            }}>
              Defendemos sus intereses<br />
              con{' '}
              <span style={{ color: '#D4AF37', position: 'relative', display: 'inline-block' }}>
                rigor
                <svg viewBox="0 0 100 8" style={{
                  position: 'absolute', bottom: '-2px', left: 0,
                  width: '100%', height: '8px', opacity: 0.75,
                }}>
                  <path d="M2 5 Q25 1 50 4 Q75 7 98 3"
                    stroke="#D4AF37" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
              {' '}y <span style={{ color: '#D4AF37' }}>precisión</span> jurídica.
            </h1>

            <p style={{
              fontFamily: '"Open Sans", sans-serif', fontWeight: 400,
              fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)',
              lineHeight: 1.8, color: 'rgba(255,255,255,0.7)',
              margin: '0 0 2.5rem',
              ...anim(0.35),
            }}>
              Expertos en comercio internacional y administración tributaria.
              Resultados comprobados en procesos administrativos, penales y constitucionales.
            </p>

            <div style={{
              display: 'flex', gap: '1.25rem', flexWrap: 'wrap',
              marginBottom: '3.5rem',
              ...anim(0.5),
            }}>
              {/* Actualizado a WhatsApp para consistencia de navegación */}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{
                padding: '15px 34px', borderRadius: '6px',
                backgroundColor: '#D4AF37', color: '#040e24',
                fontFamily: '"Montserrat", sans-serif', fontWeight: 800,
                fontSize: '13px', letterSpacing: '0.5px',
                textDecoration: 'none', transition: 'all 0.25s ease',
                boxShadow: '0 6px 24px rgba(212,175,55,0.3)',
                display: 'inline-flex', alignItems: 'center', gap: '8px',
              }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.backgroundColor = '#c9a42e'
                  el.style.transform = 'translateY(-2px)'
                  el.style.boxShadow = '0 10px 30px rgba(212,175,55,0.45)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.backgroundColor = '#D4AF37'
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = '0 6px 24px rgba(212,175,55,0.3)'
                }}
              >
                Consulta Gratuita
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7H11M7.5 3.5L11 7L7.5 10.5"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              <a href="#servicios" style={{
                padding: '15px 34px', borderRadius: '6px',
                backgroundColor: 'rgba(255,255,255,0.05)', color: '#FFFFFF',
                fontFamily: '"Montserrat", sans-serif', fontWeight: 600,
                fontSize: '13px', letterSpacing: '0.5px',
                textDecoration: 'none', transition: 'all 0.25s ease',
                border: '1.5px solid rgba(255,255,255,0.2)',
                backdropFilter: 'blur(4px)',
              }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'rgba(212,175,55,0.6)'
                  el.style.color = '#D4AF37'
                  el.style.backgroundColor = 'rgba(212,175,55,0.05)'
                  el.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'rgba(255,255,255,0.2)'
                  el.style.color = '#FFFFFF'
                  el.style.backgroundColor = 'rgba(255,255,255,0.05)'
                  el.style.transform = 'translateY(0)'
                }}
              >
                Ver Servicios
              </a>
            </div>
          </div>

          {/* Columna Derecha: Contenedor del Logo alineado arriba */}
          <div className="hero-logo-block" style={{
            ...anim(0.4),
            marginTop: '5px' /* Pequeño ajuste para calzar exactamente con el renglón de la H1 */
          }}>
            <img 
              src={logoMarcaDeAgua} 
              alt="LawCorp International Logo" 
              style={{ 
                width: '100%',
                maxHeight: '460px',
                objectFit: 'contain',
                filter: 'brightness(1.15) drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.85)) drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.9))'
              }}
            />
          </div>

        </div>

        {/* Separador inferior */}
        <div style={{
          height: '1px', marginBottom: '2rem',
          background: 'linear-gradient(90deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.04) 70%, transparent 100%)',
          ...anim(0.65),
        }} />

        {/* Fila de Pilares numéricos */}
        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          flexWrap: 'wrap', 
          justifyContent: 'flex-start',
          ...anim(0.75) 
        }}>
          {PILARES.map((p, i) => (
            <Pilar
              key={i}
              {...p}
              start={startCount}
              delay={i * 180}           
              isLast={i === PILARES.length - 1}
            />
          ))}
        </div>
      </div>

      {/* Indicador de Scroll animado */}
      <div style={{
        position: 'absolute', bottom: '7.5rem', left: '2.5rem',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
        opacity: loaded ? 0.65 : 0,
        transition: 'opacity 1s ease 1.2s',
        cursor: 'pointer', zIndex: 10,
      }}
        onClick={() => document.getElementById('quienes-somos')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div style={{
          width: '1px', height: '44px', position: 'relative',
          overflow: 'hidden', background: 'rgba(212,175,55,0.2)',
        }}>
          <div style={{
            position: 'absolute', top: 0, width: '100%', height: '50%',
            background: 'linear-gradient(180deg, transparent, #D4AF37)',
            animation: 'scrollLine 1.8s ease-in-out infinite',
          }} />
        </div>
        <span style={{
          fontFamily: '"Montserrat", sans-serif', fontWeight: 600,
          fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.3)',
        }}>Scroll</span>
      </div>

      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '180px', zIndex: 5, pointerEvents: 'none',
        background: 'linear-gradient(to bottom, transparent 0%, #F5F7FB 100%)',
      }} />

      <style>{`
        @keyframes scrollLine {
          0%   { transform: translateY(-100%) }
          100% { transform: translateY(250%) }
        }

        /* Estructura en Grid (Cambio clave: align-items start) */
        .hero-content-split {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 2rem;
          align-items: start; 
          margin-bottom: 1rem;
        }

        .hero-text-block {
          max-width: 720px;
        }

        .hero-logo-block {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          pointer-events: none;
        }

        /* Tabletas y pantallas medianas */
        @media (max-width: 1024px) {
          .hero-content-split {
            grid-template-columns: 1fr;
            gap: 3rem;
            align-items: center; /* En móviles queda mejor centrado abajo */
          }
          
          .hero-text-block {
            max-width: 100%;
            text-align: left;
          }

          .hero-logo-block {
            max-width: 420px;
            margin: 0 auto;
            margin-top: 0px;
          }
          
          #inicio {
            padding-top: 60px;
            height: auto !important;
            min-height: 100vh;
          }
        }

        /* Pantallas Móviles pequeñas */
        @media (max-width: 580px) {
          .hero-logo-block {
            max-width: 280px;
          }
        }
      `}</style>
    </section>
  )
}

export default Inicio