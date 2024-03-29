import * as types from "../Constants/actionTypes";

import axios from "axios";

const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});

const userDelete = () => ({
  type: types.DELETE_USER,
});

const userAdd = () => ({
  type: types.ADD_USER,
});

const userUpdate = () => ({
  type: types.UPDATE_USER,
});

const getUser = (user) => ({
  type: types.GET_SINGLE_USER,
  payload: user,
});

export const loadUsers = () => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}`)
      .then((resp) => {
        // console.log("resp " + resp.data);
        dispatch(getUsers(resp.data));
      })
      .catch((error) => console.log("Error " + error));
  };
};

export const deleteUser = (id) => {
  return function (dispatch) {
    axios
      .delete(`${process.env.REACT_APP_API}/${id}`)
      .then((resp) => {
        // console.log("resp " + resp.data);
        dispatch(userDelete());
        dispatch(loadUsers());
      })
      .catch((error) => console.log("Error " + error));
  };
};

export const addUser = (user) => {
  return function (dispatch) {
    axios
      .post(`${process.env.REACT_APP_API}`, user)
      .then((resp) => {
        // console.log("resp added" + resp.data);
        dispatch(userAdd());
        dispatch(loadUsers());
      })
      .catch((error) => console.log("Error " + error));
  };
};

export const getSingleUser = (id) => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}/${id}`)
      .then((resp) => {
        // console.log("resp " + resp.data);
        dispatch(getUser(resp.data));
      })
      .catch((error) => console.log("Error " + error));
  };
};

export const updateUser = (user, id) => {
  return function (dispatch) {
    axios
      .put(`${process.env.REACT_APP_API}/${id}`, user)
      .then((resp) => {
        // console.log("resp " + resp.data);
        dispatch(userUpdate());
      })
      .catch((error) => console.log("Error " + error));
  };
};
