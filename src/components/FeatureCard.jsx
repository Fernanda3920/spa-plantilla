// src/components/FeatureCard.jsx

import React from 'react';
// Importa los íconos necesarios
import { FaMicrochip, FaMapMarkerAlt, FaStethoscope } from 'react-icons/fa';

// Función para seleccionar el ícono basado en el nombre de la característica
const getIconComponent = (title) => {
  switch (title) {
    case 'Tecnología':
      return FaMicrochip;
    case 'Sucursales':
      return FaMapMarkerAlt;
    case 'Atención Médica':
      return FaStethoscope;
    default:
      return null;
  }
};

const FeatureCard = ({ title, text }) => {
  
  const IconComponent = getIconComponent(title);
  
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
          backgroundColor: '#a9c7a1ff', // Fondo blanco
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
      <h3 className="mb-3">{title}</h3>
      <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
        {text}
      </p>
    </div>
  );
};

export default FeatureCard;