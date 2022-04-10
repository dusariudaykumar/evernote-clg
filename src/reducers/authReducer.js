export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuth: true,
        userData: action.payload.userData,
        encodedToken: action.payload.encodedToken,
      };
    default:
      return state;
  }
};
