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
            className="relative z-30 p-5 bg-[#f5f5f5b3] mx-auto"
            id="blog"
        >
            <h1 className="header p-3 mb-3 text-4xl font-bold text-blue-500 text-end">
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
