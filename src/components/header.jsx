import { useTheme } from '../context/ThemeContext'

function Header() {
    const { language } = useTheme()

    const translations = {
        home: {
            en: 'Home',
            es: 'Inicio',
            pt: 'Início'
        },
        about: {
            en: 'About',
            es: 'Sobre Mí',
            pt: 'Sobre Mim'
        },
        projects: {
            en: 'Projects',
            es: 'Proyectos',
            pt: 'Projetos'
        },
        technologies: {
            en: 'Technologies',
            es: 'Tecnologías',
            pt: 'Tecnologias'
        },
        contact: {
            en: 'Contact',
            es: 'Contacto',
            pt: 'Contato'
        }
    }

    return (
        <>
            <header className="bg-black text-white p-6 flex justify-between items-center shadow-md border-b border-gray-700">
                <div className="flex items-center">
                    <h1 className="text-xl font-bold">SrBias .</h1>
                </div>
                <nav className="space-x-8 font-nomral">
                    <a
                        href="#home"
                        className="relative inline-block after:content-[''] after:block after:h-[2px] after:bg-red-500 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:origin-left hover:after:scale-x-100"
                    >
                        {translations.home[language]}
                    </a>
                    <a
                        href="#about"
                        className="relative inline-block after:content-[''] after:block after:h-[2px] after:bg-red-500 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:origin-left hover:after:scale-x-100"
                    >
                        {translations.about[language]}
                    </a>
                    <a
                        href="#projects"
                        className="relative inline-block after:content-[''] after:block after:h-[2px] after:bg-red-500 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:origin-left hover:after:scale-x-100"
                    >
                        {translations.projects[language]}
                    </a>
                    <a
                        href="#technologies"
                        className="relative inline-block after:content-[''] after:block after:h-[2px] after:bg-red-500 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:origin-left hover:after:scale-x-100"
                    >
                        {translations.technologies[language]}
                    </a>
                    <a
                        href="#contact"
                        className="relative inline-block after:content-[''] after:block after:h-[2px] after:bg-red-500 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:origin-left hover:after:scale-x-100"
                    >
                        {translations.contact[language]}
                    </a>
                </nav>
            </header>
        </>
    );
}

export default Header;