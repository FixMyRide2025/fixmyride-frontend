import React from "react";
import { Link } from "react-router-dom";
import "./MechanicRegister.css";

const MechanicRegister = () => (
  <div className="mechanic-register-container">
    <div className="register-left">
      <div className="register-logo-row">
        <img src="/src/assets/carlogo.svg" alt="FixMyRide" className="register-logo" />
        <span className="register-brand">FixMyRide</span>
      </div>
      <div className="register-quote-icon">“</div>
      <div className="register-quote">
        In the 2025s, roadside assistance is getting smarter and faster — with platforms like FixMyRide bringing instant, on-demand help right to your location, anytime, anywhere.
      </div>
      <div className="register-quote-author">
        Vincent Obi <span className="register-verified">✔</span>
      </div>
      <div className="register-quote-corner"></div>
    </div>
    <div className="register-right">
      <div className="register-top-row">
        <Link to="/mechanic-login" className="register-back-link">&lt; Back</Link>
        <span className="register-signin-row">
          Already have an account? <Link to="/mechanic-login" className="register-signin-link">Sign In</Link>
        </span>
      </div>
      <h2 className="register-title">Join Us!</h2>
      <p className="register-desc">
        To begin this journey, tell us what type of <br />account you’d be opening.
      </p>
      <div className="register-choice-list">
        <Link to="/mechanic-register/individual" className="register-choice active">
          <div className="register-choice-icon">
            <img src="/images/Individual.png" alt="Individual" className="register-choice-img" />
          </div>
          <div className="register-choice-content">
            <strong>Individual</strong>
            <span>Manage jobs, track earnings and grow your business with FixMyRide.</span>
          </div>
          <span className="register-choice-arrow">→</span>
        </Link>
        <Link to="/mechanicregister1" className="register-choice">
          <div className="register-choice-icon">
            <img src="/images/Bussines.png" alt="Business" className="register-choice-img" />
          </div>
          <div className="register-choice-content">
            <strong>Business</strong>
            <span>Make more money and interaction with FixMyRide.</span>
          </div>
          <span className="register-choice-arrow">→</span>
        </Link>
      </div>
    </div>
  </div>
);

export default MechanicRegister;