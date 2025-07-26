import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./IndividualRegister.css";

const IndividualRegister = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/individual-residency-info");
  };
  return (
    <div className="individual-register-container">
      <div className="register-left">
        <div className="register-logo-row">
          <img src="/src/assets/carlogo.svg" alt="FixMyRide Logo" className="register-logo" />
          <span className="register-brand">FixMyRide</span>
        </div>
        <div className="register-quote-icon">&ldquo;</div>
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
          <Link to="/mechanic-register" className="register-back-link">&lt; Back</Link>
          <span className="register-step">STEP 01/04<br/>Personal Info.</span>
        </div>
        <h2 className="register-title">Register Individual Account!</h2>
        <p className="register-desc">For the purpose of industry regulation, your <br />details are required.</p>
        <form className="register-form" onSubmit={handleSubmit}>
          <label>Your full name*</label>
          <input type="text" placeholder="Enter full name" required />
          <label>Email address*</label>
          <input type="email" placeholder="Enter email address" required />
          <label>Phone number*</label>
          <div className="register-phone-row">
            <select className="register-phone-country">
              <option value="+94">+94</option>
              {/* Add more country codes if needed */}
            </select>
            <input type="tel" placeholder="705678670" required />
          </div>
          <label>Create password*</label>
          <input type="password" placeholder="************" required />
          <label>Re enter password*</label>
          <input type="password" placeholder="************" required />
          <div className="register-checkbox-row">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">I agree to terms & conditions</label>
          </div>
          <button type="submit" className="register-btn">Register Account</button>
        </form>
        <div className="register-or-divider">
          <div className="register-or-divider-line"></div>
          <span className="register-or-divider-text">Or</span>
          <div className="register-or-divider-line"></div>
        </div>
        <button className="register-google-btn">
          <img src="/src/assets/Google.svg" alt="Google" className="register-google-icon" />
          Register with Google
        </button>
      </div>
    </div>
  );
};

export default IndividualRegister;
