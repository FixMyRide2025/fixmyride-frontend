import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./BusinessMechanic.css";

const BusinessRegister2 = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    address: "",
    province: "",
    district: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("biz_step2", JSON.stringify(form));
    navigate("/businessregister3");
  };

  return (
    <div className="register-container">
      <div className="register-left">
        <div className="register-logo-row">
          <img src="/src/assets/carlogo.svg" alt="FixMyRide" className="register-logo" />
          <span className="register-brand">FixMyRide</span>
        </div>
        <div className="quote-block">
          <div className="quote-icon">“</div>
          <div className="quote-text">
            In the 2025s, roadside assistance is getting smarter and faster — with platforms like FixMyRide bringing instant, on-demand help right to your location, anytime, anywhere.
          </div>
          <div className="quote-author">
            Vincent Obi <span className="verified-icon">✔</span>
          </div>
          <div className="business-quote-corner"></div>
        </div>
      </div>

      <div className="register-right">
        <div className="top-row">
          <Link to="/businessregister1" className="register-back-link">&lt; Back</Link>
          <span className="step-text">STEP 02/04<br />Residency Info.</span>
        </div>
        <h1 className="business-title">Complete Your Profile!</h1>
        <p className="business-desc">For the purpose of industry regulation, your <br />details are required.</p>
        <hr className="business-desc-divider" />

        <form className="business-form" onSubmit={handleSubmit}>
          <label>Your Address</label>
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Enter the address"
            required
          />

          <label>Province</label>
          <select
            name="province"
            className="province-select"
            value={form.province}
            onChange={handleChange}
            required
          >
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
          <select
            name="district"
            className="district-select"
            value={form.district}
            onChange={handleChange}
            required
          >
            <option value="">Select district</option>
            <option value="Colombo">Colombo</option>
            <option value="Gampaha">Gampaha</option>
            <option value="Kalutara">Kalutara</option>
            <option value="Kandy">Kandy</option>
            <option value="Kegalle">Kegalle</option>
          </select>

          <label>City</label>
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="Enter the city"
            required
          />

          <button type="submit" className="register-btn">Save & Continue</button>

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
        </form>
      </div>
    </div>
  );
};

export default BusinessRegister2;
