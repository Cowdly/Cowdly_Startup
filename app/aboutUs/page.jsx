import Image from 'next/image'
import { FaStar } from "react-icons/fa6";
import { TbTargetArrow } from "react-icons/tb";
import { IoMdEye } from "react-icons/io";
import Team from "../../components/team/team";

export default function AboutUs() {
    return (
        <div class="mt-[100px] relative overflow-hidden pt-16 pb-32 space-y-24">
            <div className='text-right mb-4 mx-auto  px-6 lg:px-8'>
                <h1 className="text-4xl font-bold mb-8 text-right ">من نحن</h1>
            </div>
            <div class="relative">
                <div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
                    <div class="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">

                        <div>
                            <div>
                                <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                        class="h-8 w-8 text-white">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z">
                                        </path>
                                    </svg>
                                </span>
                            </div>

                            <div class="mt-6">
                                <h2 class="text-3xl font-bold tracking-tight text-white">
                                    Natural Language Processing (NLP):
                                </h2>
                                <p class="mt-4 text-lg text-gray-300">
                                    The AI product utilizes advanced NLP algorithms to understand and interpret human language,
                                    enabling it to accurately process and analyze text-based inputs.
                                </p>
                                <div class="mt-6">
                                    <a class="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
                                        href="/login">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-12 sm:mt-16 lg:mt-0">
                        <div class=" px-6 lg:relative lg:m-0 lg:h-full lg:px-0">
                            <img loading="lazy"
                                class="w-[100%] rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto"
                                style={{ color: "transparent" }}
                                src="https://images.unsplash.com/photo-1569144157591-c60f3f82f137" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="relative">
                <div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
                    <div class="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
                        <div>
                            <div>
                                <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                        class="h-8 w-8 text-white">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z">
                                        </path>
                                    </svg>
                                </span>
                            </div>
                            <div class="mt-6">
                                <h2 class="text-3xl font-bold tracking-tight text-white">
                                    Sentiment Analysis:
                                </h2>
                                <p class="mt-4 text-lg text-gray-300">
                                    The product has built-in sentiment analysis capabilities, allowing it to determine the
                                    sentiment (positive, negative, or neutral) expressed in text or customer feedback.
                                </p>
                                <div class="mt-6">
                                    <a class="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
                                        href="/login">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-12 sm:mt-16 lg:mt-0">
                        <div class=" px-6  lg:relative lg:m-0 lg:h-full lg:px-0">
                            <img alt="Inbox user interface" loading="lazy"
                                class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto "
                                style={{ color: "transparent" }}
                                src="https://images.unsplash.com/photo-1569144157591-c60f3f82f137" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="relative">
                <div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
                    <div class="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
                        <div>
                            <div>
                                <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                        class="h-8 w-8 text-white">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z">
                                        </path>
                                    </svg>
                                </span>
                            </div>
                            <div class="mt-6">
                                <h2 class="text-3xl font-bold tracking-tight text-white">
                                    Natural Language Generation (NLG):
                                </h2>
                                <p class="mt-4 text-lg text-gray-300">
                                    The AI product can generate human-like written content, summaries, or reports based on
                                    structured data or analysis results.
                                </p>
                                <div class="mt-6">
                                    <a class="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
                                        href="/login">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-12 sm:mt-16 lg:mt-0">
                        <div class=" px-6  lg:relative lg:m-0 lg:h-full lg:px-0">
                            <img loading="lazy" width="646" height="485"
                                class="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto"
                                style={{ color: "transparent" }}
                                src="https://images.unsplash.com/photo-1569144157591-c60f3f82f137" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8" dir="rtl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <FaStar className="w-6 h-6 text-purple-600" />,
                            title: "قيمنا",
                            description: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة. لقد تم توليد هذا النص من مولد النص العربي، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التي يولدها التطبيق."
                        },
                        {
                            icon: <TbTargetArrow className="w-6 h-6 text-purple-600" />,
                            title: "هدفنا",
                            description: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة. لقد تم توليد هذا النص من مولد النص العربي، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التي يولدها التطبيق."
                        },
                        {
                            icon: <IoMdEye className="w-6 h-6 text-purple-600" />,
                            title: "رؤيتنا",
                            description: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة. لقد تم توليد هذا النص من مولد النص العربي، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التي يولدها التطبيق."
                        }
                    ].map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md text-right">
                            <div className="bg-purple-100 rounded-full p-3 inline-block mb-4">
                                {item.icon}
                            </div>
                            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <Team />

        </div>
    )
}