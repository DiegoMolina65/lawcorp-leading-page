import fundador1 from '../assets/images/fundador1.jpg'
import fundador2 from '../assets/images/fundador2.jpg'
import fundador3 from '../assets/images/fundador3.jpg'

interface Socio {
  nombre: string
  cargo: string
  descripcion: string
  foto: string 
}

const socios: Socio[] = [
  {
    nombre: 'Yohana Montano Encinas',
    cargo: 'Socio Fundador',
    foto: fundador1,
    descripcion:
      'Abogada egresada de la Universidad Autónoma Gabriel René Moreno (UAGRM) en 2008, graduada con honores mediante titulación directa. Especialista en Derecho Financiero y Tributario. Con sólida trayectoria en instituciones públicas como el Instituto Boliviano de Metrología, el Ministerio Público y la Aduana Nacional. Desde 2021 ha liderado más de 32 Amparos Constitucionales, 15 procesos penales aduaneros y 20 recursos administrativos con resultados altamente satisfactorios.',
  },
  {
    nombre: 'Grecia Whitney Peñaranda Moreira',
    cargo: 'Socio Fundador',
    foto: fundador2,
    descripcion:
      'Abogada egresada de la Universidad San Francisco Xavier de Chuquisaca (USFXCH) en 2011, con 11 años de experiencia en la Aduana Nacional de Bolivia. Especialista en Derecho Aduanero, Tributario, Administrativo y Constitucional. Experta en Fiscalización Aduanera y Fraude Tributario. Reconocida por su excelencia en desempeño, criterio técnico, ética profesional y orientación a resultados.',
  },
  {
    nombre: 'Winter Rómulo Hinojosa Téllez',
    cargo: 'Socio Fundador',
    foto: fundador3,
    descripcion:
      'Socio Fundador de LawCorp con amplia trayectoria en el ámbito jurídico. Su perfil profesional completo estará disponible próximamente.',
  },
]

function SocioRow({ socio, index, isLast }: { socio: Socio; index: number; isLast: boolean }) {
  const isEven = index % 2 === 0

  return (
    <>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '5rem',
        flexDirection: isEven ? 'row' : 'row-reverse',
        padding: '3.5rem 0',
      }} className="socio-row">

        {/* ── Foto ── */}
        <div style={{
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          width: '240px',
        }} className="socio-foto-col">

          <div style={{ position: 'relative', width: '190px', height: '190px' }}>
            {/* Anillo exterior punteado */}
            <div style={{
              position: 'absolute', inset: '-12px',
              borderRadius: '50%',
              border: '1.5px dashed rgba(212,175,55,0.2)',
            }} />
            {/* Anillo dorado */}
            <div style={{
              position: 'absolute', inset: '-5px',
              borderRadius: '50%',
              border: '2px solid rgba(212,175,55,0.45)',
            }} />
            {/* Foto */}
            <div style={{
              width: '190px', height: '190px',
              borderRadius: '50%', overflow: 'hidden',
              border: '3px solid #D4AF37',
              boxShadow: '0 8px 32px rgba(11,61,145,0.2), 0 0 0 6px rgba(212,175,55,0.07)',
              backgroundColor: '#0B3D91',
              position: 'relative', zIndex: 1,
            }}>
              {socio.foto ? (
                <img src={socio.foto} alt={socio.nombre}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              ) : (
                <div style={{
                  width: '100%', height: '100%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"Montserrat", sans-serif', fontWeight: 800,
                  fontSize: '42px', color: '#D4AF37',
                  background: 'linear-gradient(135deg, #071f4a, #0B3D91)',
                }}>
                  {socio.nombre.split(' ').slice(0, 2).map(n => n[0]).join('')}
                </div>
              )}
            </div>

            {/* Badge número */}
            <div style={{
              position: 'absolute', bottom: '6px',
              [isEven ? 'right' : 'left']: '6px',
              zIndex: 2,
              width: '34px', height: '34px', borderRadius: '50%',
              background: 'linear-gradient(135deg, #D4AF37, #b8962e)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: '"Montserrat", sans-serif', fontWeight: 800,
              fontSize: '12px', color: '#071f4a',
              boxShadow: '0 2px 8px rgba(212,175,55,0.4)',
            }}>
              {String(index + 1).padStart(2, '0')}
            </div>
          </div>

          {/* Cargo */}
          <span style={{
            display: 'inline-block',
            padding: '4px 16px', borderRadius: '20px',
            backgroundColor: 'rgba(11,61,145,0.07)',
            border: '1px solid rgba(11,61,145,0.13)',
            fontFamily: '"Montserrat", sans-serif', fontWeight: 600,
            fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase',
            color: '#0B3D91', textAlign: 'center',
          }}>
            {socio.cargo}
          </span>
        </div>

        {/* ── Línea conectora ── */}
        <div style={{
          width: '1px', alignSelf: 'stretch',
          background: 'linear-gradient(180deg, transparent, rgba(212,175,55,0.35) 20%, rgba(212,175,55,0.35) 80%, transparent)',
          flexShrink: 0,
        }} className="socio-linea" />

        {/* ── Contenido ── */}
        <div style={{ flex: 1, minWidth: 0 }}>

          {/* Número decorativo grande */}
          <span style={{
            display: 'block',
            fontFamily: '"Montserrat", sans-serif', fontWeight: 900,
            fontSize: '72px', lineHeight: 1,
            color: 'rgba(11,61,145,0.05)',
            marginBottom: '-0.6rem',
            letterSpacing: '-4px',
            userSelect: 'none',
          }}>0{index + 1}</span>

          <h3 style={{
            fontFamily: '"Montserrat", sans-serif', fontWeight: 800,
            fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
            color: '#0B3D91', margin: '0 0 0.75rem', lineHeight: 1.2,
          }}>
            {socio.nombre}
          </h3>

          <div style={{
            width: '40px', height: '3px',
            background: 'linear-gradient(90deg, #D4AF37, rgba(212,175,55,0.2))',
            borderRadius: '2px', marginBottom: '1rem',
          }} />

          <p style={{
            fontFamily: '"Open Sans", sans-serif', fontWeight: 400,
            fontSize: '0.9rem', lineHeight: 1.85,
            color: '#5C5C5C', margin: 0,
            maxWidth: '560px',
          }}>
            {socio.descripcion}
          </p>
        </div>
      </div>

      {/* ── Separador entre socios ── */}
      {!isLast && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          padding: '0 1rem',
        }}>
          <div style={{
            flex: 1, height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(11,61,145,0.12) 20%, rgba(11,61,145,0.12) 80%, transparent)',
          }} />
          <div style={{
            width: '28px', height: '28px', borderRadius: '50%', flexShrink: 0,
            border: '1.5px solid rgba(212,175,55,0.35)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{
              width: '6px', height: '6px', borderRadius: '50%',
              backgroundColor: '#D4AF37',
            }} />
          </div>
          <div style={{
            flex: 1, height: '1px',
            background: 'linear-gradient(90deg, rgba(11,61,145,0.12) 20%, rgba(11,61,145,0.12) 80%, transparent)',
          }} />
        </div>
      )}
    </>
  )
}

