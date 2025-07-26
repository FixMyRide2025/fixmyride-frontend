import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./BusinessMechanic.css";

const BusinessRegister3 = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    bankAccountNumber: "",
    bankName: "",
    bankBranch: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleAccountNumberInput = (e) => {
    e.target.value = e.target.value.replace(/\D/g, "");
    setForm((p) => ({ ...p, bankAccountNumber: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("biz_step3", JSON.stringify(form));
    navigate("/businessregister4");
  };

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
          <Link to="/businessregister2" className="residency-back-link">&lt; Back</Link>
          <span className="residency-step">STEP 03/04<br/>Bank Verification</span>
        </div>
        <h2 className="residency-title">Complete Your Profile!</h2>
        <p className="residency-desc">For the purpose of industry regulation, your <br />details are required.</p>
        <hr className="business-desc-divider" />

        <form className="residency-form" onSubmit={handleSubmit}>
          <label>Bank account number</label>
          <input 
            type="tel" 
            inputMode="numeric" 
            name="bankAccountNumber"
            placeholder="Enter account number" 
            required 
            pattern="[0-9]*"
            value={form.bankAccountNumber}
            onInput={handleAccountNumberInput}
          />

          <label>Bank name</label>
          <input
            type="text"
            name="bankName"
            placeholder="Enter the bank name"
            required
            value={form.bankName}
            onChange={handleChange}
          />

          <label>Bank branch</label>
          <input
            type="text"
            name="bankBranch"
            placeholder="Enter the bank branch"
            required
            value={form.bankBranch}
            onChange={handleChange}
          />

          <button type="submit" className="residency-btn">Save & Continue</button>
        </form>

        <div className="residency-infos-secure">
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

export default BusinessRegister3;
