import '../Service.css';
import Footer from '../home/Footer';

function SPT(){
    return (
        <>
            <section className='spt_section service_section'>
                <div className='about1_div'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="about_us">
                                    <h2 className="SPT_head">
                                        Standard Penetration Test<br/> (SPT)
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
                            <p className="service_para">SPT procedure and equipment follow IS: 2131 – 1981, “Method for Standard Penetration Test for Soils”. The resistance of soils is represented by the N-value. The number of blows of hammer striking drilling rod to cause 15cm penetration of the split spoon at the tip into the soil is counted. The total number of blows for the last 30 cm penetration is called N-value. The test results are recorded in the boring log.</p>
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
export default SPT;