import Image from 'next/image'

export default function BlogDetails() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-2">Our Blog</h1>
            <p className="text-gray-600 mb-8">
                A Gateway to Insightful Stories and Expertise, Unveiling a Tapestry of Ideas and Inspiration.
            </p>

            <div className="relative rounded-xl overflow-hidden mb-8">
                <img
                    src="https://images.unsplash.com/photo-1506157786151-b8491531f063"
                    alt="Vishal Mega Mart IPO"
                    width={800}
                    height={400}
                    className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-6 text-white">

                    <h2 className="text-3xl font-bold mb-4">
                        Vishal Mega Mart planning a $1 billion IPO: Report
                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                </div>
            </div>

            <div className='text-end'>
                <h2 className=" text-2xl font-bold mb-4">هذا النص هو مثال لنص يمكن استبداله </h2>
                <h4 className='text-lg font-semibold mb-2'>هذا النص هو مثال لنص يمكن استبداله </h4>
                <p className='text-gray-600 '>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير مفهوم. لأنه مازال نصاً بديلاً ومؤقتاً.هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص،</p>
            </div>
        </div>

    )
}