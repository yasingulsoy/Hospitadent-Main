import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../components';
import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

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

const BranchCard = ({ branch, image }) => {
  const [flipped, setFlipped] = useState(false);
  const timerRef = useRef(null);

  const handleMouseEnter = () => {
    timerRef.current = setTimeout(() => setFlipped(true), 1000);
  };
  const handleMouseLeave = () => {
    clearTimeout(timerRef.current);
    setFlipped(false);
  };

  return (
    <div
      className="perspective"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`relative w-full h-56 transition-transform duration-700 [transform-style:preserve-3d] ${flipped ? 'rotate-y-180' : ''}`}
      >
        {/* Ön Yüz */}
        <Link
          to={`/subelerimiz/${branch.slug}`}
          className="block bg-gradient-to-br from-[#0f4f78] to-[#2bb3ea] rounded-3xl shadow-xl p-6 transition-all duration-300 group hover:scale-105 hover:shadow-2xl"
          style={{ backfaceVisibility: 'hidden', position: 'absolute', inset: 0 }}
        >
          <div className="relative w-full flex items-center justify-center h-full" style={{ minHeight: '160px' }}>
            <img
              src={image}
              alt={`${branch.name} şubesi görseli`}
              className="w-full max-h-48 object-contain transition-all duration-300 opacity-10 group-hover:opacity-100"
              loading="lazy"
              onError={e => { e.target.src = defaultImage; }}
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-2xl md:text-3xl font-extrabold text-white drop-shadow-lg text-center leading-tight transition-all duration-300 group-hover:opacity-0 group-hover:scale-95 select-none">
                {branch.name}
              </span>
            </div>
          </div>
        </Link>
        {/* Arka Yüz */}
        <div
          className="absolute inset-0 bg-white rounded-3xl shadow-xl flex flex-col items-center justify-center gap-6 [transform:rotateY(180deg)]"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="flex flex-row items-center justify-center gap-8">
            <div className="flex flex-col items-center">
              <FaMapMarkerAlt className="text-4xl text-[#0f4f78] mb-2" />
              <span className="text-sm font-semibold text-[#0f4f78]">Konum</span>
            </div>
            <div className="flex flex-col items-center">
              <FaPhone className="text-4xl text-[#0f4f78] mb-2" />
              <span className="text-sm font-semibold text-[#0f4f78]">Telefon</span>
            </div>
          </div>
          <span className="text-xs text-gray-400">(URL ve numaralar eklenecek)</span>
        </div>
      </div>
    </div>
  );
};

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
                  <BranchCard
                    key={branchIndex}
                    branch={branch}
                    image={branchImages[branch.name] || defaultImage}
                  />
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

/* Ekstra CSS (global veya module):
.perspective { perspective: 1200px; }
.rotate-y-180 { transform: rotateY(180deg); }
*/ 