import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordIcon from "../../assets/Password.svg";
import "./ForgetPwd.css"; 

const ResetPassword3 = () => {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate();
  const isValid = password.length >= 6 && password === confirm;

  return (
    <div className="forget-outer-center">
      <div className="forget-container">
        {/* Back link */}
        <div className="forget-header-row">
          <Link to="/forgetpwd2" className="mechanic-back-link">
            <span className="mechanic-back-icon">&#8592;</span> Go back
          </Link>
        </div>
        <h2 className="forget-title">New Password</h2>
        <form className="forget-form" onSubmit={e => {
          e.preventDefault();
          if (isValid) {
            navigate("/successfullyreset");
          }
        }}>

          <label className="forget-label" htmlFor="new-password">Enter new password</label>
          <div className="forget-password-input-row">
            <img src={PasswordIcon} alt="lock" className="forget-password-icon" placeholder="********" />
            <input
              id="new-password"
              type="password"
              style={{ background: '#000', border: 'none', color: '#fff', outline: 'none', width: '100%', fontSize: '1.1rem', padding: '10px 18px', borderRadius: '6px' }}
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoComplete="new-password"
              minLength={6}
              required
            />
          </div>

          <label className="forget-label" htmlFor="confirm-password">Confirm password</label>
          <div className="forget-password-input-row">
            <img src={PasswordIcon} alt="lock" className="forget-password-icon" placeholder="********"/>
            <input 
              id="confirm-password"
              type="password"
              style={{ background: '#000', border: 'none', color: '#fff', outline: 'none', width: '100%', fontSize: '1.1rem', padding: '10px 18px', borderRadius: '6px' }}
              value={confirm}
              onChange={e => setConfirm(e.target.value)}
              autoComplete="new-password"
              minLength={6}
              required
            />
          </div>

          <button type="submit" className="forget-continue-btn" disabled={!isValid}>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword3;
