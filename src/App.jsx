import { useEffect } from 'react'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'

function AppContent() {
  const { language } = useTheme()

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
