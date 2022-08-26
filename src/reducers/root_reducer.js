import { combineReducers } from "redux";
import post_reducer from "./post_reducer";
import userReducer from "./user_reducer";

const rootReducer = combineReducers({
  user: userReducer,
  post: post_reducer,
});

export default rootReducer;
