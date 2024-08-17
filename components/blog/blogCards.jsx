import Image from 'next/image';
import frame5 from "../../app/images/Frame (5).svg";
import blogImage from "../../app/images/Rectangle 21845.svg";
import blogImage2 from "../../app/images/istockphoto.jpg";
import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function Cards() {
    useEffect(() => {
        const cards = document.querySelectorAll('.card');
        gsap.fromTo(cards,
            { opacity: 0, x: (i) => (i % 2 === 0 ? -400 : 400), y: (i) => (i < 2 ? -200 : 200) },
            { opacity: 1, x: 0, y: 0, duration: 1, stagger: 0.2, ease: "power2.in" }
        );
    }, []);

    return (
        <div className='grid grid-cols-2 gap-x-16 gap-y-4'>
            {/* Card 1 */}
            <div className="card relative group w-full h-80">
                <Image
                    className="object-cover rounded-3 transition-transform duration-300 ease-in-out"
                    src={blogImage}
                    alt='Blog Image'
                    layout='fill'
                    objectFit='cover'
                    loading='lazy'
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Image
                        className="w-52 h-52"
                        src={frame5}
                        alt='Frame 5'
                        layout='intrinsic'
                    />
                </div>
            </div>
            {/* Card 2 */}
            <div className="card bg-black text-white flex flex-col items-center justify-center w-full h-80">
                <div className="bg-black px-4 sm:px-6 sm:py-12 lg:px-8 flex flex-col h-full justify-center">
                    <h3 className='text-gray-600 text-2xl'>10 July 2022</h3>
                    <h2 className="text-3xl font-bold mt-4 mb-4">
                        VR Training App for a Manufacturing Company
                    </h2>
                    <p className="text-2xl mb-3">
                        <span>Throughout 2021, the company's specialists implemented </span>
                        <span className='text-gray-500 block'> important skill-sharing and community development initiatives</span>
                        <span className='text-gray-700 opacity-60'> as part of their commitment to employee growth </span>
                    </p>
                    <button className="hover:tracking-widest text-left text-white font-bold px-4 rounded focus:outline-none focus:shadow-outline">
                        Read More
                    </button>
                </div>
            </div>
            {/* Card 3 */}
            <div className="card bg-black text-white flex flex-col items-center justify-center w-full h-80">
                <div className="bg-black px-4 sm:px-6 sm:py-12 lg:px-8 flex flex-col h-full justify-center">
                    <h3 className='text-gray-600 text-2xl'>10 July 2022</h3>
                    <h2 className="text-3xl font-bold mt-4 mb-4">
                        VR Training App for a Manufacturing Company
                    </h2>
                    <p className="text-2xl mb-3">
                        <span>Throughout 2021, the company's specialists implemented </span>
                        <span className='text-gray-500 block'> important skill-sharing and community development initiatives</span>
                        <span className='text-gray-700 opacity-60'> as part of their commitment to employee growth </span>
                    </p>
                    <button className="hover:tracking-widest text-left text-white font-bold px-4 rounded focus:outline-none focus:shadow-outline">
                        Read More
                    </button>
                </div>
            </div>
            {/* Card 4 */}
            <div className="card relative group w-full h-80">
                <Image
                    className="object-cover rounded-3 transition-transform duration-300 ease-in-out"
                    src={blogImage2}
                    alt='Blog Image'
                    layout='fill'
                    objectFit='cover'
                    loading='lazy'
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Image
                        className="w-52 h-52"
                        src={frame5}
                        alt='Frame 5'
                        layout='intrinsic'
                    />
                </div>
            </div>
        </div>
    );
}
