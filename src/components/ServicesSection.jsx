import React from 'react';
import { Link } from 'react-router-dom'; // 👈 importa esto
import './ServicesSection.css';

const servicesData = [
  {
    id: 1,
    title: 'Masajes Terapéuticos',
    imageUrl: 'https://cdn.pixabay.com/photo/2014/03/11/22/56/new-year-285587_1280.jpg',
  },
  {
    id: 2,
    title: 'Colección Signature',
    imageUrl: 'https://cdn.pixabay.com/photo/2023/09/01/20/06/spa-8227623_1280.jpg',
  },
  {
    id: 3,
    title: 'Tratamientos Faciales',
    imageUrl: 'https://cdn.pixabay.com/photo/2019/09/16/17/18/spa-4481538_1280.jpg',
  },
  {
    id: 4,
    title: 'Rituales de Bienestar',
    imageUrl: 'https://cdn.pixabay.com/photo/2018/02/27/03/36/stones-3184610_1280.jpg',
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="spa-services-section">
      <div className="container">
        <div className="header-content">
          <h2 className="section-title">SERVICIOS DE SPA</h2>
          <p className="section-subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo non deleniti provident recusandae, mollitia libero sapiente placeat quasi, minus aut explicabo fugiat consequatur quis ullam assumenda pariatur molestias ipsa accusantium.
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card">
              <div className="image-wrapper">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="card-image"
                />
              </div>

              <div className="card-footer">
                <h3 className="card-title">{service.title}</h3>
                
                {/* 👇 Navegación al detalle */}
                <Link to={`/servicio/${service.id}`} className="view-more-btn">
                  Ver mas
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all-container">
          <button
            className="view-all-btn"
            onClick={() => console.log('Ver todos los servicios')}
          >
            Ver todos los servicios
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
