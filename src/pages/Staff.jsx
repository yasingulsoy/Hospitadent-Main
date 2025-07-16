import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Footer } from '../components';

// Import resimler
import ahmetSelvi from '../assets/idari_kadro/1.Diş Hekimi Ahmet Selvi.png';
import recepEsker from '../assets/idari_kadro/2.Recep Eşkar.png';
import halitBurak from '../assets/idari_kadro/3.Halit Burak ALTINKAYA.png';
import canerCoban from '../assets/idari_kadro/Caner ÇOBAN.png';
import bayramSayman from '../assets/idari_kadro/Bayram SAYMAN.png';
import neslihanDemir from '../assets/idari_kadro/Neslihan DEMİR.png';
import ercumentMert from '../assets/idari_kadro/Ercüment MERT.png';
import idariErkek from '../assets/idari_kadro/IDARI-ERKEK.png';
import idariKadin from '../assets/idari_kadro/IDARI-KADIN.png';

// Yeni idari kadro resimleri
import kadriyeSoysal from '../assets/idari_kadro/Kadriye SOYSAL.png';
import senaKeles from '../assets/idari_kadro/Sena KELEŞ.png';
import berraGorgulu from '../assets/idari_kadro/Berra Sinanoğlu GÖRGÜLÜ.png';
import selinHosceylan from '../assets/idari_kadro/Selin HOŞCEYLAN.png';
import iclalHarmanci from '../assets/idari_kadro/İclal HARMANCI.png';
import mehmetKok from '../assets/idari_kadro/Mehmet Ziya KÖK.png';
import gayeMercan from '../assets/idari_kadro/Gaye MERCAN.png';

