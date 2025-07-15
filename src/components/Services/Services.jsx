import React from 'react'
import Heading from '../Heading'
import ServiceItems from './ServiceItems'
import { servicesData } from '../../data/data'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import 'swiper/css'

const Services = () => {
  return (
    <section name='services' className="py-8 md:py-20 bg-white scroll-pt-24 ">
      <div className="w-full max-w-none px-0">
        <Heading  title='Hizmetlerimiz'/>
        {/* Swiper ile otomatik ve elle kaydırılabilen hizmetler */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={8}
          slidesPerView={'auto'}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          grabCursor={true}
          style={{paddingBottom: 16}}
        >
          {servicesData.map((item, index) => (
            <SwiperSlide key={index} style={{minWidth: 200, maxWidth: 280, width: '100%', height: 280, display: 'flex', flexDirection: 'column'}}>
              <ServiceItems item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Services