import React, { useState } from "react";

//useState() is a Hook used to change or update the state(variable)

function App() {
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

  function reset(initialValue) {
    initialValue = 0;
    setCountLikes(initialValue);
    setCountDislikes(initialValue);
    //console.log(initialValue);
  }

  //To display Time
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
        <button onClick={increase}>Likes</button>
        <button onClick={decrease}>Dislikes</button>
        <button onClick={reset}>Reset</button>
      </div>
      <div className="container">
        <h1>To Display Time</h1>
        <h2>{time}</h2>
        <button onClick={getTime}>Get Time</button>
      </div>
    </div>
  );
}

export default App;

//Destructuring
/*const [red, green, blue] = [230, 126, 34];
console.log(red);     */

//Button--calls function(increment)--calls setCount--updates useState --useState updates count
