// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import logoAnclora from './assets/Logo_Anclora_App.png';

// Paleta de colores expandida con 8 colores adicionales
const colors = {
  // Fila superior - Azules principales (expandida)
  coral: '#F28B82',           // Nuevo - Coral
  golden: '#A07D3A',          // Nuevo - Dorado
  deepNavy: '#1A2C42',        // Azul Marino Profundo
  darkBlue: '#2A4B8A',        // Azul Oscuro
  mediumBlue: '#3A7CA0',      // Azul Medio
  turquoise: '#4ABBC4',       // Turquesa
  aqua: '#5AD9C8',            // Agua
  mintGreen: '#90EE90',       // Nuevo - Verde Menta
  
  // Fila inferior - Neutros (expandida)
  peachSoft: '#FFDAB9',       // Nuevo - Melocotón Suave
  yellowPale: '#FFFACD',      // Nuevo - Amarillo Pálido
  lightBlueGray: '#B0C4DE',   // Azul Claro Grisáceo
  lightGray: '#D3D3D3',       // Gris Claro
  white: '#FFFFFF',           // Blanco Puro
  beige: '#F5F5DC',           // Beige Suave
  rosePale: '#FFE4E1',        // Rosa Pálido
  lavenderPale: '#E6E6FA',    // Nuevo - Lavanda Pálido
  
  // Colores de uso general
  primary: '#0071E3',         // Azul Apple
  secondary: '#34C759',       // Verde Apple
  accent: '#FF9500',          // Naranja Apple
  text: '#1e293b',
  darkGray: '#64748b'
};

// Datos predefinidos por audiencia
const audienceData = {
  creadores: {
    anclas: ['Crear contenido diario', 'Analizar métricas', 'Interactuar con audiencia', 'Investigar tendencias'],
    categorias: ['Contenido', 'Marketing', 'Análisis', 'Investigación'],
    habitos: ['Crear contenido diario', 'Revisar comentarios', 'Planificar posts'],
    objetivos: ['Lanzar nuevo canal de YouTube', 'Alcanzar 10K seguidores', 'Monetizar contenido']
  },
  freelancers: {
    anclas: ['Buscar clientes', 'Entregar proyecto', 'Facturar', 'Actualizar portfolio'],
    categorias: ['Clientes', 'Proyectos', 'Finanzas', 'Marketing'],
    habitos: ['Buscar nuevos clientes', 'Actualizar portfolio', 'Networking'],
    objetivos: ['Conseguir 3 clientes nuevos', 'Aumentar tarifas 20%', 'Crear curso online']
  },
  emprendedores: {
    anclas: ['Desarrollar MVP', 'Reunión con inversores', 'Validar mercado', 'Contratar equipo'],
    categorias: ['Producto', 'Inversión', 'Marketing', 'Equipo'],
    habitos: ['Validar hipótesis', 'Contactar inversores', 'Analizar competencia'],
    objetivos: ['Lanzar MVP', 'Conseguir inversión seed', 'Formar equipo core']
  },
  estudiantes: {
    anclas: ['Estudiar para examen', 'Entregar ensayo', 'Asistir a clase', 'Hacer ejercicios'],
    categorias: ['Estudios', 'Exámenes', 'Proyectos', 'Investigación'],
    habitos: ['Estudiar 2 horas diarias', 'Revisar apuntes', 'Hacer ejercicios'],
    objetivos: ['Aprobar semestre', 'Terminar tesis', 'Conseguir beca']
  }
};

