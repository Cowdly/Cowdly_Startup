import React from 'react'
import Image from 'next/image';
import { CgArrowLongUp } from "react-icons/cg";
import UPphoto from "@/public/Group 143725869.svg";
import Dowenphoto from "@/public/Group.svg";

export default function ContactUs() {

    function toggleButton(button) {
        button.classList.toggle('bg-[#3F3F3F]');
        button.classList.toggle('text-[#fff]');

        const buttons = document.querySelectorAll('button');
        buttons.forEach((btn) => {
            if (btn !== button) {
                btn.classList.remove('bg-[#3F3F3F]', 'text-[#fff]');
            }
        });
    }
    return (
        <div class="grid grid-cols-12 items-center  mt-[6rem] max-w-6xl max-lg:max-w-3xl mx-auto rounded-lg orbitron">
            <div class="lg:col-span-9  w-[100%]  items-center gap-14 sm:p-8 p-4 font-[sans-serif]">

                <div class="p-6 rounded-lg orbitron">
                    <h1 class="text-3xl  text-[#5665AE] text-[58px] font-semibold leading-[42px] pb-5">Contact Us !</h1>
                    <p class="text-sm font-semibold text-gray-800 mb-5">What can we do for you?</p>

                    <div class="mb-20 space-y-4 max-lg:mt-4">
                        <button type="button" className='px-4 py-2  mr-4 rounded-full text-[#3F3F3F] leading-[42px]  text-[16px] tracking-wider font-semibold  outline-none  border-2 border-gray-300' onClick={(e) => toggleButton(e.target)}>Product Design</button>
                        <button type="button" className='px-4 py-2  mr-4 rounded-full text-[#3F3F3F]  leading-[42px] text-[16px] tracking-wider font-semibold  outline-none  border-2 border-gray-300' onClick={(e) => toggleButton(e.target)}>Website Development</button>
                        <button type="button" className='px-4 py-2   mr-4 rounded-full text-[#3F3F3F] leading-[42px] text-[16px] tracking-wider font-semibold  outline-none  border-2 border-gray-300' onClick={(e) => toggleButton(e.target)}>Mobile Apps developmet</button>


                    </div>

                    <form>
                        <div class="space-y-4 mt-8">
                            <input type="text" placeholder="Full Name"
                                class="text-xl px-2 py-3 bg-white w-full text-gray-800 border-b border-gray-300 focus:border-blue-600 outline-none" />



                            <input type="email" placeholder="Email"
                                class="text-xl px-2 py-3 bg-white w-full text-gray-800 border-b border-gray-300 focus:border-blue-600 outline-none" />

                            <textarea placeholder="Project details"
                                class="text-xl px-2 pt-3 bg-white w-full text-gray-800  border-b border-gray-300 focus:border-blue-600 outline-none"></textarea>
                        </div>
                        <div className='mt-8 grid grid-cols-2 gap-3 '>
                            <button type="button"
                                class="mt-8 flex items-center justify-center text-sm w-[127px] h-[51px] rounded-full bg-[#5665AE]  text-white">
                                <CgArrowLongUp className='rotate-[75deg] float-right text-[45px]' />
                            </button>

                            <div>
                                <Image className=' float-right' src={Dowenphoto} alt="contact" width={140} height={200} />
                            </div>
                        </div>
                    </form>


                </div>
            </div>
            <div className='lg:col-span-3 '>
                <div className='w-[196.65px] h-[207.28px] relative '>
                    <div className='w-[60px] h-[60px] rounded-full bg-[#5665AE] absolute top-[10px] left-[48px] z-[-1] '></div>
                    <Image src={UPphoto} alt="contact" width={196.65} height={207.28} />
                </div>
                <div className='mb-6'>
                    <h4 className='text-[#898989] text-[16px] font-semibold ' >Phone</h4>
                    <p className='font-semibold'>+1 (833) 520-3712</p>
                </div>
                <div>
                    <h4 className='text-[#898989] text-[16px] font-semibold '>Email</h4>
                    <p className='font-semibold'>Hello@conceptsoftworks.com</p>
                </div>
            </div>
        </div >
    )
}
