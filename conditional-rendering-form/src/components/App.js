import React from "react";
import Login from "./Login";
import Register from "./Register";

const userIsRegistered = true;

function App() {
  return (
    <div className="container">
      {/*Using Ternary operator; and Extracting Components*/}
      {userIsRegistered ? <Login /> : <Register />}
    </div>
  );
}
export default App;
// {/*Using Ternary operator; and Extracting Components*/}
//{userIsRegistered ? <Login /> : <Register />}
