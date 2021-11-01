import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//const date = new Date(2021, 10, 30, 13);for custom hours
const date = new Date();
const hour = date.getHours();
//console.log(hour);

let greet;

let caption = document.createElement("figcaption");

let images = document.createElement("img");

ReactDOM.render(
  <div>
    <App />
    <h1>Showing Greetings!</h1>
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

//console.log(greet);
