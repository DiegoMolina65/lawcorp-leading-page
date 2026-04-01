import { useState, useEffect, useRef } from 'react'
import heroBg from '../assets/images/imageninicio.jpg'

const PILARES = [
  { prefix: '+', target: 32, label: 'Amparos\nConstitucionales' },
  { prefix: '+', target: 20, label: 'Recursos\nAdministrativos' },
  { prefix: '',  target: 11, label: 'Años de\nExperiencia' },
]

// Contador que sube de 0 al target visible frame a frame
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
      // easeOutCubic — se ve el conteo completo
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
  // Cada pilar arranca con un pequeño delay escalonado
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
      paddingRight: !isLast ? '2.5rem' : '0',
      marginRight:  !isLast ? '2.5rem' : '0',
      borderRight:  !isLast ? '1px solid rgba(255,255,255,0.1)' : 'none',
    }}>
      <span style={{
        fontFamily: '"Montserrat", sans-serif', fontWeight: 900,
        fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
        color: '#D4AF37', lineHeight: 1, letterSpacing: '-1px',
        minWidth: '3ch',
        fontVariantNumeric: 'tabular-nums',
      }}>
        {prefix}{count}
      </span>
      <span style={{
        fontFamily: '"Open Sans", sans-serif',
        fontSize: '11px', letterSpacing: '0.5px',
        color: 'rgba(255,255,255,0.5)',
        textTransform: 'uppercase', lineHeight: 1.6,
        whiteSpace: 'pre-line',
      }}>
        {label}
      </span>
    </div>
  )
}

