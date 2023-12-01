/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useMemo, useState } from "react";

const UseCallbackUseMemo = () => {
  const [count, setCount] = useState(0);

  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");

  const increase = () => {
    setCount((prev) => prev + 1);
  };

  const decrease = () => {
    setCount((prev) => prev - 1);
  };

  function factorial(n) {
    console.log("factorial");
    let i = 0;
    while (i < 200000000) i++;
    if (n < 0) {
      return -1;
    } else if (n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
  }

  function handleClickEvent(event) {
    event.preventDefault();
    setUserName(name);
  }

  //   const value = factorial(count);
  //   Use Case - 1 --->
  // factorial function is invoking every time automatically when we update the setUserName state - To overcome this issue we use useMemo
  const value = useMemo(() => {
    return factorial(count);
  }, [count]);

  const showName = useCallback(
    (greeting) => {
      return greeting + " " + userName;
    },
    [userName]
  );

  useEffect(() => {
    console.log("useMemo : ", value); // Memoize the value
    console.log("useCallback : ", showName); // Memoize the function
  }, []);

  return (
    <main>
      <div>
        {/* {isClicked ? <h1>Hello {name}</h1> : <h1>Simple Form</h1>} --> Using Ternary Operator*/}
        <h1>Displaying User Entered Data from single Input Element</h1>
        {/* <h2>Hello {userName}!</h2> */}
        <>
          <DisplayName userName={userName} /> {/* useMemo */}
          {/* useCallback */}
          <ShowUserName showName={showName} />
        </>
        <form onSubmit={handleClickEvent}>
          <input
            id="text-id"
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="What's your name?"
            value={name}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <h1>UseCallback and UseMemo</h1>
      <section>
        <h4>Number: {count}</h4>
        <button onClick={increase}>Increase +</button>
        <button onClick={() => count > 0 && decrease()}>Decrease -</button>
        <h4>
          Factorial of {count} value: {value}
        </h4>
      </section>
    </main>
  );
};
// Use Case - 2 --> Referential equality (props - object)
// useMemo - React.memo
const DisplayName = React.memo(({ userName }) => {
  console.log("display name");
  return <h2>Hello {userName}!</h2>;
});

const ShowUserName = ({ showName }) => {
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useCallback");
    setName(showName("Good morning"));
  }, [showName]);

  return <h2>Hello {name}!</h2>;
};

export default UseCallbackUseMemo;
