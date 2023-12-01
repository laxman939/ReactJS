import React from "react";
import cars from "./destructuring";

function Destructure() {
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

  return (
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
  );
}
export default Destructure;

//Destructuring
/*const [red, green, blue] = [230, 126, 34];
console.log(red);     */
