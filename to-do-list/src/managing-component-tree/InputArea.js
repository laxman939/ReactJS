import React, { useState } from "react";

function InputArea(props) {
  const [items, setItems] = useState("");

  function handleChange(event) {
    const value = event.target.value;
    //console.log(value);

    setItems(value);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={items} />
      <button
        onClick={() => {
          props.onAdd(items); //passed items

          setItems(""); //To make input text field empty
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}
export default InputArea;
