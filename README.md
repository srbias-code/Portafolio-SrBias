# Portafolio Personal - SrBias

## 🚀 Tecnologías y Librerías Utilizadas

### Core
- **React** - Biblioteca principal para construir la interfaz de usuario
- **Vite** - Herramienta de construcción y desarrollo que ofrece un servidor de desarrollo rápido

### Estilos y UI
- **Tailwind CSS** - Framework de CSS para diseño rápido y responsivo
- **Framer Motion** - Biblioteca para animaciones fluidas y transiciones
- **React Icons** - Colección de iconos populares (FaReact, FaGithub, etc.)

### Navegación y Scroll
- **React Scroll** - Manejo suave del scroll y navegación entre secciones
- **React Beautiful DND** - Drag and Drop para la sección de tecnologías

### Context y Estado
- **React Context API** - Manejo del estado global (tema, idioma)

### Formularios y Validación
- **React Hook Form** - Manejo de formularios
- **EmailJS** - Servicio para enviar emails desde el formulario de contacto

### Optimización
- **React Lazy Loading** - Carga perezosa de componentes
- **React Suspense** - Manejo de estados de carga

## 📦 Instalación

```bash
# Clonar el repositorio
git clone [url-del-repositorio]

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## 🛠️ Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la versión de producción

## 🌐 Características

- Diseño responsivo
- Soporte multiidioma (Español, Inglés, Portugués)
- Animaciones suaves
- Sección de tecnologías interactiva con drag and drop
- Formulario de contacto funcional
- Tema oscuro por defecto

## 📝 Notas Adicionales

- El proyecto utiliza Vite como bundler principal
- Las animaciones están optimizadas para rendimiento
- El diseño es completamente responsivo
- La sección de tecnologías permite reorganizar las tecnologías mediante drag and drop
- El formulario de contacto está conectado a EmailJS para el envío de mensajes

## 🔧 Configuración de EmailJS

Para que el formulario de contacto funcione, necesitas configurar las siguientes variables de entorno:

```env
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
```

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.
