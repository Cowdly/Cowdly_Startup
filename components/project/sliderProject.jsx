import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import styles from './project.module.css';
import cover1 from '../../app/images/download.jpeg';
import cover2 from '../../app/images/download2.jpeg';
import cover3 from '../../app/images/images (1).jpeg';
import cover4 from '../../app/images/images (2).jpeg';
import Image from 'next/image';
import { ArrowRight } from '@phosphor-icons/react';

const cardData = [
  { id: 1, src: cover1, alt: 'Cover 1', text: 'VR training App for a manufacturing company' },
  { id: 2, src: cover2, alt: 'Cover 2', text: 'VR training App for a manufacturing company' },
  { id: 3, src: cover3, alt: 'Cover 3', text: 'VR training App for a manufacturing company' },
  { id: 4, src: cover4, alt: 'Cover 4', text: 'VR training App for a manufacturing company' },
  { id: 5, src: cover1, alt: 'Cover 5', text: 'VR training App for a manufacturing company' },
  { id: 6, src: cover2, alt: 'Cover 6', text: 'VR training App for a manufacturing company' },
];

const Slider = ({ timeline, ease }) => {
  // Refs for the slides
  const covers = useRef([]);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (timeline && !hasAnimated) {
      // Create GSAP timeline if not already created
      const tl = gsap.timeline();

      tl.fromTo(covers.current[0], { x: -1200, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease })
        .fromTo(covers.current[0], { scale: 1.6 }, { scale: 1, duration: 1.2, ease }, "-=0.8")
        .fromTo(covers.current[1], { y: 1200, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease })
        .fromTo(covers.current[1], { scale: 1.6 }, { scale: 1, duration: 1.2, ease }, "-=0.8")
        .fromTo(covers.current[2], { y: 1200, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease })
        .fromTo(covers.current[2], { scale: 1.6 }, { scale: 1, duration: 1.2, ease }, "-=0.8")
        .fromTo(covers.current[3], { x: 1200, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease })
        .fromTo(covers.current[3], { scale: 1.6 }, { scale: 1, duration: 1.2, ease }, "-=0.8");

      tl.eventCallback('onComplete', () => setHasAnimated(true)); // Mark as animated when complete
    }
  }, [timeline, ease, hasAnimated]);

  // Intersection Observer to trigger animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          gsap.to(covers.current, { autoAlpha: 1 }); // Ensure elements are visible before animation
          timeline.play();
        }
      },
      { threshold: 0.5 } // Trigger animation when 50% of the component is in view
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
  }, [timeline, hasAnimated]);

  return (
    <div className={styles.slider}>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
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
                loading='lazy'
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
