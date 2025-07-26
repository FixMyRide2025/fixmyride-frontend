import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ForgetPwd.css";

const ForgetPwd1 = () => {
  const inputs = [useRef(), useRef(), useRef(), useRef()];
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Move focus to next input automatically and update OTP state
  const handleChange = (e, idx) => {
    const val = e.target.value.replace(/[^0-9]/g, "");
    if (val.length > 1) return;
    const newOtp = [...otp];
    newOtp[idx] = val;
    setOtp(newOtp);
    if (val.length === 1 && idx < 3) {
      inputs[idx + 1].current.focus();
    }
    if (error) setError("");
  };

  return (
    <div className="forget-outer-center">
      <div className="forget-container">
        {/* Back link */}
        <div className="forget-header-row">
          <Link to="/forgetpwd" className="mechanic-back-link">
            <span className="mechanic-back-icon">&#8592;</span> Go back
          </Link>
        </div>
        <h2 className="forget-title">Verfication</h2>
        <div className="forget-desc">Enter your 4 digits code that you received on your email.</div>
        <form className="forget-form" onSubmit={e => {
          e.preventDefault();
          if (otp.some(d => d === "")) {
            setError("Please enter the 4-digit code");
            return;
          }
          setError("");
          navigate("/resetpassword2");
        }}>
          <div className="forget-otp-row">
            {[0,1,2,3].map((i) => (
              <input
                key={i}
                type="text"
                maxLength={1}
                className="forget-otp-input"
                ref={inputs[i]}
                value={otp[i]}
                onChange={e => handleChange(e, i)}
                inputMode="numeric"
                pattern="[0-9]*"
                autoFocus={i === 0}
              />
            ))}
          </div>
          {error && (
            <div className="forget-error" style={{ color: '#ff4d4f', margin: '12px 0', textAlign: 'center', fontWeight: 500 }}>
              {error}
            </div>
          )}
          <button type="submit" className="forget-continue-btn">
            Continue <span style={{ marginLeft: 8, fontSize: 18 }}>→</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPwd1;
