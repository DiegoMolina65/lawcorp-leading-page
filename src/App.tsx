import './App.css'
import Contactanos from './components/Contactanos'
import Equipo from './components/Equipo'
import Incio from './components/Incio'
import QuienesSomos from './components/QuienesSomos'
import Servicios from './components/Servicios'
import Navegacion from './components/Navegacion'
import PiePagina from './components/PiePagina'

function App() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-brand-background text-brand-text">
      <Navegacion />
      <Incio />
      <QuienesSomos />
      <Servicios />
      <Equipo />
      <Contactanos />
      <PiePagina />
    </main>
  )
}

export default App