function QuienesSomos() {
  return (
    <section
      id="quienes-somos"
      style={{
        paddingTop: '7rem',
        paddingBottom: '4rem',
        position: 'relative',
        overflow: 'hidden',
        background: `
          radial-gradient(ellipse at 8% 40%, rgba(11,61,145,0.07) 0%, transparent 55%),
          radial-gradient(ellipse at 92% 15%, rgba(212,175,55,0.07) 0%, transparent 45%),
          radial-gradient(ellipse at 55% 85%, rgba(11,61,145,0.05) 0%, transparent 40%),
          #F5F7FB
        `,
      }}
    >
      {/* Patrón diagonal sutil */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `repeating-linear-gradient(
          -45deg, transparent, transparent 48px,
          rgba(11,61,145,0.018) 48px, rgba(11,61,145,0.018) 49px
        )`,
      }} />

      {/* Círculos decorativos esquinas */}
      <div style={{
        position: 'absolute', top: '-60px', left: '-60px',
        width: '340px', height: '340px', borderRadius: '50%',
        border: '1px solid rgba(11,61,145,0.05)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-40px', right: '-40px',
        width: '260px', height: '260px', borderRadius: '50%',
        border: '1px solid rgba(212,175,55,0.07)', pointerEvents: 'none',
      }} />

      {/* Usamos maxWidth más amplio para aprovechar el espacio */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 3rem', position: 'relative', zIndex: 1 }}>

        {/* Encabezado */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{
            fontFamily: '"Montserrat", sans-serif', fontWeight: 600,
            fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase',
            color: '#D4AF37', display: 'block', marginBottom: '0.75rem',
          }}>Nuestro Equipo</span>
          <h2 style={{
            fontFamily: '"Montserrat", sans-serif', fontWeight: 800,
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
            color: '#0B3D91', margin: '0 0 1rem', lineHeight: 1.2,
          }}>Quiénes Somos</h2>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '10px', marginBottom: '1.25rem',
          }}>
            <div style={{ width: '48px', height: '2px', background: 'linear-gradient(90deg, transparent, #D4AF37)' }} />
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#D4AF37' }} />
            <div style={{ width: '48px', height: '2px', background: 'linear-gradient(90deg, #D4AF37, transparent)' }} />
          </div>
          <p style={{
            fontFamily: '"Open Sans", sans-serif', fontSize: '1rem',
            color: '#5C5C5C', maxWidth: '500px', margin: '0 auto', lineHeight: 1.75,
          }}>
            Somos una firma jurídica especializada, comprometida con la defensa
            de sus derechos e intereses con excelencia técnica y ética profesional.
          </p>
        </div>

        {/* Filas de socios */}
        {socios.map((socio, index) => (
          <SocioRow
            key={socio.nombre}
            socio={socio}
            index={index}
            isLast={index === socios.length - 1}
          />
        ))}
      </div>

      <style>{`
        @media (max-width: 700px) {
          .socio-row { flex-direction: column !important; gap: 1.5rem !important; align-items: center !important; }
          .socio-foto-col { width: 100% !important; align-items: center !important; }
          .socio-linea { display: none !important; }
        }
      `}</style>
    </section>
  )
}

export default QuienesSomos