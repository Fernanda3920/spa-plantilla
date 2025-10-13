// src/components/MainNavbar.jsx

import React from 'react';
import { FaSearch } from 'react-icons/fa';
// ¡Las importaciones están correctas! El bundler se encarga de las rutas.
import logoImage from '../assets/spa-logo.png'; 
import logomx from '../assets/mx.png'; // Archivo de bandera

const MainNavbar = ({ logoSrc, logoAlt }) => {
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
            
            {['INICIO', 'NOSOTROS', 'SERVICIOS'].map((item, index) => (
              <li className="nav-item mx-2" key={item}>
                <a 
                  className={`nav-link text-uppercase ${item === 'INICIO' ? 'btn btn-info text-white px-3' : 'text-dark'}`} 
                  href={`/#${item.toLowerCase()}`}
                  style={{ fontWeight: item === 'INICIO' ? 'normal' : '500' }}
                >
                  {item}
                </a>
              </li>
            ))}
             {['CONTACTO'].map((item, index) => (
              <li className="nav-item mx-2" key={item}>
                <a 
                  className={`nav-link text-uppercase ${item === 'INICIO' ? 'btn btn-info text-white px-3' : 'text-dark'}`} 
                  href={`/${item.toLowerCase()}`}
                  style={{ fontWeight: item === 'INICIO' ? 'normal' : '500' }}
                >
                  {item}
                </a>
              </li>
            ))}
            
            {/* 2. Selector de Idioma (CORRECCIÓN HECHA AQUÍ) */}
            <li className="nav-item mx-2">
              <a className="nav-link text-dark" href="#">
                <img 
                  src={logomx} 
                  alt="Bandera de México" 
                  height="15" 
                  className="me-1" 
                />
                ES_MX
              </a>
            </li>            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;