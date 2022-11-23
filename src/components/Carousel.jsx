import React from "react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import data from "./dataCarousel";

import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

import style from "../scss/components/carousel.module.scss";

function Carousel() {
  return (
    <div className={style.container}>
      <div className={style.swiperContainer}>
        <Swiper
          id="carousel"
          modules={[Pagination, Autoplay, Navigation]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          pagination={{
            el: ".pagination",
            clickable: true,
            type: "bullets",
          }}
          slidersPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            enabled: true,
          }}
        >
          {data &&
            data.map((el) => (
              <SwiperSlide key={el.id}>
                <img src={el.img} alt="Turismo argentina" />
              </SwiperSlide>
            ))}
          <div className={`swiper-button-prev ${style.manejador}`}></div>
          <div className={`swiper-button-next ${style.manejador}`}></div>
        </Swiper>
      </div>
      <div className={`pagination ${style.pagination}`} />
      {/* If we need navigation buttons */}
    </div>
  );
}

export default Carousel;
