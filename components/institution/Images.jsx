import { useEffect } from 'react';
import gsap from 'gsap';

function Images() {
    useEffect(() => {
        gsap.fromTo('.box1',
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 1, delay: 0.5 }
        );
        gsap.fromTo('.box2',
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 1, delay: 1 }
        );
        gsap.fromTo('.box3',
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 1, delay: 1.5 }
        );
    }, []);

    return (
        <div className="mt-16 relative">
            <div className="absolute top-[-30vh] right-[50px] bg-cover bg-no-repeat bg-center w-[300px]   h-[300px]   box1"></div>
            <div className="absolute top-[-20vh] right-[360px] bg-cover bg-no-repeat bg-center w-[350px]  h-[350px]   box2"></div>
            <div className="absolute top-[12vh] right-[50px] bg-cover bg-no-repeat bg-center w-[300px]  h-[150px]   box3"></div>
        </div>
    );
}

export default Images;
