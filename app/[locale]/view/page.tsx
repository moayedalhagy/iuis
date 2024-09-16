// app/components/SwiperSlider.js
"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const SwiperSlider = () => {
  return (
    <div className="bg-grey-900 flex min-h-screen items-center justify-center">
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView={2}
        autoplay={{ delay: 5000 }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
        spaceBetween={70}
        loop
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        className="h-[500px] w-full bg-blue-900"
      >
        <SwiperSlide className="relative h-[400px] w-[400px] overflow-hidden rounded-lg bg-gradient-to-r from-red-700 to-purple-900 shadow-lg">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/487.svg"
            alt="Giratina"
            className="h-full w-full object-contain grayscale transition-all duration-700 ease-in-out"
          />
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent p-4 text-white">
            <h4 className="text-xl font-semibold">Giratina</h4>
            <span>Ghost, Dragon</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative h-[400px] w-[300px] overflow-hidden rounded-lg bg-gradient-to-r from-red-700 to-purple-900 shadow-lg">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/384.svg"
            alt="Rayquaza"
            className="h-full w-full object-contain grayscale transition-all duration-700 ease-in-out"
          />
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent p-4 text-white">
            <h4 className="text-xl font-semibold">Rayquaza</h4>
            <span>Dragon, Flying</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative h-[400px] w-[300px] overflow-hidden rounded-lg bg-gradient-to-r from-red-700 to-purple-900 shadow-lg">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/646.svg"
            alt="Kyrum"
            className="h-full w-full object-contain grayscale transition-all duration-700 ease-in-out"
          />
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent p-4 text-white">
            <h4 className="text-xl font-semibold">Kyrum</h4>
            <span>Dragon, Ice</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative h-[400px] w-[300px] overflow-hidden rounded-lg bg-gradient-to-r from-red-700 to-purple-900 shadow-lg">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/249.svg"
            alt="Lugia"
            className="h-full w-full object-contain grayscale transition-all duration-700 ease-in-out"
          />
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent p-4 text-white">
            <h4 className="text-xl font-semibold">Lugia</h4>
            <span>Psychic, Flying</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative h-[400px] w-[300px] overflow-hidden rounded-lg bg-gradient-to-r from-red-700 to-purple-900 shadow-lg">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/383.svg"
            alt="Groudon"
            className="h-full w-full object-contain grayscale transition-all duration-700 ease-in-out"
          />
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent p-4 text-white">
            <h4 className="text-xl font-semibold">Groudon</h4>
            <span>Ground</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
