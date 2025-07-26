import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./IndividualRegister.css";

const IndividualRegister = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phoneCountry: "+94",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    localStorage.setItem(
      "step1IndividualRegister",
      JSON.stringify({
        fullName: form.fullName,
        email: form.email,
        phoneCountry: form.phoneCountry,
        phone: form.phone,
        password: form.password,
      })
    );

    navigate("/individual-residency-info");
  };

  return (
    <div className="individual-register-container">
      <div className="register-left">
        <div className="register-logo-row">
          <img
            src="/src/assets/carlogo.svg"
            alt="FixMyRide Logo"
            className="register-logo"
          />
          <span className="register-brand">FixMyRide</span>
        </div>
        <div className="register-quote-icon">&ldquo;</div>
        <div className="register-quote">
          In the 2025s, roadside assistance is getting smarter and faster — with
          platforms like FixMyRide bringing instant, on-demand help right to
          your location, anytime, anywhere.
        </div>
        <div className="register-quote-author">
          Vincent Obi <span className="register-verified">✔</span>
        </div>
        <div className="register-quote-corner"></div>
      </div>

      <div className="register-right">
        <div className="register-top-row">
          <Link to="/mechanic-register" className="register-back-link">
            &lt; Back
          </Link>
          <span className="register-step">
            STEP 01/04
            <br />
            Personal Info.
          </span>
        </div>

        <h2 className="register-title">Register Individual Account!</h2>
        <p className="register-desc">
          For the purpose of industry regulation, your <br />
          details are required.
        </p>

        <hr className="business-desc-divider" />

        <form className="register-form" onSubmit={handleSubmit}>
          <label>Your full name*</label>
          <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Enter full name"
            required
          />

          <label>Email address*</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter email address"
            required
          />

          <label>Phone number*</label>
          <div className="register-phone-row">
            <select
              className="register-phone-country"
              name="phoneCountry"
              value={form.phoneCountry}
              onChange={handleChange}
            >
              <option value="+94">+94</option>
            </select>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="705678670"
              required
            />
          </div>

          <label>Create password*</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="************"
            required
          />

          <label>Re enter password*</label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="************"
            required
          />

          <button type="submit" className="register-btn">
            Register Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default IndividualRegister;
