import React, { useState, useEffect, Suspense, useRef } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { useTranslation } from 'react-i18next';

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
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-blue-100/20"></div>
    </div>
  );
};

// Animasyonlu başlık komponenti
const AnimatedTitle = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <h1 
      ref={titleRef}
      className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#0f4f78] mb-4 md:mb-6 leading-tight drop-shadow-lg transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      {children}
    </h1>
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
      className={`text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 md:mb-8 leading-relaxed transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      {children}
    </p>
  );
};

// Animasyonlu buton
const AnimatedButton = ({ children, delay = 600 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <a
      href="#randevu"
      className={`bg-gradient-to-r from-[#2bb3ea] to-[#0f4f78] hover:from-[#0f4f78] hover:to-[#2bb3ea] transition-all duration-500 text-white font-bold py-4 px-8 md:px-12 rounded-full text-lg md:text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 w-full sm:w-auto text-center inline-block transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      {children}
    </a>
  );
};

const ToothModel = () => {
  const materials = useLoader(MTLLoader, process.env.PUBLIC_URL + "/assets/3D_Model.mtl");
  const obj = useLoader(OBJLoader, process.env.PUBLIC_URL + "/assets/3D_Model.obj", loader => {
    materials.preload();
    loader.setMaterials(materials);
  });
  
  obj.traverse(child => {
    if (child.isMesh && !child.material) {
      child.material = new window.THREE.MeshStandardMaterial({ color: '#fff' });
    }
  });
  
  return <primitive object={obj} scale={8} position={[0, 0.5, 0]} />;
};

// Mobil için basit 3D diş animasyonu
const MobileToothAnimation = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Ana diş animasyonu */}
      <div className="relative">
        <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-white to-blue-50 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
          <svg className="w-16 h-16 md:w-20 md:h-20 text-blue-500 animate-bounce" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
        
        {/* Etrafındaki küçük parçacıklar */}
        <div className="absolute -top-2 -left-2 w-6 h-6 bg-blue-200 rounded-full animate-ping opacity-75"></div>
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-300 rounded-full animate-ping opacity-75 delay-300"></div>
        <div className="absolute -bottom-2 -left-2 w-5 h-5 bg-blue-400 rounded-full animate-ping opacity-75 delay-500"></div>
        <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-blue-500 rounded-full animate-ping opacity-75 delay-700"></div>
      </div>
      
      {/* Arka plan efektleri */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-transparent rounded-full animate-pulse"></div>
    </div>
  );
};

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-between bg-gradient-to-br from-[#eaf6fb] via-white to-[#f0f9ff] px-4 md:px-8 lg:px-12 py-8 md:py-12 lg:py-0 overflow-hidden">
      {/* Particle background */}
      <ParticleBackground />
      
      {/* Sol: Başlık ve Buton */}
      <div className="flex-1 flex flex-col items-start justify-center max-w-2xl z-10 order-2 lg:order-1 relative">
        <AnimatedTitle delay={200}>
          {t('home.title')}
        </AnimatedTitle>
        
        <AnimatedSubtitle delay={400}>
          {t('home.subtitle')}<br className="hidden sm:block"/>{t('home.desc')}
        </AnimatedSubtitle>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <AnimatedButton delay={600}>
            {t('home.button')}
          </AnimatedButton>
          
          <a
            href="#contact"
            className="bg-white hover:bg-gray-50 border-2 border-[#2bb3ea] text-[#2bb3ea] hover:text-[#0f4f78] transition-all duration-300 font-bold py-4 px-8 md:px-12 rounded-full text-lg md:text-xl shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto text-center inline-block"
          >
            İletişim
          </a>
        </div>
        
        {/* İstatistikler */}
        <div className="grid grid-cols-3 gap-6 mt-8 md:mt-12 w-full">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-[#0f4f78]">22</div>
            <div className="text-sm md:text-base text-gray-600">Şube</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-[#0f4f78]">250+</div>
            <div className="text-sm md:text-base text-gray-600">Uzman</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-[#0f4f78]">3M+</div>
            <div className="text-sm md:text-base text-gray-600">Hasta</div>
          </div>
        </div>
      </div>
      
      {/* Sağ: 3D Diş Modeli - Hem mobil hem web'de */}
      <div className="flex-1 flex items-center justify-center w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] z-10 order-1 lg:order-2 mb-8 lg:mb-0">
        {!isMobile ? (
          <Canvas 
            shadows 
            camera={{ position: [2, 1.5, 3], fov: 45 }} 
            style={{ width: '100%', height: '100%' }}
            gl={{ antialias: true, alpha: true }}
            dpr={[1, 2]}
          >
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 10, 5]} intensity={1.2} castShadow />
            <directionalLight position={[-5, 5, -5]} intensity={0.8} />
            <pointLight position={[2, 3, 2]} intensity={0.8} color="#2bb3ea" />
            <pointLight position={[-2, 2, -2]} intensity={0.6} color="#ffffff" />
            <Suspense fallback={null}>
              <ToothModel />
            </Suspense>
            <OrbitControls 
              enableZoom={true} 
              autoRotate 
              autoRotateSpeed={1}
              enablePan={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 3}
            />
          </Canvas>
        ) : (
          <MobileToothAnimation />
        )}
      </div>
    </section>
  );
};

export default Hero;