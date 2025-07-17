import React from 'react';
import SEOHead from '../../components/SEO/SEOHead';

const About = () => {

  return (
    <>
      <SEOHead 
        title="À Propos - Hospitadent"
        description="Découvrez l'histoire et la mission de Hospitadent, leader en soins dentaires de qualité."
        keywords="hospitadent, dentiste, soins dentaires, clinique dentaire, france"
      />
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-3xl font-bold text-blue-700">
        <h1>À Propos de Hospitadent</h1>
        <p className="text-lg mt-4 text-gray-600">
          Page en cours de développement - Contenu et images à venir
        </p>
      </div>
    </>
  );
};

export default About; 