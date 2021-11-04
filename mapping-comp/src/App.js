import React from "react";
import emojipedia from "./emojipedia";
import CreateEmoji from "./components/createEmoji";

//console.log(emojipedia)--> array of objects

function App() {
  return (
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(CreateEmoji)}</dl>
    </div>
  );
}

export default App;
