import React from 'react'

export default function Product() {
    return (
        <section class="py-24 mt-[100px] ">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 class="font-manrope text-4xl font-bold text-gray-900 text-center mb-14">Our popular blogs</h2>
                <div class="flex justify-center mb-14 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">


                    <div className="group cursor-pointer w-full max-lg:max-w-xl lg:w-[22rem] lg:h-[22rem] border border-gray-300 rounded-2xl overflow-hidden relative transition-all duration-300 hover:border-indigo-600">
                        <img
                            src="https://pagedone.io/asset/uploads/1696244553.png"
                            alt="Harsh image"
                            className="rounded-lg w-full h-full object-cover"
                        />
                        <div
                            className="absolute bottom-0 left-0 right-0 bg-white p-5 transform translate-y-full group-hover:translate-y-0 transition-all duration-300"
                        >
                            <h4 className="text-gray-900 font-medium leading-8 mb-4">
                                Fintech 101: Exploring the Basics of Electronic Payments
                            </h4>
                            <div className="flex items-center justify-between font-medium">
                                <h6 className="text-sm text-gray-500">By Harsh C.</h6>
                                <span className="text-sm text-indigo-600">2 years ago</span>
                            </div>
                        </div>
                    </div>




                    <div className="group cursor-pointer w-full max-lg:max-w-xl lg:w-[22rem] lg:h-[22rem] border border-gray-300 rounded-2xl overflow-hidden relative transition-all duration-300 hover:border-indigo-600">
                        <img
                            src="https://pagedone.io/asset/uploads/1696244553.png"
                            alt="Harsh image"
                            className="rounded-lg w-full h-full object-cover"
                        />
                        <div
                            className="absolute bottom-0 left-0 right-0 bg-white p-5 transform translate-y-full group-hover:translate-y-0 transition-all duration-300"
                        >
                            <h4 className="text-gray-900 font-medium leading-8 mb-4">
                                Fintech 101: Exploring the Basics of Electronic Payments
                            </h4>
                            <div className="flex items-center justify-between font-medium">
                                <h6 className="text-sm text-gray-500">By Harsh C.</h6>
                                <span className="text-sm text-indigo-600">2 years ago</span>
                            </div>
                        </div>
                    </div>




                    <div className="group cursor-pointer w-full max-lg:max-w-xl lg:w-[22rem] lg:h-[22rem] border border-gray-300 rounded-2xl overflow-hidden relative transition-all duration-300 hover:border-indigo-600">
                        <img
                            src="https://pagedone.io/asset/uploads/1696244553.png"
                            alt="Harsh image"
                            className="rounded-lg w-full h-full object-cover"
                        />
                        <div
                            className="absolute bottom-0 left-0 right-0 bg-white p-5 transform translate-y-full group-hover:translate-y-[0px] transition-all duration-300"
                        >
                            <h4 className="text-gray-900 font-medium leading-8 mb-4">
                                Fintech 101: Exploring the Basics of Electronic Payments
                            </h4>
                            <div className="flex items-center justify-between font-medium">
                                <h6 className="text-sm text-gray-500">By Harsh C.</h6>
                                <span className="text-sm text-indigo-600">2 years ago</span>
                            </div>
                        </div>
                    </div>




                </div>
                <a href="javascript:;" class="cursor-pointer border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 flex justify-center items-center text-gray-900 font-semibold mx-auto transition-all duration-300 hover:bg-gray-100">View All</a>
            </div>
        </section>

    )
}
