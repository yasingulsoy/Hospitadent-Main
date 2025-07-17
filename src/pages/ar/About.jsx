import React from 'react';
import { useTranslation } from 'react-i18next';
import SEOHead from '../../components/SEO/SEOHead';

const About = () => {

  return (
    <>
      <SEOHead 
        title="من نحن - Hospitadent"
        description="اكتشف تاريخ ورسالة Hospitadent، الرائدة في رعاية الأسنان عالية الجودة."
        keywords="hospitadent, طبيب أسنان, رعاية الأسنان, عيادة أسنان, السعودية"
      />
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-3xl font-bold text-blue-700" dir="rtl">
        <h1>من نحن - Hospitadent</h1>
        <p className="text-lg mt-4 text-gray-600">
          الصفحة قيد التطوير - المحتوى والصور قريباً
        </p>
      </div>
    </>
  );
};

export default About; 