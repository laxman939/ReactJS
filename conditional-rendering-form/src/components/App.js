import React from "react";
//import Login from "./Login";
//import Register from "./Register";
import Form from "./Form";

const userIsRegistered = true;

function App() {
  return (
    <div className="container">
      {/*Using Ternary operator; and Extracting Components*/}
      {/* {userIsRegistered ? <Login /> : <Register />} */}
      {/* simple way using-- userRegistered as props, single form with AND operator  */}
      {<Form isRegistered={userIsRegistered} />}
    </div>
  );
}
export default App;
// {/*Using Ternary operator; and Extracting Components*/}
//{userIsRegistered ? <Login /> : <Register />}
