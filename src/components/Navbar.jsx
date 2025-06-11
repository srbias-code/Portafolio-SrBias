import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-scroll'
import { useTheme } from '../context/ThemeContext'
import { FaChevronDown, FaGlobe } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, changeLanguage } = useTheme()
  const navbarRef = useRef(null)
  const [navbarHeight, setNavbarHeight] = useState(0)

  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        setNavbarHeight(entry.contentRect.height)
      }
    })

    if (navbarRef.current) {
      resizeObserver.observe(navbarRef.current)
    }

    return () => resizeObserver.disconnect()
  }, [])

  const navItems = {
    en: [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About Me' },
      { id: 'technologies', label: 'Technologies' },
      { id: 'projects', label: 'Projects' },
      { id: 'contact', label: 'Contact' }
    ],
    es: [
      { id: 'home', label: 'Inicio' },
      { id: 'about', label: 'Sobre Mí' },
      { id: 'technologies', label: 'Tecnologías' },
      { id: 'projects', label: 'Proyectos' },
      { id: 'contact', label: 'Contacto' }
    ],
    pt: [
      { id: 'home', label: 'Início' },
      { id: 'about', label: 'Sobre Mim' },
      { id: 'technologies', label: 'Tecnologias' },
      { id: 'projects', label: 'Projetos' },
      { id: 'contact', label: 'Contato' }
    ]
  }

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'pt', label: 'Português' }
  ]

  const getOffset = (sectionId) => {
    return -(navbarHeight - 25)
  }

  return (
    <nav ref={navbarRef} className="fixed top-0 left-0 right-0 z-50 bg-nav backdrop-blur-sm">
      <div className="h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name with Dropdown */}
          <div className="flex-shrink-0 relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-2 text-primary hover:text-accent transition-all duration-300 ease-in-out bg-transparent"
            >
              <h1 className="text-xl font-bold">Tobias Pedrouzo</h1>
              <FaChevronDown className={`w-4 h-4 transition-all duration-300 ease-in-out ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg bg-card backdrop-blur-sm border border-primary">
                <div className="py-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        changeLanguage(lang.code)
                        setIsDropdownOpen(false)
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        language === lang.code ? 'text-accent' : 'text-primary hover:text-accent'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems[language].map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={getOffset(item.id)}
                  duration={500}
                  className="relative text-primary hover:text-accent cursor-pointer transition-all duration-300 ease-in-out group"
                  onSetActive={() => setActiveSection(item.id)}
                  onClick={() => {
                    setTimeout(() => {
                      const element = document.getElementById(item.id);
                      const headerOffset = navbarHeight - 25;
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }, 50);
                  }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out" />
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-primary hover:text-accent transition-all duration-300 ease-in-out"
              aria-label="Open menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-card backdrop-blur-sm border-t border-primary">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems[language].map((item) => (
              <Link
                key={item.id}
                to={item.id}
                spy={true}
                smooth={true}
                offset={getOffset(item.id)}
                duration={500}
                className="block px-3 py-2 text-base font-medium text-primary hover:text-accent transition-all duration-300 ease-in-out"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setTimeout(() => {
                    const element = document.getElementById(item.id);
                    const headerOffset = navbarHeight - 25;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }, 50);
                }}
                onSetActive={() => setActiveSection(item.id)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar 