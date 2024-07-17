import '../Service.css';
import Footer from '../home/Footer';

function Labs_test(){
    return (
        <>
            <section className='labs_test_section service_section'>
                <div className='about1_div'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="about_us">
                                    <h2 className="SPT_head">
                                        Soil Mechanical Laboratory Test
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
                                Laboratory test consist of testing to undisturbed or disturbed samples taken away from site. Intention of this work is to know the mechanics and physical behavior of soil. Testing of soil in laboratory is executed pursuant to testing standard & testing procedures given in the relevant parts of IS-2720. Soil laboratory worksincluding:<br/><br/>
                                <b>
                                    Testing of nature physical soil:<br/><br/>
                                    • Classification and IndexProperties<br/>
                                    • Moisture Content, Unit Weight(Density)<br/>
                                    • Particle Density (SpecificGravity)<br/>
                                    • Particle Size Distribution (Sieving andHydrometer)<br/>
                                    • Dry Density and Moisture ContentRelationship<br/>
                                    • Atterberg’s Limits (Liquid Limit, Plastic Limit & ShrinkageLimit)<br/>
                                    • Differential SwellingIndex<br/><br/>

                                    Testing of engineering properties of soil for applicable samples:
                                    <br/><br/>
                                    • Unconfined Compression(UC)<br/>
                                    • Unconsolidated Undrained (UU) Triaxial Compression<br/>
                                    • Consolidated Undrained (CU) Triaxial Compression<br/>
                                    • Consolidated Drained (CD) Triaxial Compression<br/>
                                    • Direct Shear (Undrained and Drained)<br/>
                                    • Swelling Pressure & Consolidation<br/>
                                    • California Bearing Ratio(CBR)<br/>
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
export default Labs_test;