// src/components/Footer.jsx

import React from 'react';
// Asumiendo que ya tienes react-icons, si no, instálalos con 'npm install react-icons'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from '../assets/spa-logo.png'; // Asegúrate de que la ruta sea correcta

const Footer = ({ logoSrc, logoAlt = 'Dentametrics Logo' }) => {
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
              Clínica de imagen y diagnóstico dental, ofreciendo estudios de vanguardia en Tijuana, Tecate, Rosarito y Ensenada.
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
            <h5 className="text-uppercase mb-4">Navegación</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#nosotros" className="text-white text-decoration-none">Nosotros</a></li>
              <li className="mb-2"><a href="#servicios" className="text-white text-decoration-none">Servicios</a></li>
              <li className="mb-2"><a href="#contacto" className="text-white text-decoration-none">Contacto</a></li>
            </ul>
          </div>
          
          {/* Columna 3: Servicios */}
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-uppercase mb-4">Servicios</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#masajes" className="text-white text-decoration-none">Masajes</a></li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-uppercase mb-4">Contáctanos</h5>
            <ul className="list-unstyled text-muted" style={{ fontSize: '0.9rem' }}>
              <li className="mb-2">Tijuana, B.C., México</li>
              <li className="mb-2">Teléfono: (555) 123-4567</li>
              <li className="mb-2">Email: info@dentametrics.com</li>
            </ul>
          </div>
          
        </div>
        
        {/* Barra de copyright */}
        <div className="text-center pt-4 mt-4 border-top">
          <p className="mb-0 text-muted" style={{ fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} Dentametrics. Todos los derechos reservados.
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;