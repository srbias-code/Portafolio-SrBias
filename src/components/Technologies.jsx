import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaLaptopCode, FaNodeJs, FaServer, FaJava, FaCode, FaDatabase, FaAws, FaChartBar } from 'react-icons/fa'
import { BsCloud } from 'react-icons/bs'
import { useTheme } from '../context/ThemeContext'

const Technologies = () => {
  const { language } = useTheme()

  const learningTechs = ['React', 'UX/UI', 'Java', 'Go', 'NoSQL', 'AWS', 'Cloud', 'Power BI']

  const translations = {
    title: {
      en: 'Technologies',
      es: 'Tecnologías',
      pt: 'Tecnologias'
    },
    subtitle: {
      en: 'My Tech Stack',
      es: 'Mi Stack Tecnológico',
      pt: 'Meu Stack Tecnológico'
    },
    categories: {
      frontend: {
        en: 'Frontend',
        es: 'Frontend',
        pt: 'Frontend'
      },
      backend: {
        en: 'Backend',
        es: 'Backend',
        pt: 'Backend'
      },
      databases: {
        en: 'Databases',
        es: 'Bases de Datos',
        pt: 'Bancos de Dados'
      },
      cloudanalytics: {
        en: 'Cloud & Analytics',
        es: 'Nube y Análisis',
        pt: 'Nuvem e Análise'
      }
    }
  }

  const getInitialCategories = () => [
    {
      id: "frontend",
      title: translations.categories.frontend[language],
      technologies: [
        { id: "html5", name: "HTML5", icon: FaHtml5 },
        { id: "css3", name: "CSS3", icon: FaCss3Alt },
        { id: "javascript", name: "JavaScript", icon: FaJs },
        { id: "react", name: "React", icon: FaReact },
        { id: "uxui", name: "UX/UI", icon: FaLaptopCode }
      ]
    },
    {
      id: "backend",
      title: translations.categories.backend[language],
      technologies: [
        { id: "nodejs", name: "Node.js", icon: FaNodeJs },
        { id: "expressjs", name: "Express.js", icon: FaServer },
        { id: "java", name: "Java", icon: FaJava },
        { id: "go", name: "Go", icon: FaCode }
      ]
    },
    {
      id: "databases",
      title: translations.categories.databases[language],
      technologies: [
        { id: "mysql", name: "MySQL", icon: FaDatabase },
        { id: "nosql", name: "NoSQL", icon: FaDatabase }
      ]
    },
    {
      id: "cloudanalytics",
      title: translations.categories.cloudanalytics[language],
      technologies: [
        { id: "aws", name: "AWS", icon: FaAws },
        { id: "cloud", name: "Cloud", icon: BsCloud },
        { id: "powerbi", name: "Power BI", icon: FaChartBar }
      ]
    }
  ]

  const [categories, setCategories] = useState(getInitialCategories())

  const onDragEnd = (result) => {
    if (!result.destination) return

    const { source, destination } = result
    const category = categories.find(cat => cat.id === source.droppableId)
    const newTechnologies = Array.from(category.technologies)
    const [removed] = newTechnologies.splice(source.index, 1)
    newTechnologies.splice(destination.index, 0, removed)

    setCategories(categories.map(cat => 
      cat.id === source.droppableId 
        ? { ...cat, technologies: newTechnologies }
        : cat
    ))
  }

  return (
    <section id="technologies" className="bg-black relative">
      <div className="container mx-auto px-4 py-20">
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

        <DragDropContext onDragEnd={onDragEnd}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category) => (
              <Droppable key={category.id} droppableId={category.id}>
                {(provided, snapshot) => (
                  <motion.div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className={`card-primary p-6 rounded-xl border transition-all duration-300 ${
                      snapshot.isDraggingOver ? 'border-red-500/50 bg-gray-900/70' : 'border-gray-800 hover:border-red-500/50'
                    }`}
                  >
                    <h3 className="text-2xl font-semibold text-white mb-6">{translations.categories[category.id][language]}</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {category.technologies.map((tech, index) => (
                        <Draggable key={tech.id} draggableId={tech.id} index={index}>
                          {(provided, snapshot) => (
                            <motion.div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={{
                                ...provided.draggableProps.style,
                                opacity: snapshot.isDragging ? 0.8 : 1,
                                position: snapshot.isDragging ? 'fixed' : 'relative',
                                zIndex: snapshot.isDragging ? 9999 : 'auto',
                                cursor: 'grab',
                                transform: snapshot.isDragging 
                                  ? `translate(${provided.draggableProps.style?.transform?.match(/translate\(([^)]+)\)/)?.[1] || '0px, 0px'}) translate(-50%, -50%)`
                                  : 'none',
                                pointerEvents: snapshot.isDragging ? 'none' : 'auto',
                                width: snapshot.isDragging ? 'auto' : '100%',
                                height: snapshot.isDragging ? 'auto' : '100%',
                                left: snapshot.isDragging ? '50%' : 'auto',
                                top: snapshot.isDragging ? '50%' : 'auto'
                              }}
                              className={`flex flex-col items-center p-4 rounded-lg transition-all duration-300 ${
                                snapshot.isDragging 
                                  ? 'bg-gray-800/80 shadow-lg' 
                                  : 'bg-gray-800/50 hover:bg-gray-800/80'
                              }`}
                            >
                              <tech.icon className="w-8 h-8 text-red-500 mb-2" />
                              <span className="text-sm text-gray-300">{tech.name}</span>
                              {learningTechs.includes(tech.name) && (
                                <span className="text-xs px-1.5 py-0.5 rounded-full bg-blue-500/20 text-blue-500 mt-1">
                                  Learning
                                </span>
                              )}
                            </motion.div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  </motion.div>
                )}
              </Droppable>
            ))}
          </div>
        </DragDropContext>
      </div>
    </section>
  )
}

export default Technologies 