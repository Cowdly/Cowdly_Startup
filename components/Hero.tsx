import Image from "next/image";
import React from "react";
import HeroGround from "../public/Group 1000005857.svg";
import HeroImage from "../public/IMG.svg";

export default function Hero() {
  return (
    <div className="Tajawal relative h-screen w-full">
      <Image
        src={HeroGround}
        className="z-[-1] absolute inset-0 object-cover "
        alt="hero"
      />
      <div className="  relative z-20 items-center overflow-hidden">
        <div className="ml-[20px] mr-0 flex relative ">
          <div className="hidden sm:block sm:w-full lg:w-3/5 relative pt-[115px]">
            <Image
              src={HeroImage}
              className="max-w-xs md:max-w-[37rem] w-full float-right mt-8"
              alt="hero"
            />
          </div>

          <div className="sm:w-[80%] lg:w-[856px] sm:h-[80vh] lg:h-[90vh] flex flex-col relative z-20 bg-black bg-opacity-80 pt-[145px] pr-[100px] pl-[55px]">
            <h1 className="pl-[18px]  pt-10 pb-8 tajawal text-end font-bold sm:text-[70px] text-[95px] flex flex-col leading-[81px] tracking-wide dark:text-white text-gray-800">
              هيا نصنع البرمجيات معا
            </h1>
            <p className="text-end text-sm font-bold sm:text-[36px] text-gray-700 leading-[43.2px] dark:text-white">
              حلول تكنولوجيا المعلومات عالية الجودة لمساعدتك في مشاكلك المتعلقة
              بالتكنولوجيا
            </p>
            <div className="mt-8  w-11/12 md:w-8/12 xl:w-full">
              <div className=" rounded-md w-[80%] relative float-right ">
                <button className="absolute h-full left-[-50px] text-[22px]  bg-[#5665AE] text-white w-[40%] rounded-l-md  rounded-br-full rounded-tl-full">
                  طلب خدمة
                </button>
                <input
                  type="text"
                  name="q"
                  className="text-end w-full p-5 rounded-full rounded-l-none border-2 border-gray-300   dark:text-gray-300 dark:border-none rounded-tl-full rounded-bl-full focus-visible:border-none focus-visible:outline-none focus-visible:ring-0"
                  placeholder="ادخل بريدك الالكتروني"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="...">
                <Image src={HeroImage} alt="hero" />
              </div>
              <div className="...">02</div>
              <div className="...">03</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
