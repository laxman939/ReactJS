import React from "react";

import DeleteIcon from "@mui/icons-material/Delete";

function ShowNote(props) {
  //received id from app through props and again passing to delete function in app
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.cont}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default ShowNote;

// Pass a id over to the Note component, pass it back to the App when deleting.
