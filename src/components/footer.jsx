import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'

const Footer = () => {
  const { language } = useTheme()

  const translations = {
    rights: {
      en: 'All rights reserved',
      es: 'Todos los derechos reservados',
      pt: 'Todos os direitos reservados'
    },
    made: {
      en: 'Made with ❤️ by',
      es: 'Hecho con ❤️ por',
      pt: 'Feito com ❤️ por'
    }
  }

  const socialLinks = [
    {
      icon: <FaGithub className="w-6 h-6" />,
      url: 'https://github.com/srbias-code',
      label: 'GitHub'
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      url: 'https://www.linkedin.com/in/srbias/',
      label: 'LinkedIn'
    },
    {
      icon: <FaTwitter className="w-6 h-6" />,
      url: 'https://twitter.com/srbias_code',
      label: 'Twitter'
    }
  ]

  return (
    <footer className="border-t border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Logo and Name */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">SrBias</span>
            <span className="text-red-500">.</span>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm">
            <p>
              {translations.made[language]} <span className="text-white">SrBias</span>
            </p>
            <p>© {new Date().getFullYear()} - {translations.rights[language]}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer