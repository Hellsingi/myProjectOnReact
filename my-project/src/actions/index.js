import { LOGIN_REQUESTED, LOGOUT, FETCH_DATA } from "../constants/actionTypes";


export const login = data => {
  return {
    type: LOGIN_REQUESTED,
    payload: data
  };
};

export const fetchData = () => {
  return {
    type: FETCH_DATA,
  }
}

export const logOut = () => {
  return {
    type: LOGOUT
  };
};