const Staff = () => {
  const { t } = useTranslation();

  // Sayfa yüklendiğinde scroll'u aktif hale getir
  useEffect(() => {
    // Sayfanın yüksekliğini zorla hesapla
    setTimeout(() => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }, 100);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-100/20 to-cyan-100/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 bg-white/80 backdrop-blur-sm py-12 border-b border-white/20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-center bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] bg-clip-text text-transparent">
            İdari Kadro
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] mx-auto mt-6 rounded-full"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 pb-32 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Glassmorphism Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Card 1 - Ahmet SELVİ */}
            <div className="group perspective-1000">
              <div className="relative transform transition-all duration-700 group-hover:rotate-y-12">
                {/* Glassmorphism Card */}
                <div className="bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(43,179,234,0.25)] transition-all duration-700 hover:scale-105 border border-white/30 overflow-hidden relative">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  
                  {/* Card Content */}
                  <div className="relative p-10 text-center">
                    {/* Profile Image Container */}
                    <div className="relative mx-auto mb-8">
                      {/* Outer Glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0f4f78] via-[#2bb3ea] to-[#0f4f78] rounded-3xl p-1 blur-sm group-hover:blur-md transition-all duration-500"></div>
                      
                      {/* Image Container */}
                      <div className="relative w-56 h-56 mx-auto rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-[0_0_30px_rgba(43,179,234,0.5)] transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                        <img 
                          src={ahmetSelvi} 
                          alt="Diş Hekimi Ahmet SELVİ" 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    </div>
                    
                    {/* Name with Gradient */}
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300">
                      Diş Hekimi Ahmet SELVİ
                    </h3>
                    
                    {/* Title with Enhanced Styling */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#2bb3ea]/20 to-[#0f4f78]/20 rounded-full blur-sm"></div>
                      <p className="relative text-sm md:text-base text-[#0f4f78] font-semibold bg-white/50 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-full border border-white/30">
                        Yönetim Kurulu Başkanı
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Recep EŞKAR */}
            <div className="group perspective-1000">
              <div className="relative transform transition-all duration-700 group-hover:rotate-y-12">
                {/* Glassmorphism Card */}
                <div className="bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(43,179,234,0.25)] transition-all duration-700 hover:scale-105 border border-white/30 overflow-hidden relative">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  
                  {/* Card Content */}
                  <div className="relative p-10 text-center">
                    {/* Profile Image Container */}
                    <div className="relative mx-auto mb-8">
                      {/* Outer Glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0f4f78] via-[#2bb3ea] to-[#0f4f78] rounded-3xl p-1 blur-sm group-hover:blur-md transition-all duration-500"></div>
                      
                      {/* Image Container */}
                      <div className="relative w-56 h-56 mx-auto rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-[0_0_30px_rgba(43,179,234,0.5)] transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                        <img 
                          src={recepEsker} 
                          alt="Diş Hekimi Recep EŞKAR" 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    </div>
                    
                    {/* Name with Gradient */}
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300">
                      Diş Hekimi Recep EŞKAR
                    </h3>
                    
                    {/* Title with Enhanced Styling */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#2bb3ea]/20 to-[#0f4f78]/20 rounded-full blur-sm"></div>
                      <p className="relative text-sm md:text-base text-[#0f4f78] font-semibold bg-white/50 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-full border border-white/30">
                        CEO Genel Müdür
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Halit Burak ALTINKAYA */}
            <div className="group perspective-1000">
              <div className="relative transform transition-all duration-700 group-hover:rotate-y-12">
                {/* Glassmorphism Card */}
                <div className="bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(43,179,234,0.25)] transition-all duration-700 hover:scale-105 border border-white/30 overflow-hidden relative">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  
                  {/* Card Content */}
                  <div className="relative p-10 text-center">
                    {/* Profile Image Container */}
                    <div className="relative mx-auto mb-8">
                      {/* Outer Glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0f4f78] via-[#2bb3ea] to-[#0f4f78] rounded-3xl p-1 blur-sm group-hover:blur-md transition-all duration-500"></div>
                      
                      {/* Image Container */}
                      <div className="relative w-56 h-56 mx-auto rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-[0_0_30px_rgba(43,179,234,0.5)] transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                        <img 
                          src={halitBurak} 
                          alt="Halit Burak ALTINKAYA" 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    </div>
                    
                    {/* Name with Gradient */}
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300">
                      Halit Burak ALTINKAYA
                    </h3>
                    
                    {/* Title with Enhanced Styling */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#2bb3ea]/20 to-[#0f4f78]/20 rounded-full blur-sm"></div>
                      <p className="relative text-sm md:text-base text-[#0f4f78] font-semibold bg-white/50 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-full border border-white/30">
                        Bilgi Yönetim Sistemleri Müdürü
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 - Abdullah DEMİRCAN */}
            <div className="group perspective-1000">
              <div className="relative transform transition-all duration-700 group-hover:rotate-y-12">
                {/* Glassmorphism Card */}
                <div className="bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(43,179,234,0.25)] transition-all duration-700 hover:scale-105 border border-white/30 overflow-hidden relative">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  
                  {/* Card Content */}
                  <div className="relative p-10 text-center">
                    {/* Profile Image Container */}
                    <div className="relative mx-auto mb-8">
                      {/* Outer Glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0f4f78] via-[#2bb3ea] to-[#0f4f78] rounded-3xl p-1 blur-sm group-hover:blur-md transition-all duration-500"></div>
                      
                      {/* Image Container */}
                      <div className="relative w-48 h-48 md:w-52 md:h-52 lg:w-56 lg:h-56 mx-auto rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-[0_0_30px_rgba(43,179,234,0.5)] transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                        <img 
                          src={idariErkek} 
                          alt="Abdullah DEMİRCAN" 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    </div>
                    
                    {/* Name with Gradient */}
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300">
                      Abdullah DEMİRCAN
                    </h3>
                    
                    {/* Title with Enhanced Styling */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#2bb3ea]/20 to-[#0f4f78]/20 rounded-full blur-sm"></div>
                      <p className="relative text-sm md:text-base text-[#0f4f78] font-semibold bg-white/50 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-full border border-white/30">
                        Satış Ve Pazarlama Müdürü
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5 - Caner ÇOBAN */}
            <div className="group perspective-1000">
              <div className="relative transform transition-all duration-700 group-hover:rotate-y-12">
                {/* Glassmorphism Card */}
                <div className="bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(43,179,234,0.25)] transition-all duration-700 hover:scale-105 border border-white/30 overflow-hidden relative">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  
                  {/* Card Content */}
                  <div className="relative p-10 text-center">
                    {/* Profile Image Container */}
                    <div className="relative mx-auto mb-8">
                      {/* Outer Glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0f4f78] via-[#2bb3ea] to-[#0f4f78] rounded-3xl p-1 blur-sm group-hover:blur-md transition-all duration-500"></div>
                      
                      {/* Image Container */}
                      <div className="relative w-48 h-48 md:w-52 md:h-52 lg:w-56 lg:h-56 mx-auto rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-[0_0_30px_rgba(43,179,234,0.5)] transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                        <img 
                          src={canerCoban} 
                          alt="Caner ÇOBAN" 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    </div>
                    
                    {/* Name with Gradient */}
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300">
                      Caner ÇOBAN
                    </h3>
                    
                    {/* Title with Enhanced Styling */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#2bb3ea]/20 to-[#0f4f78]/20 rounded-full blur-sm"></div>
                      <p className="relative text-sm md:text-base text-[#0f4f78] font-semibold bg-white/50 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-full border border-white/30">
                        İş Geliştirme Operasyon Müdürü
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 6 - Bayram SAYMAN */}
            <div className="group perspective-1000">
              <div className="relative transform transition-all duration-700 group-hover:rotate-y-12">
                {/* Glassmorphism Card */}
                <div className="bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(43,179,234,0.25)] transition-all duration-700 hover:scale-105 border border-white/30 overflow-hidden relative">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  
                  {/* Card Content */}
                  <div className="relative p-10 text-center">
                    {/* Profile Image Container */}
                    <div className="relative mx-auto mb-8">
                      {/* Outer Glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0f4f78] via-[#2bb3ea] to-[#0f4f78] rounded-3xl p-1 blur-sm group-hover:blur-md transition-all duration-500"></div>
                      
                      {/* Image Container */}
                      <div className="relative w-48 h-48 md:w-52 md:h-52 lg:w-56 lg:h-56 mx-auto rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-[0_0_30px_rgba(43,179,234,0.5)] transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                        <img 
                          src={bayramSayman} 
                          alt="Bayram SAYMAN" 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    </div>
                    
                    {/* Name with Gradient */}
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300">
                      Bayram SAYMAN
                    </h3>
                    
                    {/* Title with Enhanced Styling */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#2bb3ea]/20 to-[#0f4f78]/20 rounded-full blur-sm"></div>
                      <p className="relative text-sm md:text-base text-[#0f4f78] font-semibold bg-white/50 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-full border border-white/30">
                        Muhasebe Müdürü
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 7 - Zeynep Aydın SOYDANER */}
            <div className="group perspective-1000">
              <div className="relative transform transition-all duration-700 group-hover:rotate-y-12">
                {/* Glassmorphism Card */}
                <div className="bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(43,179,234,0.25)] transition-all duration-700 hover:scale-105 border border-white/30 overflow-hidden relative">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  
                  {/* Card Content */}
                  <div className="relative p-10 text-center">
                    {/* Profile Image Container */}
                    <div className="relative mx-auto mb-8">
                      {/* Outer Glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0f4f78] via-[#2bb3ea] to-[#0f4f78] rounded-3xl p-1 blur-sm group-hover:blur-md transition-all duration-500"></div>
                      
                      {/* Image Container */}
                      <div className="relative w-48 h-48 md:w-52 md:h-52 lg:w-56 lg:h-56 mx-auto rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-[0_0_30px_rgba(43,179,234,0.5)] transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                        <img 
                          src={idariKadin} 
                          alt="Zeynep Aydın SOYDANER" 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    </div>
                    
                    {/* Name with Gradient */}
                    <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300">
                      Zeynep Aydın SOYDANER
                    </h3>
                    
                    {/* Title with Enhanced Styling */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#2bb3ea]/20 to-[#0f4f78]/20 rounded-full blur-sm"></div>
                      <p className="relative text-sm md:text-base text-[#0f4f78] font-semibold bg-white/50 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-full border border-white/30">
                        Avukat
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 8 - Neslihan DEMİR */}
            <div className="group perspective-1000">
              <div className="relative transform transition-all duration-700 group-hover:rotate-y-12">
                {/* Glassmorphism Card */}
                <div className="bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(43,179,234,0.25)] transition-all duration-700 hover:scale-105 border border-white/30 overflow-hidden relative">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  
                  {/* Card Content */}
                  <div className="relative p-10 text-center">
                    {/* Profile Image Container */}
                    <div className="relative mx-auto mb-8">
                      {/* Outer Glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0f4f78] via-[#2bb3ea] to-[#0f4f78] rounded-3xl p-1 blur-sm group-hover:blur-md transition-all duration-500"></div>
                      
                      {/* Image Container */}
                      <div className="relative w-48 h-48 md:w-52 md:h-52 lg:w-56 lg:h-56 mx-auto rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-[0_0_30px_rgba(43,179,234,0.5)] transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                        <img 
                          src={neslihanDemir} 
                          alt="Neslihan DEMİR" 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    </div>
                    
                    {/* Name with Gradient */}
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300">
                      Neslihan DEMİR
                    </h3>
                    
                    {/* Title with Enhanced Styling */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#2bb3ea]/20 to-[#0f4f78]/20 rounded-full blur-sm"></div>
                      <p className="relative text-sm md:text-base text-[#0f4f78] font-semibold bg-white/50 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-full border border-white/30">
                        Bağcılar İdari İşler Müdürü
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 9 - Tuğba KAVALCI */}
            <div className="group perspective-1000">
              <div className="relative transform transition-all duration-700 group-hover:rotate-y-12">
                {/* Glassmorphism Card */}
                <div className="bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(43,179,234,0.25)] transition-all duration-700 hover:scale-105 border border-white/30 overflow-hidden relative">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  
                  {/* Card Content */}
                  <div className="relative p-10 text-center">
                    {/* Profile Image Container */}
                    <div className="relative mx-auto mb-8">
                      {/* Outer Glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0f4f78] via-[#2bb3ea] to-[#0f4f78] rounded-3xl p-1 blur-sm group-hover:blur-md transition-all duration-500"></div>
                      
                      {/* Image Container */}
                      <div className="relative w-48 h-48 md:w-52 md:h-52 lg:w-56 lg:h-56 mx-auto rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-[0_0_30px_rgba(43,179,234,0.5)] transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                        <img 
                          src={idariKadin} 
                          alt="Tuğba KAVALCI" 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    </div>
                    
                    {/* Name with Gradient */}
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300">
                      Tuğba KAVALCI
                    </h3>
                    
                    {/* Title with Enhanced Styling */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#2bb3ea]/20 to-[#0f4f78]/20 rounded-full blur-sm"></div>
                      <p className="relative text-sm md:text-base text-[#0f4f78] font-semibold bg-white/50 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-full border border-white/30">
                        Fatih İdari İşler Müdürü
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 10 - Veysel YILMAZ */}
            <div className="group perspective-1000">
              <div className="relative transform transition-all duration-700 group-hover:rotate-y-12">
                {/* Glassmorphism Card */}
                <div className="bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(43,179,234,0.25)] transition-all duration-700 hover:scale-105 border border-white/30 overflow-hidden relative">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  
                  {/* Card Content */}
                  <div className="relative p-10 text-center">
                    {/* Profile Image Container */}
                    <div className="relative mx-auto mb-8">
                      {/* Outer Glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0f4f78] via-[#2bb3ea] to-[#0f4f78] rounded-3xl p-1 blur-sm group-hover:blur-md transition-all duration-500"></div>
                      
                      {/* Image Container */}
                      <div className="relative w-48 h-48 md:w-52 md:h-52 lg:w-56 lg:h-56 mx-auto rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-[0_0_30px_rgba(43,179,234,0.5)] transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                        <img 
                          src={idariErkek} 
                          alt="Veysel YILMAZ" 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    </div>
                    
                    {/* Name with Gradient */}
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300">
                      Veysel YILMAZ
                    </h3>
                    
                    {/* Title with Enhanced Styling */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#2bb3ea]/20 to-[#0f4f78]/20 rounded-full blur-sm"></div>
                      <p className="relative text-sm md:text-base text-[#0f4f78] font-semibold bg-white/50 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-full border border-white/30">
                        Çamlıca İdari İşler Müdürü
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 11 - Ercüment MERT */}
            <div className="group perspective-1000">
              <div className="relative transform transition-all duration-700 group-hover:rotate-y-12">
                {/* Glassmorphism Card */}
                <div className="bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(43,179,234,0.25)] transition-all duration-700 hover:scale-105 border border-white/30 overflow-hidden relative">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  
                  {/* Card Content */}
                  <div className="relative p-10 text-center">
                    {/* Profile Image Container */}
                    <div className="relative mx-auto mb-8">
                      {/* Outer Glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0f4f78] via-[#2bb3ea] to-[#0f4f78] rounded-3xl p-1 blur-sm group-hover:blur-md transition-all duration-500"></div>
                      
                      {/* Image Container */}
                      <div className="relative w-48 h-48 md:w-52 md:h-52 lg:w-56 lg:h-56 mx-auto rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-[0_0_30px_rgba(43,179,234,0.5)] transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                        <img 
                          src={ercumentMert} 
                          alt="Ercüment MERT" 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    </div>
                    
                    {/* Name with Gradient */}
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300">
                      Ercüment MERT
                    </h3>
                    
                    {/* Title with Enhanced Styling */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#2bb3ea]/20 to-[#0f4f78]/20 rounded-full blur-sm"></div>
                      <p className="relative text-sm md:text-base text-[#0f4f78] font-semibold bg-white/50 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-full border border-white/30">
                        Pendik İdari İşler Müdürü
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 12 - Nurşah IŞIK */}
            <div className="group perspective-1000">
              <div className="relative transform transition-all duration-700 group-hover:rotate-y-12">
                {/* Glassmorphism Card */}
                <div className="bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(43,179,234,0.25)] transition-all duration-700 hover:scale-105 border border-white/30 overflow-hidden relative">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  
                  {/* Card Content */}
                  <div className="relative p-10 text-center">
                    {/* Profile Image Container */}
                    <div className="relative mx-auto mb-8">
                      {/* Outer Glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0f4f78] via-[#2bb3ea] to-[#0f4f78] rounded-3xl p-1 blur-sm group-hover:blur-md transition-all duration-500"></div>
                      
                      {/* Image Container */}
                      <div className="relative w-48 h-48 md:w-52 md:h-52 lg:w-56 lg:h-56 mx-auto rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-[0_0_30px_rgba(43,179,234,0.5)] transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                        <img 
                          src={idariKadin} 
                          alt="Nurşah IŞIK" 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    </div>
                    
                    {/* Name with Gradient */}
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300">
                      Nurşah IŞIK
                    </h3>
                    
                    {/* Title with Enhanced Styling */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#2bb3ea]/20 to-[#0f4f78]/20 rounded-full blur-sm"></div>
                      <p className="relative text-sm md:text-base text-[#0f4f78] font-semibold bg-white/50 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-full border border-white/30">
                        Mecidiyeköy İdari İşler Müdürü
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 13 - Kadriye SOYSAL */}
            <div className="group perspective-1000">
              <div className="relative transform transition-all duration-700 group-hover:rotate-y-12">
                {/* Glassmorphism Card */}
                <div className="bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(43,179,234,0.25)] transition-all duration-700 hover:scale-105 border border-white/30 overflow-hidden relative">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  
                  {/* Card Content */}
                  <div className="relative p-10 text-center">
                    {/* Profile Image Container */}
                    <div className="relative mx-auto mb-8">
                      {/* Outer Glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0f4f78] via-[#2bb3ea] to-[#0f4f78] rounded-3xl p-1 blur-sm group-hover:blur-md transition-all duration-500"></div>
                      
                      {/* Image Container */}
                      <div className="relative w-48 h-48 md:w-52 md:h-52 lg:w-56 lg:h-56 mx-auto rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-[0_0_30px_rgba(43,179,234,0.5)] transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                        <img 
                          src={kadriyeSoysal} 
                          alt="Kadriye SOYSAL" 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    </div>
                    
                    {/* Name with Gradient */}
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300">
                      Kadriye SOYSAL
                    </h3>
                    
                    {/* Title with Enhanced Styling */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#2bb3ea]/20 to-[#0f4f78]/20 rounded-full blur-sm"></div>
                      <p className="relative text-sm md:text-base text-[#0f4f78] font-semibold bg-white/50 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-full border border-white/30">
                        Kayseri İdari İşler Müdürü
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 14 - Sena KELEŞ */}
            <div className="group perspective-1000">
              <div className="relative transform transition-all duration-700 group-hover:rotate-y-12">
                {/* Glassmorphism Card */}
                <div className="bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(43,179,234,0.25)] transition-all duration-700 hover:scale-105 border border-white/30 overflow-hidden relative">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  
                  {/* Card Content */}
                  <div className="relative p-10 text-center">
                    {/* Profile Image Container */}
                    <div className="relative mx-auto mb-8">
                      {/* Outer Glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0f4f78] via-[#2bb3ea] to-[#0f4f78] rounded-3xl p-1 blur-sm group-hover:blur-md transition-all duration-500"></div>
                      
                      {/* Image Container */}
                      <div className="relative w-48 h-48 md:w-52 md:h-52 lg:w-56 lg:h-56 mx-auto rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-[0_0_30px_rgba(43,179,234,0.5)] transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                        <img 
                          src={senaKeles} 
                          alt="Sena KELEŞ" 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    </div>
                    
                    {/* Name with Gradient */}
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300">
                      Sena KELEŞ
                    </h3>
                    
                    {/* Title with Enhanced Styling */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#2bb3ea]/20 to-[#0f4f78]/20 rounded-full blur-sm"></div>
                      <p className="relative text-sm md:text-base text-[#0f4f78] font-semibold bg-white/50 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-full border border-white/30">
                        Şerifali İdari İşler Müdürü
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 15 - Berra Sinanoğlu GÖRGÜLÜ */}
            <div className="group perspective-1000">
              <div className="relative transform transition-all duration-700 group-hover:rotate-y-12">
                {/* Glassmorphism Card */}
                <div className="bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(43,179,234,0.25)] transition-all duration-700 hover:scale-105 border border-white/30 overflow-hidden relative">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  
                  {/* Card Content */}
                  <div className="relative p-10 text-center">
                    {/* Profile Image Container */}
                    <div className="relative mx-auto mb-8">
                      {/* Outer Glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0f4f78] via-[#2bb3ea] to-[#0f4f78] rounded-3xl p-1 blur-sm group-hover:blur-md transition-all duration-500"></div>
                      
                      {/* Image Container */}
                      <div className="relative w-48 h-48 md:w-52 md:h-52 lg:w-56 lg:h-56 mx-auto rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-[0_0_30px_rgba(43,179,234,0.5)] transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                        <img 
                          src={berraGorgulu} 
                          alt="Berra Sinanoğlu GÖRGÜLÜ" 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    </div>
                    
                    {/* Name with Gradient */}
                    <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300">
                      Berra Sinanoğlu GÖRGÜLÜ
                    </h3>
                    
                    {/* Title with Enhanced Styling */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#2bb3ea]/20 to-[#0f4f78]/20 rounded-full blur-sm"></div>
                      <p className="relative text-sm md:text-base text-[#0f4f78] font-semibold bg-white/50 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-full border border-white/30">
                        Alanya İdari İşler Müdürü
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 16 - Selin HOŞCEYLAN */}
            <div className="group perspective-1000">
              <div className="relative transform transition-all duration-700 group-hover:rotate-y-12">
                {/* Glassmorphism Card */}
                <div className="bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(43,179,234,0.25)] transition-all duration-700 hover:scale-105 border border-white/30 overflow-hidden relative">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  
                  {/* Card Content */}
                  <div className="relative p-10 text-center">
                    {/* Profile Image Container */}
                    <div className="relative mx-auto mb-8">
                      {/* Outer Glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0f4f78] via-[#2bb3ea] to-[#0f4f78] rounded-3xl p-1 blur-sm group-hover:blur-md transition-all duration-500"></div>
                      
                      {/* Image Container */}
                      <div className="relative w-48 h-48 md:w-52 md:h-52 lg:w-56 lg:h-56 mx-auto rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-[0_0_30px_rgba(43,179,234,0.5)] transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                        <img 
                          src={selinHosceylan} 
                          alt="Selin HOŞCEYLAN" 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    </div>
                    
                    {/* Name with Gradient */}
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300">
                      Selin HOŞCEYLAN
                    </h3>
                    
                    {/* Title with Enhanced Styling */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#2bb3ea]/20 to-[#0f4f78]/20 rounded-full blur-sm"></div>
                      <p className="relative text-sm md:text-base text-[#0f4f78] font-semibold bg-white/50 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-full border border-white/30">
                        Bodrum İdari İşler Müdürü
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 17 - İclal HARMANCI */}
            <div className="group perspective-1000">
              <div className="relative transform transition-all duration-700 group-hover:rotate-y-12">
                {/* Glassmorphism Card */}
                <div className="bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(43,179,234,0.25)] transition-all duration-700 hover:scale-105 border border-white/30 overflow-hidden relative">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  
                  {/* Card Content */}
                  <div className="relative p-10 text-center">
                    {/* Profile Image Container */}
                    <div className="relative mx-auto mb-8">
                      {/* Outer Glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0f4f78] via-[#2bb3ea] to-[#0f4f78] rounded-3xl p-1 blur-sm group-hover:blur-md transition-all duration-500"></div>
                      
                      {/* Image Container */}
                      <div className="relative w-48 h-48 md:w-52 md:h-52 lg:w-56 lg:h-56 mx-auto rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-[0_0_30px_rgba(43,179,234,0.5)] transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                        <img 
                          src={iclalHarmanci} 
                          alt="İclal HARMANCI" 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    </div>
                    
                    {/* Name with Gradient */}
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300">
                      İclal HARMANCI
                    </h3>
                    
                    {/* Title with Enhanced Styling */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#2bb3ea]/20 to-[#0f4f78]/20 rounded-full blur-sm"></div>
                      <p className="relative text-sm md:text-base text-[#0f4f78] font-semibold bg-white/50 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-full border border-white/30">
                        Kocaeli İdari İşler Müdürü
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 18 - Mehmet Ziya KÖK */}
            <div className="group perspective-1000">
              <div className="relative transform transition-all duration-700 group-hover:rotate-y-12">
                {/* Glassmorphism Card */}
                <div className="bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(43,179,234,0.25)] transition-all duration-700 hover:scale-105 border border-white/30 overflow-hidden relative">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  
                  {/* Card Content */}
                  <div className="relative p-10 text-center">
                    {/* Profile Image Container */}
                    <div className="relative mx-auto mb-8">
                      {/* Outer Glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0f4f78] via-[#2bb3ea] to-[#0f4f78] rounded-3xl p-1 blur-sm group-hover:blur-md transition-all duration-500"></div>
                      
                      {/* Image Container */}
                      <div className="relative w-48 h-48 md:w-52 md:h-52 lg:w-56 lg:h-56 mx-auto rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-[0_0_30px_rgba(43,179,234,0.5)] transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                        <img 
                          src={mehmetKok} 
                          alt="Mehmet Ziya KÖK" 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    </div>
                    
                    {/* Name with Gradient */}
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300">
                      Mehmet Ziya KÖK
                    </h3>
                    
                    {/* Title with Enhanced Styling */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#2bb3ea]/20 to-[#0f4f78]/20 rounded-full blur-sm"></div>
                      <p className="relative text-sm md:text-base text-[#0f4f78] font-semibold bg-white/50 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-full border border-white/30">
                        Antalya İdari İşler Müdürü
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 19 - Müslüm YENİKAN */}
            <div className="group perspective-1000">
              <div className="relative transform transition-all duration-700 group-hover:rotate-y-12">
                {/* Glassmorphism Card */}
                <div className="bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(43,179,234,0.25)] transition-all duration-700 hover:scale-105 border border-white/30 overflow-hidden relative">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  
                  {/* Card Content */}
                  <div className="relative p-10 text-center">
                    {/* Profile Image Container */}
                    <div className="relative mx-auto mb-8">
                      {/* Outer Glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0f4f78] via-[#2bb3ea] to-[#0f4f78] rounded-3xl p-1 blur-sm group-hover:blur-md transition-all duration-500"></div>
                      
                      {/* Image Container */}
                      <div className="relative w-48 h-48 md:w-52 md:h-52 lg:w-56 lg:h-56 mx-auto rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-[0_0_30px_rgba(43,179,234,0.5)] transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                        <img 
                          src={idariErkek} 
                          alt="Müslüm YENİKAN" 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    </div>
                    
                    {/* Name with Gradient */}
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300">
                      Müslüm YENİKAN
                    </h3>
                    
                    {/* Title with Enhanced Styling */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#2bb3ea]/20 to-[#0f4f78]/20 rounded-full blur-sm"></div>
                      <p className="relative text-sm md:text-base text-[#0f4f78] font-semibold bg-white/50 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-full border border-white/30">
                        Cevizlibağ İdari İşler Müdürü
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 20 - Gaye MERCAN */}
            <div className="group perspective-1000">
              <div className="relative transform transition-all duration-700 group-hover:rotate-y-12">
                {/* Glassmorphism Card */}
                <div className="bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(43,179,234,0.25)] transition-all duration-700 hover:scale-105 border border-white/30 overflow-hidden relative">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  
                  {/* Card Content */}
                  <div className="relative p-10 text-center">
                    {/* Profile Image Container */}
                    <div className="relative mx-auto mb-8">
                      {/* Outer Glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0f4f78] via-[#2bb3ea] to-[#0f4f78] rounded-3xl p-1 blur-sm group-hover:blur-md transition-all duration-500"></div>
                      
                      {/* Image Container */}
                      <div className="relative w-48 h-48 md:w-52 md:h-52 lg:w-56 lg:h-56 mx-auto rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-[0_0_30px_rgba(43,179,234,0.5)] transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                        <img 
                          src={gayeMercan} 
                          alt="Gaye MERCAN" 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    </div>
                    
                    {/* Name with Gradient */}
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300">
                      Gaye MERCAN
                    </h3>
                    
                    {/* Title with Enhanced Styling */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#2bb3ea]/20 to-[#0f4f78]/20 rounded-full blur-sm"></div>
                      <p className="relative text-sm md:text-base text-[#0f4f78] font-semibold bg-white/50 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-full border border-white/30">
                        Bursa İdari İşler Müdürü
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 21 - Nurdagül KAHRAMANSOY */}
            <div className="group perspective-1000">
              <div className="relative transform transition-all duration-700 group-hover:rotate-y-12">
                {/* Glassmorphism Card */}
                <div className="bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(43,179,234,0.25)] transition-all duration-700 hover:scale-105 border border-white/30 overflow-hidden relative">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  
                  {/* Card Content */}
                  <div className="relative p-10 text-center">
                    {/* Profile Image Container */}
                    <div className="relative mx-auto mb-8">
                      {/* Outer Glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0f4f78] via-[#2bb3ea] to-[#0f4f78] rounded-3xl p-1 blur-sm group-hover:blur-md transition-all duration-500"></div>
                      
                      {/* Image Container */}
                      <div className="relative w-48 h-48 md:w-52 md:h-52 lg:w-56 lg:h-56 mx-auto rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-[0_0_30px_rgba(43,179,234,0.5)] transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                        <img 
                          src={idariKadin} 
                          alt="Nurdagül KAHRAMANSOY" 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    </div>
                    
                    {/* Name with Gradient */}
                    <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300">
                      Nurdagül KAHRAMANSOY
                    </h3>
                    
                    {/* Title with Enhanced Styling */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#2bb3ea]/20 to-[#0f4f78]/20 rounded-full blur-sm"></div>
                      <p className="relative text-sm md:text-base text-[#0f4f78] font-semibold bg-white/50 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-full border border-white/30">
                        Mersin İdari İşler Müdürü
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 22 - İbrahim YÜCEL */}
            <div className="group perspective-1000">
              <div className="relative transform transition-all duration-700 group-hover:rotate-y-12">
                {/* Glassmorphism Card */}
                <div className="bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(43,179,234,0.25)] transition-all duration-700 hover:scale-105 border border-white/30 overflow-hidden relative">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  
                  {/* Card Content */}
                  <div className="relative p-10 text-center">
                    {/* Profile Image Container */}
                    <div className="relative mx-auto mb-8">
                      {/* Outer Glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0f4f78] via-[#2bb3ea] to-[#0f4f78] rounded-3xl p-1 blur-sm group-hover:blur-md transition-all duration-500"></div>
                      
                      {/* Image Container */}
                      <div className="relative w-48 h-48 md:w-52 md:h-52 lg:w-56 lg:h-56 mx-auto rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-[0_0_30px_rgba(43,179,234,0.5)] transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                        <img 
                          src={idariErkek} 
                          alt="İbrahim YÜCEL" 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    </div>
                    
                    {/* Name with Gradient */}
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300">
                      İbrahim YÜCEL
                    </h3>
                    
                    {/* Title with Enhanced Styling */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#2bb3ea]/20 to-[#0f4f78]/20 rounded-full blur-sm"></div>
                      <p className="relative text-sm md:text-base text-[#0f4f78] font-semibold bg-white/50 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-full border border-white/30">
                        Göktürk İdari İşler Müdürü
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Staff; 