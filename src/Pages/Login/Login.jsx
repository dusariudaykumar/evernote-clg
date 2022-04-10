import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/index";
import "./Login.css";

const Login = () => {
  // initial data of the useState

  const initialLoginData = {
    email: "",
    password: "",
  };
  const [loginData, setLoginData] = useState(initialLoginData);
  const { authDispatch } = useAuth();

  const testHandler = (e) => {
    e.preventDefault();
    setLoginData({
      email: "adarshbalika@gmail.com",
      password: "adarshBalika123",
    });
  };
  const loginFormChangeHandler = (e) => {
    const { name, value } = e.target;
    setLoginData((prevLoginFormData) => ({
      ...prevLoginFormData,
      [name]: value,
    }));
  };
  const { email, password } = loginData; // destructering loginData
  const navigate = useNavigate();

  //Login Functionality

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const authResp = await axios.post("/api/auth/login", {
        email: email,
        password: password,
      });
      const { encodedToken, foundUser: userData } = authResp.data;
      if (encodedToken) {
        authDispatch({
          type: "LOGIN_SUCCESS",
          payload: { userData, encodedToken },
        });
        localStorage.setItem("token", encodedToken);
        localStorage.setItem("userData", JSON.stringify(userData));
        navigate("/home");
      } else {
        navigate("/login");
      }
      setLoginData(initialLoginData); // clearing the input field
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-wrapper ">
      <form className="flex-col form-container">
        <h5 className="login-heading">Login</h5>
        <div className="input-container">
          <input
            className="sample-input-email"
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={email}
            onChange={loginFormChangeHandler}
            required
          />
          <input
            className="sample-input-pwd"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={loginFormChangeHandler}
            required
          />
          <div className="flex-space-between">
            <div className="flex-align-item-center">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember Me</label>
            </div>
            <span>
              <Link to="/">Forgot Password</Link>
            </span>
          </div>
          <button onClick={loginHandler} className="btn btn-solid login-btn">
            Login
          </button>
          <button onClick={testHandler} className="btn btn-outline ">
            Test Credentials
          </button>
        </div>
        <Link className="sign-up flex" to="/signup">
          Don't have account ? Sign up!
          <span className="material-icons-outlined"> chevron_right </span>
        </Link>
      </form>
    </div>
  );
};

export { Login };
