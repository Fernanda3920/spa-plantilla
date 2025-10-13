// src/components/TopBar.jsx

import React from 'react';
import { FaFacebookF } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="border-bottom py-2" style={{ fontSize: '0.85rem' }}>
      <div className="container d-flex justify-content-between align-items-center">
        
        <span className="text-muted">
          Bienvenidos a Serentity, su SPA de confianza
        </span>
        
        <a 
          href="#" 
          className="text-primary" 
          aria-label="Ir a Facebook"
        >
          <FaFacebookF />
        </a>
      </div>
    </div>
  );
};

export default TopBar;