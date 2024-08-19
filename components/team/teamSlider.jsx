import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import cover1 from "../../app/images/download.png";
import cover2 from "../../app/images/download (1).png";
import cover3 from "../../app/images/download (2).png";
import { FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi";
import gsap from "gsap";

const cardData = [
  {
    id: 1,
    src: cover1,
    alt: "Cover 1",
    name: "محمد",
    job: "مطور واجهة خلفية",
  },
  {
    id: 2,
    src: cover2,
    alt: "Cover 2",
    name: "احمد",
    job: "مطور واجهة امامية",
  },
  {
    id: 3,
    src: cover3,
    alt: "Cover 3",
    name: "حامد",
    job: "مطور واجهة امامية",
  },
  {
    id: 4,
    src: cover1,
    alt: "Cover 1",
    name: "احمد",
    job: "مطور واجهة خلفية",
  },
  {
    id: 5,
    src: cover2,
    alt: "Cover 1",
    name: "محمد",
    job: "مطور واجهة خلفية",
  },
];

const TeamSlider = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      gsap.fromTo(
        swiperRef.current.querySelectorAll(".swiper-slide"),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.3,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <div className="swiper-container w-full relative back">
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        className="w-full h-[48vh]"
        onSwiper={(swiper) => (swiperRef.current = swiper.el)}
      >
        {cardData.map((card) => (
          <SwiperSlide
            key={card.id}
            className="flex flex-col items-center justify-center h-80 backgroundImage"
            style={{ borderRadius: "10%" }}
          >
            <div
              style={{ borderRadius: "50%" }}
              className="relative w-52 my-5 bg-gray-200 mx-auto h-52 border-b border-gray-100 overflow-hidden"
            >
              <Image
                className="rounded-full"
                src={card.src}
                alt={card.alt}
                layout="fill"
                loading="lazy"
                objectFit="contain"
              />
            </div>
            <div className="flex items-center pt-5">
              <div className="absolute right-10 text-right w-full pt-3 border-t border-gray-100">
                <p className="text-xl font-semibold text-gray-900">
                  {card.name}
                </p>
                <p className="text-lg text-gray-300">{card.job}</p>
              </div>
              <div className="flex space-x-3 mt-2 absolute left-10 justify-center">
                <FiFacebook className="text-gray-600 bg-gray-200 rounded-full p-1 w-8 h-8  hover:text-gray-900" />
                <FiLinkedin className="text-gray-600 bg-gray-200 rounded-full p-1 w-8 h-8  hover:text-gray-900" />
                <FiTwitter className="text-gray-600 bg-gray-200 rounded-full p-1 w-8 h-8  hover:text-gray-900" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TeamSlider;
