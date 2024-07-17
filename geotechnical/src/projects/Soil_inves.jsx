import './product.css'
import Footer from "../home/Footer";

function Investigation(){
    return(
        <>
            <section className="about_div">
                <div className="container py-3">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <h1 className='text-center'>Projects</h1>
                            </div>
                            <div className="row">
                                <h4 className='text-center mb-4'>FEW SOIL INVESTIGATION & PLATE LOAD TEST PROJECTS EXECUTED BY US IN THE PAST……</h4>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead className="table_head">
                                        <th>Sno.</th>
                                        <th>Projects</th>
                                        <th>Consultant / Contractor</th>
                                        <th>Client</th>
                                        <th>App. Value(Lakhs)</th>
                                        <th>Year</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1.</td>
                                            <td>Consultancy services for feasibility cum preliminary design for phase VII<span className='gayab'> from Sadhuwali – Banwala-Hanumangarh stretch.</span></td>
                                            <td>M/s UPHAM<br/>International Corporation</td>
                                            <td>M/s NHAI</td>
                                            <td>4.00</td>
                                            <td>2023</td>
                                        </tr>
                                        <tr>
                                            <td>2.</td>
                                            <td>Consultancy services for feasibility study, preparation of DPR and providing <span className='gayab'> preconstruction services for special type of bridge( Cable stayed, suspension or Steel arch bridge) indicativelength of bridge 300m over Kodak River & approach road on Tuting-Yortung-Enkunji-Emra Valley-Kangri- karpola from existing specifications to NHSL Specifications under 761 BETF of project Brahmank in Arunachal Pradesh State.</span></td>
                                            <td>M/s UPHAM<br/>International Corporation</td>
                                            <td>M/s NHAI</td>
                                            <td>8.20</td>
                                            <td>2023</td>
                                        </tr>
                                        <tr>
                                            <td>3.</td>
                                            <td>Geotechnical Investigation work under bridge construction of major bridge no79A with Deoband Roorkee New BG Line.</td>
                                            <td>M/s Girirajji Stone<br/>Crushers Pvt. Ltd.</td>
                                            <td>M/s Northern Railway</td>
                                            <td>1.40</td>
                                            <td>2023</td>
                                        </tr>
                                        <tr>
                                            <td>4.</td>
                                            <td>Work order for Conducting Plate load test using Loaded truck method/Platform Method at GSM-R height gauge works for WDFC CTP-14 Project.</td>
                                            <td>M/s L&T Limited,<br/>Construction</td>
                                            <td>M/s DFCC CTP-14 Project.</td>
                                            <td>6.23</td>
                                            <td>2022</td>
                                        </tr>
                                        <tr>
                                            <td>5.</td>
                                            <td>	
                                                Work order for Conducting Geotechnical Soil Investigation at Sohna, Gurugram.</td>
                                            <td>M/s NASDA Infra P. Ltd.</td>
                                            <td>--</td>
                                            <td>0.72</td>
                                            <td>2022</td>
                                        </tr>
                                        <tr>
                                            <td>6.</td>
                                            <td>Work order for Mobilization of necessary plant, equipment, Men and materials for the complete Field boring work in soil & Rock</td>
                                            <td>M/s NOPS Infrastructure<br/>Private Limited</td>
                                            <td>--</td>
                                            <td>1.00</td>
                                            <td>2022</td>
                                        </tr>
                                        <tr>
                                            <td>7.</td>
                                            <td>Work order for Soil testing for setting up of Affordable Housing Colony at Sec 95B, Gurugram.</td>
                                            <td>M/s MEGA Infratech P. Ltd</td>
                                            <td>--</td>
                                            <td>3.70</td>
                                            <td>2022</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}
export default Investigation;