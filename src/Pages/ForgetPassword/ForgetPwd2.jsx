import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ForgetPwd.css";

const ForgetPwd2 = () => {
  const inputs = [useRef(), useRef(), useRef(), useRef()];
  const navigate = useNavigate();

  // Move focus to next input automatically
  const handleChange = (e, idx) => {
    if (e.target.value.length === 1 && idx < 3) {
      inputs[idx + 1].current.focus();
    }
  };

  return (
    <div className="forget-outer-center">
      <div className="forget-container">
        {/* Back link */}
        <div className="forget-header-row">
          <Link to="/forgetpwd1" className="mechanic-back-link">
            <span className="mechanic-back-icon">&#8592;</span> Go back
          </Link>
        </div>
        <h2 className="forget-title">Verfication</h2>
        <div className="forget-desc">Enter your 4 digits code that you received on your email.</div>
        <form className="forget-form" onSubmit={e => { e.preventDefault(); navigate("/resetpassword3"); }}>
          <div className="forget-otp-row">
            {[0,1,2,3].map((i) => (
              <input
                key={i}
                type="text"
                maxLength={1}
                className="forget-otp-input"
                ref={inputs[i]}
                onChange={e => handleChange(e, i)}
                inputMode="numeric"
                pattern="[0-9]*"
                autoFocus={i === 0}
              />
            ))}
          </div>
          <button type="submit" className="forget-continue-btn">
            Continue <span style={{ marginLeft: 8, fontSize: 18 }}>→</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPwd2;
