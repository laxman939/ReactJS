import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import TextField from "@mui/material/TextField";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { getSingleUser, updateUser } from "../Redux/Actions";

const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.usersData);

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
      dispatch(updateUser(userData, id));
      navigate("/");
      setError("");
    }
  };

  //   As soon as we redirect to update page we should display data
  //   To get data
  useEffect(() => {
    dispatch(getSingleUser(id));
  }, []);
  // To display
  useEffect(() => {
    if (user) {
      setUserData({ ...user });
    }
  }, [user]);

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
      <h2 className="user-heading">UPDATE YOUR DETAILS</h2>
      {error && <h6 className="error">{error}</h6>}
      <TextField
        id="standard-basic"
        label="Name"
        variant="standard"
        type="text"
        name="name"
        value={name || ""}
        // || "" --> Short ckt evaluation
        onChange={handleChange}
      />
      <br />
      <TextField
        id="standard-basic"
        label="Location"
        variant="standard"
        type="text"
        name="location"
        value={location || ""}
        onChange={handleChange}
      />
      <br />
      <TextField
        id="standard-basic"
        label="Email"
        variant="standard"
        type="email"
        name="email"
        value={email || ""}
        onChange={handleChange}
      />
      <br />
      <TextField
        id="standard-basic"
        label="Conatct"
        variant="standard"
        type="tel"
        name="contact"
        value={contact || ""}
        onChange={handleChange}
      />
      <br />
      <button className="addUser" type="submit">
        Update
      </button>
    </form>
  );
};

export default EditUser;
