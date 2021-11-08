import React, { useState } from "react";

function DisplayTime() {
  //2-To display Time
  let now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  setInterval(getTime, 1000);

  function getTime() {
    let time = new Date().toLocaleTimeString();
    setTime(time);
  }

  return (
    <div className="container">
      <h1>To Display Time</h1>
      <h2>{time}</h2>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}
export default DisplayTime;
