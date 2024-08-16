import { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import styles from './project.module.css';
import Image from 'next/image';
import { ArrowRight } from '@phosphor-icons/react';

import cover1 from '../../app/images/download.jpeg';
import cover2 from '../../app/images/download2.jpeg';
import cover3 from '../../app/images/images (1).jpeg';
import cover4 from '../../app/images/images (2).jpeg';

const cardData = [
  { id: 1, src: cover1, alt: 'Cover 1', text: 'VR training App for a manufacturing company' },
  { id: 2, src: cover2, alt: 'Cover 2', text: 'VR training App for a manufacturing company' },
  { id: 3, src: cover3, alt: 'Cover 3', text: 'VR training App for a manufacturing company' },
  { id: 4, src: cover4, alt: 'Cover 4', text: 'VR training App for a manufacturing company' },
  { id: 5, src: cover1, alt: 'Cover 5', text: 'VR training App for a manufacturing company' },
  { id: 6, src: cover2, alt: 'Cover 6', text: 'VR training App for a manufacturing company' },
];

const Slider = ({ timeline, ease }) => {
  const covers = useRef([]);
  const [hasAnimated, setHasAnimated] = useState(false);

  const animateSlides = useCallback(() => {
    if (timeline && !hasAnimated) {
      const tl = gsap.timeline();

      tl.fromTo(covers.current[0], { x: -1200, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease })
        .fromTo(covers.current[0], { scale: 1.6 }, { scale: 1, duration: 1.2, ease }, "-=0.8")
        .fromTo(covers.current[1], { y: 1200, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease })
        .fromTo(covers.current[1], { scale: 1.6 }, { scale: 1, duration: 1.2, ease }, "-=0.8")
        .fromTo(covers.current[2], { y: 1200, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease })
        .fromTo(covers.current[2], { scale: 1.6 }, { scale: 1, duration: 1.2, ease }, "-=0.8")
        .fromTo(covers.current[3], { x: 1200, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease })
        .fromTo(covers.current[3], { scale: 1.6 }, { scale: 1, duration: 1.2, ease }, "-=0.8");

      tl.eventCallback('onComplete', () => setHasAnimated(true));
    }
  }, [timeline, ease, hasAnimated]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          gsap.to(covers.current, { autoAlpha: 1 });
          animateSlides();
        }
      },
      { threshold: 0.5 }
    );

    const sliderElement = document.querySelector(`.${styles.slider}`);
    if (sliderElement) {
      observer.observe(sliderElement);
    }

    return () => {
      if (sliderElement) {
        observer.unobserve(sliderElement);
      }
    };
  }, [animateSlides, hasAnimated]);

  return (
    <div className={styles.slider}>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        className={styles.swiper}
      >
        {cardData.map((card, index) => (
          <SwiperSlide key={card.id} className={styles.card}>
            <div
              ref={(el) => (covers.current[index] = el)}
              className={styles.imageContainer}
            >
              <Image
                className={`rounded-3 ${styles.image}`}
                src={card.src}
                alt={card.alt}
                width={500}
                height={500}
                priority={index < 2}
              />
              <div className={styles.overlay}>
                <p className={styles.text}>
                  {card.text}
                  <ArrowRight className="bg-[#011b3d] rounded-full my-5" size={40} weight="bold" />
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;