// src/components/ContactForm.jsx
import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';
import MainNavbar from './MainBar';
import Footer from './Footer';

const ContactForm = () => {
  const { t } = useTranslation();
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_t28bm1f',       // 🔹 tu Service ID
      'template_de941yw',      // 🔹 tu Template ID
      form.current,
      'QfhmE0OyVQo0-yJwh'       // 🔹 tu Public Key
    )
    .then(() => {
      alert('✅ ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
      e.target.reset();
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('❌ Ocurrió un error al enviar el mensaje.');
    });
  };

  return (
    <>
      <section id="contact" className="py-5" style={{ backgroundColor: '#ffffff' }}> 
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2>{t('contact.title')}</h2>
              <p className="text-muted">{t('contact.description')}</p>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <form ref={form} onSubmit={handleSubmit}>
                <div className="row mb-3">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label htmlFor="name" className="form-label">{t('contact.name')}</label>
                    <input type="text" name="from_name" className="form-control" id="name" placeholder={t('contact.name')} required />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">{t('contact.email')}</label>
                    <input type="email" name="from_email" className="form-control" id="email" placeholder={t('contact.email')} required />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">{t('contact.phone')}</label>
                  <input type="tel" name="phone" className="form-control" id="phone" placeholder="+52 123 456 7890" />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="form-label">{t('contact.message')}</label>
                  <textarea name="message" className="form-control" id="message" rows="5" placeholder={t('contact.message')} required></textarea>
                </div>

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

    </>
  );
};

export default ContactForm;
