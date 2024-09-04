"use client";
import React, { useState, useEffect, useRef } from 'react';
import Lottie from "lottie-react";
import Success from "../../animation/success.json";

function QuestionnaireForm() {
    const [formData, setFormData] = useState({
        projectName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });


    const [submittedData, setSubmittedData] = useState(null);
    const [showInfo, setShowInfo] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [showAnimation, setShowAnimation] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);
    const [resetInfo, setResetInfo] = useState(false);
    const formRef = useRef(null);
    const [formHeight, setFormHeight] = useState(0);

    /**
     * Handles changes to the form data by updating the state with the 
     * new value of the input field that triggered the change event.
     * @param {React.ChangeEvent<HTMLInputElement>} e The change event.
     */
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form fields
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.message) {
            setErrorMessage('Please fill in all required fields.');
            return;
        }

        setSubmittedData(formData);
        setShowInfo(true);
        setErrorMessage('');
    };

    const handleSendRequest = () => {
        setShowAnimation(true);
        setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
                setShowAnimation(false);
                setFadeOut(false);
                setResetInfo(true);

                // Reset the form after the animation
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    message: ''
                });

                // Reset showInfo after info section has moved out
                setTimeout(() => {
                    setShowInfo(false);
                    setResetInfo(false);
                }, 500); // Adjusted to match the duration of the info section movement
            }, 1000); // Duration of fade out effect (1 second)
        }, 3000); // Show animation for 4 seconds before starting fade out
    };

    useEffect(() => {
        if (formRef.current) {
            setFormHeight(formRef.current.clientHeight);
        }
    }, [showInfo]);

    return (
        <div className="container mt-[150px] mx-auto flex flex-wrap relative">

            {/* Animation Overlay */}
            {showAnimation && (
                <div className={`fixed top-0 bottom-0 left-0 right-0 bg-black opacity-70 z-50 flex flex-col items-center justify-center space-y-4 transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-70'}`}>
                    <div className='w-[60%]'>
                        <Lottie animationData={Success} />
                    </div>
                </div>
            )}

            {/* Image Section */}

            <div
                className={`w-full lg:w-1/3 grid grid-rows pt-0 p-8 my-4 ml-auto rounded-2xl shadow-2xl bg-gradient-to-r from-blue-800 to-blue-600 text-white transition-all duration-500 ease-in-out transform ${showInfo ? 'translate-x-[-100%] opacity-0' : resetInfo ? 'translate-x-0 opacity-100' : 'translate-x-0 opacity-100'}`}>
                <div className="flex items-center justify-end gap-3">
                    <img
                        className=""
                        src="/Vector@2x.png"
                        alt=""
                    />
                </div>
                {!showInfo && (
                    <img src="/Programmer-amico.svg" alt="Programmer" className="max-w-full h-auto" />
                )}

            </div>

            {/* Info Section */}
            <div
                className={`grid grid-rows absolute top-0 w-full lg:w-1/3 pt-0 p-8 my-4 ml-auto bg-blue-900 rounded-2xl text-white transition-all duration-500 ease-in-out transform ${showInfo ? 'translate-y-0 opacity-100' : resetInfo ? '-translate-y-full opacity-0' : '-translate-y-full opacity-0'}`}
                style={{ minHeight: formHeight }}
            >
                <div className="flex items-center justify-center gap-3">
                    <img
                        className="w-[85%]"
                        src="/Vector@2x.png"
                        alt=""
                    />
                </div>
                {showInfo && (
                    <div className="">
                        <h1 className="font-bold text-2xl my-4">Submitted Information</h1>
                        {submittedData ? (
                            <div>
                                <p><strong>First Name:</strong> {submittedData.firstName}</p>
                                <p><strong>Last Name:</strong> {submittedData.lastName}</p>
                                <p><strong>Email:</strong> {submittedData.email}</p>
                                <p><strong>Phone:</strong> {submittedData.phone}</p>
                                <p><strong>Message:</strong> {submittedData.message}</p>
                            </div>
                        ) : (
                            <p>No information submitted yet.</p>
                        )}
                    </div>
                )}

                <div className="pt-8 flex items-center justify-center gap-3">
                    <button
                        onClick={handleSendRequest}
                        className="text-white rounded-md flex items-center border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                    >
                        Send Request
                    </button>

                    <button className="text-white rounded-md flex items-center border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                        Reject Request
                    </button>
                </div>
            </div>

            {/* Form Section */}
            <div ref={formRef} className="w-full lg:w-2/3 p-8 my-4 md:px-12 rounded-2xl shadow-2xl flex flex-col">
                <div className="flex items-center justify-end">
                    <h1 className="font-bold uppercase text-5xl">قدم طلبك هنا</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">




                        <select id="countries" class="text-end w-full bg-gray-100 font-medium  text-gray-400 mt-2  rounded-lg focus:outline-none focus:shadow-outline   text-sm  focus:ring-blue-500 focus:border-blue-500 block  p-3   dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option selected>نوع المشروع </option>
                            <option value="web">موقع الكتروني</option>
                            <option value="app">تطبيق هاتف</option>
                        </select>

                        <input
                            className="text-end w-full bg-gray-100 font-medium  text-gray-400 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="اسم المشروع"
                            name="projectName"
                            value={formData.projectName}
                            onChange={handleChange}
                        />
                        <select id="countries" class="text-end w-full bg-gray-100 font-medium  text-gray-400 mt-2  rounded-lg focus:outline-none focus:shadow-outline   text-sm  focus:ring-blue-500 focus:border-blue-500 block  p-3   dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option selected>عدد الصفحات المطلوبه</option>
                            <option value="web">1</option>
                            <option value="app">2</option>
                        </select>

                        <select id="countries" class="text-end w-full bg-gray-100 font-medium  text-gray-400 mt-2  rounded-lg focus:outline-none focus:shadow-outline    text-sm  focus:ring-blue-500 focus:border-blue-500 block  p-3   dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option selected>تخصص المشروع </option>
                            <option value="US">تجاري</option>
                            <option value="CA">تعليمي</option>
                        </select>
                        {/* 
                        <div class="flex items-center ps-4  bg-gray-100 rounded dark:border-gray-700">
                            <label for="bordered-radio-2" class=" text-end w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-400"> لا يوجد تصميم</label>
                            <input id="bordered-radio-2" type="radio" value="" name="bordered-radio" class="ml-4 mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        </div>

                        <div class="flex items-center ps-4  bg-gray-100 rounded dark:border-gray-700">
                            <label for="bordered-radio-1" class=" text-end w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-400"> يوجد تصميم</label>
                            <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="ml-4 mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        </div>
*/}

                        <select id="countries" class="text-end w-full bg-gray-100 font-medium  text-gray-400 mt-2  rounded-lg focus:outline-none focus:shadow-outline    text-sm  focus:ring-blue-500 focus:border-blue-500 block  p-3   dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option selected>هل يوجد لوجو</option>
                            <option value="US">نعم يوجد</option>
                            <option value="CA">لا يوجد</option>
                        </select>

                        <select id="countries" class="text-end w-full bg-gray-100 font-medium  text-gray-400 mt-2  rounded-lg focus:outline-none focus:shadow-outline    text-sm  focus:ring-blue-500 focus:border-blue-500 block  p-3   dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option selected>هل يوجد تصميم</option>
                            <option value="US">نعم يوجد</option>
                            <option value="CA"> لا يوجد</option>
                        </select>

                    </div>
                    <div className="my-4">
                        <textarea
                            placeholder="ضع تفاصيل اكتر "
                            className="text-end w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    {errorMessage && (
                        <div className="text-red-500 mb-4">
                            {errorMessage}
                        </div>
                    )}
                    <div className="my-2 w-1/2 lg:w-1/4">
                        <button
                            className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            ارسال الطلب
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default QuestionnaireForm;
