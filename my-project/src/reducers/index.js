import { LOGIN_REQUESTED, LOGIN_SUCCEEDED, LOGIN_FAILED, LOGOUT } from "../constants/actionTypes";

let initialState = {
  formState: {
    username: "",
    password: ""
  }
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUESTED:
      return {};
    case LOGIN_SUCCEEDED:
      return {};
    case LOGIN_FAILED:
      return {};
    case LOGOUT:
      return {};
  }
}

export default reducer;
