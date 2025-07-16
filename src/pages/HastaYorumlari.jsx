import React from 'react';
import { Footer } from '../components';
import SEOHead from '../components/SEO/SEOHead';

const HastaYorumlari = () => {
  return (
    <>
      <SEOHead 
        title="Hasta Yorumları"
        description="Hospitadent hasta yorumları ve değerlendirmeleri. Gerçek hasta deneyimleri, Google ve Trustpilot yorumları. 4.8/5 puan ortalaması ile hasta memnuniyeti."
        keywords="hospitadent yorumları, hasta değerlendirmeleri, google yorumları, trustpilot, hasta memnuniyeti, diş hekimi yorumları"
        url="https://hospitadent.com/hasta-yorumlari"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "AggregateRating",
          "itemReviewed": {
            "@type": "Dentist",
            "name": "Hospitadent"
          },
          "ratingValue": "4.8",
          "reviewCount": "15000",
          "bestRating": "5",
          "worstRating": "1"
        }}
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-sm py-12 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-center bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] bg-clip-text text-transparent">
            Hasta Yorumları
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 pb-32">
        <div className="max-w-7xl mx-auto">
          
          {/* Reviews Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            
            {/* Review 1 - Mehdi Nasiri */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#004876]/20">
              <div className="p-6">
                {/* Profile Section */}
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-full flex items-center justify-center text-[#004876] font-black text-base mr-3 shadow-lg border-2 border-[#004876]/30">
                    MN
                  </div>
                  <div>
                    <h3 className="text-[#004876] font-semibold text-sm">
                      Mehdi Nasiri
                    </h3>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 fill-[#004876]" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Review Text */}
                <p className="text-[#004876] text-sm leading-relaxed mb-4 line-clamp-4">
                  Doktor Esra Akdoğan en iyi doktorlardan bir tanesi Ben kaç defa işlem yaptım kaç senedir tanıyorum her defasında memnun kaldım Benim dişlerim çok hassas ve farklı o yüzden her doktor işlem yapamaz ama hep memnun kaldım Kendisinden çok teşekkür ederim.
                </p>
                
                {/* Platform & Link */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center bg-blue-50 px-2 py-1 rounded-lg border border-[#004876]/20">
                    <svg className="w-4 h-4 text-[#004876] mr-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span className="text-xs font-medium text-[#004876]">Google</span>
                  </div>
                  <a 
                    href="https://www.google.com/maps/contrib/110531748703501187124/place/ChIJBzTqHVK3yhQR59yFviXZ9BQ/@40.9881057,28.9345291,10z/data=!4m6!1m5!8m4!1e1!2s110531748703501187124!3m1!1e1?hl=tr&entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#004876] text-xs font-medium hover:underline transition-colors"
                  >
                    Yorumu Gör →
                  </a>
                </div>
              </div>
            </div>

            {/* Review 2 - Döndü Bulduk */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#004876]/20">
              <div className="p-6">
                {/* Profile Section */}
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 rounded-full flex items-center justify-center text-[#004876] font-black text-base mr-3 shadow-lg border-2 border-[#004876]/30">
                    DB
                  </div>
                  <div>
                    <h3 className="text-[#004876] font-semibold text-sm">
                      Döndü Bulduk
                    </h3>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 fill-[#004876]" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Review Text */}
                <p className="text-[#004876] text-sm leading-relaxed mb-4 line-clamp-4">
                  Oğlum yasinin ortodonti tedavi için Mart ayından beri bagcılar hospitadente geliyoruz cok memnun kaldım. Tugce hanıma cok tesekkur ederiz. Resepsiyon Sevil Hanım ve Merve hanımın guler yuzlu ve ilgisinden dolayı cok tesekkur ederim herkese hospitadent diş hastanesini tavsiye ederim.
                </p>
                
                {/* Platform & Link */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center bg-blue-50 px-2 py-1 rounded-lg border border-[#004876]/20">
                    <svg className="w-4 h-4 text-[#004876] mr-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span className="text-xs font-medium text-[#004876]">Google</span>
                  </div>
                  <a 
                    href="https://www.google.com/maps/contrib/112630131822209285703/place/ChIJHYUFSxelyhQR0BEl1dXwLoo/@41.0450571,28.8285216,16z/data=!4m6!1m5!8m4!1e1!2s112630131822209285703!3m1!1e1?hl=tr&entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#004876] text-xs font-medium hover:underline transition-colors"
                  >
                    Yorumu Gör →
                  </a>
                </div>
              </div>
            </div>

            {/* Review 3 - Michael Rowland */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#004876]/20">
              <div className="p-6">
                {/* Profile Section */}
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 rounded-full flex items-center justify-center text-[#004876] font-black text-base mr-3 shadow-lg border-2 border-[#004876]/30">
                    MR
                  </div>
                  <div>
                    <h3 className="text-[#004876] font-semibold text-sm">
                      Michael Rowland
                    </h3>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 fill-[#004876]" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Review Text */}
                <p className="text-[#004876] text-sm leading-relaxed mb-4 line-clamp-4">
                  Having had a history of dental work in several countries my treatment with Hospitadent made a difference to my experience in dental care. From the consultation to the final fitting which lasted several days I felt to be under the care of professionals.
                </p>
                
                {/* Platform & Link */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center bg-green-50 px-2 py-1 rounded-lg border border-[#004876]/20">
                    <svg className="w-4 h-4 text-[#004876] mr-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <span className="text-xs font-medium text-[#004876]">Trustpilot</span>
                  </div>
                  <a 
                    href="https://www.trustpilot.com/users/6381eff4aabfef0012f04c52" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#004876] text-xs font-medium hover:underline transition-colors"
                  >
                    Yorumu Gör →
                  </a>
                </div>
              </div>
            </div>

            {/* Review 4 - Carla Borau */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#004876]/20">
              <div className="p-6">
                {/* Profile Section */}
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600 rounded-full flex items-center justify-center text-[#004876] font-black text-base mr-3 shadow-lg border-2 border-[#004876]/30">
                    CB
                  </div>
                  <div>
                    <h3 className="text-[#004876] font-semibold text-sm">
                      Carla Borau
                    </h3>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 fill-[#004876]" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Review Text */}
                <p className="text-[#004876] text-sm leading-relaxed mb-4 line-clamp-4">
                  Even I do not speak Turkish, my experience in Hospident Mecidiyeköy was very good, one of the translation lady Cansel was waiting for me in the lobby, she was very kind and patient explaining me all the times the procedures doctors were going to perform.
                </p>
                
                {/* Platform & Link */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center bg-green-50 px-2 py-1 rounded-lg border border-[#004876]/20">
                    <svg className="w-4 h-4 text-[#004876] mr-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <span className="text-xs font-medium text-[#004876]">Trustpilot</span>
                  </div>
                  <a 
                    href="https://www.trustpilot.com/users/6381de3363bce300137dce6c" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#004876] text-xs font-medium hover:underline transition-colors"
                  >
                    Yorumu Gör →
                  </a>
                </div>
              </div>
            </div>

            {/* Review 5 - Yayla Kabataş */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#004876]/20">
              <div className="p-6">
                {/* Profile Section */}
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-400 via-teal-500 to-teal-600 rounded-full flex items-center justify-center text-[#004876] font-black text-base mr-3 shadow-lg border-2 border-[#004876]/30">
                    YK
                  </div>
                  <div>
                    <h3 className="text-[#004876] font-semibold text-sm">
                      Yayla Kabataş
                    </h3>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 fill-[#004876]" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Review Text */}
                <p className="text-[#004876] text-sm leading-relaxed mb-4 line-clamp-4">
                  Merhaba 5 yaşındaki oğlumun diş ağrıları çürükleri vardı 4 veya 5 yere gitmemize rağmen yardımcı olamadılar malesef, eşimle birlikte çocuk diş doktoru ararken internetten hastaneyi bulduk ve muhteşem bir doktorla tanıştık.
                </p>
                
                {/* Platform & Link */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center bg-blue-50 px-2 py-1 rounded-lg border border-[#004876]/20">
                    <svg className="w-4 h-4 text-[#004876] mr-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span className="text-xs font-medium text-[#004876]">Google</span>
                  </div>
                  <a 
                    href="https://www.google.com/maps/contrib/104799280731880635488/place/ChIJBzTqHVK3yhQR59yFviXZ9BQ/@41.0659643,28.9950881,16z/data=!4m6!1m5!8m4!1e1!2s104799280731880635488!3m1!1e1?hl=tr&entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#004876] text-xs font-medium hover:underline transition-colors"
                  >
                    Yorumu Gör →
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      <Footer />
    </div>
    </>
  );
};

export default HastaYorumlari; 