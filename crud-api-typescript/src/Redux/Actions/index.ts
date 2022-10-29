import { UserDispatchTypes, GET_USERS, usersType } from "../Constants/actionTypes";
// import { stateType } from "../Reducers/Reducers";

import axios from "axios";
import { Dispatch } from "react";


export const usersGet: any =  (users: usersType) => ({
  type: GET_USERS,
  payload: users,
});

export const loadUsers = () => {
  return function (dispatch: Dispatch<UserDispatchTypes>) {
    axios
      .get(`http://localhost:5000/user`)
      .then((resp) => {
        console.log("Responce " + resp.data);
        dispatch(usersGet(resp.data));
      })
      .catch((error) => console.log("Error " + error));
  };
};
