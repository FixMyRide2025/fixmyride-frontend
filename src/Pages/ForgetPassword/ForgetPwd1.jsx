import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ForgetPwd.css";

const ForgetPwd1 = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="forget-outer-center">
      <div className="forget-container">
        {/* Back link */}
        <div className="forget-header-row">
          <Link to="/login" className="mechanic-back-link">
            <span className="mechanic-back-icon">&#8592;</span> Go back
          </Link>
        </div>
        <h2 className="forget-title">Forgot Password</h2>
        <form className="forget-form" onSubmit={(e) => {
          e.preventDefault();
          if (email.trim()) {
            window.location.href = '/forgetpwd2';
          }
        }}>
          <label htmlFor="email" className="forget-label">Enter your Email</label>
          <input
            id="email"
            type="email"
            className="forget-input"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoComplete="email"
          />
          <button type="submit" className="forget-continue-btn" disabled={!email.trim()}>
            Continue <span style={{ marginLeft: 8, fontSize: 18 }}>→</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPwd1;
