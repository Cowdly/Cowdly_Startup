import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

function Institution() {
  const contentRef = useRef(null);
  const contentInnerBoldRef = useRef(null);
  const paraRef = useRef(null);
  const groupRef = useRef(null);
  const rectangle1Ref = useRef(null);
  const rectangle2Ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(contentRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    );
    gsap.fromTo(contentInnerBoldRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: 'power2.out', delay: 0.5 }
    );
    gsap.fromTo(paraRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, ease: 'power2.out', delay: 1 }
    );

    gsap.fromTo(groupRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: 'power2.out', delay: 1.5 }
    );
    gsap.fromTo(rectangle1Ref.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 2 }
    );
    gsap.fromTo(rectangle2Ref.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 2.5 }
    );
  }, []);

  return (
    <div className="relative flex items-end justify-center   w-[30vw] my-[35vh] mx-[15vw] flex-col text-right">
      <div className="relative flex items-end justify-center h-screen w-full flex-col text-right" ref={contentRef}>
        <h1 className="relative font-bold text-[50px] text-[rgba(0,0,255,0.827)] font-[Bigilla] after:content-[''] after:absolute after:left-[-60%] after:top-[-140%] after:bg-cover after:w-[50px] after:h-[50px]" ref={contentInnerBoldRef}>
          <div>حول المؤسسة</div>
        </h1>
        <p className="text-[15px] w-[80%] font-light font-[Poppins]" ref={paraRef}>
          مؤسسة تقنية تهتم بتطوير الانظمة المتكاملة وتطبيقات الهواتف الذكية بإستخدام اخر التقنيات وتهتم المؤسسة بشكل خاص بالتطبيقات والانظمة التي تخدم التعليم
        </p>
      </div>
      <div
        className="absolute left-[-20%] top-[25%] w-[100%] h-[150px]   bg-cover group"
        ref={groupRef}
      ></div>
      <div
        className="absolute left-[18%] top-[22%]   bg-cover w-[50px] h-[50px] rounded-full rectangle"
        ref={rectangle1Ref}
      ></div>
      <div
        className="absolute left-[21%] top-[27%]  bg-cover w-[50px] h-[50px] rounded-full rectangle"
        ref={rectangle2Ref}
      ></div>
    </div>
  );
}

export default Institution;
