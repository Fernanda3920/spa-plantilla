// src/components/FeatureCardGroup.jsx

import React from 'react';
import FeatureCard from './FeatureCard'; // Importamos el nuevo componente

// 💡 Los datos de la imagen
const featureData = [
  {
    title: "Tecnología",
    text: "Nuestra empresa cuenta con equipo de vanguardia y los estudios más novedosos para ortodoncia y cirugías maxilofaciales.",
  },
  {
    title: "Sucursales",
    text: "Actualmente tenemos presencia en dos ubicaciones en la ciudad de Tijuana, además de sucursales en Rosarito, Tecate y Ensenada.",
  },
  {
    title: "Atención Médica",
    text: "Nuestros médicos brindan atención personalizada generando confianza y asegurando un servicio de calidad.",
  },
];

const FeatureCardGroup = ({ data = featureData }) => {
  return (
    // Fondo gris claro para imitar el diseño de la imagen
    <section className="py-5"> 
      <div className="container">
        {/* El 'row' y el 'justify-content-center' centran el contenido */}
        <div className="row justify-content-center">
          {data.map((feature, index) => (
            <FeatureCard 
              key={index} 
              title={feature.title}
              text={feature.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCardGroup;