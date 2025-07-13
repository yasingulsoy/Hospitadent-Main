import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";

const ToothModel = () => {
  // Placeholder: Diş yerine beyaz bir torus ve küre kombinasyonu
  return (
    <group>
      {/* Diş gövdesi */}
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#fff" roughness={0.3} metalness={0.1} />
      </mesh>
      {/* Diş kökü */}
      <mesh position={[0, -1.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.35, 0.18, 16, 100]} />
        <meshStandardMaterial color="#e0e0e0" />
      </mesh>
    </group>
  );
};

const Hero = () => {
  return (
    <section className="w-full min-h-[70vh] flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-[#eaf6fb] to-white px-4 md:px-12 py-12 md:py-0">
      {/* Sol: Başlık ve Buton */}
      <div className="flex-1 flex flex-col items-start justify-center max-w-xl z-10">
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#0f4f78] mb-6 leading-tight drop-shadow-sm">
          Dijital Diş Hekimliğinde <span className="text-[#2bb3ea]">Yeni Dönem</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          3D teknolojilerle, sağlıklı ve estetik gülüşler için <b>hemen randevu alın</b>.<br/>
          Modern klinik, uzman kadro, dijital çözümler.
        </p>
        <a
          href="#randevu"
          className="bg-[#2bb3ea] hover:bg-[#0f4f78] transition-colors duration-300 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg"
        >
          Randevu Al
        </a>
      </div>
      {/* Sağ: 3D Diş Modeli */}
      <div className="flex-1 flex items-center justify-center w-full h-[300px] md:h-[400px] lg:h-[500px] z-0">
        <Canvas shadows camera={{ position: [3, 2, 5], fov: 40 }} style={{ width: '100%', height: '100%' }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 10, 5]} intensity={1.2} castShadow />
          <Stage environment="city" intensity={0.6} shadows={false}>
            <ToothModel />
          </Stage>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.2} />
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;