// src/components/MainNavbar.jsx

import React from 'react';
import { useTranslation } from 'react-i18next';
import logoImage from '../assets/spa-logo.png';
import LanguageSelector from './LanguageSelector';
import { PopupButton } from 'react-calendly';

const MainNavbar = ({ logoSrc, logoAlt }) => {
  const { t } = useTranslation();

  // Elementos de navegación principales
  const navItems = [
    { key: 'home', path: '/#inicio' },
    { key: 'about', path: '/#nosotros' },
    { key: 'services', path: '/#servicios' },
    { key: 'contact', path: '/#contacto' },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand" href="#">
          <img
            src={logoImage}
            alt={logoAlt || 'SPA'}
            height="50"
          />
        </a>

        {/* Botón hamburguesa móvil */}
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

        {/* Enlaces de navegación */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center">

            {/* Mapeo de secciones */}
            {navItems.map((item) => (
              <li className="nav-item mx-2" key={item.key}>
                <a
                  className={`nav-link text-uppercase ${
                    item.key === 'home'
                      ? 'btn btn-info text-white px-3'
                      : 'text-dark'
                  }`}
                  href={item.path}
                  style={{ fontWeight: item.key === 'home' ? 'normal' : '500' }}
                >
                  {t(`navbar.${item.key}`)}
                </a>
              </li>
            ))}

            {/* 🔹 Botón de Reserva (Calendly) */}
            <li className="nav-item mx-2">
              <PopupButton
      url="https://calendly.com/hedraspa/30min"
      rootElement={document.getElementById("root")}
      text={t("navbar.reserve") || "Reserva"}
      className="btn px-3 fw-bold"
      
    />
            </li>

            {/* Selector de idioma */}
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
