import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Heading from '../Heading'
import ServiceItems from './ServiceItems'
import { servicesData } from '../../data/data'

const Services = () => {
  const { t } = useTranslation();
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section name='services' className="py-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="px-2">
        {/* Başlık */}
        <div className="text-center mb-12 px-4">
          <h2 className="text-4xl font-bold text-center text-[#0f4f78]">
            {t('services.title')}
          </h2>
        </div>

        {/* Yatay Kaydırılabilir Hizmetler - Instagram Feed ile Aynı Tasarım */}
        <div className="relative w-full">
          {/* Sol Kaydırma Butonu */}
          <button
            onClick={scrollLeft}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>

          {/* Sağ Kaydırma Butonu */}
          <button
            onClick={scrollRight}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>

          {/* Kaydırılabilir Container - Instagram Feed ile Aynı Stil */}
          <div
            ref={scrollContainerRef}
            className="flex gap-3 overflow-x-auto scrollbar-hide px-2 py-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {servicesData.map((item, index) => (
              <ServiceCard key={index} item={item} />
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Hizmet Kartı - Instagram Post ile Aynı Boyut ve Tasarım
const ServiceCard = ({ item }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="group relative flex-shrink-0 w-80 h-80 md:w-96 md:h-96 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* İkon Arka Planı */}
      <div className="w-full h-full bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center p-8">
        <img 
          src={item.img} 
          className="w-24 h-24 object-contain transition-transform duration-300 group-hover:scale-110" 
          alt={item.title}
          style={{filter: 'invert(19%) sepia(97%) saturate(1812%) hue-rotate(170deg) brightness(97%) contrast(101%)'}}
        />
      </div>
      
      {/* Hover Overlay */}
      <div className={`absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center`}>
        <div className={`transform transition-all duration-300 ${isHovered ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
          <div className="text-center text-white">
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-sm px-4">{item.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services