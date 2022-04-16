import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import './App.css';
import Header from './Components/Header';
import Result from './Pages/Result';
import Step1 from './Pages/Step1';
import Step2 from './Pages/Step2';
import Step3 from './Pages/Step3';
// import SampleForm from './SampleForm/SampleForm';

function App() {
return (
  <>
  {/* <SampleForm/> */}
<Header/>
<Router>
  <Routes>
    <Route path='/' element={<Step1/>}/>
    <Route path='/step2' element={<Step2/>}/>
    <Route path='/step3' element={<Step3/>}/>
    <Route path='/result' element={<Result/>}/>
  </Routes>
</Router>
  </>
)
}

export default App;
