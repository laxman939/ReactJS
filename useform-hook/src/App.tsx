import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';
import Header from './Components/Header';
import Step1 from './Pages/useForm-yup';
import FinalForm from './Pages/FinalForm';
import { Result } from './Pages/Result';
import { BarChart, IData, IGroupedData } from './Pages/BarChart';
import BarChartGraph from './Pages/ChartJS/Chart';
// import SampleForm from './SampleForm/SampleForm';

const BAR_CHART_DATA: IData[] = [
  { label: "Apples", value: 100 },
  { label: "Bananas", value: 200 },
  { label: "Oranges", value: 50 },
  { label: "Kiwis", value: 150 }
];

const GROUPED_BAR_CHART_DATA: IGroupedData[] = [
  { label: "Apples", values: [60, 80] },
  { label: "Bananas", values: [160, 200] },
  { label: "Oranges", values: [60, 40] }
];

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
    <Route path='/barchart' element={<BarChart data={GROUPED_BAR_CHART_DATA}/>} />
    <Route path='/barchartgraph' element={<BarChartGraph/>}/>
  </Routes>
</Router>
  </>
)
}

export default App;
