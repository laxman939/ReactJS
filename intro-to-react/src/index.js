import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const indirectColor = {
  color: "red",
  fontSize: "20px",
};
//Can Update style object values
indirectColor.color = "green";

//const date = new Date(2021, 10, 30, 13);for custom hours
const date = new Date(2021, 10, 30, 11);
const hour = date.getHours();
//console.log(hour);

let greet;

let caption = document.createElement("figcaption");

let images = document.createElement("img");

//Main
ReactDOM.render(
  <div>
    {/* Inline Styles */}
    <div className="App">
      <h2 style={{ fontSize: "30px" }}>
        Inline Styling can be done in two ways
      </h2>
      <ol>
        <li style={{ color: "red", fontSize: "20px" }}>Direct insertion</li>
        <li style={indirectColor}>Indirect insertion</li>
      </ol>
    </div>
    {/* For Wishes with Images */}
    <div>
      <h1>Showing Greetings with Gifs</h1>
    </div>
  </div>,
  document.getElementById("root")
);

if (hour < 12) {
  //To display image
  images.src =
    "https://c.tenor.com/F2Cau0TY6NIAAAAM/donald-duck-good-morning.gif";
  document.getElementById("root").appendChild(images);

  //To Display Wishes
  greet = "Good Morning";
  caption.innerText = greet;
  caption.style.color = "orange";
  document.getElementById("root").appendChild(caption);
} else if (hour < 18) {
  //To display image
  images.src =
    "https://www.gifimages.pics/images/quotes/english/general/good-evening-gif-download-52650-298226.gif";
  document.getElementById("root").appendChild(images);

  //To Display Wishes
  greet = "Good Evening";
  caption.innerText = greet;
  caption.style.color = "green";
  document.getElementById("root").appendChild(caption);
} else {
  //To display images
  images.src = "https://c.tenor.com/491SUV9jbVEAAAAM/dog-good-night.gif";
  document.getElementById("root").appendChild(images);

  //To Display Wishes
  greet = "Good Night";
  caption.innerText = greet;
  caption.style.color = "blue";
  //styleToGreet.color = "green";-->Not working
  document.getElementById("root").appendChild(caption);
}

console.log(greet);