function Incio() {
  const [loaded, setLoaded]         = useState(false)
  const [startCount, setStartCount] = useState(false)

  useEffect(() => {
    // Carga inicial
    const t = setTimeout(() => {
      setLoaded(true)
      // El contador arranca 900ms después de que la página carga
      // así es claramente visible para el usuario
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
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        marginTop: '-80px',
      }}
    >
      {/* Imagen de fondo */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        transform: loaded ? 'scale(1)' : 'scale(1.05)',
        transition: 'transform 1.6s ease',
      }} />

      {/* Overlay direccional */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(105deg, rgba(4,14,36,0.97) 0%, rgba(7,31,74,0.92) 35%, rgba(11,61,145,0.6) 65%, rgba(11,61,145,0.15) 100%)',
      }} />

      {/* Patrón puntos */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(212,175,55,0.07) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }} />

      {/* Anillos decorativos */}
      <div style={{
        position: 'absolute', right: '-120px', top: '50%', transform: 'translateY(-50%)',
        width: '700px', height: '700px', borderRadius: '50%',
        border: '1px solid rgba(212,175,55,0.08)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', right: '-20px', top: '50%', transform: 'translateY(-50%)',
        width: '460px', height: '460px', borderRadius: '50%',
        border: '1px solid rgba(212,175,55,0.06)', pointerEvents: 'none',
      }} />

      {/* ── CONTENIDO ── */}
      <div style={{
        position: 'relative', zIndex: 10,
        width: '100%', maxWidth: '1200px', margin: '0 auto',
        padding: '160px 2.5rem 100px',
        display: 'flex', flexDirection: 'column',
      }}>

        {/* Título */}
        <h1 style={{
          fontFamily: '"Montserrat", sans-serif', fontWeight: 900,
          fontSize: 'clamp(2rem, 4vw, 3.6rem)',
          lineHeight: 1.12, letterSpacing: '-0.5px',
          color: '#FFFFFF', margin: '0 0 1.25rem', maxWidth: '680px',
          ...anim(0.15),
        }}>
          Defendemos sus intereses<br />
          con{' '}
          <span style={{ color: '#D4AF37', position: 'relative', display: 'inline-block' }}>
            rigor
            <svg viewBox="0 0 100 8" style={{
              position: 'absolute', bottom: '-4px', left: 0,
              width: '100%', height: '8px', opacity: 0.65,
            }}>
              <path d="M2 5 Q25 1 50 4 Q75 7 98 3"
                stroke="#D4AF37" strokeWidth="2" fill="none" strokeLinecap="round"/>
            </svg>
          </span>
          {' '}y <span style={{ color: '#D4AF37' }}>precisión</span> jurídica.
        </h1>

        {/* Descripción */}
        <p style={{
          fontFamily: '"Open Sans", sans-serif', fontWeight: 400,
          fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
          lineHeight: 1.8, color: 'rgba(255,255,255,0.65)',
          maxWidth: '480px', margin: '0 0 2rem',
          ...anim(0.35),
        }}>
          Expertos en comercio internacional y administración tributaria.
          Resultados comprobados en procesos administrativos, penales y constitucionales.
        </p>

        {/* Botones */}
        <div style={{
          display: 'flex', gap: '1rem', flexWrap: 'wrap',
          marginBottom: '2.5rem',
          ...anim(0.5),
        }}>
          <a href="#contacto" style={{
            padding: '14px 32px', borderRadius: '6px',
            backgroundColor: '#D4AF37', color: '#071f4a',
            fontFamily: '"Montserrat", sans-serif', fontWeight: 800,
            fontSize: '13px', letterSpacing: '0.4px',
            textDecoration: 'none', transition: 'all 0.25s ease',
            boxShadow: '0 6px 24px rgba(212,175,55,0.35)',
            display: 'inline-flex', alignItems: 'center', gap: '8px',
          }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.backgroundColor = '#c9a42e'
              el.style.transform = 'translateY(-2px)'
              el.style.boxShadow = '0 10px 30px rgba(212,175,55,0.48)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.backgroundColor = '#D4AF37'
              el.style.transform = 'translateY(0)'
              el.style.boxShadow = '0 6px 24px rgba(212,175,55,0.35)'
            }}
          >
            Consulta Gratuita
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7H11M7.5 3.5L11 7L7.5 10.5"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <a href="#servicios" style={{
            padding: '14px 32px', borderRadius: '6px',
            backgroundColor: 'rgba(255,255,255,0.07)', color: '#FFFFFF',
            fontFamily: '"Montserrat", sans-serif', fontWeight: 600,
            fontSize: '13px', letterSpacing: '0.4px',
            textDecoration: 'none', transition: 'all 0.25s ease',
            border: '1.5px solid rgba(255,255,255,0.22)',
            backdropFilter: 'blur(4px)',
          }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = 'rgba(212,175,55,0.55)'
              el.style.color = '#D4AF37'
              el.style.backgroundColor = 'rgba(212,175,55,0.07)'
              el.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = 'rgba(255,255,255,0.22)'
              el.style.color = '#FFFFFF'
              el.style.backgroundColor = 'rgba(255,255,255,0.07)'
              el.style.transform = 'translateY(0)'
            }}
          >
            Ver Servicios
          </a>
        </div>

        {/* Separador */}
        <div style={{
          height: '1px', marginBottom: '1.5rem',
          background: 'linear-gradient(90deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 60%, transparent 100%)',
          ...anim(0.65),
        }} />

        {/* Pilares con contador */}
        <div style={{ display: 'flex', gap: '0', flexWrap: 'wrap', ...anim(0.75) }}>
          {PILARES.map((p, i) => (
            <Pilar
              key={i}
              {...p}
              start={startCount}
              delay={i * 180}           // escalonado: 0ms, 180ms, 360ms
              isLast={i === PILARES.length - 1}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '8.5rem', left: '2.5rem',
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

      {/* ── Ola de transición — encaja directamente con QuiénesSomos ── */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        lineHeight: 0, zIndex: 5, pointerEvents: 'none',
      }}>
        <svg
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ display: 'block', width: '100%', height: '100px' }}
        >
          {/* Dos capas: sombra sutil + relleno del color exacto de QuiénesSomos */}
          <path d="M0,50 C360,100 1080,0 1440,65 L1440,100 L0,100 Z"
            fill="rgba(245,247,251,0.4)" />
          <path d="M0,60 C360,100 1080,10 1440,75 L1440,100 L0,100 Z"
            fill="#F5F7FB" />
        </svg>
      </div>

      <style>{`
        @keyframes scrollLine {
          0%   { transform: translateY(-100%) }
          100% { transform: translateY(250%) }
        }
      `}</style>
    </section>
  )
}

export default Incio