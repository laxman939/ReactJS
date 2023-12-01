import React, { useState } from "react";

function UpdateCounter() {
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

  return (
    <div className="container">
      <h1>To Change Count</h1>
      <h2>{"Likes " + countLikes}</h2>
      <h2>{"Dislikes " + countDislikes}</h2>
      <button onClick={increase}>Like</button>
      <button onClick={decrease}>Dislike</button>
      {/* <button onClick={reset}>Reset</button> */}
    </div>
  );
}
export default UpdateCounter;

//Button--calls function(increment)--calls setCount--updates useState --useState updates count
