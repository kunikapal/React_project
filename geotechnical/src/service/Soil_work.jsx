import '../Service.css';
import Footer from '../home/Footer';

function Soil_work(){
    return (
        <>
            <section className='soil_work_section service_section'>
                <div className='about1_div'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="about_us">
                                    <h2 className="SPT_head">
                                        Soil Analysis Works
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
                                We provide geotechnical design and analysis services on shallow and deep foundations, diaphragm wall, slope stability, dams construction, soil retaining structures and walls, soil improvements and reinforcements, etc. Analysis works including data calculation, analysis and evaluation to prepare a recommendation which isincluding, <br/><br/>
                                <b>
                                • Foundation systemplan<br/>
                                • Bearing capacityanalysis<br/>
                                • Settlement analysis<br/>
                                • Soil improvementrecommendation<br/><br/>
                                </b>
                                Applying best practice and the right technology, we strive to deliver superior results to meet customer satisfaction. Best quality is achievable through on-the ground expert personnel and well maintained top quality equipment’s. Our employees are committed to working with our customers to create the highest level of added value. <br/><br/>
                                <b>
                                Laboratory Testing for Rock Samples<br/><br/>
                                • Unconfined Compressiontest<br/>
                                • Point Load Test<br/>
                                • Water absorption & Porosity Test<br/>
                                • Densitytest<br/>
                                • Abrasion Test<br/><br/>
                                </b>
                                Chemical Testing for Soil & water Samples<br/><br/>
                                <b>
                                • pHValue<br/>
                                • Chloride (asCl)<br/>
                                • Sulphate (asSO3)<br/>
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
export default Soil_work;