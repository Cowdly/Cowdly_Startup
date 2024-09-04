import React from 'react';
// import { Users, Code, Palette, Megaphone } from 'lucide-react';

const OrgChart = () => {
    return (
        <div className=" mt-[150px] p-8 font-arabic" dir="rtl">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8 text-purple-800">الهيكل التنظيمي</h1>

                <div className="flex flex-col items-center">
                    <div class="relative group">
                        <img src="https://pagedone.io/asset/uploads/1696238644.png" alt="Team tailwind section"
                            class="w-44 h-56 rounded-2xl object-cover   mx-auto min-[450px]:mr-0" />
                        <div class="absolute left-[4px] right-0 bottom-0 bg-black bg-opacity-70 text-white p-2 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-500 ease-in-out rounded-b-2xl">
                            <h3 class="text-center">Member 1</h3>
                            <p class="text-center">Developer</p>
                        </div>
                    </div>

                    <div className="w-px h-8 bg-gray-400"></div>

                    <div className="bg-purple-500 text-white p-3 rounded-lg mb-4">
                        <p className="font-bold">الإدارة ورؤساء الأقسام</p>
                    </div>

                    <div className="w-px h-8 bg-gray-400"></div>

                    <div className="  grid grid-cols-2 md:grid-cols-3 gap-7  rtl:space-x-reverse mb-4">
                        {['محمد عارف', 'محمد هشام', 'زياد خالد'].map((name, index) => (

                            <div class="relative group" key={index}>
                                <img src="https://pagedone.io/asset/uploads/1696238644.png" alt="Team tailwind section"
                                    class="w-44 h-56 rounded-2xl object-cover   mx-auto min-[450px]:mr-0" />
                                <div class="absolute left-[4px] right-0 bottom-0 bg-black bg-opacity-70 text-white p-2 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-500 ease-in-out rounded-b-2xl">
                                    <h3 class="text-center">{name}</h3>
                                    <p class="text-center">Developer</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-px h-8 bg-gray-400"></div>

                    <div className="bg-purple-300 text-purple-800 p-3 rounded-lg mb-4">
                        <p className="font-bold">فريق البرمجة والتطوير</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-7 mb-8">
                        {['عمر الرفاعي', 'اسامة الراشد', 'محمد خميس', 'يوسف السماوي'].map((name, index) => (
                            <div class="relative group" key={index}>
                                <img src="https://pagedone.io/asset/uploads/1696238644.png" alt="Team tailwind section"
                                    class="w-44 h-56 rounded-2xl object-cover   mx-auto min-[450px]:mr-0" />
                                <div class="absolute left-[4px] right-0 bottom-0 bg-black bg-opacity-70 text-white p-2 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-500 ease-in-out rounded-b-2xl">
                                    <h3 class="text-center">{name}</h3>
                                    <p class="text-center">Developer</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
                        {['حسين محمد', 'محمود', 'عبدة', 'سناء', 'يوسف', 'بلال'].map((name, index) => (
                            <div class="relative group" key={index}>
                                <img src="https://pagedone.io/asset/uploads/1696238644.png" alt="Team tailwind section"
                                    class="w-44 h-56 rounded-2xl object-cover   mx-auto min-[450px]:mr-0" />
                                <div class="absolute left-[4px] right-0 bottom-0 bg-black bg-opacity-70 text-white p-2 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-500 ease-in-out rounded-b-2xl">
                                    <h3 class="text-center">{name}</h3>
                                    <p class="text-center">Developer</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-8">
                        {['محمود', 'سارة', 'زينب'].map((name, index) => (
                            <div class="relative group" key={index}>
                                <img src="https://pagedone.io/asset/uploads/1696238644.png" alt="Team tailwind section"
                                    class="w-44 h-56 rounded-2xl object-cover   mx-auto min-[450px]:mr-0" />
                                <div class="absolute left-[4px] right-0 bottom-0 bg-black bg-opacity-70 text-white p-2 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-500 ease-in-out rounded-b-2xl">
                                    <h3 class="text-center">{name}</h3>
                                    <p class="text-center">Developer</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-px h-8 bg-gray-400"></div>

                    <div className="bg-gray-300 text-gray-800 p-3 rounded-lg mb-4">
                        <p className="font-bold">فريق التسويق</p>
                    </div>

                    <div className="flex justify-center  space-x-10 rtl:space-x-reverse">
                        {['محمد سعيد', 'عبدالله عبدالرحمن', 'عماد احمد'].map((name, index) => (
                            <div class="relative group" key={index}>
                                <img src="https://pagedone.io/asset/uploads/1696238644.png" alt="Team tailwind section"
                                    class="w-44 h-56 rounded-2xl object-cover   mx-auto min-[450px]:mr-0" />
                                <div class="absolute left-[4px] right-0 bottom-0 bg-black bg-opacity-70 text-white p-2 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-500 ease-in-out rounded-b-2xl">
                                    <h3 class="text-center">{name}</h3>
                                    <p class="text-center">Developer</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrgChart;