import '../Home.css';

function Footer(){
    return(
        <>
            <footer className='footer_section'>
                <div className="container ">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="foot_1 p-1">
                                <div className="row">
                                    <h4 className='text-white p-0'>Welcome</h4>
                                </div>
                                <div className="row list_all">
                                    <ul className='p-0'>
                                        <li><a className='text-decoration-none text-white' href='/home'>Home</a></li>
                                        <li><a className='text-decoration-none text-white' href='/about'>About Us</a></li>
                                        <li><a className='text-decoration-none text-white'>Projects</a></li>
                                        <li><a className='text-decoration-none text-white'>Services</a></li>
                                        <li><a className='text-decoration-none text-white'>Certificates</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="foot_1 p-1">
                                <div className="row">
                                    <h4 className='text-white p-0'>Services</h4>
                                </div>
                                <div className="row list_all">
                                    <ul className='p-0'>
                                        <li><a className='text-decoration-none text-white' href='#'>Standard Penetration Test (SPT)</a></li>
                                        <li><a className='text-decoration-none text-white' href='#'>Boring & Sampling of Soil</a></li>
                                        <li><a className='text-decoration-none text-white'>Rock Drilling</a></li>
                                        <li><a className='text-decoration-none text-white'>Dynamic Cone Penetration Test (DCPT)...</a></li>
                                        <li><a className='text-decoration-none text-white'>Field Investigation Test</a></li>
                                        <li><a className='text-decoration-none text-white'>Load Tests </a></li>
                                        <li><a className='text-decoration-none text-white'>Land Survey,GIS & Mapping Solutions </a></li>
                                        <li><a className='text-decoration-none text-white'>Piling Work </a></li>
                                        <li><a className='text-decoration-none text-white'>Soil Mechnical Laboratory Test </a></li>
                                        <li><a className='text-decoration-none text-white'>Soil Analysis Works </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="foot_1 p-1">
                                <div className="row">
                                    <h4 className='text-white p-0'>Projects</h4>
                                </div>
                                <div className="row list_all">
                                    <ul className='p-0'>
                                        <li><a className='text-decoration-none text-white' href='/home'>Few Soil Investigation & Plate Load test Projects...</a></li>
                                        <li><a className='text-decoration-none text-white' href='/about'>Few Piling, Soldier Pilings ...</a></li>
                                        <li><a className='text-decoration-none text-white'>Few Surveying Works Excuted By Us In The Past</a></li>
                                        <li><a className='text-decoration-none text-white'>Few Ground Improvement Works Executed By Us In The Past</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="foot_1 p-1">
                                <div className="row">
                                    <h4 className='text-white p-0'>Contacts</h4>
                                </div>
                                <div className="row list_all">
                                    <ul className='p-0'>
                                        <li className='mb-2'><a className='text-decoration-none text-white' href='#'>7011416334</a>& <a className='text-decoration-none text-white' href='#'>kgsindia2@gmail.com</a></li>
                                        <li className='mb-2'><a className='text-decoration-none text-white' href='#'>
                                        8750787882</a>& <a className='text-decoration-none text-white' href='#'>kgsindia@gmail.com</a></li>
                                        <li className='d-flex justify-content-evenly'>
                                            <a className='text-decoration-none text-white' href='https://www.justdial.com/jdmart/Delhi/Kunika-Geotechnical-Services-Pvt-Ltd-Near-Hanuman-Mandir-Greater-Noida-Sector-1/011PXX11-XX11-190420155109-E7V2_BZDET/catalogue'><i class="fa-solid fa-globe iconss"></i></a>
                                            <a className='text-decoration-none text-white'><i class="fa-brands fa-facebook iconss"></i></a>
                                            <a className='text-decoration-none text-white'><i class="fa-brands fa-linkedin iconss"></i></a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <section className='bg-info p-1'>
                <div className="container ">
                    <div className="row">
                        <div className="col-lg-12">
                            <h6 className='text-center text-white'>© Copyrights 2023 - 2024.Kunika Geotechnical Services Pvt. Ltd..All Rights Reserved.</h6>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Footer;