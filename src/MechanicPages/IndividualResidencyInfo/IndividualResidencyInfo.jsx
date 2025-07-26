import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./IndividualResidencyInfo.css";

const IndividualResidencyInfo = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    address: "",
    province: "",
    district: "",
    city: "",
    idNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("step2ResidencyInfo", JSON.stringify(form));
    navigate("/bank-verification");
  };

  return (
    <div className="residency-register-container">
      <div className="residency-left">
        <div className="residency-logo-row">
          <img
            src="/src/assets/carlogo.svg"
            alt="FixMyRide Logo"
            className="residency-logo"
          />
          <span className="residency-brand">FixMyRide</span>
        </div>
        <div className="residency-quote-icon">&ldquo;</div>
        <div className="residency-quote">
          In the 2025s, roadside assistance is getting smarter and faster — with
          platforms like FixMyRide bringing instant, on-demand help right to
          your location, anytime, anywhere.
        </div>
        <div className="residency-quote-author">
          Vincent Obi <span className="residency-verified">✔</span>
        </div>
      </div>

      <div className="residency-right">
        <div className="residency-top-row">
          <Link to="/individual-register" className="residency-back-link">
            &lt; Back
          </Link>
          <span className="residency-step">
            STEP 02/04
            <br />
            Residency Info.
          </span>
        </div>
        <h2 className="residency-title">Complete Your Profile!</h2>

        <form className="residency-form" onSubmit={handleSubmit}>
          <label>Your address</label>
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
            className="residency-province-select"
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
            className="residency-district-select"
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

          <label>Enter the ID</label>
          <input
            type="text"
            name="idNumber"
            value={form.idNumber}
            onChange={handleChange}
            placeholder="Enter the ID"
            required
          />

          <button type="submit" className="residency-btn">
            Save & Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default IndividualResidencyInfo;
