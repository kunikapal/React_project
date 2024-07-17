import React, { useState } from 'react';
import '../CSS/Auth.css';

const Search = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <div>
            <button type="button" className="btn" onClick={openModal}><i class="fa-solid fa-magnifying-glass"></i></button>

            {isOpen && (
                <div className="modal" style={{ display: 'block' }}>
                    <div className="modal-content ">
                        <div class="modal-header d-flex justify-content-between">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">SEARCH</h1>
                            <span className="close" onClick={closeModal}>&times;</span>
                            
                        </div>
                        <div class="modal-body">
                            <div className="row">
                                <div className="col-8">
                                    <input className='form-control' placeholder='search'/>
                                </div>
                                <div className="col-4">
                                    <button type="button" class="btn btn-primary">search </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Search;

                            