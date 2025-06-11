import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'
import { motion } from 'framer-motion'

const Hero = () => {
  const { language } = useTheme()

  const translations = {
    welcome: {
      en: 'Welcome to my portfolio',
      es: 'Bienvenido a mi portafolio',
      pt: 'Bem-vindo ao meu portfólio'
    },
    role: {
      en: 'Backend Developer',
      es: 'Desarrollador Backend',
      pt: 'Desenvolvedor Backend'
    },
    downloadCV: {
      en: 'Download CV',
      es: 'Descargar CV',
      pt: 'Baixar CV'
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 lg:col-span-6"
          >
            <div className="space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl md:text-3xl text-secondary"
              >
                {translations.welcome[language]}
              </motion.h2>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary"
              >
                Hello, I'm{' '}
                <span className="text-accent whitespace-nowrap">Tobias Pedrouzo</span>
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-2xl md:text-3xl text-secondary"
              >
                {translations.role[language]}
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="https://www.linkedin.com/in/tobias-pedrouzo-49a526323/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-secondary p-3 rounded-full hover:scale-110 transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className="w-6 h-6 text-accent" />
                </a>
                <a
                  href="https://github.com/srbias-code"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-secondary p-3 rounded-full hover:scale-110 transition-all duration-300"
                  aria-label="GitHub Profile"
                >
                  <FaGithub className="w-6 h-6 text-accent" />
                </a>
                <a
                  href="mailto:pedrouzotobias@gmail.com"
                  className="card-secondary p-3 rounded-full hover:scale-110 transition-all duration-300"
                  aria-label="Email"
                >
                  <FaEnvelope className="w-6 h-6 text-accent" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <div className="relative inline-block">
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="inline-block card-primary px-6 py-3 rounded-lg text-gray-400 cursor-not-allowed opacity-50 hover:scale-100"
                  >
                    {translations.downloadCV[language]}
                  </a>
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    {language === 'en' ? 'Coming Soon' : language === 'es' ? 'Próximamente' : 'Em Breve'}
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Image/Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-5 lg:col-span-6 flex justify-center"
          >
            <div className="card-primary w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden flex items-center justify-center transition-all duration-300">
              <img 
                src="/yo.png" 
                alt="Tobias Pedrouzo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 