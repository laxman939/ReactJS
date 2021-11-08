import React, { useState } from "react";

/*Using user entered data in our code.;
taking data from user using input tag and dispayed on webpage, only when submit button is clicked
--Using onChange event
*/
function SimpleForm() {
  const [name, setName] = useState("");
  //const [isClicked, setClicked] = useState(false);-->Using Ternary operator.

  const [userName, setUserName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  /*Using Ternary Operator  */
  // function handleClick() {
  //   setClicked(true);
  //   console.log("Clicked");
  // }

  /*Without Ternary Operator*/
  //Passed the event as partameter
  function handleClickEvent(event) {
    setUserName(name);
    //console.log("clicked");

    event.preventDefault();
    //this method basically prevents the default next behaviour of the event
    //In this case refreshing the form
  }

  return (
    <div>
      {/* {isClicked ? <h1>Hello {name}</h1> : <h1>Simple Form</h1>} --> Using Ternary Operator*/}
      <h1>Displaying User Entered Data</h1>
      <h2>Hello {userName}!</h2>
      <form onSubmit={handleClickEvent}>
        <input
          id="text-id"
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default SimpleForm;
//form refresh the entire page after button click
//so use click function for form event(i.e.,onSubmit) not button event and make sure button type attribute should be submit
//still it refresh the page -- for this use a method event.preventDefault()
