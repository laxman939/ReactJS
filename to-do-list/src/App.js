import React, { useState } from "react";
import InputArea from "./managing-component-tree/InputArea";
import ToDoItem from "./managing-component-tree/ToDoItem";

function App() {
  const [showItems, setShowItems] = useState([]);

  /*When click on add button that calls this handleClick fun then it stores prev items into prevItems array
      using spread oprtr and updates setshowItem with prev items and new item */
  function addItem(items) {
    setShowItems((prevItems) => {
      return [...prevItems, items]; //stored as array and returns both current item and previous itmes
    });
  }

  //To delete selected item using id(index)
  function deleteItem(id) {
    console.log(id); //id-->we've got index value of requested item to delete

    setShowItems((prevItems) => {
      return prevItems.filter((items, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>Simple To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <h2>To-Do Items</h2>
        <ul>
          {showItems.map((eachItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={eachItem}
              onDelete={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

//map method takes two item and index in this; unique key is important
//filter function takes 3 arguments; we have used two arguments item, index of item; index is taken from map method
