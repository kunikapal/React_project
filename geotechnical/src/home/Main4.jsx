import '../Home.css';
import Slider from "react-slick";
import React from "react";
import Image3 from '../assets/ser_img7.webp';
import Image4 from '../assets/ser_img8.webp';
import Image5 from '../assets/ser_img9.webp';
import Image6 from '../assets/ser_img10.webp';
import Image9 from '../assets/ser_img11.webp';
import Image10 from '../assets/ser_img4.webp';
import Image7 from '../assets/ser_img5.webp';
import Image8 from '../assets/ser_img6.webp';

function Main4(){
    var settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
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

    return(
        <>
            <section className='main4_section'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row"><h3 className='service'>GALLERY</h3></div>
                            <div className="slider-container">
                                <Slider {...settings}>
                                    <div className='slide_div'>
                                        <div className="slide_sub_div">
                                            {/* <div className="row"> */}
                                                <img src={Image3} alt='image' className='image2'/>
                                            {/* </div> */}
                                            
                                        </div>
                                    </div>
                                    <div className='slide_div'>
                                        <div className="slide_sub_div">
                                            {/* <div className="row"> */}
                                                <img src={Image10} alt='image' className='image2'/>
                                            {/* </div> */}
                                            
                                        </div>
                                    </div>
                                    <div className='slide_div'>
                                        <div className="slide_sub_div">
                                            {/* <div className="row"> */}
                                                <img src={Image9} alt='image' className='image2'/>
                                            {/* </div> */}
                                            
                                        </div>
                                    </div>
                                    <div className='slide_div'>
                                        <div className="slide_sub_div">
                                            <div className="row">
                                                <img src={Image4} alt='image' className='image2'/>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className='slide_div'>
                                        <div className="slide_sub_div">
                                            <div className="row">
                                                <img src={Image5} alt='image' className='image2'/>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className='slide_div'>
                                        <div className="slide_sub_div">
                                            <div className="row">
                                                <img src={Image6} alt='image' className='image2'/>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className='slide_div'>
                                        <div className="slide_sub_div">
                                            <div className="row">
                                                <img src={Image7} alt='image' className='image2'/>
                                            </div>
                                            
                                        </div>
                                    </div><div className='slide_div'>
                                        <div className="slide_sub_div">
                                            <div className="row">
                                                <img src={Image8} alt='image' className='image2'/>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Main4;