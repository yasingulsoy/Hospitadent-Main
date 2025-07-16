import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

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

// Kullanılmayan değişkenler kaldırıldı

// Modern şehir seçici
const CitySelector = ({ cities, selectedCityIdx, onSelect }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-[#004876] mb-6 text-center">Şehir Seçin</h3>
      {/* Mobilde yatay scroll, masaüstünde grid */}
      <div className="flex overflow-x-auto gap-4 pb-4 sm:grid sm:grid-cols-3 md:grid-cols-4 sm:gap-3 sm:overflow-x-visible">
        {cities.map((city, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(idx)}
            className={`min-w-[140px] sm:min-w-0 p-6 sm:p-4 rounded-xl border-2 transition-all duration-200 font-semibold text-base sm:text-sm md:text-base h-20 sm:h-auto flex items-center justify-center ${
              selectedCityIdx === idx
                ? 'bg-gradient-to-r from-[#2bb3ea] to-[#0f4f78] text-white border-[#2bb3ea] shadow-lg scale-105'
                : 'bg-white text-gray-700 border-gray-200 hover:border-[#2bb3ea] hover:bg-gray-50'
            }`}
            style={{ flex: '0 0 auto' }}
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
};

// Modern şube seçici
const BranchSelector = ({ branches, selectedBranchIdx, onSelect }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-[#004876] mb-6 text-center">Şube Seçin</h3>
      {/* Mobilde yatay scroll, masaüstünde grid */}
      <div className="flex overflow-x-auto gap-4 pb-4 sm:grid sm:grid-cols-3 md:grid-cols-4 sm:gap-3 sm:overflow-x-visible">
        {branches.map((branch, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(idx)}
            className={`min-w-[140px] sm:min-w-0 p-6 sm:p-4 rounded-xl border-2 transition-all duration-200 font-semibold text-base sm:text-sm md:text-base h-20 sm:h-auto flex items-center justify-center ${
              selectedBranchIdx === idx
                ? 'bg-gradient-to-r from-[#2bb3ea] to-[#0f4f78] text-white border-[#2bb3ea] shadow-lg scale-105'
                : 'bg-white text-gray-700 border-gray-200 hover:border-[#2bb3ea] hover:bg-gray-50'
            }`}
            style={{ flex: '0 0 auto' }}
          >
            {branch}
          </button>
        ))}
      </div>
    </div>
  );
};

// Modern doktor seçici (yatay scroll)
const DoctorSelector = ({ doctors, selectedIdx, onSelect, branchName }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-[#004876] mb-6 text-center">{branchName} Diş Kliniği - Doktor Seçin</h3>
      {/* Mobilde yatay scroll, masaüstünde grid */}
      <div className="flex overflow-x-auto gap-4 pb-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-4 sm:overflow-x-visible">
        {doctors.map((doctor, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(idx)}
            className={`min-w-[280px] sm:min-w-0 p-6 sm:p-4 rounded-xl border-2 transition-all duration-200 text-left flex flex-col items-center justify-center gap-3 sm:gap-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2bb3ea] focus:z-10 h-48 sm:h-auto ${selectedIdx === idx ? 'bg-gradient-to-r from-[#2bb3ea] to-[#0f4f78] text-white border-[#2bb3ea] shadow-lg scale-105' : 'bg-white text-gray-700 border-gray-200 hover:border-[#2bb3ea] hover:bg-gray-50'} ${selectedIdx === idx ? 'ring-2 ring-[#2bb3ea]' : ''}`}
            style={{ flex: '0 0 auto' }}
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-24 h-24 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-white shadow-md mb-2"
            />
            <div className="font-bold text-lg sm:text-base text-center">{doctor.name}</div>
            <div className="text-sm sm:text-xs opacity-80 text-center">{doctor.specialty}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

// Modern tarih seçici
const DateSelector = ({ days, selectedDayIdx, onSelect }) => {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-bold text-[#004876] mb-4 text-center">Tarih Seçin</h3>
      {/* Mobilde yatay scroll, masaüstünde grid */}
      <div className="flex overflow-x-auto gap-3 pb-4 sm:grid sm:grid-cols-6 sm:gap-2 sm:overflow-x-visible">
        {days.map((day, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(idx)}
            className={`min-w-[100px] sm:min-w-0 p-4 sm:p-3 rounded-lg border-2 transition-all duration-200 h-20 sm:h-auto flex flex-col items-center justify-center ${
              selectedDayIdx === idx
                ? 'bg-gradient-to-r from-[#2bb3ea] to-[#0f4f78] text-white border-[#2bb3ea] shadow-lg scale-105'
                : 'bg-white text-gray-700 border-gray-200 hover:border-[#2bb3ea] hover:bg-gray-50'
            }`}
            style={{ flex: '0 0 auto' }}
          >
            <div className="text-sm sm:text-xs font-bold">{day.date}</div>
            <div className="text-sm sm:text-xs opacity-80">{day.day}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

// Modern saat seçici
const TimeSelector = ({ slots, selectedSlot, onSelect }) => {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-bold text-[#004876] mb-4 text-center">Saat Seçin</h3>
      {/* Mobilde yatay scroll, masaüstünde grid */}
      <div className="flex overflow-x-auto gap-3 pb-4 sm:grid sm:grid-cols-4 md:grid-cols-5 sm:gap-2 sm:overflow-x-visible">
        {slots.map((slot, idx) => (
          <button
            key={idx}
            disabled={slot.status !== 'available'}
            onClick={() => onSelect(slot.time)}
            className={`min-w-[80px] sm:min-w-0 p-4 sm:p-3 rounded-lg border-2 transition-all duration-200 text-base sm:text-sm font-semibold h-16 sm:h-auto flex items-center justify-center ${
              slot.status === 'available' && selectedSlot === slot.time
                ? 'bg-gradient-to-r from-[#2bb3ea] to-[#0f4f78] text-white border-[#2bb3ea] shadow-lg scale-105'
                : slot.status === 'available'
                ? 'bg-white text-gray-700 border-gray-200 hover:border-[#2bb3ea] hover:bg-gray-50'
                : 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
            }`}
            style={{ flex: '0 0 auto' }}
          >
            {slot.status === 'closed' ? 'Kapalı' : slot.time}
          </button>
        ))}
      </div>
    </div>
  );
};

// Modern iletişim formu
const ContactForm = ({ name, setName, phone, setPhone, onSubmit, submitting, selectedDay, selectedSlot, onEdit }) => {
  return (
    <div className="max-w-md mx-auto">
      <h3 className="text-xl font-bold text-[#004876] mb-6 text-center">İletişim Bilgileri</h3>
      
      {/* Seçim özeti */}
      <div className="bg-gray-50 rounded-xl p-4 mb-6">
        <div className="text-sm text-gray-600 mb-2">Seçilen Randevu:</div>
        <div className="font-semibold text-[#004876]">{selectedDay?.date} ({selectedDay?.day}) - {selectedSlot}</div>
        <button
          onClick={onEdit}
          className="text-[#2bb3ea] text-sm font-medium mt-2 hover:underline"
        >
          Düzenle
        </button>
      </div>

      <form onSubmit={e => { e.preventDefault(); onSubmit(); }} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Ad Soyad</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            className="w-full px-4 py-4 sm:py-3 rounded-lg border border-gray-300 focus:border-[#2bb3ea] focus:ring-2 focus:ring-[#2bb3ea] outline-none transition-all text-base"
            placeholder="Adınızı ve soyadınızı girin"
          />
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Telefon Numarası</label>
          <input
            type="tel"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            required
            pattern="^05\d{9}$"
            className="w-full px-4 py-4 sm:py-3 rounded-lg border border-gray-300 focus:border-[#2bb3ea] focus:ring-2 focus:ring-[#2bb3ea] outline-none transition-all text-base"
            placeholder="05XXXXXXXXX"
          />
          <div className="text-xs text-gray-500 mt-1">Başında 0 olacak şekilde, örn: 05XXXXXXXXX</div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 text-blue-800 p-4 rounded-lg text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Randevu talebiniz alınacak, en kısa sürede aranacaksınız.</span>
          </div>
        </div>

        <button
          type="submit"
          disabled={submitting || !name || !/^05\d{9}$/.test(phone)}
          className="w-full bg-gradient-to-r from-[#2bb3ea] to-[#0f4f78] text-white font-bold py-4 sm:py-3 rounded-lg shadow-lg hover:from-[#0f4f78] hover:to-[#2bb3ea] transition-all disabled:opacity-50 disabled:cursor-not-allowed text-base"
        >
          {submitting ? 'Gönderiliyor...' : 'Randevuyu Tamamla'}
        </button>
      </form>
    </div>
  );
};

const AppointmentWizard = () => {
  const { t } = useTranslation();
  const [step, setStep] = useState(1);
  const [selectedCityIdx, setSelectedCityIdx] = useState(0);
  const [selectedBranchIdx, setSelectedBranchIdx] = useState(0);
  const [selectedDoctorIdx, setSelectedDoctorIdx] = useState(0);
  const [selectedDayIdx, setSelectedDayIdx] = useState(1);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitting, setSubmitting] = useState(false);

  // Şehirler listesi
  const cities = branchGroups.map(g => g.city);
  // Seçilen şehirdeki şubeler
  const currentBranches = branchGroups[selectedCityIdx].branches;
  const selectedBranch = currentBranches[selectedBranchIdx];

  return (
    <section id="randevu" className="py-8 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-[#004876]">{t('appointment.title')}</h2>
        
        {/* Adım göstergesi */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {[1,2,3,4].map((n) => (
            <React.Fragment key={n}>
              <div className={`w-8 h-8 flex items-center justify-center rounded-full font-bold text-sm border-2 transition-all duration-300 ${
                step >= n 
                  ? 'bg-[#2bb3ea] text-white border-[#2bb3ea]' 
                  : 'bg-gray-100 text-gray-400 border-gray-200'
              }`}>
                {n}
              </div>
              {n !== 4 && (
                <div className={`w-8 h-1 rounded transition-all duration-300 ${
                  step > n ? 'bg-[#2bb3ea]' : 'bg-gray-200'
                }`}></div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* 1. Adım: Şehir ve Şube Seçimi */}
        {step === 1 && (
          <div className="space-y-8">
            <CitySelector
              cities={cities}
              selectedCityIdx={selectedCityIdx}
              onSelect={setSelectedCityIdx}
            />
            <BranchSelector
              branches={currentBranches}
              selectedBranchIdx={selectedBranchIdx}
              onSelect={setSelectedBranchIdx}
            />
            <div className="flex justify-center">
              <button
                onClick={() => setStep(2)}
                className="bg-gradient-to-r from-[#2bb3ea] to-[#0f4f78] text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:from-[#0f4f78] hover:to-[#2bb3ea] transition-all"
              >
                Devam Et
              </button>
            </div>
          </div>
        )}

        {/* 2. Adım: Doktor Seçimi */}
        {step === 2 && (
          <div>
            <DoctorSelector
              doctors={doctors}
              selectedIdx={selectedDoctorIdx}
              onSelect={setSelectedDoctorIdx}
              branchName={selectedBranch}
            />
            <div className="flex justify-between gap-4">
              <button
                onClick={() => setStep(1)}
                className="flex-1 bg-gray-200 text-gray-700 font-bold py-3 rounded-lg hover:bg-gray-300 transition-all"
              >
                Geri
              </button>
              <button
                onClick={() => setStep(3)}
                className="flex-1 bg-gradient-to-r from-[#2bb3ea] to-[#0f4f78] text-white font-bold py-3 rounded-lg shadow-lg hover:from-[#0f4f78] hover:to-[#2bb3ea] transition-all"
              >
                Devam Et
              </button>
            </div>
          </div>
        )}

        {/* 3. Adım: Tarih ve Saat Seçimi */}
        {step === 3 && (
          <div>
            <DateSelector
              days={days}
              selectedDayIdx={selectedDayIdx}
              onSelect={setSelectedDayIdx}
            />
            <TimeSelector
              slots={days[selectedDayIdx].slots}
              selectedSlot={selectedSlot}
              onSelect={setSelectedSlot}
            />
            <div className="flex justify-between gap-4">
              <button
                onClick={() => setStep(2)}
                className="flex-1 bg-gray-200 text-gray-700 font-bold py-3 rounded-lg hover:bg-gray-300 transition-all"
              >
                Geri
              </button>
              <button
                onClick={() => selectedSlot && setStep(4)}
                disabled={!selectedSlot}
                className="flex-1 bg-gradient-to-r from-[#2bb3ea] to-[#0f4f78] text-white font-bold py-3 rounded-lg shadow-lg hover:from-[#0f4f78] hover:to-[#2bb3ea] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Devam Et
              </button>
            </div>
          </div>
        )}

        {/* 4. Adım: İletişim Bilgileri */}
        {step === 4 && (
          <div>
            <ContactForm
              name={name}
              setName={setName}
              phone={phone}
              setPhone={setPhone}
              submitting={submitting}
              selectedDay={days[selectedDayIdx]}
              selectedSlot={selectedSlot}
              onEdit={() => setStep(3)}
              onSubmit={() => {
                setSubmitting(true);
                setTimeout(() => {
                  setSubmitting(false);
                  alert('Randevu talebiniz başarıyla alındı!');
                }, 1500);
              }}
            />
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setStep(3)}
                className="bg-gray-200 text-gray-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-300 transition-all"
              >
                Geri
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AppointmentWizard; 