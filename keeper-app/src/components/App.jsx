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
  return (
    <div>
      <Header />
      <CreateNote onAdd={addNote} />
      <ShowNote />
      <Footer />
    </div>
  );
}

export default App;
