import React, { useState } from "react";

function ToDoItem(props) {
  const [isClicked, setClicked] = useState(false);

  //For striking the item(important--revise)
  function isStriked() {
    setClicked((prevValue) => {
      return !prevValue;
    });
  }

  return (
    // <div onClick={props.onChange(props.id)}> --Immidiately calls the function and displays index value
    <div
      onClick={isStriked}
      onDoubleClick={() => {
        props.onDelete(props.id); //Don't display index value
      }}
    >
      <li style={{ textDecoration: isClicked ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;
//Can pass function app to ToDoItem component
//receive id from app and send to deleteItem fun in app again using props
