import React, { useState } from "react";
import CreateNote from "./CreateNote";
import Footer from "./Footer";
import Header from "./Header";
import ShowNote from "./ShowNote";

//console.log(notes)-->Array of objects

function App() {
  //To store data into an array
  const [showNotes, setShowNotes] = useState([]);

  //function to store recieved data from CreateNote into an array, when we click on add button
  function addNote(notes) {
    //console.log(notes)
    setShowNotes((prevNotes) => {
      return [...prevNotes, notes]; //To display previousnotes
    });
  }

  //To delete selected item
  function deleteItem(id) {
    //console.log("Deleted");

    setShowNotes((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index !== id; //receive id from map method
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateNote onAdd={addNote} />
      {showNotes.map((eachNote, index) => {
        return (
          <ShowNote
            key={index}
            id={index}
            title={eachNote.title}
            cont={eachNote.content}
            onDelete={deleteItem}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
