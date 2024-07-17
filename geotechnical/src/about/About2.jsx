import '../About.css';
import React, { useEffect, useState } from 'react';
import Image2 from '../assets/logoGeotechnical.png'

function About2(){
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return(
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="background-circle" style={{ transform: `translateY(${scrollY}px)` }}>
                                <img src={Image2} className='image_class'/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About2;