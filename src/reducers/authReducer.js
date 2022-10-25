export const authReducer = (state, { type, payload }) => {
  switch (type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuth: payload.token ? true : false,
        userData: payload.user,
        encodedToken: payload.token,
      };
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        isAuth: payload.token ? true : false,
        userData: payload.user,
        encodedToken: payload.token,
      };

    default:
      return state;
  }
};
