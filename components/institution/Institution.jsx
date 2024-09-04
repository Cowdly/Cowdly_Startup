import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Link from 'next/link';

function Institution() {
  const contentRef = useRef(null);
  const contentInnerBoldRef = useRef(null);
  const paraRef = useRef(null);
  const groupRef = useRef(null);
  const rectangle1Ref = useRef(null);
  const rectangle2Ref = useRef(null);

  // useEffect(() => {
  //   gsap.fromTo(contentRef.current,
  //     { opacity: 0, y: 50 },
  //     { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
  //   );
  //   gsap.fromTo(contentInnerBoldRef.current,
  //     { opacity: 0, x: -50 },
  //     { opacity: 1, x: 0, duration: 1, ease: 'power2.out', delay: 0.5 }
  //   );
  //   gsap.fromTo(paraRef.current,
  //     { opacity: 0, x: 50 },
  //     { opacity: 1, x: 0, duration: 1, ease: 'power2.out', delay: 1 }
  //   );

  //   gsap.fromTo(groupRef.current,
  //     { opacity: 0, scale: 0.8 },
  //     { opacity: 1, scale: 1, duration: 1, ease: 'power2.out', delay: 1.5 }
  //   );
  //   gsap.fromTo(rectangle1Ref.current,
  //     { opacity: 0, y: 50 },
  //     { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 2 }
  //   );
  //   gsap.fromTo(rectangle2Ref.current,
  //     { opacity: 0, y: 50 },
  //     { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 2.5 }
  //   );
  // }, []);

  return (
    <section class="Tajawal mt-10 overflow-hidden md:pt-[100px] md:pb-[100px] sm:pt-16 2xl:pt-28">
      <div class="xl:container  mx-auto  ">
        <div class="grid items-center grid-cols-1 md:grid-cols-2">

          <div class="relative">
            <img class="relative w-full xl:max-w-[40rem] 2xl:origin-bottom 2xl:scale-110" src="/About.svg" alt="" />
          </div>

          <div className='w-[85%] m-auto text-right '>
            <h2 class="text-[58px]  font-medium text-right leading-[42px] text-[#5665AE] sm:text-4xl lg:text-5xl">
              حول المؤسسة
            </h2>
            <p class=" text-right mt-3 text-xl leading-relaxed text-gray-600 dark:text-[#3F3F3F] md:mt-8">
              مؤسسة تقنية ،تهتم بتطوير الأنظمة المتكاملة
              وتطبيقات الهواتف الذكية باستخدام آخر التقنيات
              وتهتم المؤسسة بشكل خاص بالتطبيقات والأنظمة التي تخدم التعليم
            </p>
            <div className="flex justify-end ">
              <Link href="/aboutUs" class="mt-8 cursor-pointer py-3 px-8 w-60 bg-indigo-600 text-white text-base font-semibold transition-all duration-500 block text-center rounded-full hover:bg-indigo-700 mx-auto lg:mx-0">حول المؤسسه</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Institution;
