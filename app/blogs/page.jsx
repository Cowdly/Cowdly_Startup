
import React from 'react'
import BlogCard from './blogsCard'

export default function Blogs() {
    return (
        <div className="container mt-[150px] mx-auto min-h-screen">
            <div className="flex flex-col">
                <div className="py-8">
                    <div className="container mx-auto px-4 text-end">
                        <h1 className="text-4xl font-bold text-gray-800 mb-2">اكتشف اخر المقالات</h1>
                    </div>
                </div>
                <div className="py-8 h-[685.09px]">
                    <div className="container h-full mx-auto px-4 flex flex-col md:flex-row">
                        <div className="w-full md:w-1/4">
                            <div>
                                <h2 className="text-xl text-right font-bold text-gray-800">الأكثر شيوعاً</h2>

                                <div className="max-w-2xl mt-7 mx-auto overflow-hidden">
                                    <div className="p-0">
                                        <div className="flex items-center justify-end">
                                            <div className="w-2/3">
                                                <p className="text-[15px] font-medium text-center mb-2">هذا النص هو مثال لنص يمكن استبداله في نفس المكان هنا</p>
                                            </div>
                                            <div className="relative">
                                                <img
                                                    src="https://images.unsplash.com/photo-1506157786151-b8491531f063"
                                                    alt="Person using smartphone"
                                                    className="object-cover w-[75px] h-[75px] rounded-[10px]"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Repeat for other items */}

                            </div>
                        </div>

                        <div className="relative w-full md:w-3/4 px-4 mt-8 md:mt-0">
                            <img src="https://images.unsplash.com/photo-1506157786151-b8491531f063" alt="Blog Featured Image" className="w-[987.13px] h-full rounded-[40px] mb-8" />
                            <p className="text-end absolute bottom-[90px] right-[60px] lg:text-[20px] md:text-[15px] w-[54%] font-bold leading-[50px] text-white lg:block hidden">هذا النص هو مثال لنص يمكن استبداله في نفس المكان هنا في هذا المكان بالتحديد</p>
                        </div>
                    </div>
                </div>
            </div>
            <BlogCard />
        </div>
    );

}
