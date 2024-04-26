import { Swiper, SwiperSlide } from "swiper/react";
import "./Slider.css";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

export default function Slider() {
  return (
    <div className="relative">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="sliderContainer"
      >
        <SwiperSlide>
          <img
            src="../../assets/img/imgSlider1.jpg"
            alt="Playa de San Juan de la Arena"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../../../../src/presentation/assets/img/imgSlider2.jpg"
            alt="Playa de San Juan de la Arena"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../../../../src/presentation/assets/img/imgSlider3.jpg"
            alt="Playa de San Juan de la Arena"
          />
        </SwiperSlide>
      </Swiper>
      <h1 className="sliderTitle">
        CIÓN <br /> CULTURAL ARENESCA <br /> DE FESTEJOS
      </h1>
    </div>
  );
}
