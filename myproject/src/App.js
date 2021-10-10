//import logo from './logo.svg';
import "./App.css";
import React from "react"; //To use bebel

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
      <header className="App-header">
        {sampleJSX}
        {sampleBebel}
      </header>
    </div>
  );
}

export default App;
