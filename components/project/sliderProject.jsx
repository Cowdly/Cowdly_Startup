import { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { ArrowRight } from '@phosphor-icons/react';
import cover1 from '../../app/images/Projects 21838.svg';


const cardData = [
  { id: 1, src: cover1, alt: 'Cover 1', text: 'VR training App for a manufacturing company' },
  { id: 2, src: cover1, alt: 'Cover 2', text: 'VR training App for a manufacturing company' },
  { id: 3, src: cover1, alt: 'Cover 3', text: 'VR training App for a manufacturing company' },
  { id: 4, src: cover1, alt: 'Cover 4', text: 'VR training App for a manufacturing company' },
  { id: 5, src: cover1, alt: 'Cover 5', text: 'VR training App for a manufacturing company' },
  { id: 6, src: cover1, alt: 'Cover 6', text: 'VR training App for a manufacturing company' },
];

const Slider = ({ timeline, ease }) => {
  const coverRefs = useRef([]);
  const [hasAnimated, setHasAnimated] = useState(false);

  const animateSlides = useCallback(() => {
    if (timeline && !hasAnimated) {
      const covers = coverRefs.current;

      if (covers.length < 4) {
        console.error('Not all refs are set');
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.swiper-container',
          start: 'top center',
          end: 'bottom center',
          scrub: true,
          onEnter: () => tl.play(),
          onLeaveBack: () => tl.reverse()
        }
      });

      tl.fromTo(covers[0], { x: -1200, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease })
        .fromTo(covers[0], { scale: 1.6 }, { scale: 1, duration: 1.2, ease }, "-=.8")
        .fromTo(covers[1], { y: 1200, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease })
        .fromTo(covers[1], { scale: 1.6 }, { scale: 1, duration: 1.2, ease }, "-=0.8")
        .fromTo(covers[2], { y: 1200, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease })
        .fromTo(covers[2], { scale: 1.6 }, { scale: 1, duration: 1.2, ease }, "-=0.8")
        .fromTo(covers[3], { x: 1200, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease })
        .fromTo(covers[3], { scale: 1.6 }, { scale: 1, duration: 1.2, ease }, "-=0.8");

      tl.eventCallback('onComplete', () => setHasAnimated(true));
    }
  }, [timeline, ease, hasAnimated]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    animateSlides();
  }, [animateSlides]);

  return (
    <div className="swiper-container w-full   relative">
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        className='w-full h-[55vh]  grid grid-cols-4 gap-2'
      >
        {cardData.map((card, index) => (
          <SwiperSlide key={card.id} className="text-center  text-xl bg-white p-0 flex justify-center items-center h-[55vh]">
            <div
              ref={(el) => coverRefs.current[index] = el}
              className="h-[55vh] relative overflow-hidden w-full group"
            >
              <Image
                className="rounded-3   transition-transform duration-300 ease-in-out  h-full w-full object-cover"
                src={card.src}
                alt={card.alt}
                width={500}
                height={500}

                loading='lazy'
              />
              <div className="absolute inset-0 bottom-0 bg-black bg-opacity-50 flex flex-col rounded-2xl items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <p className="absolute bottom-0 h-[40%] bg-black bg-opacity-87 text-white text-xl px-12 py-2.5 w-full translate-y-full transition-transform duration-300 transform group-hover:translate-y-0">
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
