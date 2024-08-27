import { useEffect } from 'react';
import { gsap } from 'gsap';
import Cards from './blogCards';

const Blog = () => {
    useEffect(() => {
        gsap.fromTo(
            '.header',
            { opacity: 0, y: -100 },
            { opacity: 1, y: 0, duration: 1 }
        );
    }, []);

    return (
        <div
            className="xl:container mx-auto relative z-30 p-5"
            id="blog"
        >
            <h1 className=" p-3 mb-3 text-[58px] font-medium text-blue-500 text-end">
                المحتوي المميز
            </h1>
            <div className="relative z-50 flex mb-3 mt-3 items-center justify-center">
                <div className="w-full relative">
                    <Cards />
                </div>
            </div>
        </div>
    );
};

export default Blog;
