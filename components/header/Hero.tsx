import Image from "next/image";
import React from "react";
import HeroGround from "../../app/images/bg.svg";
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
  // return (
  //   <div className="Tajawal relative h-screen w-full">
  //     <Image
  //       src={HeroGround}
  //       className="z-[-1] absolute inset-0 object-cover "
  //       alt="hero"
  //     />
  //     <div className="  relative z-20 items-center overflow-hidden">
  //       <div className="ml-[20px] mr-0 flex relative ">
  //         <div className="hidden sm:block sm:w-full lg:w-3/5 relative pt-[115px]">
  //           <Image
  //             src={HeroImage}
  //             className="max-w-xs md:max-w-[37rem] w-full float-right mt-8 h-full"
  //             alt="hero"
  //           />
  //         </div>

  //         <div className="sm:w-[80%] lg:w-[856px] sm:h-[80vh] lg:h-[100vh] flex flex-col relative z-20 bg-black bg-opacity-80 pt-[145px] pr-[100px] pl-[55px]">
  //           <h1 className="pl-[18px]  pt-10 pb-8 tajawal text-end font-bold sm:text-[70px] text-[95px] flex flex-col leading-[81px] tracking-wide dark:text-white text-gray-800">
  //             هيا نصنع البرمجيات معا
  //           </h1>
  //           <p className="text-end text-sm font-bold sm:text-[36px] text-gray-700 leading-[43.2px] dark:text-white">
  //             حلول تكنولوجيا المعلومات عالية الجودة لمساعدتك في مشاكلك المتعلقة
  //             بالتكنولوجيا
  //           </p>
  //           <div className="mt-8  w-11/12 md:w-8/12 xl:w-full">
  //             <div className=" rounded-md w-[80%] relative float-right ">
  //               <button className="absolute h-full left-[-50px] text-[22px]  bg-[#5665AE] text-white w-[40%] rounded-l-md  rounded-br-full rounded-tl-full">
  //                 طلب خدمة
  //               </button>
  //               <input
  //                 type="text"
  //                 name="q"
  //                 className="text-end w-full p-5 rounded-full rounded-l-none border-2 border-gray-300   dark:text-gray-300 dark:border-none rounded-tl-full rounded-bl-full focus-visible:border-none focus-visible:outline-none focus-visible:ring-0"
  //                 placeholder="ادخل بريدك الالكتروني"
  //               />
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="w-full bg-white h-[20vh]">
  //       <div className=" bg-white shadow-lg shadow-gray-700/10 mb-7 w-[80%] mx-auto py-5 rounded-3xl  ">
  //         <div className="w-[80%] mx-auto grid grid-cols-5 gap-4 ">
  //           {Imges.map((image) => (
  //             <div
  //               key={image.id}
  //               className="col-span-5 sm:col-span-10 lg:col-span-1 w-[70%]">
  //               <Image
  //                 src={image.src}
  //                 className="w-full h-full object-cover"
  //                 alt="hero"
  //               />
  //             </div>
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <section className=" h-[100vh]   ">
      <Image
        src={HeroGround}
        className="z-[-1] absolute inset-0 object-cover "
        alt="hero"
      />
      <div className=" absolute top-0 right-0 left-1/2 bottom-0   bg-black bg-opacity-80 ">
        {/* <div className="h-[100vh] grid lg:grid-cols-2 items-center justify-items-center gap-2">
          <div className="w-full h-[100vh] order-1 lg:order-1  ">
            <img
              className=" xl:mt-[17%] lg:mt-[20%] relative xl:left-[8rem] lg:left-[0rem] xl:w-[591px] xl:h-[560px] object-cover lg:w-[591px] lg:h-[520px] "
              src="/IMG.svg"
              alt=""
            />
          </div>

          <div className="pl-[13%] pr-[25px] h-[100vh] order-2 lg:order-2  flex flex-col justify-center lg:items-start text-center sm:text-left ">
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
          </div>
        </div> */}

        {/* <div>
          {
            <div className="bg-white shadow-lg shadow-gray-700/10 mb-7 w-[80%] h-[80%] mx-auto grid grid-cols-5 gap-4 ">
              {Imges.map((image) => (
                <div
                  key={image.id}
                  className="col-span-5 sm:col-span-10 lg:col-span-1 w-[70%]">
                  <Image
                    src={image.src}
                    className="w-full h-full object-cover"
                    alt="hero"
                  />
                </div>
              ))}
            </div>
          }
        </div> */}
      </div>
    </section>
  );
}
