import { combineReducers } from "redux";
import usersReducer from "./Reducers";

const rootReducer = combineReducers({
  usersData: usersReducer,
});

export type RootStore = ReturnType<typeof rootReducer>

export default rootReducer;
