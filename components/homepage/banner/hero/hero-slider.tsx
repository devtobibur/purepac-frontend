"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const HeroSlider = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        modules={[Autoplay, EffectFade]}
        effect={"fade"}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative h-[450px] w-full">
            <Image src="/images/banner/banner_01.png" alt="hero" fill />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[450px] w-full">
            <Image src="/images/banner/banner_02.png" alt="hero" fill />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[450px] w-full">
            <Image src="/images/banner/banner_03.png" alt="hero" fill />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
