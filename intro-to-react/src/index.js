import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const indirectColor = {
  color: "red",
  fontSize: "20px",
};
//Can Update values
indirectColor.color = "green";

ReactDOM.render(
  <div>
    <div className="App">
      <h1>Inline Styling can be done in two ways</h1>
      <ol>
        <li style={{ color: "red", fontSize: "20px" }}>Direct insertion</li>
        <li style={indirectColor}>Indirect insertion</li>
      </ol>
    </div>
  </div>,
  document.getElementById("root")
);
