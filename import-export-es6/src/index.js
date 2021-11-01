import React from "react";
import ReactDOM from "react-dom";
import sum, { sub } from "./components/calculator";
import Pi, { doublePi, triplePi } from "./components/math";

//Can change name of default one

ReactDOM.render(
  <div>
    <h1>ES-6 Import and Export concepts</h1>
    <h3>Calculations</h3>
    <ul>
      <li>{"PI value:- " + Pi}</li>
      <li>{"doublePi Value:- " + doublePi()}</li>
      {/*For functions paranthesis important*/}
      <li>{triplePi()}</li>
      <li>{"Sum Result:-  " + sum(2, 4)}</li>
      <li>{sub(4, 1)}</li>
    </ul>
  </div>,
  document.getElementById("root")
);
