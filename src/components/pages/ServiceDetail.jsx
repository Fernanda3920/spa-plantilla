import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../ServicesSection.css';
import './ServiceDetail.css'; // Asegúrate de tener este archivo para los estilos
import MainNavbar from '../MainBar';
import Footer from '../Footer';
import TopBar from '../TopBar';

// Datos actualizados con sub-servicios (usar el array de arriba)
const servicesData = [
  // ... (Pega la estructura de datos actualizada aquí)
  {
    id: 1,
    title: 'Masajes Terapéuticos',
    description: 'Nuestros masajes terapéuticos ayudan a relajar músculos, aliviar el estrés y mejorar la circulación.',
    imageUrl: 'https://cdn.pixabay.com/photo/2014/03/11/22/56/new-year-285587_1280.jpg',
    subServices: [
      { subTitle: 'Masaje Sueco', duration: '60 min', price: '$85', subDescription: 'Relajación profunda para aliviar tensiones musculares.' },
      { subTitle: 'Drenaje Linfático', duration: '90 min', price: '$120', subDescription: 'Técnica suave para estimular el sistema linfático y desintoxicar.' },
      { subTitle: 'Masaje Deportivo', duration: '45 min', price: '$95', subDescription: 'Enfoque en áreas específicas para la recuperación muscular.' },
    ]
  },
  {
    id: 2,
    title: 'Colección Signature',
    description: 'Experiencia exclusiva de tratamientos premium inspirados en rituales ancestrales y técnicas modernas.',
    imageUrl: 'https://cdn.pixabay.com/photo/2023/09/01/20/06/spa-8227623_1280.jpg',
    subServices: [
      { subTitle: 'Ritual Ancestral', duration: '120 min', price: '$250', subDescription: 'Tratamiento de cuerpo completo con aceites esenciales exóticos.' },
      { subTitle: 'Experiencia Diamante', duration: '90 min', price: '$300', subDescription: 'Facial y corporal con productos de alta gama y oro coloidal.' },
    ]
  },
  {
    id: 3,
    title: 'Tratamientos Faciales',
    description: 'Cuida tu piel con productos naturales y técnicas profesionales que restauran su luminosidad.',
    imageUrl: 'https://cdn.pixabay.com/photo/2019/09/16/17/18/spa-4481538_1280.jpg',
    subServices: [
      { subTitle: 'Limpieza Profunda', duration: '60 min', price: '$75', subDescription: 'Eliminación de impurezas y puntos negros para una piel fresca.' },
      { subTitle: 'Hidratación con Ácido Hialurónico', duration: '90 min', price: '$130', subDescription: 'Restaura la barrera de hidratación y suaviza las líneas finas.' },
    ]
  },
  {
    id: 4,
    title: 'Rituales de Bienestar',
    description: 'Sumérgete en una experiencia sensorial que combina aromaterapia, música y técnicas de relajación.',
    imageUrl: 'https://cdn.pixabay.com/photo/2018/02/27/03/36/stones-3184610_1280.jpg',
    subServices: [
      { subTitle: 'Terapia de Piedras Calientes', duration: '90 min', price: '$140', subDescription: 'Combinación de masaje y calor para una relajación profunda y alivio del dolor.' },
      { subTitle: 'Exfoliación con Sales Marinas', duration: '60 min', price: '$80', subDescription: 'Elimina células muertas, dejando la piel suave y renovada.' },
    ]
  },
];

function ServiceDetail() {
  const { id } = useParams();
  const service = servicesData.find((s) => s.id === parseInt(id));

  if (!service) {
    return (
      <div className="service-detail container">
        <h2>Servicio no encontrado</h2>
        <Link to="/" className="back-btn">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <>
    <TopBar/>
     <MainNavbar logoSrc="/tu-logo-aqui.png" />
    <div className="service-detail container">
      <div className="detail-header">
        <img src={service.imageUrl} alt={service.title} className="detail-image" />
        <div className="detail-content">
          <h1>{service.title}</h1>
          <p className="main-description">{service.description}</p>
          <Link to="/" className="back-btn">← Volver a Servicios</Link>
        </div>
      </div>
      
      {/* SECCIÓN DE SUB-SERVICIOS */}
      <h2 className="subservices-heading">Tratamientos Disponibles</h2>
      <div className="subservices-grid">
        {service.subServices.map((subService, index) => (
          <div key={index} className="subservice-card">
            <h3>{subService.subTitle}</h3>
            <p className="subservice-duration">{subService.duration}</p>
            <p className="subservice-price">{subService.price}</p>
            <p className="subservice-description">{subService.subDescription}</p>
            <button className="book-btn">Reservar</button>
          </div>
        ))}
      </div>
      
    </div>
    <Footer />
    </>
  );
}

export default ServiceDetail;