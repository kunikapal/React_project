import './App.css'
import LoginModal from './Authentication/Login';
import Login from './Authentication/Login';
import Search from './Authentication/Search';
import Sign_up from './Authentication/Signup';
import Signup from './Authentication/Signup';
import reactLogo from './assets/logoGeotechnical.png';


function Navbar(){
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                <div className="container-fluid d-flex justify-content-between ">
                    <div className="row d-lg-none">
                        <div className="col-lg-12 p-0 d-flex justify-content-between">
                            <button className="navbar-toggler humbug" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            
                        </div>
                    </div>
                    <div className="row">
                        <a className='mobile_logo' href='#'>KGS</a>
                        <a className="logo_div" href="#"><img src={reactLogo} className='logo'/></a>
                    </div>
                    <div className="row">
                        <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Welcome</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <div className="accordion accordion-flush" id="accordionFlushExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header one_more">
                                            <a className='nodecor' href='/home'><h4>HOME</h4></a>
                                        </h2>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header one_more">
                                            <a className='nodecor' href='/about'><h4>ABOUT</h4></a>
                                        </h2>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                <h4>SERVICES</h4>
                                            </button>
                                        </h2>
                                        <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">
                                                <ul className="nostyle">
                                                    <li><a className="dropdown-item" href="/penetration">Standard Penetration Test (SPT)</a></li>
                                                    <li><hr className="dropdown-divider"/></li>
                                                    <li><a className="dropdown-item" href="/boring_sample">Boring & Sampling of Soil</a></li>
                                                    <li><hr className="dropdown-divider"/></li>
                                                    <li><a className="dropdown-item" href="/rock_drilling">Rock Drilling</a></li>
                                                    <li><hr className="dropdown-divider"/></li>
                                                    <li><a className="dropdown-item" href="/DCPT">Dynamic Cone Penetration Test (DCPT)...</a></li>
                                                    <li><hr className="dropdown-divider"/></li>
                                                    <li><a className="dropdown-item" href="/field_investigation">Field Investigation Test</a></li>
                                                    <li><hr className="dropdown-divider"/></li>
                                                    <li><a className="dropdown-item" href="/load_test">Load Tests</a></li>
                                                    <li><hr className="dropdown-divider"/></li>
                                                    <li><a className="dropdown-item" href="/land_surveys">Land Survey,GIS & Mapping Solutions</a></li>
                                                    <li><hr className="dropdown-divider"/></li>
                                                    <li><a className="dropdown-item" href="/piling_work">Piling Work</a></li>
                                                    <li><hr className="dropdown-divider"/></li>
                                                    <li><a className="dropdown-item" href="/laboratory">Soil Mechnical Laboratory Test</a></li>
                                                    <li><hr className="dropdown-divider"/></li>
                                                    <li><a className="dropdown-item" href="/analysis">Soil Analysis Works</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                <h4>PROJECTS</h4>
                                            </button>
                                        </h2>
                                        <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">
                                                <ul className="nostyle">
                                                    <li><a className="dropdown-item" href="/soil-investigation">FEW SOIL INVESTIGATION & PLATE LOAD TEST PROJECTS...</a></li>
                                                    <li><hr className="dropdown-divider"/></li>
                                                    <li><a className="dropdown-item" href="/piling">FEW PILING, SOLDIER PILING ...</a></li>
                                                    <li><hr className="dropdown-divider"/></li>
                                                    <li><a className="dropdown-item" href="/survey">FEW SURVEYING WORKS EXECUTED BY US IN THE PAST</a></li>
                                                    <li><hr className="dropdown-divider"/></li>
                                                    <li><a className="dropdown-item" href="/ground_improvment">FEW GROUND IMPROVEMENT WORKS EXECUTED BY US IN THE PAST</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header one_more">
                                            <a className='nodecor' href='/certificate'><h4>CERTIFICATION</h4></a>
                                        </h2>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header one_more" >
                                            <a className='nodecor' href='/contact'><h4>CONTACT US</h4></a>
                                        </h2>
                                    </div>
                                </div>
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="/home">HOME</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/about" role="button" >
                                            ABOUT US
                                        </a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            SERVICES
                                        </a>
                                        <ul className="dropdown-menu servies_extra">
                                            <li><a className="dropdown-item" href="/penetration">Standard Penetration Test (SPT)</a></li>
                                            <li><a className="dropdown-item" href="/boring_sample">Boring & Sampling of Soil</a></li>
                                            <li><a className="dropdown-item" href="/rock_drilling">Rock Drilling</a></li>
                                            <li><a className="dropdown-item" href="/DCPT">Dynamic Cone Penetration Test (DCPT)...</a></li>
                                            <li><a className="dropdown-item" href="/field_investigation">Field Investigation Test</a></li>
                                            <li><a className="dropdown-item" href="/load_test">Load Tests</a></li>
                                            <li><a className="dropdown-item" href="/land_surveys">Land Survey,GIS & Mapping Solutions</a></li>
                                            <li><a className="dropdown-item" href="/piling_work">Piling Work</a></li>
                                            <li><a className="dropdown-item" href="/laboratory">Soil Mechnical Laboratory Test</a></li>
                                            <li><a className="dropdown-item" href="/analysis">Soil Analysis Works</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            PROJECTS
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="/soil-investigation">FEW SOIL INVESTIGATION & PLATE LOAD TEST PROJECTS...</a></li>
                                            <li><a className="dropdown-item" href="/piling">FEW PILING, SOLDIER PILING ...</a></li>
                                            <li><a className="dropdown-item" href="/survey">FEW SURVEYING WORKS EXECUTED BY US IN THE PAST</a></li>
                                            <li><a className="dropdown-item" href="/ground_improvment">FEW GROUND IMPROVEMENT WORKS EXECUTED BY US IN THE PAST</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="/certificate">CERTIFICATE</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="/contact">CONTACT US</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="buttons d-flex">
                            <div className="all_nav_btn">
                                <Search/>
                            </div>
                            <div className="all_nav_btn">
                                <LoginModal/>
                            </div>
                            <div className="all_nav_btn">
                                <Sign_up/>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;