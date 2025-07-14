import React, { useState, useEffect, useRef, createContext, useContext } from "react";
import { useTranslation } from 'react-i18next';
import { FaAward, FaSmile, FaUsers, FaBuilding, FaGlobe, FaUserMd, FaSun, FaMoon } from 'react-icons/fa';

// Dark mode context
const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Particle efekti için basit SVG animasyonu
const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-10 left-10 animate-bounce">
        <svg className="w-8 h-8 text-blue-200 opacity-60" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-blue-100/20 dark:from-[#23272f]/40 dark:to-[#23272f]/10"></div>
    </div>
  );
};

// Hero başlığı için spotlight efektli component (arka plan dahil)
const SpotlightTitle = ({ children, delay = 0 }) => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [spot, setSpot] = useState({ x: 50, y: 50, active: false });
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
  const handleMouseLeave = () => setSpot({ ...spot, active: false });

  // Efekt renkleri
  const lightGradient = `radial-gradient(circle at ${spot.x}% ${spot.y}%, rgba(255,255,255,0.7) 0%, #2bb3ea33 40%, transparent 80%)`;
  const darkGradient = `radial-gradient(circle at ${spot.x}% ${spot.y}%, rgba(255,255,120,0.5) 0%, #ffe06633 40%, transparent 80%)`;

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full flex items-center justify-center mb-3 md:mb-5`}
      style={{ minHeight: '3.5em' }}
    >
      {/* Spotlight arka plan */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-200"
        style={{
          opacity: spot.active ? 1 : 0,
          background: spot.active ? (theme === 'dark' ? darkGradient : lightGradient) : 'none',
          zIndex: 1,
        }}
      />
      <h1
        className={`relative text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0f4f78] via-[#2bb3ea] to-[#0f4f78] dark:from-yellow-200 dark:via-yellow-400 dark:to-yellow-200 leading-tight drop-shadow-2xl transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
        style={{ zIndex: 2 }}
      >
        {children}
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
      className={`text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 dark:text-white mb-4 md:mb-6 leading-relaxed max-w-3xl mx-auto transition-all duration-1000 transform ${
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
    ? "bg-gradient-to-r from-[#2bb3ea] to-[#0f4f78] hover:from-[#0f4f78] hover:to-[#2bb3ea] text-white dark:text-yellow-200"
    : "bg-white dark:bg-[#23272f] hover:bg-gray-50 border-2 border-[#2bb3ea] text-[#2bb3ea] hover:text-[#0f4f78] dark:text-yellow-300 dark:border-yellow-300";
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

// Küçük, ikonlu, animasyonlu "Biz" kartı
const BizMiniCard = ({ number, label, icon, sublabel, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  return (
    <div className={`flex flex-col items-center justify-center bg-white dark:bg-[#23272f] rounded-xl shadow-md p-3 md:p-4 min-w-[110px] min-h-[90px] transition-all duration-700 border border-blue-100/60 dark:border-gray-700 hover:shadow-lg hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms` }}>
      <div className="mb-1 text-blue-400 dark:text-yellow-300 text-2xl md:text-3xl">{icon}</div>
      <div className="font-bold text-base md:text-lg text-[#0f4f78] dark:text-yellow-100 mb-0.5">{number}</div>
      <div className="text-xs md:text-sm text-blue-500 dark:text-yellow-200 font-semibold leading-tight">{label}</div>
      {sublabel && <div className="text-xs text-blue-400 dark:text-yellow-400 mt-0.5">{sublabel}</div>}
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

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 bg-white dark:bg-[#23272f] border border-blue-100 dark:border-gray-700 rounded-full p-2 shadow-md hover:scale-110 transition-all"
      title={theme === 'dark' ? 'Açık moda geç' : 'Koyu moda geç'}
    >
      {theme === 'dark' ? <FaSun className="text-yellow-300 text-xl" /> : <FaMoon className="text-blue-500 text-xl" />}
    </button>
  );
};

const Hero = () => {
  const { t } = useTranslation();
  return (
    <ThemeProvider>
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#eaf6fb] via-white to-[#f0f9ff] dark:from-[#181c23] dark:via-[#23272f] dark:to-[#23272f] px-2 md:px-6 lg:px-12 py-6 md:py-10 lg:py-0 overflow-hidden">
        <ThemeToggle />
        {/* Particle background */}
        <ParticleBackground />
        {/* Ana içerik - ortalanmış */}
        <div className="flex flex-col items-center justify-center max-w-6xl mx-auto z-10 relative text-center">
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
            <AnimatedButton delay={800} variant="secondary">
              İletişim
            </AnimatedButton>
          </div>
          {/* Biz kısmı - görseldeki gibi grid ve küçük kartlar, animasyonlu */}
          <div className="w-full max-w-5xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 md:gap-4 mt-1 md:mt-4 mb-6 md:mb-10">
            {bizData.map((item, i) => (
              <BizMiniCard key={i} {...item} delay={i * 120} />
            ))}
          </div>
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-[#2bb3ea] dark:border-yellow-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-[#2bb3ea] dark:bg-yellow-300 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
};

export default Hero;