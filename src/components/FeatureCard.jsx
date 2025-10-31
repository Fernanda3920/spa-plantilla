// src/components/FeatureCard.jsx

import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaMicrochip, FaMapMarkerAlt, FaStethoscope } from 'react-icons/fa';

// Función para seleccionar el ícono basado en la clave de la característica
const getIconComponent = (key) => {
  switch (key) {
    case 'technology':
      return FaMicrochip;
    case 'locations':
      return FaMapMarkerAlt;
    case 'medical':
      return FaStethoscope;
    default:
      return null;
  }
};

const FeatureCard = ({ featureKey }) => {
  const { t } = useTranslation();
  const IconComponent = getIconComponent(featureKey);
  
  return (
    // Columna para que se vea bien dentro de una fila de 3 elementos (col-md-4)
    <div className="col-md-4 mb-5 text-center">
      
      {/* Contenedor del Ícono (Círculo Blanco) */}
      <div 
        className="mx-auto mb-4 d-flex justify-content-center align-items-center"
        style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%', // Hace la forma circular
          backgroundColor: '#2D621E', // Fondo blanco
        }}
      >
        {IconComponent && (
          <IconComponent 
            size={48} 
            style={{ color: '#ffffffff' }} // Color azul primario de Bootstrap (o tu color)
          />
        )}
      </div>
      
      {/* Título y Texto */}
      <h3 className="mb-3">{t(`features.${featureKey}.title`)}</h3>
      <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
        {t(`features.${featureKey}.text`)}
      </p>
    </div>
  );
};

export default FeatureCard;