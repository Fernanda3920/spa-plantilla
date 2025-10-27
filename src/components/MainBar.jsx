// src/components/MainNavbar.jsx

import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import logoImage from '../assets/spa-logo.png'; 
import logomx from '../assets/mx.png'; 
import LanguageSelector from './LanguageSelector';

const MainNavbar = ({ logoSrc, logoAlt }) => {
  const { t } = useTranslation();
  
  // Array de elementos de navegación, incluyendo 'contact'
  const navItems = [
    { key: 'home', path: '/#inicio' },
    { key: 'about', path: '/#nosotros' },
    { key: 'services', path: '/#servicios' },
    // AÑADIDO: 'contact' ahora está aquí
    { key: 'contact', path: '/#contacto' }
  ];

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
            
            {/* Mapeo unificado para todos los enlaces */}
            {navItems.map((item) => (
              <li className="nav-item mx-2" key={item.key}>
                <a 
                  // La clase 'btn btn-info...' solo se aplica a 'home'
                  className={`nav-link text-uppercase ${item.key === 'home' ? 'btn btn-info text-white px-3' : 'text-dark'}`} 
                  href={item.path}
                  // El peso de la fuente solo es 'normal' para 'home'
                  style={{ fontWeight: item.key === 'home' ? 'normal' : '500' }}
                >
                  {/* Usa el prefijo 'navbar.' para Contacto, igual que los demás */}
                  {t(`navbar.${item.key}`)}
                </a>
              </li>
            ))}

            {/* Selector de Lenguaje (se mantiene separado al final) */}
            <li className="nav-item ms-3">
              <LanguageSelector />
            </li>
              
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;