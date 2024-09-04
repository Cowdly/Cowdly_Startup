"use client";
import { useState } from 'react';
import JobApplicationForm from './applyNow';
import JobList from './jobsList';

export default function Page() {
    const [isFormVisible, setFormVisible] = useState(false);

    const handleApplyClick = () => {
        setFormVisible(true);
    };

    const handleCloseForm = () => {
        setFormVisible(false);
    };

    return (
        <div className=" min-h-screen font-sans flex items-center justify-center" dir="rtl">
            <div className="mx-auto container px-4 sm:px-6 lg:px-8">
                <div className="text-right mb-4">
                    <span className="text-gray-500">الرئيسية / </span>
                    <span className="font-semibold">التوظيف</span>
                </div>

                <h1 className="text-4xl font-bold mb-8 text-right">التوظيف</h1>

                <div className="bg-[#5665AE] rounded-3xl shadow-lg p-6">
                    <div className="flex items-center mb-4">
                        <div className="flex-grow bg-[#4E7ABE] rounded-full p-2 ml-2">
                            <div className="flex items-center">
                                <input
                                    type="text"
                                    placeholder="ادخل كلمة البحث هنا..."
                                    className="bg-transparent border-none focus:outline-none flex-grow text-right text-white placeholder-purple-200"
                                />
                            </div>
                        </div>
                        <button className="bg-[#4E7ABE] text-white hover:bg-purple-100 rounded-full px-8 py-2 font-semibold">
                            بحث
                        </button>
                    </div>

                    <div className="flex justify-between items-center space-x-4 rtl:space-x-reverse">
                        <select className="select select-info w-full max-w-xs bg-[#4E7ABE] rounded-full p-3 ml-2 text-white">
                            <option disabled selected>Select language</option>
                            <option>English</option>
                            <option>Japanese</option>
                            <option>Italian</option>
                        </select>

                        <select className="select select-info w-full max-w-xs bg-[#4E7ABE] rounded-full p-3 ml-2 text-white">
                            <option disabled selected>Select language</option>
                            <option>English</option>
                            <option>Japanese</option>
                            <option>Italian</option>
                        </select>

                        <select className="select select-info w-full max-w-xs bg-[#4E7ABE] rounded-full p-3 ml-2 text-white">
                            <option disabled selected>Select language</option>
                            <option>English</option>
                            <option>Japanese</option>
                            <option>Italian</option>
                        </select>
                    </div>
                </div>

                <div className="mt-10">
                    <JobList onApplyClick={handleApplyClick} />
                </div>
            </div>

            {isFormVisible && (
                <div
                    onClick={handleCloseForm}
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <JobApplicationForm />
                </div>
            )}
        </div>
    );
}
