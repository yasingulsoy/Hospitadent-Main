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

// Saat seçici için örnek veri
const days = [
  { date: '14 Temmuz', day: 'Pts', slots: [
    { time: '09:00', status: 'full' },
    { time: '09:30', status: 'full' },
    { time: '10:00', status: 'full' },
    { time: '10:30', status: 'full' },
    { time: '11:00', status: 'full' },
    { time: '11:30', status: 'full' },
    { time: '12:00', status: 'full' },
    { time: '12:30', status: 'full' },
    { time: '13:00', status: 'full' },
    { time: '13:30', status: 'full' },
  ] },
  { date: '15 Temmuz', day: 'Sal', slots: [
    { time: '09:00', status: 'available' },
    { time: '09:30', status: 'available' },
    { time: '10:00', status: 'available' },
    { time: '10:30', status: 'available' },
    { time: '11:00', status: 'available' },
    { time: '11:30', status: 'available' },
    { time: '12:00', status: 'available' },
    { time: '12:30', status: 'available' },
    { time: '13:00', status: 'available' },
    { time: '13:30', status: 'available' },
  ] },
  { date: '16 Temmuz', day: 'Çar', slots: [
    { time: 'Kapalı', status: 'closed' },
  ] },
  { date: '17 Temmuz', day: 'Per', slots: [
    { time: '09:00', status: 'full' },
    { time: '09:30', status: 'full' },
    { time: '10:00', status: 'full' },
    { time: '10:30', status: 'available' },
    { time: '11:00', status: 'available' },
    { time: '11:30', status: 'available' },
    { time: '12:00', status: 'available' },
    { time: '12:30', status: 'available' },
    { time: '13:00', status: 'available' },
    { time: '13:30', status: 'available' },
  ] },
  { date: '18 Temmuz', day: 'Cum', slots: [
    { time: '09:00', status: 'available' },
    { time: '09:30', status: 'available' },
    { time: '10:00', status: 'available' },
    { time: '10:30', status: 'available' },
    { time: '11:00', status: 'available' },
    { time: '11:30', status: 'available' },
    { time: '12:00', status: 'available' },
    { time: '12:30', status: 'available' },
    { time: '13:00', status: 'available' },
    { time: '13:30', status: 'available' },
  ] },
  { date: '19 Temmuz', day: 'Cts', slots: [
    { time: '09:00', status: 'available' },
    { time: '09:30', status: 'available' },
    { time: '10:00', status: 'available' },
    { time: '10:30', status: 'available' },
    { time: '11:00', status: 'full' },
    { time: '11:30', status: 'available' },
    { time: '12:00', status: 'available' },
    { time: '12:30', status: 'available' },
    { time: '13:00', status: 'available' },
    { time: '13:30', status: 'full' },
  ] },
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

// Doktor seçme component'i (örnekteki gibi)
const DoctorSelector = ({ doctors, selectedIdx, onSelect, branchName }) => {
  const handlePrev = () => {
    onSelect((selectedIdx - 1 + doctors.length) % doctors.length);
  };

  const handleNext = () => {
    onSelect((selectedIdx + 1) % doctors.length);
  };

  const selectedDoctor = doctors[selectedIdx];

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12 mb-8 w-full max-w-5xl mx-auto px-4">
      {/* Sol: Büyük dairede doktor info */}
      <div className="flex-shrink-0 flex flex-col items-center justify-between bg-white rounded-full shadow-2xl w-[420px] h-[420px] overflow-hidden p-8">
        <div className="flex flex-col items-center w-full flex-1 justify-start">
          <div className="text-xl text-gray-500 font-medium mb-3 text-center">{branchName} Diş Kliniği</div>
          <div className="text-3xl font-bold text-gray-800 mb-2 leading-tight break-words text-center">{selectedDoctor.name}</div>
          <div className="text-lg text-gray-600 font-medium text-center">{selectedDoctor.specialty}</div>
        </div>
        <div className="flex flex-col items-center justify-end w-full flex-1 mt-2">
          <img
            src={selectedDoctor.image}
            alt={selectedDoctor.name}
            className="w-64 h-64 object-cover rounded-full border-4 border-white shadow-2xl bg-gray-100"
            style={{objectPosition: 'center top'}}
          />
        </div>
        {/* Oklar ve noktalar dairenin altında ortalanmış */}
        <div className="flex flex-col items-center justify-center w-full mt-4">
          <div className="flex items-center justify-center gap-6 mb-2">
            <button
              onClick={handlePrev}
              className="group w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="group w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="flex items-center gap-2">
            {doctors.map((_, idx) => (
              <div
                key={idx}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  idx === selectedIdx 
                    ? 'bg-gradient-to-r from-[#2bb3ea] to-[#0f4f78] scale-125' 
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Sağ: Boş alan veya ileride takvim kutusu için yer */}
      <div className="flex-1" />
    </div>
  );
};

// Saat seçici component
const TimePicker = ({ days, selectedDayIdx, setSelectedDayIdx, selectedSlot, setSelectedSlot }) => {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-2xl min-w-[340px]">
      <div className="flex items-end justify-between mb-6">
        {days.map((day, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedDayIdx(idx)}
            className={`flex flex-col items-center px-2 py-1 rounded-xl transition-all duration-200 ${selectedDayIdx === idx ? 'bg-gradient-to-t from-[#2bb3ea] to-[#0f4f78] text-white scale-110 shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            <span className="text-xs font-bold mb-1">{day.date}</span>
            <span className="text-xs font-medium">{day.day}</span>
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {days[selectedDayIdx].slots.map((slot, idx) => (
          <button
            key={idx}
            disabled={slot.status !== 'available'}
            onClick={() => setSelectedSlot(slot.time)}
            className={`py-2 px-4 rounded-xl text-sm font-bold border transition-all duration-200
              ${slot.status === 'available' && selectedSlot === slot.time ? 'bg-gradient-to-r from-[#2bb3ea] to-[#0f4f78] text-white border-[#2bb3ea] scale-105 shadow-lg' : ''}
              ${slot.status === 'available' && selectedSlot !== slot.time ? 'bg-white text-[#0f4f78] border-[#2bb3ea] hover:bg-[#e6f7fd]' : ''}
              ${slot.status === 'full' ? 'bg-gray-200 text-gray-400 border-gray-300 line-through cursor-not-allowed' : ''}
              ${slot.status === 'closed' ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed' : ''}
            `}
          >
            {slot.status === 'closed' ? 'Kapalı' : slot.time + (slot.status === 'full' ? ' (Dolu)' : '')}
          </button>
        ))}
      </div>
    </div>
  );
};

// 5. Adım: İletişim Formu
const ContactForm = ({ name, setName, phone, setPhone, onSubmit, submitting, selectedDay, selectedSlot, onEdit }) => {
  return (
    <form className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-lg mx-auto flex flex-col gap-6" onSubmit={e => { e.preventDefault(); onSubmit(); }}>
      {/* Özet ve düzenle */}
      <div className="flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-xl p-4 mb-2">
        <div className="flex-1">
          <div className="text-sm text-gray-500">Seçilen Randevu</div>
          <div className="font-bold text-lg text-gray-800">{selectedDay?.date} ({selectedDay?.day}) - {selectedSlot}</div>
        </div>
        <button
          type="button"
          onClick={onEdit}
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#2bb3ea] to-[#0f4f78] text-white font-semibold shadow hover:from-[#0f4f78] hover:to-[#2bb3ea] transition-all"
        >
          Düzenle
        </button>
      </div>
      <div>
        <label className="block text-lg font-bold mb-2 text-gray-700">Ad Soyad</label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#2bb3ea] focus:ring-2 focus:ring-[#2bb3ea] outline-none text-lg transition-all"
          placeholder="Adınızı ve soyadınızı girin"
        />
      </div>
      <div>
        <label className="block text-lg font-bold mb-2 text-gray-700">Telefon Numarası</label>
        <input
          type="tel"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          required
          pattern="^05\d{9}$"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#2bb3ea] focus:ring-2 focus:ring-[#2bb3ea] outline-none text-lg transition-all"
          placeholder="05XXXXXXXXX"
        />
        <span className="text-xs text-gray-400">Başında 0 olacak şekilde, örn: 05XXXXXXXXX</span>
      </div>
      <div className="bg-blue-50 border-l-4 border-blue-400 text-blue-800 p-4 rounded-xl text-base flex items-center gap-2">
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        Randevu talebiniz alınacak, en kısa sürede aranacaksınız.
      </div>
      <button
        type="submit"
        disabled={submitting || !name || !/^05\d{9}$/.test(phone)}
        className="w-full bg-gradient-to-r from-[#2bb3ea] to-[#0f4f78] text-white font-bold py-3 rounded-lg shadow-lg hover:from-[#0f4f78] hover:to-[#2bb3ea] transition-all text-lg tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? 'Gönderiliyor...' : 'Randevuyu Tamamla'}
      </button>
    </form>
  );
};

const AppointmentWizard = () => {
  const [step, setStep] = useState(1);
  const [selectedCityIdx, setSelectedCityIdx] = useState(0);
  const [selectedBranchIdx, setSelectedBranchIdx] = useState(0);
  const [selectedDoctorIdx, setSelectedDoctorIdx] = useState(0);
  const [selectedDayIdx, setSelectedDayIdx] = useState(1);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [animate, setAnimate] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitting, setSubmitting] = useState(false);

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
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl p-8 transition-all duration-500 flex flex-col">
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
              branchName={selectedBranch}
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
        {/* 4. Adım: Tarih ve Saat seçimi */}
        {step === 4 && (
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 transition-all duration-500">
            {/* Sol: Doktor info dairesi */}
            <DoctorSelector
              doctors={doctors}
              selectedIdx={selectedDoctorIdx}
              onSelect={setSelectedDoctorIdx}
              branchName={selectedBranch}
            />
            {/* Sağ: Takvim ve saat seçici + butonlar */}
            <div className="flex flex-col items-center gap-6">
              <TimePicker
                days={days}
                selectedDayIdx={selectedDayIdx}
                setSelectedDayIdx={setSelectedDayIdx}
                selectedSlot={selectedSlot}
                setSelectedSlot={setSelectedSlot}
              />
              <div className="flex justify-between w-full gap-4 mt-4">
                <button
                  className="w-1/2 bg-gray-200 text-gray-700 font-bold py-3 rounded-lg shadow hover:bg-gray-300 transition-all text-lg"
                  onClick={() => setStep(3)}
                >
                  Geri
                </button>
                <button
                  className="w-1/2 bg-gradient-to-r from-[#2bb3ea] to-[#0f4f78] text-white font-bold py-3 rounded-lg shadow-lg hover:from-[#0f4f78] hover:to-[#2bb3ea] transition-all text-lg tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={() => selectedSlot && setStep(5)}
                  disabled={!selectedSlot}
                >
                  Devam Et
                </button>
              </div>
            </div>
          </div>
        )}
        {/* 5. Adım: İletişim ve onay */}
        {step === 5 && (
          <div className="flex flex-col items-center justify-center min-h-[400px]">
            <ContactForm
              name={name}
              setName={setName}
              phone={phone}
              setPhone={setPhone}
              submitting={submitting}
              selectedDay={days[selectedDayIdx]}
              selectedSlot={selectedSlot}
              onEdit={() => setStep(4)}
              onSubmit={() => {
                setSubmitting(true);
                setTimeout(() => {
                  setSubmitting(false);
                  alert('Randevu talebiniz başarıyla alındı!');
                }, 1500);
              }}
            />
          </div>
        )}
        {/* Diğer adımlar buraya eklenecek */}
      </div>
    </section>
  );
};

export default AppointmentWizard; 