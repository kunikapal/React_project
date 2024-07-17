import About from './About';
import './App.css'
import Certificate from './Certificate';
import Contact from './Contact';
import Home from './Home';
import Navbar from './Navbar'
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Investigation from './projects/Soil_inves';
import Piling from './projects/Piling';
import Survey from './projects/Survey';
import Ground from './projects/Ground_impr';
import SPT from './service/SPT';
import Sampling_soil from './service/Sampling_soil';
import Rock_drilling from './service/Rock_drilling';
import DCPT from './service/DCPT';
import Field_investigation from './service/Field_invest';
import Load_test from './service/Load_test';
import Land_surveys from './service/Land_survey';
import Piling_work from './service/Piling_work';
import Labs_test from './service/Labs_test';
import Soil_work from './service/Soil_work';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />}/>
          <Route path="/certificate" element={<Certificate />} /> 
          <Route path="/soil-investigation" element={<Investigation />} /> 
          <Route path="/piling" element={<Piling />} /> 
          <Route path="/survey" element={<Survey />} /> 
          <Route path="/ground_improvment" element={<Ground />} /> 
          <Route path="/penetration" element={<SPT />} /> 
          <Route path="/boring_sample" element={<Sampling_soil />} /> 
          <Route path="/rock_drilling" element={<Rock_drilling />} /> 
          <Route path="/DCPT" element={<DCPT />} /> 
          <Route path="/field_investigation" element={<Field_investigation />} /> 
          <Route path="/load_test" element={<Load_test />} /> 
          <Route path="/land_surveys" element={<Land_surveys />} /> 
          <Route path="/piling_work" element={<Piling_work />} /> 
          <Route path="/laboratory" element={<Labs_test />} /> 
          <Route path="/analysis" element={<Soil_work />} /> 
        </Routes>
      </Router>
    </>
  )
}

export default App
