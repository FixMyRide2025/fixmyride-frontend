import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./IndividualResidencyInfo.css";

const IndividualResidencyInfo = () => {
  const navigate = useNavigate();
  return (
    <div className="residency-register-container">
      <div className="residency-left">
        <div className="residency-logo-row">
          <img src="/src/assets/carlogo.svg" alt="FixMyRide Logo" className="residency-logo" />
          <span className="residency-brand">FixMyRide</span>
        </div>
        <div className="residency-quote-icon">&ldquo;</div>
        <div className="residency-quote">
          In the 2025s, roadside assistance is getting smarter and faster — with platforms like FixMyRide bringing instant, on-demand help right to your location, anytime, anywhere.
        </div>
        <div className="residency-quote-author">
          Vincent Obi <span className="residency-verified">✔</span>
        </div>
        <div className="residency-quote-corner"></div>
      </div>
      <div className="residency-right">
        <div className="residency-top-row">
          <Link to="/mechanic-register" className="residency-back-link">&lt; Back</Link>
          <span className="residency-step">STEP 02/04<br/>Residency Info.</span>
        </div>
        <h2 className="residency-title">Complete Your Profile!</h2>
        <p className="residency-desc">For the purpose of industry regulation, your <br />details are required.</p>
        <form className="residency-form" onSubmit={e => {
          e.preventDefault();
          navigate("/bank-verification");
        }}>
          <label>Your address</label>
          <input type="text" placeholder="Enter the address" required />
          <label>Province</label>
          <select className="residency-province-select" required>
            <option value="">Select province</option>
            <option value="Western">Western</option>
            <option value="Central">Central</option>
            <option value="Southern">Southern</option>
            <option value="Northern">Northern</option>
            <option value="Eastern">Eastern</option>
            <option value="North Western">North Western</option>
            <option value="North Central">North Central</option>
            <option value="Uva">Uva</option>
            <option value="Sabaragamuwa">Sabaragamuwa</option>
          </select>
          <label>District</label>
          <select className="residency-district-select" required>
            <option value="">Select district</option>
            <option value="Colombo">Colombo</option>
            <option value="Gampaha">Gampaha</option>
            <option value="Kalutara">Kalutara</option>
            <option value="Kandy">Kandy</option>
            <option value="Matale">Matale</option>
            <option value="Nuwara Eliya">Nuwara Eliya</option>
            <option value="Galle">Galle</option>
            <option value="Matara">Matara</option>
            <option value="Hambantota">Hambantota</option>
            <option value="Jaffna">Jaffna</option>
            <option value="Kilinochchi">Kilinochchi</option>
            <option value="Mannar">Mannar</option>
            <option value="Vavuniya">Vavuniya</option>
            <option value="Mullaitivu">Mullaitivu</option>
            <option value="Batticaloa">Batticaloa</option>
            <option value="Ampara">Ampara</option>
            <option value="Trincomalee">Trincomalee</option>
            <option value="Kurunegala">Kurunegala</option>
            <option value="Puttalam">Puttalam</option>
            <option value="Anuradhapura">Anuradhapura</option>
            <option value="Polonnaruwa">Polonnaruwa</option>
            <option value="Badulla">Badulla</option>
            <option value="Monaragala">Monaragala</option>
            <option value="Ratnapura">Ratnapura</option>
            <option value="Kegalle">Kegalle</option>
          </select>
          <label>City</label>
          <input type="text" placeholder="Enter the city" required />
          <label>Upload the ID</label>
<div className="residency-upload-input-row">
  <input
    type="text"
    placeholder="Upload the ID"
    required
    className="residency-upload-input residency-upload-input-with-icon"
  />
  <button type="button" className="residency-upload-btn">
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path
        d="M17.657 11.657L9.172 20.142a4 4 0 01-5.657-5.657l10.607-10.607a3 3 0 014.243 4.243l-10.607 10.607a1 1 0 01-1.414-1.414l10.607-10.607"
        stroke="blcak"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
</div>


          <button type="submit" className="residency-btn">Save & Continue</button>
        </form>
        <div className="residency-info-secure">
          <span className="residency-info-lock-svg">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="5" y="9" width="10" height="7" rx="2" stroke="#bdbdbd" strokeWidth="1.5"/>
              <path d="M7 9V7a3 3 0 1 1 6 0v2" stroke="#bdbdbd" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="10" cy="13" r="1" fill="#bdbdbd"/>
            </svg>
          </span>
          Your info is safely secured
        </div>
      </div>
    </div>
  );
};

export default IndividualResidencyInfo;
