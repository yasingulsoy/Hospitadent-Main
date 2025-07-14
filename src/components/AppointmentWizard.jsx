import React, { useState } from 'react';

const branchGroups = [
  { city: 'İstanbul', branches: ['Mecidiyeköy', 'Bağcılar', 'Bakırköy', 'Fatih', 'Çamlıca', 'Pendik', 'Şerifali', 'Cevizlibağ', 'Ataşehir', 'Göktürk'] },
  { city: 'Kayseri', branches: ['Kayseri'] },
  { city: 'Muğla', branches: ['Bodrum'] },
  { city: 'Antalya', branches: ['Antalya', 'Alanya'] },
  { city: 'Ankara', branches: ['Çayyolu'] },
  { city: 'Kocaeli', branches: ['Kocaeli'] },
  { city: 'Bursa', branches: ['Nilüfer'] },
  { city: 'Denizli', branches: ['Denizli'] }
];

// Doktor verileri
const doctors = [
  {
    name: 'Dr. Ahmet Yılmaz',
    specialty: 'Ortodonti Uzmanı',
    experience: '15 yıl',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face'
  },
  {
    name: 'Dr. Ayşe Demir',
    specialty: 'Çocuk Diş Hekimi',
    experience: '12 yıl',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&h=200&fit=crop&crop=face'
  },
  {
    name: 'Dr. Mehmet Kaya',
    specialty: 'Cerrahi Uzmanı',
    experience: '18 yıl',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face'
  },
  {
    name: 'Dr. Fatma Özkan',
    specialty: 'Periodontoloji',
    experience: '14 yıl',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&h=200&fit=crop&crop=face'
  },
  {
    name: 'Dr. Ali Çelik',
    specialty: 'Endodonti Uzmanı',
    experience: '16 yıl',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&h=200&fit=crop&crop=face'
  },
  {
    name: 'Dr. Zeynep Arslan',
    specialty: 'Protez Uzmanı',
    experience: '13 yıl',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face'
  }
];

const NAVBAR_COLOR = '#0f4f78';
const ACCENT_COLOR = '#2bb3ea';

