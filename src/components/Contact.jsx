import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FaEnvelope, FaUser, FaComment, FaPhone, FaUserAlt, FaExclamationCircle, FaCheckCircle } from 'react-icons/fa'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './Contact.css'
import emailValidator from 'email-validator'
import { parsePhoneNumber, isValidPhoneNumber } from 'libphonenumber-js'
import { useTheme } from '../context/ThemeContext'

// Lista de códigos de país más comunes
const countryCodes = [
  { code: '+54', country: 'Argentina' },
  { code: '+55', country: 'Brasil' },
  { code: '+56', country: 'Chile' },
  { code: '+57', country: 'Colombia' },
  { code: '+58', country: 'Venezuela' },
  { code: '+52', country: 'México' },
  { code: '+51', country: 'Perú' },
  { code: '+593', country: 'Ecuador' },
  { code: '+595', country: 'Paraguay' },
  { code: '+598', country: 'Uruguay' },
  { code: '+591', country: 'Bolivia' },
  { code: '+1', country: 'Estados Unidos/Canadá' },
  { code: '+34', country: 'España' },
  { code: '+44', country: 'Reino Unido' },
  { code: '+49', country: 'Alemania' },
  { code: '+33', country: 'Francia' },
  { code: '+39', country: 'Italia' },
  { code: '+86', country: 'China' },
  { code: '+81', country: 'Japón' },
  { code: '+82', country: 'Corea del Sur' },
  { code: '+91', country: 'India' },
  { code: '+61', country: 'Australia' },
  { code: '+64', country: 'Nueva Zelanda' }
]

const translations = {
  title: {
    en: 'Contact Me',
    es: 'Contáctame',
    pt: 'Entre em Contato'
  },
  subtitle: {
    en: 'Let\'s work together',
    es: 'Trabajemos juntos',
    pt: 'Vamos trabalhar juntos'
  },
  name: {
    en: 'Name',
    es: 'Nombre',
    pt: 'Nome'
  },
  email: {
    en: 'Email',
    es: 'Correo',
    pt: 'E-mail'
  },
  phone: {
    en: 'Phone',
    es: 'Teléfono',
    pt: 'Telefone'
  },
  message: {
    en: 'Message',
    es: 'Mensaje',
    pt: 'Mensagem'
  },
  send: {
    en: 'Send Message',
    es: 'Enviar Mensaje',
    pt: 'Enviar Mensagem'
  },
  sending: {
    en: 'Sending...',
    es: 'Enviando...',
    pt: 'Enviando...'
  },
  messagePlaceholder: {
    en: 'Your message (minimum 20 characters, maximum 500)',
    es: 'Tu mensaje (mínimo 20 caracteres, máximo 500)',
    pt: 'Sua mensagem (mínimo 20 caracteres, máximo 500)'
  },
  characters: {
    en: 'characters',
    es: 'caracteres',
    pt: 'caracteres'
  }
}

