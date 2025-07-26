import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./BusinessMechanic.css";

const BusinessRegister1 = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    company: "",
    email: "",
    phoneCountry: "+94",
    phone: "",
    regNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    localStorage.setItem(
      "biz_step1",
      JSON.stringify({
        company: form.company,
        email: form.email,
        phoneCountry: form.phoneCountry,
        phone: form.phone,
        regNumber: form.regNumber,
        password: form.password,
      })
    );

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
          <span className="register-step">STEP 01/04<br/>Business Info.</span>
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
              <select
                className="country-code"
                name="phoneCountry"
                value={form.phoneCountry}
                onChange={handleChange}
              >
                <option value="+94">+94</option>
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

          <button className="register-btn" type="submit">Register Account</button>
        </form>
      </div>
    </div>
  );
};

export default BusinessRegister1;
