import * as types from "../Constants/actionTypes";

import axios from "axios";

const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});

const userDelete = () => ({
  type: types.DELETE_USER,
});

export const loadUsers = () => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}`)
      .then((resp) => {
        console.log("resp " + resp.data);
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
        console.log("resp " + resp.data);
        dispatch(userDelete());
        dispatch(loadUsers());
      })
      .catch((error) => console.log("Error " + error));
  };
};
