import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./UserRegister.css";

const UserRegister = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  return (
    <div className="login-container">
      <div className="mechanic-back-row">
                    <Link to="/login" className="mechanic-back-link">
                      <span className="mechanic-back-icon">&#8592;</span> Go back
                    </Link>
                  </div>
      <form className="login-form">
        <h2 className="login-title">Register</h2>
        <div className="login-field">
          <label htmlFor="username">Username</label>
          <div className="input-icon-group">
            <span>
              <img src="/src/assets/user.svg" alt="User" width="24" height="24" />
            </span>
            <span className="input-divider"></span>
            <input type="text" id="username" value={username} onChange={e => setUsername(e.target.value)} placeholder="Alexander" autoComplete="username" />
          </div>
        </div>
        <div className="login-field">
          <label htmlFor="email">Email</label>
          <div className="input-icon-group">
            <span>
              <img src="/src/assets/email.svg" alt="Email" width="24" height="24" />
            </span>
            <span className="input-divider"></span>
            <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="example@gmail.com" autoComplete="email" />
          </div>
        </div>
        <div className="login-field">
          <label htmlFor="password">Password</label>
          <div className="input-icon-group">
            <span>
              <img src="/src/assets/password.svg" alt="Password" width="24" height="24" />
            </span>
            <span className="input-divider"></span>
            <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="********" autoComplete="new-password" />
          </div>
        </div>
        <div className="login-field">
          <label htmlFor="rePassword">Re-enter Password</label>
          <div className="input-icon-group">
            <span>
              <img src="/src/assets/password.svg" alt="Password" width="24" height="24" />
            </span>
            <span className="input-divider"></span>
            <input type="password" id="rePassword" value={rePassword} onChange={e => setRePassword(e.target.value)} placeholder="********" autoComplete="new-password" />
          </div>
        </div>
        <button type="submit" className="login-btn">Register Now</button>
        <div className="login-divider">
          <span>Or</span>
        </div>
        <div className="login-social" style={{ justifyContent: 'center' }}>
          <button
            type="button"
            className="register-google-btn"
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
          Already have an account? <Link to="/login" className="login-link">Log In</Link>
        </div>
      </form>
    </div>
  );
};

export default UserRegister;
