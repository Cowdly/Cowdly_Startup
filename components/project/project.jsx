import { useEffect } from 'react';
import { gsap,Power3 } from 'gsap';
import style from "./project.module.css";
import Slider from "./sliderProject";

const Project = () => {
  let t1=new gsap.timeline()
  let ease = Power3.easeOut()

  useEffect(() => {
    gsap.fromTo(
      '.header',
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, duration: 1 }
    );
  
  }, []);

  return (
    <div
      className={`mx-auto ${style.content}`}
      id="projects"
    >
      <div className="position-relative z-50 d-flex mb-3 mt-3 align-items-center justify-content-center">
        <h1 className={`header p-3 mb-3 text-4xl font-bold text-[blue]  `}>
          Projects
          <div className={style.line2}></div>
        </h1>
        <div className="slider-container">
          <Slider timeline={t1} ease={ease}/>
        </div>
      </div>
    </div>
  );
};

export default Project;
