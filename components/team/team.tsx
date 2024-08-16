import { useEffect } from "react";
import { gsap } from "gsap";
import TeamSlider from "./teamSlider";

const Team = () => {
    
  useEffect(() => {
    gsap.fromTo(
      ".header",
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, []);

  return (
    <div
      className="relative   h-[90vh] p-5 bg-[#f5f5f5b3] mx-auto"
      id="projects"
    >
      <h1 className="header p-3 mb-3 text-4xl font-bold text-blue-500 relative text-end">
        فريقنا
       </h1>
      <div className="relative z-50 flex mb-3 mt-3 items-center justify-center">
        <div className="w-full relative">
            <TeamSlider/>
         </div>
      </div>
    </div>
  );
};

export default Team;
