import '../Contact.css';

function Contact1(){
    return(
        <>
            <section className='contact1_section'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <h1 className='text-center'>Contact Us</h1>
                            </div>
                            <div className="row p-2">
                                <div className="col-lg-4">
                                    <div className="details text-center">
                                        <h4>Contact Details</h4>
                                        <ul className='cont_list'>
                                            <li><i class="fa-solid fa-phone me-3"></i>+91-7011416334</li>
                                            <li><i class="fa-solid fa-phone me-3"></i>+91-8750787882</li>
                                            <li><i class="fa-solid fa-envelope me-3"></i>kgsindia2@gmail.com</li>
                                            <li><i class="fa-solid fa-envelope me-3"></i>kgsindia@yahoo.com</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="details text-center">
                                        <h4>Address</h4>
                                        <ul className='cont_list'>
                                            <li><i class="fa-solid fa-location-dot me-3"></i>165-B, Pocket-IV, Mayur Vihar Ph-1,<br/> Delhi-110091, </li>
                                            <li><i class="fa-solid fa-location-dot me-3"></i>B-141, First Floor, Sector -69,<br/> Noida, Uttar Pradesh</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="details text-center">
                                        <h4>Business Hours</h4>
                                        <ul className='cont_list'>
                                            <li> <i class="fa-solid fa-clock me-3"></i>Mon - Sat : 10:00 AM - 06:00 PM<br/>
                                            Sun : Closed</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contact1;