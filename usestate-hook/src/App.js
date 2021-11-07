import React, { useState } from "react";
import cars from "./components/destructuring";

//useState() is a Hook used to change or update the state(variable)

//3--Destructuring ES-6 Concept
console.log(cars); //Array of objects

//Destructuring in arrays--> []
const [honda, tesla] = cars; //Direct Rename simple in array drestructuring
console.log(honda); //an object with nested array and nested object

//Destructuring in objects --> {}
const {
  coloursByPopularity: [hondaTopColor],
  speedStats: { topSpeed: hondaTopSpeed },
} = honda;
console.log(hondaTopColor);

const {
  coloursByPopularity: [teslaTopColor],
  speedStats: { topSpeed: teslaTopSpeed },
} = tesla;
console.log(teslaTopSpeed);
function App() {
  //1-Counter Update
  //Destructuring
  const [countLikes, setCountLikes] = useState(0);
  const [countDislikes, setCountDislikes] = useState(0);
  //console.log(count);--[0, ƒ bound dispatchAction()]-->[initialValue, function]

  function increase() {
    setCountLikes(countLikes + 1);
    //console.log("clicked");
  }

  function decrease() {
    setCountDislikes(countDislikes + 1);
  }

  // function reset(initialValue) {
  //   initialValue = 0;
  //   setCountLikes(initialValue);
  //   setCountDislikes(initialValue);
  //   //console.log(initialValue);
  // }

  //2-To display Time
  let now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  setInterval(getTime, 1000);

  function getTime() {
    let time = new Date().toLocaleTimeString();
    setTime(time);
  }

  return (
    <div>
      <div className="container">
        <h1>To Change Count</h1>
        <h2>{"Likes " + countLikes}</h2>
        <h2>{"Dislikes " + countDislikes}</h2>
        <button onClick={increase}>Like</button>
        <button onClick={decrease}>Dislike</button>
        {/* <button onClick={reset}>Reset</button> */}
      </div>
      <div className="container">
        <h1>To Display Time</h1>
        <h2>{time}</h2>
        <button onClick={getTime}>Get Time</button>
      </div>
      <div>
        <h1>Destructuring in ES-6</h1>
        <table className="styling-table">
          <tr>
            <th>Brand</th>
            <th>Top Speed</th>
            <th>Top Color</th>
          </tr>
          <tr>
            <td>{tesla.model}</td>
            <td>{teslaTopSpeed}</td>
            <td>{teslaTopColor}</td>
          </tr>
          <tr>
            <td>{honda.model}</td>
            <td>{hondaTopSpeed}</td>
            <td>{hondaTopColor}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;

//Destructuring
/*const [red, green, blue] = [230, 126, 34];
console.log(red);     */

//Button--calls function(increment)--calls setCount--updates useState --useState updates count
