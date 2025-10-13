// src/components/ContactForm.jsx

import React from 'react';
import TopBar from './TopBar';
import MainNavbar from './MainBar';
import Footer from './Footer';

const ContactForm = () => {
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
    <section id="contacto" className="py-5" style={{ backgroundColor: '#ffffff' }}> 
      <div className="container">
        
        {/* Título de la Sección */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <h2 className="">Contáctanos</h2>
            <p className="text-muted">
              Estamos listos para ayudarte. Envíanos un mensaje y te responderemos a la brevedad.
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
                  <label htmlFor="name" className="form-label">Nombre Completo</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    placeholder="Tu nombre" 
                    required 
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">Correo Electrónico</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    placeholder="ejemplo@dominio.com" 
                    required 
                  />
                </div>
              </div>
              
              {/* Campo de Teléfono (Ancho completo) */}
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Teléfono (Opcional)</label>
                <input 
                  type="tel" 
                  className="form-control" 
                  id="phone" 
                  placeholder="Ej: +52 55 1234 5678" 
                />
              </div>

              {/* Área de Mensaje (Ancho completo) */}
              <div className="mb-4">
                <label htmlFor="message" className="form-label">Tu Mensaje</label>
                <textarea 
                  className="form-control" 
                  id="message" 
                  rows="5" 
                  placeholder="Escribe tu consulta o comentario aquí..." 
                  required 
                ></textarea>
              </div>

              {/* Botón de Envío */}
              <div className="text-center">
                <button type="submit" className="btn btn-dark btn-lg px-5">
                  Enviar Mensaje
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