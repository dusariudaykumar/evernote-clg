export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuth: action.payload.encodedToken ? true : false,
        userData: action.payload.userData,
        encodedToken: action.payload.encodedToken,
      };
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        isAuth: action.payload.encodedToken ? true : false,
        userData: action.payload.createdUser,
        encodedToken: action.payload.encodedToken,
      };

    default:
      return state;
  }
};
