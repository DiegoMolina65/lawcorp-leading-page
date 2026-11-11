import { useState, useEffect } from 'react'
import logotipo from '../assets/images/ISOLOGOLAWCORPDORADO.webp'

const navLinks = [
  { label: 'Inicio',        href: '#inicio' },
  { label: 'Quiénes Somos', href: '#quienes-somos' },
  { label: 'Servicios',      href: '#servicios' },
  { label: 'Contacto',       href: '#contacto' },
]

const WHATSAPP_NUMBER = '59171091917' 
const WHATSAPP_MESSAGE = encodeURIComponent('Hola, me comunico desde la página web de LawCorp y quisiera obtener más información sobre sus servicios.')
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

function Navegacion() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [activeLink, setActiveLink] = useState('#inicio')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)

    const observerOptions = {
      root: null, 
      rootMargin: '-50% 0px -50% 0px', 
      threshold: 0,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(`#${entry.target.id}`)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    navLinks.forEach((link) => {
      const id = link.href.replace('#', '')
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  const handleNavClick = (href: string) => {
    setActiveLink(href)
    setMenuOpen(false)
  }

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        transition: 'all 0.4s ease',
        backgroundColor: scrolled
          ? 'rgba(6, 20, 52, 0.97)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        boxShadow: scrolled
          ? '0 1px 0 rgba(212,175,55,0.25), 0 8px 32px rgba(4,14,36,0.5)'
          : 'none',
      }}>

        {scrolled && (
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, transparent 0%, #D4AF37 30%, #D4AF37 70%, transparent 100%)',
            opacity: 0.6,
          }} />
        )}

        <div style={{
          maxWidth: '1280px', margin: '0 auto',
          padding: '0 2.5rem',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: scrolled ? '68px' : '84px',
          transition: 'height 0.4s ease',
        }}>

          {/* ── Logo ── */}
          <a
            href="#inicio"
            onClick={() => handleNavClick('#inicio')}
            style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}
          >
            <img
              src={logotipo}
              alt="LawCorp"
              style={{
                height: '90px',
                width: 'auto',
                objectFit: 'contain',
                transition: 'height 0.4s ease',
                filter: 'drop-shadow(0 2px 8px rgba(212,175,55,0.2))',
              }}
            />
          </a>

          {/* ── Links desktop ── */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="desktop-nav">
            {navLinks.map((link) => {
              const isActive = activeLink === link.href
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  style={{
                    position: 'relative',
                    fontFamily: '"Montserrat", sans-serif',
                    fontWeight: isActive ? 700 : 500,
                    fontSize: '13px',
                    letterSpacing: '0.6px',
                    color: isActive ? '#D4AF37' : 'rgba(255,255,255,0.82)',
                    textDecoration: 'none',
                    padding: '8px 16px',
                    borderRadius: '6px',
                    transition: 'all 0.2s ease',
                    backgroundColor: isActive ? 'rgba(212,175,55,0.08)' : 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      const el = e.currentTarget as HTMLElement
                      el.style.color = '#FFFFFF'
                      el.style.backgroundColor = 'rgba(255,255,255,0.07)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      const el = e.currentTarget as HTMLElement
                      el.style.color = 'rgba(255,255,255,0.82)'
                      el.style.backgroundColor = 'transparent'
                    }
                  }}
                >
                  {link.label}

                  {/* Indicador activo — línea dorada inferior */}
                  {isActive && (
                    <span style={{
                      position: 'absolute',
                      bottom: '3px', left: '50%',
                      transform: 'translateX(-50%)',
                      width: '20px', height: '2px',
                      background: 'linear-gradient(90deg, rgba(212,175,55,0.4), #D4AF37, rgba(212,175,55,0.4))',
                      borderRadius: '2px',
                      boxShadow: '0 0 6px rgba(212,175,55,0.5)',
                    }} />
                  )}
                </a>
              )
            })}

            {/* ── CTA Consulta Gratuita (Actualizado a WhatsApp) ── */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginLeft: '16px',
                padding: '11px 24px',
                borderRadius: '7px',
                textDecoration: 'none',
                fontFamily: '"Montserrat", sans-serif',
                fontWeight: 700,
                fontSize: '12.5px',
                letterSpacing: '0.4px',
                whiteSpace: 'nowrap',
                background: 'linear-gradient(135deg, #D4AF37 0%, #e8c84a 50%, #c9a42e 100%)',
                color: '#071f4a',
                boxShadow: '0 4px 16px rgba(212,175,55,0.35), inset 0 1px 0 rgba(255,255,255,0.25)',
                transition: 'all 0.25s ease',
                display: 'inline-flex', alignItems: 'center', gap: '7px',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translateY(-2px)'
                el.style.boxShadow = '0 8px 24px rgba(212,175,55,0.5), inset 0 1px 0 rgba(255,255,255,0.3)'
                el.style.background = 'linear-gradient(135deg, #e8c84a 0%, #D4AF37 50%, #d4af37 100%)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = '0 4px 16px rgba(212,175,55,0.35), inset 0 1px 0 rgba(255,255,255,0.25)'
                el.style.background = 'linear-gradient(135deg, #D4AF37 0%, #e8c84a 50%, #c9a42e 100%)'
              }}
            >
              Consulta Gratuita
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2.5 6.5H10.5M7 3L10.5 6.5L7 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </nav>

          {/* ── Hamburger móvil ── */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
            className="hamburger-btn"
            style={{
              display: 'none',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '5px',
              width: '42px', height: '42px',
              backgroundColor: 'rgba(212,175,55,0.1)',
              border: '1px solid rgba(212,175,55,0.35)',
              borderRadius: '8px',
              cursor: 'pointer',
              padding: '8px',
              transition: 'all 0.2s ease',
            }}
          >
            {[0, 1, 2].map((i) => (
              <span key={i} style={{
                display: 'block',
                width: i === 1 ? '14px' : '20px',
                height: '2px',
                backgroundColor: '#D4AF37',
                borderRadius: '2px',
                transition: 'all 0.3s ease',
                alignSelf: i === 1 ? 'flex-end' : 'center',
                transform:
                  menuOpen && i === 0 ? 'translateY(7px) rotate(45deg)'
                  : menuOpen && i === 2 ? 'translateY(-7px) rotate(-45deg)'
                  : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>

        {/* ── Menú móvil ── */}
        <div style={{
          overflow: 'hidden',
          maxHeight: menuOpen ? '420px' : '0',
          transition: 'max-height 0.38s ease',
          background: 'rgba(6, 20, 52, 0.98)',
          backdropFilter: 'blur(16px)',
          borderTop: menuOpen ? '1px solid rgba(212,175,55,0.15)' : 'none',
        }}>
          <nav style={{
            display: 'flex', flexDirection: 'column',
            padding: menuOpen ? '1.25rem 2rem 1.75rem' : '0 2rem',
            gap: '2px',
          }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                style={{
                  fontFamily: '"Montserrat", sans-serif', fontWeight: 600,
                  fontSize: '14px',
                  color: activeLink === link.href ? '#D4AF37' : 'rgba(255,255,255,0.8)',
                  textDecoration: 'none',
                  padding: '11px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  transition: 'color 0.2s ease',
                  display: 'flex', alignItems: 'center', gap: '10px',
                  letterSpacing: '0.4px',
                }}
              >
                <span style={{
                  width: activeLink === link.href ? '18px' : '6px',
                  height: '2px',
                  borderRadius: '2px',
                  backgroundColor: '#D4AF37',
                  transition: 'width 0.3s ease',
                  flexShrink: 0,
                }} />
                {link.label}
              </a>
            ))}

            {/* ── CTA Móvil (Actualizado a WhatsApp) ── */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginTop: '1rem',
                padding: '13px 20px',
                background: 'linear-gradient(135deg, #D4AF37, #c9a42e)',
                color: '#071f4a',
                fontFamily: '"Montserrat", sans-serif', fontWeight: 700,
                fontSize: '13px', letterSpacing: '0.3px',
                borderRadius: '7px', textDecoration: 'none',
                textAlign: 'center',
                boxShadow: '0 4px 16px rgba(212,175,55,0.3)',
              }}
            >
              Consulta Gratuita →
            </a>
          </nav>
        </div>
      </header>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav  { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}

export default Navegacion