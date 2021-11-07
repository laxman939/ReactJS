import React, { useState } from "react";

//useState() is a Hook used to change or update the state(variable)

function App() {
  //Destructuring
  const [count, setCount] = useState(0);
  //console.log(count);--[0, ƒ bound dispatchAction()]-->[initialValue, function]

  function increase() {
    setCount(count + 1);
    //console.log("clicked");
  }

  function decrease() {
    setCount(count - 1);
  }

  function reset(initialValue) {
    initialValue = 0;
    setCount(initialValue);
    //console.log(initialValue);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;

//Destructuring
/*const [red, green, blue] = [230, 126, 34];
console.log(red);     */

//Button--calls function(increment)--calls setCount--updates useState --useState updates count
