import { useState } from 'react'
import { FaGlobe, FaChevronDown } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'
import { motion } from 'framer-motion'

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { language, changeLanguage } = useTheme()

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'pt', label: 'Português' }
  ]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-white hover:text-red-500 transition-colors duration-300"
        aria-label="Select language"
      >
        <FaGlobe className="w-4 h-4" />
        <span className="hidden sm:inline">{languages.find(lang => lang.code === language)?.label}</span>
        <FaChevronDown className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-black/95 backdrop-blur-md border border-gray-800 py-1"
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                changeLanguage(lang.code)
                setIsOpen(false)
              }}
              className={`w-full px-4 py-2 text-left text-sm ${
                language === lang.code
                  ? 'text-red-500'
                  : 'text-white hover:text-red-500'
              } transition-colors duration-300`}
            >
              {lang.label}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  )
}

export default LanguageSelector 