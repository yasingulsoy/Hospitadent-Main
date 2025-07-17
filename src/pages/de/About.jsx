import React from 'react';
import { useTranslation } from 'react-i18next';
import SEOHead from '../../components/SEO/SEOHead';

const About = () => {

  return (
    <>
      <SEOHead 
        title="Über Uns - Hospitadent"
        description="Entdecken Sie die Geschichte und Mission von Hospitadent, führend in qualitativ hochwertiger Zahnpflege."
        keywords="hospitadent, zahnarzt, zahnpflege, zahnklinik, deutschland"
      />
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-3xl font-bold text-blue-700">
        <h1>Über Hospitadent</h1>
        <p className="text-lg mt-4 text-gray-600">
          Seite in Entwicklung - Inhalt und Bilder folgen
        </p>
      </div>
    </>
  );
};

export default About; 