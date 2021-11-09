import React, { useState } from "react";

function ThreeInputForm() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handleChange(event) {
    // const name = event.target.name;-- Displays user typing text
    // const value = event.target.value;-- displays name attribute value when user start typing in a particular input text --> fName, lName, email

    const { name, value } = event.target; //destructuring
    //Never use event.target.value/name directly in setState

    //Updating state object values based on name attribute
    setContact((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email,
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email,
        };
      } else if (name === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value,
        };
      }
    });
  }

  return (
    <div>
      <h1>Displaying User Entered data from Three Input Elements</h1>
      <h2>
        Hello {contact.fName} {contact.lName}
      </h2>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          type="text"
          placeholder="Enter your First Name"
          value={contact.fName}
        />
        <br />
        <input
          onChange={handleChange}
          name="lName"
          type="text"
          placeholder="Enter your Last Name"
          value={contact.lName}
        />
        <br />
        <input
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="Enter your First Email"
          value={contact.email}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
export default ThreeInputForm;
