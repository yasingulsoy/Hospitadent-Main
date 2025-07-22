import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../components';

// Şube görselleri eşleşmesi
const branchImages = {
  'Mecidiyeköy': '/assets/sube_resimleri/mecidiyekoy.png',
  'Bağcılar': '/assets/sube_resimleri/bagcilar.png',
  'Bakırköy': '/assets/sube_resimleri/bakirkoy.png',
  'Fatih': '/assets/sube_resimleri/fatih.png',
  'Çamlıca': '/assets/sube_resimleri/camlica.png',
  'Pendik': '/assets/sube_resimleri/pendik.png',
  'Şerifali': '/assets/sube_resimleri/serifali.png',
  'Cevizlibağ': '/assets/sube_resimleri/cevizlibag.png',
  'Göktürk': '/assets/sube_resimleri/gokturk.webp',
  'Kayseri': '/assets/sube_resimleri/kayseri.png',
  'Bodrum': '/assets/sube_resimleri/bodrum.png',
  'Alanya': '/assets/sube_resimleri/alanya.png',
  'Antalya': '/assets/sube_resimleri/antalya.png',
  'Ankara': '/assets/sube_resimleri/cayyolu.png',
  'Denizli': '/assets/sube_resimleri/kocaeli.jpg', // varsayılan/resim yoksa başka bir görsel
  'Kocaeli': '/assets/sube_resimleri/kocaeli.jpg',
  'Bursa': '/assets/sube_resimleri/nilufer.webp',
  'Almanya': '/assets/sube_resimleri/frankfurt.webp',
  'Hollanda': '/assets/sube_resimleri/deen-hag.png',
};
const defaultImage = '/assets/sube_resimleri/bagcilar.png';

const Branches = () => {
  // Şube verileri
  const branches = [
    {
      city: 'İstanbul',
      branches: [
        { name: 'Mecidiyeköy', slug: 'mecidiyekoy', address: 'Mecidiyeköy Mahallesi' },
        { name: 'Bağcılar', slug: 'bagcilar', address: 'Bağcılar Merkez' },
        { name: 'Bakırköy', slug: 'bakirkoy', address: 'Bakırköy Merkez' },
        { name: 'Fatih', slug: 'fatih', address: 'Fatih Merkez' },
        { name: 'Çamlıca', slug: 'camlica', address: 'Çamlıca Mahallesi' },
        { name: 'Pendik', slug: 'pendik', address: 'Pendik Merkez' },
        { name: 'Şerifali', slug: 'serifali', address: 'Şerifali Mahallesi' },
        { name: 'Cevizlibağ', slug: 'cevizlibag', address: 'Cevizlibağ Mahallesi' },
        { name: 'Göktürk', slug: 'gokturk', address: 'Göktürk Mahallesi' },
      ]
    },
    {
      city: 'Diğer Şehirler',
      branches: [
        { name: 'Kayseri', slug: 'kayseri', address: 'Kayseri Merkez' },
        { name: 'Bodrum', slug: 'bodrum', address: 'Bodrum Merkez' },
        { name: 'Alanya', slug: 'alanya', address: 'Alanya Merkez' },
        { name: 'Antalya', slug: 'antalya', address: 'Antalya Merkez' },
        { name: 'Ankara', slug: 'ankara', address: 'Ankara Merkez' },
        { name: 'Denizli', slug: 'denizli', address: 'Denizli Merkez' },
        { name: 'Kocaeli', slug: 'kocaeli', address: 'Kocaeli Merkez' },
        { name: 'Bursa', slug: 'bursa', address: 'Bursa Merkez' },
      ]
    },
    {
      city: 'Yurtdışı',
      branches: [
        { name: 'Almanya', slug: 'almanya', address: 'Frankfurt' },
        { name: 'Hollanda', slug: 'hollanda', address: 'Den Haag' },
      ]
    }
  ];

  // Sayfa yüklendiğinde scroll'u aktif hale getir
  useEffect(() => {
    setTimeout(() => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }, 100);
  }, []);

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-[#004876]">
            Şubelerimiz
          </h1>
          {/* Açıklama satırı kaldırıldı */}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 pb-32">
        <div className="max-w-6xl mx-auto">
          {branches.map((cityGroup, cityIndex) => (
            <div key={cityIndex} className="mb-12">
              <h2 className="text-3xl font-bold text-[#004876] mb-6 text-center">
                {cityGroup.city}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cityGroup.branches.map((branch, branchIndex) => (
                  <Link
                    key={branchIndex}
                    to={`/subelerimiz/${branch.slug}`}
                    className="block bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="text-center">
                      <img
                        src={branchImages[branch.name] || defaultImage}
                        alt={`${branch.name} şubesi görseli`}
                        className="w-full h-40 object-contain mb-3 rounded-lg bg-blue-50"
                        loading="lazy"
                        onError={e => { e.target.src = defaultImage; }}
                      />
                      <h3 className="text-xl font-bold text-[#004876] mb-2 group-hover:text-blue-600 transition-colors">
                        {branch.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {branch.address}
                      </p>
                      <div className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                        Detayları Gör →
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Branches; 