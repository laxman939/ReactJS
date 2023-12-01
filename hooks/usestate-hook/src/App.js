import React from "react";
import UpdateCounter from "./components/UpdateCounter";
import DisplayTime from "./components/CurrentTime";
import EventHandler from "./components/eventHandling";
import Destructure from "./components/Destructure/Destrucure";
import SimpleForm from "./components/SimpleForm";
import TwoInputForm from "./components/TwoInputForm";
import ThreeInputForm from "./components/ThreeInputForm";
import ThreeInputSpread from "./components/ThreeFormSpread"; //Simplyfying code using spread operator
import UseCallbackUseMemo from "./components/useCallback_useMemo";

//useState() is a Hook used to change or update the state(variable)

function App() {
  return (
    <div>
      {/* <UpdateCounter />
      <DisplayTime />
      <Destructure />
      <EventHandler /> */}
      {/* <SimpleForm /> */}
      {/* <TwoInputForm />
      <ThreeInputForm />
      <ThreeInputSpread /> */}
      <UseCallbackUseMemo />
    </div>
  );
}

export default App;
