import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/images/slider1.png";
import img2 from "../../assets/images/slider4.png";
import img3 from "../../assets/images/prod1.png";
import img4 from "../../assets/images/prod3.png";

// import required modules
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
export default function Slider() {
  const images = [img1, img2, img3, img4];

  return (
    <div>
      <Swiper
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {images.map((img, i) => {
          return (
            <SwiperSlide key={i}>
              <div
                className={`w-full m-auto flex gap-5 sm:gap-10 justify-center items-center slider-background${
                  i <= 4 ? i + 1 : (i = 1)
                }`}
              >
                <img src={img} alt="" className="w-1/2 h-52 sm:h-72" />
                <div className="desc">
                  <h2 className="sm:text-2xl slider-color-1">هناك خصم كبير</h2>
                  <h1 className="sm:text-3xl slider-color-1 font-bold">
                    خصم يصل 50% عند شرائك
                  </h1>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
