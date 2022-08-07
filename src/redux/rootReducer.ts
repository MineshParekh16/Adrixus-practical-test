import { combineReducers } from "redux";
import apiReducer from "./api/apinew/apiReducer";
import loaderReducer from "./loader/loaderReducer";

const rootReducer = combineReducers({
  loader: loaderReducer,
  user: apiReducer,
});

export default rootReducer;
