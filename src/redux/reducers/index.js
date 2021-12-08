import { combineReducers } from "redux";
import { postReducer } from "./postReducers";
import { userReducer } from "./userReducers";

const reducers = combineReducers({
  allPosts: postReducer,
  // singlePost: singlePostReducer,
  allUsers: userReducer,
});

export default reducers;
