import Carti_1 from './assets/certi_1.webp';
import Carti_2 from './assets/certi_2.webp';
import Footer from './home/Footer';


function Certificate(){
    return(
        <>
            <section className='about_div'>
                <div className="container py-3">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-6 mb-4">
                                    <img src={Carti_1} alt='certi' className='w-100'/>
                                </div>
                                <div className="col-lg-6">
                                    <img src={Carti_2} alt='certi' className='w-100'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}
export default Certificate;