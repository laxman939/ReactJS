import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './Pages/Home';
import AddUser from './Pages/AddUser';
import EditUser from './Pages/EditUser';

function App() {
  return (
<Router>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/adduser' element={<AddUser/>}/>
    <Route path='/edituser' element={<EditUser/>}/>
  </Routes>
</Router>
  );
}

export default App;
