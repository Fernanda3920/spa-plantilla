// src/components/HeroImage.jsx

import React from 'react';
import { useTranslation } from 'react-i18next';

const Hero = ({ imageUrl }) => {
  const { t } = useTranslation();
  
  // Altura mínima para asegurar que el contenido se vea bien en la página
  const heroStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover', // Asegura que la imagen cubra todo el contenedor
    backgroundPosition: 'center', // Centra la imagen
    minHeight: '100vh', // Altura mínima del 60% de la ventana (ajusta a tu gusto)
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    color: 'white', // Texto blanco por defecto
    textAlign: 'center',
  };

  return (
    <div style={heroStyle}>
      {/* Overlay oscuro para mejorar la legibilidad del texto blanco */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)' // Fondo negro con 40% de opacidad
        }}
      ></div>

      {/* Contenido centrado */}
      <div className="container position-relative" style={{ zIndex: 10 }}>
        <h1 className="display-3 fw-bold mb-3 text-shadow-lg">{t('hero.title')}</h1>
        <p className="lead fs-4 text-shadow-lg">{t('hero.subtitle')}</p>
        
        {/* Botón de ejemplo para la llamada a la acción */}
        <a href="#contacto" className="btn btn-light btn-lg mt-3">
          {t('contact.title')}
        </a>
      </div>
    </div>
  );
};

export default Hero;