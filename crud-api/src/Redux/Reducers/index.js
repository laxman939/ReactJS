import { combineReducers } from "redux";
import usersReducers from "./Reducers";

const rootReducer = combineReducers({
  usersData: usersReducers,
});
export default rootReducer;
