import React, { useState } from "react";

function App() {
  const [items, setItems] = useState("");
  const [showItems, setShowItems] = useState([]);

  function handleChange(event) {
    //console.log("changed");
    const value = event.target.value;
    //console.log(value);

    setItems(value);
  }

  /*When click on add button that calls this handleClick fun then it stores prev items into prevItems array
  using spread oprtr and updates setshowItem with prev items and new item */
  function handleClick() {
    setShowItems((prevItems) => {
      return [...prevItems, items];
    });
  }

  return (
    <div className="App">
      <h1>Simple To-Do List</h1>
      <div className="form">
        <input onChange={handleChange} type="text" name="items" value={items} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <h2>To-Do Items</h2>
        <ul>
          {showItems.map((eachItem) => {
            return <li>{eachItem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
