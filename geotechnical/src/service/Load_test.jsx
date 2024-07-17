import '../Service.css';
import Footer from '../home/Footer';

function Load_test(){
    return (
        <>
            <section className='load_test_section service_section'>
                <div className='about1_div'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="about_us">
                                    <h2 className="SPT_head">
                                        Load_tests
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
                            <p className="service_para">
                                <b>
                                    • Plate Load Tests<br/>
                                    • Pile Load Tests in Compression<br/>
                                    • Pile Load tests in Uplift<br/>
                                    • Pile Load tests in Latera
                                </b>
                            </p>
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
export default Load_test;