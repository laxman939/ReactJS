import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import notes from "../notes";

//console.log(notes)-->Array of objects

function App() {
  return (
    <div>
      <Header />
      {notes.map((singleNote) => (
        <Note title={singleNote.title} cont={singleNote.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
