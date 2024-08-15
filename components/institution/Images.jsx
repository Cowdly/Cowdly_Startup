import { useEffect } from 'react';
import gsap from 'gsap';
import style from './images.module.css';

function Images() {
    useEffect(() => {
        gsap.fromTo(`.${style.box1}`,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 1, delay: 0.5 }
        );
        gsap.fromTo(`.${style.box2}`,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 1, delay: 1 }
        );
        gsap.fromTo(`.${style.box3}`,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 1, delay: 1.5 }
        );
    }, []);

    return (
        <div>
            <div className={`${style.images} mt-16`}>
                <div className={style.box1}></div>
                <div className={style.box2}></div>
                <div className={style.box3}></div>
            </div>
        </div>
    );
}

export default Images;
