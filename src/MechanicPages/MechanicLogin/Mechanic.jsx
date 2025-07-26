import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Mechanic.css";

const MechanicLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="mechanic-login-container">
      <div className="mechanic-back-row">
        <Link to="/" className="mechanic-back-link">
          <span className="mechanic-back-icon">&#8592;</span> Go back
        </Link>
      </div>
      <form className="mechanic-login-form">
        <h2 className="mechanic-login-title">Mechanic Log In</h2>
        <div className="mechanic-login-field">
          <label htmlFor="username">Username</label>
          <div className="mechanic-input-icon-group">
            <span>
              <img src="/src/assets/email.svg" alt="Email" />
            </span>
            <span className="mechanic-input-divider"></span>
            <input
              type="text"
              id="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="Alexander"
              autoComplete="username"
            />
          </div>
        </div>
        <div className="mechanic-login-field">
          <label htmlFor="password">Password</label>
          <div className="mechanic-input-icon-group">
            <span>
              <img src="/src/assets/password.svg" alt="Password" />
            </span>
            <span className="mechanic-input-divider"></span>
            <input
              type="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="********"
              autoComplete="current-password"
            />
          </div>
        </div>
        <div className="mechanic-login-actions">
          <a href="#" className="mechanic-forgot-link">Forget password?</a>
        </div>
        <button type="submit" className="mechanic-login-btn">Log In</button>
        <div className="mechanic-login-divider">
          <span>Or</span>
        </div>
        <div className="mechanic-login-social">
          <button type="button" className="mechanic-social-btn">
            <img src="/src/assets/Google.svg" alt="Google" />
          </button>
          <button type="button" className="mechanic-social-btn">
            <img src="/src/assets/Facebook.svg" alt="Facebook" />
          </button>
          <button type="button" className="mechanic-social-btn">
            <img src="/src/assets/Apple.svg" alt="Apple" />
          </button>
        </div>
        <div className="mechanic-login-signup">
          Don’t have an account? <Link to="/mechanic-register" className="mechanic-signup-link">Sign Up</Link>
        </div>
      </form>
    </div>
  );
};

export default MechanicLogin;