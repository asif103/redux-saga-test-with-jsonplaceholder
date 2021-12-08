import { ActionTypes } from "../constants/action-type";

// const initialState = {
//   users: [],
// };

// export const userReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case ActionTypes.SET_USERS:
//       return { ...state, users: payload };
//     case ActionTypes.REMOVE_USERS:
//       return {};

//     default:
//       return state;
//   }
// };
const initialState = {
  users: [],
  loading: false,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.users,
      };
    case ActionTypes.GET_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    case ActionTypes.REMOVE_USERS:
      return {
        users: [],
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};
