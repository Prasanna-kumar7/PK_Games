// ImageSlider.jsx
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const ImageSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const slides = [
    {
      id: 1,
      image: "https://i.ibb.co/mCCWPNhd/Assassins-creed-shadows-big1.png",
      title: "Hero in Action",
    },
    {
      id: 2,
      image: "https://i.ibb.co/hx5YCb1S/Assassins-creed-shadows-big2.png",
      title: "Battle Arena",
    },
    {
      id: 3,
      image: "https://i.ibb.co/F4KD7mfc/Assassins-creed-shadows-big3.png",
      title: "Skill Showcase",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Main Swiper */}
      <Swiper
        modules={[Thumbs, Navigation]}
        thumbs={{ swiper: thumbsSwiper }}
        navigation
        spaceBetween={10}
        className="mainSwiper rounded-xl overflow-hidden"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-[400px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        watchSlidesProgress
        className="thumbSwiper mt-4"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-[80px] object-cover rounded-md cursor-pointer"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
