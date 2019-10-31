import { LOGIN_REQUESTED, LOGOUT } from "../constants/actionTypes";


export const login = data => {
  return {
    type: LOGIN_REQUESTED,
    payload: data
  };
};

export const logOut = () => {
  return {
    type: LOGOUT
  };
};
