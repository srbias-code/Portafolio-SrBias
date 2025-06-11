import { motion } from 'framer-motion'
import { FaCode, FaGraduationCap, FaLightbulb } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'

const About = () => {
  const { language } = useTheme()

  const translations = {
    title: {
      en: 'About Me',
      es: 'Sobre Mí',
      pt: 'Sobre Mim'
    },
    subtitle: {
      en: 'Young Developer & Future Economist',
      es: 'Joven Desarrollador & Futuro Economista',
      pt: 'Jovem Desenvolvedor & Futuro Economista'
    },
    description: {
      en: "I'm Tobias, a 17-year-old developer from Argentina with a passion for technology and economics. Currently self-taught in programming, I'm on a journey to combine my love for technology with my future studies in Economics and Finance. I believe in continuous learning and exploring new horizons.",
      es: "Soy Tobias, un desarrollador de 17 años de Argentina con pasión por la tecnología y la economía. Actualmente autodidacta en programación, estoy en un camino para combinar mi amor por la tecnología con mis futuros estudios en Economía y Finanzas. Creo en el aprendizaje continuo y la exploración de nuevos horizontes.",
      pt: "Sou Tobias, um desenvolvedor de 17 anos da Argentina com paixão por tecnologia e economia. Atualmente autodidata em programação, estou em uma jornada para combinar meu amor pela tecnologia com meus futuros estudos em Economia e Finanças. Acredito no aprendizado contínuo e na exploração de novos horizontes."
    },
    roles: {
      developer: {
        title: {
          en: 'Developer',
          es: 'Desarrollador',
          pt: 'Desenvolvedor'
        },
        description: {
          en: 'Student at Digital House, leading technology education company in Argentina',
          es: 'Estudiante en Digital House, empresa líder en educación tecnológica en Argentina',
          pt: 'Estudante na Digital House, empresa líder em educação tecnológica na Argentina'
        }
      },
      economics: {
        title: {
          en: 'Economics',
          es: 'Economía',
          pt: 'Economia'
        },
        description: {
          en: 'Passionate about economics and finance, seeking to combine technology and economic analysis',
          es: 'Apasionado por la economía y las finanzas, buscando combinar tecnología y análisis económico',
          pt: 'Apaixonado por economia e finanças, buscando combinar tecnologia e análise econômica'
        }
      }
    }
  }

  return (
    <section id="about" className="py-20 bg-black relative">
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4 relative inline-block">
            {translations.title[language]}
            <motion.div
              className="absolute -bottom-2 left-0 w-full h-1 bg-red-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </h2>
          <p className="text-2xl text-gray-400 mt-4">{translations.subtitle[language]}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="card-primary p-8 rounded-2xl border border-gray-800 hover:border-red-500/50 transition-all duration-300">
              <p className="text-lg text-gray-300 leading-relaxed">
                {translations.description[language]}
              </p>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-red-500"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-red-500"></div>
          </motion.div>

          {/* Right Column - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                viewport={{ once: true }}
                className="card-secondary p-6 rounded-xl border border-gray-800 hover:border-red-500/50 transition-all duration-300"
              >
                <FaCode className="w-8 h-8 text-red-500 mb-4" />
                <h3 className="text-white font-semibold mb-2">{translations.roles.developer.title[language]}</h3>
                <p className="text-gray-400 text-sm">{translations.roles.developer.description[language]}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                viewport={{ once: true }}
                className="card-secondary p-6 rounded-xl border border-gray-800 hover:border-red-500/50 transition-all duration-300"
              >
                <FaGraduationCap className="w-8 h-8 text-red-500 mb-4" />
                <h3 className="text-white font-semibold mb-2">{translations.roles.economics.title[language]}</h3>
                <p className="text-gray-400 text-sm">{translations.roles.economics.description[language]}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                viewport={{ once: true }}
                className="card-secondary p-6 rounded-xl border border-gray-800 hover:border-red-500/50 transition-all duration-300"
              >
                <FaLightbulb className="w-8 h-8 text-red-500 mb-4" />
                <h3 className="text-white font-semibold mb-2">Innovation</h3>
                <p className="text-gray-400 text-sm">Developing innovative technological solutions with a focus on user experience</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                viewport={{ once: true }}
                className="card-secondary p-6 rounded-xl border border-gray-800 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mb-4">
                  <span className="text-red-500 text-xl font-bold">17</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Future</h3>
                <p className="text-gray-400 text-sm">Building my path in the world of technology and economics</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 