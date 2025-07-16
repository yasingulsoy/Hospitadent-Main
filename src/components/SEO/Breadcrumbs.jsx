import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbMap = {
    'hakkimizda': 'Hakkımızda',
    'idari-kadro': 'İdari Kadro',
    'subelerimiz': 'Şubelerimiz',
    'hasta-memnuniyet-videolari': 'Hasta Memnuniyet Videoları',
    'hasta-yorumlari': 'Hasta Yorumları',
    'hospitadent-sosyal-sorumluluk': 'Sosyal Sorumluluk',
    'anlasmali-kurumlar': 'Anlaşmalı Kurumlar',
    'akademi': 'Akademi',
    'odullerimiz': 'Ödüllerimiz',
    'kurumsal-kimlik': 'Kurumsal Kimlik',
    'search': 'Arama Sonuçları',
    // Şubeler
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

  const generateBreadcrumbData = () => {
    const breadcrumbs = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Ana Sayfa",
        "item": "https://hospitadent.com"
      }
    ];

    let currentPath = '';
    pathnames.forEach((name, index) => {
      currentPath += `/${name}`;
      const displayName = breadcrumbMap[name] || name;
      
      breadcrumbs.push({
        "@type": "ListItem",
        "position": index + 2,
        "name": displayName,
        "item": `https://hospitadent.com${currentPath}`
      });
    });

    return breadcrumbs;
  };

  if (pathnames.length === 0) return null;

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": generateBreadcrumbData()
          })}
        </script>
      </Helmet>
      
      <nav className="bg-gray-50 border-b border-gray-200 py-3">
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link 
                to="/" 
                className="text-[#004876] hover:text-[#2bb3ea] transition-colors"
              >
                Ana Sayfa
              </Link>
            </li>
            
            {pathnames.map((name, index) => {
              const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
              const isLast = index === pathnames.length - 1;
              const displayName = breadcrumbMap[name] || name;

              return (
                <li key={name} className="flex items-center">
                  <span className="text-gray-400 mx-2">/</span>
                  {isLast ? (
                    <span className="text-gray-600 font-medium">{displayName}</span>
                  ) : (
                    <Link 
                      to={routeTo}
                      className="text-[#004876] hover:text-[#2bb3ea] transition-colors"
                    >
                      {displayName}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
};

export default Breadcrumbs; 