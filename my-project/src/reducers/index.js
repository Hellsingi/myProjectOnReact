import { LOGIN_SUCCEEDED } from "../constants/actionTypes";
// import { LOGIN_REQUESTED, LOGIN_SUCCEEDED, LOGIN_FAILED, LOGOUT, FETCH_DATA } from "../constants/actionTypes";



let initialState = {
  isLogin: false,
  // formState: {
  //   username: "",
  //   password: ""
  // }
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCEEDED: 
      return {
        ...state,
        isLogin: true
      }

    // case LOGIN_REQUESTED:
    //   return {};
    // case LOGIN_SUCCEEDED:
    //   return {};
    // case LOGIN_FAILED:
    //   return {};
    // case LOGOUT:
    //   return {};
    default:
      return state;
  }
}

export default reducer;
