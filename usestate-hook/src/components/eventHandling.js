import React, { useState } from "react";

function EventHandler() {
  //4-Event Handling in React
  const [heading, setHeading] = useState("Hello I will Change");
  const [isMousedOver, setMousedOver] = useState(false);
  function handleClick() {
    setHeading("Submitted");
  }

  function handleMouseOver() {
    setMousedOver(true);
    //console.log("moused over");
  }
  function handleMouseOut() {
    setMousedOver(false);
    //console.log("moused out");
  }

  return (
    <div>
      <h1>Event Handling in React</h1>
      <h2>{heading}</h2>
      <label htmlFor="name">
        Name:
        <input id="email" type="email" placeholder="Enter your email" />
      </label>
      <br />
      <br />
      <label htmlFor="email">
        Email:
        <input id="name" type="text" placeholder="What is your name?" />
      </label>
      <br />
      <button
        id="event-btn"
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{ backgroundColor: isMousedOver ? "#6ca66a" : "#a69b7e" }}
      >
        Submit
      </button>
      <br />
      <small>
        <code>&lt;</code> Click on name label it direct you to the respected
        name input element <code>&gt;</code>
      </small>
    </div>
  );
}
export default EventHandler;

//label
/*Use Of label Tags --> When we click on label name it directs us to that name input text
 label for name is id of the input element    */
