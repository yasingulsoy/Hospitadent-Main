import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const ToothModel = () => {
  return (
    <group>
      {/* --- Gerçekçi Molar Diş Modeli --- */}
      <group position={[0, 0, 0]}>
        {/* Dişin ana gövdesi */}
        <mesh castShadow receiveShadow position={[0, 0.5, 0]}>
          <cylinderGeometry args={[0.6, 0.7, 1.1, 32]} />
          <meshStandardMaterial color="#f8f9fa" roughness={0.12} metalness={0.18} />
        </mesh>
        {/* Dişin üst kısmı (çukurlu, molar gibi) */}
        <mesh castShadow receiveShadow position={[0, 1.05, 0]}>
          <sphereGeometry args={[0.6, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#fff" roughness={0.07} metalness={0.3} />
        </mesh>
        {/* Çukurlar (fissures) */}
        <mesh position={[0.18, 1.18, 0.1]}>
          <sphereGeometry args={[0.09, 16, 16]} />
          <meshStandardMaterial color="#e0e0e0" roughness={0.5} />
        </mesh>
        <mesh position={[-0.18, 1.18, -0.1]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#e0e0e0" roughness={0.5} />
        </mesh>
        <mesh position={[0, 1.15, 0.18]}>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshStandardMaterial color="#e0e0e0" roughness={0.5} />
        </mesh>
        {/* Kökler (ayrık) */}
        <mesh castShadow receiveShadow position={[-0.18, -0.4, 0]}>
          <cylinderGeometry args={[0.13, 0.08, 0.7, 12]} />
          <meshStandardMaterial color="#e9ecef" roughness={0.3} metalness={0.1} />
        </mesh>
        <mesh castShadow receiveShadow position={[0.18, -0.4, 0]}>
          <cylinderGeometry args={[0.13, 0.08, 0.7, 12]} />
          <meshStandardMaterial color="#e9ecef" roughness={0.3} metalness={0.1} />
        </mesh>
        {/* Diş etiyle birleşim (yumuşak geçiş) */}
        <mesh castShadow receiveShadow position={[0, -0.05, 0]}>
          <torusGeometry args={[0.55, 0.13, 16, 32]} />
          <meshStandardMaterial color="#ff8fa3" roughness={0.8} />
        </mesh>
      </group>

      {/* --- Daha Orantılı ve Detaylı Hekim Figürü --- */}
      <group position={[1.7, 0.1, 0]}>
        {/* Baş */}
        <mesh castShadow receiveShadow position={[0, 1.25, 0]}>
          <sphereGeometry args={[0.22, 24, 24]} />
          <meshStandardMaterial color="#ffdbac" roughness={0.7} />
        </mesh>
        {/* Saç */}
        <mesh castShadow receiveShadow position={[0, 1.36, -0.08]}>
          <sphereGeometry args={[0.23, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#444" roughness={0.7} />
        </mesh>
        {/* Gözler */}
        <mesh position={[-0.07, 1.28, 0.19]}>
          <sphereGeometry args={[0.018, 8, 8]} />
          <meshStandardMaterial color="#222" />
        </mesh>
        <mesh position={[0.07, 1.28, 0.19]}>
          <sphereGeometry args={[0.018, 8, 8]} />
          <meshStandardMaterial color="#222" />
        </mesh>
        {/* Ağız */}
        <mesh position={[0, 1.22, 0.21]}>
          <torusGeometry args={[0.03, 0.007, 8, 16, Math.PI]} />
          <meshStandardMaterial color="#b97a56" />
        </mesh>
        {/* Gövde (önlük) */}
        <mesh castShadow receiveShadow position={[0, 0.65, 0]}>
          <cylinderGeometry args={[0.15, 0.18, 0.9, 16]} />
          <meshStandardMaterial color="#fff" roughness={0.3} />
        </mesh>
        {/* Kollar */}
        <mesh castShadow receiveShadow position={[-0.19, 0.85, 0]} rotation={[0, 0, Math.PI / 8]}>
          <cylinderGeometry args={[0.035, 0.035, 0.45, 8]} />
          <meshStandardMaterial color="#fff" roughness={0.3} />
        </mesh>
        <mesh castShadow receiveShadow position={[0.19, 0.85, 0]} rotation={[0, 0, -Math.PI / 8]}>
          <cylinderGeometry args={[0.035, 0.035, 0.45, 8]} />
          <meshStandardMaterial color="#fff" roughness={0.3} />
        </mesh>
        {/* Eller */}
        <mesh castShadow receiveShadow position={[-0.19, 0.62, 0]}>
          <sphereGeometry args={[0.045, 12, 12]} />
          <meshStandardMaterial color="#ffdbac" />
        </mesh>
        <mesh castShadow receiveShadow position={[0.19, 0.62, 0]}>
          <sphereGeometry args={[0.045, 12, 12]} />
          <meshStandardMaterial color="#ffdbac" />
        </mesh>
        {/* Bacaklar */}
        <mesh castShadow receiveShadow position={[-0.07, 0.1, 0]}>
          <cylinderGeometry args={[0.045, 0.045, 0.5, 8]} />
          <meshStandardMaterial color="#222" roughness={0.8} />
        </mesh>
        <mesh castShadow receiveShadow position={[0.07, 0.1, 0]}>
          <cylinderGeometry args={[0.045, 0.045, 0.5, 8]} />
          <meshStandardMaterial color="#222" roughness={0.8} />
        </mesh>
        {/* Ayakkabılar */}
        <mesh castShadow receiveShadow position={[-0.07, -0.15, 0.04]}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial color="#444" />
        </mesh>
        <mesh castShadow receiveShadow position={[0.07, -0.15, 0.04]}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial color="#444" />
        </mesh>
      </group>
    </group>
  );
};

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

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
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#0f4f78] mb-4 md:mb-6 leading-tight drop-shadow-sm">
          Dijital Diş Hekimliğinde <span className="text-[#2bb3ea]">Yeni Dönem</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 md:mb-8 leading-relaxed">
          3D teknolojilerle, sağlıklı ve estetik gülüşler için <b>hemen randevu alın</b>.<br className="hidden sm:block"/>
          Modern klinik, uzman kadro, dijital çözümler.
        </p>
        <a
          href="#randevu"
          className="bg-[#2bb3ea] hover:bg-[#0f4f78] transition-colors duration-300 text-white font-bold py-3 px-6 md:px-8 rounded-lg text-base md:text-lg shadow-lg w-full sm:w-auto text-center"
        >
          Randevu Al
        </a>
      </div>
      
      {/* Sağ: 3D Diş Modeli - Mobilde daha küçük */}
      <div className="flex-1 flex items-center justify-center w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] z-0 order-1 md:order-2 mb-6 md:mb-0">
        {!isMobile ? (
          <Canvas 
            shadows 
            camera={{ position: [4, 2, 6], fov: 45 }} 
            style={{ width: '100%', height: '100%' }}
            gl={{ antialias: true, alpha: true }}
            dpr={[1, 2]} // Mobilde daha düşük çözünürlük
          >
            <ambientLight intensity={0.4} />
            <directionalLight position={[5, 10, 5]} intensity={1.2} castShadow />
            <directionalLight position={[-5, 5, -5]} intensity={0.8} />
            <pointLight position={[2, 3, 2]} intensity={0.6} color="#2bb3ea" />
            <pointLight position={[-2, 2, -2]} intensity={0.4} color="#ffffff" />
            <ToothModel />
            <OrbitControls 
              enableZoom={false} 
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