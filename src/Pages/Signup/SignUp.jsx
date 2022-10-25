import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../contexts/auth-context";
import { signUpSevice } from "../../services/AuthSevices/auth";
import "./SignUp.css";
const SignUp = () => {
  const navigate = useNavigate();
  const { authDispatch } = useAuth();
  const initailSingUpData = {
    firstName: "",
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
  const { firstName, email, password, confirmPassword } = signUpData;
  const formDataClickHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords must match with Confirm password");
    } else {
      try {
        const { data } = await signUpSevice(firstName, email, password);
        console.log(data);
        const { success, token, message, user } = data;
        if (success) {
          authDispatch({
            type: "SIGNUP_SUCCESS",
            payload: { token, user },
          });
        }
        localStorage.setItem("token", token);
        localStorage.setItem("userData", JSON.stringify(user));
        toast.success(message);
        navigate("/home");
        setSignUpData(initailSingUpData);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <div className="login-wrapper signup-box ">
      <form className="flex-col form-container" onSubmit={formDataClickHandler}>
        <h5 className="signup-heading">SignUp</h5>
        <div className="input-container flex-col">
          <div className="flex-col">
            <label className="signup-labels " htmlFor="full-name-input">
              Full Name
            </label>
            <input
              className="input-name sample-input-email"
              type="text"
              id="full-name-input"
              onChange={formDataChangeHandler}
              name="firstName"
              value={firstName}
              placeholder="Enter your First Name"
              required
            />
          </div>
          <div className="flex-col">
            <label className="signup-labels " htmlFor="email-input">
              Email Address
            </label>
            <input
              className=" input-last-name sample-input-email"
              type="email"
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
              type="password"
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
