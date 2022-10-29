
import * as types from "../Constants/actionTypes";

export interface initialStateI {
    users: types.usersType[],
    user: {},
    loading: boolean,

}

const initialState: initialStateI = {
  users: [],
  user: {},
  loading: true,
};

const usersReducer = (state: initialStateI = initialState, action: types.UserDispatchTypes) : initialStateI=> {
  switch (action.type) {
    case types.GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
export default usersReducer;
