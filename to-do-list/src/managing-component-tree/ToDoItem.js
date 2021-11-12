import React from "react";

function ToDoItem(props) {
  return (
    // <div onClick={props.onChange(props.id)}> --Immidiately calls the function and displays index value
    <div
      onClick={() => {
        props.onDelete(props.id); //Don't display index value
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
//Can pass function app to ToDoItem component
//receive id from app and send to deleteItem fun in app again using props
