import React from 'react';
import { useTranslation } from 'react-i18next';
import SEOHead from '../../components/SEO/SEOHead';

const HastaYorumlari = () => {
  const { t } = useTranslation();

  const reviews = [
    {
      id: 1,
      name: 'John Smith',
      rating: 5,
      comment: 'Excellent dental care experience. The staff was very professional and caring.',
      date: '2024-01-15'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'I am very satisfied with my dental implant treatment. Highly recommended!',
      date: '2024-01-10'
    },
    {
      id: 3,
      name: 'Michael Brown',
      rating: 5,
      comment: 'Professional service and modern facilities. The treatment was painless.',
      date: '2024-01-08'
    },
    {
      id: 4,
      name: 'Emily Davis',
      rating: 5,
      comment: 'Great experience from start to finish. The doctors are very skilled.',
      date: '2024-01-05'
    },
    {
      id: 5,
      name: 'David Wilson',
      rating: 5,
      comment: 'Outstanding dental care. I feel confident with my smile now.',
      date: '2024-01-03'
    },
    {
      id: 6,
      name: 'Lisa Anderson',
      rating: 5,
      comment: 'Very professional and caring staff. The treatment exceeded my expectations.',
      date: '2024-01-01'
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <>
      <SEOHead 
        title={t('patientReviews.title')}
        description={t('patientReviews.description')}
        keywords={t('patientReviews.keywords')}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {t('patientReviews.title')}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('patientReviews.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="flex mr-3">
                  {renderStars(review.rating)}
                </div>
                <span className="text-sm text-gray-500">
                  {new Date(review.date).toLocaleDateString()}
                </span>
              </div>
              <p className="text-gray-700 mb-4">
                "{review.comment}"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {review.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-800">{review.name}</p>
                  <p className="text-sm text-gray-500">{t('patientReviews.verifiedPatient')}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {t('patientReviews.overallRating')}
          </h2>
          <div className="flex items-center justify-center mb-4">
            <div className="flex mr-3">
              {renderStars(5)}
            </div>
            <span className="text-2xl font-bold text-gray-800">5.0</span>
          </div>
          <p className="text-gray-600 mb-8">
            {t('patientReviews.basedOnReviews')} {reviews.length} {t('patientReviews.reviews')}
          </p>
          
          <div className="bg-blue-50 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {t('patientReviews.shareExperience')}
            </h3>
            <p className="text-gray-600 mb-6">
              {t('patientReviews.shareExperienceDesc')}
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              {t('patientReviews.writeReview')}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HastaYorumlari; 