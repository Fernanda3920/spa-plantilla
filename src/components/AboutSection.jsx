// src/components/AboutSection.jsx

import React from 'react';
import { useTranslation } from 'react-i18next';

const DENTAMETRICS_IMAGE_URL = 'https://cdn.pixabay.com/photo/2017/06/20/09/34/spa-2422421_1280.jpg';

const AboutSection = () => {
  const { t } = useTranslation();
  return (
    // Usa un padding generoso para separar la sección de otros elementos
    <section id="nosotros" className="py-5 my-5"> 
      <div className="container">
        
        {/* Usamos row para crear la fila. align-items-center centra verticalmente. */}
        <div className="row align-items-center">
          
          {/* Lado Izquierdo: IMAGEN CIRCULAR */}
          <div className="col-md-6 d-flex justify-content-center mb-md-0">
            
            {/* Contenedor del Círculo Flotante */}
            <div 
              style={{
                width: '350px', // Tamaño del círculo
                height: '350px',
                borderRadius: '50%', // Hace el círculo
                overflow: 'hidden', // Oculta partes de la imagen fuera del círculo
                position: 'relative', // Para posicionar los elementos flotantes
              }}
            >
              {/* Imagen */}
              <img
                src={DENTAMETRICS_IMAGE_URL}
                className="img-fluid" // Hace la imagen responsiva dentro del círculo
                // Esto ayuda a que la imagen cubra completamente el contenedor
                style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover' 
                }} 
              />
              
              
            </div>
            
          </div>

          {/* Lado Derecho: TEXTO */}
          <div className="col-md-6">
            <h2 className="mb-4" style={{ fontSize: '2.5rem' }}>
              {t('about.title')}
            </h2>
            
            {/* Párrafo principal */}
            <p>
              {t('about.mainText')}
            </p>

            {/* Párrafo secundario */}
            <p>
              {t('about.secondaryText')}
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;