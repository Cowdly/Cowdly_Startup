import { BsGlobe2 } from "react-icons/bs";
import { MdOutlineSmartphone } from "react-icons/md";
import { TbShareplay } from "react-icons/tb";
import { FaCode } from "react-icons/fa6";
import { IoMegaphone } from "react-icons/io5";
import { RiSearchFill } from "react-icons/ri";
// import { button } from "@/components/ui/button"

export default function ServicesGrid() {
    return (
        <div className="container mt-[150px] mx-auto px-4 py-8 text-right" dir="rtl">
            <h1 className="text-3xl font-bold mb-8">استكشف جميع خدماتنا</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    {
                        icon: <BsGlobe2 className="w-12 h-12 text-purple-500" />,

                        title: "تصميم المواقع الإلكترونية",
                        description: "نحن نقدم خدمات تصميم مواقع إلكترونية متميزة تجمع بين الجمال والوظائف العملية. فريقنا من المصممين والمطورين المبدعين.",
                    },
                    {
                        icon: <MdOutlineSmartphone className="w-12 h-12 text-purple-500" />,
                        title: "تصميم التطبيقات",
                        description: "نحن نوفر حلولاً متكاملة لتصميم وتطوير التطبيقات التي تلبي احتياجاتك الخاصة وتحقق أهدافك.",
                    },
                    {
                        icon: <TbShareplay className="w-12 h-12 text-purple-500" />,
                        title: "موشن جرافيك",
                        description: "نحن نقدم خدمات موشن جرافيك مبتكرة تساعدك على إيصال رسالتك بطرق جذابة ومؤثرة. فريقنا من الفنانين والمصممين.",
                    },
                    {
                        icon: <FaCode className="w-12 h-12 text-purple-500" />,
                        title: "تطوير الأنظمة والبرمجيات",
                        description: "نحن نقدم خدمات موشن جرافيك مبتكرة تساعدك على إيصال رسالتك بطرق جذابة ومؤثرة. فريقنا من الفنانين والمصممين.",
                    },
                    {
                        icon: <IoMegaphone className="w-12 h-12 text-purple-500" />,
                        title: "التسويق الرقمي",
                        description: "نحن نوفر حلولاً متكاملة لتصميم وتطوير التطبيقات التي تلبي احتياجاتك الخاصة وتحقق أهدافك.",
                    },
                    {
                        icon: <RiSearchFill className="w-12 h-12 text-purple-500" />,
                        title: "تحسين محركات البحث",
                        description: "نحن نقدم خدمات تصميم مواقع إلكترونية متميزة تجمع بين الجمال والوظائف العملية. فريقنا من المصممين والمطورين المبدعين.",
                    },
                ].map((service, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                        <div className="bg-purple-100 rounded-full p-4 mb-4">
                            {service.icon}
                        </div>
                        <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                        <p className="text-gray-600 mb-4 text-center">{service.description}</p>
                        <button variant="outline" className="mt-auto">
                            اطلب الخدمة
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}