import React from 'react';
import './Testimonial.css';
import data from './Testimonial.json';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function Testimonial() {
  return (
    <section id='testimonials'>
      <h2>Testimonial</h2>
      <Swiper className='container testimonial-container'
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }
      }
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
      >
        {
          data.map(({ avatar, name, review,designation }, index) => {
            return (
              

                <SwiperSlide key={index} className='testimonial'>
                  <div className='client-avatar'>
                    <img src={avatar} alt="" />
                  </div>
                  <h4 className='client-name'>{name}</h4>
                  <h5 className='client-designation'>{designation}</h5>
                  <small className='client-review'>
                    {review}
                  </small>
                </SwiperSlide>
              
            )
          }

          )
        }

      </Swiper>
    </section>
  )
}
