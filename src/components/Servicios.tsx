import { useState, useEffect } from 'react'
import { Scale, Globe, Briefcase, FileText, Users, ShieldAlert } from 'lucide-react'

interface Servicio {
  id: number
  icono: any
  titulo: string
  resumen: string
  descripcion: string
  areas: string[]
}

const servicios: Servicio[] = [
  {
    id: 1,
    icono: Scale,
    titulo: 'Derecho Tributario',
    resumen: 'Planificación, análisis y defensa tributaria para que su empresa opere con pleno cumplimiento legal.',
    descripcion:
      'El asesoramiento en esta materia está enfocado a la planificación, análisis y aplicación de tributos con la finalidad que nuestros clientes realicen todas sus operaciones cumpliendo el ordenamiento jurídico vigente. Este servicio consiste en realizar una evaluación diagnóstica, diseño de estrategias y resolución de consultas de acuerdo a la problemática presentada. Contamos con un equipo de abogados con especialización en materia tributaria, preparados para atender operaciones altamente complejas.',
    areas: [
      'Asesoramiento',
      'Auditorías Preventivas',
      'Acompañamiento en Fiscalizaciones',
      'Litigio y Controversias Administrativas',
      'Reestructuración Empresarial',
      'Política Tributaria',
    ],
  },
  {
    id: 2,
    icono: Globe,
    titulo: 'Comercio Exterior y Derecho Aduanero',
    resumen: 'Servicios multidisciplinarios especializados en comercio exterior para prevenir fiscalizaciones y brindar defensa legal efectiva.',
    descripcion:
      'Nuestros servicios legales multidisciplinarios y especializados en el área de comercio exterior se encuentran enfocados en prevenir fiscalizaciones y brindar defensa legal efectiva en el ámbito tributario aduanero. Este servicio consiste en realizar una evaluación diagnóstica, diseño de estrategias y resolución de consultas de acuerdo a las operaciones de comercio exterior. Contamos con un equipo de abogados con especialización en materia aduanera, preparados para atender operaciones altamente complejas.',
    areas: [
      'Diagnóstico y Consultoría Preventiva',
      'Asesoramiento en Comercio Exterior',
      'Prevención de Fiscalizaciones',
      'Auditoría de Cumplimiento',
      'Asesoría en Regímenes',
      'Certificaciones',
      'Patrocinio y Defensa Legal',
    ],
  },
  {
    id: 3,
    icono: Briefcase,
    titulo: 'Derecho Corporativo y Comercial',
    resumen: 'Asesoría integral en contratación, estructuración legal del negocio y operaciones de comercio nacional e internacional.',
    descripcion:
      'En materia corporativa, el asesoramiento comprende las áreas de contratación nacional e internacional, documentos comerciales, diseño legal del negocio, comercio internacional y otras vinculadas con el desenvolvimiento del negocio. Brindamos apoyo para el análisis, diseño de estrategias, revisión de documentos, absolución de consultas, elaboración de informes, contratos y otros documentos legales, que serán el soporte sólido para la ejecución de las operaciones de su empresa; contemplando el patrocinio de procesos administrativos, judiciales o arbitrales.',
    areas: [
      'Diseño Legal del Negocio',
      'Redacción y Revisión de Contratos',
      'Reestructuración Empresarial',
      'Constitución de Sociedades',
      'Gobierno Corporativo',
      'Operaciones de Financiamiento y Títulos Valores',
      'Contratación Estatal',
      'Negociación, Arbitrajes y Litigios',
    ],
  },
  {
    id: 4,
    icono: FileText,
    titulo: 'Derecho Administrativo y Regulatorio',
    resumen: 'Gestión y defensa de personas y empresas ante la Administración Pública en procesos regulatorios y sancionadores.',
    descripcion:
      'Brindamos asesoramiento para el cumplimiento de obligaciones administrativas y regulatorias correspondientes, asesoría, gestión y defensa de personas y empresas ante la Administración Pública. Gestionamos la obtención de licencias, autorizaciones, permisos y registros ante entidades públicas, ministerios y municipios, y ofrecemos defensa ante multas o sanciones impuestas por organismos de control.',
    areas: [
      'Gestión Regulatoria',
      'Procedimiento Administrativo',
      'Impugnación de Actos Administrativos',
      'Asesoría en Sectores Regulados',
      'Licitaciones y Contratación Pública',
      'Procedimientos Sancionadores',
    ],
  },
  {
    id: 5,
    icono: Users,
    titulo: 'Derecho Civil',
    resumen: 'Asesoría y patrocinio en toda clase de procedimientos civiles, desde contratos hasta sucesiones y responsabilidad civil.',
    descripcion:
      'Brindamos asesoramiento en todo tipo de procedimientos civiles, desde la redacción de contratos, procesos de sucesión y división de herencias, hasta la gestión de procesos en materia de responsabilidad civil. Nuestro estudio jurídico cuenta con amplia experiencia en el régimen de propiedad horizontal y puede ofrecer asesoría especializada en conflictos entre copropietarios, distribución de gastos, innovaciones y aplicación del reglamento; además de recuperación de cartera en mora.',
    areas: [
      'Redacción Estratégica de Contratos',
      'Constitución de Fundaciones, Asociaciones y ONGs',
      'Patrocinio en Procesos Civiles',
      'Adquisiciones',
      'Sucesiones Hereditarias',
      'Derechos Reales',
      'Recuperación de Carteras en Mora',
      'Régimen de Propiedad Horizontal',
    ],
  },
  {
    id: 6,
    icono: ShieldAlert,
    titulo: 'Derecho Penal',
    resumen: 'Defensa penal especializada en delitos tributarios, aduaneros y económicos con enfoque estratégico.',
    descripcion:
      'Nuestra firma ofrece defensa penal especializada con énfasis en delitos de naturaleza tributaria, aduanera y económica. Representamos a personas naturales y jurídicas en todas las etapas del proceso penal, desde la etapa preparatoria hasta la impugnación de sentencias, garantizando una defensa técnica rigurosa y orientada a resultados.',
    areas: [
      'Defensa Penal Tributaria',
      'Defensa Penal Aduanera',
      'Delitos Económicos',
      'Etapa Preparatoria',
      'Juicio Oral',
      'Impugnación de Sentencias',
    ],
  },
]

