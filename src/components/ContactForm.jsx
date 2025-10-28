import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const { t } = useTranslation();
  const recipientEmail = 'hedraspa@gmail.com';
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const templateParams = {
      to_email: recipientEmail,
      from_name: formData.from_name,
      from_email: formData.from_email,
      phone: formData.phone,
      message: formData.message,
      reply_to: formData.from_email
    };

    // Mostrar toast de carga
    const loadingToast = toast.loading('Enviando mensaje...', {
      position: "top-right",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    emailjs.send(
      'service_ufaokzg',
      'template_ssioke8',
      templateParams,
      'luOp_05zDN90nais8'
    )
    .then(() => {
      // Cerrar toast de carga y mostrar éxito
      toast.dismiss(loadingToast);
      toast.success('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        style: {
          background: '#d4edda',
          color: '#155724',
          border: '1px solid #c3e6cb'
        }
      });
      
      setFormData({
        from_name: '',
        from_email: '',
        phone: '',
        message: ''
      });
      setIsLoading(false);
    })
    .catch((error) => {
      console.error('Error:', error);
      // Cerrar toast de carga y mostrar error
      toast.dismiss(loadingToast);
      toast.error('Ocurrió un error al enviar el mensaje. Por favor, intenta nuevamente.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        style: {
          background: '#f8d7da',
          color: '#721c24',
          border: '1px solid #f5c6cb'
        }
      });
      setIsLoading(false);
    });
  };

  return (
    <>
      {/* Container de Toastify - Agregar esto */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      
      
      <section id="contacto" className="py-5" style={{ backgroundColor: '#ffffff' }}> 
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2>{t('contact.title')}</h2>
              <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label htmlFor="name" className="form-label">{t('contact.name')}</label>
                    <input 
                      type="text" 
                      name="from_name" 
                      className="form-control" 
                      id="name" 
                      placeholder={t('contact.name')} 
                      required 
                      value={formData.from_name}
                      onChange={handleChange} 
                      disabled={isLoading}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">{t('contact.email')}</label>
                    <input 
                      type="email" 
                      name="from_email" 
                      className="form-control" 
                      id="email" 
                      placeholder={t('contact.email')} 
                      required 
                      value={formData.from_email}
                      onChange={handleChange} 
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">{t('contact.phone')}</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    className="form-control" 
                    id="phone" 
                    placeholder="+52 123 456 7890" 
                    value={formData.phone}
                    onChange={handleChange} 
                    disabled={isLoading}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="form-label">{t('contact.message')}</label>
                  <textarea 
                    name="message" 
                    className="form-control" 
                    id="message" 
                    rows="5" 
                    placeholder={t('contact.message')} 
                    required 
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isLoading}
                  ></textarea>
                </div>

                <div className="text-center">
                  <button 
                    type="submit" 
                    className="btn btn-dark btn-lg px-5"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Enviando...
                      </>
                    ) : (
                      t('contact.submit')
                    )}
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