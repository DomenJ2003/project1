import { combineReducers } from "redux";
import post_reducer from "./post_reducer";
import todoReducer from "./todo_reducer";
import userReducer from "./user_reducer";

const rootReducer = combineReducers({
  todo: todoReducer,
  user: userReducer,
  post: post_reducer,
});

export default rootReducer;
