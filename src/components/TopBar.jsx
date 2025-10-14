// src/components/TopBar.jsx

import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

const TopBar = () => {
  const { t } = useTranslation();
  
  return (
    <div className="border-bottom py-2" style={{ fontSize: '0.85rem' }}>
      <div className="container d-flex justify-content-between align-items-center">
        
        <span className="text-muted">
          {t('hero.subtitle')}
        </span>
        
        <div className="d-flex align-items-center gap-3">
          <LanguageSelector />
          <a 
            href="#" 
            className="text-primary" 
            aria-label="Ir a Facebook"
          >
            <FaFacebookF />
          </a>
        </div>
      </div> 
    </div>
  );
};

export default TopBar;