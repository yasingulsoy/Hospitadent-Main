import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';
import { FaAward, FaSmile, FaUsers, FaBuilding, FaGlobe, FaUserMd } from 'react-icons/fa';

// Particle efekti için basit SVG animasyonu
const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animasyonlu diş şeklinde parçacıklar */}
      <div className="absolute top-10 left-10 animate-bounce">
        <svg className="w-8 h-8 text-blue-200 opacity-60" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </div>
      <div className="absolute top-20 right-20 animate-pulse">
        <svg className="w-6 h-6 text-blue-300 opacity-50" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </div>
      <div className="absolute bottom-20 left-1/4 animate-bounce delay-1000">
        <svg className="w-4 h-4 text-blue-400 opacity-40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </div>
      <div className="absolute bottom-10 right-1/3 animate-pulse delay-500">
        <svg className="w-5 h-5 text-blue-500 opacity-30" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </div>
      {/* Daha fazla parçacık */}
      <div className="absolute top-1/3 left-1/4 animate-ping delay-300">
        <div className="w-3 h-3 bg-blue-300 rounded-full opacity-60"></div>
      </div>
      <div className="absolute top-2/3 right-1/4 animate-ping delay-700">
        <div className="w-2 h-2 bg-blue-400 rounded-full opacity-50"></div>
      </div>
      <div className="absolute top-1/2 left-1/2 animate-pulse delay-1000">
        <div className="w-4 h-4 bg-blue-200 rounded-full opacity-40"></div>
      </div>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-blue-100/20"></div>
    </div>
  );
};

// Animasyonlu başlık komponenti (parlama efekti için ref ekliyorum)
const AnimatedTitle = React.forwardRef(({ children, delay = 0 }, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  return (
    <h1
      ref={ref}
      className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0f4f78] via-[#2bb3ea] to-[#0f4f78] mb-4 md:mb-6 leading-tight drop-shadow-2xl transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      style={{ position: 'relative', zIndex: 2 }}
    >
      {children}
    </h1>
  );
});

// Animasyonlu alt başlık
const AnimatedSubtitle = ({ children, delay = 300 }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  return (
    <p
      className={`text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 md:mb-8 leading-relaxed max-w-4xl mx-auto transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      {children}
    </p>
  );
};

// Animasyonlu buton
const AnimatedButton = ({ children, delay = 600, variant = "primary" }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  const buttonClasses = variant === "primary"
    ? "bg-gradient-to-r from-[#2bb3ea] to-[#0f4f78] hover:from-[#0f4f78] hover:to-[#2bb3ea] text-white"
    : "bg-white hover:bg-gray-50 border-2 border-[#2bb3ea] text-[#2bb3ea] hover:text-[#0f4f78]";
  return (
    <a
      href={variant === "primary" ? "#randevu" : "#contact"}
      className={`${buttonClasses} transition-all duration-500 font-bold py-3 px-6 md:px-8 rounded-full text-base md:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 w-full sm:w-auto text-center inline-block transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      {children}
    </a>
  );
};

// Küçük, ikonlu, görseldeki gibi "Biz" kartı
const BizMiniCard = ({ number, label, icon, sublabel, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  return (
    <div className={`flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-4 md:p-6 min-w-[140px] min-h-[120px] transition-all duration-500 border border-blue-100/60 hover:shadow-lg hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <div className="mb-2 text-blue-400 text-3xl md:text-4xl">{icon}</div>
      <div className="font-bold text-xl md:text-2xl text-[#0f4f78] mb-1">{number}</div>
      <div className="text-sm md:text-base text-blue-500 font-semibold leading-tight">{label}</div>
      {sublabel && <div className="text-xs md:text-sm text-blue-400 mt-1">{sublabel}</div>}
    </div>
  );
};

const bizData = [
  { number: '+18', label: 'Yıllık Tecrübe', icon: <FaAward /> },
  { number: '+3.000.000', label: 'Mutlu Hasta', icon: <FaSmile /> },
  { number: '+750', label: 'Mutlu Çalışanlar', icon: <FaUsers /> },
  { number: '+21', label: 'Şube', icon: <FaBuilding /> },
  { number: '+4', label: 'Ülke', icon: <FaGlobe /> },
  { number: '+250', label: 'Dentists', icon: <FaUserMd /> },
];

const Hero = () => {
  const { t } = useTranslation();
  const titleRef = useRef();

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#eaf6fb] via-white to-[#f0f9ff] px-4 md:px-8 lg:px-12 py-8 md:py-12 lg:py-0 overflow-hidden">
      {/* Particle background */}
      <ParticleBackground />
      {/* Ana içerik - ortalanmış */}
      <div className="flex flex-col items-center justify-center max-w-6xl mx-auto z-10 relative text-center">
        <AnimatedTitle ref={titleRef} delay={200}>
          {t('home.title')}
        </AnimatedTitle>
        <AnimatedSubtitle delay={400}>
          {t('home.subtitle')}<br className="hidden sm:block"/>{t('home.desc')}
        </AnimatedSubtitle>
        {/* Butonlar */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8 md:mb-10">
          <AnimatedButton delay={600} variant="primary">
            {t('home.button')}
          </AnimatedButton>
          <AnimatedButton delay={800} variant="secondary">
            İletişim
          </AnimatedButton>
        </div>
        {/* Biz kısmı - görseldeki gibi grid ve küçük kartlar */}
        <div className="w-full max-w-5xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 md:gap-6 mt-2 md:mt-6 mb-8 md:mb-12">
          {bizData.map((item, i) => (
            <BizMiniCard key={i} {...item} delay={1000 + i * 120} />
          ))}
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#2bb3ea] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#2bb3ea] rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;