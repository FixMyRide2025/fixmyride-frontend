import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordIcon from "../../assets/Password.svg";
import "./ForgetPwd.css"; 

const ResetPassword2 = () => {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const isValid = password.length >= 8 && password === confirm;

  return (
    <div className="forget-outer-center">
      <div className="forget-container">
        {/* Back link */}
        <div className="forget-header-row">
          <Link to="/forgetpwd1" className="mechanic-back-link">
            <span className="mechanic-back-icon">&#8592;</span> Go back
          </Link>
        </div>
        <h2 className="forget-title">New Password</h2>
        <form className="forget-form" onSubmit={e => {
          e.preventDefault();
          if (password.length < 8) {
            setError("Please enter an 8 character password");
            return;
          }
          if (password !== confirm) {
            setError("Passwords do not match");
            return;
          }
          setError("");
          navigate("/successfullyreset1");
        }}>

          <label className="forget-label" htmlFor="new-password">Enter new password</label>
          <div className="forget-password-input-row">
            <img src={PasswordIcon} alt="lock" className="forget-password-icon" />
            <input
              id="new-password"
              type="password"
              style={{ background: '#000', border: 'none', color: '#fff', outline: 'none', width: '100%', fontSize: '1.1rem', padding: '10px 18px', borderRadius: '6px' }}
              value={password}
              onChange={e => {
                setPassword(e.target.value);
                if (error) setError("");
              }}
              autoComplete="new-password"
              minLength={8}
              required
              placeholder="********"
            />
          </div>
          {error === "Please enter an 8 character password" && (
            <div className="forget-error" style={{ color: '#ff4d4f', margin: '8px 0 0 0', textAlign: 'left', fontWeight: 500, fontSize: '0.98rem' }}>
              {error}
            </div>
          )}

          <label className="forget-label" htmlFor="confirm-password">Confirm password</label>
          <div className="forget-password-input-row">
            <img src={PasswordIcon} alt="lock" className="forget-password-icon" />
            <input 
              id="confirm-password"
              type="password"
              style={{ background: '#000', border: 'none', color: '#fff', outline: 'none', width: '100%', fontSize: '1.1rem', padding: '10px 18px', borderRadius: '6px' }}
              value={confirm}
              onChange={e => {
                setConfirm(e.target.value);
                if (error) setError("");
              }}
              autoComplete="new-password"
              minLength={8}
              required
              placeholder="********"
            />
          </div>

          {error && (
            <div className="forget-error" style={{ color: '#ff4d4f', margin: '12px 0', textAlign: 'center', fontWeight: 500 }}>
              {error}
            </div>
          )}
          <button type="submit" className="forget-continue-btn" disabled={!isValid}>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword2;
