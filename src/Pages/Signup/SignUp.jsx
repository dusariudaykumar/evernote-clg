import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";
import "./SignUp.css";
const SignUp = () => {
  const { authDispatch } = useAuth();
  const initailSingUpData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [signUpData, setSignUpData] = useState(initailSingUpData);
  const formDataChangeHandler = (e) => {
    const { name, value } = e.target;
    setSignUpData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const { firstName, lastName, email, password, confirmPassword } = signUpData;
  const formDataClickHandler = async (e) => {
    e.preventDefault();
    try {
      const authSignUpResponse = await axios.post("/api/auth/signup", {
        email,
        password,
        firstName,
        lastName,
      });
      const { encodedToken, createdUser } = authSignUpResponse.data;
      if (encodedToken) {
        authDispatch({
          type: "LOGIN_SUCCESS",
          payload: { createdUser, encodedToken },
        });
      }
      localStorage.setItem("token", encodedToken);
      localStorage.setItem("userData", JSON.stringify(createdUser));
      console.log(authSignUpResponse);
      setSignUpData(initailSingUpData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-wrapper ">
      <form className="flex-col form-container" onSubmit={formDataClickHandler}>
        <h5 className="signup-heading">SignUp</h5>
        <div className="input-container flex-col">
          <div className="flex-col">
            <label className="signup-labels " htmlFor="first-name-input">
              First Name
            </label>
            <input
              className="input-name sample-input-email"
              type="text"
              id="first-name-input"
              onChange={formDataChangeHandler}
              name="firstName"
              value={firstName}
              placeholder="Enter your First Name"
              required
            />
          </div>
          <div className="flex-col">
            <label className="signup-labels " htmlFor="last-name-input">
              Last Name
            </label>
            <input
              className=" input-last-name sample-input-email"
              type="text"
              id="last-name-input"
              onChange={formDataChangeHandler}
              name="lastName"
              value={lastName}
              placeholder="Enter your Last Name"
              required
            />
          </div>
          <div className="flex-col">
            <label className="signup-labels " htmlFor="email-input">
              Email Address
            </label>
            <input
              className=" input-last-name sample-input-email"
              type="text"
              id="email-input"
              onChange={formDataChangeHandler}
              name="email"
              value={email}
              placeholder="Enter your Last Name"
              required
            />
          </div>
          <div className="flex-col">
            <label className="signup-labels " htmlFor="pwd-input">
              Password
            </label>
            <input
              className="sample-input-pwd"
              type="password"
              onChange={formDataChangeHandler}
              name="password"
              value={password}
              placeholder="Password"
              id="pwd-input"
              required
            />
          </div>
          <div className="flex-col">
            <label className="signup-labels " htmlFor="confirm-pwd-input">
              Confirm Password
            </label>
            <input
              className="sample-input-pwd"
              type="Confirm Password"
              id="confirm-pwd-input"
              onChange={formDataChangeHandler}
              name="confirmPassword"
              value={confirmPassword}
              placeholder="Confirm Password"
              required
            />
          </div>
          <div className="flex-align-item-center">
            <input type="checkbox" id="terms-conditons" required />
            <label htmlFor="terms-conditons">
              I accept all Terms & Conditions
            </label>
          </div>
          <button className="btn btn-solid">Create New Account</button>
        </div>
        <Link className="login-link flex" to="/login">
          Already have an account
          <span className="material-icons-outlined"> chevron_right </span>
        </Link>
      </form>
    </div>
  );
};

export { SignUp };
