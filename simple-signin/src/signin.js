import React, { useRef, useState } from "react";

export default function Singin() {
  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const isRememberRef = useRef(null);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState("");

  const handleSigninClick = () => {
    console.log(nameRef.current.value);
    console.log(passwordRef.current.value);
    console.log(isRememberRef.current.checked);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const rememberMe = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
      <label>User Name: </label>
      <input
        type="text"
        placeholder="Enter User Name"
        ref={nameRef}
        value={name}
        onChange={handleNameChange}
      />
      <br />
      <br />
      <label>Password: </label>
      <input
        type="password"
        placeholder="Enter Password"
        ref={passwordRef}
        onChange={handlePasswordChange}
        value={password}
      />
      <br />
      <br />
      <label>Remember Me</label>
      <input
        type="checkbox"
        ref={isRememberRef}
        checked={isChecked}
        onChange={rememberMe}
      />
      <br />
      <br />
      <button onClick={handleSigninClick}>Sign In</button>
    </div>
  );
}
