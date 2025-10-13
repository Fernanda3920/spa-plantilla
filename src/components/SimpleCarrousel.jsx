// src/components/SimpleCarousel.jsx

import React from 'react';

// Define un array de imágenes por defecto para la demostración
const defaultImages = [
    { src: '/path/to/slide1.png', alt: 'Primer slide' },
    { src: '/path/to/slide2.png', alt: 'Segundo slide' },
    { src: '/path/to/slide3.png', alt: 'Tercer slide' },
];

/**
 * Componente de Carrusel simple basado en Bootstrap, optimizado para imágenes PNG.
 * @param {Array<Object>} slides - Array de objetos { src: string, alt: string }.
 * @param {string} backgroundColor - El color sólido de fondo para todas las diapositivas (ej: '#f8f9fa', 'white').
 */
const SimpleCarousel = ({ 
    slides = defaultImages, 
    carouselId = 'mainCarousel', 
    backgroundColor = '#74a367ff' // 💡 NUEVA PROP: Color sólido por defecto (gris muy claro)
}) => {

    if (!slides || slides.length === 0) {
        return null;
    }

    // Estilos que se aplican a cada slide para asegurar el fondo y la altura
    const itemStyle = {
        backgroundColor: backgroundColor,
        height: '600px', // 💡 Fija una altura si la imagen no la tiene (ajusta a tu gusto, ej: '800px')
        display: 'flex',
        alignItems: 'center', // Centra la imagen verticalmente
        justifyContent: 'center', // Centra la imagen horizontalmente
    };

    return (
        <div id={carouselId} className="carousel slide" data-bs-ride="carousel">
            
            {/* Contenedor Interno del Carrusel */}
            <div className="carousel-inner">
                {slides.map((slide, index) => (
                    <div 
                        key={index} 
                        className={`carousel-item ${index === 0 ? 'active' : ''}`}
                        style={itemStyle} // 💡 Aplicamos el color de fondo y la altura fija
                    >
                        {/* 💡 CAMBIO: Quitamos 'd-block w-100' y usamos 'img-fluid' para que la imagen PNG no se estire */}
                        <img 
                            src={slide.src} 
                            className="img-fluid" 
                            alt={slide.alt} 
                            style={{ 
                                maxHeight: '100%', // Limita la altura de la imagen a la altura del slide
                                width: 'auto',     // Permite que la imagen tome su ancho real (no 100%)
                            }}
                        />
                    </div>
                ))}
            </div>
            
            {/* Botones de Control (Iguales) */}
            <button 
                className="carousel-control-prev" 
                type="button" 
                data-bs-target={`#${carouselId}`} 
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
            </button>
            <button 
                className="carousel-control-next" 
                type="button" 
                data-bs-target={`#${carouselId}`} 
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Siguiente</span>
            </button>
        </div>
    );
};

export default SimpleCarousel;