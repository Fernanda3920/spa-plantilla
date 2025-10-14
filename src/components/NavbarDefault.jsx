import React from 'react';
import { useTranslation } from 'react-i18next';

const NavbarDefault = () => {
  const { t } = useTranslation();

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" aria-label="Home">
          {t('navbar.home')}
        </a>
        <div className="navbar-nav">
          <a className="nav-link" href="#about">{t('navbar.about')}</a>
          <a className="nav-link" href="#services">{t('navbar.services')}</a>
          <a className="nav-link" href="#contact">{t('navbar.contact')}</a>
        </div>
      </div>
    </nav>
  );
};

export default NavbarDefault;