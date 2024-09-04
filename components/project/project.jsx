import { useEffect } from 'react';
// import { gsap, Power3 } from 'gsap';
import Slider from "./sliderProject";

const Project = () => {
  // let t1 = new gsap.timeline();
  // let ease = Power3.easeOut();

  // useEffect(() => {
  //   gsap.fromTo(
  //     '.header',
  //     { opacity: 0, y: -100 },
  //     { opacity: 1, y: 0, duration: 1 }
  //   );
  // }, []);

  return (
    <div className="xl:container m-auto relative z-30 p-5" id="projects">
      <div className='flex justify-between items-center'>
        <img className='w-[139.41px] h-[128px]' src="/star.svg" alt="" />
        <h1 className="p-3 mb-3 text-[58px] font-medium text-blue-500 relative">
          المشاريع
        </h1>
      </div>
      <div className="relative z-50 flex mb-3 mt-3 items-center justify-center">
        <div className="w-full relative">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Project;
