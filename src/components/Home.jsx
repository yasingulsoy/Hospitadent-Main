import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const ToothModel = () => {
  return (
    <group>
      {/* Gerçekçi Diş Modeli */}
      <group position={[0, 0, 0]}>
        {/* Diş taç kısmı - daha anatomik */}
        <mesh castShadow receiveShadow position={[0, 0.3, 0]}>
          <cylinderGeometry args={[0.6, 0.7, 1.2, 32]} />
          <meshStandardMaterial color="#f8f9fa" roughness={0.1} metalness={0.2} />
        </mesh>
        
        {/* Diş minesinin üst kısmı - daha yuvarlak */}
        <mesh castShadow receiveShadow position={[0, 0.9, 0]}>
          <sphereGeometry args={[0.55, 24, 24]} />
          <meshStandardMaterial color="#ffffff" roughness={0.05} metalness={0.4} />
        </mesh>
        
        {/* Diş yüzeyindeki çukurlar (fissures) */}
        <mesh position={[0, 0.7, 0.5]}>
          <boxGeometry args={[0.15, 0.1, 0.02]} />
          <meshStandardMaterial color="#e9ecef" roughness={0.6} />
        </mesh>
        <mesh position={[0.2, 0.7, 0.4]}>
          <boxGeometry args={[0.1, 0.08, 0.02]} />
          <meshStandardMaterial color="#e9ecef" roughness={0.6} />
        </mesh>
        <mesh position={[-0.2, 0.7, 0.4]}>
          <boxGeometry args={[0.1, 0.08, 0.02]} />
          <meshStandardMaterial color="#e9ecef" roughness={0.6} />
        </mesh>
        
        {/* Diş kökü - daha ince ve uzun */}
        <mesh castShadow receiveShadow position={[0, -0.6, 0]}>
          <cylinderGeometry args={[0.3, 0.2, 1.4, 16]} />
          <meshStandardMaterial color="#e9ecef" roughness={0.4} metalness={0.1} />
        </mesh>
        
        {/* Diş eti - daha gerçekçi pembe */}
        <mesh castShadow receiveShadow position={[0, -0.1, 0]}>
          <torusGeometry args={[0.5, 0.12, 16, 32]} />
          <meshStandardMaterial color="#ff8fa3" roughness={0.9} metalness={0} />
        </mesh>
        
        {/* Diş eti detayları */}
        <mesh position={[0, -0.05, 0.4]}>
          <sphereGeometry args={[0.45, 16, 16]} />
          <meshStandardMaterial color="#ff8fa3" roughness={0.9} metalness={0} />
        </mesh>
      </group>

      {/* Gerçekçi Diş Hekimi */}
      <group position={[1.8, 0, 0]}>
        {/* Baş - daha detaylı */}
        <mesh castShadow receiveShadow position={[0, 1.3, 0]}>
          <sphereGeometry args={[0.25, 24, 24]} />
          <meshStandardMaterial color="#ffdbac" roughness={0.7} />
        </mesh>
        
        {/* Saç */}
        <mesh castShadow receiveShadow position={[0, 1.45, 0]}>
          <sphereGeometry args={[0.28, 16, 16]} />
          <meshStandardMaterial color="#4a4a4a" roughness={0.9} />
        </mesh>
        
        {/* Yüz detayları */}
        <mesh position={[0, 1.35, 0.2]}>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshStandardMaterial color="#333" roughness={0.5} />
        </mesh>
        <mesh position={[0.08, 1.32, 0.18]}>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshStandardMaterial color="#333" roughness={0.5} />
        </mesh>
        
        {/* Gözlük çerçevesi */}
        <mesh position={[0, 1.35, 0.22]}>
          <torusGeometry args={[0.1, 0.015, 8, 16]} />
          <meshStandardMaterial color="#333" roughness={0.3} />
        </mesh>
        <mesh position={[0.12, 1.35, 0.22]}>
          <torusGeometry args={[0.1, 0.015, 8, 16]} />
          <meshStandardMaterial color="#333" roughness={0.3} />
        </mesh>
        
        {/* Gözlük köprüsü */}
        <mesh position={[0.06, 1.35, 0.22]}>
          <boxGeometry args={[0.04, 0.01, 0.01]} />
          <meshStandardMaterial color="#333" roughness={0.3} />
        </mesh>
        
        {/* Gövde - beyaz önlük */}
        <mesh castShadow receiveShadow position={[0, 0.7, 0]}>
          <cylinderGeometry args={[0.2, 0.25, 1.2, 16]} />
          <meshStandardMaterial color="#ffffff" roughness={0.3} />
        </mesh>
        
        {/* Kollar - beyaz önlük */}
        <mesh castShadow receiveShadow position={[-0.35, 0.8, 0]}>
          <cylinderGeometry args={[0.06, 0.06, 0.5, 8]} />
          <meshStandardMaterial color="#ffffff" roughness={0.3} />
        </mesh>
        <mesh castShadow receiveShadow position={[0.35, 0.8, 0]}>
          <cylinderGeometry args={[0.06, 0.06, 0.5, 8]} />
          <meshStandardMaterial color="#ffffff" roughness={0.3} />
        </mesh>
        
        {/* Bacaklar - siyah pantolon */}
        <mesh castShadow receiveShadow position={[-0.12, -0.1, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.8, 8]} />
          <meshStandardMaterial color="#2c2c2c" roughness={0.8} />
        </mesh>
        <mesh castShadow receiveShadow position={[0.12, -0.1, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.8, 8]} />
          <meshStandardMaterial color="#2c2c2c" roughness={0.8} />
        </mesh>
        
        {/* Eller */}
        <mesh castShadow receiveShadow position={[-0.35, 0.55, 0]}>
          <sphereGeometry args={[0.05, 12, 12]} />
          <meshStandardMaterial color="#ffdbac" roughness={0.7} />
        </mesh>
        <mesh castShadow receiveShadow position={[0.35, 0.55, 0]}>
          <sphereGeometry args={[0.05, 12, 12]} />
          <meshStandardMaterial color="#ffdbac" roughness={0.7} />
        </mesh>
      </group>

      {/* Tıbbi Aletler - daha detaylı */}
      <group position={[-1.2, 0.3, 0]}>
        {/* Diş aynası */}
        <mesh castShadow receiveShadow position={[0, 0, 0]}>
          <cylinderGeometry args={[0.12, 0.12, 0.02, 16]} />
          <meshStandardMaterial color="#c0c0c0" roughness={0.1} metalness={0.9} />
        </mesh>
        <mesh castShadow receiveShadow position={[0, -0.15, 0]}>
          <cylinderGeometry args={[0.015, 0.015, 0.3, 8]} />
          <meshStandardMaterial color="#c0c0c0" roughness={0.3} metalness={0.7} />
        </mesh>
        
        {/* Diş sondası */}
        <mesh castShadow receiveShadow position={[0.2, 0, 0]}>
          <cylinderGeometry args={[0.005, 0.005, 0.2, 8]} />
          <meshStandardMaterial color="#c0c0c0" roughness={0.2} metalness={0.8} />
        </mesh>
        <mesh castShadow receiveShadow position={[0.2, 0.1, 0]}>
          <sphereGeometry args={[0.008, 8, 8]} />
          <meshStandardMaterial color="#c0c0c0" roughness={0.2} metalness={0.8} />
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