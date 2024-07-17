import './product.css'
import Footer from "../home/Footer";

function Survey(){
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
                                FEW SURVEYING WORKS EXECUTED BY US IN THE PAST……</h4>
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
                                            <td>Work order for carrying out topographical survey for the 4.0m stretch of abutting road of residential township at sec 89,90 Gurugram</td>
                                            <td>M/s Orris Infrastructure P. Ltd</td>
                                            <td>M/s Orris Infrastructure P. Ltd</td>
                                            <td>0.60</td>
                                            <td>2022</td>
                                        </tr>
                                        <tr>
                                            <td>2.</td>
                                            <td>Work order for carrying out topographical survey for the proposed affordable residential plotted colony of 5.83acres at sec 83 Gurugram</td>
                                            <td>M/s Orris Infrastructure P. Ltd<br/></td>
                                            <td>M/s Orris Infrastructure P. Ltd</td>
                                            <td>0.26</td>
                                            <td>2022</td>
                                        </tr>
                                        <tr>
                                            <td>3.</td>
                                            <td>Work order for carrying out topographical survey works at Neemrana.</td>
                                            <td>M/s Meinhardt EPCM (India) Private Limited</td>
                                            <td>M/s Meinhardt EPCM (India) Private Limited</td>
                                            <td>0.25</td>
                                            <td>2021</td>
                                        </tr>
                                        <tr>
                                            <td>4.</td>
                                            <td>	
                                                Work order for carrying out Contour Survey Works - CGS Bhiwani, Haryana</td>
                                            <td>	
                                            	M/s Meinhardt EPCM (India) Private Limited</td>
                                            <td>	
                                            M/s Meinhardt EPCM (India) Private Limited</td>
                                            <td>0.25</td>
                                            <td>2022</td>
                                        </tr>
                                        <tr>
                                            <td>5.</td>
                                            <td>Topographic Survey work for site at Sohna</td>
                                            <td>M/s NASDA INFRA PRIVATE LMITED</td>
                                            <td>M/s NASDA INFRA PRIVATE LMITED</td>
                                            <td>0.34</td>
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
export default Survey;