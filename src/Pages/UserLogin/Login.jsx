import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="login-container">
      <div className="mechanic-back-row">
              <Link to="/" className="mechanic-back-link">
                <span className="mechanic-back-icon">&#8592;</span> Go back
              </Link>
            </div>
      <form className="login-form">
        <h2 className="login-title">Log In</h2>
        <div className="login-field">
          <label htmlFor="username">Username</label>
          <div className="input-icon-group">
            <span>
              <img src="/src/assets/email.svg" alt="Email" width="28" height="55" />
            </span>
            <span className="input-divider"></span>
            <input type="text" id="username" value={username} onChange={e => setUsername(e.target.value)} placeholder="Alexander" autoComplete="username" />
          </div>
        </div>
        <div className="login-field">
          <label htmlFor="password">Password</label>
          <div className="input-icon-group">
            <span>
              <img src="/src/assets/password.svg" alt="Password" width="28" height="28" />
            </span>
            <span className="input-divider"></span>
            <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="********" autoComplete="current-password" />
          </div>
        </div>
        <div className="login-actions">
          <Link to="/forgetpwd1" className="forgot-link">Forget password?</Link>
        </div>
        <button type="submit" className="login-btn">Log In</button>
        <div className="login-divider">
          <span>Or</span>
        </div>
        <div className="login-social">
          <button
            type="button"
            className="google-signin-btn"
            aria-label="Sign in with Google"
            style={{
              display: 'flex',
              alignItems: 'center',
              background: '#4285F4',
              border: 'none',
              borderRadius: '14px',
              padding: '0 24px',
              height: '45px',
              width: '260px',
              cursor: 'pointer',
              boxShadow: 'none',
              outline: 'none',
              margin: '0 auto',
              fontFamily: 'inherit',
              fontWeight: 500
            }}
          >
            <img src="/src/assets/Google.svg" alt="Google" style={{ width: '24px', height: '24px', marginRight: '12px' }} />
            <span style={{ color: '#fff', fontSize: '1rem', fontWeight: 500 }}>Sign in with Google</span>
          </button>
        </div>
        <div className="login-signup">
          Don't have an account? <Link to="/register" className="signup-link">Sign Up</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
