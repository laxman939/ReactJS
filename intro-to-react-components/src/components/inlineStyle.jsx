import React from "react";

/* Inline Styles */
function Inline() {
  const indirectColor = {
    color: "red",
    fontSize: "20px",
  };
  //Can Update style object values
  indirectColor.color = "green";

  return (
    <div>
      <h2 style={{ fontSize: "30px" }}>
        Inline Styling can be done in two ways
      </h2>
      <ol>
        <li style={{ color: "red", fontSize: "20px" }}>Direct insertion</li>
        <li style={indirectColor}>Indirect insertion</li>
      </ol>
    </div>
  );
}

export default Inline;
