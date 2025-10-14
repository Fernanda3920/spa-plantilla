// src/components/ServiceDetail.jsx

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../ServicesSection.css';
import './ServiceDetail.css';
import MainNavbar from '../MainBar';
import Footer from '../Footer';
import TopBar from '../TopBar';

// Mapeo de IDs de la URL a las claves de traducción
const serviceKeyMap = {
  1: 'therapeutic',
  2: 'signature',
  3: 'facial',
  4: 'wellness'
};

// Mapeo de claves a URLs de imágenes (Hardcoded, asumo que esto está bien)
const serviceImageMap = {
  therapeutic: 'https://cdn.pixabay.com/photo/2014/03/11/22/56/new-year-285587_1280.jpg',
  signature: 'https://cdn.pixabay.com/photo/2023/09/01/20/06/spa-8227623_1280.jpg',
  facial: 'https://cdn.pixabay.com/photo/2019/09/16/17/18/spa-4481538_1280.jpg',
  wellness: 'https://cdn.pixabay.com/photo/2018/02/27/03/36/stones-3184610_1280.jpg'
};

/* ❌ CORRECCIÓN: El array incompleto que estaba aquí: 
  ]
  },
  ];
  fue eliminado ya que causaba un error de sintaxis.
*/

function ServiceDetail() {
  const { id } = useParams();
  const { t } = useTranslation();
  // Se usa el ID del parámetro para obtener la clave del servicio (e.g., 'therapeutic')
  const serviceKey = serviceKeyMap[id];

  if (!serviceKey) {
    return (
      <div className="service-detail container">
        <h2>{t('services.notFound')}</h2>
        <Link to="/" className="back-btn">{t('common.backToHome')}</Link>
      </div>
    );
  }

  // Se construye el objeto del servicio usando la clave de i18next
  const service = {
    key: serviceKey,
    title: t(`services.items.${serviceKey}.title`),
    description: t(`services.items.${serviceKey}.description`),
    imageUrl: serviceImageMap[serviceKey],
    // Esto asume que los subServicios están en el archivo JSON/i18next y son un array de objetos
    subServices: t(`services.items.${serviceKey}.subServices`, { returnObjects: true })
  };

  return (
    <>
      <TopBar/>
      <div className="service-detail container">
        <div className="detail-header">
          <img src={service.imageUrl} alt={service.title} className="detail-image" />
          <div className="detail-content">
            <h1>{service.title}</h1>
            <p className="main-description">{service.description}</p>
            {/* Si quieres regresar a la lista de servicios, la ruta podría ser '/services' en lugar de '/' */}
            <Link to="/" className="back-btn">← {t('services.backToServices')}</Link> 
          </div>
        </div>
        
        {/* SECCIÓN DE SUB-SERVICIOS */}
        <h2 className="subservices-heading">{t('services.availableTreatments')}</h2>
        
        {/* Manejo de caso si subServices no es un array (por ejemplo, si i18next devuelve un objeto vacío) */}
        {Array.isArray(service.subServices) && service.subServices.length > 0 ? (
          <div className="subservices-grid">
            {service.subServices.map((subService, index) => (
              <div key={index} className="subservice-card">
                <h3>{subService.title}</h3>
                {/* Puedes envolver estos textos en un div si las variables no son strings */}
                <p className="subservice-duration">{subService.duration}</p>
                <p className="subservice-price">{subService.price}</p>
                <p className="subservice-description">{subService.description}</p>
                <button className="book-btn">{t('services.book')}</button>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-subservices">{t('services.noTreatmentsAvailable')}</p>
        )}
        
      </div>
      <Footer />
    </>
  );
}

export default ServiceDetail;