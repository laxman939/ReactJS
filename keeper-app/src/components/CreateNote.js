import React, { useState } from "react";

function CreateNote(props) {
  const [notes, setNotes] = useState({
    title: "",
    content: "",
  });

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
  } //can use as arrow function directly for onSubmit event

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={notes.title}
        />
        <textarea
          name="content"
          placeholder="Take a note.."
          onChange={handleChange}
          rows="3"
          value={notes.content}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateNote;
/*Used directly in App.js using Arrow function */
