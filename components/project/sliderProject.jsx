import { useEffect, useRef, useState, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
// import { gsap } from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { ArrowRight } from '@phosphor-icons/react';
import { FaArrowLeft } from "react-icons/fa6";
import cover1 from '../../app/images/Projects 21838.svg';


const cardData = [
  { id: 1, src: cover1, alt: 'Cover 1', text: 'مشروع اول قوي متجر الكتروني شيق' },
  { id: 2, src: cover1, alt: 'Cover 2', text: 'مشروع اول قوي متجر الكتروني شيق' },
  { id: 3, src: cover1, alt: 'Cover 3', text: 'مشروع اول قوي متجر الكتروني شيق' },
  { id: 4, src: cover1, alt: 'Cover 4', text: 'مشروع اول قوي متجر الكتروني شيق' },
  { id: 5, src: cover1, alt: 'Cover 5', text: 'مشروع اول قوي متجر الكتروني شيق' },
  { id: 6, src: cover1, alt: 'Cover 6', text: 'مشروع اول قوي متجر الكتروني شيق' },
];

const Slider = ({ timeline, ease }) => {
  const coverRefs = useRef([]);
  const [hasAnimated, setHasAnimated] = useState(false);

  // const animateSlides = useCallback(() => {
  //   if (timeline && !hasAnimated) {
  //     const covers = coverRefs.current;

  //     if (covers.length < 4) {
  //       console.error('Not all refs are set');
  //       return;
  //     }

  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: '.swiper-container',
  //         start: 'top center',
  //         end: 'bottom center',
  //         scrub: true,
  //         onEnter: () => tl.play(),
  //         onLeaveBack: () => tl.reverse()
  //       }
  //     });

  //     tl.fromTo(covers[0], { x: -1200, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease })
  //       .fromTo(covers[0], { scale: 1.6 }, { scale: 1, duration: 1.2, ease }, "-=.8")
  //       .fromTo(covers[1], { y: 1200, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease })
  //       .fromTo(covers[1], { scale: 1.6 }, { scale: 1, duration: 1.2, ease }, "-=0.8")
  //       .fromTo(covers[2], { y: 1200, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease })
  //       .fromTo(covers[2], { scale: 1.6 }, { scale: 1, duration: 1.2, ease }, "-=0.8")
  //       .fromTo(covers[3], { x: 1200, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease })
  //       .fromTo(covers[3], { scale: 1.6 }, { scale: 1, duration: 1.2, ease }, "-=0.8");

  //     tl.eventCallback('onComplete', () => setHasAnimated(true));
  //   }
  // }, [timeline, ease, hasAnimated]);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   animateSlides();
  // }, [animateSlides]);

  return (
    <div className="xl:container mx-auto swiper-container w-full relative">
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        className="mySwiper"
      >
        {cardData.map((card, index) => (
          <SwiperSlide
            className="w-[20%] text-[24px]" // إزالة translate-x لبدء السلايدر من اليسار
            key={card.id}>
            <div
              ref={(el) => coverRefs.current[index] = el}
              class="relative flex w-full max-w-xs flex-col rounded-lg border border-gray-100 bg-white shadow-md">
              <div class="flex h-[20rem]">
                <Image class="object-cover" src={card.src} alt={card.alt} />
                <div className='absolute top-0 left-0 m-2 flex gap-2'>
                  <span class="rounded-sm bg-white px-2 text-center text-sm font-medium text-black">2D</span>
                  <span class="rounded-sm bg-white px-2 text-center text-sm font-medium text-black">AR/VR/MR</span>
                  <span class="rounded-sm bg-white px-2 text-center text-sm font-medium text-black">3D</span>
                </div>
              </div>
              <div
                style={{
                  boxShadow: "-50px -56px 121px 6px #fbf9f9;"
                }}
                class="bg-white pt-4 px-5 pb-5 hover:bg-[#3F3F3F] hover:text-white transition-all">
                <div>
                  <p class="text-right tracking-tight">{card.text}</p>
                </div>
                <div className='flex justify-end mt-4'>
                  <button href="#" class="p-2 flex items-center justify-center rounded-full bg-slate-900 text-center text-sm font-medium text-white hover:bg-[#615AA6] focus:outline-none focus:ring-4 focus:ring-blue-300">
                    <FaArrowLeft className="rounded-full" size={25} weight="bold" />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );



};





export default Slider;
