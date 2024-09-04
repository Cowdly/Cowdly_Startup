import Image from "next/image";
import React from "react";
import HeroGround from "../../public/heroGround.png";
import HeroImage from "../../app/images/IMG.svg";
import UnderHero from "../../app/images/image 182.svg";

export default function Hero() {
  const Imges = [
    {
      id: 1,
      src: UnderHero,
    },
    {
      id: 2,
      src: UnderHero,
    },

    {
      id: 3,
      src: UnderHero,
    },
    {
      id: 4,
      src: UnderHero,
    },
    {
      id: 5,
      src: UnderHero,
    },
  ];
  return (
    <div className="Tajawal  h-[100%] w-full">
      <Image
        src={HeroGround}
        className="z-[-1] absolute inset-0 object-cover "
        alt="hero"
      />
      <div className=" xl:container mx-auto flex relative z-20 items-center overflow-hidden">
        <div className=" mr-0 flex relative 2xl:h-[100vh] xl:h-[90vh] lg:h-[70vh] md:h-[52vh] ">
          <div className="hidden sm:block sm:w-full xl:w-3/5 xl:h-full lg:w-[60%] lg:h-[70vh] relative pt-[115px] ">
            <Image
              src={HeroImage}
              className=" xl:w-full lg:w-[79%] md:w-[90%] lg:h-[54vh] md:h-[38vh] float-right xl:h-full"
              alt="hero"
            />
          </div>

          <div className="xl:container mx-auto  xl:w-[856px] lg:w-[700px] md:w-[700px] sm:h-[80vh]  flex flex-col relative z-20 pt-[12%] xl:pl-[3%]">
            <h1 className="pl-16  xl:pb-10 lg:pb-8 tajawal text-end font-bold sm:text-[70px] xl:text-[70px] lg:text-[60px] md:text-[50px] md:pb-0  flex flex-col lg:leading-[81px] sm:leading-[81px] tracking-wide dark:text-white text-gray-800">
              هيا نصنع البرمجيات معا
            </h1>
            <p className="xl:text-[36px] lg:text-[33px] md:text-[20px] text-end text-sm font-bold sm:text-[36px] text-gray-700 leading-[43.2px] dark:text-white">
              حلول تكنولوجيا المعلومات عالية الجودة لمساعدتك في مشاكلك المتعلقة
              بالتكنولوجيا
            </p>
            <div className="mt-8 w-11/12 md:w-8/12 xl:w-full xl:block hidden">
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
          </div>
        </div>
      </div>
      <div className="sm:block hidden ">
        <div className="w-[80%] mx-auto flex justify-around ">
          {Imges.map((image) => (
            <div
              key={image.id}
              className="col-span-5 sm:col-span-10 lg:col-span-1">
              <Image src={image.src} className="object-cover p-2" alt="hero" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // return (
  //   <section className=" w-full h-[100vh]   ">
  //     <img src="/heroGround.png" className=" w-full h-[100vh]" alt="hero" />
  //     <div className="xl:container m-auto fixed inset-x-0 top-0 z-50 mx-auto  max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-xl">
  //       <div>
  //         <div className="hidden sm:block sm:w-full lg:w-3/5 relative pt-[115px]">
  //           <Image
  //             src={HeroImage}
  //             className="max-w-xs md:max-w-[37rem] w-full float-right mt-8 h-full"
  //             alt="hero"
  //           />
  //         </div>
  //       </div>
  //     </div>

  //     {/* <div>
  //         {
  //           <div className="bg-white shadow-lg shadow-gray-700/10 mb-7 w-[80%] h-[80%] mx-auto grid grid-cols-5 gap-4 ">
  //             {Imges.map((image) => (
  //               <div
  //                 key={image.id}
  //                 className="col-span-5 sm:col-span-10 lg:col-span-1 w-[70%]">
  //                 <Image
  //                   src={image.src}
  //                   className="w-full h-full object-cover"
  //                   alt="hero"
  //                 />
  //               </div>
  //             ))}
  //           </div>
  //         }
  //       </div> */}
  //   </section>
  // );
}
