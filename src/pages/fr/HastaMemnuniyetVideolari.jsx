import React from 'react';
import { useTranslation } from 'react-i18next';
import SEOHead from '../../components/SEO/SEOHead';

const HastaMemnuniyetVideolari = () => {
  const { t } = useTranslation();

  const videos = [
    {
      id: 1,
      title: 'Vidéo de satisfaction patient 1',
      description: 'Un patient satisfait partage son expérience avec notre traitement dentaire.',
      videoUrl: '/assets/videos/firat_okur.mp4',
      thumbnail: '/assets/pic-1.png'
    },
    {
      id: 2,
      title: 'Vidéo de satisfaction patient 2',
      description: 'Un autre témoignage de patient sur nos services dentaires professionnels.',
      videoUrl: '/assets/videos/firat_okur.mp4',
      thumbnail: '/assets/pic-2.png'
    },
    {
      id: 3,
      title: 'Vidéo de satisfaction patient 3',
      description: 'Satisfaction des patients et expérience de soins dentaires de qualité.',
      videoUrl: '/assets/videos/firat_okur.mp4',
      thumbnail: '/assets/pic-3.png'
    }
  ];

  return (
    <>
      <SEOHead 
        title={t('patientSatisfaction.title')}
        description={t('patientSatisfaction.description')}
        keywords={t('patientSatisfaction.keywords')}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {t('patientSatisfaction.title')}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('patientSatisfaction.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <video 
                  className="w-full h-48 object-cover"
                  poster={video.thumbnail}
                  controls
                >
                  <source src={video.videoUrl} type="video/mp4" />
                  {t('patientSatisfaction.videoNotSupported')}
                </video>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {video.title}
                </h3>
                <p className="text-gray-600">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {t('patientSatisfaction.whyChooseUs')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {t('patientSatisfaction.experience')}
              </h3>
              <p className="text-gray-600">
                {t('patientSatisfaction.experienceDesc')}
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {t('patientSatisfaction.quality')}
              </h3>
              <p className="text-gray-600">
                {t('patientSatisfaction.qualityDesc')}
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {t('patientSatisfaction.care')}
              </h3>
              <p className="text-gray-600">
                {t('patientSatisfaction.careDesc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HastaMemnuniyetVideolari; 