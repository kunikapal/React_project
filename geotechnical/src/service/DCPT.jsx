import '../Service.css';
import Footer from '../home/Footer';

function DCPT(){
    return (
        <>
            <section className='dcpt_section service_section'>
                <div className='about1_div'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="about_us">
                                    <h2 className="SPT_head">
                                        Dynamic Cone Penetration Test (DCPT) & SCPT
                                    </h2>
                                </div>
                            </div>
                            <div className="col-lg-6"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='spt_info mt-5'>
                <div className="container p-5">
                    <div className="row">
                        <div className="col-lg-12">
                            <p className="service_para">The Dynamic cone penetration test can be used to obtain continuous profiles with depth of cone point resistance, sleeve friction and, in more recent devices, pore pressure. Appropriate, interpretation of this data enables the following to be estimated; soil profile, relative density (of sand deposits), soil strength, soil stiffness, soil permeability or coefficient of consolidation, pile skin friction, pile endbearing capacity.</p>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-5">
                        <a href='/contact' className='btn btn-outline-info col-lg-3 col-md-3 col-sm-4 col-6'>Enquiry now</a>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}
export default DCPT;