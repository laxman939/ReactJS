import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import './App.css';
// import SampleForm from './SampleForm/SampleForm';

function App() {
return (
  <>
  {/* <SampleForm/> */}

<Router>
  <Routes>
    <Route path='/'/>
  </Routes>
</Router>
  </>
)
}

export default App;
