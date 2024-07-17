import './product.css'
import Footer from "../home/Footer";

function Piling(){
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
                                <h4 className='text-center mb-4'>
                                FEW PILING, SOLDIER PILING & PILE LOAD TEST WORKS EXECUTED BY US IN THE PAST……</h4>
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
                                            <td>Work order for Soldier Piling (ISMB Girder & Plank) shoring work at Sec 89 Gurgaon.</td>
                                            <td>M/s Adhikansh<br/> Realtors</td>
                                            <td>M/s Smart World Developers</td>
                                            <td>8.90</td>
                                            <td>2022</td>
                                        </tr>
                                        <tr>
                                            <td>2.</td>
                                            <td>Work order for Testing of Pile Foundations at Unitech Burgundy project at Sec-96, 97 & 98 Noida.</td>
                                            <td>M/s VYOM<br/></td>
                                            <td>M/s Unitech Ltd.</td>
                                            <td>31.05</td>
                                            <td>2022</td>
                                        </tr>
                                        <tr>
                                            <td>3.</td>
                                            <td>Work order for Testing of Pile Foundations at Unitech Vistas project at Sec-70, Gurugram</td>
                                            <td>M/s Ky Consultants Pvt.Ltd.</td>
                                            <td>M/s Unitech Ltd.</td>
                                            <td>10.00</td>
                                            <td>2022</td>
                                        </tr>
                                        <tr>
                                            <td>4.</td>
                                            <td>	
                                            Work order for Testing of Single Pile Foundations at Ajmer.</td>
                                            <td>	
                                            M/s Shree Construction</td>
                                            <td>	
                                            M/s Northern Railways.</td>
                                            <td>1.00</td>
                                            <td>2022</td>
                                        </tr>
                                        <tr>
                                            <td>5.</td>
                                            <td>	
                                            Work order for Testing of Single Pile Foundations at Ajmer.</td>
                                            <td>M/s Shree Construction</td>
                                            <td>M/s Northern Railways.</td>
                                            <td>1.50</td>
                                            <td>2022</td>
                                        </tr>
                                        <tr>
                                            <td>6.</td>
                                            <td>Construction of Boared cast-in-situ piles (BCIS) of 450mm dia, 10m long including boaring, trimming, caging & concreting.</td>
                                            <td>M/s Srex Power P Ltd.</td>
                                            <td>M/s DMRC</td>
                                            <td>4.50</td>
                                            <td>2020</td>
                                        </tr>
                                        <tr>
                                            <td>7.</td>
                                            <td>500mm dia. BCIS Pile work 16m length at Ecotech-III, G. Noida.</td>
                                            <td>VKJ Projects Pvt. Ltd.</td>
                                            <td>Covestro India P.Ltd.</td>
                                            <td>9.58</td>
                                            <td>2019</td>
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
export default Piling;