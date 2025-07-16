import React from 'react';
import { Footer } from '../components';

const HastaYorumlari = () => {
  return (
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
            
            {/* Review 1 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="p-6">
                {/* Profile Section */}
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3 shadow-lg">
                    A
                  </div>
                  <div>
                    <h3 className="text-[#004876] font-semibold text-sm">
                      Ayşe Kaya
                    </h3>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Review Text */}
                <p className="text-[#004876] text-sm leading-relaxed mb-4 line-clamp-4">
                  Harika bir deneyim yaşadım. Çok profesyonel ve güler yüzlü bir ekip.
                </p>
                
                {/* Platform & Link */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center bg-blue-50 px-2 py-1 rounded-lg">
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

            {/* Review 2 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="p-6">
                {/* Profile Section */}
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3 shadow-lg">
                    M
                  </div>
                  <div>
                    <h3 className="text-[#004876] font-semibold text-sm">
                      Mehmet Demir
                    </h3>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Review Text */}
                <p className="text-[#004876] text-sm leading-relaxed mb-4 line-clamp-4">
                  Mükemmel hizmet aldım. Doktorlar çok deneyimli ve hasta odaklı.
                </p>
                
                {/* Platform & Link */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center bg-blue-50 px-2 py-1 rounded-lg">
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

          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HastaYorumlari; 