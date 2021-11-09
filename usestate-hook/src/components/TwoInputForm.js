import React, { useState } from "react";

function TwoInputForm() {
  //Taken as an object -- fName, lName
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  function handleChange(event) {
    // const value = event.target.value;
    // const name = event.target.name;
    const { value, name } = event.target; //Destructuring an object
    //console.log(value); //user entered value
    //console.log(name); //name attribute value

    //1- if conditions with setfullName function-->displays only one at a time but not two
    /*if (name === "fName") {
      setFullName({ fName: value });
    } else if (name === "lName") {
      setFullName({ lName: value });
    }       */

    //2-setFullName function with if condition
    setFullName((prevValue) => {
      //console.log(prevValue);//{fName: "", lName: ""}-->accessing -- prevValue.fName; prevValue.lName

      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
        };
      } else if (name === "lName") {
        return {
          lName: value,
          fName: prevValue.fName,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>Displaying User Entered data from two Input Elements</h1>
      <h2>
        Hello {fullName.fName} {fullName.lName}!
      </h2>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          type="text"
          placeholder="Enter your First Name"
        />
        <br />
        <input
          onChange={handleChange}
          name="lName"
          type="text"
          placeholder="Enter your Last Name"
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
export default TwoInputForm;

//used same handleChange function for both inputs but we can take inputs from user based on name attributes.

//10 and 25 lines
//when we start typing -- handleChange--pass event-- stores new value and value of name attr
//then calls setFullName fun and stores prevValue
