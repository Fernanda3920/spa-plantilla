// src/components/FeatureCardGroup.jsx

import React from 'react';
import { useTranslation } from 'react-i18next';
import FeatureCard from './FeatureCard';

const FeatureCardGroup = () => {
  const { t } = useTranslation();

  const features = ['technology', 'locations', 'medical'];

  return (
    // Fondo gris claro para imitar el diseño de la imagen
    <section className="py-5"> 
      <div className="container">
        {/* El 'row' y el 'justify-content-center' centran el contenido */}
        <div className="row justify-content-center">
          {features.map((featureKey) => (
            <FeatureCard 
              key={featureKey}
              featureKey={featureKey}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCardGroup;