import React from "react";

var isOver = false; //Declarative prog

function strike() {
  //var isDone = true
  document.getElementById("btn").style.textDecoration = "line-through";
}

function unStrike() {
  //var isDone = flase; --> using state--declarative prog
  document.getElementById("btn").style.textDecoration = null; //using Javascript -- Imperative
}

function App() {
  return (
    <div>
      <div>
        <p style={isOver ? { textDecoration: "line-through" } : null}>
          Declarative Progaramming
        </p>
      </div>
      <div>
        <p id="btn">Imperative Progaramming</p>
        <button onClick={strike}>Change to strike through</button>
        <button onClick={unStrike}>Change back</button>
      </div>
    </div>
  );
}

export default App;
