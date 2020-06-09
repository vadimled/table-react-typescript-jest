import { combineReducers } from "redux";
import experimentsReducer, { InitialStateType } from "./experimentsReducer";

export default combineReducers<{ experimentsReducer: InitialStateType }>({
  experimentsReducer,
});
