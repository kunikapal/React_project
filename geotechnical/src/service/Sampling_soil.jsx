import '../Service.css';
import Footer from '../home/Footer';

function Sampling_soil(){
    return (
        <>
            <section className='boring_section service_section'>
                <div className='about1_div'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="about_us">
                                    <h2 className="SPT_head">
                                        Boring & Sampling of Soil -<br/> Link to Header
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
                            <p className="service_para">Undisturbed sampling follows IS-2132 “Code of practice for thin walled tube sampling of soils.”. An undisturbed soil sample is taken from a specified depth by using a shell by tube sampler (a thin walled tube sampler). Subsequently the soil sample is protected against shock, vibration and change in moisture, in order to maintain the soil structure and physical composition to be as in original conditions, until is extruded to be tested in the laboratory. Depth to top of sample and the length of sampler are recorded in the boring log.</p>
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
export default Sampling_soil;