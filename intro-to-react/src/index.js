import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const indirectColor = {
  color: "red",
  fontSize: "20px",
};
//Can Update values
indirectColor.color = "green";

//const date = new Date(2021, 10, 30, 13);for custom hours
const date = new Date();
const hours = date.getHours();
//console.log(hours);

let greet;

const styleToGreet = {
  color: "black",
};

if (hours < 12) {
  greet = "Good Morning";
  styleToGreet.color = "#e979ed";
} else if (hours < 18) {
  greet = "Good Everning";
  styleToGreet.color = "#9de310";
} else {
  greet = "Good Night";
  styleToGreet.color = "blue";
}

ReactDOM.render(
  <div>
    <div className="App">
      <h2 style={{ fontSize: "30px" }}>
        Inline Styling can be done in two ways
      </h2>
      <ol>
        <li style={{ color: "red", fontSize: "20px" }}>Direct insertion</li>
        <li style={indirectColor}>Indirect insertion</li>
      </ol>
    </div>
    <div>
      <p style={{ fontSize: "30px", fontWeight: "bold" }}>
        Showing Greetings Based on Timings
      </p>
      <h1 className="heading" style={styleToGreet}>
        {greet}
      </h1>
    </div>
  </div>,
  document.getElementById("root")
);
