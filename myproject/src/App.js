//import logo from './logo.svg';
import "./App.css";
import React from "react"; //To use bebel
import Button from "./Button";
import Button2 from "./Button2";

function App() {
  let sampleJSX = <h1>Using JSX</h1>;
  let element = React.createElement;
  let sampleBebel = element(
    "h2",
    { align: "left" },
    "Using ",
    element("span", null, "bebel")
  );
  return (
    <div className="App">
      {sampleBebel}
      {/*used outside header -- To work attribute */}
      <Button title="Click Here"></Button>
      <Button title={"Click"}></Button>
      {/*Functional component*/}
      <Button2></Button2>
      {/*Class component*/}
      <header className="App-header">
        {sampleJSX}
        {sampleBebel}
      </header>
    </div>
  );
}

export default App;
