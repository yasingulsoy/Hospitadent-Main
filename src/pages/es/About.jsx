import React from 'react';
import SEOHead from '../../components/SEO/SEOHead';

const About = () => {

  return (
    <>
      <SEOHead 
        title="Acerca de - Hospitadent"
        description="Descubre la historia y misión de Hospitadent, líder en atención dental de calidad."
        keywords="hospitadent, dentista, atención dental, clínica dental, españa"
      />
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-3xl font-bold text-blue-700">
        <h1>Acerca de Hospitadent</h1>
        <p className="text-lg mt-4 text-gray-600">
          Página en desarrollo - Contenido e imágenes próximamente
        </p>
      </div>
    </>
  );
};

export default About; 