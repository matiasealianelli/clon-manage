import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "/src/styles/Reviews styles/Reviews.css";
import reviews from "./data-reviews.json";
import { useState } from "react";

export default function ReviewsCards() {
  const [showAll, setShowAll] = useState(false);
  setShowAll;
  return (
    <>
      <Swiper
        className="swiper"
        modules={[Autoplay]}
        speed={3000}
        loop={true}
        grabCursor={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        spaceBetween={40}
        autoplay={true}
        slidesPerView={3}>
        {reviews.slice(showAll).map((reviews) => (
          <SwiperSlide key={reviews.id} className="swiper-slide">
            <img className="image-review" src={reviews.image} alt="" />
            <h3 className="name-review">{reviews.name}</h3>
            <p className="description-review">{reviews.description}</p>
          </SwiperSlide>
        ))}
        ;
      </Swiper>
    </>
  );
}
