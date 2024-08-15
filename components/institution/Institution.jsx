import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import style from './institution.module.css';

function Institution() {
  const contentRef = useRef(null);
  const contentInnerBoldRef = useRef(null);
  const paraRef = useRef(null);

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
  }, []);

  return (
    <div>
      <div className={`${style.content} ${style.container}`} ref={contentRef}>
        <h1 className={style.contentInnerBold} ref={contentInnerBoldRef}>
          <div>حول المؤسسة</div>
        </h1>
        <p className={style.para} ref={paraRef}>
          مؤسسة تقنية تهتم بتطوير الانظمة المتكاملة وتطبيقات الهواتف الذكية بإستخدام اخر التقنيات وتهتم المؤسسة بشكل خاص بالتطبيقات والانظمة التي تخدم التعليم
        </p>
      </div>
    </div>
  );
}

export default Institution;
