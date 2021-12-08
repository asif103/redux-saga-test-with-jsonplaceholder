import { ActionTypes } from "../constants/action-type";

export function getUsers() {
  return {
    type: ActionTypes.GET_USERS_REQUESTED,
  };
}
export const removeUsers = (users) => {
  return {
    type: ActionTypes.REMOVE_USERS,
    payload: users,
  };
};
