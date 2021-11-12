import React, { useState } from "react";
import ToDoItem from "./managing-component-tree/ToDoItem";

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
  function addItem() {
    setShowItems((prevItems) => {
      return [...prevItems, items]; //stored as array and returns both current item and previous itmes
    });
    setItems(""); //To make input text field empty
  }

  return (
    <div className="App">
      <h1>Simple To-Do List</h1>
      <div className="form">
        <input onChange={handleChange} type="text" name="items" value={items} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <h2>To-Do Items</h2>
        <ul>
          {showItems.map((eachItem) => (
            <ToDoItem text={eachItem} onAdd={addItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
