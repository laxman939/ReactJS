import React, { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateNote(props) {
  const [notes, setNotes] = useState({
    title: "",
    content: "",
  });

  const [isExpand, setExpand] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    //console.log(name, value);name--title/content; value--user entered text in title/content

    setNotes((prevNotes) => ({ ...prevNotes, [name]: value }));
  }

  //send data return to app.js using recieved function(onAdd)
  function handleSubmit(event) {
    props.onAdd(notes); //passed notes to app.js

    //To make text field empty
    setNotes({
      title: "",
      content: "",
    });

    event.preventDefault(); //To prevent default browsing/refreshing of form
  } //can use as arrow function directly for onSubmit event.

  function expand() {
    setExpand(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpand && (
          <input
            name="title"
            autoFocus={isExpand}
            placeholder="Title"
            onChange={handleChange}
            value={notes.title}
          />
        )}
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          rows={isExpand ? 3 : 1}
          placeholder="Take a note.."
          value={notes.content}
        />
        <Zoom in={isExpand}>
          <Fab onClick={handleSubmit}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateNote;
/*Used directly in App.js using Arrow function */
