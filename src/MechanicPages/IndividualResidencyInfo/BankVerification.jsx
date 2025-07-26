import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../IndividualResidencyInfo/IndividualResidencyInfo.css";

const BankVerification = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    bankAccountNumber: "",
    bankName: "",
    bankBranch: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAccountNumberInput = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setForm((prev) => ({ ...prev, bankAccountNumber: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("step3BankVerification", JSON.stringify(form));
    navigate("/qualifications-verification");
  };

  return (
    <div className="residency-register-container">
      <div className="residency-left">{/* left side content */}</div>

      <div className="residency-right">
        <div className="residency-top-row">
          <Link to="/individual-residency-info" className="residency-back-link">
            &lt; Back
          </Link>
          <span className="residency-step">
            STEP 03/04
            <br />
            Bank Verification
          </span>
        </div>
        <h2 className="residency-title">Complete Your Profile!</h2>
        <p className="residency-desc">
          For the purpose of industry regulation, your
          <br />
          details are required.
        </p>
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
            onChange={handleAccountNumberInput}
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

          <button type="submit" className="residency-btn">
            Save & Continue
          </button>
        </form>

        <div className="residency-info-secure">{/* info lock svg & text */}</div>
      </div>
    </div>
  );
};

export default BankVerification;
