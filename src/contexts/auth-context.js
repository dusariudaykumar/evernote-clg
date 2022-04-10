import { createContext, useEffect, useContext, useReducer } from "react";
import { authReducer } from "../reducers/authReducer";

const initialAuth = {
  isAuth: false,
  encodedToken: "",
  userData: "",
};

const AuthContext = createContext(initialAuth);
const useAuth = () => useContext(AuthContext);
const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialAuth);

  useEffect(() => {
    authDispatch({
      type: "LOGIN_SUCCESS",
      payload: {
        userData: JSON.parse(localStorage.getItem("userData")),
        encodedToken: localStorage.getItem("token") || "",
      },
    });
  }, []);
  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
