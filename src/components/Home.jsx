import React from 'react'
import Button from './Button';
import AnimatedCards from './AnimatedCards';

const Home = () => {
  return (
    <section name='home'
      className="w-full bg-white min-h-screen flex flex-col items-center justify-start"
    >
      {/* Üstte boş alan ve randevu animasyonu için yer */}
      <div className="w-full flex flex-col items-center justify-center pt-24 pb-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 font-[Montserrat] tracking-tight">Randevunuzu Kolayca Alın</h2>
        <p className="text-lg text-gray-600 mb-6 text-center max-w-xl">Modern kliniklerimizde hızlı ve güvenli randevu için aşağıdan kliniğinizi seçin veya animasyonlu kartlara göz atın.</p>
        <Button text='Randevu Al' btnStyle="btn-primary text-lg font-semibold px-10 py-4" />
      </div>
      {/* Sonsuz animasyonlu kartlar */}
      <AnimatedCards infinite />
    </section>
  )
}

export default Home