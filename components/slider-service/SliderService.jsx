import {FC, useState} from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";

export const SliderService = ({
  image
}) => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className='slide-service'>
      <Swiper
        style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {
          image.map((img,index) => (
            
            <SwiperSlide key={index}>
              <img src={img} />
            </SwiperSlide>
          ))
        }
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {
          image.map((img, index) => (
            
            <SwiperSlide key={index}>
              <img src={img} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}
