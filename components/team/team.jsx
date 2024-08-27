import { useEffect } from "react";
import { gsap } from "gsap";


const Team = () => {





  const profiles = [
    { name: 'محمد', title: 'مطور واجهة خلفية', imageSrc: '/julian-gentilezza-9qd0iQ8otbU-unsplash 1.png' },
    { name: 'احمد', title: 'مطور واجهة امامية', imageSrc: '/gabriel-arancibia-wYvCXc-xUTg-unsplash 1.png' },
    { name: 'ايميلي', title: 'مطور واجهة امامية', imageSrc: '/junior-reis-sx1x4lXBrqc-unsplash 1.png' },
  ];

  return (
    <section class="py-24 bg-gray-50">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="header">
          <h1 className="p-3 mb-3 text-[58px] font-medium text-blue-500 text-end">
            فريق العمل
          </h1>

        </div>
        <div class="flex justify-between items-center flex-col lg:flex-row md:mt-20">
          <div class="w-full lg:w-1/2">
            <h2
              class="font-manrope text-5xl text-gray-900 font-bold leading-[4rem] mb-7 text-center lg:text-left">
              Our leading, strong & creative team</h2>
            <p class="text-lg text-gray-500 mb-16 text-center lg:text-left">These people work on making our
              product best.</p>
            <button class="cursor-pointer py-3 px-8 w-60 bg-indigo-600 text-white text-base font-semibold transition-all duration-500 block text-center rounded-full hover:bg-indigo-700 mx-auto lg:mx-0">Join
              our team</button>
          </div>

          <div class="w-full lg:w-1/2 lg:mt-0 md:mt-40 mt-16 max-lg:max-w-2xl">
            <div class="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 gap-8">

              <div class="relative group">
                <img src="https://pagedone.io/asset/uploads/1696238644.png" alt="Team tailwind section"
                  class="w-44 h-56 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0" />
                <div class="absolute left-[4px] right-0 bottom-0 bg-black bg-opacity-70 text-white p-2 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-500 ease-in-out rounded-b-2xl">
                  <h3 class="text-center">Member 1</h3>
                  <p class="text-center">Developer</p>
                </div>
              </div>


              <div class="relative group">
                <img src="https://pagedone.io/asset/uploads/1696238665.png" alt="Team tailwind section"
                  class="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mx-auto" />
                <div class="absolute left-[2px] right-[2px] bottom-[-3px] bg-black bg-opacity-70 text-white p-2 transform translate-y-full opacity-0 group-hover:translate-y-[-82px] group-hover:opacity-100 transition-transform duration-500 ease-in-out rounded-b-2xl">
                  <h3 class="text-center">Member 2</h3>
                  <p class="text-center">Designer</p>
                </div>
              </div>


              <div class="relative group">
                <img src="https://pagedone.io/asset/uploads/1696238684.png" alt="Team tailwind section"
                  class="w-44 h-56 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0 md:ml-0" />
                <div class="absolute left-0 right-[5px] bottom-0 bg-black bg-opacity-70 text-white p-2 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-500 ease-in-out rounded-b-2xl">
                  <h3 class="text-center">Member 3</h3>
                  <p class="text-center">Project Manager</p>
                </div>
              </div>


              <div class="relative group">
                <img src="https://pagedone.io/asset/uploads/1696238702.png" alt="Team tailwind section"
                  class="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0 md:ml-auto" />
                <div class="absolute left-[4px] right-[-1px] bottom-0 bg-black bg-opacity-70 text-white p-2 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-500 ease-in-out rounded-b-2xl">
                  <h3 class="text-center">Member 4</h3>
                  <p class="text-center">QA Engineer</p>
                </div>
              </div>

              <div class="relative group">
                <img src="https://pagedone.io/asset/uploads/1696238720.png" alt="Team tailwind section"
                  class="w-44 h-56 rounded-2xl object-cover md:-mt-20 mx-auto min-[450px]:mr-0 md:mx-auto" />
                <div class="absolute left-[2px] right-[3px] bottom-0 bg-black bg-opacity-70 text-white p-2 transform translate-y-full opacity-0 group-hover:translate-y-[-81px] group-hover:opacity-100 transition-transform duration-500 ease-in-out rounded-b-2xl">
                  <h3 class="text-center">Member 5</h3>
                  <p class="text-center">UX Designer</p>
                </div>
              </div>


              <div class="relative group">
                <img src="https://pagedone.io/asset/uploads/1696238737.png" alt="Team tailwind section"
                  class="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0" />
                <div class="absolute left-0 right-[5px] bottom-0 bg-black bg-opacity-70 text-white p-2 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-500 ease-in-out rounded-b-2xl">
                  <h3 class="text-center">Member 6</h3>
                  <p class="text-center">Marketing Specialist</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>


    </section >

  );
};

export default Team;
