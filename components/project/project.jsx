import { useEffect } from 'react';
import { gsap, Power3 } from 'gsap';
import Slider from "./sliderProject";

const Project = () => {
  let t1 = new gsap.timeline();
  let ease = Power3.easeOut();

  useEffect(() => {
    gsap.fromTo(
      '.header',
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, []);

  return (
    <div className="relative z-30    p-5 bg-[#f5f5f5b3] mx-auto" id="projects">
        <h1 className="header p-3 mb-3 text-4xl font-bold text-blue-500 relative">
          Projects
          <div className="bg-[rgb(126,126,191)] w-[5vw] h-1 absolute left-2% my-1"></div>
        </h1>
      <div className="relative z-50 flex mb-3 mt-3 items-center justify-center">
        <div className="w-full relative">
          <Slider timeline={t1} ease={ease}  />
        </div>
      </div>
    </div>
  );
};

export default Project;
