import React from 'react'
import Heading from '../Heading'
import ServiceItems from './ServiceItems'
import { servicesData } from '../../data/data'
import Marquee from 'react-fast-marquee'

const Services = () => {
  return (
    <section name='services' className="py-20 bg-white scroll-pt-24 ">
      <div className="w-full max-w-none px-0">
        <Heading  title='Hizmetlerimiz'/>
        {/* react-fast-marquee ile otomatik kayan hizmetler */}
        <Marquee
          gradient={false}
          speed={30}
          pauseOnHover={true}
          pauseOnClick={true}
          style={{width: '100%', gap: '24px'}}
        >
          {servicesData.map((item, index) => (
            <div key={index} style={{minWidth: 320, maxWidth: 320, height: 340, marginRight: 24, display: 'flex', flexDirection: 'column'}}>
              <ServiceItems item={item} />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}

export default Services