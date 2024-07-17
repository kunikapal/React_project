import './product.css'
import Footer from "../home/Footer";

function Ground(){
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
                                FEW GROUND IMPROVEMENT WORKS EXECUTED BY US IN THE PAST……</h4>
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
                                            <td>Soil improvement work in backfilled area of Unloading header & railway <span className='gayab'>apron slab Harduaganj Thermal Power Station Extension-II (1x660mw) at district Aligarh</span></td>
                                            <td>M/s TOSHIBA India</td>
                                            <td>M/s TOSHIBA India</td>
                                            <td>21.21</td>
                                            <td>2021</td>
                                        </tr>
                                        <tr>
                                            <td>2.</td>
                                            <td>Ground Improvement Work of Proposed warehouse & commercial development for NDRAVG Business Park at Noida</td>
                                            <td>M/S NDRAVG Business Park Pvt. Ltd.<br/></td>
                                            <td>M/S NDRAVG Business Park Pvt. Ltd.</td>
                                            <td>10.88</td>
                                            <td>2020</td>
                                        </tr>
                                        <tr>
                                            <td>3.</td>
                                            <td>Ground Improvement Work of Proposed IT park at sec-135, Noida. </td>
                                            <td>Colliers International</td>
                                            <td>Modern IT</td>
                                            <td>6.15</td>
                                            <td>2020</td>
                                        </tr>
                                        <tr>
                                            <td>4.</td>
                                            <td>Ground Improvement Work by Cement- sand stabilization at Sector – 2, Bawana,Delhi</td>
                                            <td>M/s Sinopark India</td>
                                            <td>M/s Sinopark india</td>
                                            <td>9.89</td>
                                            <td>2019</td>
                                        </tr>
                                        <tr>
                                            <td>5.</td>
                                            <td>Ground Improvement Work by Cement - sand stabilization at DSIDC Narela, Delhi</td>
                                            <td>M/s B S Footware</td>
                                            <td>M/s B S Footware</td>
                                            <td>4.15</td>
                                            <td>2019</td>
                                        </tr>
                                        <tr>
                                            <td>6.</td>
                                            <td>Ground Improvement Work for Drain at Nangloi For Flood & Irrigation, Delhi</td>
                                            <td>M/s Ultra Geo Civil Projects Pvt. Ltd.</td>
                                            <td>M/s Flood & Irrigation Department</td>
                                            <td>10.84</td>
                                            <td>2017</td>
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
export default Ground;