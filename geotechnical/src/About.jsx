import './About.css';
import About1 from './about/About1';
import About2 from './about/About2';
import About3 from './about/About3';
import Footer from './home/Footer';

function About(){
    return(
        <>
                <About2/>
            <div className='about_div'>
                <About1/>
                <About3/>
                <Footer/>

            </div>
        </>
    )
}
export default About;