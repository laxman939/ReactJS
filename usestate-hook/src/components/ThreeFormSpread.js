import React, { useState } from "react";

function ThreeInputSpread() {
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
      console.log(prevValue);
      //{fName: "", lName: "", email: ""}-->fName, lName, email are name attribute values and used as keys in below
      return {
        ...prevValue,
        [name]: value,
      }; //storing user entered values to respected keys(fName: "", lName: "", email: "");
    });
  }

  return (
    <div>
      <h1>Simplified Code Using Spread Operator</h1>
      <h2>
        Hello {contact.fName} {contact.lName}
      </h2>
      <p>{"Your Email :-- " + contact.email}</p>
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
export default ThreeInputSpread;
