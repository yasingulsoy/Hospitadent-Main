import React, { useEffect } from 'react';
import { Footer } from '../components';

const BranchPage = () => {
  // URL'den şube slug'ını al
  const pathname = window.location.pathname;
  const pathParts = pathname.split('/');
  const branchSlug = pathParts[pathParts.length - 1]; // Son kısmı al

  // Şube adını slug'dan çıkar
  const getBranchName = (slug) => {
    const branchNames = {
      'mecidiyekoy': 'Mecidiyeköy',
      'bagcilar': 'Bağcılar',
      'bakirkoy': 'Bakırköy',
      'fatih': 'Fatih',
      'camlica': 'Çamlıca',
      'pendik': 'Pendik',
      'serifali': 'Şerifali',
      'cevizlibag': 'Cevizlibağ',
      'gokturk': 'Göktürk',
      'kayseri': 'Kayseri',
      'bodrum': 'Bodrum',
      'alanya': 'Alanya',
      'antalya': 'Antalya',
      'ankara': 'Ankara',
      'denizli': 'Denizli',
      'kocaeli': 'Kocaeli',
      'bursa': 'Bursa',
      'almanya': 'Almanya',
      'hollanda': 'Hollanda'
    };
    return branchNames[slug] || slug;
  };

  // Sayfa yüklendiğinde scroll'u aktif hale getir
  useEffect(() => {
    setTimeout(() => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }, 100);
  }, []);

  const branchName = getBranchName(branchSlug);

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-[#004876]">
            Hospitadent {branchName} Şubesi
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 pb-32">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg mx-auto">
            
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🏥</div>
              <h2 className="text-2xl font-bold text-gray-600 mb-4">
                {branchName} Şubesi
              </h2>
              <p className="text-lg text-gray-500">
                Bu sayfa yakında içerik ile doldurulacak.
              </p>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BranchPage; 