import { createContext, useEffect, useContext, useReducer } from "react";
import { authReducer } from "../reducers/authReducer";

const initialAuth = {
  isAuth: localStorage.getItem("token") ? true : false,
  encodedToken: localStorage.getItem("token") || "",
  userData: JSON.parse(localStorage.getItem("userData")) || "",
};

const AuthContext = createContext(initialAuth);
const useAuth = () => useContext(AuthContext);
const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialAuth);

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