function LandingPage() {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const headerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.white,
    borderBottom: `1px solid ${colors.lightGray}`,
    padding: '12px 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1000,
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  };

  const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px', // Reducido para acercar el eslogan al logo
    marginLeft: '-10px' // Mover más a la izquierda
  };

  const logoStyle = {
    height: '100px', // Aumentado aún más
    width: 'auto',
    cursor: 'pointer'
  };

  const sloganStyle = {
    fontSize: '20px',
    fontWeight: '600',
    color: colors.primary,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    letterSpacing: '-0.5px',
    textShadow: '0 1px 2px rgba(0,0,0,0.1)'
  };

  const navStyle = {
    display: 'flex',
    gap: '32px',
    alignItems: 'center'
  };

  const navLinkStyle = {
    color: colors.text,
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'color 0.3s ease'
  };

  const heroStyle = {
    background: `linear-gradient(135deg, ${colors.white} 0%, ${colors.lightBlueGray} 100%)`,
    padding: '160px 24px 80px', // Aumentado padding top para el logo más grande
    textAlign: 'center'
  };

  const heroTitleStyle = {
    fontSize: '64px',
    fontWeight: '700',
    color: colors.text,
    marginBottom: '24px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    letterSpacing: '-2px',
    lineHeight: '1.1'
  };

  const heroSubtitleStyle = {
    fontSize: '28px',
    fontWeight: '600',
    color: colors.primary,
    marginBottom: '32px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    letterSpacing: '-1px'
  };

  const heroDescriptionStyle = {
    fontSize: '20px',
    color: colors.darkGray,
    marginBottom: '48px',
    maxWidth: '800px',
    margin: '0 auto 48px',
    lineHeight: '1.6'
  };

  const ctaContainerStyle = {
    display: 'flex',
    gap: '24px',
    justifyContent: 'center',
    flexWrap: 'wrap'
  };

  const primaryButtonStyle = {
    backgroundColor: colors.primary,
    color: colors.white,
    padding: '16px 32px',
    borderRadius: '12px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '18px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: `0 4px 12px rgba(30, 58, 138, 0.3)`
  };

  const secondaryButtonStyle = {
    backgroundColor: colors.white,
    color: colors.primary,
    padding: '16px 32px',
    borderRadius: '12px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '18px',
    border: `2px solid ${colors.primary}`,
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  };

  const sectionStyle = {
    padding: '80px 24px',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const sectionTitleStyle = {
    fontSize: '48px',
    fontWeight: '700',
    color: colors.text,
    textAlign: 'center',
    marginBottom: '24px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    letterSpacing: '-1px'
  };

  const featuresGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '32px',
    marginTop: '64px'
  };

  const featureCardStyle = {
    backgroundColor: colors.white,
    padding: '32px',
    borderRadius: '16px',
    textAlign: 'center',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    border: `1px solid ${colors.lightGray}`,
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden'
  };

  // Estilos específicos para cada característica con degradados sutiles
  const anclajeCardStyle = {
    ...featureCardStyle,
    background: `linear-gradient(135deg, ${colors.white} 0%, ${colors.mediumBlue}20 100%)`,
    borderLeft: `4px solid ${colors.mediumBlue}`
  };

  const gamificacionCardStyle = {
    ...featureCardStyle,
    background: `linear-gradient(135deg, ${colors.white} 0%, ${colors.turquoise}20 100%)`,
    borderLeft: `4px solid ${colors.turquoise}`
  };

  const analiticaCardStyle = {
    ...featureCardStyle,
    background: `linear-gradient(135deg, ${colors.white} 0%, ${colors.aqua}20 100%)`,
    borderLeft: `4px solid ${colors.aqua}`
  };

  const audienceGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)', // Cambio a 2 columnas para reorganizar
    gap: '24px',
    marginTop: '48px'
  };

  const audienceCardStyle = {
    backgroundColor: colors.white,
    padding: '32px',
    borderRadius: '16px',
    textAlign: 'center',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    border: `2px solid ${colors.lightGray}`,
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  };

  const pricingGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '32px',
    marginTop: '48px'
  };

  const pricingCardStyle = {
    backgroundColor: colors.white,
    padding: '40px',
    borderRadius: '16px',
    textAlign: 'center',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    border: `2px solid ${colors.lightGray}`,
    position: 'relative',
    transition: 'all 0.3s ease'
  };

  const popularBadgeStyle = {
    position: 'absolute',
    top: '-12px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: colors.accent,
    color: colors.white,
    padding: '8px 24px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '600'
  };

  const testimonialsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '32px',
    marginTop: '48px'
  };

  const testimonialCardStyle = {
    backgroundColor: colors.white,
    padding: '32px',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    border: `1px solid ${colors.lightGray}`
  };

  const faqStyle = {
    backgroundColor: colors.lightBlueGray,
    padding: '80px 24px'
  };

  const faqItemStyle = {
    backgroundColor: colors.white,
    marginBottom: '16px',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  };

  const faqQuestionStyle = {
    padding: '24px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '18px',
    color: colors.text,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const contactStyle = {
    backgroundColor: colors.white,
    padding: '80px 24px'
  };

  const contactGridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '64px',
    maxWidth: '1000px',
    margin: '0 auto',
    marginTop: '48px'
  };

  const contactFormContainerStyle = {
    border: `2px solid ${colors.lightGray}`,
    borderRadius: '16px',
    padding: '32px',
    backgroundColor: colors.white,
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    maxWidth: '500px', // Limitar el ancho máximo
    width: '100%'
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  };

  const inputStyle = {
    padding: '16px',
    borderRadius: '8px',
    border: `2px solid ${colors.lightGray}`,
    fontSize: '16px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    transition: 'border-color 0.3s ease',
    width: '100%',
    boxSizing: 'border-box'
  };

  const emailInputStyle = {
    ...inputStyle,
    // Email más largo que nombre pero dentro del contenedor
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: '120px', // Tamaño adecuado para el mensaje
    resize: 'vertical',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  };

  const submitButtonStyle = {
    ...primaryButtonStyle,
    width: '100%',
    height: '56px' // Mismo alto que textarea
  };

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "¿Qué es el Anclaje Temporal?",
      answer: "El Anclaje Temporal es nuestro sistema único que te permite 'anclar' tus tareas en momentos específicos del tiempo, creando una línea temporal visual que te ayuda a organizar y priorizar tu trabajo de manera más efectiva."
    },
    {
      question: "¿Cómo funciona el sistema de gamificación?",
      answer: "Progresas de Grumete a Capitán completando tareas y objetivos. Cada logro te otorga puntos de experiencia naval, desbloqueando nuevas funcionalidades y reconocimientos en tu travesía hacia la productividad."
    },
    {
      question: "¿Puedo personalizar mi dashboard?",
      answer: "¡Absolutamente! Puedes seleccionar múltiples perfiles de audiencia y personalizar completamente tu dashboard con los módulos que más necesites para tu flujo de trabajo específico."
    },
    {
      question: "¿Hay una versión gratuita?",
      answer: "Sí, nuestro plan Grumete es completamente gratuito e incluye las funcionalidades básicas de Anclaje Temporal, seguimiento de hábitos, objetivos mensuales y presupuesto simple."
    },
    {
      question: "¿Funciona en dispositivos móviles?",
      answer: "Anclora está completamente optimizada para dispositivos móviles con un diseño responsive que se adapta perfectamente a smartphones y tablets."
    }
  ];

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header */}
      <header style={headerStyle}>
        <div style={logoContainerStyle}>
          <img 
            src={logoAnclora} 
            alt="Anclora Logo" 
            style={logoStyle}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
          <span style={sloganStyle}>Tu Ancla para la Productividad</span>
        </div>
        <nav style={navStyle}>
          <a style={navLinkStyle} onClick={() => scrollToSection('caracteristicas')}>Características</a>
          <a style={navLinkStyle} onClick={() => scrollToSection('precios')}>Precios</a>
          <a style={navLinkStyle} onClick={() => scrollToSection('faqs')}>FAQs</a>
          <a style={navLinkStyle} onClick={() => scrollToSection('contacto')}>Contacto</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={heroStyle}>
        <h1 style={heroTitleStyle}>
          Tu vida organizada<br />
          en una sola aplicación
        </h1>
        <h2 style={heroSubtitleStyle}>El Ancla de tu Productividad</h2>
        <p style={heroDescriptionStyle}>
          Ancla tus tareas en el tiempo con nuestro innovador sistema de gestión marítima. 
          Hábitos, objetivos, finanzas y más — todo sincronizado para impulsar tu productividad personal.
        </p>
        <div style={ctaContainerStyle}>
          <button 
            style={primaryButtonStyle}
            onClick={() => navigate('/dashboard-selection')}
            onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
          >
            ⚓ Empieza Gratis
          </button>
          <button 
            style={secondaryButtonStyle}
            onClick={() => navigate('/dashboard-selection')}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = colors.primary;
              e.target.style.color = colors.white;
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = colors.white;
              e.target.style.color = colors.primary;
            }}
          >
            Ver Demo →
          </button>
        </div>
      </section>

      {/* Características */}
      <section id="caracteristicas" style={sectionStyle}>
        <h2 style={sectionTitleStyle}>🚀 Gestión de productividad con temática marítima</h2>
        <div style={featuresGridStyle}>
          <div 
            style={anclajeCardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
              e.currentTarget.style.boxShadow = `0 12px 40px ${colors.mediumBlue}30`;
              e.currentTarget.style.background = `linear-gradient(135deg, ${colors.white} 0%, ${colors.mediumBlue}40 100%)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
              e.currentTarget.style.background = `linear-gradient(135deg, ${colors.white} 0%, ${colors.mediumBlue}20 100%)`;
            }}
          >
            <div style={{ fontSize: '48px', marginBottom: '24px' }}>⚓</div>
            <h3 style={{ fontSize: '24px', fontWeight: '600', color: colors.text, marginBottom: '16px' }}>
              Anclaje Temporal
            </h3>
            <p style={{ color: colors.darkGray, lineHeight: '1.6', fontWeight: '500' }}>
              Ancla tus tareas en el tiempo con nuestro sistema visual único
            </p>
          </div>
          <div 
            style={gamificacionCardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
              e.currentTarget.style.boxShadow = `0 12px 40px ${colors.turquoise}30`;
              e.currentTarget.style.background = `linear-gradient(135deg, ${colors.white} 0%, ${colors.turquoise}40 100%)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
              e.currentTarget.style.background = `linear-gradient(135deg, ${colors.white} 0%, ${colors.turquoise}20 100%)`;
            }}
          >
            <div style={{ fontSize: '48px', marginBottom: '24px' }}>🎯</div>
            <h3 style={{ fontSize: '24px', fontWeight: '600', color: colors.text, marginBottom: '16px' }}>
              Gamificación
            </h3>
            <p style={{ color: colors.darkGray, lineHeight: '1.6', fontWeight: '500' }}>
              Progresa de grumete a capitán completando tus objetivos
            </p>
          </div>
          <div 
            style={analiticaCardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
              e.currentTarget.style.boxShadow = `0 12px 40px ${colors.aqua}30`;
              e.currentTarget.style.background = `linear-gradient(135deg, ${colors.white} 0%, ${colors.aqua}40 100%)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
              e.currentTarget.style.background = `linear-gradient(135deg, ${colors.white} 0%, ${colors.aqua}20 100%)`;
            }}
          >
            <div style={{ fontSize: '48px', marginBottom: '24px' }}>📊</div>
            <h3 style={{ fontSize: '24px', fontWeight: '600', color: colors.text, marginBottom: '16px' }}>
              Analítica Visual
            </h3>
            <p style={{ color: colors.darkGray, lineHeight: '1.6', fontWeight: '500' }}>
              Visualiza tu progreso con gráficos y estadísticas detalladas
            </p>
          </div>
        </div>
      </section>

      {/* Diseñado para tu estilo de vida - REORGANIZADO */}
      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>🧭 Diseñado para tu estilo de vida</h2>
        <p style={{ textAlign: 'center', fontSize: '18px', color: colors.darkGray, marginBottom: '48px' }}>
          Cada navegante tiene su propia ruta. Elige la tuya y personaliza tu experiencia.
        </p>
        <div style={audienceGridStyle}>
          {/* Primera fila */}
          <div 
            style={{
              ...audienceCardStyle,
              background: `linear-gradient(135deg, ${colors.white} 0%, ${colors.mediumBlue}20 100%)`,
              borderLeft: `4px solid ${colors.mediumBlue}`,
              transition: 'all 0.3s ease'
            }}
            onClick={() => navigate('/dashboard-selection')}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
              e.currentTarget.style.boxShadow = `0 12px 32px ${colors.mediumBlue}40`;
              e.currentTarget.style.background = `linear-gradient(135deg, ${colors.white} 0%, ${colors.mediumBlue}40 100%)`;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
              e.currentTarget.style.background = `linear-gradient(135deg, ${colors.white} 0%, ${colors.mediumBlue}20 100%)`;
            }}
          >
            <h3 style={{ fontSize: '20px', fontWeight: '600', color: colors.text, marginBottom: '16px' }}>
              🎬 Creadores de Contenido
            </h3>
            <p style={{ color: colors.darkGray, lineHeight: '1.6' }}>
              Herramientas para crear, programar y analizar tu contenido digital
            </p>
          </div>

          <div 
            style={{
              ...audienceCardStyle,
              background: `linear-gradient(135deg, ${colors.white} 0%, ${colors.turquoise}20 100%)`,
              borderLeft: `4px solid ${colors.turquoise}`,
              transition: 'all 0.3s ease'
            }}
            onClick={() => navigate('/dashboard-selection')}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
              e.currentTarget.style.boxShadow = `0 12px 32px ${colors.turquoise}40`;
              e.currentTarget.style.background = `linear-gradient(135deg, ${colors.white} 0%, ${colors.turquoise}40 100%)`;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
              e.currentTarget.style.background = `linear-gradient(135deg, ${colors.white} 0%, ${colors.turquoise}20 100%)`;
            }}
          >
            <h3 style={{ fontSize: '20px', fontWeight: '600', color: colors.text, marginBottom: '16px' }}>
              💼 Freelancers
            </h3>
            <p style={{ color: colors.darkGray, lineHeight: '1.6' }}>
              Gestiona proyectos, clientes y finanzas de tu negocio independiente
            </p>
          </div>

          {/* Segunda fila - Estudiantes debajo de Freelancers */}
          <div 
            style={{
              ...audienceCardStyle,
              background: `linear-gradient(135deg, ${colors.white} 0%, ${colors.aqua}20 100%)`,
              borderLeft: `4px solid ${colors.aqua}`,
              transition: 'all 0.3s ease'
            }}
            onClick={() => navigate('/dashboard-selection')}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
              e.currentTarget.style.boxShadow = `0 12px 32px ${colors.aqua}40`;
              e.currentTarget.style.background = `linear-gradient(135deg, ${colors.white} 0%, ${colors.aqua}40 100%)`;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
              e.currentTarget.style.background = `linear-gradient(135deg, ${colors.white} 0%, ${colors.aqua}20 100%)`;
            }}
          >
            <h3 style={{ fontSize: '20px', fontWeight: '600', color: colors.text, marginBottom: '16px' }}>
              📚 Estudiantes
            </h3>
            <p style={{ color: colors.darkGray, lineHeight: '1.6' }}>
              Planifica estudios, exámenes y proyectos académicos
            </p>
          </div>

          <div 
            style={{
              ...audienceCardStyle,
              background: `linear-gradient(135deg, ${colors.white} 0%, ${colors.lightBlueGray}20 100%)`,
              borderLeft: `4px solid ${colors.lightBlueGray}`,
              transition: 'all 0.3s ease'
            }}
            onClick={() => navigate('/dashboard-selection')}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
              e.currentTarget.style.boxShadow = `0 12px 32px ${colors.lightBlueGray}40`;
              e.currentTarget.style.background = `linear-gradient(135deg, ${colors.white} 0%, ${colors.lightBlueGray}40 100%)`;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
              e.currentTarget.style.background = `linear-gradient(135deg, ${colors.white} 0%, ${colors.lightBlueGray}20 100%)`;
            }}
          >
            <h3 style={{ fontSize: '20px', fontWeight: '600', color: colors.text, marginBottom: '16px' }}>
              🚀 Emprendedores Digitales
            </h3>
            <p style={{ color: colors.darkGray, lineHeight: '1.6' }}>
              Desde la idea hasta el lanzamiento, organiza tu startup
            </p>
          </div>
        </div>
      </section>

      {/* Precios - Con degradados verdosos */}
      <section id="precios" style={sectionStyle}>
        <h2 style={sectionTitleStyle}>💰 Planes de Navegación</h2>
        <p style={{ textAlign: 'center', fontSize: '18px', color: colors.darkGray, marginBottom: '48px' }}>
          Elige el plan que mejor se adapte a tu travesía hacia la productividad
        </p>
        <div style={pricingGridStyle}>
          <div 
            style={{
              ...pricingCardStyle,
              background: `linear-gradient(135deg, ${colors.white} 0%, ${colors.turquoise}20 100%)`,
              borderLeft: `4px solid ${colors.turquoise}`
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
              e.currentTarget.style.boxShadow = `0 12px 32px ${colors.turquoise}40`;
              e.currentTarget.style.background = `linear-gradient(135deg, ${colors.white} 0%, ${colors.turquoise}40 100%)`;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
              e.currentTarget.style.background = `linear-gradient(135deg, ${colors.white} 0%, ${colors.turquoise}20 100%)`;
            }}
          >
            <div style={{ fontSize: '48px', marginBottom: '24px' }}>⚓</div>
            <h3 style={{ fontSize: '24px', fontWeight: '700', color: colors.text, marginBottom: '8px' }}>Grumete</h3>
            <div style={{ fontSize: '32px', fontWeight: '700', color: colors.primary, marginBottom: '8px' }}>Gratis</div>
            <div style={{ color: colors.darkGray, marginBottom: '32px' }}>Para siempre</div>
            <ul style={{ textAlign: 'left', marginBottom: '32px', paddingLeft: '0', listStyle: 'none' }}>
              {['✅ Anclaje Temporal básico', '✅ Seguimiento de hábitos', '✅ Objetivos mensuales', '✅ Presupuesto simple', '✅ Soporte comunitario'].map((feature, i) => (
                <li key={i} style={{ marginBottom: '12px', color: colors.text }}>{feature}</li>
              ))}
            </ul>
            <button style={{ ...primaryButtonStyle, width: '100%' }}>Comenzar Gratis</button>
          </div>

          <div 
            style={{ 
              ...pricingCardStyle, 
              transform: 'scale(1.05)', 
              borderColor: colors.accent,
              background: `linear-gradient(135deg, ${colors.white} 0%, ${colors.aqua}20 100%)`,
              borderLeft: `4px solid ${colors.aqua}`
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.07)';
              e.currentTarget.style.boxShadow = `0 12px 32px ${colors.aqua}40`;
              e.currentTarget.style.background = `linear-gradient(135deg, ${colors.white} 0%, ${colors.aqua}40 100%)`;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1.05)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
              e.currentTarget.style.background = `linear-gradient(135deg, ${colors.white} 0%, ${colors.aqua}20 100%)`;
            }}
          >
            <div style={popularBadgeStyle}>Más Popular</div>
            <div style={{ fontSize: '48px', marginBottom: '24px' }}>⛵</div>
            <h3 style={{ fontSize: '24px', fontWeight: '700', color: colors.text, marginBottom: '8px' }}>Marinero</h3>
            <div style={{ fontSize: '32px', fontWeight: '700', color: colors.primary, marginBottom: '8px' }}>€9.99/mes</div>
            <div style={{ color: colors.darkGray, marginBottom: '32px' }}>Facturación mensual</div>
            <ul style={{ textAlign: 'left', marginBottom: '32px', paddingLeft: '0', listStyle: 'none' }}>
              {['✅ Todo lo de Grumete', '✅ Diario Rápido & Mood Tracker', '✅ Gamificación Naval completa', '✅ Notificaciones inteligentes', '✅ Soporte prioritario'].map((feature, i) => (
                <li key={i} style={{ marginBottom: '12px', color: colors.text }}>{feature}</li>
              ))}
            </ul>
            <button style={{ ...primaryButtonStyle, width: '100%', backgroundColor: colors.accent }}>Elegir Plan</button>
          </div>

          <div 
            style={{
              ...pricingCardStyle,
              background: `linear-gradient(135deg, ${colors.white} 0%, ${colors.mintGreen}20 100%)`,
              borderLeft: `4px solid ${colors.mintGreen}`
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
              e.currentTarget.style.boxShadow = `0 12px 32px ${colors.mintGreen}40`;
              e.currentTarget.style.background = `linear-gradient(135deg, ${colors.white} 0%, ${colors.mintGreen}40 100%)`;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
              e.currentTarget.style.background = `linear-gradient(135deg, ${colors.white} 0%, ${colors.mintGreen}20 100%)`;
            }}
          >
            <div style={{ fontSize: '48px', marginBottom: '24px' }}>🚢</div>
            <h3 style={{ fontSize: '24px', fontWeight: '700', color: colors.text, marginBottom: '8px' }}>Capitán</h3>
            <div style={{ fontSize: '32px', fontWeight: '700', color: colors.primary, marginBottom: '8px' }}>€19.99/mes</div>
            <div style={{ color: colors.darkGray, marginBottom: '32px' }}>Facturación mensual</div>
            <ul style={{ textAlign: 'left', marginBottom: '32px', paddingLeft: '0', listStyle: 'none' }}>
              {['✅ Todo lo de Marinero', '✅ Análisis avanzado de productividad', '✅ Exportación de datos', '✅ Integraciones con calendarios', '✅ Soporte 24/7'].map((feature, i) => (
                <li key={i} style={{ marginBottom: '12px', color: colors.text }}>{feature}</li>
              ))}
            </ul>
            <button style={{ ...primaryButtonStyle, width: '100%' }}>Elegir Plan</button>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section style={{ ...sectionStyle, backgroundColor: colors.lightBlueGray }}>
        <h2 style={sectionTitleStyle}>💬 Testimonios de Navegantes</h2>
        <p style={{ textAlign: 'center', fontSize: '18px', color: colors.darkGray, marginBottom: '48px' }}>
          Descubre cómo Anclora ha transformado la productividad de nuestros usuarios
        </p>
        <div style={testimonialsGridStyle}>
          {[
            {
              text: "El Anclaje Temporal ha revolucionado mi productividad. Ahora mis tareas están perfectamente organizadas en el tiempo.",
              author: "Carlos Marín",
              role: "YouTuber",
              rating: "⭐⭐⭐⭐⭐"
            },
            {
              text: "El seguimiento de hábitos me mantiene motivada. Ver el progreso semanal me ayuda a mantener la consistencia.",
              author: "Laura Rivera",
              role: "Diseñadora Freelance",
              rating: "⭐⭐⭐⭐⭐"
            },
            {
              text: "Los objetivos mensuales con subtareas me ayudan a enfocarme en lo que realmente importa. ¡Increíble herramienta!",
              author: "Ana Salazar",
              role: "Estudiante Universitaria",
              rating: "⭐⭐⭐⭐⭐"
            }
          ].map((testimonial, i) => (
            <div key={i} style={testimonialCardStyle}>
              <p style={{ fontSize: '18px', color: colors.text, marginBottom: '24px', fontStyle: 'italic', lineHeight: '1.6' }}>
                "{testimonial.text}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: colors.primary }}></div>
                <div>
                  <div style={{ fontWeight: '600', color: colors.text }}>{testimonial.author}</div>
                  <div style={{ color: colors.darkGray, fontSize: '14px' }}>{testimonial.role}</div>
                  <div style={{ marginTop: '4px' }}>{testimonial.rating}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" style={faqStyle}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={sectionTitleStyle}>❓ Preguntas Frecuentes</h2>
          <p style={{ textAlign: 'center', fontSize: '18px', color: colors.darkGray, marginBottom: '48px' }}>
            Resolvemos las dudas más comunes sobre Anclora
          </p>
          {faqs.map((faq, index) => (
            <div key={index} style={faqItemStyle}>
              <div 
                style={faqQuestionStyle}
                onClick={() => toggleFaq(index)}
              >
                <span>{faq.question}</span>
                <span style={{ fontSize: '24px', color: colors.primary }}>
                  {openFaq === index ? '−' : '+'}
                </span>
              </div>
              {openFaq === index && (
                <div style={{ padding: '0 24px 24px', color: colors.darkGray, lineHeight: '1.6' }}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contacto - Con marco mejorado */}
      <section id="contacto" style={contactStyle}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={sectionTitleStyle}>📧 Contacto</h2>
          <div style={contactGridStyle}>
            <div>
              <h3 style={{ fontSize: '32px', fontWeight: '600', color: colors.text, marginBottom: '24px' }}>
                ¿Necesitas ayuda navegando?
              </h3>
              <p style={{ fontSize: '18px', color: colors.darkGray, marginBottom: '32px', lineHeight: '1.6' }}>
                Estamos aquí para ayudarte a zarpar hacia el éxito con Anclora
              </p>
              <div style={{ marginBottom: '16px' }}>
                <strong style={{ color: colors.text }}>📧</strong>
                <span style={{ marginLeft: '12px', color: colors.darkGray }}>contacto@anclora.com</span>
              </div>
              <div>
                <strong style={{ color: colors.text }}>🌐</strong>
                <span style={{ marginLeft: '12px', color: colors.darkGray }}>www.anclora.com</span>
              </div>
            </div>
            
            {/* Formulario con marco */}
            <div style={contactFormContainerStyle}>
              <form style={formStyle}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: colors.text }}>
                    Nombre
                  </label>
                  <input 
                    type="text" 
                    placeholder="Tu nombre"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: colors.text }}>
                    Email
                  </label>
                  <input 
                    type="email" 
                    placeholder="tu@email.com"
                    style={emailInputStyle}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: colors.text }}>
                    Mensaje
                  </label>
                  <textarea 
                    placeholder="¿En qué podemos ayudarte?"
                    style={textareaStyle}
                  />
                </div>
                <button type="submit" style={submitButtonStyle}>
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Funcionalidades Avanzadas */}
      <section style={{ ...sectionStyle, backgroundColor: colors.lightBlueGray }}>
        <h2 style={sectionTitleStyle}>Funcionalidades Avanzadas</h2>
        <p style={{ textAlign: 'center', fontSize: '18px', color: colors.darkGray, marginBottom: '48px' }}>
          Herramientas poderosas para maximizar tu productividad
        </p>
        <div style={featuresGridStyle}>
          <div style={featureCardStyle}>
            <div style={{ fontSize: '48px', marginBottom: '24px' }}>🌊</div>
            <h3 style={{ fontSize: '24px', fontWeight: '600', color: colors.text, marginBottom: '16px' }}>
              Marea de Tiempo
            </h3>
            <p style={{ color: colors.darkGray, lineHeight: '1.6' }}>
              Línea de tiempo interactiva con funcionalidad de arrastrar y soltar
            </p>
          </div>
          <div style={featureCardStyle}>
            <div style={{ fontSize: '48px', marginBottom: '24px' }}>🔔</div>
            <h3 style={{ fontSize: '24px', fontWeight: '600', color: colors.text, marginBottom: '16px' }}>
              Notificaciones Web
            </h3>
            <p style={{ color: colors.darkGray, lineHeight: '1.6' }}>
              Recordatorios inteligentes con acciones rápidas
            </p>
          </div>
          <div style={featureCardStyle}>
            <div style={{ fontSize: '48px', marginBottom: '24px' }}>📱</div>
            <h3 style={{ fontSize: '24px', fontWeight: '600', color: colors.text, marginBottom: '16px' }}>
              Diseño Responsive
            </h3>
            <p style={{ color: colors.darkGray, lineHeight: '1.6' }}>
              Optimizado para todos los dispositivos móviles
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function DashboardSelection() {
  const navigate = useNavigate();
  const [selectedAudiences, setSelectedAudiences] = useState([]);

  const audiences = [
    { id: 'creadores', title: '🎬 Creadores de Contenido', desc: 'Herramientas para crear, programar y analizar tu contenido digital' },
    { id: 'freelancers', title: '💼 Freelancers', desc: 'Gestiona proyectos, clientes y finanzas de tu negocio independiente' },
    { id: 'emprendedores', title: '🚀 Emprendedores Digitales', desc: 'Desde la idea hasta el lanzamiento, organiza tu startup' },
    { id: 'estudiantes', title: '📚 Estudiantes', desc: 'Planifica estudios, exámenes y proyectos académicos' }
  ];

  const toggleAudience = (audienceId) => {
    setSelectedAudiences(prev => 
      prev.includes(audienceId) 
        ? prev.filter(id => id !== audienceId)
        : [...prev, audienceId]
    );
  };

  const handleContinue = () => {
    if (selectedAudiences.length > 0) {
      navigate('/dashboard', { state: { selectedAudiences } });
    }
  };

  const containerStyle = {
    minHeight: '100vh',
    background: `linear-gradient(135deg, ${colors.white} 0%, ${colors.lightBlueGray} 100%)`,
    padding: '40px 24px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '48px'
  };

  const titleStyle = {
    fontSize: '48px',
    fontWeight: '700',
    color: colors.text,
    marginBottom: '16px',
    letterSpacing: '-1px'
  };

  const subtitleStyle = {
    fontSize: '20px',
    color: colors.darkGray,
    marginBottom: '32px'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
    maxWidth: '1000px',
    margin: '0 auto 48px'
  };

  const cardStyle = (isSelected) => ({
    backgroundColor: colors.white,
    padding: '32px',
    borderRadius: '16px',
    textAlign: 'center',
    boxShadow: isSelected ? `0 8px 32px rgba(30, 58, 138, 0.3)` : '0 4px 20px rgba(0,0,0,0.1)',
    border: `2px solid ${isSelected ? colors.primary : colors.lightGray}`,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    transform: isSelected ? 'translateY(-4px)' : 'translateY(0)',
    position: 'relative'
  });

  const buttonContainerStyle = {
    textAlign: 'center',
    marginTop: '48px'
  };

  const continueButtonStyle = {
    backgroundColor: selectedAudiences.length > 0 ? colors.primary : colors.darkGray,
    color: colors.white,
    padding: '16px 48px',
    borderRadius: '12px',
    border: 'none',
    fontSize: '18px',
    fontWeight: '600',
    cursor: selectedAudiences.length > 0 ? 'pointer' : 'not-allowed',
    transition: 'all 0.3s ease',
    boxShadow: selectedAudiences.length > 0 ? `0 4px 12px rgba(30, 58, 138, 0.3)` : 'none'
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1 style={titleStyle}>⚓ Selecciona tu Perfil de Navegante</h1>
        <p style={subtitleStyle}>
          Puedes seleccionar múltiples perfiles si te identificas con más de uno.<br />
          Esto enriquecerá tu dashboard con contenido personalizado de todas tus áreas.
        </p>
        <p style={{ fontSize: '16px', color: colors.primary, fontWeight: '600' }}>
          Seleccionados: {selectedAudiences.length} | Mínimo requerido: 1
        </p>
      </div>

      <div style={gridStyle}>
        {audiences.map((audience) => (
          <div 
            key={audience.id}
            style={cardStyle(selectedAudiences.includes(audience.id))}
            onClick={() => toggleAudience(audience.id)}
          >
            <div style={{ 
              position: 'absolute', 
              top: '16px', 
              right: '16px',
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              backgroundColor: selectedAudiences.includes(audience.id) ? colors.primary : colors.lightGray,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: colors.white,
              fontSize: '16px',
              fontWeight: '600'
            }}>
              {selectedAudiences.includes(audience.id) ? '✓' : ''}
            </div>
            <h3 style={{ fontSize: '24px', fontWeight: '600', color: colors.text, marginBottom: '16px' }}>
              {audience.title}
            </h3>
            <p style={{ color: colors.darkGray, lineHeight: '1.6' }}>
              {audience.desc}
            </p>
          </div>
        ))}
      </div>

      <div style={buttonContainerStyle}>
        <button 
          style={continueButtonStyle}
          onClick={handleContinue}
          disabled={selectedAudiences.length === 0}
        >
          Continuar al Dashboard →
        </button>
      </div>
    </div>
  );
}

function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedAudiences = location.state?.selectedAudiences || ['creadores'];
  
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNewAncla, setShowNewAncla] = useState(false);
  const [filters, setFilters] = useState({
    orderBy: 'fecha',
    type: 'todos',
    priority: 'todas',
    category: 'todas'
  });
  const [currency, setCurrency] = useState('EUR');
  const [newAncla, setNewAncla] = useState({
    title: '',
    description: '',
    type: 'Tarea',
    priority: 'Importante',
    category: '',
    repeat: 'No repetir',
    allDay: false,
    startDate: new Date().toISOString().split('T')[0],
    startTime: '09:00',
    notifications: []
  });

  // Combinar datos predefinidos de todas las audiencias seleccionadas
  const getCombinedData = (dataType) => {
    const combined = [];
    selectedAudiences.forEach(audience => {
      if (audienceData[audience] && audienceData[audience][dataType]) {
        combined.push(...audienceData[audience][dataType]);
      }
    });
    return [...new Set(combined)]; // Eliminar duplicados
  };

  const predefinedTitles = getCombinedData('anclas');
  const predefinedCategories = getCombinedData('categorias');

  const currencies = [
    { code: 'EUR', symbol: '€', name: 'Euro' },
    { code: 'USD', symbol: '$', name: 'Dólar Americano' },
    { code: 'GBP', symbol: '£', name: 'Libra Esterlina' }
  ];

  const currentCurrency = currencies.find(c => c.code === currency);

  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: colors.lightBlueGray,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  };

  const headerStyle = {
    backgroundColor: colors.white,
    padding: '16px 24px',
    borderBottom: `1px solid ${colors.lightGray}`,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  };

  const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  };

  const logoStyle = {
    height: '50px',
    width: 'auto'
  };

  const userInfoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  };

  const userDetailsStyle = {
    textAlign: 'right'
  };

  const userNameStyle = {
    fontSize: '16px',
    fontWeight: '600',
    color: colors.text,
    margin: '0'
  };

  const userEmailStyle = {
    fontSize: '14px',
    color: colors.darkGray,
    margin: '0'
  };

  const avatarStyle = {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    backgroundColor: colors.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.white,
    fontSize: '20px',
    fontWeight: '600',
    cursor: 'pointer',
    position: 'relative'
  };

  const userMenuStyle = {
    position: 'absolute',
    top: '60px',
    right: '0',
    backgroundColor: colors.white,
    borderRadius: '12px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
    border: `1px solid ${colors.lightGray}`,
    minWidth: '200px',
    zIndex: 1000
  };

  const menuItemStyle = {
    padding: '12px 16px',
    cursor: 'pointer',
    borderBottom: `1px solid ${colors.lightGray}`,
    fontSize: '14px',
    color: colors.text,
    transition: 'background-color 0.2s ease'
  };

  const contentStyle = {
    padding: '24px',
    maxWidth: '1400px',
    margin: '0 auto'
  };

  const dashboardHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '32px'
  };

  const titleStyle = {
    fontSize: '32px',
    fontWeight: '700',
    color: colors.text,
    margin: '0'
  };

  const backButtonStyle = {
    backgroundColor: colors.white,
    color: colors.primary,
    padding: '12px 24px',
    borderRadius: '8px',
    border: `2px solid ${colors.primary}`,
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  };

  const rangeInfoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    backgroundColor: colors.white,
    padding: '12px 20px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  };

  const filtersStyle = {
    display: 'flex',
    gap: '16px',
    marginBottom: '24px',
    flexWrap: 'wrap'
  };

  const filterSelectStyle = {
    padding: '8px 12px',
    borderRadius: '6px',
    border: `1px solid ${colors.lightGray}`,
    backgroundColor: colors.white,
    fontSize: '14px',
    minWidth: '150px'
  };

  const sectionsGridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '32px'
  };

  const sectionStyle = {
    backgroundColor: colors.white,
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
  };

  const sectionTitleStyle = {
    fontSize: '20px',
    fontWeight: '600',
    color: colors.text,
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  };

  const anclasSectionStyle = {
    ...sectionStyle,
    marginBottom: '32px'
  };

  const anclasGridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '24px'
  };

  const anclasColumnStyle = {
    backgroundColor: colors.lightBlueGray,
    borderRadius: '12px',
    padding: '20px'
  };

  const columnTitleStyle = {
    fontSize: '18px',
    fontWeight: '600',
    color: colors.text,
    marginBottom: '16px'
  };

  const anclaItemStyle = {
    backgroundColor: colors.white,
    padding: '16px',
    borderRadius: '8px',
    marginBottom: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  };

  const anclaHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '8px'
  };

  const anclaTitleStyle = {
    fontSize: '16px',
    fontWeight: '600',
    color: colors.text,
    margin: '0'
  };

  const anclaDescStyle = {
    fontSize: '14px',
    color: colors.darkGray,
    marginBottom: '8px'
  };

  const anclaTagsStyle = {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap'
  };

  const tagStyle = (type) => ({
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: '500',
    backgroundColor: type === 'Tarea' ? colors.primary : colors.accent,
    color: colors.white
  });

  const priorityStyle = (priority) => ({
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: '500',
    backgroundColor: priority === 'Importante' ? '#f59e0b' : '#6b7280',
    color: colors.white
  });

  const newAnclaButtonStyle = {
    backgroundColor: colors.primary,
    color: colors.white,
    padding: '12px 24px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginBottom: '24px'
  };

  const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000
  };

  const modalStyle = {
    backgroundColor: colors.white,
    borderRadius: '16px',
    padding: '32px',
    maxWidth: '600px',
    width: '90%',
    maxHeight: '80vh',
    overflowY: 'auto'
  };

  const formGroupStyle = {
    marginBottom: '20px'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontSize: '14px',
    fontWeight: '600',
    color: colors.text
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    border: `1px solid ${colors.lightGray}`,
    fontSize: '16px',
    fontFamily: 'inherit'
  };

  const selectStyle = {
    ...inputStyle,
    cursor: 'pointer'
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: '80px',
    resize: 'vertical'
  };

  const checkboxStyle = {
    marginRight: '8px'
  };

  const buttonGroupStyle = {
    display: 'flex',
    gap: '12px',
    justifyContent: 'flex-end',
    marginTop: '24px'
  };

  const cancelButtonStyle = {
    backgroundColor: colors.lightGray,
    color: colors.text,
    padding: '12px 24px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer'
  };

  const saveButtonStyle = {
    backgroundColor: colors.primary,
    color: colors.white,
    padding: '12px 24px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer'
  };

  const addNotificationStyle = {
    backgroundColor: colors.accent,
    color: colors.white,
    padding: '8px 16px',
    borderRadius: '6px',
    border: 'none',
    fontSize: '14px',
    cursor: 'pointer',
    marginTop: '8px'
  };

  const notificationItemStyle = {
    backgroundColor: colors.lightBlueGray,
    padding: '12px',
    borderRadius: '8px',
    marginBottom: '8px'
  };

  const removeNotificationStyle = {
    backgroundColor: '#ef4444',
    color: colors.white,
    padding: '4px 8px',
    borderRadius: '4px',
    border: 'none',
    fontSize: '12px',
    cursor: 'pointer',
    marginTop: '8px'
  };

  const addNotification = () => {
    setNewAncla(prev => ({
      ...prev,
      notifications: [...prev.notifications, { type: 'Notificación', date: '', time: '' }]
    }));
  };

  const removeNotification = (index) => {
    setNewAncla(prev => ({
      ...prev,
      notifications: prev.notifications.filter((_, i) => i !== index)
    }));
  };

  const updateNotification = (index, field, value) => {
    setNewAncla(prev => ({
      ...prev,
      notifications: prev.notifications.map((notif, i) => 
        i === index ? { ...notif, [field]: value } : notif
      )
    }));
  };

  const handleLogout = () => {
    navigate('/dashboard-selection');
  };

  const modulesGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
    marginTop: '32px'
  };

  return (
    <div style={containerStyle}>
      {/* Header */}
      <header style={headerStyle}>
        <div style={logoContainerStyle}>
          <img src={logoAnclora} alt="Anclora" style={logoStyle} />
          <div>
            <div style={{ fontSize: '14px', color: colors.darkGray }}>Grupo actual:</div>
            <div style={{ fontSize: '16px', fontWeight: '600', color: colors.primary }}>
              {selectedAudiences.map(id => {
                const audience = {
                  creadores: 'Creadores de Contenido',
                  freelancers: 'Freelancers', 
                  emprendedores: 'Emprendedores Digitales',
                  estudiantes: 'Estudiantes'
                }[id];
                return audience;
              }).join(' y ')}
            </div>
          </div>
        </div>

        <div style={userInfoStyle}>
          <div style={rangeInfoStyle}>
            <span style={{ fontSize: '14px', color: colors.darkGray }}>Rango:</span>
            <span style={{ fontSize: '16px', fontWeight: '600', color: colors.primary }}>Grumete</span>
            <span style={{ fontSize: '20px' }}>⭐</span>
            <span style={{ fontSize: '16px', fontWeight: '600', color: colors.text }}>45</span>
          </div>
          
          <div style={userDetailsStyle}>
            <p style={userNameStyle}>Usuario Demo</p>
            <p style={userEmailStyle}>demo@anclora.com</p>
          </div>
          
          <div style={avatarStyle} onClick={() => setShowUserMenu(!showUserMenu)}>
            UD
            {showUserMenu && (
              <div style={userMenuStyle}>
                <div style={menuItemStyle}>Configuración</div>
                <div style={menuItemStyle}>Novedades</div>
                <div style={menuItemStyle}>Planes y precios</div>
                <div style={menuItemStyle}>Historial de compra</div>
                <div style={menuItemStyle}>Sugiérenos mejoras</div>
                <div style={menuItemStyle}>Política de privacidad</div>
                <div 
                  style={{ ...menuItemStyle, borderBottom: 'none', color: '#ef4444' }}
                  onClick={handleLogout}
                >
                  Cerrar sesión
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Content */}
      <div style={contentStyle}>
        <div style={dashboardHeaderStyle}>
          <h1 style={titleStyle}>⚓ Puente de Mando</h1>
          <button 
            style={backButtonStyle}
            onClick={() => navigate('/')}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = colors.primary;
              e.target.style.color = colors.white;
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = colors.white;
              e.target.style.color = colors.primary;
            }}
          >
            ← Volver al inicio
          </button>
        </div>

        {/* Gestión de Anclas */}
        <div style={anclasSectionStyle}>
          <h2 style={sectionTitleStyle}>
            ⚓ Gestión de Anclas
          </h2>
          
          <button style={newAnclaButtonStyle} onClick={() => setShowNewAncla(true)}>
            + Nueva Ancla
          </button>

          {/* Filtros */}
          <div style={filtersStyle}>
            <select 
              style={filterSelectStyle}
              value={filters.orderBy}
              onChange={(e) => setFilters(prev => ({ ...prev, orderBy: e.target.value }))}
            >
              <option value="fecha">Ordenar por fecha</option>
              <option value="prioridad">Ordenar por prioridad</option>
              <option value="categoria">Ordenar por categoría</option>
            </select>
            
            <select 
              style={filterSelectStyle}
              value={filters.type}
              onChange={(e) => setFilters(prev => ({ ...prev, type: e.target.value }))}
            >
              <option value="todos">Todos los tipos</option>
              <option value="tarea">Tareas</option>
              <option value="evento">Eventos</option>
            </select>
            
            <select 
              style={filterSelectStyle}
              value={filters.priority}
              onChange={(e) => setFilters(prev => ({ ...prev, priority: e.target.value }))}
            >
              <option value="todas">Todas las prioridades</option>
              <option value="importante">Importante</option>
              <option value="normal">Normal</option>
            </select>
            
            <select 
              style={filterSelectStyle}
              value={filters.category}
              onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
            >
              <option value="todas">Todas las categorías</option>
              {predefinedCategories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Anclajes Activos y Resto de Anclajes */}
          <div style={anclasGridStyle}>
            <div style={anclasColumnStyle}>
              <h3 style={columnTitleStyle}>Anclajes Activos</h3>
              <div style={{ fontSize: '14px', color: colors.darkGray, marginBottom: '16px' }}>Hoy</div>
              
              <div style={anclaItemStyle}>
                <div style={anclaHeaderStyle}>
                  <h4 style={anclaTitleStyle}>Ajustar velas de miniatura épica</h4>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    <span style={{ cursor: 'pointer', fontSize: '16px' }}>✏️</span>
                    <span style={{ cursor: 'pointer', fontSize: '16px' }}>🗑️</span>
                  </div>
                </div>
                <p style={anclaDescStyle}>Editar video para el canal</p>
                <div style={anclaTagsStyle}>
                  <span style={tagStyle('Tarea')}>📋 Tarea</span>
                  <span style={priorityStyle('Importante')}>🔥 Importante</span>
                  <span style={{ ...tagStyle(), backgroundColor: colors.secondary }}>Edición</span>
                  <span style={{ fontSize: '12px', color: colors.darkGray }}>Sáb, 5</span>
                </div>
              </div>
            </div>

            <div style={anclasColumnStyle}>
              <h3 style={columnTitleStyle}>Resto de anclajes</h3>
              <div style={{ color: colors.darkGray, fontSize: '14px' }}>
                No hay anclajes pendientes
              </div>
            </div>
          </div>
        </div>

        {/* Módulos de Productividad */}
        <div style={modulesGridStyle}>
          {/* Seguimiento de Hábitos */}
          <div style={sectionStyle}>
            <h3 style={sectionTitleStyle}>
              📊 Seguimiento de Hábitos
            </h3>
            <button style={{ ...newAnclaButtonStyle, fontSize: '14px', padding: '8px 16px' }}>
              + Nuevo Hábito
            </button>
            
            <div style={{ marginTop: '16px' }}>
              <div style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '14px', fontWeight: '600' }}>Crear contenido diario</span>
                  <button style={{ 
                    backgroundColor: colors.primary, 
                    color: colors.white, 
                    border: 'none', 
                    padding: '4px 12px', 
                    borderRadius: '4px',
                    fontSize: '12px',
                    cursor: 'pointer'
                  }}>
                    Marcar
                  </button>
                </div>
                <div style={{ fontSize: '12px', color: colors.darkGray }}>0/7 esta semana</div>
                <div style={{ 
                  width: '100%', 
                  height: '8px', 
                  backgroundColor: colors.lightGray, 
                  borderRadius: '4px',
                  marginTop: '4px'
                }}>
                  <div style={{ 
                    width: '0%', 
                    height: '100%', 
                    backgroundColor: colors.primary, 
                    borderRadius: '4px' 
                  }}></div>
                </div>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '14px', fontWeight: '600' }}>Analizar métricas</span>
                  <button style={{ 
                    backgroundColor: colors.primary, 
                    color: colors.white, 
                    border: 'none', 
                    padding: '4px 12px', 
                    borderRadius: '4px',
                    fontSize: '12px',
                    cursor: 'pointer'
                  }}>
                    Marcar
                  </button>
                </div>
                <div style={{ fontSize: '12px', color: colors.darkGray }}>0/3 esta semana</div>
                <div style={{ 
                  width: '100%', 
                  height: '8px', 
                  backgroundColor: colors.lightGray, 
                  borderRadius: '4px',
                  marginTop: '4px'
                }}>
                  <div style={{ 
                    width: '0%', 
                    height: '100%', 
                    backgroundColor: colors.primary, 
                    borderRadius: '4px' 
                  }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Objetivos del Mes */}
          <div style={sectionStyle}>
            <h3 style={sectionTitleStyle}>
              🎯 Objetivos del Mes
            </h3>
            
            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ fontSize: '16px', fontWeight: '600', color: colors.text, marginBottom: '8px' }}>
                Lanzar nuevo canal de YouTube
              </h4>
              <p style={{ fontSize: '14px', color: colors.darkGray, marginBottom: '12px' }}>
                Crear y configurar un nuevo canal especializado
              </p>
              <div style={{ fontSize: '14px', color: colors.primary, fontWeight: '600', marginBottom: '8px' }}>
                Progreso: 0%
              </div>
              
              <div style={{ marginLeft: '16px' }}>
                <label style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', fontSize: '14px' }}>
                  <input type="checkbox" style={checkboxStyle} />
                  Definir nicho y audiencia
                </label>
                <label style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', fontSize: '14px' }}>
                  <input type="checkbox" style={checkboxStyle} />
                  Diseñar branding
                </label>
                <label style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', fontSize: '14px' }}>
                  <input type="checkbox" style={checkboxStyle} />
                  Crear primeros 3 videos
                </label>
                <label style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', fontSize: '14px' }}>
                  <input type="checkbox" style={checkboxStyle} />
                  Configurar canal
                </label>
              </div>
            </div>
            
            <button style={{ ...newAnclaButtonStyle, fontSize: '14px', padding: '8px 16px' }}>
              + Nuevo Objetivo
            </button>
          </div>

          {/* Presupuesto */}
          <div style={sectionStyle}>
            <h3 style={sectionTitleStyle}>
              💰 Presupuesto
            </h3>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <label style={{ fontSize: '14px', fontWeight: '600' }}>Divisa:</label>
              <select 
                style={{ ...selectStyle, width: 'auto', padding: '6px 12px' }}
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                {currencies.map(curr => (
                  <option key={curr.code} value={curr.code}>
                    {curr.symbol} {curr.name}
                  </option>
                ))}
              </select>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '14px', fontWeight: '600' }}>Ingresos</span>
                <span style={{ fontSize: '16px', fontWeight: '700', color: '#10b981' }}>
                  {currentCurrency.symbol}2,500
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '14px', fontWeight: '600' }}>Gastos</span>
                <span style={{ fontSize: '16px', fontWeight: '700', color: '#ef4444' }}>
                  {currentCurrency.symbol}1,200
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span style={{ fontSize: '16px', fontWeight: '700' }}>Balance</span>
                <span style={{ fontSize: '18px', fontWeight: '700', color: colors.primary }}>
                  {currentCurrency.symbol}1,300
                </span>
              </div>
            </div>
            
            <button style={{ ...newAnclaButtonStyle, fontSize: '14px', padding: '8px 16px' }}>
              + Nueva Transacción
            </button>
          </div>

          {/* Diario */}
          <div style={sectionStyle}>
            <h3 style={sectionTitleStyle}>
              📔 Diario
            </h3>
            
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
                ¿Cómo te sientes hoy?
              </label>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                {['😊', '😐', '😔', '😴', '🤔', '😤'].map((emoji, i) => (
                  <button 
                    key={i}
                    style={{
                      fontSize: '24px',
                      padding: '8px',
                      border: 'none',
                      borderRadius: '8px',
                      backgroundColor: colors.lightGray,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = colors.primary}
                    onMouseOut={(e) => e.target.style.backgroundColor = colors.lightGray}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>
            
            <button style={{ ...newAnclaButtonStyle, fontSize: '14px', padding: '8px 16px' }}>
              + Nueva Entrada
            </button>
          </div>
        </div>
      </div>

      {/* Modal Nueva Ancla */}
      {showNewAncla && (
        <div style={modalOverlayStyle} onClick={() => setShowNewAncla(false)}>
          <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
            <h2 style={{ fontSize: '24px', fontWeight: '700', color: colors.text, marginBottom: '24px' }}>
              ⚓ Nueva Ancla
            </h2>
            
            <div style={formGroupStyle}>
              <label style={labelStyle}>Título</label>
              <input 
                type="text"
                style={inputStyle}
                value={newAncla.title}
                onChange={(e) => setNewAncla(prev => ({ ...prev, title: e.target.value }))}
                list="predefined-titles"
                placeholder="Escribe o selecciona un título..."
              />
              <datalist id="predefined-titles">
                {predefinedTitles.map(title => (
                  <option key={title} value={title} />
                ))}
              </datalist>
            </div>

            <div style={formGroupStyle}>
              <label style={labelStyle}>Descripción</label>
              <textarea 
                style={textareaStyle}
                value={newAncla.description}
                onChange={(e) => setNewAncla(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Describe tu ancla..."
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div style={formGroupStyle}>
                <label style={labelStyle}>Tipo</label>
                <select 
                  style={selectStyle}
                  value={newAncla.type}
                  onChange={(e) => setNewAncla(prev => ({ ...prev, type: e.target.value }))}
                >
                  <option value="Tarea">📋 Tarea</option>
                  <option value="Evento">📅 Evento</option>
                </select>
              </div>

              <div style={formGroupStyle}>
                <label style={labelStyle}>Prioridad</label>
                <select 
                  style={selectStyle}
                  value={newAncla.priority}
                  onChange={(e) => setNewAncla(prev => ({ ...prev, priority: e.target.value }))}
                >
                  <option value="Importante">🔥 Importante</option>
                  <option value="Normal">⚪ Normal</option>
                </select>
              </div>
            </div>

            <div style={formGroupStyle}>
              <label style={labelStyle}>Categoría</label>
              <input 
                type="text"
                style={inputStyle}
                value={newAncla.category}
                onChange={(e) => setNewAncla(prev => ({ ...prev, category: e.target.value }))}
                list="predefined-categories"
                placeholder="Selecciona una categoría..."
              />
              <datalist id="predefined-categories">
                {predefinedCategories.map(category => (
                  <option key={category} value={category} />
                ))}
              </datalist>
            </div>

            <div style={formGroupStyle}>
              <label style={labelStyle}>Repetir</label>
              <select 
                style={selectStyle}
                value={newAncla.repeat}
                onChange={(e) => setNewAncla(prev => ({ ...prev, repeat: e.target.value }))}
              >
                <option value="No repetir">No repetir</option>
                <option value="Diario">Diario</option>
                <option value="Semanal">Semanal</option>
                <option value="Mensual">Mensual</option>
              </select>
            </div>

            <div style={formGroupStyle}>
              <label style={{ display: 'flex', alignItems: 'center', fontSize: '14px', fontWeight: '600' }}>
                <input 
                  type="checkbox" 
                  style={checkboxStyle}
                  checked={newAncla.allDay}
                  onChange={(e) => setNewAncla(prev => ({ ...prev, allDay: e.target.checked }))}
                />
                Todo el día
              </label>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div style={formGroupStyle}>
                <label style={labelStyle}>Fecha desde</label>
                <input 
                  type="date"
                  style={inputStyle}
                  value={newAncla.startDate}
                  onChange={(e) => setNewAncla(prev => ({ ...prev, startDate: e.target.value }))}
                />
              </div>

              {!newAncla.allDay && (
                <div style={formGroupStyle}>
                  <label style={labelStyle}>Hora desde</label>
                  <input 
                    type="time"
                    style={inputStyle}
                    value={newAncla.startTime}
                    onChange={(e) => setNewAncla(prev => ({ ...prev, startTime: e.target.value }))}
                  />
                </div>
              )}
            </div>

            <div style={formGroupStyle}>
              <label style={labelStyle}>Notificaciones</label>
              {newAncla.notifications.map((notification, index) => (
                <div key={index} style={notificationItemStyle}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', marginBottom: '8px' }}>
                    <select 
                      style={selectStyle}
                      value={notification.type}
                      onChange={(e) => updateNotification(index, 'type', e.target.value)}
                    >
                      <option value="Notificación">🔔 Notificación</option>
                      <option value="Correo electrónico">📧 Correo electrónico</option>
                    </select>
                    <input 
                      type="date"
                      style={inputStyle}
                      value={notification.date}
                      onChange={(e) => updateNotification(index, 'date', e.target.value)}
                    />
                    <input 
                      type="time"
                      style={inputStyle}
                      value={notification.time}
                      onChange={(e) => updateNotification(index, 'time', e.target.value)}
                    />
                  </div>
                  <button 
                    style={removeNotificationStyle}
                    onClick={() => removeNotification(index)}
                  >
                    Eliminar aviso
                  </button>
                </div>
              ))}
              <button style={addNotificationStyle} onClick={addNotification}>
                Añadir aviso
              </button>
            </div>

            <div style={buttonGroupStyle}>
              <button style={cancelButtonStyle} onClick={() => setShowNewAncla(false)}>
                Cancelar
              </button>
              <button style={saveButtonStyle} onClick={() => setShowNewAncla(false)}>
                ⚓ Crear Ancla
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard-selection" element={<DashboardSelection />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/:audience" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

