import React from 'react';
import SEOHead from '../../components/SEO/SEOHead';

const About = () => {

  return (
    <>
      <SEOHead 
        title="О Нас - Hospitadent"
        description="Узнайте историю и миссию Hospitadent, лидера в качественной стоматологической помощи."
        keywords="hospitadent, стоматолог, стоматологическая помощь, стоматологическая клиника, россия"
      />
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-3xl font-bold text-blue-700">
        <h1>О Hospitadent</h1>
        <p className="text-lg mt-4 text-gray-600">
          Страница в разработке - Контент и изображения появятся вскоре
        </p>
      </div>
    </>
  );
};

export default About; 