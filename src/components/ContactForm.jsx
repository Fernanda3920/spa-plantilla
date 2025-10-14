// src/components/ContactForm.jsx

import React from 'react';
import { useTranslation } from 'react-i18next';
import TopBar from './TopBar';
import MainNavbar from './MainBar';
import Footer from './Footer';

const ContactForm = () => {
  const { t } = useTranslation();
  // Manejador de envío (simulado)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulario enviado (simulado). ¡Gracias por tu mensaje!');
    // Aquí es donde integrarías la lógica real de envío a un API, Firebase, o servicio de formularios.
  };

  return (
    <>
    <TopBar/>
    <MainNavbar logoSrc="/spa-logo.png" />
    <section id="contact" className="py-5" style={{ backgroundColor: '#ffffff' }}> 
      <div className="container">
        
        {/* Título de la Sección */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <h2 className="">{t('contact.title')}</h2>
            <p className="text-muted">
              {t('contact.description')}
            </p>
          </div>
        </div>

        {/* Formulario */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <form onSubmit={handleSubmit}>
              
              {/* Fila para Nombre y Email (división 50/50) */}
              <div className="row mb-3">
                <div className="col-md-6 mb-3 mb-md-0">
                  <label htmlFor="name" className="form-label">{t('contact.name')}</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    placeholder={t('contact.name')} 
                    required 
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">{t('contact.email')}</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    placeholder={t('contact.email')} 
                    required 
                  />
                </div>
              </div>
              
              {/* Campo de Teléfono (Ancho completo) */}
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">{t('contact.phone')}</label>
                <input 
                  type="tel" 
                  className="form-control" 
                  id="phone" 
                  placeholder="+1 234 567 890" 
                />
              </div>

              {/* Área de Mensaje (Ancho completo) */}
              <div className="mb-4">
                <label htmlFor="message" className="form-label">{t('contact.message')}</label>
                <textarea 
                  className="form-control" 
                  id="message" 
                  rows="5" 
                  placeholder={t('contact.message')}
                  required 
                ></textarea>
              </div>

              {/* Botón de Envío */}
              <div className="text-center">
                <button type="submit" className="btn btn-dark btn-lg px-5">
                  {t('contact.submit')}
                </button>
              </div>

            </form>
          </div>
        </div>
        
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default ContactForm;