import style from "./project.module.css";
import Slider from "./sliderProject";

const Project = () => {

  return (
    <div
      className={`mx-auto  ${style.content} `}
      id="projects"
    >
      <div className="position-relative  z-50 d-flex mb-3 mt-3 align-items-center justify-content-center">
        <h1 className="  px-3 mb-3 text-3xl   text-[blue]">
          projects
        </h1>
        <Slider />
      </div>
    </div>
  );
};

export default Project;
