import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'
import * as SiIcons from 'react-icons/si'

const Projects = () => {
  const { language } = useTheme()

  const translations = {
    title: {
      en: 'Projects',
      es: 'Proyectos',
      pt: 'Projetos'
    },
    subtitle: {
      en: 'My Recent Work',
      es: 'Mi Trabajo Reciente',
      pt: 'Meu Trabalho Recente'
    },
    buttons: {
      github: {
        en: 'GitHub',
        es: 'GitHub',
        pt: 'GitHub'
      },
      demo: {
        en: 'Live Demo',
        es: 'Demo en Vivo',
        pt: 'Demo ao Vivo'
      }
    }
  }

  const techInfo = {
    'React': { icon: SiIcons.SiReact, color: '#61DAFB' },
    'Tailwind CSS': { icon: SiIcons.SiTailwindcss, color: '#06B6D4' },
    'Framer Motion': { icon: SiIcons.SiFramer, color: '#0055FF' },
    'HTML': { icon: SiIcons.SiHtml5, color: '#E34F26' },
    'CSS': { icon: SiIcons.SiCss3, color: '#1572B6' },
    'JavaScript': { icon: SiIcons.SiJavascript, color: '#F7DF1E' },
    'TypeScript': { icon: SiIcons.SiTypescript, color: '#3178C6' },
    'Node.js': { icon: SiIcons.SiNodedotjs, color: '#339933' },
    'MongoDB': { icon: SiIcons.SiMongodb, color: '#47A248' },
    'Express': { icon: SiIcons.SiExpress, color: '#000000' },
    'Git': { icon: SiIcons.SiGit, color: '#F05032' },
    'GitHub': { icon: SiIcons.SiGithub, color: '#181717' },
    'Next.js': { icon: SiIcons.SiNextdotjs, color: '#000000' },
    'UX': { icon: null, color: '#FF6B6B' },
    'UI': { icon: null, color: '#4ECDC4' },
    'Java': { icon: SiIcons.SiJava, color: '#007396' },
    'Go': { icon: SiIcons.SiGo, color: '#00ADD8' },
    'NoSQL': { icon: null, color: '#FF9F1C' },
    'AWS': { icon: SiIcons.SiAmazonaws, color: '#FF9900' },
    'Cloud': { icon: null, color: '#F6820D' },
    'Power BI': { icon: null, color: '#F2C811' }
  }

  const projects = [
     {
      id: 1,
      title: {
        en: 'Portafolio Cooperativo',
        es: 'Portafolio Cooperativo',
        pt: 'Portfólio Cooperativo'
      },
      description: {
        en: 'A portfolio created in collaboration with my colleague Tomas Mendez Nacher.',
        es: 'Un portafolio realizado en conjunto con mi compañero Tomas Mendez Nacher.',
        pt: 'Um portfólio feito em conjunto com meu colega Tomas Mendez Nacher.'
      },
      technologies: ['HTML', 'CSS', 'React', 'JavaScript', 'Tailwind CSS'],
      github: 'https://github.com/Tot-s/Portfolio-T-T', 
      demo: '',
      image: '/images/cooperativo.png'
    },
    {
      id: 2,
      title: {
        en: 'Personal Portfolio ',
        es: 'Portafolio Personal ',
        pt: 'Portfólio Pessoal'
      },
      description: {
        en: 'My personal portfolio website, showcasing my skills and projects.',
        es: 'Mi sitio web de portafolio personal, mostrando mis habilidades y proyectos.',
        pt: 'Meu site de portfólio pessoal, apresentando minhas habilidades e projetos.'
      },
      technologies: ['HTML', 'CSS'], // <-- Solo HTML y CSS
      github: 'https://github.com/srbias-code/portafolio-srbias',
      demo: 'https://srbias-proyecto-maquetacion-dh.netlify.app/',
      image: '/images/srbiasweb.png'
    },
    {
      id: 3,
      title: {
        en: 'Google Homepage Clone',
        es: 'Clon de Página de Inicio de Google',
        pt: 'Clone da Página Inicial do Google'
      },
      description: {
        en: 'A faithful recreation of the classic Google search page using HTML and CSS.',
        es: 'Una recreación fiel de la página de búsqueda clásica de Google usando HTML y CSS.',
        pt: 'Uma recriação fiel da página de pesquisa clássica do Google usando HTML e CSS.'
      },
      technologies: ['HTML', 'CSS', 'JavaScript', 'API'],
      github: 'https://github.com/srbias-code/Google-Homepage-Clone',
      demo: 'https://srbias-google-homepage-clone.netlify.app/',
      image: '/images/google.png'
    },
    {
      id: 4,
      title: {
        en: 'Info Weather App',
        es: 'Aplicación de Información del Clima',
        pt: 'Aplicativo de Informações do Clima'
      },
      description: {
        en: 'A simple web application to get real-time weather data for any city.',
        es: 'Una aplicación web sencilla para obtener datos meteorológicos en tiempo real de cualquier ciudad.',
        pt: 'Um aplicativo web simples para obter dados meteorológicos em tempo real de qualquer cidade.'
      },
      technologies: ['React', 'API Integration', 'JavaScript'],
      github: 'https://github.com/srbias-code/Weather-App---Digital-House',
      demo: 'https://info-weather-app-now.netlify.app/',
      image: '/images/weatter.png'
    },
    {
      id: 5,
      title: {
        en: 'Login Validation with JavaScript',
        es: 'Validación de Inicio de Sesión con JavaScript',
        pt: 'Validação de Login com JavaScript'
      },
      description: {
        en: 'A front-end project demonstrating client-side form validation using pure JavaScript.',
        es: 'Un proyecto front-end que demuestra la validación de formularios del lado del cliente usando JavaScript puro.',
        pt: 'Um projeto front-end que demonstra a validação de formulários do lado do cliente usando JavaScript puro.'
      },
      technologies: ['JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/srbias-code/Validacion-formulario-curso-JavaScript',
      demo: 'https://login-validado-javascript-dh.netlify.app/',
      image: '/images/login.png'
    },
    {
      id: 6,
      title: {
        en: 'SrBias Dev Portfolio',
        es: 'Portafolio de SrBias Dev',
        pt: 'Portfólio de SrBias Dev'
      },
      description: {
        en: 'An earlier version or alternative design of my developer portfolio.',
        es: 'Una versión anterior o diseño alternativo de mi portafolio de desarrollador.',
        pt: 'Uma versão anterior ou design alternativo do meu portfólio de desenvolvedor.'
      },
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/srbias-code/SrBias-Dev',
      demo: 'https://srbias-dev.netlify.app/',
      image: '/images/firstportafolio.png'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-black relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 relative inline-block">
            {translations.title[language]}
            <motion.div
              className="absolute -bottom-2 left-0 w-full h-1 bg-red-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mt-4">{translations.subtitle[language]}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-primary rounded-xl border border-gray-800 hover:border-red-500/50 transition-all duration-300 overflow-hidden"
            >
              <div className="w-full h-48 overflow-hidden rounded-t-xl bg-gray-800 relative">
                <img 
                  src={project.image} 
                  alt={project.title[language]} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" 
                  onError={(e) => {
                    console.error(`Failed to load image: ${project.image}`);
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center bg-gray-800 text-white">
                        <span class="text-sm">Imagen no encontrada</span>
                      </div>
                    `;
                  }}
                />
              </div>
              <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title[language]}</h3>
                <p className="text-gray-400 mb-4 flex-grow">{project.description[language]}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => {
                    const techData = techInfo[tech] || { icon: null, color: '#666666' }
                    const Icon = techData.icon
                    return (
                      <div key={index} className="flex items-center gap-1">
                        {Icon ? (
                          <Icon className="text-xl" style={{ color: techData.color }} />
                        ) : (
                          <div className="w-4 h-4 rounded-full" style={{ backgroundColor: techData.color }} />
                        )}
                        <span className="text-sm">{tech}</span>
                      </div>
                    )
                  })}
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-4 py-2 bg-gray-800/50 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 text-sm"
                    >
                      <FaGithub className="w-4 h-4" />
                      {translations.buttons.github[language]}
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300 text-sm"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      {translations.buttons.demo[language]}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects