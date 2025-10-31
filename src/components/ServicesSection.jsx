import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './ServicesSection.css';
import MinimalistCarousel from './MinimalistCarousel';

const servicesData = [
  {
    id: 1,
    key: 'therapeutic',
    imageUrl: 'https://cdn.pixabay.com/photo/2014/03/11/22/56/new-year-285587_1280.jpg',
  },
  {
    id: 2,
    key: 'signature',
    imageUrl: 'https://cdn.pixabay.com/photo/2023/09/01/20/06/spa-8227623_1280.jpg',
  },
  {
    id: 3,
    key: 'facial',
    imageUrl: 'https://cdn.pixabay.com/photo/2019/09/16/17/18/spa-4481538_1280.jpg',
  },
  {
    id: 4,
    key: 'wellness',
    imageUrl: 'https://cdn.pixabay.com/photo/2018/02/27/03/36/stones-3184610_1280.jpg',
  },
];

const ServicesSection = () => {
  const { t } = useTranslation();

  return (
    <section id="servicios" className="spa-services-section">
      
      {/* 1. Contenedor para el TÍTULO y SUBTÍTULO (limitado por 'container') 
      <div className="container">
        <div className="header-content">
          <h2 className="section-title">{t('services.title')}</h2>
          <p className="section-subtitle">
            {t('services.description')}
          </p>
        </div>
      </div>
      */}
      {/* 2. CARRUSEL DE ANCHO COMPLETO CON ESPACIO INFERIOR (mb-5) */}
      <div className="mb-5"> 
        <MinimalistCarousel/>
      </div>

      {/* 3. Contenedor para las TARJETAS DE SERVICIO (limitado por 'container') */}
      <div className="container">
        <div className="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card">
              <div className="image-wrapper">
                <img
                  src={service.imageUrl}
                  alt={t(`services.items.${service.key}.title`)}
                  className="card-image"
                />
              </div>

              <div className="card-footer">
                <h3 className="card-title">{t(`services.items.${service.key}.title`)}</h3>
                
                <Link to={`/servicio/${service.id}`} className="view-more-btn">
                  {t('services.viewMore')}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all-container">
          <button
            className="view-all-btn"
            onClick={() => console.log('View all services')}
          >
            {t('services.viewAll')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
