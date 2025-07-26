import React from "react";
import { useNavigate } from "react-router-dom";
import "./ForgetPwd.css";

const SuccessfullyReset = () => {
  const navigate = useNavigate();
  return (
    <div className="forget-outer-center">
      <div className="forget-container" style={{ alignItems: 'center', textAlign: 'center' }}>
        <div style={{ marginBottom: 24 }}>
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="80" height="80" rx="12" stroke="white" strokeWidth="8" fill="none"/>
            <path d="M44 66L60 80L80 52" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h2 className="forget-title">Successfully Reset!</h2>
        <div className="forget-desc" style={{ marginBottom: 32 }}>
          Your password has been reset successfully
        </div>
        <button className="forget-continue-btn" style={{ maxWidth: 350 }} onClick={() => navigate('/login')}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default SuccessfullyReset;
