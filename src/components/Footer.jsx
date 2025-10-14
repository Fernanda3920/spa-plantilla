// src/components/Footer.jsx

import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from '../assets/spa-logo.png';

const Footer = ({ logoSrc, logoAlt = 'Dentametrics Logo' }) => {
  const { t } = useTranslation();
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          
          {/* Columna 1: Logo y Descripción */}
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <a href="/" className="d-block mb-3">
              <img 
                src={logo} 
                alt={logoAlt} 
                height="40" 
              />
            </a>
            <p className="text-muted" style={{ fontSize: '0.9rem' }}>
              {t('footer.description')}
            </p>
            {/* Íconos de redes sociales */}
            <div className="d-flex mt-4">
              <a href="#" className="text-white me-3" aria-label="Facebook">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-white me-3" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-white" aria-label="Twitter">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Columna 2: Navegación Rápida */}
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-uppercase mb-4">{t('footer.navigation')}</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#nosotros" className="text-white text-decoration-none">{t('footer.links.about')}</a></li>
              <li className="mb-2"><a href="#servicios" className="text-white text-decoration-none">{t('footer.links.services')}</a></li>
              <li className="mb-2"><a href="#contacto" className="text-white text-decoration-none">{t('footer.links.contact')}</a></li>
            </ul>
          </div>
          
          {/* Columna 3: Servicios */}
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-uppercase mb-4">{t('footer.services')}</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#masajes" className="text-white text-decoration-none">{t('footer.links.massage')}</a></li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-uppercase mb-4">{t('footer.contact')}</h5>
            <ul className="list-unstyled text-muted" style={{ fontSize: '0.9rem' }}>
              <li className="mb-2">{t('footer.address')}</li>
              <li className="mb-2">{t('footer.phone')}</li>
              <li className="mb-2">{t('footer.email')}</li>
            </ul>
          </div>
          
        </div>
        
        {/* Barra de copyright */}
        <div className="text-center pt-4 mt-4 border-top">
          <p className="mb-0 text-muted" style={{ fontSize: '0.8rem' }}>
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;