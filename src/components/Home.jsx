import React, { useState, useEffect, Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { useTranslation } from 'react-i18next';

const ToothModel = () => {
  const materials = useLoader(MTLLoader, process.env.PUBLIC_URL + "/assets/3D_Model.mtl");
  const obj = useLoader(OBJLoader, process.env.PUBLIC_URL + "/assets/3D_Model.obj", loader => {
    materials.preload();
    loader.setMaterials(materials);
  });
  // Eğer materyal gelmezse fallback olarak beyaz materyal uygula
  obj.traverse(child => {
    if (child.isMesh && !child.material) {
      child.material = new window.THREE.MeshStandardMaterial({ color: '#fff' });
    }
  });
  return <primitive object={obj} scale={8} position={[0, 0.5, 0]} />;
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
    <section className="w-full min-h-[70vh] flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-[#eaf6fb] to-white px-4 md:px-12 py-12 md:py-0 overflow-hidden">
      {/* Sol: Başlık ve Buton */}
      <div className="flex-1 flex flex-col items-start justify-center max-w-xl z-10 order-2 md:order-1">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#0f4f78] mb-4 md:mb-6 leading-tight drop-shadow-sm">{t('home.title')}</h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 md:mb-8 leading-relaxed">{t('home.subtitle')}<br className="hidden sm:block"/>{t('home.desc')}</p>
        <a
          href="#randevu"
          className="bg-[#2bb3ea] hover:bg-[#0f4f78] transition-colors duration-300 text-white font-bold py-3 px-6 md:px-8 rounded-lg text-base md:text-lg shadow-lg w-full sm:w-auto text-center"
        >
          {t('home.button')}
        </a>
      </div>
      {/* Sağ: 3D Diş Modeli - Mobilde daha küçük */}
      <div className="flex-1 flex items-center justify-center w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] z-0 order-1 md:order-2 mb-6 md:mb-0">
        {!isMobile ? (
          <Canvas 
            shadows 
            camera={{ position: [2, 1.5, 3], fov: 45 }} 
            style={{ width: '100%', height: '100%' }}
            gl={{ antialias: true, alpha: true }}
            dpr={[1, 2]}
          >
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 10, 5]} intensity={1.2} castShadow />
            <directionalLight position={[-5, 5, -5]} intensity={0.8} />
            <pointLight position={[2, 3, 2]} intensity={0.6} color="#2bb3ea" />
            <pointLight position={[-2, 2, -2]} intensity={0.4} color="#ffffff" />
            <Suspense fallback={null}>
              <ToothModel />
            </Suspense>
            <OrbitControls 
              enableZoom={true} 
              autoRotate 
              autoRotateSpeed={0.8}
              enablePan={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 3}
            />
          </Canvas>
        ) : (
          // Mobilde basit bir placeholder
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-12 h-12 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-blue-600 font-semibold">3D Diş Modeli</p>
              <p className="text-blue-500 text-sm">Masaüstünde görüntüleyin</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;