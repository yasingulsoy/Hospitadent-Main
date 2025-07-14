import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';
import { FaAward, FaSmile, FaUsers, FaBuilding, FaGlobe, FaUserMd, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import ico from "../assets/ico.png";

// Particle efekti için basit SVG animasyonu
const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-10 left-10 animate-bounce">
        <svg className="w-8 h-8 text-blue-200 opacity-60" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-blue-100/20"></div>
    </div>
  );
};

// Hero başlığı için spotlight efektli component (arka plan dahil)
const SpotlightTitle = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [spot, setSpot] = useState({ x: 50, y: 50, active: false });
  const [hovered, setHovered] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  // Mouse hareketiyle spotlight efekti
  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setSpot({ x, y, active: true });
  };
  const handleMouseLeave = () => { setSpot({ ...spot, active: false }); setHovered(false); };
  const handleMouseEnter = () => setHovered(true);

  // Efekt renkleri
  const lightGradient = `radial-gradient(circle at ${spot.x}% ${spot.y}%, rgba(255,255,255,0.7) 0%, #2bb3ea33 40%, transparent 80%)`;

  // Dalga animasyonu için harfleri span'lere böl
  const chars = typeof children === 'string' ? children.split('') : [];

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className="relative w-full flex items-center justify-center mb-3 md:mb-5"
      style={{ minHeight: '3.5em' }}
    >
      {/* Spotlight arka plan */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-200"
        style={{
          opacity: spot.active ? 1 : 0,
          background: spot.active ? lightGradient : 'none',
          zIndex: 1,
        }}
      />
      <h1
        className={`relative text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black drop-shadow-2xl transition-all duration-1000 transform text-transparent bg-clip-text bg-gradient-to-r from-[#0f4f78] via-[#2bb3ea] to-[#0f4f78] ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
        style={{ zIndex: 2, lineHeight: 1.3, overflow: 'visible' }}
      >
        {chars.length > 0
          ? chars.map((char, i) => (
              <span
                key={i}
                className="inline-block"
                style={{
                  transition: 'transform 0.35s cubic-bezier(.4,2,.6,1)',
                  transform:
                    hovered && char !== ' '
                      ? `translateY(${Math.sin(i * 0.5 + Date.now() / 250) * 8}px)`
                      : 'none',
                  display: 'inline-block',
                }}
              >
                {char}
              </span>
            ))
          : children}
      </h1>
    </div>
  );
};

// Animasyonlu alt başlık
const AnimatedSubtitle = ({ children, delay = 300 }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  return (
    <p
      className={`text-sm sm:text-base md:text-lg lg:text-xl mb-4 md:mb-6 leading-relaxed max-w-3xl mx-auto transition-all duration-1000 transform text-gray-700 ${
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
      className={`${buttonClasses} transition-all duration-500 font-bold py-2 px-4 md:py-3 md:px-7 rounded-full text-sm md:text-base shadow-xl hover:shadow-2xl transform hover:scale-105 w-full sm:w-auto text-center inline-block transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      {children}
    </a>
  );
};

// Animasyonlu iletişim FAB butonu
const ContactFabButton = ({ delay = 800 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  return (
    <div
      className={`relative flex items-center justify-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      style={{transitionDelay: `${delay}ms`}}
    >
      {/* Ana buton */}
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className={`group bg-white border-2 border-[#2bb3ea] text-[#2bb3ea] hover:text-[#0f4f78] font-bold shadow-xl hover:shadow-2xl transition-all duration-500 flex items-center justify-center text-base md:text-lg outline-none focus:ring-2 focus:ring-blue-300
          ${open ? 'rounded-full w-14 h-14 px-0' : 'rounded-full md:rounded-full px-7 py-3 md:px-7 md:py-3 w-auto h-auto'}
        `}
        style={{zIndex: 20, minWidth: open ? 56 : 120, minHeight: open ? 56 : 48, padding: open ? 0 : undefined, transition: 'all 0.4s cubic-bezier(.4,2,.6,1)'}}
      >
        <span className={`transition-all duration-300 absolute ${open ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`}>İletişim</span>
        {open && (
          <img src={ico} alt="İletişim" className="w-7 h-7 object-contain transition-all duration-300" style={{zIndex: 21}} />
        )}
      </button>
      {/* Animasyonlu küçük butonlar */}
      <a
        href="https://api.whatsapp.com/send?phone=905531029922"
        target="_blank"
        rel="noopener noreferrer"
        className={`absolute top-1/2 left-full bg-blue text-white rounded-full w-11 h-11 flex items-center justify-center shadow-lg transition-all duration-500
          ${open ? 'opacity-100 scale-100 pointer-events-auto translate-x-4' : 'opacity-0 scale-50 pointer-events-none translate-x-0'}`}
        style={{transitionDelay: open ? '80ms' : '0ms', zIndex: 19, transform: `translateY(-50%) ${open ? 'translateX(24px)' : 'translateX(0)'}`}}
        title="WhatsApp ile iletişim"
      >
        <FaWhatsapp className="w-5 h-5" />
      </a>
      <a
        href="mailto:info@hospitadent.com"
        className={`absolute top-1/2 left-full bg-blue text-white rounded-full w-11 h-11 flex items-center justify-center shadow-lg transition-all duration-500
          ${open ? 'opacity-100 scale-100 pointer-events-auto translate-x-20' : 'opacity-0 scale-50 pointer-events-none translate-x-0'}`}
        style={{transitionDelay: open ? '160ms' : '0ms', zIndex: 18, transform: `translateY(-50%) ${open ? 'translateX(72px)' : 'translateX(0)'}`}}
        title="Mail ile iletişim"
      >
        <FaEnvelope className="w-5 h-5" />
      </a>
      <a
        href="tel:4449922"
        className={`absolute top-1/2 left-full bg-blue text-white rounded-full w-11 h-11 flex items-center justify-center shadow-lg transition-all duration-500
          ${open ? 'opacity-100 scale-100 pointer-events-auto translate-x-36' : 'opacity-0 scale-50 pointer-events-none translate-x-0'}`}
        style={{transitionDelay: open ? '240ms' : '0ms', zIndex: 17, transform: `translateY(-50%) ${open ? 'translateX(120px)' : 'translateX(0)'}`}}
        title="Telefon ile iletişim"
      >
        <FaPhone className="w-5 h-5" />
      </a>
    </div>
  );
};

// Küçük, ikonlu, animasyonlu "Biz" kartı
const BizMiniCard = ({ number, label, icon, sublabel, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayNumber, setDisplayNumber] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  // Animasyonlu sayı (count-up)
  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    let end = 0;
    let suffix = '';
    // Rakam ve + işareti ayrıştırma
    if (typeof number === 'string' && number.startsWith('+')) {
      suffix = '+';
      end = parseInt(number.replace(/\D/g, ''));
    } else if (typeof number === 'string' && number.includes('.')) {
      end = parseInt(number.replace(/\D/g, ''));
      suffix = number.replace(/[0-9.]/g, '');
    } else {
      end = parseInt(number);
    }
    let current = start;
    const duration = 1200; // ms
    const steps = 40;
    const increment = Math.ceil(end / steps);
    let step = 0;
    const interval = setInterval(() => {
      step++;
      current += increment;
      if (current >= end || step >= steps) {
        setDisplayNumber(end);
        clearInterval(interval);
      } else {
        setDisplayNumber(current);
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [isVisible, number]);

  // Formatlı gösterim
  const formatted = () => {
    if (typeof number === 'string' && number.includes('.')) {
      // 3.000.000 gibi ise
      return `${displayNumber.toLocaleString('tr-TR')}${number.replace(/[0-9.]/g, '')}`;
    }
    return `${number.startsWith('+') ? '+' : ''}${displayNumber}${number.replace(/[0-9+]/g, '')}`;
  };

  return (
    <div className={`relative flex flex-col items-center justify-center rounded-xl shadow-md p-3 md:p-4 min-w-[110px] min-h-[90px] transition-all duration-700 border bg-white border-blue-100/60 text-[#0f4f78] group hover:shadow-2xl hover:z-20 hover:-rotate-2 hover:scale-105 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}
      style={{ transitionDelay: `${delay}ms` }}>
      {/* Parıltı efekti */}
      <div className="absolute inset-0 -z-10 rounded-xl opacity-0 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500 bg-gradient-to-br from-blue-200 via-blue-100 to-blue-300 blur-xl"></div>
      <div className="mb-1 text-2xl md:text-3xl text-blue-400">{icon}</div>
      <div className="font-bold text-base md:text-lg mb-0.5 text-[#0f4f78]">{isVisible ? formatted() : ''}</div>
      <div className="text-xs md:text-sm font-semibold leading-tight text-blue-500">{label}</div>
      {sublabel && <div className="text-xs mt-0.5 text-blue-400">{sublabel}</div>}
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
  return (
    <section className="relative w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#eaf6fb] via-white to-[#f0f9ff] px-2 md:px-6 lg:px-12 pt-10 md:pt-20 lg:pt-32 pb-8 md:pb-16 lg:pb-24 min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] overflow-hidden">
      {/* Particle background */}
      <ParticleBackground />
      {/* Ana içerik - ortalanmış */}
      <div className="flex flex-col items-center justify-center max-w-6xl mx-auto z-10 relative text-center w-full">
        <SpotlightTitle delay={200}>
          {t('home.title')}
        </SpotlightTitle>
        <AnimatedSubtitle delay={400}>
          {t('home.subtitle')}<br className="hidden sm:block"/>{t('home.desc')}
        </AnimatedSubtitle>
        {/* Butonlar */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-6 md:mb-8">
          <AnimatedButton delay={600} variant="primary">
            {t('home.button')}
          </AnimatedButton>
          <ContactFabButton delay={800} />
        </div>
        {/* Biz kısmı - görseldeki gibi grid ve küçük kartlar, animasyonlu */}
        <div className="w-full max-w-5xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 md:gap-4 mt-1 md:mt-4 mb-6 md:mb-10">
          {bizData.map((item, i) => (
            <BizMiniCard key={i} {...item} delay={i * 120} />
          ))}
      </div>
    </div>
  </section>
  );
};

export default Hero;