import '../Home.css';
import Image_1 from '../assets/main5_pic.webp';
import Slider from "react-slick";
import React from "react";

function Main5(){
    var settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        rtl: true,
        responsive: [
            {
                breakpoint: 1199, // screen width between 481px and 768px
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480, // screen width below 480px
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    };
    return (
        <>
            <section className='main5_section'>
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-12">
                            <div className="row text-center"><h3 className='service'>TESTIMONIALS</h3></div>
                        </div>
                    </div>
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div className='slide_div'>
                                <div className="slide_sub_div d-flex flex-column align-items-center text-center">
                                    <img src={Image_1} alt='image' className='image3'/>
                                    <h3>Rahul Singh</h3>
                                    <p>They are true to their words and completed my project within the given time frame.</p>
                                </div>
                            </div>
                            <div className='slide_div'>
                                <div className="slide_sub_div d-flex flex-column align-items-center text-center">
                                    <img src={Image_1} alt='image' className='image3'/>
                                    <h3>Neeta Sharma</h3>
                                    <p>They have provided an excellent soil testing service and we are all happy with it.</p>
                                </div>
                            </div>
                            <div className='slide_div'>
                                <div className="slide_sub_div d-flex flex-column align-items-center text-center">
                                    <img src={Image_1} alt='image' className='image3'/>
                                    <h3>Devang Sisodia</h3>
                                    <p>I hired them for construction of my office building. They did the best work.</p>
                                </div>
                            </div>
                            <div className='slide_div'>
                                <div className="slide_sub_div d-flex flex-column align-items-center text-center">
                                    <img src={Image_1} alt='image' className='image3'/>
                                    <h3>Rahul Singh</h3>
                                    <p>They have provided an excellent soil testing service and we are all happy with it.</p>
                                </div>
                            </div>
                            <div className='slide_div'>
                                <div className="slide_sub_div d-flex flex-column align-items-center text-center">
                                    <img src={Image_1} alt='image' className='image3'/>
                                    <h3>Neeta Sharma</h3>
                                    <p>They are true to their words and completed my project within the given time frame.</p>
                                </div>
                            </div>
                        </Slider>
                    </div>

                </div>
            </section>
        </>
    )
}
export default Main5;