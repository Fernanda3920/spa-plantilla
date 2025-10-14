// src/components/MainNavbar.jsx

import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import logoImage from '../assets/spa-logo.png'; 
import logomx from '../assets/mx.png';

const MainNavbar = ({ logoSrc, logoAlt }) => {
  const { t } = useTranslation();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img 
            src={logoImage} 
            alt={logoAlt || 'SPA'} 
            height="50" 
          />
        </a>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            
            {[
              { key: 'home', path: '/#inicio' },
              { key: 'about', path: '/#nosotros' },
              { key: 'services', path: '/#servicios' }
            ].map((item) => (
              <li className="nav-item mx-2" key={item.key}>
                <a 
                  className={`nav-link text-uppercase ${item.key === 'home' ? 'btn btn-info text-white px-3' : 'text-dark'}`} 
                  href={item.path}
                  style={{ fontWeight: item.key === 'home' ? 'normal' : '500' }}
                >
                  {t(`navbar.${item.key}`)}
                </a>
              </li>
            ))}
            <li className="nav-item mx-2">
              <a 
                className="nav-link text-uppercase text-dark"
                href="/contacto"
                style={{ fontWeight: '500' }}
              >
                {t('navbar.contact')}
              </a>
            </li>
             
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;