import './App.css'
import Contactanos from './components/Contactanos'
import Equipo from './components/Equipo'
import Incio from './components/Incio'
import QuienesSomos from './components/QuienesSomos'
import Servicios from './components/Servicios'

//Nav and Footer
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-brand-background text-brand-text">
      <Navbar />
      <Incio />
      <QuienesSomos />
      <Servicios />
      <Equipo />
      <Contactanos />
      <Footer />
    </main>
  )
}

export default App
