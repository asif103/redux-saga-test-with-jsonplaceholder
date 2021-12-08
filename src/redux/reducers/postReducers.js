import { ActionTypes } from "../constants/action-type";

// const initialState = {
//   posts: [],
// };

// export const postReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case ActionTypes.SET_POSTS:
//       return { ...state, posts: payload };

//     default:
//       return state;
//   }
// };
// export const singlePostReducer = (state = {}, { type, payload }) => {
//   switch (type) {
//     case ActionTypes.SET_SINGLE_POST:
//       return { ...state, post: payload };
//     case ActionTypes.REMOVE_SINGLE_POST_FROM_STATE:
//       return {};

//     default:
//       return state;
//   }
// };
const initialState = {
  posts: [],
  loading: false,
  error: null,
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_POSTS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.GET_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.posts,
      };
    case ActionTypes.GET_POSTS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
};
