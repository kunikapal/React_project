import React, { useState } from 'react';
import '../CSS/Auth.css';
import reactLogo from '../assets/logoGeotechnical.png';

const LoginModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <div>
            <button type="button" className="btn" onClick={openModal}><i class="fa-solid fa-user"></i></button>

            {isOpen && (
                <div className="modal" style={{ display: 'block' }}>
                    <div className="modal-content ">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <div className="row d-flex">
                            <div className="col-lg-4 d-flex align-items-center flex-column justify-content-center">
                                <a className="logo_div" href="#"><img src={reactLogo} className='logo' alt="Logo" /></a>
                                <h3>Login</h3>
                                <h6>Get access to your Orders, Wishlist, and Recommendations.</h6>
                            </div>
                            <div className="vr"></div>
                            <div className="col-lg-7">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <form>
                                            <div className="form-floating mb-3">
                                                <input type="text" className="form-control" id="floatingInput" placeholder="Mobile Number"/>
                                                <label htmlFor="floatingInput">Mobile Number</label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                                                <label htmlFor="floatingPassword">Password</label>
                                            </div>
                                            <div className="d-flex justify-content-center mt-3">
                                                <button type="button" className="btn btn-outline-info col-lg-3">Login</button>
                                            </div>
                                        </form>
                                        <hr className='my-4'/>
                                        <form className='mt-3'>
                                            <div className="d-flex justify-content-center">
                                                <button type="button" className="btn btn-outline-info col-lg-6">Login with OTP</button>
                                            </div>
                                        </form>
                                        <form className='mt-3 mb-5'>
                                            <div className="d-flex justify-content-center">
                                                <a className="col-lg-12 text-center text-decoration-none" href="#">Don't have an account? Sign up</a>
                                            </div>
                                        </form>
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

export default LoginModal;
