import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import TextField from "@mui/material/TextField";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { addUser } from "../Redux/Actions";

const AddUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    name: "",
    location: "",
    email: "",
    contact: "",
  });
  const [error, setError] = useState("");

  const { name, location, email, contact } = userData;

  function handleChange(e) {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !location || !email || !contact) {
      setError("Please fill all fields");
    } else {
      dispatch(addUser(userData));
      navigate("/");
      setError("");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <button
        className="back"
        onClick={(e) => {
          e.preventDefault();
          navigate("/");
        }}
      >
        <span>
          <ArrowLeftIcon />
        </span>
        <span>Back</span>
      </button>
      <h2 className="user-heading">ADD YOUR DETAILS</h2>
      {error && <h6 className="error">{error}</h6>}
      <TextField
        id="standard-basic"
        label="Name"
        variant="standard"
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
      />
      <br />
      <TextField
        id="standard-basic"
        label="Location"
        variant="standard"
        type="text"
        name="location"
        value={location}
        onChange={handleChange}
      />
      <br />
      <TextField
        id="standard-basic"
        label="Email"
        variant="standard"
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
      />
      <br />
      <TextField
        id="standard-basic"
        label="Conatct"
        variant="standard"
        type="tel"
        name="contact"
        value={contact}
        onChange={handleChange}
      />
      <br />
      <button className="addUser" type="submit">
        Add User
      </button>
    </form>
  );
};

export default AddUser;
