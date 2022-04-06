import heroImg from "../../asserts/landingPageImg.png";
import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div className="landing-page-wrapper flex">
      <div className="hero-container">
        <img className="hero-img" src={heroImg} alt="landingPage" />
      </div>
      <div className="landing-page-container flex-col">
        <h4 className="hero-text">
          Collect Your <span>Thoughts .</span>
        </h4>
        <p className="hero-description">
          Take notes the simple way for free. Forever
        </p>
        <Link to="/login">
          <button className="btn  landing-btn ">Start Now</button>
        </Link>
      </div>
    </div>
  );
};

export { LandingPage };
