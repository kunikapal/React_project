import React, { useState } from 'react';
import '../CSS/Auth.css';
import reactLogo from '../assets/logoGeotechnical.png';

const Sign_up = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <div>
            <button type="button" className="btn" onClick={openModal}><i class="fa-solid fa-user-plus"></i></button>

            {isOpen && (
                <div className="modal" style={{ display: 'block' }}>
                    <div className="modal-content ">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <div className="row d-flex">
                            <div className="col-lg-4 d-flex align-items-center flex-column justify-content-center">
                                <a className="logo_div" href="#"><img src={reactLogo} className='logo'/></a>
                                <h3>Signup</h3>
                                {/* <hr className='my-4'/> */}
                                <h6>We do not share your personal details with anyone</h6>
                            </div>
                            <div class="vr"></div>
                            <div className="col-lg-7">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <form>
                                            <div class="form-floating mb-3">
                                                <input type="text" class="form-control" id="floatingInput" placeholder=""/>
                                                <label for="floatingInput">Mobile Number</label>
                                            </div>
                                            
                                            <div className="d-flex justify-content-center mt-3">
                                                <button type="button" class="btn btn-outline-info col-lg-4">Continue</button>
                                            </div>
                                        </form>
                                        <hr className='my-4'/>
                                        
                                        <form className='mt-3 mb-5'>
                                            <div className="d-flex justify-content-center">
                                                <a type="button" class="col-lg-12 text-center text-decoration-none">If have an account ? Login</a>
                                            </div>
                                        </form >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sign_up;

                            