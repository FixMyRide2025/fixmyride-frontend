import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./BusinessMechanic.css";

const BusinessRegister1 = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    company: "",
    email: "",
    phone: "",
    regNumber: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/businessregister2");
  };

  return (
    <div className="business-register-container">
      <div className="register-left">
        <div className="business-register-left">
          <div className="register-logo-row">
            <img src="/src/assets/carlogo.svg" alt="FixMyRide" className="register-logo" />
            <span className="register-brand">FixMyRide</span>
          </div>
          <div className="register-quote-block">
            <div className="register-quote-icon">“</div>
            <div className="register-quote">
              In the 2025s, roadside assistance is getting smarter and faster — with platforms like FixMyRide bringing instant, on-demand help right to your location, anytime, anywhere.
            </div>
            <div className="register-quote-author">
              Vincent Obi <span className="register-verified">✔</span>
            </div>
            <div className="register-quote-corner"></div>
          </div>
        </div>
      </div>
      <div className="register-right">
        <div className="register-top-row">
        <Link to="/mechanic-register" className="register-back-link">&lt; Back</Link>
        <span className="register-step">STEP 01/04<br/>Personal Info.</span>
      </div>
        <h1 className="register-title">Register Business Account!</h1>
        <p className="register-desc">For the purpose of industry regulation, your details are required.</p>
        <hr className="business-desc-divider" />
        <form className="business-form" onSubmit={handleSubmit}>
          <label>
            Company name*
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Enter company name"
              required
            />
          </label>
          <label>
            Email address*
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter email address"
              required
            />
          </label>
          <label>
            Phone number*
            <div className="phone-row">
              <select className="country-code">
                <option value="+94">+94</option>
                <option value="+1">+1</option>
                {/* Add more country codes as needed */}
              </select>
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="705678910"
                required
              />
            </div>
          </label>
          <label>
            Business registration number*
            <input
              type="text"
              name="regNumber"
              value={form.regNumber}
              onChange={handleChange}
              placeholder="Enter registration number"
              required
            />
          </label>
          <label>
            Create password*
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="********"
              required
            />
          </label>
          <label>
            Re enter password*
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="********"
              required
            />
          </label>
          <div className="checkbox-row">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              id="agree"
            />
            <label htmlFor="agree">I agree to terms & conditions</label>
          </div>
          <button className="register-btn" type="submit">Register Account</button>
         <button className="google-btn" type="button">
          <img src="/src/assets/Google.svg" alt="Google Icon" className="google-icon" />
          Register with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default BusinessRegister1;