function IconoServicio({ icono: Icono, titulo, size = 32, dorado = false }: {
  icono: any; titulo: string; size?: number; dorado?: boolean
}) {
  const inicial = titulo.charAt(0).toUpperCase()
  const colorIcono = dorado ? '#D4AF37' : 'rgba(255, 255, 255, 0.9)'
  const colorFondo = dorado ? 'rgba(212, 175, 55, 0.08)' : 'rgba(255, 255, 255, 0.05)'
  const colorBorde = dorado ? 'rgba(212, 175, 55, 0.3)' : 'rgba(255, 255, 255, 0.12)'

  return (
    <div style={{
      width: `${size + 28}px`,
      height: `${size + 28}px`,
      borderRadius: '14px',          
      flexShrink: 0,
      border: `1px solid ${colorBorde}`,
      backgroundColor: colorFondo,    
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease',
    }}>
      {Icono ? (
        <Icono size={size} strokeWidth={1.5} color={colorIcono} />
      ) : (
        <span style={{
          fontFamily: '"Montserrat", sans-serif',
          fontWeight: 800,
          fontSize: `${size * 0.4}px`,
          color: colorIcono,
        }}>
          {inicial}
        </span>
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

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', paddingRight: '2.5rem', position: 'relative', zIndex: 1 }}>
            <IconoServicio icono={servicio.icono} titulo={servicio.titulo} size={42} dorado />
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
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
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
      <div style={{ lineHeight: 0, backgroundColor: '#F5F7FB' }}>
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
          style={{ display: 'block', width: '100%', height: '80px' }}>
          <path d="M0,0 C360,80 1080,0 1440,60 L1440,80 L0,80 Z" fill="#071f4a" />
        </svg>
      </div>

      <div style={{
        background: 'linear-gradient(180deg, #071f4a 0%, #0B3D91 38%, #071f4a 68%, #040e24 100%)',
        padding: '4rem 0 8rem',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(circle, rgba(212,175,55,0.07) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }} />
        <div style={{
          position: 'absolute', bottom: '-100px', right: '-100px',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
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
                    <IconoServicio icono={s.icono} titulo={s.titulo} size={32} dorado={false} />
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

      {seleccionado && <Modal servicio={seleccionado} onClose={() => setSeleccionado(null)} />}
    </section>
  )
}

export default Servicios