// Yatay kaydırmalı carousel
const HorizontalCarousel = ({ options, selectedIdx, onSelect, label }) => {
  const handlePrev = () => {
    onSelect((selectedIdx - 1 + options.length) % options.length);
  };

  const handleNext = () => {
    onSelect((selectedIdx + 1) % options.length);
  };

  return (
    <div className="flex flex-col items-center mb-8">
      <label className="block text-xl font-bold mb-8 text-gray-800 text-center tracking-wide">{label}</label>
      
      <div className="relative w-full max-w-lg mx-auto">
        {/* Ana seçili öğe */}
        <div className="relative mb-8">
          <div 
            className="relative bg-gradient-to-br from-[#2bb3ea] via-[#1a9fd8] to-[#0f4f78] text-white rounded-3xl p-8 shadow-2xl transform transition-all duration-700 scale-110 overflow-hidden"
            style={{
              boxShadow: `0 0 0 12px ${ACCENT_COLOR}15, 0 25px 50px rgba(43, 179, 234, 0.4), inset 0 1px 0 rgba(255,255,255,0.2)`
            }}
          >
            {/* Arka plan dekoratif elementler */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="text-center relative z-10">
              <div className="text-3xl font-black mb-3 tracking-tight">{options[selectedIdx]}</div>
              <div className="text-sm font-medium opacity-90 bg-white bg-opacity-20 rounded-full px-4 py-1 inline-block backdrop-blur-sm">
                Seçili
              </div>
            </div>
          </div>
        </div>

        {/* Kaydırma kontrolleri */}
        <div className="flex items-center justify-between mb-6">
          {/* Sol ok */}
          <button
            onClick={handlePrev}
            className="group relative w-14 h-14 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 flex items-center justify-center hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-white"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-[#2bb3ea] to-[#0f4f78] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
          </button>

          {/* Öğe göstergesi */}
          <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg">
            {options.map((_, idx) => (
              <div
                key={idx}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  idx === selectedIdx 
                    ? 'bg-gradient-to-r from-[#2bb3ea] to-[#0f4f78] scale-150 shadow-lg' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Sağ ok */}
          <button
            onClick={handleNext}
            className="group relative w-14 h-14 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 flex items-center justify-center hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-white"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-[#2bb3ea] to-[#0f4f78] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>

        {/* Önceki ve sonraki öğeler (küçük ve flu) */}
        <div className="flex justify-between items-center px-6">
          <div className="text-center opacity-30 transform scale-90 transition-all duration-500 hover:opacity-50">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 text-gray-700 font-semibold shadow-lg border border-white/20">
              {options[(selectedIdx - 1 + options.length) % options.length]}
            </div>
          </div>
          <div className="text-center opacity-30 transform scale-90 transition-all duration-500 hover:opacity-50">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 text-gray-700 font-semibold shadow-lg border border-white/20">
              {options[(selectedIdx + 1) % options.length]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Doktor seçme component'i
const DoctorSelector = ({ doctors, selectedIdx, onSelect }) => {
  const handlePrev = () => {
    onSelect((selectedIdx - 1 + doctors.length) % doctors.length);
  };

  const handleNext = () => {
    onSelect((selectedIdx + 1) % doctors.length);
  };

  const selectedDoctor = doctors[selectedIdx];

  return (
    <div className="flex flex-col items-center mb-8">
      <label className="block text-xl font-bold mb-8 text-gray-800 text-center tracking-wide">Doktor Seç</label>
      
      <div className="relative w-full max-w-lg mx-auto">
        {/* Ana seçili doktor */}
        <div className="relative mb-8">
          <div 
            className="relative bg-gradient-to-br from-[#2bb3ea] via-[#1a9fd8] to-[#0f4f78] text-white rounded-3xl p-8 shadow-2xl transform transition-all duration-700 scale-110 overflow-hidden"
            style={{
              boxShadow: `0 0 0 12px ${ACCENT_COLOR}15, 0 25px 50px rgba(43, 179, 234, 0.4), inset 0 1px 0 rgba(255,255,255,0.2)`
            }}
          >
            {/* Arka plan dekoratif elementler */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="text-center relative z-10">
              <div className="mb-4 flex justify-center">
                <img 
                  src={selectedDoctor.image} 
                  alt={selectedDoctor.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-white/30 shadow-lg"
                />
              </div>
              <div className="text-2xl font-black mb-2 tracking-tight">{selectedDoctor.name}</div>
              <div className="text-lg font-semibold mb-3 opacity-90">{selectedDoctor.specialty}</div>
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm font-medium backdrop-blur-sm">
                  {selectedDoctor.experience}
                </div>
                <div className="flex items-center gap-1 bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm font-medium backdrop-blur-sm">
                  <span>⭐</span>
                  <span>{selectedDoctor.rating}</span>
                </div>
              </div>
              <div className="text-sm font-medium opacity-90 bg-white bg-opacity-20 rounded-full px-4 py-1 inline-block backdrop-blur-sm">
                Seçili
              </div>
            </div>
          </div>
        </div>

        {/* Kaydırma kontrolleri */}
        <div className="flex items-center justify-between mb-6">
          {/* Sol ok */}
          <button
            onClick={handlePrev}
            className="group relative w-14 h-14 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 flex items-center justify-center hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-white"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-[#2bb3ea] to-[#0f4f78] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
          </button>

          {/* Öğe göstergesi */}
          <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg">
            {doctors.map((_, idx) => (
              <div
                key={idx}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  idx === selectedIdx 
                    ? 'bg-gradient-to-r from-[#2bb3ea] to-[#0f4f78] scale-150 shadow-lg' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Sağ ok */}
          <button
            onClick={handleNext}
            className="group relative w-14 h-14 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 flex items-center justify-center hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-white"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-[#2bb3ea] to-[#0f4f78] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>

        {/* Önceki ve sonraki doktorlar */}
        <div className="flex justify-between items-center px-6">
          <div className="text-center opacity-30 transform scale-90 transition-all duration-500 hover:opacity-50">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 text-gray-700 shadow-lg border border-white/20">
              <img 
                src={doctors[(selectedIdx - 1 + doctors.length) % doctors.length].image}
                alt={doctors[(selectedIdx - 1 + doctors.length) % doctors.length].name}
                className="w-12 h-12 rounded-full object-cover mx-auto mb-2 border-2 border-white/50"
              />
              <div className="font-semibold text-sm">{doctors[(selectedIdx - 1 + doctors.length) % doctors.length].name}</div>
            </div>
          </div>
          <div className="text-center opacity-30 transform scale-90 transition-all duration-500 hover:opacity-50">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 text-gray-700 shadow-lg border border-white/20">
              <img 
                src={doctors[(selectedIdx + 1) % doctors.length].image}
                alt={doctors[(selectedIdx + 1) % doctors.length].name}
                className="w-12 h-12 rounded-full object-cover mx-auto mb-2 border-2 border-white/50"
              />
              <div className="font-semibold text-sm">{doctors[(selectedIdx + 1) % doctors.length].name}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AppointmentWizard = () => {
  const [step, setStep] = useState(1);
  const [selectedCityIdx, setSelectedCityIdx] = useState(0);
  const [selectedBranchIdx, setSelectedBranchIdx] = useState(0);
  const [selectedDoctorIdx, setSelectedDoctorIdx] = useState(0);
  const [animate, setAnimate] = useState(false);

  // Şehirler listesi
  const cities = branchGroups.map(g => g.city);
  const selectedCity = cities[selectedCityIdx];
  // Seçilen şehirdeki şubeler
  const currentBranches = branchGroups[selectedCityIdx].branches;
  const selectedBranch = currentBranches[selectedBranchIdx];

  // Adım geçişlerinde animasyon
  const goToStep = (n) => {
    setAnimate(true);
    setTimeout(() => {
      setStep(n);
      setAnimate(false);
    }, 250);
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-8 transition-all duration-500">
        <h2 className="text-3xl font-extrabold text-center mb-8 tracking-tight" style={{color: NAVBAR_COLOR, letterSpacing: '0.01em'}}>Online Randevu</h2>
        {/* Adım göstergesi */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {[1,2,3,4,5].map((n) => (
            <React.Fragment key={n}>
              <div className={`w-9 h-9 flex items-center justify-center rounded-full font-bold text-lg border-2 shadow transition-all duration-300 ${step===n ? 'scale-110' : 'scale-100'}`}
                style={{
                  background: step===n ? ACCENT_COLOR : '#f3f4f6',
                  color: step===n ? '#fff' : NAVBAR_COLOR,
                  borderColor: step===n ? ACCENT_COLOR : '#e5e7eb',
                  boxShadow: step===n ? `0 0 0 4px ${ACCENT_COLOR}22` : 'none',
                }}
              >{n<10?`0${n}`:n}</div>
              {n!==5 && <div className="w-10 h-1 rounded bg-gray-300" style={{background: step>n ? ACCENT_COLOR : '#e5e7eb'}}></div>}
            </React.Fragment>
          ))}
        </div>
        {/* 1. Adım: İl seçimi */}
        {step === 1 && (
          <div className={`transition-all duration-500 ${animate ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <HorizontalCarousel
              options={cities}
              selectedIdx={selectedCityIdx}
              onSelect={setSelectedCityIdx}
              label="İl Seç"
            />
            <button
              className="mt-6 w-full bg-gradient-to-r from-[#2bb3ea] to-[#0f4f78] text-white font-bold py-3 rounded-lg shadow-lg hover:from-[#0f4f78] hover:to-[#2bb3ea] transition-all text-lg tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => goToStep(2)}
            >
              Devam Et
            </button>
          </div>
        )}
        {/* 2. Adım: Şube seçimi */}
        {step === 2 && (
          <div className={`transition-all duration-500 ${animate ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <HorizontalCarousel
              options={currentBranches}
              selectedIdx={selectedBranchIdx}
              onSelect={setSelectedBranchIdx}
              label="Şube Seç"
            />
            <div className="flex justify-between mt-6 gap-4">
              <button
                className="w-1/2 bg-gray-200 text-gray-700 font-bold py-3 rounded-lg shadow hover:bg-gray-300 transition-all text-lg"
                onClick={() => goToStep(1)}
              >
                Geri
              </button>
              <button
                className="w-1/2 bg-gradient-to-r from-[#2bb3ea] to-[#0f4f78] text-white font-bold py-3 rounded-lg shadow-lg hover:from-[#0f4f78] hover:to-[#2bb3ea] transition-all text-lg tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => goToStep(3)}
              >
                Devam Et
              </button>
            </div>
          </div>
        )}
        {/* 3. Adım: Doktor seçimi */}
        {step === 3 && (
          <div className={`transition-all duration-500 ${animate ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <DoctorSelector
              doctors={doctors}
              selectedIdx={selectedDoctorIdx}
              onSelect={setSelectedDoctorIdx}
            />
            <div className="flex justify-between mt-6 gap-4">
              <button
                className="w-1/2 bg-gray-200 text-gray-700 font-bold py-3 rounded-lg shadow hover:bg-gray-300 transition-all text-lg"
                onClick={() => goToStep(2)}
              >
                Geri
              </button>
              <button
                className="w-1/2 bg-gradient-to-r from-[#2bb3ea] to-[#0f4f78] text-white font-bold py-3 rounded-lg shadow-lg hover:from-[#0f4f78] hover:to-[#2bb3ea] transition-all text-lg tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => goToStep(4)}
              >
                Devam Et
              </button>
            </div>
          </div>
        )}
        {/* Diğer adımlar buraya eklenecek */}
      </div>
    </section>
  );
};

export default AppointmentWizard; 