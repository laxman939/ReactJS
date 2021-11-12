import React from "react";

function ToDoItem(props) {
  return (
    <div>
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
//Can pass function app to ToDoItem component