const Contact = () => {
  const { language } = useTheme()
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [selectedCountryCode, setSelectedCountryCode] = useState('+54')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [notification, setNotification] = useState({ message: '', type: '', details: '' })
  const [lastSubmissionTime, setLastSubmissionTime] = useState(null)
  const [submissionCount, setSubmissionCount] = useState(0)

  // Validación de email
  const isValidEmail = (email) => {
    return emailValidator.validate(email) && email.length >= 3
  }

  // Validación de teléfono
  const isValidPhone = (phone) => {
    return phone.length >= 8 // Mínimo 8 dígitos incluyendo el código de país
  }

  // Validación de longitud del mensaje
  const isValidMessageLength = (message) => {
    return message.length >= 20 && message.length <= 500 // Reducido a 20-500 caracteres
  }

  // Verificar cooldown y límites de envío
  const checkSubmissionLimits = () => {
    const now = Date.now()
    const oneWeek = 7 * 24 * 60 * 60 * 1000 // 7 days in milliseconds
    const tenMinutes = 10 * 60 * 1000 // 10 minutes in milliseconds

    // Check cooldown period
    if (lastSubmissionTime && (now - lastSubmissionTime) < tenMinutes) {
      const remainingTime = Math.ceil((tenMinutes - (now - lastSubmissionTime)) / 60000)
      throw new Error('Too Many Requests', `Please wait ${remainingTime} minutes before sending another message.`)
    }

    // Check weekly limit
    const submissionCount = parseInt(localStorage.getItem('submissionCount') || '0')
    if (submissionCount >= 5) {
      const oldestSubmission = localStorage.getItem('oldestSubmission')
      if (oldestSubmission && (now - parseInt(oldestSubmission)) < oneWeek) {
        throw new Error('Weekly Limit Reached', 'You have reached the limit of messages for the week. Please try again next week.')
      } else {
        // Reset counter if a week has passed
        localStorage.setItem('submissionCount', '0')
        localStorage.setItem('oldestSubmission', now.toString())
      }
    }
  }

  // Mostrar notificación
  const showNotification = (message, type, details = '') => {
    setNotification({ message, type, details })
    setTimeout(() => {
      setNotification({ message: '', type: '', details: '' })
    }, 5000)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(false)
    setSuccess(false)

    try {
      // Validations
      if (!isValidEmail(form.email)) {
        throw new Error('Invalid Email', 'Please enter a valid email (minimum 3 characters).')
      }

      if (!isValidPhone(form.phone)) {
        throw new Error('Invalid Phone', 'Please enter a valid phone number.')
      }

      if (!isValidMessageLength(form.message)) {
        throw new Error('Invalid Message', 'Message must be between 20 and 500 characters')
      }

      // Check cooldown
      checkSubmissionLimits()

      // Send email
      const response = await emailjs.send(
        'service_b3yt83c',
        'template_gxa2xmo',
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
          to_email: 'pedrouzotobias@gmail.com',
          time: new Date().toLocaleString()
        },
        'vOa1pTrdqPQIttlBc'
      )

      if (response.status === 200) {
        // Update submission count
        const currentCount = parseInt(localStorage.getItem('submissionCount') || '0')
        localStorage.setItem('submissionCount', (currentCount + 1).toString())
        
        // Set oldest submission time if this is the first submission
        if (currentCount === 0) {
          localStorage.setItem('oldestSubmission', Date.now().toString())
        }

        setSuccess(true)
        showNotification('Message sent successfully!', 'success', 'We will respond to you shortly.')
        setForm({
          name: '',
          email: '',
          phone: '',
          message: ''
        })
        setLastSubmissionTime(Date.now())
      } else {
        throw new Error('Error sending message', 'Please try again later.')
      }
    } catch (error) {
      setError(true)
      showNotification(error.message, 'error', error.details || 'Please check your information and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
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
              className="absolute -bottom-2 left-0 w-full h-1 bg-accent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </h2>
          <p className="text-2xl text-secondary mt-4">{translations.subtitle[language]}</p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Notification */}
          {notification.message && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mb-6 p-4 rounded-lg shadow-lg transform transition-all duration-300 ${
                notification.type === 'success' 
                  ? 'bg-green-700 border-l-4 border-green-500' 
                  : 'bg-red-700 border-l-4 border-red-500'
              }`}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  {notification.type === 'success' ? (
                    <FaCheckCircle className="h-6 w-6 text-green-500" />
                  ) : (
                    <FaExclamationCircle className="h-6 w-6 text-red-500" />
                  )}
                </div>
                <div className="ml-3">
                  <h3 className={`text-lg font-medium ${
                    notification.type === 'success' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {notification.message}
                  </h3>
                  {notification.details && (
                    <p className={`mt-1 text-sm ${
                      notification.type === 'success' ? 'text-green-300' : 'text-red-300'
                    }`}>
                      {notification.details}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="card-primary p-8 rounded-2xl space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-secondary mb-1">
                {translations.name[language]}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUserAlt className="h-5 w-5 text-secondary" />
                </div>
                <input
                  type="text"
                  id="name"
                  value={form.name}
                  onChange={(e) => setForm(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full pl-10 pr-4 py-2 bg-card border border-gray-800 rounded-lg text-white placeholder-secondary focus:outline-none focus:border-accent transition-all duration-300"
                  placeholder={translations.name[language]}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-secondary mb-1">
                {translations.email[language]}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="h-5 w-5 text-secondary" />
                </div>
                <input
                  type="email"
                  id="email"
                  value={form.email}
                  onChange={(e) => setForm(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full pl-10 pr-4 py-2 bg-card border border-gray-800 rounded-lg text-white placeholder-secondary focus:outline-none focus:border-accent transition-all duration-300"
                  placeholder={translations.email[language]}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-secondary mb-1">
                {translations.phone[language]}
              </label>
              <PhoneInput
                country={'ar'}
                value={form.phone}
                onChange={(phone) => setForm(prev => ({ ...prev, phone }))}
                inputClass="w-full px-4 py-2 bg-card border border-gray-800 rounded-lg text-white placeholder-secondary focus:outline-none focus:border-accent hover:border-accent/50 transition-all duration-300"
                buttonClass="bg-card border border-gray-800 rounded-l-lg hover:border-accent/50"
                dropdownClass="bg-card border border-gray-800"
                searchClass="bg-card border border-gray-800 text-white"
                containerClass="phone-input-container"
                inputStyle={{
                  backgroundColor: 'transparent',
                  borderColor: 'var(--border)',
                  color: 'var(--text)',
                  width: '100%'
                }}
                buttonStyle={{
                  backgroundColor: 'transparent',
                  borderColor: 'var(--border)',
                  borderRight: 'none'
                }}
                dropdownStyle={{
                  backgroundColor: 'var(--card-bg)',
                  borderColor: 'var(--border)'
                }}
                searchStyle={{
                  backgroundColor: 'transparent',
                  borderColor: 'var(--border)',
                  color: 'var(--text)'
                }}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-secondary mb-1">
                {translations.message[language]}
              </label>
              <div className="relative">
                <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                  <FaComment className="h-5 w-5 text-secondary" />
                </div>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => setForm(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full pl-10 pr-4 py-2 bg-card border border-gray-800 rounded-lg text-white placeholder-secondary focus:outline-none focus:border-accent transition-all duration-300 min-h-[150px] resize-y"
                  placeholder={translations.message[language]}
                  required
                />
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-6 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                translations.send[language]
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact 