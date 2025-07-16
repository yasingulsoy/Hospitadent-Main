import React from 'react'
import { useTranslation } from 'react-i18next'
import Heading from '../Heading'
import ServiceItems from './ServiceItems'
import { servicesData } from '../../data/data'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

const Services = () => {
  const { t } = useTranslation();
  return (
    <section name='services' className="py-8 md:py-20 bg-white scroll-pt-24 ">
      <div className="w-full max-w-none px-0 relative">
        <Heading  title={t('services.title')}/>
        {/* Swiper ile otomatik ve elle kaydırılabilen hizmetler */}
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={8}
          slidesPerView={'auto'}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          grabCursor={true}
          navigation={{
            nextEl: '.services-next',
            prevEl: '.services-prev',
          }}
          style={{paddingBottom: 16}}
        >
          {servicesData.map((item, index) => (
            <SwiperSlide key={index} style={{minWidth: 200, maxWidth: 280, width: '100%', height: 280, display: 'flex', flexDirection: 'column'}}>
              <ServiceItems item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Modern Ok Butonları */}
        <button className="services-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg border border-blue-100 hover:bg-blue-50 hover:scale-110 transition-all duration-300 w-12 h-12 rounded-full flex items-center justify-center text-blue-700 text-2xl group" aria-label={t('services.prev')}>
          <svg className="w-6 h-6 group-hover:text-[#2bb3ea] transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button className="services-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg border border-blue-100 hover:bg-blue-50 hover:scale-110 transition-all duration-300 w-12 h-12 rounded-full flex items-center justify-center text-blue-700 text-2xl group" aria-label={t('services.next')}>
          <svg className="w-6 h-6 group-hover:text-[#2bb3ea] transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </section>
  )
}

export default Services