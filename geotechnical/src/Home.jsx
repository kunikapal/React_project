import './Home.css';
import Footer from './home/Footer';
import Main1 from './home/Main1';
import Main2 from './home/Main2';
import Main3 from './home/Main3';
import Main4 from './home/Main4';
import Main5 from './home/Main5';

function Home(){
    return(
        <>
            {/* <Navbar/> */}
            <div className='home_page'>
                <Main1/>
                <Main2/>
                <Main3/>
                <Main4/>
                <Main5/>
                <div className='extra_div'></div>
                <Footer/>
            </div>
            
        </>
    )
}
export default Home;