import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';
import Header from './Components/Header';
import Step1 from './Pages/useForm-yup';
import FinalForm from './Pages/FinalForm';
import { Result } from './Pages/Result';
// import SampleForm from './SampleForm/SampleForm';

function App() {
return (
  <>
  {/* <SampleForm/> */}
<Header/>
<Router>
  <Routes>
    <Route path='/' element={<Step1/>}/>
    <Route path='/finalform' element={<FinalForm/>}/>
    <Route path='/result' element={<Result/>}/>
  </Routes>
</Router>
  </>
)
}

export default App;
