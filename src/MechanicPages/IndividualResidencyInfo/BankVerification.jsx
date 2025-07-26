import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../IndividualResidencyInfo/IndividualResidencyInfo.css";

const BankVerification = () => {
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
        <div className="bank-quote-corner"></div>
      </div>
      <div className="residency-right">
        <div className="residency-top-row">
          <Link to="/individual-residency-info" className="residency-back-link">&lt; Back</Link>
          <span className="residency-step">STEP 03/04<br/>Bank Verification</span>
        </div>
        <h2 className="residency-title">Complete Your Profile!</h2>
        <p className="residency-desc">For the purpose of industry regulation, your <br />
           details are required.</p>
        <hr className="residency-divider" />
        <form className="residency-form" onSubmit={e => {
          e.preventDefault();
          navigate("/qualifications-verification");
        }}>
          <label>Bank account number</label>
          <input 
          type="tel" 
          inputMode="numeric" 
          placeholder="Enter account number" 
          required 
          pattern="[0-9]*"
          onInput={(e) => e.target.value = e.target.value.replace(/\D/g, '')}/>
          <label>Bank name</label>
          <input type="text" placeholder="Enter the bank name" required />
          <label>Bank branch</label>
          <input type="text" placeholder="Enter the bank branch" required />
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

export default BankVerification;
