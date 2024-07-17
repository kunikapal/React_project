import './Contact.css';
import Contact1 from './contact/Contact1';
import Contact2 from './contact/Contact2';
import MapComponent from './contact/Contact3';
import Footer from './home/Footer';



function Contact(){
    const locations = [
        { name: "Kunika Geotechnical Services Pvt. Ltd.", lat: 28.579667, lng: 77.438635 }
        // Add more locations as needed
      ];
    return(
        <>
            <div className='about_div'>
                <Contact1/>
                <Contact2/>
                <MapComponent locations={locations}/>
                <Footer />

            </div>
        </>
    )
}
export default Contact;