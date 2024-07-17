import '../Contact.css';

function Contact2(){
    return(
        <>
            <section>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card ">
                                <div className="card-header">
                                    <h2 className='text-primary text-center'>Enquiry Form</h2>
                                </div>
                                <div className="card-body">
                                    <div className="row">

                                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 pe-3">
                                            <div className="row ">
                                                <div className="form-group">
                                                    <label className='form-label' for="name"><b>Name</b></label>
                                                    <input className='form-control' type="text" id='name' name='name'/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group">
                                                    <label className='form-label' for="phone"><b>Phone</b></label>
                                                    <input className='form-control' type="text" id='phone' name='phone'/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group">
                                                    <label className='form-label' for="email"><b>Email</b></label>
                                                    <input className='form-control' type="text" id='email' name='email'/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                            <div className="row">
                                                <div className="form-group">
                                                    <label className='form-label' for="desc"><b>Description</b></label>
                                                    <textarea className='form-control' type="text" id='desc' name='desc' rows={7}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div className="row justify-content-center">
                                        <button className='btn btn-outline-primary col-lg-2 col-md-2 col-sm-4 col-6'>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contact2;